/* Servidor de Aventura Escolar: sirve la app y guarda cuentas y progreso en data/db.json.
   Sin dependencias: solo Node 18 o superior.  Uso:  node server.js   (puerto 3000 por defecto)
   Variables opcionales: PORT, ANTHROPIC_API_KEY (activa la IA sin pedir clave en el navegador). */
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const DB_FILE = path.join(DATA_DIR, "db.json");
const PORT = +process.env.PORT || 3000;
const SESSION_DAYS = 30;
const MAX_BODY = 2 * 1024 * 1024;
let CONFIG = {}; try { CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, "config.json"), "utf8")); } catch (e) { /* sin config.json */ }
// Claves y opciones: config.json y, por encima, data/settings.json (lo que guarda el administrador desde la app).
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");
let SETTINGS = {}; try { SETTINGS = JSON.parse(fs.readFileSync(SETTINGS_FILE, "utf8")); } catch (e) { /* sin ajustes */ }
let AI, AI_KEY, AI_TASKS, VOICE, VOICE_ON;
function applySettings() {
  const over = (sec) => Object.fromEntries(Object.entries(SETTINGS[sec] || {}).filter(([, v]) => v !== "" && v != null));
  AI = Object.assign({ enabled: true, api_key: "", model: "claude-haiku-5-5", effort: "low", max_tokens: 16000, daily_limit_per_user: 40, tasks: { course: true, practice: true, explain: true } }, CONFIG.ai || {}, over("ai"));
  AI_KEY = AI.enabled ? (AI.api_key || process.env.ANTHROPIC_API_KEY || "") : "";
  AI_TASKS = AI_KEY ? Object.keys(AI.tasks || {}).filter((k) => AI.tasks[k]) : [];
  if (AI_TASKS.includes("course")) AI_TASKS.push("course_plan", "course_lesson"); // cursos por partes
  VOICE = Object.assign({ enabled: true, api_key: "", voice_id: "", voice_name: "", voice_id_en: "", voice_name_en: "", model: "eleven_flash_v2_5", stability: 0.5, similarity: 0.75, style: 0.2, speed: 0.95, daily_chars_per_user: 20000 }, CONFIG.voice || {}, over("voice"));
  VOICE_ON = !!(VOICE.enabled && VOICE.api_key && VOICE.voice_id);
}
applySettings();
function saveSettings(next) { SETTINGS = next; fs.mkdirSync(DATA_DIR, { recursive: true }); fs.writeFileSync(SETTINGS_FILE, JSON.stringify(next, null, 2), { mode: 0o600 }); applySettings(); }
async function extErr(r, who) {
  if (r.status === 401) return `La clave de ${who} no es válida. Revisa que la copiaste completa, sin espacios.`;
  if (r.status === 402 || r.status === 429) return `${who} dice que no hay saldo o se llegó al límite de la cuenta. Revisa tu plan en ${who}.`;
  const e = await r.json().catch(() => ({})); const m = (e.error && e.error.message) || (e.detail && (e.detail.message || e.detail));
  return typeof m === "string" ? `${who}: ${m}` : `${who} respondió con error ${r.status}.`;
}
const mask = (k) => (k ? "…" + String(k).slice(-4) : "");
const PUBLIC = new Set(["/index.html", "/ai/prompts.json", "/css/styles.css", "/js/app.js", "/js/art.js", "/js/curriculum.js", "/js/countries.js", ...["mat", "ing", "len", "cie", "soc", "tec"].flatMap((k) => [`/js/content/${k}.js`, `/js/content/${k}_extra.js`, `/js/lessons/${k}.js`, `/js/lessons/${k}_plus.js`, `/js/explore/${k}.js`]), "/js/content/courses_extra.js"]);
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8" };

/* ---------- base de datos en un archivo JSON ---------- */
function loadDb() {
  try { return JSON.parse(fs.readFileSync(DB_FILE, "utf8")); }
  catch (e) { if (e.code !== "ENOENT") throw e; return { users: [], sessions: [], profiles: [] }; }
}
let db = loadDb();
function persist() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const tmp = DB_FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(db, null, 2), { mode: 0o600 });
  fs.renameSync(tmp, DB_FILE);
}

