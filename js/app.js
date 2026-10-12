/* Aventura Escolar — app de estudio en familia. Sin dependencias. */
(function () {
  "use strict";
  const CUR = window.CURRICULUM, COUNTRIES = window.COUNTRIES;
  const { SUBJECTS, TOPICS, COURSES, VOCAB, Q, SORT, ORDER, READ, SYLL, VOWELS, INITIAL, SYNANT, SPELL } = CUR;
  const SUBJ_KEYS = Object.keys(SUBJECTS);
  const AVATARS = ["🦊", "🐼", "🦁", "🐸", "🦄", "🐙", "🐯", "🐨", "🦖", "🐧", "🚀", "🧑‍🚀"];
  const ADULT_AVATARS = ["👩", "👨", "👵", "👴", "🧑", "🦸"];
  const STICKERS = ["🦄", "🐉", "🦕", "🐙", "🦋", "🐳", "🦜", "🐢", "🦩", "🦔", "🐝", "🦀", "🐬", "🦒", "🦓", "🐘", "🦉", "🦚", "🌋", "🌈", "🪐", "🚀", "🛸", "🌟", "⚡", "🔮", "🎸", "🏆", "👑", "💎", "🍩", "🧁", "🍉", "🌮", "🎡", "🎢", "🏰", "🗿", "🧩", "🎨"];
  const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const CHEERS = ["¡Excelente!", "¡Genial!", "¡Lo lograste!", "¡Súper!", "¡Bravo!", "¡Increíble!", "¡Eres un crack!", "¡Muy bien!"];
  const OOPS = ["¡Casi!", "¡Uy, por poquito!", "¡Sigue intentando!", "¡Así se aprende!"];

  /* ================= utilidades ================= */
  const $ = (s, el = document) => el.querySelector(s);
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const dec = (x, d = 2) => x.toFixed(d).replace(".", ",");
  const todayStr = () => new Date().toISOString().slice(0, 10);
  const uid = () => Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
  function numOpts(ans, spread = 5, n = 4, min = 0) {
    const s = new Set([ans]); let g = 0;
    while (s.size < n && g++ < 300) { const v = ans + R(-spread, spread); if (v >= min && v !== ans) s.add(v); }
    return shuffle([...s]).map(String);
  }
  function choice(prompt, answer, wrongs, extra) {
    const opts = shuffle([...new Set([String(answer), ...wrongs.map(String)])].slice(0, 4));
    return Object.assign({ kind: "choice", prompt, answer: String(answer), options: opts }, extra || {});
  }

  /* ================= estado y guardado ================= */
  const KEY = "aventura-escolar-v1";
  const DEF = () => ({ profile: null, progress: {}, courses: [], stars: 0, stickers: [], plan: null, sound: true, streak: { n: 0, last: null }, apiKey: "", history: [], updatedAt: 0 });
  let S = DEF();
  try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(DEF(), JSON.parse(raw)); } catch (e) { /* sin almacenamiento */ }

  // Nube (dentro de claude.ai): guarda perfil, progreso y cursos por persona.
  const cloud = { db: null, uid: null, chain: Promise.resolve(), timer: null };
  const capCache = {};
  function cap(name) {
    if (!(name in capCache)) {
      capCache[name] = (window.claude && typeof window.claude.use === "function") ? window.claude.use(name).catch(() => null) : Promise.resolve(null);
    }
    return capCache[name];
  }
  function cloudWrite(path, data) {
    if (!cloud.db || !cloud.uid) return;
    cloud.chain = cloud.chain.then(() => cloud.db.doc(path).set(data)).catch(() => {});
  }
  function mainDoc() {
    const copy = JSON.parse(JSON.stringify(S));
    delete copy.apiKey;
    copy.courses = copy.courses.map((c) => { if (c.source !== "ai") return c; const o = Object.assign({}, c, { stored: true }); delete o.lessons; return o; });
    return copy;
  }
  function save() {
    S.updatedAt = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* lleno o bloqueado */ }
    if (cloud.db && cloud.uid) {
      clearTimeout(cloud.timer);
      cloud.timer = setTimeout(() => cloudWrite(`data/users/${cloud.uid}/estado`, mainDoc()), 1500);
    }
  }
  function saveCourseCloud(c) { if (c.source === "ai") cloudWrite(`data/users/${cloud.uid}/curso_${c.id}`, { course: c }); }
  async function initCloud() {
    try {
      const [db, user] = await Promise.all([cap("db"), cap("user")]);
      if (!db || !user) return;
      const id = await user.id();
      if (!id) return;
      cloud.db = db; cloud.uid = id;
      const snap = await db.doc(`data/users/${id}/estado`).get();
      if (snap.exists) {
        const remote = snap.data();
        if ((remote.updatedAt || 0) > (S.updatedAt || 0)) {
          const localAi = Object.fromEntries(S.courses.filter((c) => c.source === "ai" && c.lessons).map((c) => [c.id, c]));
          S = Object.assign(DEF(), remote, { apiKey: S.apiKey });
          for (let i = 0; i < S.courses.length; i++) {
            const c = S.courses[i];
            if (c.source !== "ai") continue;
            if (localAi[c.id]) { S.courses[i] = localAi[c.id]; continue; }
            const cs = await db.doc(`data/users/${id}/curso_${c.id}`).get();
            if (cs.exists && cs.data().course) S.courses[i] = cs.data().course;
          }
          try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* */ }
          render();
          toast("☁️ Progreso sincronizado");
        }
      } else if (S.profile) {
        cloudWrite(`data/users/${id}/estado`, mainDoc());
        S.courses.forEach(saveCourseCloud);
      }
    } catch (e) { /* sin nube: seguimos con el navegador */ }
  }

  /* ================= sonido, voz, confeti ================= */
  let actx = null;
  function tone(freqs, dur = 0.12, type = "triangle", gap = 0.09) {
    if (!S.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      freqs.forEach((f, i) => {
        const o = actx.createOscillator(), g = actx.createGain(), t0 = actx.currentTime + i * gap;
        o.type = type; o.frequency.value = f; o.connect(g); g.connect(actx.destination);
        g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.18, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.start(t0); o.stop(t0 + dur + 0.02);
      });
    } catch (e) { /* sin audio */ }
  }
  const sfx = { right: () => tone([660, 880, 1320]), wrong: () => tone([300, 220], 0.2, "sawtooth", 0.14), win: () => tone([523, 659, 784, 1046, 1318], 0.18, "triangle", 0.12), tap: () => tone([520], 0.05, "square"), step: () => tone([440], 0.06) };
  function speak(text, lang = "es-ES") {
    try {
      if (!("speechSynthesis" in window)) { toast("Este navegador no puede leer en voz alta"); return; }
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text); u.lang = lang; u.rate = lang.startsWith("en") ? 0.85 : 0.95;
      const v = speechSynthesis.getVoices().find((x) => x.lang && x.lang.toLowerCase().startsWith(lang.slice(0, 2)));
      if (v) u.voice = v;
      speechSynthesis.speak(u);
    } catch (e) { /* */ }
  }
  function confetti(amount = 160) {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cv = $("#confetti"); const ctx = cv.getContext("2d");
    const W = (cv.width = innerWidth), H = (cv.height = innerHeight);
    const colors = ["#ff6b4a", "#9b5de5", "#f2a900", "#23b26d", "#2d7ff9", "#ec4fa6", "#ffc93c"];
    const P = Array.from({ length: amount }, () => ({ x: W / 2 + R(-60, 60), y: H * 0.35, vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 15 - 4, r: R(5, 10), c: pick(colors), a: Math.random() * 6, s: Math.random() > 0.5 }));
    let f = 0;
    (function loop() {
      ctx.clearRect(0, 0, W, H);
      P.forEach((p) => { p.vy += 0.42; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.a += 0.15; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; if (p.s) ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); else { ctx.beginPath(); ctx.arc(0, 0, p.r / 2, 0, 7); ctx.fill(); } ctx.restore(); });
      if (++f < 150) requestAnimationFrame(loop); else ctx.clearRect(0, 0, W, H);
    })();
  }
  let toastT;
  function toast(msg) {
    let t = $(".toast"); if (t) t.remove();
    t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); t.textContent = msg; document.body.appendChild(t);
    clearTimeout(toastT); toastT = setTimeout(() => t.remove(), 2600);
  }

  /* ================= mascota Lumi ================= */
  const LUMI = `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M60 6 L66 20 L60 17 L54 20 Z" fill="#ffc93c"/><line x1="60" y1="18" x2="60" y2="30" stroke="#1b2150" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="8" r="7" fill="#ff6b4a"/><ellipse cx="60" cy="72" rx="44" ry="42" fill="#ffc93c"/><ellipse cx="60" cy="84" rx="28" ry="22" fill="#ffe08a"/><ellipse cx="18" cy="76" rx="9" ry="14" fill="#ffc93c" transform="rotate(-20 18 76)"/><ellipse cx="102" cy="76" rx="9" ry="14" fill="#ffc93c" transform="rotate(20 102 76)"/><g class="blink"><ellipse cx="45" cy="64" rx="8" ry="10" fill="#1b2150"/><ellipse cx="75" cy="64" rx="8" ry="10" fill="#1b2150"/><circle cx="48" cy="60" r="3" fill="#fff"/><circle cx="78" cy="60" r="3" fill="#fff"/></g><circle cx="34" cy="80" r="6" fill="#ff8f7a" opacity=".7"/><circle cx="86" cy="80" r="6" fill="#ff8f7a" opacity=".7"/><path d="M50 82 Q60 92 70 82" stroke="#1b2150" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`;
  let sayT;
  function say(text, mood) {
    const b = $(".buddy"); if (!b) return;
    $(".say", b).textContent = text || "";
    b.classList.remove("happy", "sad"); void b.offsetWidth; if (mood) b.classList.add(mood);
    clearTimeout(sayT); if (text) sayT = setTimeout(() => { $(".say", b).textContent = ""; }, 5000);
  }

  /* ================= SVG de apoyo ================= */
  function pieSVG(k, n) {
    const r = 70, cx = 80, cy = 80; let s = "";
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2;
      const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      s += `<path d="M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${1 / n > 0.5 ? 1 : 0} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z" fill="${i < k ? "#ff6b4a" : "#fff3d6"}" stroke="#1b2150" stroke-width="3"/>`;
    }
    return `<svg width="170" height="170" viewBox="0 0 160 160" role="img" aria-label="Círculo dividido en ${n} partes, ${k} pintadas">${s}</svg>`;
  }
  function clockSVG(h, m) {
    let ticks = "";
    for (let i = 1; i <= 12; i++) { const a = (i / 12) * 2 * Math.PI - Math.PI / 2; ticks += `<text x="${(90 + 64 * Math.cos(a)).toFixed(1)}" y="${(96 + 64 * Math.sin(a)).toFixed(1)}" text-anchor="middle" font-size="17" font-family="Fredoka, sans-serif" font-weight="600" fill="#1b2150">${i}</text>`; }
    const ha = (((h % 12) + m / 60) / 12) * 360, ma = (m / 60) * 360;
    return `<svg width="190" height="190" viewBox="0 0 180 180" role="img" aria-label="Reloj"><circle cx="90" cy="90" r="84" fill="#fff" stroke="#1b2150" stroke-width="6"/>${ticks}<line x1="90" y1="90" x2="90" y2="48" stroke="#ff6b4a" stroke-width="8" stroke-linecap="round" transform="rotate(${ha} 90 90)"/><line x1="90" y1="90" x2="90" y2="28" stroke="#2d7ff9" stroke-width="5" stroke-linecap="round" transform="rotate(${ma} 90 90)"/><circle cx="90" cy="90" r="7" fill="#1b2150"/></svg>`;
  }
  const SHAPES = {
    "Círculo": [0, '<circle cx="60" cy="60" r="48"/>'],
    "Cuadrado": [4, '<rect x="14" y="14" width="92" height="92"/>'],
    "Triángulo": [3, '<polygon points="60,10 110,104 10,104"/>'],
    "Rectángulo": [4, '<rect x="6" y="30" width="108" height="62"/>'],
    "Pentágono": [5, '<polygon points="60,8 112,46 92,108 28,108 8,46"/>'],
    "Hexágono": [6, '<polygon points="32,12 88,12 116,60 88,108 32,108 4,60"/>'],
    "Rombo": [4, '<polygon points="60,6 110,60 60,114 10,60"/>']
  };
  const shapeSVG = (n) => `<svg width="150" height="150" viewBox="0 0 120 120" role="img" aria-label="Figura"><g fill="${pick(["#ff6b4a", "#9b5de5", "#23b26d", "#2d7ff9", "#ec4fa6"])}" stroke="#1b2150" stroke-width="4">${SHAPES[n][1]}</g></svg>`;
  function rectSVG(a, b, grid) {
    const u = Math.min(22, 220 / Math.max(a, b)), w = a * u, h = b * u; let g = "";
    if (grid) { for (let i = 1; i < a; i++) g += `<line x1="${10 + i * u}" y1="10" x2="${10 + i * u}" y2="${10 + h}" stroke="#1b2150" stroke-opacity=".35"/>`; for (let j = 1; j < b; j++) g += `<line x1="10" y1="${10 + j * u}" x2="${10 + w}" y2="${10 + j * u}" stroke="#1b2150" stroke-opacity=".35"/>`; }
    return `<svg width="${w + 70}" height="${h + 50}" viewBox="0 0 ${w + 70} ${h + 50}" role="img" aria-label="Rectángulo de ${a} por ${b}"><rect x="10" y="10" width="${w}" height="${h}" fill="#bfe3ff" stroke="#1b2150" stroke-width="3"/>${g}<text x="${10 + w / 2}" y="${h + 36}" text-anchor="middle" font-family="Fredoka, sans-serif" font-size="18" font-weight="600" fill="currentColor">${a}${grid ? "" : " cm"}</text><text x="${w + 18}" y="${10 + h / 2 + 6}" font-family="Fredoka, sans-serif" font-size="18" font-weight="600" fill="currentColor">${b}${grid ? "" : " cm"}</text></svg>`;
  }
  const emojiRow = (e, n) => Array.from({ length: n }, (_, i) => `<span class="emoji-pop" style="animation-delay:${i * 0.05}s">${e}</span>`).join("");

  /* ================= generadores de actividades ================= */
  const EMO = ["🍎", "⭐", "🐞", "🎈", "🐟", "🍓", "🚗", "🐥", "🌸", "⚽"];
  const kidName = () => (S.profile && S.profile.name) || "Fede";
  const GEN = {
    count(p) { const n = R(1, p.max || 10), e = pick(EMO); return choice("¿Cuántos hay?", n, numOpts(n, 3, 4, 1).filter((x) => x != n), { visual: emojiRow(e, n) }); },
    compare(p) {
      let a = R(1, p.max), b = R(1, p.max); while (b === a) b = R(1, p.max);
      const more = Math.random() > 0.4, e = pick(EMO);
      const vis = p.visual ? `<div>${emojiRow(e, a)}</div><div style="width:100%"></div><div>${emojiRow(pick(EMO), b)}</div>` : "";
      if (p.visual) return choice(more ? "¿Qué grupo tiene MÁS?" : "¿Qué grupo tiene MENOS?", more ? (a > b ? "Arriba" : "Abajo") : (a < b ? "Arriba" : "Abajo"), [more ? (a > b ? "Abajo" : "Arriba") : (a < b ? "Abajo" : "Arriba")], { visual: vis });
      return choice(more ? "¿Cuál número es MAYOR?" : "¿Cuál número es MENOR?", more ? Math.max(a, b) : Math.min(a, b), [more ? Math.min(a, b) : Math.max(a, b)]);
    },
    add(p) {
      const max = p.max || 20; let a = R(1, max - 1), b = R(1, max - a);
      if (max > 20 && Math.random() > 0.3) { a = R(1, 8) * 10 + R(3, 9); b = R(1, Math.max(1, Math.floor((max - a) / 10))) * 10 + R(3, 9); if (a + b > max) { a = R(11, 49); b = R(11, max - a); } }
      const vis = max <= 10 ? `${emojiRow("🍎", a)} <b>+</b> ${emojiRow("🍏", b)}` : "";
      return choice(`${a} + ${b} = ?`, a + b, numOpts(a + b, max > 20 ? 10 : 3, 4, 0).filter((x) => x != a + b), { visual: vis, explain: max > 20 ? `Suma primero las unidades y luego las decenas: ${a} + ${b} = ${a + b}` : "" });
    },
    sub(p) { const max = p.max || 20, a = R(Math.min(5, max), max), b = R(1, a - 1); return choice(`${a} − ${b} = ?`, a - b, numOpts(a - b, max > 20 ? 10 : 3, 4, 0).filter((x) => x != a - b), { explain: `Comprueba sumando: ${a - b} + ${b} = ${a}` }); },
    mul(p) { const t = pick(p.tables || [2, 3, 4, 5]), b = R(1, 10), [x, y] = Math.random() > 0.5 ? [t, b] : [b, t]; const vis = x * y <= 20 && x <= 5 ? Array.from({ length: x }, () => `<span style="padding:0 6px">${emojiRow("🍪", y)}</span>`).join("") : ""; return choice(`${x} × ${y} = ?`, x * y, [x * y + t, x * y - t, x * y + 1].filter((v) => v > 0 && v !== x * y), { visual: vis, explain: `${x} grupos de ${y} = ${x * y}` }); },
    mul2() { const a = R(11, 49), b = R(2, 9), r = a * b; return choice(`${a} × ${b} = ?`, r, [r + 10, r - b, r + b, (Math.floor(a / 10) * 10) * b].filter((v) => v !== r), { explain: `${Math.floor(a / 10) * 10} × ${b} = ${Math.floor(a / 10) * 10 * b} y ${a % 10} × ${b} = ${(a % 10) * b} → ${r}` }); },
    div(p) { const d = R(2, p.max || 10), q = R(1, 10); return choice(`${d * q} ÷ ${d} = ?`, q, numOpts(q, 3, 4, 1).filter((x) => x != q), { explain: `Porque ${d} × ${q} = ${d * q}` }); },
    divr() {
      const d = R(2, 9), q = R(2, 9), r = R(1, d - 1), n = d * q + r, f = (a, b) => `${a}, sobra ${b}`;
      const w = [f(q + 1, r), f(q, r + 1 < d ? r + 1 : r - 1), f(q - 1, r + d)].filter((x) => x !== f(q, r));
      return choice(`${n} ÷ ${d} = ?`, f(q, r), w, { explain: `${d} × ${q} = ${d * q} y sobran ${r} para llegar a ${n}` });
    },
    div2(p) { const d = R(11, p.big ? 25 : 32), q = p.big ? R(11, 40) : R(2, 9), n = d * q; return choice(`${n} ÷ ${d} = ?`, q, numOpts(q, p.big ? 4 : 2, 4, 1).filter((x) => x != q), { explain: `Estima: ${d} ≈ ${Math.round(d / 10) * 10}. Comprueba: ${d} × ${q} = ${n}` }); },
    place(p) {
      const max = p.max || 99;
      if (max <= 99) {
        const n = R(10, 99), t = Math.floor(n / 10), u = n % 10;
        if (Math.random() > 0.5) return choice(`¿Cuántas decenas tiene el ${n}?`, t, [u, t + 1, t - 1].filter((v) => v >= 0 && v !== t), { visual: `${emojiRow("🔟", Math.min(t, 9))} ${u ? emojiRow("🟡", u) : ""}` });
        return choice(`¿Qué número es ${t} decenas y ${u} unidades?`, n, [u * 10 + t, n + 10, n - 1].filter((v) => v !== n && v > 0));
      }
      const n = R(Math.floor(max / 10), max), s = String(n), pos = R(0, s.length - 1), digit = +s[pos], pw = 10 ** (s.length - 1 - pos);
      if (digit === 0) return GEN.place(p);
      const val = digit * pw; const w = [digit * pw * 10, Math.max(1, digit * pw / 10), digit].filter((v) => v !== val && Number.isInteger(v));
      return choice(`¿Qué valor tiene el ${digit} en ${n.toLocaleString("es")}?`, val.toLocaleString("es"), w.map((v) => v.toLocaleString("es")));
    },
    parity(p) { const n = R(1, p.max || 50); return choice(`¿El ${n} es par o impar?`, n % 2 ? "Impar" : "Par", [n % 2 ? "Par" : "Impar"], { explain: `Mira la última cifra: ${n % 10}` }); },
    pattern(p) {
      if ((p.level || 0) === 0) {
        const set = shuffle(["🍎", "🍌", "🍇", "⭐", "🌙", "🐶", "🐱", "🔴", "🔵"]).slice(0, 3);
        const motif = pick([[0, 1], [0, 0, 1], [0, 1, 2], [0, 1, 1]]), len = motif.length * 2 + R(0, motif.length - 1);
        const seq = Array.from({ length: len + 1 }, (_, i) => set[motif[i % motif.length]]);
        const ans = seq.pop(), used = [...new Set(motif)].map((i) => set[i]);
        return choice("¿Qué sigue?", ans, [...set.filter((x) => x !== ans)].slice(0, 2), { visual: seq.map((e) => `<span class="emoji-pop">${e}</span>`).join("") + '<span class="emoji-pop">❓</span>', _u: used });
      }
      const step = R(2, 10), start = R(0, 20), seq = [0, 1, 2, 3].map((i) => start + i * step);
      return choice(`${seq.join(", ")}, … ¿qué sigue?`, start + 4 * step, [start + 4 * step + 1, start + 5 * step, start + 3 * step + 1]);
    },
    shapes(p) {
      const names = Object.keys(SHAPES), n = pick(names);
      if ((p.level || 0) >= 1 && SHAPES[n][0] > 0 && Math.random() > 0.5) return choice("¿Cuántos lados tiene esta figura?", SHAPES[n][0], numOpts(SHAPES[n][0], 2, 4, 3).filter((x) => x != SHAPES[n][0]), { visual: shapeSVG(n) });
      return choice("¿Cómo se llama esta figura?", n, shuffle(names.filter((x) => x !== n)).slice(0, 3), { visual: shapeSVG(n) });
    },
    clock(p) {
      const lv = p.level || 0, h = R(1, 12), m = lv === 0 ? 0 : lv === 1 ? pick([0, 30]) : pick([0, 15, 30, 45]);
      const f = (hh, mm) => `${((hh - 1 + 12) % 12) + 1}:${String(mm).padStart(2, "0")}`;
      const w = [f(h + 1, m), f(m === 0 ? 12 : Math.round(m / 5), h * 5 % 60), f(h, (m + 30) % 60), f(h - 1, m)];
      return choice("¿Qué hora marca el reloj?", f(h, m), w.filter((x) => x !== f(h, m)), { visual: clockSVG(h, m), explain: "La aguja corta (roja) marca la hora y la larga (azul) los minutos." });
    },
    frac(p) {
      const lv = p.level || 0;
      if (lv === 0) { const n = pick([2, 3, 4, 5, 6, 8]), k = R(1, n - 1); return choice("¿Qué fracción está pintada?", `${k}/${n}`, [`${n - k}/${n}`, `${k}/${n + 1}`, `${n}/${k}`], { visual: pieSVG(k, n), explain: `${k} partes pintadas de ${n} partes iguales` }); }
      if (lv === 1) { const b = R(2, 6), a = R(1, b - 1), m = R(2, 4); return choice(`${a}/${b} = ?/${b * m}`, a * m, numOpts(a * m, 3, 4, 1).filter((x) => x != a * m), { visual: pieSVG(a, b), explain: `Multiplica arriba y abajo por ${m}` }); }
      if (lv === 2) { const n = R(4, 12), a = R(1, n - 2), b = R(1, n - 1 - a); return choice(`${a}/${n} + ${b}/${n} = ?`, `${a + b}/${n}`, [`${a + b}/${2 * n}`, `${a + b + 1}/${n}`, `${a * b}/${n}`].filter((x) => x !== `${a + b}/${n}`), { explain: "Mismo denominador: sumamos los numeradores." }); }
      let b = R(2, 9), a = R(1, b - 1); while (gcd(a, b) !== 1) { b = R(2, 9); a = R(1, b - 1); } const m = R(2, 5);
      return choice(`Simplifica ${a * m}/${b * m}`, `${a}/${b}`, [`${a * m}/${b}`, `${a + 1}/${b}`, `${a}/${b + 1}`].filter((x) => x !== `${a}/${b}`), { explain: `Divide arriba y abajo entre ${m}` });
    },
    perim() { const a = R(2, 12), b = R(2, 12), P = 2 * (a + b); return choice("¿Cuál es el perímetro? (cm)", P, [a * b, a + b, P + 2].filter((x) => x !== P), { visual: rectSVG(a, b, false), explain: `${a} + ${b} + ${a} + ${b} = ${P}` }); },
    area() { const a = R(2, 9), b = R(2, 8), A = a * b; return choice("¿Cuál es el área? (cuadritos)", A, [2 * (a + b), a + b, A + a].filter((x) => x !== A), { visual: rectSVG(a, b, true), explain: `${a} × ${b} = ${A}` }); },
    dec(p) {
      if ((p.level || 0) === 0) { let a = R(1, 99) / 100, b = R(1, 9) / 10; if (a === b) b += 0.1; const big = Math.max(a, b); return choice("¿Cuál número es MAYOR?", dec(big, big === b ? 1 : 2), [dec(Math.min(a, b), Math.min(a, b) === b ? 1 : 2)], { explain: "Compara primero las décimas (la primera cifra después de la coma)." }); }
      const a = R(5, 60) / 10, b = R(1, 99) / 100, s = a + b;
      return choice(`${dec(a, 1)} + ${dec(b)} = ?`, dec(s), [dec(s + 0.1), dec(a + b * 10 > 99 ? s + 1 : a + b * 10), dec(s - 0.01)].filter((x) => x !== dec(s)), { explain: "Alinea las comas antes de sumar." });
    },
    pct() { const pc = pick([10, 20, 25, 50, 75]), base = R(1, 10) * 20, r = (base * pc) / 100; return choice(`¿Cuánto es el ${pc} % de ${base}?`, r, [r * 2, base - r, r + 10].filter((x) => x !== r && x > 0), { explain: `${pc} % = ${pc}/100 → ${base} × ${pc} ÷ 100 = ${r}` }); },
    neg() {
      if (Math.random() > 0.5) { const t = R(-8, 3), c = R(2, 9), r = t + c; return choice(`La temperatura es ${t} °C y sube ${c} °C. ¿Cuál es ahora?`, `${r} °C`, [`${r + 2} °C`, `${t - c} °C`, `${-r || 1} °C`].filter((x) => x !== `${r} °C`), { visual: "🌡️" }); }
      let a = R(-9, 9), b = R(-9, 9); while (a === b) b = R(-9, 9); return choice("¿Cuál número es MAYOR?", Math.max(a, b), [Math.min(a, b)], { explain: "En la recta numérica, el que está más a la derecha es mayor." });
    },
    ops() {
      const a = R(2, 9), b = R(2, 9), c = R(2, 6), f = pick([0, 1, 2]);
      const q = [[`${a} + ${b} × ${c}`, a + b * c, (a + b) * c], [`(${a} + ${b}) × ${c}`, (a + b) * c, a + b * c], [`${a * c} ÷ ${c} + ${b}`, a + b, (a * c) / (c + b)]][f];
      return choice(`${q[0]} = ?`, q[1], [Math.round(q[2] * 10) / 10, q[1] + 1, q[1] - 2].filter((x) => x !== q[1]), { explain: "Primero paréntesis, luego × y ÷, al final + y −." });
    },
    word(p) {
      const n = kidName(), lv = p.level || 3, it = pick(["canicas", "galletas", "stickers", "lápices", "flores"]);
      const T = {
        3: [() => { const a = R(3, 9), b = R(3, 9); return [`${n} tiene ${a} cajas con ${b} ${it} cada una. ¿Cuántos ${it} hay en total?`, a * b, `${a} × ${b}`]; },
            () => { const g = R(2, 6), q = R(2, 9); return [`Hay ${g * q} ${it} para repartir entre ${g} amigos por igual. ¿Cuántos recibe cada uno?`, q, `${g * q} ÷ ${g}`]; },
            () => { const a = R(20, 60), b = R(5, 19); return [`${n} tenía ${a} ${it} y regaló ${b}. ¿Cuántos le quedan?`, a - b, `${a} − ${b}`]; }],
        5: [() => { const c = R(3, 8), u = R(6, 12), g = R(2, 9); return [`${n} compró ${c} paquetes de ${u} ${it} y regaló ${g}. ¿Cuántos le quedan?`, c * u - g, `${c} × ${u} − ${g}`]; },
            () => { const pr = R(2, 9) * 100, k = R(2, 5), pay = (Math.ceil((pr * k) / 1000) + 1) * 1000; return [`Un cuaderno cuesta $${pr}. ${n} compra ${k} y paga con $${pay}. ¿Cuánto le devuelven?`, pay - pr * k, `${pay} − ${pr} × ${k}`]; }],
        6: [() => { const d = R(12, 25), q = R(4, 15); return [`Hay ${d * q} ${it} y se guardan en bolsas de ${d}. ¿Cuántas bolsas se llenan?`, q, `${d * q} ÷ ${d}`]; },
            () => { const d = R(11, 20), q = R(3, 9); return [`Un bus lleva ${d} niños. Si van ${d * q} niños de paseo, ¿cuántos buses necesitan?`, q, `${d * q} ÷ ${d}`]; }]
      };
      const [txt, ans, how] = pick(T[lv] || T[3])();
      return choice(txt, ans, numOpts(ans, Math.max(3, Math.round(ans / 5)), 4, 0).filter((x) => x != ans), { explain: `Operación: ${how} = ${ans}`, small: true });
    },
    vocab(p) {
      const bank = VOCAB[p.bank], it = pick(bank), others = shuffle(bank.filter((x) => x !== it)).slice(0, 3), mode = R(0, 2);
      if (mode === 0) return choice("What is this? 🤔", it[1], others.map((x) => x[1]), { visual: `<span class="emoji-pop" style="font-size:1.6em">${it[0]}</span>`, speak: it[1], speakAfter: true, explain: `${it[0]} = ${it[1]} (${it[2]})` });
      if (mode === 1) return choice(`Find: “${it[1]}”`, it[0], others.map((x) => x[0]), { speak: it[1], speakFirst: true, emojiOpts: true, explain: `${it[1]} = ${it[2]}` });
      return choice(`¿Cómo se dice “${it[2]}” en inglés?`, it[1], others.map((x) => x[1]), { visual: it[0], speak: it[1], speakAfter: true });
    },
    quiz(p, ctx) {
      const bank = p.items || Q[p.bank]; let idx = R(0, bank.length - 1), g = 0;
      while (ctx.used.has(idx) && g++ < 40) idx = R(0, bank.length - 1);
      ctx.used.add(idx); const it = bank[idx];
      return choice(it[0], it[1], it[2], { visual: it[3] || "", explain: it[4] || "", small: it[0].length > 60, speak: p.bank && p.bank.startsWith("ing") ? (/_/.test(it[0]) ? it[0].replace(/_+/g, it[1]) : it[1]) : null, speakAfter: true });
    },
    country(p, ctx) { const c = COUNTRIES[S.profile.country] || COUNTRIES.xx; return GEN.quiz({ items: c.quiz[p.set] }, ctx); },
    sort(p, ctx) { const b = SORT[p.bank]; let idx = R(0, b.items.length - 1), g = 0; while (ctx.used.has(idx) && g++ < 40) idx = R(0, b.items.length - 1); ctx.used.add(idx); const [txt, bin] = b.items[idx]; return choice("¿Dónde va?", b.bins[bin], b.bins.filter((_, i) => i !== bin), { visual: `<span class="emoji-pop" style="font-size:.8em;font-family:var(--f-display)">${esc(txt)}</span>`, keepOrder: b.bins }); },
    order(p, ctx) { const bank = ORDER[p.bank]; let s = pick(bank), g = 0; while (ctx.used.has(s) && g++ < 20) s = pick(bank); ctx.used.add(s); return { kind: "order", prompt: p.bank.startsWith("en") ? "Put the words in order 🧩" : "Ordena las palabras 🧩", items: s.split(" "), speak: p.bank.startsWith("en") ? s : null }; },
    orderSteps(p, ctx) { const bank = ORDER[p.bank]; let s = pick(bank), g = 0; while (ctx.used.has(s) && g++ < 20) s = pick(bank); ctx.used.add(s); return { kind: "order", prompt: "Ordena los pasos del primero al último 🔢", items: s, vertical: true }; },
    vowel(p, ctx) { let it = pick(VOWELS), g = 0; while (ctx.used.has(it[1]) && g++ < 30) it = pick(VOWELS); ctx.used.add(it[1]); const v = norm(it[1])[0].toUpperCase(); return choice(`¿Con qué vocal empieza ${it[1]}?`, v, shuffle("AEIOU".split("").filter((x) => x !== v)).slice(0, 3), { visual: it[0], speak: it[1], speakLang: "es-ES" }); },
    initial(p, ctx) { let it = pick(INITIAL), g = 0; while (ctx.used.has(it[1]) && g++ < 30) it = pick(INITIAL); ctx.used.add(it[1]); return choice(`¿Con qué letra empieza ${it[1]}?`, it[2], shuffle("BCDFGLMNPRST".split("").filter((x) => x !== it[2])).slice(0, 3), { visual: it[0], speak: it[1], speakLang: "es-ES" }); },
    syll(p, ctx) { let it = pick(SYLL), g = 0; while (ctx.used.has(it[1]) && g++ < 30) it = pick(SYLL); ctx.used.add(it[1]); return choice(`¿Cuántas sílabas tiene “${it[1]}”? 👏`, it[2], [1, 2, 3, 4].filter((x) => x !== it[2]), { visual: it[0], speak: it[1], speakLang: "es-ES", keepOrder: ["1", "2", "3", "4"] }); },
    synant(p, ctx) { const m = Math.random() > 0.5 ? "syn" : "ant", bank = SYNANT[m]; let it = pick(bank), g = 0; while (ctx.used.has(it[0]) && g++ < 30) it = pick(bank); ctx.used.add(it[0]); return choice(m === "syn" ? `¿Cuál es un SINÓNIMO de “${it[0]}”?` : `¿Cuál es el ANTÓNIMO (contrario) de “${it[0]}”?`, it[1], it[2], { visual: m === "syn" ? "🟰" : "↔️" }); },
    spell(p, ctx) { const bank = SPELL[p.bank]; let it = pick(bank), g = 0; while (ctx.used.has(it[0]) && g++ < 30) it = pick(bank); ctx.used.add(it[0]); return choice("¿Cuál está bien escrita?", it[0], it[1], { visual: it[2], explain: it[3] || "" }); }
  };

  /* ================= unidades (temas, lecciones de cursos) ================= */
  const TOPIC_INDEX = {};
  SUBJ_KEYS.forEach((s) => TOPICS[s].forEach((g, gi) => g.forEach((tp) => { TOPIC_INDEX[tp.id] = { t: tp, s, g: gi }; })));
  const subjName = (s) => { const c = COUNTRIES[(S.profile || {}).country]; return (c && c.subjects[s]) || SUBJECTS[s].name; };
  const gradeLabel = (cc, g) => { const c = COUNTRIES[cc] || COUNTRIES.xx; return `${c.grades[g]} ${c.gradeSuffix[g] || ""}`.trim(); };
  const findCourse = (id) => S.courses.find((c) => c.id === id) || COURSES.find((c) => c.id === id);
  function courseLessons(c) { if (!c) return []; if (c.source === "ai" || c.lessons) return c.lessons || []; const pc = COURSES.find((x) => x.id === (c.ref || c.id)); return pc ? pc.lessons : []; }
  function unit(ref) {
    if (ref.type === "topic") {
      const x = TOPIC_INDEX[ref.id]; if (!x) return null;
      return { key: ref.id, title: x.t.title, subj: x.s, lesson: x.t.lesson, example: x.t.example, tip: x.t.tip, gen: x.t.gen, params: x.t.params, where: `${subjName(x.s)} · ${gradeLabel(S.profile.country, x.g)}` };
    }
    const c = findCourse(ref.cid); if (!c) return null;
    const ls = courseLessons(c), l = ls[ref.li]; if (!l) return null;
    return { key: `${c.id}:${ref.li}`, title: l.title, subj: c.subject in SUBJECTS ? c.subject : "mat", lesson: l.explanation || l.lesson, example: l.example, tip: l.tip, gen: l.gen, params: l.params, activities: l.activities, where: `${c.emoji || "📘"} ${c.title} · Lección ${ref.li + 1} de ${ls.length}` };
  }
  function nextRef(ref) {
    if (ref.type === "topic") { const x = TOPIC_INDEX[ref.id], list = TOPICS[x.s][x.g], i = list.findIndex((t) => t.id === ref.id); return list[i + 1] ? { type: "topic", id: list[i + 1].id } : null; }
    const c = findCourse(ref.cid); return ref.li + 1 < courseLessons(c).length ? { type: "course", cid: ref.cid, li: ref.li + 1 } : null;
  }
  function buildQuestions(u) {
    if (u.activities && u.activities.length) {
      return shuffle(u.activities).slice(0, 8).map((a) => {
        if (a.type === "order" && Array.isArray(a.items) && a.items.length > 1) return { kind: "order", prompt: a.q || "Ordena", items: a.items.map(String), vertical: a.items.some((x) => String(x).length > 14) };
        const wrong = (a.wrong || a.o || []).map(String).filter((w) => w !== String(a.answer)).slice(0, 3);
        return choice(a.q, a.answer, wrong.length ? wrong : ["—"], { visual: a.emoji ? esc(a.emoji) : "", explain: a.explain || "", small: String(a.q).length > 70 });
      });
    }
    if (u.gen === "read") { const story = pick(READ[u.params.level]); return shuffle(story.qs).map((q) => choice(q[0], q[1], q[2], { visual: `<h4>${esc(story.title)}</h4>${esc(story.text)}`, visualClass: "text", small: true, readText: story.text })); }
    if (u.gen === "robot") return [0, 1, 2].map(() => ({ kind: "robot", level: u.params.level || 0 }));
    const ctx = { used: new Set() }, out = [], seen = new Set(), n = /order/.test(u.gen) ? 4 : 6;
    for (let i = 0, g = 0; out.length < n && g < 60; g++) { const q = GEN[u.gen](u.params || {}, ctx); const k = q.prompt + (q.answer || q.items.join()); if (seen.has(k)) continue; seen.add(k); out.push(q); i++; }
    return out;
  }

  /* ================= navegación y render ================= */
  const app = () => $("#app");
  let view = { name: "home", p: {} };
  let play = null; // estado de la partida
  function go(name, p = {}) { view = { name, p }; if (window.speechSynthesis) try { speechSynthesis.cancel(); } catch (e) { /* */ } render(); window.scrollTo(0, 0); }
  function render() {
    if (!S.profile && view.name !== "setup") view = { name: "setup", p: { first: true } };
    $("#top").innerHTML = topbar();
    const V = { setup: vSetup, home: vHome, subject: vSubject, lesson: vLesson, play: vPlay, result: vResult, plan: vPlan, courses: vCourses, course: vCourse, maker: vMaker, trophies: vTrophies }[view.name] || vHome;
    app().innerHTML = V(view.p);
    if (view.name === "play") mountPlay();
  }
  function topbar() {
    const n = view.name, cur = (x) => (x === n || (x === "home" && ["subject", "lesson"].includes(n)) || (x === "courses" && ["course", "maker"].includes(n)) ? 'aria-current="page"' : "");
    const p = S.profile;
    return `<button class="brand" data-act="go" data-to="home" aria-label="Ir al inicio"><span class="logo">${LUMI}</span><span>Aventura Escolar</span></button>
      ${p ? `<span class="pill star" title="Estrellas">⭐ ${S.stars}</span><span class="pill" title="Días seguidos estudiando">🔥 ${S.streak.n}</span>` : ""}
      ${p ? `<nav aria-label="Principal">
        <button class="navbtn" data-act="go" data-to="home" ${cur("home")}>🗺️ Mapa</button>
        <button class="navbtn" data-act="go" data-to="courses" ${cur("courses")}>📚 Cursos</button>
        <button class="navbtn" data-act="go" data-to="plan" ${cur("plan")}>📅 Plan</button>
        <button class="navbtn" data-act="go" data-to="trophies" ${cur("trophies")}>🏆 Logros</button>
        <button class="navbtn" data-act="settings" aria-label="Ajustes">⚙️</button>
      </nav>` : ""}`;
  }
  const starStr = (n) => [1, 2, 3].map((i) => (i <= n ? "⭐" : '<span class="off">⭐</span>')).join("");
  const prog = (k) => S.progress[k] || null;

  /* ---------- configuración ---------- */
  let draft = null;
  function vSetup(p) {
    draft = draft || Object.assign({ name: "", avatar: "🦊", adult: "Mamá", adultAvatar: "👩", country: "co", grade: 3 }, S.profile || {});
    const c = COUNTRIES[draft.country];
    return `<section class="setup">
      <div class="hero"><div class="mascot-big">${LUMI}</div><div>
        <p class="eyebrow">${p.first ? "¡Bienvenidos!" : "Ajustes del perfil"}</p>
        <h1>${p.first ? "Hola, soy Lumi. ¡Vamos a estudiar juntos!" : "Cambiemos el perfil"}</h1>
        <p>Elige el país y el grado y te muestro lo que se estudia en ese curso: matemáticas, inglés, lengua, ciencias, sociales y tecnología, con juegos para hacer en familia.</p></div></div>
      <div class="card stack">
        <div class="two">
          <div class="field"><label for="f-name">¿Cómo se llama quien estudia?</label><input id="f-name" class="input" maxlength="20" placeholder="Ej.: Fede" value="${esc(draft.name)}" data-bind="name"></div>
          <div class="field"><label for="f-adult">¿Quién acompaña?</label><input id="f-adult" class="input" maxlength="20" placeholder="Ej.: Mamá" value="${esc(draft.adult)}" data-bind="adult"></div>
        </div>
        <div class="two">
          <div class="field"><label>Personaje</label><div class="avatars">${AVATARS.map((a) => `<button class="avatar-opt" data-act="draft" data-k="avatar" data-v="${a}" aria-pressed="${draft.avatar === a}" aria-label="Personaje ${a}">${a}</button>`).join("")}</div></div>
          <div class="field"><label>Personaje del adulto</label><div class="avatars">${ADULT_AVATARS.map((a) => `<button class="avatar-opt" data-act="draft" data-k="adultAvatar" data-v="${a}" aria-pressed="${draft.adultAvatar === a}" aria-label="Personaje ${a}">${a}</button>`).join("")}</div></div>
        </div>
      </div>
      <div class="card stack"><h2>1. ¿En qué país estudian?</h2>
        <div class="grid-countries">${Object.entries(COUNTRIES).map(([k, v]) => `<button class="country" data-act="draft" data-k="country" data-v="${k}" aria-pressed="${draft.country === k}"><span class="flag" style="background:${v.flag}"></span>${v.name}</button>`).join("")}</div>
      </div>
      <div class="card stack"><h2>2. ¿En qué grado está?</h2>
        <div class="grid-grades">${c.grades.map((g, i) => `<button class="grade" data-act="draft" data-k="grade" data-v="${i}" aria-pressed="${+draft.grade === i}">${g}<small>${c.gradeSuffix[i] || "&nbsp;"}</small></button>`).join("")}</div>
        <p class="muted" style="margin:0">📐 Basado en: ${esc(c.framework)}. Los temas son una guía; revisen también lo que pide el colegio.</p>
      </div>
      <div class="row"><button class="btn big" data-act="saveProfile">${p.first ? "¡Empezar la aventura! 🚀" : "Guardar cambios"}</button>${p.first ? "" : '<button class="btn ghost" data-act="go" data-to="home">Cancelar</button>'}</div>
    </section>`;
  }

  /* ---------- inicio ---------- */
  function subjPct(s) { const list = TOPICS[s][S.profile.grade]; const done = list.filter((t) => prog(t.id)).length; return Math.round((done / list.length) * 100); }
  function vHome() {
    const P = S.profile, c = COUNTRIES[P.country];
    const today = (new Date().getDay() + 6) % 7, plan = S.plan && S.plan.days[today];
    let mission = plan && plan.items.length ? plan.items.map((it, i) => ({ ref: it.ref, done: it.done, fromPlan: i })) : null;
    if (!mission) mission = dailySuggestions().map((ref) => ({ ref }));
    const mine = S.courses.slice(-3).reverse();
    return `<section class="stack">
      <div class="welcome"><div><p class="eyebrow">${c.name} · ${esc(gradeLabel(P.country, P.grade))}</p>
        <h1>¡Hola, ${esc(P.name || "campeón")}! ${P.avatar}</h1><p class="meta" style="margin:4px 0 0">Hoy estudias con ${esc(P.adult || "tu acompañante")} ${P.adultAvatar}. Elige un mundo o pídele a Lumi un tema.</p></div>
        <div class="stats"><button class="btn" data-act="together">🤝 Reto en familia</button></div></div>
      <form class="ask" data-form="ask"><h2>✨ ¿Qué quieren aprender hoy?</h2>
        <div class="row"><input id="ask-q" class="input" name="q" placeholder="Ej.: divisiones de 2 cifras, los planetas, verbos en inglés…" autocomplete="off"><button class="btn" type="submit">Buscar o crear curso</button></div>
        <div class="chips">${["Divisiones de 2 cifras", "Fracciones", "Tablas de multiplicar", "El sistema solar", "Verbos en inglés", "Ortografía"].map((x) => `<button type="button" class="chip" data-act="askChip" data-q="${x}">${x}</button>`).join("")}</div>
      </form>
      <div class="section-head"><h2>🎯 Misión de hoy</h2><span class="muted">${plan ? "Del plan de estudio" : "Sugerida por Lumi"}</span><span class="spacer"></span>${S.plan ? "" : '<button class="btn ghost small" data-act="go" data-to="plan">Crear plan semanal</button>'}</div>
      <div class="mission">${mission.map((m) => taskCard(m.ref, m.done, m.fromPlan)).join("")}</div>
      <div class="section-head"><h2>🗺️ Mundos de ${esc(gradeLabel(P.country, P.grade))}</h2></div>
      <div class="worlds">${SUBJ_KEYS.map((s) => `<button class="world" style="--c:${SUBJECTS[s].color}" data-act="go" data-to="subject" data-id="${s}"><span class="icon">${SUBJECTS[s].icon}</span><h3>${esc(subjName(s))}</h3><span class="sub">${SUBJECTS[s].world} · ${TOPICS[s][P.grade].length} temas</span><span class="prog" aria-label="Progreso ${subjPct(s)}%"><i style="width:${subjPct(s)}%"></i></span></button>`).join("")}</div>
      ${mine.length ? `<div class="section-head"><h2>📚 Mis cursos</h2><span class="spacer"></span><button class="btn ghost small" data-act="go" data-to="courses">Ver todos</button></div><div class="courses">${mine.map(courseCard).join("")}</div>` : ""}
    </section>`;
  }
  function taskCard(ref, done, fromPlan) {
    const u = unit(ref); if (!u) return "";
    return `<button class="task ${done ? "done" : ""}" style="--c:${SUBJECTS[u.subj].color}" data-act="open" data-ref='${esc(JSON.stringify(ref))}' ${fromPlan != null ? `data-plan="${fromPlan}"` : ""}><span class="dot">${done ? "" : SUBJECTS[u.subj].icon}</span><span><b>${esc(u.title)}</b><small>${esc(subjName(u.subj))}</small></span><span class="stars">${starStr((prog(u.key) || {}).stars || 0)}</span></button>`;
  }
  function dailySuggestions() {
    const g = S.profile.grade;
    return shuffle(SUBJ_KEYS).slice(0, 3).map((s) => { const list = TOPICS[s][g]; const t = list.find((x) => !prog(x.id)) || list.slice().sort((a, b) => ((prog(a.id) || {}).stars || 0) - ((prog(b.id) || {}).stars || 0))[0]; return { type: "topic", id: t.id }; });
  }

  /* ---------- materia ---------- */
  function vSubject(p) {
    const s = p.id, g = p.grade != null ? +p.grade : S.profile.grade, list = TOPICS[s][g], c = COUNTRIES[S.profile.country];
    const nextIdx = list.findIndex((t) => !prog(t.id));
    return `<section class="stack">
      <div class="subject-hero" style="--c:${SUBJECTS[s].color}"><span class="icon">${SUBJECTS[s].icon}</span><div><p class="eyebrow" style="color:#fff;opacity:.85">${SUBJECTS[s].world}</p><h1>${esc(subjName(s))}</h1><p>${esc(gradeLabel(S.profile.country, g))} · ${list.length} temas para explorar</p></div></div>
      <div class="row"><button class="btn ghost small" data-act="go" data-to="home">← Mapa</button><span class="spacer"></span>
        <label class="muted" for="sel-grade">Ver otro grado:</label><select id="sel-grade" class="input" style="width:auto" data-act-change="gradeView" data-s="${s}">${c.grades.map((x, i) => `<option value="${i}" ${i === g ? "selected" : ""}>${esc(gradeLabel(S.profile.country, i))}</option>`).join("")}</select></div>
      <div class="path">${list.map((t, i) => { const pr = prog(t.id); return `<div class="stop"><button class="node ${pr ? "done" : ""} ${i === nextIdx ? "next" : ""}" style="--c:${SUBJECTS[s].color}" data-act="open" data-ref='${JSON.stringify({ type: "topic", id: t.id })}' aria-label="Tema ${i + 1}: ${esc(t.title)}">${pr ? "✓" : i + 1}</button><div class="info"><b>${esc(t.title)}</b><span class="stars">${starStr(pr ? pr.stars : 0)}</span>${pr ? `<div class="muted" style="font-size:.85rem">Mejor resultado: ${pr.best}%</div>` : ""}</div></div>`; }).join("")}</div>
      <p class="muted">Temas guiados por: ${esc(c.framework)}.</p>
    </section>`;
  }

  /* ---------- lección ---------- */
  let modeTogether = false;
  function vLesson(p) {
    const ref = p.ref, u = unit(ref); if (!u) return `<p>No encontramos esa lección.</p>`;
    const P = S.profile;
    return `<section class="lesson">
      <button class="btn ghost small" style="justify-self:start" data-act="back" data-ref='${esc(JSON.stringify(ref))}'>← Volver</button>
      <div class="lesson-head" style="--c:${SUBJECTS[u.subj].color}"><span class="badge">${SUBJECTS[u.subj].icon}</span><div><p class="eyebrow">${esc(u.where)}</p><h1>${esc(u.title)}</h1></div></div>
      <div class="bubble"><b>Aprendamos 💡</b><br>${esc(u.lesson || "")}</div>
      ${u.example ? `<div class="example">${esc(u.example)}</div>` : ""}
      ${u.tip ? `<div class="parent"><b>${P.adultAvatar} Para hacer juntos:</b> ${esc(u.tip)}</div>` : ""}
      <div class="row"><button class="btn ghost small" data-act="readLesson" data-ref='${esc(JSON.stringify(ref))}'>🔊 Escuchar la lección</button></div>
      <div class="mode-pick">
        <button class="mode" data-act="mode" data-v="0" aria-pressed="${!modeTogether}"><b>${P.avatar} Juego solo</b><span class="muted">${esc(P.name)} responde y ${esc(P.adult)} anima.</span></button>
        <button class="mode" data-act="mode" data-v="1" aria-pressed="${modeTogether}"><b>🤝 Modo juntos</b><span class="muted">Turnos entre ${esc(P.name)} y ${esc(P.adult)}, con marcador.</span></button>
      </div>
      <button class="btn big" data-act="start" data-ref='${esc(JSON.stringify(ref))}' ${p.plan != null ? `data-plan="${p.plan}"` : ""}>¡A jugar! 🎮</button>
    </section>`;
  }

  /* ---------- partida ---------- */
  function startPlay(ref, planIdx, together, qsOverride) {
    const u = unit(ref); if (!u) return;
    const P = S.profile;
    const players = [{ name: P.name || "Yo", av: P.avatar, pts: 0 }]; if (together) players.push({ name: P.adult || "Adulto", av: P.adultAvatar, pts: 0 });
    const qs = qsOverride || buildQuestions(u);
    if (!qs.length) { toast("Esta lección no tiene actividades todavía"); return; }
    play = { ref, u, planIdx, players, qs, i: 0, correct: 0, answered: false, hinted: false };
    go("play");
  }
  function vPlay() {
    const g = play, q = g.qs[g.i], turn = g.players.length > 1 ? g.i % 2 : 0, P = S.profile;
    const turnMsg = g.players.length > 1 ? (turn === 0 ? `Turno de ${esc(g.players[0].name)} ${g.players[0].av}. ${esc(P.adult)}: ¡solo pistas!` : `Turno de ${esc(g.players[1].name)} ${g.players[1].av}. Explica en voz alta cómo lo piensas.`) : "";
    let body = "";
    if (q.kind === "choice") {
      const opts = q.keepOrder ? q.keepOrder.filter((o) => q.options.includes(o)) : q.options;
      body = `${q.visual ? `<div class="visual ${q.visualClass || ""}">${q.visual}</div>` : ""}
        <div class="opts" id="opts">${opts.map((o) => `<button class="opt" data-act="answer" data-v="${esc(o)}" style="${q.emojiOpts ? "font-size:2.4rem" : ""}">${esc(o)}</button>`).join("")}</div>`;
    } else if (q.kind === "order") {
      body = `<div class="slots ${q.vertical ? "vertical" : ""}" id="slots" aria-label="Tu respuesta"></div><div class="pool ${q.vertical ? "vertical" : ""}" id="pool"></div>`;
    } else if (q.kind === "robot") {
      body = `<div class="robot-wrap" id="robot"></div>`;
    }
    const canSpeak = q.speak || q.readText;
    return `<section class="play">
      <div class="play-top"><button class="btn ghost small" data-act="quit" aria-label="Salir">✕</button><div class="progress" aria-label="Pregunta ${g.i + 1} de ${g.qs.length}"><i style="width:${(g.i / g.qs.length) * 100}%"></i></div><span class="pill">${g.i + 1}/${g.qs.length}</span></div>
      ${g.players.length > 1 ? `<div class="players">${g.players.map((pl, i) => `<span class="player ${i === turn ? "turn" : ""}"><span class="av">${pl.av}</span>${esc(pl.name)} · ${pl.pts}</span>`).join("")}</div>` : ""}
      <div class="qcard">
        ${turnMsg ? `<div class="turnmsg">${turnMsg}</div>` : ""}
        <div class="row" style="justify-content:center"><div class="prompt" style="${q.small ? "font-size:clamp(1.1rem,2.6vw,1.45rem)" : ""}">${esc(q.prompt)}</div>${canSpeak && !q.speakAfter ? `<button class="speak" data-act="speakQ" aria-label="Escuchar">🔊</button>` : ""}</div>
        ${body}
        <div class="feedback" id="fb" role="status"></div>
        <div id="after" class="row" style="justify-content:center">${q.kind === "choice" && q.options.length > 2 ? '<button class="btn ghost small" data-act="hint">🤝 Pista</button>' : ""}</div>
      </div></section>`;
  }
  function mountPlay() {
    const q = play.qs[play.i];
    if (q.kind === "order") mountOrder(q);
    if (q.kind === "robot") mountRobot(q);
    if (q.speak && q.speakFirst) setTimeout(() => speak(q.speak, "en-US"), 350);
  }
  function award(ok) {
    const g = play, turn = g.players.length > 1 ? g.i % 2 : 0;
    if (ok) { g.correct++; g.players[turn].pts++; sfx.right(); say(pick(CHEERS), "happy"); }
    else { sfx.wrong(); say(pick(OOPS) + " ¡Inténtalo en la próxima!", "sad"); }
  }
  function onAnswer(btn) {
    const g = play, q = g.qs[g.i]; if (g.answered) return; g.answered = true;
    const ok = btn.dataset.v === q.answer;
    $("#opts").classList.add("locked");
    document.querySelectorAll("#opts .opt").forEach((b) => { if (b.dataset.v === q.answer) b.classList.add("right"); else if (b !== btn) b.classList.add("dim"); });
    if (!ok) btn.classList.add("wrong");
    award(ok);
    const fb = $("#fb"); fb.className = "feedback " + (ok ? "good" : "bad");
    fb.textContent = ok ? pick(CHEERS) : `${pick(OOPS)} La respuesta es: ${q.answer}`;
    if (q.speak && (q.speakAfter || !q.speakFirst)) speak(q.speak, q.speakLang || "en-US");
    const after = $("#after");
    after.innerHTML = `${q.explain ? `<div class="explain">💡 ${esc(q.explain)}</div>` : ""}<button class="btn" data-act="next">${g.i + 1 < g.qs.length ? "Siguiente ➜" : "Ver resultado 🏁"}</button>`;
    if (ok && !q.explain) setTimeout(() => { if (play === g && g.answered && g.qs[g.i] === q) nextQ(); }, 1300);
  }
  function nextQ() { const g = play; if (!g) return; g.i++; g.answered = false; g.hinted = false; if (g.i >= g.qs.length) return finish(); render(); }
  function hint() {
    const g = play, q = g.qs[g.i]; if (g.hinted || g.answered) return; g.hinted = true;
    const wrong = [...document.querySelectorAll("#opts .opt")].filter((b) => b.dataset.v !== q.answer && !b.classList.contains("dim"));
    if (wrong.length > 1) { const b = pick(wrong); b.classList.add("dim"); b.disabled = true; }
    say(g.players.length > 1 ? "¡Quité una opción! Piénsenlo juntos 🤝" : "¡Quité una opción incorrecta!");
  }
  // ordenar
  function mountOrder(q) {
    const st = { placed: [], pool: shuffle(q.items.map((w, i) => ({ w, i }))) };
    if (st.pool.every((x, i) => x.i === i) && q.items.length > 1) st.pool.reverse();
    const draw = () => {
      $("#pool").innerHTML = st.pool.map((x, k) => `<button class="word" data-k="${k}" style="animation-delay:${k * 0.04}s">${esc(x.w)}</button>`).join("");
      $("#slots").innerHTML = st.placed.length ? st.placed.map((x, k) => `<button class="word" data-k="${k}">${q.vertical ? `${k + 1}. ` : ""}${esc(x.w)}</button>`).join("") : '<span class="muted">Toca las fichas en orden</span>';
      $("#after").innerHTML = `<button class="btn" id="chk" ${st.pool.length ? "disabled" : ""}>Comprobar ✔️</button>`;
    };
    $("#pool").onclick = (e) => { const b = e.target.closest(".word"); if (!b || play.answered) return; sfx.tap(); st.placed.push(st.pool.splice(+b.dataset.k, 1)[0]); draw(); };
    $("#slots").onclick = (e) => { const b = e.target.closest(".word"); if (!b || play.answered) return; st.pool.push(st.placed.splice(+b.dataset.k, 1)[0]); draw(); };
    $("#after").onclick = (e) => {
      if (e.target.id !== "chk" || play.answered) return; play.answered = true;
      const ok = st.placed.map((x) => x.w).join("|") === q.items.join("|");
      $("#slots").classList.add(ok ? "ok" : "no"); award(ok);
      const fb = $("#fb"); fb.className = "feedback " + (ok ? "good" : "bad");
      fb.textContent = ok ? pick(CHEERS) : `${pick(OOPS)} El orden correcto es: ${q.items.join(q.vertical ? " → " : " ")}`;
      if (q.speak) speak(q.speak, "en-US");
      $("#after").onclick = null;
      $("#after").innerHTML = `<button class="btn" data-act="next">${play.i + 1 < play.qs.length ? "Siguiente ➜" : "Ver resultado 🏁"}</button>`;
    };
    draw();
  }
  // robot
  function makeLevel(lv) {
    const N = [4, 5, 5, 6, 6, 7][lv] || 5, rocks = [0, 1, 4, 7, 9, 13][lv] || 0, minLen = [2, 4, 5, 6, 8, 9][lv] || 3;
    for (let tries = 0; tries < 400; tries++) {
      const grid = Array.from({ length: N }, () => Array(N).fill(0));
      const start = [R(0, N - 1), R(0, N - 1)];
      let placed = 0; while (placed < rocks) { const r = R(0, N - 1), c = R(0, N - 1); if (!grid[r][c] && !(r === start[0] && c === start[1])) { grid[r][c] = 1; placed++; } }
      const dist = Array.from({ length: N }, () => Array(N).fill(-1)); dist[start[0]][start[1]] = 0; const qq = [start];
      while (qq.length) { const [r, c] = qq.shift(); [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dr, dc]) => { const a = r + dr, b = c + dc; if (a >= 0 && b >= 0 && a < N && b < N && !grid[a][b] && dist[a][b] < 0) { dist[a][b] = dist[r][c] + 1; qq.push([a, b]); } }); }
      const cands = []; for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (dist[r][c] >= minLen) cands.push([r, c]);
      if (cands.length) { const goal = pick(cands); return { N, grid, start, goal, best: dist[goal[0]][goal[1]] }; }
    }
    return { N: 4, grid: Array.from({ length: 4 }, () => Array(4).fill(0)), start: [0, 0], goal: [3, 3], best: 6 };
  }
  function mountRobot(q) {
    const L = q.lvl || (q.lvl = makeLevel(q.level)); const st = { prog: [], pos: [...L.start], trail: [], running: false, fails: 0 };
    const ARR = { U: ["⬆️", -1, 0], D: ["⬇️", 1, 0], L: ["⬅️", 0, -1], Rt: ["➡️", 0, 1] };
    const draw = (active = -1) => {
      let cells = "";
      for (let r = 0; r < L.N; r++) for (let c = 0; c < L.N; c++) {
        const here = st.pos[0] === r && st.pos[1] === c, goal = L.goal[0] === r && L.goal[1] === c;
        cells += `<div class="cell ${st.trail.some((t) => t[0] === r && t[1] === c) ? "trail" : ""}">${here ? '<span class="bot">🤖</span>' : goal ? "⭐" : L.grid[r][c] ? "🪨" : ""}</div>`;
      }
      $("#robot").innerHTML = `<p class="muted" style="margin:0;text-align:center">Lleva al robot 🤖 hasta la estrella ⭐${L.grid.flat().some(Boolean) ? " sin chocar con las rocas 🪨" : ""}. ¡Se puede en ${L.best} pasos!</p>
        <div class="grid-robot" style="grid-template-columns:repeat(${L.N},1fr)">${cells}</div>
        <div class="program" aria-label="Programa">${st.prog.length ? st.prog.map((s, i) => `<span class="step ${i === active ? "active" : ""}">${ARR[s][0]}</span>`).join("") : '<span class="muted">Tu programa aparecerá aquí</span>'}</div>
        <div class="arrows">${["U", "L", "D", "Rt"].map((k) => `<button class="btn small" data-rb="${k}" style="--b:var(--c-tec)" aria-label="${{ U: "Arriba", L: "Izquierda", D: "Abajo", Rt: "Derecha" }[k]}" ${st.running ? "disabled" : ""}>${ARR[k][0]}</button>`).join("")}
        <button class="btn ghost small" data-rb="undo" ${st.running ? "disabled" : ""} aria-label="Borrar último">⌫</button></div>
        <div class="row" style="justify-content:center"><button class="btn" data-rb="run" ${st.running || !st.prog.length ? "disabled" : ""}>▶ Ejecutar</button>${st.fails ? '<button class="btn ghost small" data-rb="skip">Saltar reto</button>' : ""}</div>`;
    };
    $("#after").innerHTML = "";
    $("#robot").onclick = async (e) => {
      const b = e.target.closest("[data-rb]"); if (!b || st.running || play.answered) return; const k = b.dataset.rb;
      if (ARR[k]) { if (st.prog.length < 30) { st.prog.push(k); sfx.tap(); } }
      else if (k === "undo") st.prog.pop();
      else if (k === "skip") { play.answered = true; award(false); $("#fb").className = "feedback bad"; $("#fb").textContent = "¡No pasa nada! Lo intentamos en el siguiente."; $("#after").innerHTML = `<button class="btn" data-act="next">${play.i + 1 < play.qs.length ? "Siguiente ➜" : "Ver resultado 🏁"}</button>`; }
      else if (k === "run") {
        st.running = true; st.pos = [...L.start]; st.trail = []; draw();
        let fail = "";
        for (let i = 0; i < st.prog.length; i++) {
          await new Promise((r) => setTimeout(r, 380));
          const [, dr, dc] = ARR[st.prog[i]], nr = st.pos[0] + dr, nc = st.pos[1] + dc;
          if (nr < 0 || nc < 0 || nr >= L.N || nc >= L.N) { fail = "¡Ups! El robot se salió del tablero."; break; }
          if (L.grid[nr][nc]) { fail = "¡Pum! El robot chocó con una roca."; break; }
          st.trail.push([...st.pos]); st.pos = [nr, nc]; sfx.step(); draw(i);
        }
        st.running = false;
        const okGoal = !fail && st.pos[0] === L.goal[0] && st.pos[1] === L.goal[1];
        if (okGoal) {
          play.answered = true; award(st.fails === 0);
          $("#fb").className = "feedback good"; $("#fb").textContent = st.prog.length === L.best ? "¡Perfecto! Camino más corto 🏅" : `¡Llegaste! Usaste ${st.prog.length} pasos.`;
          draw(); $("#after").innerHTML = `<button class="btn" data-act="next">${play.i + 1 < play.qs.length ? "Siguiente ➜" : "Ver resultado 🏁"}</button>`; return;
        }
        st.fails++; sfx.wrong(); say(fail || "Todavía no llega a la estrella. ¡Corrige el programa!", "sad");
        $("#fb").className = "feedback bad"; $("#fb").textContent = (fail || "No llegó a la estrella.") + " Ajusta tu programa y vuelve a intentar.";
        st.pos = [...L.start]; st.trail = [];
      }
      draw();
    };
    draw();
  }
  function finish() {
    const g = play, total = g.qs.length, pct = Math.round((g.correct / total) * 100);
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : 1;
    const k = g.u.key, old = S.progress[k] || { stars: 0, best: 0, plays: 0 };
    S.progress[k] = { stars: Math.max(old.stars, stars), best: Math.max(old.best, pct), plays: old.plays + 1, last: todayStr(), lastPct: pct };
    S.stars += stars;
    let sticker = null;
    if (stars >= 2) { const free = STICKERS.filter((x) => !S.stickers.includes(x)); if (free.length) { sticker = pick(free); S.stickers.push(sticker); } }
    const t = todayStr();
    if (S.streak.last !== t) { const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10); S.streak.n = S.streak.last === y ? S.streak.n + 1 : 1; S.streak.last = t; }
    S.history.push({ k, d: t, pct, title: g.u.title, subj: g.u.subj }); if (S.history.length > 200) S.history = S.history.slice(-200);
    if (g.planIdx != null && S.plan) { const day = S.plan.days[(new Date().getDay() + 6) % 7]; if (day && day.items[g.planIdx]) day.items[g.planIdx].done = true; }
    if (g.ref.type === "course") { const c = S.courses.find((x) => x.id === g.ref.cid); if (c) { c.lastStudied = t; } }
    save();
    play.result = { pct, stars, sticker };
    go("result");
    sfx.win(); if (stars >= 2) confetti();
    say(stars === 3 ? "¡Tres estrellas! ¡Eres increíble!" : stars === 2 ? "¡Muy bien! Un poco más y llegas a 3 estrellas." : "¡Buen esfuerzo! Repasemos juntos otra vez.", "happy");
  }
  function vResult() {
    const g = play; if (!g || !g.result) return vHome();
    const { pct, stars, sticker } = g.result, nx = nextRef(g.ref);
    const winner = g.players.length > 1 ? (g.players[0].pts === g.players[1].pts ? "¡Empate! Ganó el trabajo en equipo 🤝" : `¡Ganó ${esc(g.players[0].pts > g.players[1].pts ? g.players[0].name : g.players[1].name)}! 🏆`) : "";
    return `<section class="result card">
      <p class="eyebrow">${esc(g.u.title)}</p>
      <div class="big-stars">${[1, 2, 3].map((i) => `<span class="${i <= stars ? "" : "off"}">⭐</span>`).join("")}</div>
      <h1>${stars === 3 ? "¡Misión perfecta!" : stars === 2 ? "¡Muy bien hecho!" : "¡Buen intento!"}</h1>
      <p class="muted" style="margin:0">Acertaste ${g.correct} de ${g.qs.length} (${pct}%).</p>
      ${g.players.length > 1 ? `<div class="scoreboard">${g.players.map((p) => `<span class="player"><span class="av">${p.av}</span>${esc(p.name)}: ${p.pts}</span>`).join("")}</div><b>${winner}</b>` : ""}
      ${sticker ? `<div class="sticker-won">${sticker}</div><p style="margin:0">¡Nueva lámina para tu álbum!</p>` : ""}
      ${stars < 2 ? `<div class="parent" style="text-align:left"><b>${S.profile.adultAvatar} Sugerencia:</b> repasen juntos la explicación y vuelvan a intentarlo. Equivocarse es parte de aprender.</div>` : ""}
      <div class="row" style="justify-content:center">
        <button class="btn ghost" data-act="again">🔁 Otra vez</button>
        ${nx ? `<button class="btn" data-act="open" data-ref='${esc(JSON.stringify(nx))}'>Siguiente tema ➜</button>` : ""}
        <button class="btn ghost" data-act="back" data-ref='${esc(JSON.stringify(g.ref))}'>Volver</button>
      </div></section>`;
  }

  /* ---------- plan de estudio ---------- */
  let planDraft = null;
  function vPlan() {
    planDraft = planDraft || { subjects: [...SUBJ_KEYS], prio: [], days: [0, 1, 2, 3, 4], minutes: 20, withCourses: true };
    const d = planDraft, today = (new Date().getDay() + 6) % 7;
    const form = `<div class="card plan-form">
      <h2>${S.plan ? "Rehacer el plan" : "Arma tu plan semanal"}</h2>
      <div class="field"><label>Materias</label><div class="toggles">${SUBJ_KEYS.map((s) => `<button class="toggle" data-act="pl" data-k="subjects" data-v="${s}" aria-pressed="${d.subjects.includes(s)}">${SUBJECTS[s].icon} ${esc(subjName(s))}</button>`).join("")}</div></div>
      <div class="field"><label>¿Cuáles necesitan refuerzo? <span class="muted">(aparecen el doble)</span></label><div class="toggles">${SUBJ_KEYS.map((s) => `<button class="toggle prio" data-act="pl" data-k="prio" data-v="${s}" aria-pressed="${d.prio.includes(s)}">${SUBJECTS[s].icon} ${esc(subjName(s))}</button>`).join("")}</div></div>
      <div class="field"><label>Días de estudio</label><div class="toggles">${DAYS.map((x, i) => `<button class="toggle" data-act="pl" data-k="days" data-v="${i}" aria-pressed="${d.days.includes(i)}">${x}</button>`).join("")}</div></div>
      <div class="field"><label>Minutos por día</label><div class="toggles">${[15, 20, 30, 45].map((m) => `<button class="toggle" data-act="pl" data-k="minutes" data-v="${m}" aria-pressed="${d.minutes === m}">${m} min</button>`).join("")}</div></div>
      ${S.courses.length ? `<div class="field"><label>Mis cursos</label><div class="toggles"><button class="toggle" data-act="pl" data-k="withCourses" data-v="1" aria-pressed="${d.withCourses}">📚 Incluir lecciones de mis cursos</button></div></div>` : ""}
      <div class="row"><button class="btn" data-act="makePlan">✨ Crear plan</button>${S.plan ? '<button class="btn ghost" data-act="planCancel">Cancelar</button>' : ""}</div></div>`;
    if (!S.plan || view.p.edit) return `<section class="stack"><div class="section-head"><h1>📅 Plan de estudio</h1></div><p class="muted" style="margin:0">Lumi reparte los temas del grado entre los días que elijan, empezando por lo que aún no han practicado.</p>${form}</section>`;
    const done = S.plan.days.flatMap((x) => x.items).filter((x) => x.done).length, all = S.plan.days.flatMap((x) => x.items).length;
    return `<section class="stack">
      <div class="section-head"><h1>📅 Plan de la semana</h1><span class="spacer"></span><button class="btn ghost small" data-act="go" data-to="plan" data-edit="1">✏️ Cambiar plan</button></div>
      <div class="card row"><b style="font-family:var(--f-display)">Avance: ${done} de ${all}</b><div class="bar" style="flex:1;min-width:120px"><i style="width:${all ? (done / all) * 100 : 0}%"></i></div></div>
      <div class="week">${S.plan.days.map((day, di) => `<div class="day ${di === today ? "today" : ""}"><h3>${DAYS[di]}${di === today ? '<span class="tag">Hoy</span>' : ""}</h3>${day.items.length ? day.items.map((it, ii) => di === today ? taskCard(it.ref, it.done, ii) : taskCard(it.ref, it.done)).join("") : '<span class="muted">Descanso 😴</span>'}</div>`).join("")}</div>
    </section>`;
  }
  function makePlan() {
    const d = planDraft; if (!d.subjects.length || !d.days.length) { toast("Elige al menos una materia y un día"); return; }
    const per = { 15: 1, 20: 2, 30: 3, 45: 4 }[d.minutes] || 2;
    let pool = []; d.subjects.forEach((s) => { pool.push(s); if (d.prio.includes(s)) pool.push(s); });
    pool = shuffle(pool);
    const g = S.profile.grade, cursor = {};
    const nextTopic = (s) => {
      const list = TOPICS[s][g].slice().sort((a, b) => ((prog(a.id) || {}).stars || 0) - ((prog(b.id) || {}).stars || 0));
      cursor[s] = (cursor[s] || 0) % list.length; return { type: "topic", id: list[cursor[s]++].id };
    };
    const courseQueue = [];
    if (d.withCourses) S.courses.forEach((c) => courseLessons(c).forEach((l, li) => { const p = prog(`${c.id}:${li}`); if (!p || p.stars < 2) courseQueue.push({ type: "course", cid: c.id, li }); }));
    let pi = 0;
    const days = DAYS.map((_, di) => {
      if (!d.days.includes(di)) return { items: [] };
      const items = [];
      for (let k = 0; k < per; k++) {
        if (courseQueue.length && k === per - 1 && per > 1) items.push({ ref: courseQueue.shift(), done: false });
        else items.push({ ref: nextTopic(pool[pi++ % pool.length]), done: false });
      }
      return { items };
    });
    S.plan = { created: todayStr(), settings: d, days }; save(); toast("¡Plan listo! 🎉"); go("plan");
  }

  /* ---------- cursos ---------- */
  function courseCard(c) {
    const ls = courseLessons(c), done = ls.filter((_, i) => prog(`${c.id}:${i}`)).length, saved = S.courses.some((x) => x.id === c.id);
    const weak = ls.filter((_, i) => { const p = prog(`${c.id}:${i}`); return p && p.stars < 2; }).length;
    return `<button class="course" style="--c:${SUBJECTS[c.subject] ? SUBJECTS[c.subject].color : "var(--c-mat)"}" data-act="go" data-to="course" data-id="${esc(c.id)}">
      <span class="top"><span class="em">${esc(c.emoji || "📘")}</span><span><h3>${esc(c.title)}</h3><span class="tag ${c.source === "ai" ? "ai" : ""}">${c.source === "ai" ? "✨ Creado con IA" : SUBJECTS[c.subject] ? esc(subjName(c.subject)) : "Curso"}</span> ${weak ? `<span class="tag weak">${weak} por reforzar</span>` : ""}</span></span>
      <p>${esc(c.summary || "")}</p>
      ${saved ? `<span class="muted" style="font-size:.85rem">${done} de ${ls.length} lecciones</span><span class="bar"><i style="width:${ls.length ? (done / ls.length) * 100 : 0}%"></i></span>` : `<span class="muted" style="font-size:.85rem">${ls.length} lecciones</span>`}
    </button>`;
  }
  function vCourses(p) {
    const q = norm(p.q || ""), g = S.profile.grade;
    const words = q.split(/\s+/).filter((w) => w.length > 2);
    const match = (txt) => !words.length || words.some((w) => norm(txt).includes(w.replace(/s$/, "")));
    const ready = COURSES.filter((c) => (q ? match(c.title + " " + c.keywords + " " + c.summary) : true)).sort((a, b) => Math.abs(g - (a.grades[0] + a.grades[1]) / 2) - Math.abs(g - (b.grades[0] + b.grades[1]) / 2));
    const topics = q ? Object.values(TOPIC_INDEX).filter((x) => match(x.t.title + " " + x.t.lesson)).slice(0, 8) : [];
    return `<section class="stack">
      <div class="section-head"><h1>📚 Cursos</h1></div>
      <form class="ask" data-form="ask"><h2>🔎 Busca un tema o crea un curso nuevo</h2>
        <div class="row"><input id="ask-q2" class="input" name="q" value="${esc(p.q || "")}" placeholder="Ej.: divisiones de 2 cifras" autocomplete="off"><button class="btn" type="submit">Buscar</button></div></form>
      ${q ? `<div class="card row"><span style="font-size:2rem">✨</span><div style="flex:1;min-width:200px"><b style="font-family:var(--f-display);font-size:1.2rem">¿Quieres un curso a la medida sobre «${esc(p.q)}»?</b><div class="muted">La IA arma lecciones, explicaciones y actividades para ${esc(gradeLabel(S.profile.country, g))}.</div></div><button class="btn" data-act="go" data-to="maker" data-q="${esc(p.q)}">Crear con IA</button></div>` : ""}
      ${S.courses.length && !q ? `<div class="section-head"><h2>⭐ Mis cursos guardados</h2></div><div class="courses">${S.courses.slice().reverse().map(courseCard).join("")}</div>` : ""}
      <div class="section-head"><h2>${q ? "Cursos listos que coinciden" : "🎒 Cursos listos"}</h2><span class="spacer"></span>${q ? "" : '<button class="btn ghost small" data-act="go" data-to="maker">✨ Crear curso con IA</button>'}</div>
      ${ready.length ? `<div class="courses">${ready.map(courseCard).join("")}</div>` : '<p class="muted">No hay cursos listos con ese tema. ¡Créalo con IA!</p>'}
      ${topics.length ? `<div class="section-head"><h2>Temas relacionados del currículo</h2></div><div class="mission">${topics.map((x) => taskCard({ type: "topic", id: x.t.id })).join("")}</div>` : ""}
    </section>`;
  }
  function vCourse(p) {
    const c = findCourse(p.id); if (!c) return `<p>Curso no encontrado.</p>`;
    const saved = S.courses.find((x) => x.id === c.id), ls = courseLessons(c);
    const done = ls.filter((_, i) => prog(`${c.id}:${i}`)).length;
    const played = ls.map((_, i) => prog(`${c.id}:${i}`)).filter(Boolean), avg = played.length ? Math.round(played.reduce((a, b) => a + b.best, 0) / played.length) : 0;
    const weakIdx = ls.map((_, i) => i).filter((i) => { const pr = prog(`${c.id}:${i}`); return pr && pr.stars < 2; });
    const nextIdx = ls.findIndex((_, i) => !prog(`${c.id}:${i}`));
    return `<section class="stack">
      <button class="btn ghost small" style="justify-self:start" data-act="go" data-to="courses">← Cursos</button>
      <div class="subject-hero" style="--c:${SUBJECTS[c.subject] ? SUBJECTS[c.subject].color : "var(--c-mat)"}"><span class="icon">${esc(c.emoji || "📘")}</span><div><p class="eyebrow" style="color:#fff;opacity:.85">${c.source === "ai" ? "✨ Curso creado con IA" : "Curso listo"} · ${SUBJECTS[c.subject] ? esc(subjName(c.subject)) : ""}</p><h1>${esc(c.title)}</h1><p>${esc(c.summary || "")}</p></div></div>
      ${saved ? `<div class="card row"><div><b style="font-family:var(--f-display)">Seguimiento</b><div class="muted">${done}/${ls.length} lecciones · promedio ${avg}% ${saved.lastStudied ? `· último estudio ${saved.lastStudied}` : ""}</div></div><div class="bar" style="flex:1;min-width:140px"><i style="width:${ls.length ? (done / ls.length) * 100 : 0}%"></i></div>${nextIdx >= 0 ? `<button class="btn" data-act="open" data-ref='${esc(JSON.stringify({ type: "course", cid: c.id, li: nextIdx }))}'>Continuar ➜</button>` : '<span class="tag">¡Completado! 🏆</span>'}</div>`
        : `<div class="card row"><span style="font-size:1.8rem">💾</span><div style="flex:1;min-width:200px"><b style="font-family:var(--f-display)">Guarda este curso</b><div class="muted">Así queda en “Mis cursos”, con progreso por lección y sugerencias de refuerzo.</div></div><button class="btn" data-act="saveReady" data-id="${esc(c.id)}">Guardar en mis cursos</button></div>`}
      ${c.parentGuide ? `<div class="parent"><b>${S.profile.adultAvatar} Guía para el adulto:</b> ${esc(c.parentGuide)}</div>` : ""}
      ${weakIdx.length ? `<div class="notice"><b>🎯 Para reforzar:</b> ${weakIdx.map((i) => esc(ls[i].title)).join(", ")}. Repítanlas o pidan más ejercicios.</div>` : ""}
      <div class="lessons">${ls.map((l, i) => { const pr = prog(`${c.id}:${i}`); const ref = JSON.stringify({ type: "course", cid: c.id, li: i }); return `<div class="lesson-row ${pr ? "done" : ""}"><span class="num">${pr ? "✓" : i + 1}</span><span><b>${esc(l.title)}</b><span class="stars">${starStr(pr ? pr.stars : 0)}</span> ${pr ? `<span class="muted" style="font-size:.85rem">mejor ${pr.best}% · ${pr.plays} ${pr.plays === 1 ? "vez" : "veces"}</span>` : ""}</span><span class="row">${c.source === "ai" && pr && pr.stars < 3 ? `<button class="btn ghost small" data-act="morePractice" data-id="${esc(c.id)}" data-li="${i}">✨ Más ejercicios</button>` : ""}<button class="btn small" data-act="open" data-ref='${esc(ref)}'>${pr ? "Repasar" : "Empezar"}</button></span></div>`; }).join("")}</div>
      ${saved ? `<div class="row"><span class="spacer"></span><button class="btn ghost small" data-act="removeCourse" data-id="${esc(c.id)}">Quitar de mis cursos</button></div>` : ""}
    </section>`;
  }

  /* ---------- creador de cursos con IA ---------- */
  let maker = { status: "idle", course: null, error: "", form: null };
  function vMaker(p) {
    const P = S.profile;
    maker.form = maker.form || { topic: p.q || "", subject: "auto", grade: P.grade, lessons: 5, notes: "" };
    const f = maker.form, c = COUNTRIES[P.country];
    if (maker.status === "loading") return `<section class="card thinking"><div class="orbit">🪐</div><h2>Lumi está creando tu curso…</h2><p class="log" id="mk-log">Revisando lo que se estudia en ${esc(gradeLabel(P.country, f.grade))}…</p><p class="muted">Puede tardar hasta un minuto.</p></section>`;
    if (maker.status === "done" && maker.course) {
      const m = maker.course;
      return `<section class="stack"><div class="subject-hero" style="--c:${SUBJECTS[m.subject] ? SUBJECTS[m.subject].color : "var(--c-ing)"}"><span class="icon">${esc(m.emoji || "📘")}</span><div><p class="eyebrow" style="color:#fff;opacity:.85">✨ Vista previa del curso</p><h1>${esc(m.title)}</h1><p>${esc(m.summary || "")}</p></div></div>
        ${m.parentGuide ? `<div class="parent"><b>${P.adultAvatar} Guía para el adulto:</b> ${esc(m.parentGuide)}</div>` : ""}
        <div class="lessons">${m.lessons.map((l, i) => `<div class="lesson-row"><span class="num">${i + 1}</span><span><b>${esc(l.title)}</b><span class="muted" style="font-size:.9rem">${esc(l.explanation).slice(0, 140)}${(l.explanation || "").length > 140 ? "…" : ""} · ${l.activities.length} actividades</span></span></div>`).join("")}</div>
        <div class="row"><button class="btn big" data-act="saveAi">💾 Guardar en mis cursos</button><button class="btn ghost" data-act="makerRetry">🔁 Generar otra versión</button><button class="btn ghost" data-act="makerReset">Cambiar el pedido</button></div></section>`;
    }
    return `<section class="stack maker">
      <button class="btn ghost small" style="justify-self:start" data-act="go" data-to="courses">← Cursos</button>
      <div class="section-head"><h1>✨ Crear curso con IA</h1></div>
      <p class="muted" style="margin:0">Escribe qué quieren aprender. La IA arma un curso completo (explicaciones, ejemplos, actividades y guía para el adulto) adaptado a ${esc(c.name)} y al grado elegido.</p>
      ${maker.error ? `<div class="notice err">${maker.error}</div>` : ""}
      <form class="card stack" data-form="maker">
        <div class="field"><label for="mk-topic">¿Qué quieren aprender?</label><input id="mk-topic" class="input" name="topic" required maxlength="160" value="${esc(f.topic)}" placeholder="Ej.: divisiones de 2 cifras, los volcanes, el pasado en inglés…"></div>
        <div class="two">
          <div class="field"><label for="mk-subj">Materia</label><select id="mk-subj" class="input" name="subject"><option value="auto">Que la IA decida</option>${SUBJ_KEYS.map((s) => `<option value="${s}" ${f.subject === s ? "selected" : ""}>${esc(subjName(s))}</option>`).join("")}</select></div>
          <div class="field"><label for="mk-grade">Grado</label><select id="mk-grade" class="input" name="grade">${c.grades.map((_, i) => `<option value="${i}" ${+f.grade === i ? "selected" : ""}>${esc(gradeLabel(P.country, i))}</option>`).join("")}</select></div>
        </div>
        <div class="two">
          <div class="field"><label for="mk-n">Número de lecciones</label><select id="mk-n" class="input" name="lessons">${[3, 4, 5, 6].map((n) => `<option ${+f.lessons === n ? "selected" : ""}>${n}</option>`).join("")}</select></div>
          <div class="field"><label for="mk-notes">Notas para personalizar (opcional)</label><input id="mk-notes" class="input" name="notes" maxlength="240" value="${esc(f.notes)}" placeholder="Ej.: le cuesta estimar, le encantan los dinosaurios"></div>
        </div>
        <div class="row"><button class="btn big" type="submit">✨ Crear curso</button><span class="muted" id="ai-status"></span></div>
      </form></section>`;
  }
  async function aiAvailable() { if (await cap("sample")) return "claude"; if (S.apiKey) return "key"; return null; }
  async function askAI(prompt) {
    const sample = await cap("sample");
    if (sample) return sample.json(prompt, { modelTier: "default" });
    if (!S.apiKey) throw { code: "no_ai" };
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": S.apiKey, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true", "anthropic-beta": "server-side-fallback-2026-07-01" },
      body: JSON.stringify({ model: "claude-opus-5-5", max_tokens: 16000, output_config: { effort: "medium" }, fallbacks: "default", messages: [{ role: "user", content: prompt }] })
    });
    if (!res.ok) { let m = ""; try { m = (await res.json()).error.message; } catch (e) { /* */ } throw { code: "http", message: `${res.status} ${m}` }; }
    const data = await res.json();
    if (data.stop_reason === "refusal") throw { code: "refusal" };
    const text = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("");
    return parseJSON(text);
  }
  function parseJSON(t) { const s = t.indexOf("{"), e = t.lastIndexOf("}"); if (s < 0 || e < s) throw { code: "invalid_json" }; return JSON.parse(t.slice(s, e + 1)); }
  function coursePrompt(f) {
    const P = S.profile, c = COUNTRIES[P.country];
    return `Eres un pedagogo experto en educación primaria de ${c.name}. Diseña un curso corto, divertido y riguroso para estudiar en casa entre un niño o niña y un adulto.

Tema pedido: "${f.topic}"
País: ${c.name} (marco curricular de referencia: ${c.framework})
Grado: ${gradeLabel(P.country, +f.grade)}
Materia: ${f.subject === "auto" ? "elige la más adecuada" : subjName(f.subject)}
Número de lecciones: ${f.lessons}
${f.notes ? `Notas del adulto para personalizar: ${f.notes}` : ""}
Nombre del estudiante (úsalo en algunos enunciados): ${P.name || "el estudiante"}

Reglas:
- Español claro para la edad. Si el tema es de inglés, las actividades pueden estar en inglés con instrucciones en español.
- Las lecciones van de lo más fácil a lo más difícil.
- Cada lección tiene 6 actividades. Usa mayoritariamente "choice" (opción múltiple con exactamente 3 respuestas incorrectas plausibles) y 1 o 2 de tipo "order" (ordenar pasos o palabras, de 3 a 6 elementos en el orden correcto).
- Verifica cada cálculo: la respuesta correcta debe ser exacta y ninguna incorrecta puede ser también correcta.
- "explain" es una pista breve que explica por qué la respuesta es correcta.
- "tip" es una actividad práctica para hacer juntos en casa con materiales comunes.
- Responde SOLO con JSON válido, sin texto adicional, con esta forma:
{"title":"...","emoji":"un emoji","subject":"mat|ing|len|cie|soc|tec","summary":"una frase","parentGuide":"2-3 frases para el adulto sobre cómo acompañar y errores comunes","lessons":[{"title":"...","explanation":"explicación de 2-4 frases","example":"un ejemplo resuelto corto","tip":"...","activities":[{"type":"choice","q":"pregunta","answer":"respuesta correcta","wrong":["incorrecta 1","incorrecta 2","incorrecta 3"],"emoji":"emoji opcional","explain":"..."},{"type":"order","q":"instrucción","items":["primero","segundo","tercero"]}]}]}`;
  }
  function cleanCourse(m, f) {
    if (!m || !Array.isArray(m.lessons) || !m.lessons.length) throw { code: "invalid_json" };
    const lessons = m.lessons.map((l) => ({
      title: String(l.title || "Lección"), explanation: String(l.explanation || ""), example: String(l.example || ""), tip: String(l.tip || ""),
      activities: (Array.isArray(l.activities) ? l.activities : []).filter((a) => a && (a.type === "order" ? Array.isArray(a.items) && a.items.length > 1 : a.q && a.answer != null && Array.isArray(a.wrong) && a.wrong.length)).map((a) => a.type === "order" ? { type: "order", q: String(a.q || "Ordena"), items: a.items.map(String).slice(0, 8) } : { type: "choice", q: String(a.q), answer: String(a.answer), wrong: a.wrong.map(String).filter((w) => w !== String(a.answer)).slice(0, 3), emoji: a.emoji ? String(a.emoji).slice(0, 8) : "", explain: String(a.explain || "") })
    })).filter((l) => l.activities.length);
    if (!lessons.length) throw { code: "invalid_json" };
    return { id: "ai_" + uid(), source: "ai", title: String(m.title || f.topic), emoji: String(m.emoji || "📘").slice(0, 8), subject: SUBJECTS[m.subject] ? m.subject : (f.subject !== "auto" ? f.subject : "mat"), summary: String(m.summary || ""), parentGuide: String(m.parentGuide || ""), grade: +f.grade, request: f.topic, created: todayStr(), lessons };
  }
  function aiErrorMsg(e) {
    const code = e && e.code;
    if (code === "no_ai") return "Para crear cursos con IA abre esta app dentro de Claude (claude.ai) o agrega tu clave de API de Anthropic en ⚙️ Ajustes. Mientras tanto, prueben los cursos listos.";
    if (code === "not_granted") return "No se dio permiso para usar la IA. Puedes permitirlo desde el menú de permisos del artefacto e intentarlo de nuevo.";
    if (code === "rate_limited") return "La IA está ocupada en este momento. Espera un minuto y vuelve a intentarlo.";
    if (code === "refusal") return "La IA no pudo crear este curso. Prueba a describir el tema de otra forma.";
    if (code === "invalid_json") return "La respuesta de la IA llegó incompleta. Inténtalo de nuevo.";
    if (code === "http") return "No se pudo conectar con la IA (" + esc(e.message || "") + "). Revisa la clave en Ajustes.";
    return "Algo salió mal al crear el curso. Revisa tu conexión e inténtalo de nuevo.";
  }
  async function runMaker() {
    const f = maker.form;
    if (!f.topic.trim()) { toast("Escribe un tema"); return; }
    if (!(await aiAvailable())) { maker.error = aiErrorMsg({ code: "no_ai" }); render(); return; }
    maker.status = "loading"; maker.error = ""; render();
    const msgs = ["Escogiendo los mejores ejemplos…", "Inventando retos divertidos…", "Revisando que las respuestas estén bien…", "Preparando la guía para el adulto…", "Poniendo estrellas y confeti…"]; let mi = 0;
    const iv = setInterval(() => { const el = $("#mk-log"); if (el) el.textContent = msgs[mi++ % msgs.length]; }, 3500);
    try {
      const raw = await askAI(coursePrompt(f));
      maker.course = cleanCourse(raw, f); maker.status = "done"; sfx.win(); confetti(90); say("¡Tu curso está listo! Revísalo y guárdalo.", "happy");
    } catch (e) { maker.status = "idle"; maker.error = aiErrorMsg(e); }
    clearInterval(iv);
    if (view.name === "maker") render();
  }
  async function morePractice(cid, li) {
    const c = S.courses.find((x) => x.id === cid); if (!c || !c.lessons) return;
    if (!(await aiAvailable())) { toast("Activa la IA en Ajustes para pedir más ejercicios"); return; }
    const l = c.lessons[li]; toast("✨ Creando ejercicios nuevos…");
    const prompt = `Crea 6 actividades NUEVAS y distintas de refuerzo para la lección "${l.title}" del curso "${c.title}" (${gradeLabel(S.profile.country, c.grade ?? S.profile.grade)}, ${COUNTRIES[S.profile.country].name}). Explicación de la lección: ${l.explanation}. El estudiante tuvo dificultades, así que empieza un poco más fácil y sube gradualmente. Verifica cada respuesta. Responde SOLO con JSON: {"activities":[{"type":"choice","q":"...","answer":"...","wrong":["...","...","..."],"emoji":"","explain":"..."}]}`;
    try {
      const raw = await askAI(prompt);
      const extra = cleanCourse({ lessons: [{ title: l.title, activities: raw.activities }] }, { topic: c.title, subject: c.subject, grade: c.grade }).lessons[0].activities;
      startPlay({ type: "course", cid, li }, null, modeTogether, buildQuestions({ activities: extra }));
    } catch (e) { toast(aiErrorMsg(e).replace(/<[^>]+>/g, "")); }
  }

  /* ---------- logros ---------- */
  function vTrophies() {
    const P = S.profile, g = P.grade;
    const recent = S.history.slice(-8).reverse();
    const weak = Object.entries(S.progress).filter(([, v]) => v.stars < 2).map(([k]) => k).slice(0, 6);
    return `<section class="stack">
      <div class="section-head"><h1>🏆 Logros de ${esc(P.name)}</h1></div>
      <div class="row"><span class="pill star">⭐ ${S.stars} estrellas</span><span class="pill">🔥 ${S.streak.n} ${S.streak.n === 1 ? "día" : "días"} seguidos</span><span class="pill">🎴 ${S.stickers.length}/${STICKERS.length} láminas</span><span class="pill">📚 ${S.courses.length} cursos</span></div>
      <div class="card stack"><h2>Avance por materia · ${esc(gradeLabel(P.country, g))}</h2>
        ${SUBJ_KEYS.map((s) => `<div class="row"><span style="width:2rem;font-size:1.4rem">${SUBJECTS[s].icon}</span><b style="font-family:var(--f-display);min-width:150px">${esc(subjName(s))}</b><div class="bar" style="flex:1;min-width:120px"><i style="width:${subjPct(s)}%;background:${SUBJECTS[s].color}"></i></div><span class="muted" style="min-width:3.5ch;text-align:right">${subjPct(s)}%</span></div>`).join("")}
      </div>
      ${weak.length ? `<div class="card stack"><h2>🎯 Para reforzar</h2><div class="mission">${weak.map((k) => taskCard(k.includes(":") ? { type: "course", cid: k.split(":")[0], li: +k.split(":")[1] } : { type: "topic", id: k })).join("")}</div></div>` : ""}
      <div class="card stack"><h2>🎴 Álbum de láminas</h2><div class="album">${STICKERS.map((x) => `<div class="sticker ${S.stickers.includes(x) ? "got" : "locked"}" aria-label="${S.stickers.includes(x) ? "Lámina conseguida" : "Lámina bloqueada"}">${S.stickers.includes(x) ? x : "❔"}</div>`).join("")}</div><p class="muted" style="margin:0">Gana una lámina cada vez que consigas 2 o más estrellas.</p></div>
      ${recent.length ? `<div class="card stack"><h2>🕒 Últimas sesiones</h2>${recent.map((h) => `<div class="row"><span>${SUBJECTS[h.subj] ? SUBJECTS[h.subj].icon : "📘"}</span><b style="font-family:var(--f-display);flex:1">${esc(h.title)}</b><span class="muted">${h.d}</span><span class="pill">${h.pct}%</span></div>`).join("")}</div>` : ""}
    </section>`;
  }

  /* ---------- ajustes ---------- */
  async function settings() {
    const back = document.createElement("div"); back.className = "modal-back";
    const ai = await aiAvailable();
    back.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-labelledby="set-t"><h2 id="set-t">⚙️ Ajustes</h2>
      <button class="btn ghost" data-m="profile">👤 Cambiar nombre, país o grado</button>
      <button class="btn ghost" data-m="sound">${S.sound ? "🔊 Sonido activado" : "🔇 Sonido apagado"}</button>
      <div class="field"><label for="api-key">Clave de API de Anthropic (opcional)</label>
        <input id="api-key" class="input" type="password" autocomplete="off" placeholder="sk-ant-…" value="${esc(S.apiKey)}">
        <span class="muted" style="font-size:.9rem">${(await cap("sample")) ? "✅ Ya tienes IA disponible dentro de Claude; no necesitas clave." : ai ? "✅ IA activa con tu clave." : "Solo hace falta si usas la app fuera de Claude. Se guarda únicamente en este navegador."}</span></div>
      <div class="row"><button class="btn" data-m="saveKey">Guardar</button><span class="spacer"></span><button class="btn ghost small" data-m="reset" style="--bi:var(--bad)">Borrar progreso</button></div>
      <div id="confirm"></div>
      <button class="btn ghost small" data-m="close">Cerrar</button></div>`;
    document.body.appendChild(back);
    const close = () => back.remove();
    back.addEventListener("click", (e) => {
      if (e.target === back) return close();
      const m = e.target.closest("[data-m]"); if (!m) return; const k = m.dataset.m;
      if (k === "close") close();
      if (k === "profile") { close(); draft = null; go("setup", {}); }
      if (k === "sound") { S.sound = !S.sound; save(); m.textContent = S.sound ? "🔊 Sonido activado" : "🔇 Sonido apagado"; }
      if (k === "saveKey") { S.apiKey = $("#api-key", back).value.trim(); save(); toast("Ajustes guardados"); close(); }
      if (k === "reset") $("#confirm", back).innerHTML = `<div class="notice err row"><span style="flex:1">¿Seguro? Se borran estrellas, progreso, plan y cursos guardados.</span><button class="btn small" data-m="resetYes" style="--b:var(--bad)">Sí, borrar</button></div>`;
      if (k === "resetYes") { const p = S.profile, key = S.apiKey; S = DEF(); S.profile = p; S.apiKey = key; save(); close(); toast("Progreso borrado"); go("home"); }
    });
    back.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    $("button", back).focus();
  }

  /* ================= eventos ================= */
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]"); if (!b) return;
    const a = b.dataset.act, ref = b.dataset.ref ? JSON.parse(b.dataset.ref) : null;
    switch (a) {
      case "go": {
        if (b.dataset.to === "maker" && maker.status !== "loading") maker = { status: "idle", course: null, error: "", form: null };
        if (b.dataset.to === "plan" && b.dataset.edit) { planDraft = S.plan ? JSON.parse(JSON.stringify(S.plan.settings)) : null; }
        return go(b.dataset.to, { id: b.dataset.id, q: b.dataset.q, edit: b.dataset.edit });
      }
      case "draft": draft[b.dataset.k] = b.dataset.k === "grade" ? +b.dataset.v : b.dataset.v; if (b.dataset.k === "country" && draft.grade > 6) draft.grade = 3; sfx.tap(); return render();
      case "saveProfile": {
        const first = !S.profile; S.profile = Object.assign({}, draft); S.profile.name = S.profile.name.trim() || "Fede"; S.profile.adult = S.profile.adult.trim() || "Mamá";
        if (!first && S.plan && S.plan.grade !== S.profile.grade) { /* el plan se mantiene; se puede rehacer */ }
        draft = null; save(); go("home"); confetti(80); say(`¡Hola, ${S.profile.name}! Elige un mundo para empezar.`, "happy"); return;
      }
      case "open": return go("lesson", { ref, plan: b.dataset.plan != null ? +b.dataset.plan : null });
      case "back": { if (ref.type === "topic") { const x = TOPIC_INDEX[ref.id]; return go("subject", { id: x.s, grade: x.g }); } return go("course", { id: ref.cid }); }
      case "mode": modeTogether = b.dataset.v === "1"; sfx.tap(); document.querySelectorAll(".mode").forEach((m) => m.setAttribute("aria-pressed", String(m === b))); return;
      case "start": return startPlay(ref, b.dataset.plan != null ? +b.dataset.plan : null, modeTogether);
      case "together": { modeTogether = true; const r = dailySuggestions()[0]; return startPlay(r, null, true); }
      case "readLesson": { const u = unit(ref); return speak(`${u.title}. ${u.lesson || ""} ${u.example || ""}`, "es-ES"); }
      case "answer": return onAnswer(b);
      case "hint": return hint();
      case "next": return nextQ();
      case "quit": play = null; return go("home");
      case "again": return startPlay(play.ref, null, play.players.length > 1);
      case "speakQ": { const q = play.qs[play.i]; return speak(q.readText || q.speak, q.readText ? "es-ES" : q.speakLang || "en-US"); }
      case "askChip": return go("courses", { q: b.dataset.q });
      case "pl": {
        const k = b.dataset.k, v = k === "days" ? +b.dataset.v : k === "minutes" ? +b.dataset.v : b.dataset.v;
        if (k === "minutes") planDraft.minutes = v; else if (k === "withCourses") planDraft.withCourses = !planDraft.withCourses;
        else { const arr = planDraft[k]; const i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1); else arr.push(v); }
        sfx.tap(); return render();
      }
      case "makePlan": return makePlan();
      case "planCancel": return go("plan");
      case "saveReady": { const pc = COURSES.find((x) => x.id === b.dataset.id); if (pc && !S.courses.some((x) => x.id === pc.id)) { S.courses.push({ id: pc.id, ref: pc.id, source: "ready", title: pc.title, emoji: pc.emoji, subject: pc.subject, summary: pc.summary, created: todayStr() }); save(); toast("💾 Curso guardado en Mis cursos"); } return render(); }
      case "removeCourse": { S.courses = S.courses.filter((x) => x.id !== b.dataset.id); save(); toast("Curso quitado"); return go("courses"); }
      case "saveAi": { const m = maker.course; if (!m) return; S.courses.push(m); save(); saveCourseCloud(m); maker = { status: "idle", course: null, error: "", form: null }; toast("💾 ¡Curso guardado!"); return go("course", { id: m.id }); }
      case "makerRetry": return runMaker();
      case "makerReset": maker.status = "idle"; maker.course = null; return render();
      case "morePractice": return morePractice(b.dataset.id, +b.dataset.li);
      case "settings": return settings();
    }
  });
  document.addEventListener("input", (e) => { const k = e.target.dataset && e.target.dataset.bind; if (k && draft) draft[k] = e.target.value; });
  document.addEventListener("change", (e) => { if (e.target.dataset.actChange === "gradeView") go("subject", { id: e.target.dataset.s, grade: +e.target.value }); });
  document.addEventListener("submit", (e) => {
    const f = e.target.closest("[data-form]"); if (!f) return; e.preventDefault();
    const fd = new FormData(f);
    if (f.dataset.form === "ask") { const q = String(fd.get("q") || "").trim(); if (q) go("courses", { q }); }
    if (f.dataset.form === "maker") { maker.form = { topic: String(fd.get("topic") || "").trim(), subject: String(fd.get("subject")), grade: +fd.get("grade"), lessons: +fd.get("lessons"), notes: String(fd.get("notes") || "").trim() }; runMaker(); }
  });
  document.addEventListener("click", (e) => { if (e.target.closest(".buddy svg")) say(pick(["¡Tú puedes! 💪", "¿Jugamos un reto en familia?", "Aprender es una aventura 🚀", "¡Me encanta estudiar contigo!", "Tip: lean la pregunta en voz alta 📢"]), "happy"); });

  /* ================= arranque ================= */
  document.body.insertAdjacentHTML("beforeend", `<div class="buddy" aria-live="polite"><div class="say"></div>${LUMI}</div><canvas id="confetti"></canvas>`);
  render();
  if (S.profile) setTimeout(() => say(`¡Hola de nuevo, ${S.profile.name}! ${S.streak.n > 1 ? `Llevas ${S.streak.n} días seguidos 🔥` : "¿Qué aprendemos hoy?"}`), 600);
  initCloud();
})();
