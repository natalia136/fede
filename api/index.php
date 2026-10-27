<?php
/* API de Aventura Escolar para hosting compartido con PHP (por ejemplo Hostinger).
   Misma API que server.js: cuentas con email y contraseña, perfiles por niño,
   administración de usuarios e IA opcional. Guarda todo en un archivo JSON.
   Configuración opcional en api/config.php (ver api/config.example.php). */
declare(strict_types=1);

// Lee la configuración de api/config.php y también de api/config.sample.php (por si las claves se pusieron ahí).
// Si alguno tiene un error de escritura, la app sigue funcionando y /api/health dice en qué línea está.
$CONFIG_ERROR = null;
function read_config(string $file, ?string &$err): array {
  if (!is_file($file)) return [];
  try { $c = require $file; } catch (\Throwable $e) { $err = 'api/' . basename($file) . ', línea ' . $e->getLine() . ': ' . $e->getMessage(); return []; }
  if (!is_array($c)) { $err = 'api/' . basename($file) . ' debe empezar con <?php y terminar con ]; (return [ ... ];)'; return []; }
  return $c;
}
$config = read_config(__DIR__ . '/config.sample.php', $CONFIG_ERROR);
foreach (read_config(__DIR__ . '/config.php', $CONFIG_ERROR) as $k => $v) {
  // config.php manda, pero un valor vacío (por ejemplo 'api_key' => '') no borra el de config.sample.php
  if (is_array($v) && is_array($config[$k] ?? null)) { foreach ($v as $kk => $vv) if ($vv !== '' && $vv !== null) $config[$k][$kk] = $vv; }
  elseif ($v !== '' && $v !== null) $config[$k] = $v;
}
@date_default_timezone_set((string) ($config['timezone'] ?? 'America/Bogota')); // fechas de copias y registros en hora local
$DATA_DIR = rtrim($config['data_dir'] ?? (__DIR__ . '/../data'), '/');
$DB_FILE = $DATA_DIR . '/db.json';
// Claves y opciones guardadas desde la pantalla "Configuración" de la app (solo administradores).
// Viven en data/settings.json (carpeta protegida) y tienen prioridad sobre config.php.
$SETTINGS_FILE = $DATA_DIR . '/settings.json';
$SETTINGS = is_file($SETTINGS_FILE) ? (json_decode((string) @file_get_contents($SETTINGS_FILE), true) ?: []) : [];
foreach (['ai', 'voice'] as $sec) {
  $over = array_filter($SETTINGS[$sec] ?? [], fn($v) => $v !== '' && $v !== null);
  $config[$sec] = array_merge($config[$sec] ?? [], $over);
}
$AI = array_merge(['enabled' => true, 'api_key' => '', 'model' => 'claude-haiku-5-5', 'effort' => 'low', 'max_tokens' => 16000, 'daily_limit_per_user' => 40, 'tasks' => ['course' => true, 'practice' => true, 'explain' => true]], $config['ai'] ?? []);
if ($AI['api_key'] === '') $AI['api_key'] = $config['anthropic_api_key'] ?? (getenv('ANTHROPIC_API_KEY') ?: '');
$AI_KEY = ($AI['enabled'] && $AI['api_key'] !== '') ? $AI['api_key'] : '';
$AI_TASKS = $AI_KEY === '' ? [] : array_keys(array_filter($AI['tasks'] ?? []));
// crear cursos se hace por partes (plan + una lección a la vez) para no pasar el tiempo límite del hosting
if (in_array('course', $AI_TASKS, true)) array_push($AI_TASKS, 'course_plan', 'course_lesson');
$VOICE = array_merge(['enabled' => true, 'api_key' => '', 'voice_id' => '', 'voice_id_en' => '', 'model' => 'eleven_flash_v2_5', 'stability' => 0.5, 'similarity' => 0.75, 'style' => 0.2, 'speed' => 0.95, 'daily_chars_per_user' => 20000], $config['voice'] ?? []);
$VOICE_ON = $VOICE['enabled'] && $VOICE['api_key'] !== '' && $VOICE['voice_id'] !== '';
const SESSION_DAYS = 30;
const MAX_BODY = 2097152;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function send(int $code, $data): void { http_response_code($code); echo json_encode($data, JSON_UNESCAPED_UNICODE); exit; }
function fail(int $code, string $msg): void { send($code, ['error' => $msg]); }
function now_ms(): int { return (int) round(microtime(true) * 1000); }
function iso(): string { return gmdate('Y-m-d\TH:i:s.v\Z'); }
function new_id(): string { return bin2hex(random_bytes(8)); }
function body(): array {
  $raw = file_get_contents('php://input', false, null, 0, MAX_BODY + 1);
  if ($raw === false || strlen($raw) > MAX_BODY) fail(413, 'Los datos son demasiado grandes.');
  if ($raw === '') return [];
  $d = json_decode($raw, true);
  if (!is_array($d)) fail(400, 'Datos no válidos.');
  return $d;
}

