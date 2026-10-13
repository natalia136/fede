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
const AI = Object.assign({ enabled: true, api_key: "", model: "claude-opus-5-5", effort: "medium", max_tokens: 16000, daily_limit_per_user: 40, tasks: { course: true, practice: true, explain: true } }, CONFIG.ai || {});
const AI_KEY = AI.enabled ? (AI.api_key || process.env.ANTHROPIC_API_KEY || "") : "";
const AI_TASKS = AI_KEY ? Object.keys(AI.tasks || {}).filter((k) => AI.tasks[k]) : [];
const PUBLIC = new Set(["/index.html", "/ai/prompts.json", "/css/styles.css", "/js/app.js", "/js/art.js", "/js/curriculum.js", "/js/countries.js", ...["mat", "ing", "len", "cie", "soc", "tec"].map((k) => `/js/content/${k}.js`)]);
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

  if (method === "GET" && parts[0] === "health") return send(res, 200, { ok: true, ai: !!AI_KEY, aiTasks: AI_TASKS, appName: CONFIG.app_name || null });

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
    if (method === "GET") return send(res, 200, { state: p.state, updatedAt: p.updatedAt });
    if (method === "PUT") { const b = await readJson(req); if (!b.state || typeof b.state !== "object") return fail(res, 400, "Faltan datos."); p.state = b.state; p.updatedAt = Date.now(); persist(); return send(res, 200, { ok: true, updatedAt: p.updatedAt }); }
    if (method === "DELETE") { db.profiles = db.profiles.filter((x) => x !== p); persist(); return send(res, 200, { ok: true }); }
  }

  // IA: tareas definidas en ai/prompts.json; la clave vive solo en config.json
  if (method === "POST" && parts[0] === "ai") {
    if (!AI_KEY) return fail(res, 503, "La IA no está configurada en el servidor.");
    const b = await readJson(req), task = String(b.task || ""), vars = b.vars && typeof b.vars === "object" ? b.vars : {};
    if (!AI_TASKS.includes(task)) return fail(res, 400, "Ese uso de la IA no está activado.");
    const day = new Date().toISOString().slice(0, 10), limit = +AI.daily_limit_per_user || 0;
    db.ai_usage = db.ai_usage || {}; const used = (db.ai_usage[user.id] || {})[day] || 0;
    if (limit && used >= limit) return fail(res, 429, `Llegaste al límite de ${limit} usos de IA por hoy. Vuelve mañana.`);
    db.ai_usage[user.id] = { [day]: used + 1 }; persist();
    let prompts = {}; try { prompts = JSON.parse(fs.readFileSync(path.join(ROOT, "ai/prompts.json"), "utf8")); } catch (e) { /* */ }
    const def = prompts[task]; if (!def || !def.template) return fail(res, 500, "Falta la instrucción de esa tarea en ai/prompts.json.");
    const prompt = def.template.replace(/\{\{(\w+)\}\}/g, (_, k) => ((def.vars || []).includes(k) ? String(vars[k] ?? "").slice(0, 2000) : ""));
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": AI_KEY, "anthropic-version": "2023-06-01", "anthropic-beta": "server-side-fallback-2026-07-01" },
      body: JSON.stringify({ model: AI.model, max_tokens: AI.max_tokens, output_config: { effort: AI.effort }, fallbacks: "default", messages: [{ role: "user", content: prompt }] })
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) return fail(res, 502, (data.error && data.error.message) || `Error ${r.status} de la IA.`);
    if (data.stop_reason === "refusal") return fail(res, 422, "refusal");
    return send(res, 200, { text: (data.content || []).filter((c) => c.type === "text").map((c) => c.text).join("") });
  }

  // administración de usuarios
  if (parts[0] === "admin") {
    if (user.role !== "admin") return fail(res, 403, "Solo un administrador puede hacer esto.");
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
