<?php
/* API de Aventura Escolar para hosting compartido con PHP (por ejemplo Hostinger).
   Misma API que server.js: cuentas con email y contraseña, perfiles por niño,
   administración de usuarios e IA opcional. Guarda todo en un archivo JSON.
   Configuración opcional en api/config.php (ver api/config.sample.php). */
declare(strict_types=1);

$config = is_file(__DIR__ . '/config.php') ? (require __DIR__ . '/config.php') : [];
$DATA_DIR = rtrim($config['data_dir'] ?? (__DIR__ . '/../data'), '/');
$DB_FILE = $DATA_DIR . '/db.json';
$AI_KEY = $config['anthropic_api_key'] ?? (getenv('ANTHROPIC_API_KEY') ?: '');
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

if ($method === 'GET' && ($parts[0] ?? '') === 'health') send(200, ['ok' => true, 'ai' => $AI_KEY !== '']);

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

/* ---------- rutas con sesión ---------- */
$resp = with_db(function (&$db) use ($parts, $method, $AI_KEY) {
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
      if ($method === 'GET') return [200, ['state' => $p['state'], 'updatedAt' => $p['updatedAt']]];
      if ($method === 'PUT') { $b = body(); if (!isset($b['state']) || !is_array($b['state'])) return [400, ['error' => 'Faltan datos.']]; $db['profiles'][$i]['state'] = $b['state']; $db['profiles'][$i]['updatedAt'] = now_ms(); return [200, ['ok' => true, 'updatedAt' => $db['profiles'][$i]['updatedAt']]]; }
      if ($method === 'DELETE') { array_splice($db['profiles'], $i, 1); return [200, ['ok' => true]]; }
    }
    return [404, ['error' => 'Perfil no encontrado.']];
  }

  if ($method === 'POST' && $p0 === 'ai') {
    if ($AI_KEY === '') return [503, ['error' => 'La IA no está configurada en el servidor.']];
    $b = body(); $prompt = mb_substr((string) ($b['prompt'] ?? ''), 0, 20000);
    $ch = curl_init('https://api.anthropic.com/v1/messages');
    curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 180,
      CURLOPT_HTTPHEADER => ['content-type: application/json', 'x-api-key: ' . $AI_KEY, 'anthropic-version: 2023-06-01', 'anthropic-beta: server-side-fallback-2026-07-01'],
      CURLOPT_POSTFIELDS => json_encode(['model' => 'claude-opus-5-5', 'max_tokens' => 16000, 'output_config' => ['effort' => 'medium'], 'fallbacks' => 'default', 'messages' => [['role' => 'user', 'content' => $prompt]]])]);
    $raw = curl_exec($ch); $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE); curl_close($ch);
    $data = json_decode((string) $raw, true) ?: [];
    if ($code < 200 || $code >= 300) return [502, ['error' => $data['error']['message'] ?? "Error $code de la IA."]];
    if (($data['stop_reason'] ?? '') === 'refusal') return [422, ['error' => 'refusal']];
    $text = ''; foreach ($data['content'] ?? [] as $c) if (($c['type'] ?? '') === 'text') $text .= $c['text'];
    return [200, ['text' => $text]];
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