/* ---------- base de datos JSON con bloqueo ---------- */
function protect_dir(string $dir): void {
  if (!is_dir($dir)) mkdir($dir, 0700, true);
  if (!is_file("$dir/.htaccess")) file_put_contents("$dir/.htaccess", "Require all denied\nDeny from all\n");
  if (!is_file("$dir/index.html")) file_put_contents("$dir/index.html", '');
}
/** Abre la base con bloqueo exclusivo; $fn recibe la base por referencia y devuelve el resultado. */
function with_db(callable $fn) {
  global $DATA_DIR, $DB_FILE;
  protect_dir($DATA_DIR);
  $fh = fopen($DB_FILE, 'c+');
  if (!$fh) fail(500, 'No se pudo abrir la base de datos. Revisa los permisos de la carpeta data.');
  flock($fh, LOCK_EX);
  $raw = stream_get_contents($fh);
  $db = $raw ? json_decode($raw, true) : null;
  if (!is_array($db)) $db = ['users' => [], 'sessions' => [], 'profiles' => [], 'attempts' => []];
  foreach (['users', 'sessions', 'profiles', 'attempts'] as $k) if (!isset($db[$k])) $db[$k] = [];
  $before = json_encode($db);
  try { $out = $fn($db); }
  finally {
    if (json_encode($db) !== $before) {
      ftruncate($fh, 0); rewind($fh);
      fwrite($fh, json_encode($db, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
      fflush($fh);
    }
    flock($fh, LOCK_UN); fclose($fh);
  }
  return $out;
}

/* ---------- sesiones ---------- */
function bearer(): string {
  $h = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
  if (!$h && function_exists('getallheaders')) { foreach (getallheaders() as $k => $v) if (strtolower($k) === 'authorization') $h = $v; }
  if (preg_match('/^Bearer ([a-f0-9]{64})$/', $h, $m)) return $m[1];
  $alt = $_SERVER['HTTP_X_AUTH_TOKEN'] ?? '';
  return preg_match('/^[a-f0-9]{64}$/', $alt) ? $alt : '';
}
function new_session(array &$db, string $uid): string {
  $tok = bin2hex(random_bytes(32)); $t = now_ms();
  $db['sessions'] = array_values(array_filter($db['sessions'], fn($s) => $s['expires'] > $t));
  $db['sessions'][] = ['tokenHash' => hash('sha256', $tok), 'userId' => $uid, 'expires' => $t + SESSION_DAYS * 86400000];
  return $tok;
}
function &find_user(array &$db, string $id) { foreach ($db['users'] as $i => $u) if ($u['id'] === $id) return $db['users'][$i]; $n = null; return $n; }
function auth_user(array &$db) {
  $tok = bearer(); if (!$tok) return null;
  $h = hash('sha256', $tok);
  foreach ($db['sessions'] as $s) if (hash_equals($s['tokenHash'], $h) && $s['expires'] > now_ms()) { $u = &find_user($db, $s['userId']); return $u; }
  return null;
}
function public_user(array $u): array { return ['id' => $u['id'], 'email' => $u['email'], 'name' => $u['name'], 'role' => $u['role'], 'created' => $u['created'], 'lastLogin' => $u['lastLogin'] ?? null]; }

/* ---------- ruta ---------- */
$route = trim((string) ($_GET['route'] ?? ''), '/');
if ($route === '') { $p = parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH) ?: ''; $i = strpos($p, '/api/'); $route = $i === false ? '' : trim(substr($p, $i + 5), '/'); }
$parts = $route === '' ? [] : explode('/', $route);
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$EMAIL = '/^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/';

if ($method === 'GET' && ($parts[0] ?? '') === 'health') send(200, ['ok' => true, 'ai' => $AI_KEY !== '', 'aiTasks' => $AI_TASKS, 'voice' => $VOICE_ON, 'configError' => $CONFIG_ERROR, 'appName' => $config['app_name'] ?? null]);

if ($method === 'POST' && ($parts[0] ?? '') === 'register') {
  $b = body(); $email = strtolower(trim((string) ($b['email'] ?? ''))); $name = mb_substr(trim((string) ($b['name'] ?? '')), 0, 40); $pw = (string) ($b['password'] ?? '');
  if (!preg_match($EMAIL, $email)) fail(400, 'Escribe un email válido.');
  if (strlen($pw) < 8) fail(400, 'La contraseña debe tener al menos 8 caracteres.');
  if ($name === '') fail(400, 'Escribe tu nombre.');
  $hash = password_hash($pw, PASSWORD_DEFAULT);
  $r = with_db(function (&$db) use ($email, $name, $hash) {
    foreach ($db['users'] as $u) if ($u['email'] === $email) return null;
    $user = ['id' => new_id(), 'email' => $email, 'name' => $name, 'role' => count($db['users']) ? 'user' : 'admin', 'created' => iso(), 'lastLogin' => iso(), 'pw' => $hash];
    $db['users'][] = $user;
    return ['token' => new_session($db, $user['id']), 'user' => public_user($user)];
  });
  if (!$r) fail(409, 'Ya existe una cuenta con ese email. Inicia sesión.');
  send(201, $r);
}

if ($method === 'POST' && ($parts[0] ?? '') === 'login') {
  $b = body(); $email = strtolower(trim((string) ($b['email'] ?? ''))); $pw = (string) ($b['password'] ?? '');
  $r = with_db(function (&$db) use ($email, $pw, $ip) {
    $t = now_ms(); $list = array_values(array_filter($db['attempts'][$ip] ?? [], fn($x) => $t - $x < 900000));
    if (count($list) >= 10) { $db['attempts'][$ip] = $list; return 'limit'; }
    foreach ($db['users'] as $i => $u) {
      if ($u['email'] === $email && password_verify($pw, $u['pw'])) {
        $db['users'][$i]['lastLogin'] = iso(); unset($db['attempts'][$ip]);
        return ['token' => new_session($db, $u['id']), 'user' => public_user($db['users'][$i])];
      }
    }
    $list[] = $t; $db['attempts'][$ip] = $list; return null;
  });
  if ($r === 'limit') fail(429, 'Demasiados intentos. Espera 15 minutos y vuelve a intentarlo.');
  if (!$r) fail(401, 'Email o contraseña incorrectos.');
  send(200, $r);
}

/* ---------- llamada a Claude (la usan todos los módulos: cursos, práctica, explicaciones y la prueba) ---------- */
// Si Anthropic rechaza algún parámetro opcional (esfuerzo, pensamiento, respaldo), se reintenta solo con lo básico.
function ai_call(string $prompt, int $maxTokens): array {
  global $AI;
  $model = (string) $AI['model']; $key = (string) $AI['api_key'];
  $fallback = (bool) preg_match('/opus|sonnet|fable/', $model); // Haiku no acepta modelo de respaldo
  $full = ['model' => $model, 'max_tokens' => $maxTokens, 'messages' => [['role' => 'user', 'content' => $prompt]], 'output_config' => ['effort' => (string) $AI['effort']]];
  if (preg_match('/haiku/', $model)) $full['thinking'] = ['type' => 'disabled']; // respuestas más rápidas
  if ($fallback) $full['fallbacks'] = 'default';
  $plain = ['model' => $model, 'max_tokens' => $maxTokens, 'messages' => [['role' => 'user', 'content' => $prompt]]];
  foreach ([$full, $plain] as $n => $body) {
    $ch = curl_init('https://api.anthropic.com/v1/messages');
    $headers = ['content-type: application/json', 'x-api-key: ' . $key, 'anthropic-version: 2023-06-01'];
    if ($n === 0 && $fallback) $headers[] = 'anthropic-beta: server-side-fallback-2026-07-01';
    curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 100, CURLOPT_HTTPHEADER => $headers, CURLOPT_POSTFIELDS => json_encode($body, JSON_UNESCAPED_UNICODE)]);
    $raw = curl_exec($ch); $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE); $cerr = curl_error($ch); curl_close($ch);
    if ($raw === false) return ['status' => 502, 'error' => 'No se pudo conectar con la IA: ' . $cerr];
    $data = json_decode((string) $raw, true) ?: [];
    if ($code === 400 && $n === 0) continue; // parámetro no aceptado: reintento simple
    if ($code === 401) return ['status' => 502, 'error' => 'La clave de Anthropic no es válida. Revísala en Cuenta → Claves de IA y voz.'];
    if ($code === 402 || $code === 429) return ['status' => 502, 'error' => 'Anthropic dice que no hay saldo o se llegó al límite de la cuenta. Revisa console.anthropic.com → Billing.'];
    if ($code === 404) return ['status' => 502, 'error' => "El modelo «$model» no está disponible para tu clave. Elige otro en Cuenta → Claves de IA y voz."];
    if ($code < 200 || $code >= 300) return ['status' => 502, 'error' => (string) ($data['error']['message'] ?? "Error $code de la IA.")];
    if (($data['stop_reason'] ?? '') === 'refusal') return ['status' => 422, 'error' => 'refusal'];
    $text = ''; foreach ($data['content'] ?? [] as $c) if (($c['type'] ?? '') === 'text') $text .= $c['text'];
    if ($text === '' ) return ['status' => 502, 'error' => 'La IA no devolvió texto. Intenta de nuevo.'];
    return ['text' => $text, 'model' => $data['model'] ?? $model];
  }
  return ['status' => 502, 'error' => 'La IA no aceptó la petición. Revisa el modelo elegido en Cuenta → Claves de IA y voz.'];
}