/* ---------- contraseñas y sesiones ---------- */
const hashPassword = (password, salt = crypto.randomBytes(16).toString("hex")) => ({ salt, hash: crypto.scryptSync(password, salt, 64).toString("hex") });
function checkPassword(user, password) {
  const a = Buffer.from(crypto.scryptSync(password, user.salt, 64).toString("hex"), "hex"), b = Buffer.from(user.hash, "hex");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
const sha = (s) => crypto.createHash("sha256").update(s).digest("hex");
function newSession(userId) {
  const token = crypto.randomBytes(32).toString("hex");
  db.sessions = db.sessions.filter((s) => s.expires > Date.now());
  db.sessions.push({ tokenHash: sha(token), userId, expires: Date.now() + SESSION_DAYS * 864e5 });
  return token;
}
function authUser(req) {
  const m = /^Bearer ([a-f0-9]{64})$/.exec(req.headers.authorization || "") || /^([a-f0-9]{64})$/.exec(req.headers["x-auth-token"] || "");
  if (!m) return null;
  const s = db.sessions.find((x) => x.tokenHash === sha(m[1]) && x.expires > Date.now());
  return s ? db.users.find((u) => u.id === s.userId) || null : null;
}
const publicUser = (u) => ({ id: u.id, email: u.email, name: u.name, role: u.role, created: u.created, lastLogin: u.lastLogin });
const id = () => crypto.randomBytes(8).toString("hex");
function tempPassword() { const A = "abcdefghjkmnpqrstuvwxyz23456789"; return Array.from(crypto.randomBytes(10), (x) => A[x % A.length]).join(""); }
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;

// límite simple de intentos de inicio de sesión por IP
const attempts = new Map();
// copia diaria del progreso de cada perfil (últimos 14 días)
function snapshot(dir, state) {
  if (!state) return;
  const d = new Date(), file = path.join(dir, `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}.json`);
  try { if (fs.existsSync(file)) return; fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(file, JSON.stringify(state)); const all = fs.readdirSync(dir).filter((f) => f.endsWith(".json")).sort(); all.slice(0, Math.max(0, all.length - 14)).forEach((f) => fs.unlinkSync(path.join(dir, f))); } catch (e) { /* sin copia */ }
}
// llamada a Claude usada por todos los módulos; si rechaza un parámetro opcional, reintenta con lo básico
async function aiCall(prompt, maxTokens) {
  const model = AI.model, fallback = /opus|sonnet|fable/.test(model);
  const full = { model, max_tokens: maxTokens, messages: [{ role: "user", content: prompt }], output_config: { effort: AI.effort } };
  if (/haiku/.test(model)) full.thinking = { type: "disabled" };
  if (fallback) full.fallbacks = "default";
  const plain = { model, max_tokens: maxTokens, messages: [{ role: "user", content: prompt }] };
  for (const [n, body] of [[0, full], [1, plain]]) {
    const headers = { "content-type": "application/json", "x-api-key": AI.api_key, "anthropic-version": "2023-06-01" };
    if (n === 0 && fallback) headers["anthropic-beta"] = "server-side-fallback-2026-07-01";
    const r = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers, body: JSON.stringify(body) }).catch(() => null);
    if (!r) return { status: 502, error: "No se pudo conectar con la IA." };
    const data = await r.json().catch(() => ({}));
    if (r.status === 400 && n === 0) continue;
    if (r.status === 401) return { status: 502, error: "La clave de Anthropic no es válida. Revísala en Cuenta → Claves de IA y voz." };
    if (r.status === 402 || r.status === 429) return { status: 502, error: "Anthropic dice que no hay saldo o se llegó al límite de la cuenta." };
    if (r.status === 404) return { status: 502, error: `El modelo «${model}» no está disponible para tu clave.` };
    if (!r.ok) return { status: 502, error: (data.error && data.error.message) || `Error ${r.status} de la IA.` };
    if (data.stop_reason === "refusal") return { status: 422, error: "refusal" };
    const text = (data.content || []).filter((c) => c.type === "text").map((c) => c.text).join("");
    if (!text) return { status: 502, error: "La IA no devolvió texto. Intenta de nuevo." };
    return { text, model: data.model || model };
  }
  return { status: 502, error: "La IA no aceptó la petición. Revisa el modelo elegido." };
}
function tooMany(ip) {
  const now = Date.now(), list = (attempts.get(ip) || []).filter((t) => now - t < 15 * 60e3);
  attempts.set(ip, list);
  return list.length >= 10;
}