/* ---------- IA: tareas definidas en ai/prompts.json ---------- */
if ($method === 'POST' && ($parts[0] ?? '') === 'ai') {
  $b = body(); $task = (string) ($b['task'] ?? ''); $vars = is_array($b['vars'] ?? null) ? $b['vars'] : [];
  $limit = (int) $AI['daily_limit_per_user'];
  if ($AI_KEY === '') fail(503, 'La IA no está configurada en el servidor.');
  if (!in_array($task, $AI_TASKS, true)) fail(400, 'Ese uso de la IA no está activado.');
  @set_time_limit(120);
  $free = $task === 'course_lesson'; // las lecciones de un curso cuentan como parte del mismo uso (el plan)
  $check = with_db(function (&$db) use ($limit, $free) {
    $user = &auth_user($db); if (!$user) return 'auth';
    if ($free) return 'ok';
    $day = gmdate('Y-m-d'); $used = $db['ai_usage'][$user['id']][$day] ?? 0;
    if ($limit > 0 && $used >= $limit) return 'limit';
    $db['ai_usage'] = [$user['id'] => [$day => $used + 1]] + array_map(fn($d) => array_intersect_key($d, [$day => 1]), $db['ai_usage'] ?? []);
    return 'ok';
  });
  if ($check === 'auth') fail(401, 'Tu sesión terminó. Inicia sesión de nuevo.');
  if ($check === 'limit') fail(429, "Llegaste al límite de $limit usos de IA por hoy. Vuelve mañana.");
  $prompts = json_decode((string) @file_get_contents(__DIR__ . '/../ai/prompts.json'), true) ?: [];
  $def = $prompts[$task] ?? null; if (!$def || empty($def['template'])) fail(500, 'Falta la instrucción de esa tarea en ai/prompts.json.');
  $prompt = preg_replace_callback('/\{\{(\w+)\}\}/', function ($m) use ($vars, $def) {
    if (!in_array($m[1], $def['vars'] ?? [], true)) return '';
    $v = $vars[$m[1]] ?? ''; return mb_substr(is_scalar($v) ? (string) $v : '', 0, 2000);
  }, $def['template']);
  $r = ai_call($prompt, (int) $AI['max_tokens']);
  if (isset($r['error'])) fail($r['status'], $r['error']);
  $text = $r['text'];
  send(200, ['text' => $text]);
}

/* ---------- voz natural (ElevenLabs): los audios se guardan para no pagar dos veces la misma frase ---------- */
if ($method === 'POST' && ($parts[0] ?? '') === 'tts') {
  if (!$VOICE_ON) fail(503, 'La voz no está configurada en el servidor.');
  $b = body(); $lang = ($b['lang'] ?? 'es') === 'en' ? 'en' : 'es';
  $text = trim(preg_replace('/\s+/u', ' ', (string) ($b['text'] ?? '')));
  if ($text === '') fail(400, 'No hay texto para leer.');
  $text = mb_substr($text, 0, 1500);
  $voice = $lang === 'en' && $VOICE['voice_id_en'] !== '' ? $VOICE['voice_id_en'] : $VOICE['voice_id'];
  if (!preg_match('/^[A-Za-z0-9]{8,40}$/', (string) $voice)) fail(500, 'El voice_id de config.php no es válido.');
  $dir = $DATA_DIR . '/tts'; if (!is_dir($dir)) { @mkdir($dir, 0700, true); protect_dir($DATA_DIR); }
  $file = $dir . '/' . hash('sha256', implode('|', [$VOICE['model'], $voice, $lang, $VOICE['stability'], $VOICE['similarity'], $VOICE['style'], $VOICE['speed'], $text])) . '.mp3';
  $chars = mb_strlen($text); $limit = (int) $VOICE['daily_chars_per_user']; $cached = is_file($file);
  $check = with_db(function (&$db) use ($limit, $chars, $cached) {
    $user = &auth_user($db); if (!$user) return 'auth';
    if ($cached) return 'ok';
    $day = gmdate('Y-m-d'); $used = $db['tts_usage'][$user['id']][$day] ?? 0;
    if ($limit > 0 && $used + $chars > $limit) return 'limit';
    $db['tts_usage'] = [$user['id'] => [$day => $used + $chars]] + array_map(fn($d) => array_intersect_key($d, [$day => 1]), $db['tts_usage'] ?? []);
    return 'ok';
  });
  if ($check === 'auth') fail(401, 'Tu sesión terminó. Inicia sesión de nuevo.');
  if ($check === 'limit') fail(429, 'Se acabó la voz natural por hoy. Seguimos con la voz del navegador.');
  if (!$cached) {
    $ch = curl_init('https://api.elevenlabs.io/v1/text-to-speech/' . $voice . '?output_format=mp3_44100_64');
    curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 60,
      CURLOPT_HTTPHEADER => ['content-type: application/json', 'accept: audio/mpeg', 'xi-api-key: ' . $VOICE['api_key']],
      CURLOPT_POSTFIELDS => json_encode(['text' => $text, 'model_id' => $VOICE['model'], 'language_code' => $lang,
        'voice_settings' => ['stability' => (float) $VOICE['stability'], 'similarity_boost' => (float) $VOICE['similarity'], 'style' => (float) $VOICE['style'], 'speed' => (float) $VOICE['speed']]], JSON_UNESCAPED_UNICODE)]);
    $audio = curl_exec($ch); $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE); $cerr = curl_error($ch); curl_close($ch);
    if ($audio === false) fail(502, 'No se pudo conectar con ElevenLabs: ' . $cerr);
    if ($code < 200 || $code >= 300) { $e = json_decode((string) $audio, true); $m = is_array($e) ? ($e["detail"]["message"] ?? $e["detail"] ?? null) : null; fail(502, is_string($m) ? $m : "Error $code de ElevenLabs."); }
    @file_put_contents($file, $audio, LOCK_EX);
  } else $audio = file_get_contents($file);
  header('Content-Type: audio/mpeg'); header('Cache-Control: private, max-age=604800'); header('Content-Length: ' . strlen($audio));
  echo $audio; exit;
}