/* ---------- utilidades HTTP ---------- */
function send(res, code, data) {
  const body = JSON.stringify(data);
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
  res.end(body);
}
const fail = (res, code, message) => send(res, code, { error: message });
function readJson(req) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on("data", (c) => { size += c.length; if (size > MAX_BODY) { reject(Object.assign(new Error("too_big"), { status: 413 })); req.destroy(); } else chunks.push(c); });
    req.on("end", () => { try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString("utf8")) : {}); } catch (e) { reject(Object.assign(new Error("bad_json"), { status: 400 })); } });
    req.on("error", reject);
  });
}
function serveStatic(req, res, pathname) {
  const file = pathname === "/" ? "/index.html" : pathname;
  if (!PUBLIC.has(file)) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); return res.end("No encontrado"); }
  fs.readFile(path.join(ROOT, file), (err, buf) => {
    if (err) { res.writeHead(500); return res.end(); }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)], "Cache-Control": "no-cache", "X-Content-Type-Options": "nosniff" });
    res.end(buf);
  });
}

/* ---------- API ---------- */
async function api(req, res, pathname) {
  const method = req.method, ip = req.socket.remoteAddress || "";
  const parts = pathname.split("/").filter(Boolean).slice(1); // sin "api"

  if (method === "GET" && parts[0] === "health") return send(res, 200, { ok: true, ai: !!AI_KEY, aiTasks: AI_TASKS, voice: VOICE_ON, appName: CONFIG.app_name || null });

  if (method === "POST" && parts[0] === "register") {
    const b = await readJson(req), email = String(b.email || "").trim().toLowerCase(), name = String(b.name || "").trim().slice(0, 40), pw = String(b.password || "");
    if (!EMAIL.test(email)) return fail(res, 400, "Escribe un email válido.");
    if (pw.length < 8) return fail(res, 400, "La contraseña debe tener al menos 8 caracteres.");
    if (!name) return fail(res, 400, "Escribe tu nombre.");
    if (db.users.some((u) => u.email === email)) return fail(res, 409, "Ya existe una cuenta con ese email. Inicia sesión.");
    const user = Object.assign({ id: id(), email, name, role: db.users.length ? "user" : "admin", created: new Date().toISOString(), lastLogin: new Date().toISOString() }, hashPassword(pw));
    db.users.push(user); const token = newSession(user.id); persist();
    return send(res, 201, { token, user: publicUser(user) });
  }

  if (method === "POST" && parts[0] === "login") {
    if (tooMany(ip)) return fail(res, 429, "Demasiados intentos. Espera 15 minutos y vuelve a intentarlo.");
    const b = await readJson(req), email = String(b.email || "").trim().toLowerCase(), pw = String(b.password || "");
    const user = db.users.find((u) => u.email === email);
    if (!user || !checkPassword(user, pw)) { attempts.get(ip).push(Date.now()); return fail(res, 401, "Email o contraseña incorrectos."); }
    user.lastLogin = new Date().toISOString(); const token = newSession(user.id); persist();
    return send(res, 200, { token, user: publicUser(user) });
  }

  const user = authUser(req);
  if (!user) return fail(res, 401, "Tu sesión terminó. Inicia sesión de nuevo.");

  if (method === "POST" && parts[0] === "logout") {
    const tok = (req.headers.authorization || "").slice(7);
    db.sessions = db.sessions.filter((s) => s.tokenHash !== sha(tok)); persist();
    return send(res, 200, { ok: true });
  }
  if (method === "GET" && parts[0] === "me") {
    const profiles = db.profiles.filter((p) => p.userId === user.id).map((p) => ({ id: p.id, updatedAt: p.updatedAt, profile: (p.state && p.state.profile) || null, xp: (p.state && p.state.xp) || 0 }));
    return send(res, 200, { user: publicUser(user), profiles });
  }
  if (method === "POST" && parts[0] === "password") {
    const b = await readJson(req);
    if (!checkPassword(user, String(b.current || ""))) return fail(res, 400, "La contraseña actual no es correcta.");
    if (String(b.next || "").length < 8) return fail(res, 400, "La nueva contraseña debe tener al menos 8 caracteres.");
    Object.assign(user, hashPassword(String(b.next))); persist();
    return send(res, 200, { ok: true });
  }

  // perfiles de la familia
  if (parts[0] === "profiles") {
    if (method === "POST" && !parts[1]) {
      if (db.profiles.filter((p) => p.userId === user.id).length >= 8) return fail(res, 400, "Máximo 8 perfiles por cuenta.");
      const b = await readJson(req); if (!b.state || typeof b.state !== "object") return fail(res, 400, "Faltan los datos del perfil.");
      const p = { id: id(), userId: user.id, state: b.state, updatedAt: Date.now() }; db.profiles.push(p); persist();
      return send(res, 201, { id: p.id });
    }
    const p = db.profiles.find((x) => x.id === parts[1] && x.userId === user.id);
    if (!p) return fail(res, 404, "Perfil no encontrado.");
    const sdir = path.join(DATA_DIR, "snapshots", p.id.replace(/[^a-f0-9]/g, ""));
    if (method === "GET" && parts[2] === "snapshots") {
      const date = parts[3] || "";
      if (date) { if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return fail(res, 404, "No hay copia de ese día."); try { return send(res, 200, { state: JSON.parse(fs.readFileSync(path.join(sdir, date + ".json"), "utf8")) }); } catch (e) { return fail(res, 404, "No hay copia de ese día."); } }
      let files = []; try { files = fs.readdirSync(sdir).filter((f) => f.endsWith(".json")).sort().reverse(); } catch (e) { /* sin copias */ }
      return send(res, 200, { snapshots: files.map((f) => { const st = JSON.parse(fs.readFileSync(path.join(sdir, f), "utf8")); return { date: f.slice(0, 10), xp: st.xp || 0, stars: st.stars || 0, coins: st.coins || 0, stickers: (st.stickers || []).length, done: Object.keys(st.progress || {}).length }; }) });
    }
    if (method === "GET") return send(res, 200, { state: p.state, updatedAt: p.updatedAt });
    if (method === "PUT") { const b = await readJson(req); if (!b.state || typeof b.state !== "object") return fail(res, 400, "Faltan datos."); if (+b.base > 0 ? (p.updatedAt || 0) > +b.base : +(b.state.updatedAt || 0) < +((p.state || {}).updatedAt || 0)) return send(res, 409, { error: "conflict", state: p.state, updatedAt: p.updatedAt }); snapshot(sdir, p.state); p.state = b.state; p.updatedAt = Date.now(); persist(); return send(res, 200, { ok: true, updatedAt: p.updatedAt }); }
    if (method === "DELETE") { db.profiles = db.profiles.filter((x) => x !== p); persist(); return send(res, 200, { ok: true }); }
  }

  // IA: tareas definidas en ai/prompts.json; la clave vive solo en config.json
  if (method === "POST" && parts[0] === "ai") {
    if (!AI_KEY) return fail(res, 503, "La IA no está configurada en el servidor.");
    const b = await readJson(req), task = String(b.task || ""), vars = b.vars && typeof b.vars === "object" ? b.vars : {};
    if (!AI_TASKS.includes(task)) return fail(res, 400, "Ese uso de la IA no está activado.");
    const day = new Date().toISOString().slice(0, 10), limit = +AI.daily_limit_per_user || 0;
    db.ai_usage = db.ai_usage || {}; const used = (db.ai_usage[user.id] || {})[day] || 0;
    if (task !== "course_lesson") {
      if (limit && used >= limit) return fail(res, 429, `Llegaste al límite de ${limit} usos de IA por hoy. Vuelve mañana.`);
      db.ai_usage[user.id] = { [day]: used + 1 }; persist();
    }
    let prompts = {}; try { prompts = JSON.parse(fs.readFileSync(path.join(ROOT, "ai/prompts.json"), "utf8")); } catch (e) { /* */ }
    const def = prompts[task]; if (!def || !def.template) return fail(res, 500, "Falta la instrucción de esa tarea en ai/prompts.json.");
    const prompt = def.template.replace(/\{\{(\w+)\}\}/g, (_, k) => ((def.vars || []).includes(k) ? String(vars[k] ?? "").slice(0, 2000) : ""));
    const r = await aiCall(prompt, AI.max_tokens);
    if (r.error) return fail(res, r.status, r.error);
    const data = { content: [{ type: "text", text: r.text }] };
    return send(res, 200, { text: (data.content || []).filter((c) => c.type === "text").map((c) => c.text).join("") });
  }

  // voz natural (ElevenLabs): los audios se guardan en data/tts para no pagar dos veces la misma frase
  if (method === "POST" && parts[0] === "tts") {
    if (!VOICE_ON) return fail(res, 503, "La voz no está configurada en el servidor.");
    const b = await readJson(req), lang = b.lang === "en" ? "en" : "es";
    const text = String(b.text || "").replace(/\s+/g, " ").trim().slice(0, 1500);
    if (!text) return fail(res, 400, "No hay texto para leer.");
    const voice = lang === "en" && VOICE.voice_id_en ? VOICE.voice_id_en : VOICE.voice_id;
    if (!/^[A-Za-z0-9]{8,40}$/.test(voice)) return fail(res, 500, "El voice_id de config.json no es válido.");
    const dir = path.join(DATA_DIR, "tts"); fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, crypto.createHash("sha256").update([VOICE.model, voice, lang, VOICE.stability, VOICE.similarity, VOICE.style, VOICE.speed, text].join("|")).digest("hex") + ".mp3");
    let audio = null; try { audio = fs.readFileSync(file); } catch (e) { /* no está guardado */ }
    if (!audio) {
      const day = new Date().toISOString().slice(0, 10), limit = +VOICE.daily_chars_per_user || 0;
      db.tts_usage = db.tts_usage || {}; const used = (db.tts_usage[user.id] || {})[day] || 0;
      if (limit && used + text.length > limit) return fail(res, 429, "Se acabó la voz natural por hoy. Seguimos con la voz del navegador.");
      db.tts_usage[user.id] = { [day]: used + text.length }; persist();
      const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_64`, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "audio/mpeg", "xi-api-key": VOICE.api_key },
        body: JSON.stringify({ text, model_id: VOICE.model, language_code: lang, voice_settings: { stability: +VOICE.stability, similarity_boost: +VOICE.similarity, style: +VOICE.style, speed: +VOICE.speed } })
      });
      if (!r.ok) { const e = await r.json().catch(() => ({})); const m = e.detail && (e.detail.message || e.detail); return fail(res, 502, typeof m === "string" ? m : `Error ${r.status} de ElevenLabs.`); }
      audio = Buffer.from(await r.arrayBuffer()); fs.writeFileSync(file, audio);
    }
    res.writeHead(200, { "Content-Type": "audio/mpeg", "Content-Length": audio.length, "Cache-Control": "private, max-age=604800" });
    return res.end(audio);
  }

  // administración de usuarios
  if (parts[0] === "admin") {
    if (user.role !== "admin") return fail(res, 403, "Solo un administrador puede hacer esto.");
    const EL = "https://api.elevenlabs.io", ID = /^[A-Za-z0-9]{8,40}$/;
    if (parts[1] === "settings" && method === "GET") {
      return send(res, 200, {
        ai: { enabled: !!AI.enabled, hasKey: !!AI.api_key, keyHint: mask(AI.api_key), model: AI.model, effort: AI.effort, daily_limit_per_user: +AI.daily_limit_per_user || 0 },
        voice: { enabled: !!VOICE.enabled, hasKey: !!VOICE.api_key, keyHint: mask(VOICE.api_key), voice_id: VOICE.voice_id, voice_name: VOICE.voice_name || "", voice_id_en: VOICE.voice_id_en, voice_name_en: VOICE.voice_name_en || "", model: VOICE.model, speed: +VOICE.speed, daily_chars_per_user: +VOICE.daily_chars_per_user || 0 },
        configError: null
      });
    }
    if (parts[1] === "settings" && method === "PUT") {
      const b = await readJson(req), cur = JSON.parse(JSON.stringify(SETTINGS));
      const allow = {
        ai: { api_key: "s", model: ["claude-haiku-5-5", "claude-sonnet-5-5", "claude-opus-5-5"], effort: ["low", "medium", "high"], daily_limit_per_user: "i", enabled: "b" },
        voice: { api_key: "s", voice_id: "id", voice_name: "t", voice_id_en: "id", voice_name_en: "t", model: ["eleven_flash_v2_5", "eleven_multilingual_v2"], speed: "f", daily_chars_per_user: "i", enabled: "b" }
      };
      for (const [sec, keys] of Object.entries(allow)) {
        if (!b[sec] || typeof b[sec] !== "object") continue;
        for (const [k, type] of Object.entries(keys)) {
          if (!(k in b[sec])) continue; let v = b[sec][k];
          if (k === "api_key") { v = String(v || "").trim(); if (!v) continue; if (v === "-") v = ""; if (v.length > 300 || /\s/.test(v)) return fail(res, 400, "La clave no parece válida: revisa que la copiaste completa y sin espacios."); }
          else if (Array.isArray(type)) { if (!type.includes(v)) return fail(res, 400, `Valor no válido para ${k}.`); }
          else if (type === "i") v = Math.max(0, Math.min(1e6, Math.floor(+v || 0)));
          else if (type === "f") v = Math.max(0.7, Math.min(1.2, +v || 1));
          else if (type === "b") v = !!v;
          else if (type === "id") { v = String(v || "").trim(); if (v && !ID.test(v)) return fail(res, 400, "El ID de la voz no es válido."); }
          else v = String(v || "").trim().slice(0, 80);
          cur[sec] = cur[sec] || {}; cur[sec][k] = v;
        }
      }
      saveSettings(cur); return send(res, 200, { ok: true });
    }
    if (parts[1] === "test-ai" && method === "POST") {
      if (!AI.api_key) return fail(res, 400, "Primero guarda la clave de Anthropic.");
      const t0 = Date.now(), r = await aiCall('Responde SOLO con JSON válido, sin texto adicional: {"saludo":"un saludo corto y alegre para un niño, en español"}', 300);
      if (r.error) return fail(res, 502, r.error);
      let t = r.text.trim(); try { t = JSON.parse(t.slice(t.indexOf("{"), t.lastIndexOf("}") + 1)).saludo || t; } catch (e) { /* */ }
      return send(res, 200, { ok: true, text: t, model: r.model, seconds: Math.round((Date.now() - t0) / 100) / 10 });
    }
    if (parts[1] === "voices") {
      if (!VOICE.api_key) return fail(res, 400, "Primero guarda la clave de ElevenLabs.");
      const H = { accept: "application/json", "xi-api-key": VOICE.api_key }, q = new URL(req.url, "http://x").searchParams;
      if (method === "GET") {
        let url;
        if (q.get("mine") === "1") url = `${EL}/v1/voices`;
        else { const qs = new URLSearchParams({ language: q.get("lang") === "en" ? "en" : "es", page_size: "40", sort: "usage_character_count_1y" }); ["gender", "search", "age"].forEach((k) => { if (q.get(k)) qs.set(k, q.get(k).slice(0, 40)); }); url = `${EL}/v1/shared-voices?${qs}`; }
        const r = await fetch(url, { headers: H }).catch(() => null);
        if (!r) return fail(res, 502, "No se pudo conectar con ElevenLabs.");
        if (!r.ok) return fail(res, 502, await extErr(r, "ElevenLabs"));
        const d = await r.json();
        const voices = (d.voices || []).map((v) => q.get("mine") === "1"
          ? { voice_id: v.voice_id, name: v.name, accent: (v.labels || {}).accent || "", gender: (v.labels || {}).gender || "", age: (v.labels || {}).age || "", description: (v.labels || {}).description || v.description || "", preview_url: v.preview_url || "", owner: "" }
          : { voice_id: v.voice_id, owner: v.public_owner_id || "", name: v.name, accent: v.accent || "", gender: v.gender || "", age: v.age || "", description: String(v.description || v.descriptive || "").slice(0, 160), preview_url: v.preview_url || "", locale: v.locale || "" });
        return send(res, 200, { voices });
      }
      if (method === "POST") {
        const b = await readJson(req); let vid = String(b.voice_id || ""); const owner = String(b.owner || ""), name = String(b.name || "Voz").trim().slice(0, 60), en = b.target === "en";
        if (!ID.test(vid)) return fail(res, 400, "Voz no válida.");
        if (owner) {
          if (!/^[A-Za-z0-9]{8,100}$/.test(owner)) return fail(res, 400, "Voz no válida.");
          const r = await fetch(`${EL}/v1/voices/add/${owner}/${vid}`, { method: "POST", headers: Object.assign({ "content-type": "application/json" }, H), body: JSON.stringify({ new_name: name + " (Aventura)" }) }).catch(() => null);
          if (!r) return fail(res, 502, "No se pudo conectar con ElevenLabs.");
          const txt = await r.text(); let d = {}; try { d = JSON.parse(txt); } catch (e) { /* */ }
          if (r.ok && d.voice_id) vid = d.voice_id; else if (!/already|exist/i.test(txt)) return fail(res, 502, r.status === 401 ? "La clave de ElevenLabs no es válida." : `ElevenLabs respondió con error ${r.status}.`);
        }
        const cur = JSON.parse(JSON.stringify(SETTINGS)); cur.voice = cur.voice || {}; cur.voice[en ? "voice_id_en" : "voice_id"] = vid; cur.voice[en ? "voice_name_en" : "voice_name"] = name;
        saveSettings(cur); return send(res, 200, { ok: true, voice_id: vid });
      }
    }
    if (method === "GET" && parts[1] === "users") {
      return send(res, 200, { users: db.users.map((u) => Object.assign(publicUser(u), { profiles: db.profiles.filter((p) => p.userId === u.id).map((p) => (p.state && p.state.profile ? p.state.profile.name : "")).filter(Boolean) })) });
    }
    if (method === "POST" && parts[1] === "users" && !parts[2]) {
      const b = await readJson(req), email = String(b.email || "").trim().toLowerCase(), name = String(b.name || "").trim().slice(0, 40);
      let pw = String(b.password || "");
      if (!EMAIL.test(email)) return fail(res, 400, "Escribe un email válido.");
      if (!name) return fail(res, 400, "Escribe el nombre.");
      if (pw && pw.length < 8) return fail(res, 400, "La contraseña debe tener al menos 8 caracteres.");
      if (db.users.some((u) => u.email === email)) return fail(res, 409, "Ya existe una cuenta con ese email.");
      if (!pw) pw = tempPassword();
      const nu = Object.assign({ id: id(), email, name, role: b.role === "admin" ? "admin" : "user", created: new Date().toISOString(), lastLogin: null }, hashPassword(pw));
      db.users.push(nu); persist();
      return send(res, 201, { user: publicUser(nu), password: pw });
    }
    const target = db.users.find((u) => u.id === parts[2]);
    if (parts[1] !== "users" || !target) return fail(res, 404, "Usuario no encontrado.");
    if (method === "PATCH") {
      const b = await readJson(req);
      if (!["admin", "user"].includes(b.role)) return fail(res, 400, "Rol no válido.");
      if (target.role === "admin" && b.role !== "admin" && db.users.filter((u) => u.role === "admin").length === 1) return fail(res, 400, "Debe quedar al menos un administrador.");
      target.role = b.role; persist(); return send(res, 200, { user: publicUser(target) });
    }
    if (method === "POST" && parts[3] === "password") {
      const b = await readJson(req); if (String(b.password || "").length < 8) return fail(res, 400, "La contraseña debe tener al menos 8 caracteres.");
      Object.assign(target, hashPassword(String(b.password))); db.sessions = db.sessions.filter((s) => s.userId !== target.id); persist();
      return send(res, 200, { ok: true });
    }
    if (method === "DELETE") {
      if (target.id === user.id) return fail(res, 400, "No puedes eliminar tu propia cuenta desde aquí.");
      db.users = db.users.filter((u) => u !== target); db.profiles = db.profiles.filter((p) => p.userId !== target.id); db.sessions = db.sessions.filter((s) => s.userId !== target.id); persist();
      return send(res, 200, { ok: true });
    }
  }
  return fail(res, 404, "Ruta no encontrada.");
}

http.createServer(async (req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, "http://x").pathname); } catch (e) { res.writeHead(400); return res.end(); }
  if (pathname.startsWith("/api/")) {
    try { await api(req, res, pathname); }
    catch (e) { console.error(e); if (!res.headersSent) fail(res, e.status || 500, e.status === 413 ? "Los datos son demasiado grandes." : e.status === 400 ? "Datos no válidos." : "Error del servidor."); }
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") { res.writeHead(405); return res.end(); }
  if (pathname === "/favicon.ico") { res.writeHead(204); return res.end(); }
  serveStatic(req, res, pathname);
}).listen(PORT, () => console.log(`Aventura Escolar en http://localhost:${PORT}  (datos en ${path.relative(ROOT, DB_FILE)})`));