/* ---------- configuración desde la app (solo administradores) ---------- */
function http_call(string $method, string $url, array $headers, $body = null, int $timeout = 30): array {
  $ch = curl_init($url);
  curl_setopt_array($ch, [CURLOPT_CUSTOMREQUEST => $method, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => $timeout, CURLOPT_HTTPHEADER => $headers]);
  if ($body !== null) curl_setopt($ch, CURLOPT_POSTFIELDS, is_string($body) ? $body : json_encode($body, JSON_UNESCAPED_UNICODE));
  $raw = curl_exec($ch); $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE); $err = curl_error($ch); curl_close($ch);
  return [$code, $raw === false ? null : $raw, $err];
}
function api_error_text(?string $raw, int $code, string $who): string {
  if ($code === 401) return "La clave de $who no es válida. Revisa que la copiaste completa, sin espacios.";
  if ($code === 402 || $code === 429) return "$who dice que no hay saldo o se llegó al límite de la cuenta. Revisa tu plan en $who.";
  $e = json_decode((string) $raw, true);
  $m = is_array($e) ? ($e['error']['message'] ?? $e['detail']['message'] ?? $e['detail'] ?? null) : null;
  if (is_string($m)) return "$who: $m";
  return $code ? "$who respondió con error $code." : "No se pudo conectar con $who.";
}
function mask(string $k): string { return $k === '' ? '' : '…' . substr($k, -4); }
function save_settings(array $new): void {
  global $SETTINGS_FILE, $DATA_DIR, $SETTINGS;
  protect_dir($DATA_DIR);
  $SETTINGS = $new;
  file_put_contents($SETTINGS_FILE, json_encode($new, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
  @chmod($SETTINGS_FILE, 0600);
}
if (($parts[0] ?? '') === 'admin' && in_array($parts[1] ?? '', ['settings', 'test-ai', 'voices'], true)) {
  $who = with_db(function (&$db) { $u = &auth_user($db); return $u ? $u['role'] : null; });
  if ($who === null) fail(401, 'Tu sesión terminó. Inicia sesión de nuevo.');
  if ($who !== 'admin') fail(403, 'Solo un administrador puede hacer esto.');
  $p1 = $parts[1]; $EL = 'https://api.elevenlabs.io';
  $vkey = (string) ($VOICE['api_key'] ?? '');

  if ($p1 === 'settings' && $method === 'GET') {
    send(200, [
      'ai' => ['enabled' => (bool) $AI['enabled'], 'hasKey' => $AI['api_key'] !== '', 'keyHint' => mask((string) $AI['api_key']), 'model' => $AI['model'], 'effort' => $AI['effort'], 'daily_limit_per_user' => (int) $AI['daily_limit_per_user']],
      'voice' => ['enabled' => (bool) $VOICE['enabled'], 'hasKey' => $vkey !== '', 'keyHint' => mask($vkey), 'voice_id' => $VOICE['voice_id'], 'voice_name' => $VOICE['voice_name'] ?? '', 'voice_id_en' => $VOICE['voice_id_en'], 'voice_name_en' => $VOICE['voice_name_en'] ?? '', 'model' => $VOICE['model'], 'speed' => (float) $VOICE['speed'], 'daily_chars_per_user' => (int) $VOICE['daily_chars_per_user']],
      'configError' => $CONFIG_ERROR,
    ]);
  }
  if ($p1 === 'settings' && $method === 'PUT') {
    $b = body(); $cur = $SETTINGS;
    $allow = [
      'ai' => ['api_key' => 's', 'model' => ['claude-haiku-5-5', 'claude-sonnet-5-5', 'claude-opus-5-5'], 'effort' => ['low', 'medium', 'high'], 'daily_limit_per_user' => 'i', 'enabled' => 'b'],
      'voice' => ['api_key' => 's', 'voice_id' => 'id', 'voice_name' => 's', 'voice_id_en' => 'id', 'voice_name_en' => 's', 'model' => ['eleven_flash_v2_5', 'eleven_multilingual_v2'], 'speed' => 'f', 'daily_chars_per_user' => 'i', 'enabled' => 'b'],
    ];
    foreach ($allow as $sec => $keys) {
      if (!is_array($b[$sec] ?? null)) continue;
      foreach ($keys as $k => $type) {
        if (!array_key_exists($k, $b[$sec])) continue;
        $v = $b[$sec][$k];
        if ($k === 'api_key') { $v = trim((string) $v); if ($v === '') continue; if ($v === '-') $v = ''; if (strlen($v) > 300 || preg_match('/\s/', $v)) fail(400, 'La clave no parece válida: revisa que la copiaste completa y sin espacios.'); }
        elseif (is_array($type)) { if (!in_array($v, $type, true)) fail(400, "Valor no válido para $k."); }
        elseif ($type === 'i') $v = max(0, min(1000000, (int) $v));
        elseif ($type === 'f') $v = max(0.7, min(1.2, (float) $v));
        elseif ($type === 'b') $v = (bool) $v;
        elseif ($type === 'id') { $v = trim((string) $v); if ($v !== '' && !preg_match('/^[A-Za-z0-9]{8,40}$/', $v)) fail(400, 'El ID de la voz no es válido.'); }
        else $v = mb_substr(trim((string) $v), 0, 80);
        $cur[$sec][$k] = $v;
      }
    }
    save_settings($cur);
    send(200, ['ok' => true]);
  }
  if ($p1 === 'test-ai' && $method === 'POST') {
    if ($AI['api_key'] === '') fail(400, 'Primero guarda la clave de Anthropic.');
    // misma llamada que usan los cursos (mismo modelo y opciones), con una respuesta en JSON como los cursos
    $t0 = microtime(true);
    $r = ai_call('Responde SOLO con JSON válido, sin texto adicional: {"saludo":"un saludo corto y alegre para un niño, en español"}', 300);
    if (isset($r['error'])) fail(502, $r['error']);
    $j = json_decode(substr($r['text'], (int) strpos($r['text'], '{'), (int) strrpos($r['text'], '}') - (int) strpos($r['text'], '{') + 1), true);
    send(200, ['ok' => true, 'text' => is_array($j) && isset($j['saludo']) ? (string) $j['saludo'] : trim($r['text']), 'model' => $r['model'], 'seconds' => round(microtime(true) - $t0, 1)]);
  }

  if ($p1 === 'voices' && $method === 'GET') {
    if ($vkey === '') fail(400, 'Primero guarda la clave de ElevenLabs.');
    $H = ['accept: application/json', 'xi-api-key: ' . $vkey];
    if (($_GET['mine'] ?? '') === '1') {
      [$code, $raw] = http_call('GET', "$EL/v1/voices", $H);
      if ($code < 200 || $code >= 300) fail(502, api_error_text($raw, $code, 'ElevenLabs'));
      $out = [];
      foreach ((json_decode((string) $raw, true)['voices'] ?? []) as $v) $out[] = ['voice_id' => $v['voice_id'] ?? '', 'name' => $v['name'] ?? '', 'accent' => $v['labels']['accent'] ?? '', 'gender' => $v['labels']['gender'] ?? '', 'age' => $v['labels']['age'] ?? '', 'description' => $v['labels']['description'] ?? ($v['description'] ?? ''), 'preview_url' => $v['preview_url'] ?? '', 'owner' => ''];
      send(200, ['voices' => $out]);
    }
    $q = ['language' => (($_GET['lang'] ?? 'es') === 'en' ? 'en' : 'es'), 'page_size' => 40, 'sort' => 'usage_character_count_1y'];
    foreach (['gender', 'search', 'age'] as $k) if (!empty($_GET[$k])) $q[$k] = mb_substr((string) $_GET[$k], 0, 40);
    [$code, $raw] = http_call('GET', "$EL/v1/shared-voices?" . http_build_query($q), $H);
    if ($code < 200 || $code >= 300) fail(502, api_error_text($raw, $code, 'ElevenLabs'));
    $out = [];
    foreach ((json_decode((string) $raw, true)['voices'] ?? []) as $v) $out[] = ['voice_id' => $v['voice_id'] ?? '', 'owner' => $v['public_owner_id'] ?? '', 'name' => $v['name'] ?? '', 'accent' => $v['accent'] ?? '', 'gender' => $v['gender'] ?? '', 'age' => $v['age'] ?? '', 'description' => mb_substr((string) ($v['description'] ?? $v['descriptive'] ?? ''), 0, 160), 'preview_url' => $v['preview_url'] ?? '', 'locale' => $v['locale'] ?? ''];
    send(200, ['voices' => $out]);
  }
  if ($p1 === 'voices' && $method === 'POST') {
    if ($vkey === '') fail(400, 'Primero guarda la clave de ElevenLabs.');
    $b = body(); $vid = (string) ($b['voice_id'] ?? ''); $owner = (string) ($b['owner'] ?? ''); $name = mb_substr(trim((string) ($b['name'] ?? 'Voz')), 0, 60); $en = ($b['target'] ?? '') === 'en';
    if (!preg_match('/^[A-Za-z0-9]{8,40}$/', $vid)) fail(400, 'Voz no válida.');
    if ($owner !== '') {
      if (!preg_match('/^[A-Za-z0-9]{8,100}$/', $owner)) fail(400, 'Voz no válida.');
      [$code, $raw] = http_call('POST', "$EL/v1/voices/add/$owner/$vid", ['content-type: application/json', 'xi-api-key: ' . $vkey], ['new_name' => $name . ' (Aventura)']);
      $d = json_decode((string) $raw, true) ?: [];
      if ($code >= 200 && $code < 300 && !empty($d['voice_id'])) $vid = (string) $d['voice_id'];
      elseif (!preg_match('/already|exist/i', (string) $raw)) fail(502, api_error_text($raw, $code, 'ElevenLabs'));
    }
    $cur = $SETTINGS; $cur['voice'][$en ? 'voice_id_en' : 'voice_id'] = $vid; $cur['voice'][$en ? 'voice_name_en' : 'voice_name'] = $name;
    save_settings($cur);
    send(200, ['ok' => true, 'voice_id' => $vid]);
  }
  fail(404, 'Ruta no encontrada.');
}

/* ---------- copias diarias del progreso (últimos 14 días por perfil) ---------- */
function snap_dir(string $pid): string { global $DATA_DIR; return $DATA_DIR . '/snapshots/' . preg_replace('/[^a-f0-9]/', '', $pid); }
// registro de los últimos guardados de cada perfil (para saber qué equipo guardó qué)
function save_log(string $pid, array $st, string $result): void {
  $dir = snap_dir($pid); if (!is_dir($dir)) @mkdir($dir, 0700, true);
  $ua = (string) ($_SERVER['HTTP_USER_AGENT'] ?? '');
  $dev = preg_match('/iPhone|iPad/i', $ua) ? 'iPhone/iPad' : (preg_match('/Android/i', $ua) ? 'Android' : (preg_match('/Windows/i', $ua) ? 'Windows' : (preg_match('/Mac/i', $ua) ? 'Mac' : 'Otro')));
  $line = json_encode(['t' => date('Y-m-d H:i'), 'dev' => $dev, 'xp' => $st['xp'] ?? 0, 'done' => count($st['progress'] ?? []), 'grade' => $st['profile']['grade'] ?? null, 'res' => $result], JSON_UNESCAPED_UNICODE);
  $f = "$dir/saves.log"; @file_put_contents($f, $line . "\n", FILE_APPEND | LOCK_EX);
  if (@filesize($f) > 60000) { $all = file($f); @file_put_contents($f, implode('', array_slice($all, -200)), LOCK_EX); }
}
function snapshot(array $p): void {
  if (empty($p['state'])) return;
  $dir = snap_dir($p['id']); if (!is_dir($dir)) @mkdir($dir, 0700, true);
  $file = $dir . '/' . date('Y-m-d') . '.json';
  if (is_file($file)) return; // una copia por día: el estado con el que empezó el día
  @file_put_contents($file, json_encode($p['state'], JSON_UNESCAPED_UNICODE), LOCK_EX);
  $all = glob("$dir/*.json") ?: []; sort($all);
  foreach (array_slice($all, 0, max(0, count($all) - 14)) as $old) @unlink($old);
}

/* ---------- rutas con sesión ---------- */
$resp = with_db(function (&$db) use ($parts, $method) {
  $user = &auth_user($db);
  if (!$user) return [401, ['error' => 'Tu sesión terminó. Inicia sesión de nuevo.']];
  $p0 = $parts[0] ?? ''; $p1 = $parts[1] ?? null;

  if ($method === 'POST' && $p0 === 'logout') {
    $h = hash('sha256', bearer());
    $db['sessions'] = array_values(array_filter($db['sessions'], fn($s) => !hash_equals($s['tokenHash'], $h)));
    return [200, ['ok' => true]];
  }
  if ($method === 'GET' && $p0 === 'me') {
    $profiles = [];
    foreach ($db['profiles'] as $p) if ($p['userId'] === $user['id']) $profiles[] = ['id' => $p['id'], 'updatedAt' => $p['updatedAt'], 'profile' => $p['state']['profile'] ?? null, 'xp' => $p['state']['xp'] ?? 0];
    return [200, ['user' => public_user($user), 'profiles' => $profiles]];
  }
  if ($method === 'POST' && $p0 === 'password') {
    $b = body();
    if (!password_verify((string) ($b['current'] ?? ''), $user['pw'])) return [400, ['error' => 'La contraseña actual no es correcta.']];
    if (strlen((string) ($b['next'] ?? '')) < 8) return [400, ['error' => 'La nueva contraseña debe tener al menos 8 caracteres.']];
    $user['pw'] = password_hash((string) $b['next'], PASSWORD_DEFAULT);
    return [200, ['ok' => true]];
  }

  if ($p0 === 'profiles') {
    if ($method === 'POST' && !$p1) {
      $mine = count(array_filter($db['profiles'], fn($p) => $p['userId'] === $user['id']));
      if ($mine >= 8) return [400, ['error' => 'Máximo 8 perfiles por cuenta.']];
      $b = body(); if (!isset($b['state']) || !is_array($b['state'])) return [400, ['error' => 'Faltan los datos del perfil.']];
      $id = new_id(); $db['profiles'][] = ['id' => $id, 'userId' => $user['id'], 'state' => $b['state'], 'updatedAt' => now_ms()];
      return [201, ['id' => $id]];
    }
    foreach ($db['profiles'] as $i => $p) {
      if ($p['id'] !== $p1 || $p['userId'] !== $user['id']) continue;
      if ($method === 'GET' && ($parts[2] ?? '') === 'log') {
        $f = snap_dir($p['id']) . '/saves.log'; $lines = is_file($f) ? array_reverse(file($f, FILE_IGNORE_NEW_LINES) ?: []) : [];
        return [200, ['log' => array_values(array_filter(array_map(fn($l) => json_decode($l, true), array_slice($lines, 0, 60))))]];
      }
      if ($method === 'GET' && ($parts[2] ?? '') === 'snapshots') {
        $dir = snap_dir($p['id']); $date = $parts[3] ?? '';
        if ($date !== '') { if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $date) || !is_file("$dir/$date.json")) return [404, ['error' => 'No hay copia de ese día.']]; return [200, ['state' => json_decode((string) file_get_contents("$dir/$date.json"), true)]]; }
        $out = [];
        foreach (array_reverse(glob("$dir/*.json") ?: []) as $f) { $st = json_decode((string) file_get_contents($f), true) ?: []; $out[] = ['date' => basename($f, '.json'), 'xp' => $st['xp'] ?? 0, 'stars' => $st['stars'] ?? 0, 'coins' => $st['coins'] ?? 0, 'stickers' => count($st['stickers'] ?? []), 'done' => count($st['progress'] ?? [])]; }
        return [200, ['snapshots' => $out]];
      }
      if ($method === 'GET') return [200, ['state' => $p['state'], 'updatedAt' => $p['updatedAt']]];
      if ($method === 'PUT') { $b = body(); if (!isset($b['state']) || !is_array($b['state'])) return [400, ['error' => 'Faltan datos.']];
        // si otro equipo guardó después de que este cargó el perfil, no se pisa: se devuelve lo del servidor para juntarlo
        $base = (int) ($b['base'] ?? 0);
        $stale = $base > 0 ? (($p['updatedAt'] ?? 0) > $base) : ((float) ($b['state']['updatedAt'] ?? 0) < (float) ($p['state']['updatedAt'] ?? 0)); // versiones viejas de la app no envían base
        save_log($p['id'], $b['state'], $stale ? 'rechazado (datos viejos de otro equipo)' : 'guardado');
        if ($stale) return [409, ['error' => 'conflict', 'state' => $p['state'], 'updatedAt' => $p['updatedAt']]];
        snapshot($p);
        $db['profiles'][$i]['state'] = $b['state']; $db['profiles'][$i]['updatedAt'] = now_ms(); return [200, ['ok' => true, 'updatedAt' => $db['profiles'][$i]['updatedAt']]]; }
      if ($method === 'DELETE') { array_splice($db['profiles'], $i, 1); return [200, ['ok' => true]]; }
    }
    return [404, ['error' => 'Perfil no encontrado.']];
  }

  if ($p0 === 'admin') {
    if ($user['role'] !== 'admin') return [403, ['error' => 'Solo un administrador puede hacer esto.']];
    if ($method === 'GET' && $p1 === 'users') {
      $out = [];
      foreach ($db['users'] as $u) {
        $names = [];
        foreach ($db['profiles'] as $p) if ($p['userId'] === $u['id'] && !empty($p['state']['profile']['name'])) $names[] = $p['state']['profile']['name'];
        $out[] = public_user($u) + ['profiles' => $names];
      }
      return [200, ['users' => $out]];
    }
    if ($method === 'POST' && $p1 === 'users' && empty($parts[2])) {
      $b = body(); $email = strtolower(trim((string) ($b['email'] ?? ''))); $name = mb_substr(trim((string) ($b['name'] ?? '')), 0, 40); $pw = (string) ($b['password'] ?? '');
      if (!preg_match('/^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/', $email)) return [400, ['error' => 'Escribe un email válido.']];
      if ($name === '') return [400, ['error' => 'Escribe el nombre.']];
      if ($pw !== '' && strlen($pw) < 8) return [400, ['error' => 'La contraseña debe tener al menos 8 caracteres.']];
      foreach ($db['users'] as $u) if ($u['email'] === $email) return [409, ['error' => 'Ya existe una cuenta con ese email.']];
      if ($pw === '') { $A = 'abcdefghjkmnpqrstuvwxyz23456789'; for ($i = 0; $i < 10; $i++) $pw .= $A[random_int(0, strlen($A) - 1)]; }
      $nu = ['id' => new_id(), 'email' => $email, 'name' => $name, 'role' => (($b['role'] ?? '') === 'admin') ? 'admin' : 'user', 'created' => iso(), 'lastLogin' => null, 'pw' => password_hash($pw, PASSWORD_DEFAULT)];
      $db['users'][] = $nu;
      return [201, ['user' => public_user($nu), 'password' => $pw]];
    }
    $tid = $parts[2] ?? ''; $target = &find_user($db, $tid);
    if ($p1 !== 'users' || !$target) return [404, ['error' => 'Usuario no encontrado.']];
    if ($method === 'PATCH') {
      $b = body(); $role = $b['role'] ?? '';
      if (!in_array($role, ['admin', 'user'], true)) return [400, ['error' => 'Rol no válido.']];
      $admins = count(array_filter($db['users'], fn($u) => $u['role'] === 'admin'));
      if ($target['role'] === 'admin' && $role !== 'admin' && $admins === 1) return [400, ['error' => 'Debe quedar al menos un administrador.']];
      $target['role'] = $role; return [200, ['user' => public_user($target)]];
    }
    if ($method === 'POST' && ($parts[3] ?? '') === 'password') {
      $b = body(); if (strlen((string) ($b['password'] ?? '')) < 8) return [400, ['error' => 'La contraseña debe tener al menos 8 caracteres.']];
      $target['pw'] = password_hash((string) $b['password'], PASSWORD_DEFAULT);
      $db['sessions'] = array_values(array_filter($db['sessions'], fn($s) => $s['userId'] !== $tid));
      return [200, ['ok' => true]];
    }
    if ($method === 'DELETE') {
      if ($tid === $user['id']) return [400, ['error' => 'No puedes eliminar tu propia cuenta desde aquí.']];
      $db['users'] = array_values(array_filter($db['users'], fn($u) => $u['id'] !== $tid));
      $db['profiles'] = array_values(array_filter($db['profiles'], fn($p) => $p['userId'] !== $tid));
      $db['sessions'] = array_values(array_filter($db['sessions'], fn($s) => $s['userId'] !== $tid));
      return [200, ['ok' => true]];
    }
  }
  return [404, ['error' => 'Ruta no encontrada.']];
});
send($resp[0], $resp[1]);
