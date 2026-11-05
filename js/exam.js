/* Exámenes tipo colegio: lectura + preguntas, figuras para colorear, fracciones, tablas, respuestas escritas y ordenar.
   Cada pregunta se puede intentar varias veces: si falla, recibe una pista; se cuenta cuántas acertó al primer intento.
   Los exámenes se agregan con EXAMS.add([...]) desde js/exams/*.js (ver tools/validate-exams.js para el formato). */
(function () {
  "use strict";
  const SVGNS = "http://www.w3.org/2000/svg";
  const LIST = [];
  window.EXAMS = { list: LIST, add(arr) { arr.forEach((e) => { if (!LIST.some((x) => x.id === e.id)) LIST.push(e); }); } };

  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // texto seguro con fracciones: "[[3/4]]" → fracción apilada; "**negrita**"
  const rich = (s) => esc(s).replace(/\[\[(\d+)\/(\d+)\]\]/g, '<span class="frac"><span>$1</span><span>$2</span></span>').replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  const plain = (s) => String(s == null ? "" : s).replace(/\[\[(\d+)\/(\d+)\]\]/g, "$1 sobre $2").replace(/\*\*/g, "");
  function h(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) { if (v == null || v === false) continue; if (k === "class") e.className = v; else if (k === "html") e.innerHTML = v; else e.setAttribute(k, v); }
    for (const k of kids.flat()) { if (k == null || k === false) continue; e.append(k instanceof Node ? k : document.createTextNode(String(k))); }
    return e;
  }
  const norm = (s) => String(s || "").trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[.,;:¡!¿?"'«»()]/g, "").replace(/\s+/g, " ");

  /* ---------- figuras ---------- */
  const P = (x, y) => `${x.toFixed(2)} ${y.toFixed(2)}`;
  function pie(n) { const parts = []; for (let i = 0; i < n; i++) { const a1 = i / n * 2 * Math.PI - Math.PI / 2, a2 = (i + 1) / n * 2 * Math.PI - Math.PI / 2; parts.push(n === 1 ? "M50 5 a45 45 0 1 0 0.01 0Z" : `M50 50 L${P(50 + 45 * Math.cos(a1), 50 + 45 * Math.sin(a1))} A45 45 0 ${(a2 - a1) > Math.PI ? 1 : 0} 1 ${P(50 + 45 * Math.cos(a2), 50 + 45 * Math.sin(a2))} Z`); } return { vb: "0 0 100 100", parts, cls: "" }; }
  function bar(n) { const W = Math.max(150, n * 26), H = 50, w = (W - 4) / n; return { vb: `0 0 ${W} ${H}`, parts: [...Array(n)].map((_, i) => `M${(2 + i * w).toFixed(2)} 2 h${w.toFixed(2)} v${H - 4} h${(-w).toFixed(2)} Z`), cls: "wide" }; }
  function grid(r, c) { const s = 24, parts = []; for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) parts.push(`M${2 + j * s} ${2 + i * s} h${s} v${s} h${-s} Z`); return { vb: `0 0 ${c * s + 4} ${r * s + 4}`, parts, cls: c > 3 ? "wide" : "" }; }
  const around = (pts) => pts.map((p, i) => { const q = pts[(i + 1) % pts.length]; return `M50 50 L${P(p[0], p[1])} L${P(q[0], q[1])} Z`; });
  const diamond = () => ({ vb: "0 0 100 100", parts: around([[50, 4], [96, 50], [50, 96], [4, 50]]), cls: "" });
  const squareX = () => ({ vb: "0 0 100 100", parts: around([[5, 5], [95, 5], [95, 95], [5, 95]]), cls: "" });
  const square8 = () => ({ vb: "0 0 100 100", parts: around([[5, 5], [50, 5], [95, 5], [95, 50], [95, 95], [50, 95], [5, 95], [5, 50]]), cls: "" });
  function hexa() { const pts = []; for (let i = 0; i < 6; i++) { const a = i / 6 * 2 * Math.PI - Math.PI / 2; pts.push([50 + 46 * Math.cos(a), 50 + 46 * Math.sin(a)]); } return { vb: "0 0 100 100", parts: around(pts), cls: "" }; }
  function dots(n) { const r = 14, gap = 6, W = n * (2 * r + gap) + gap; return { vb: `0 0 ${W} ${2 * r + 12}`, parts: [...Array(n)].map((_, i) => { const cx = gap + r + i * (2 * r + gap), cy = r + 6; return `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0`; }), cls: "wide" }; }
  // fig: {k:"pie"|"bar"|"grid"|"dots"|"diamond"|"squareX"|"square8"|"hexa"|"pizza", d, r, c}
  function geom(f) {
    switch (f.k) {
      case "pie": case "pizza": return pie(f.d);
      case "bar": return bar(f.d);
      case "grid": return grid(f.r, f.c);
      case "dots": return dots(f.d);
      case "diamond": return diamond();
      case "squareX": return squareX();
      case "square8": return square8();
      case "hexa": return hexa();
      default: return pie(f.d || 4);
    }
  }
  const figParts = (f) => geom(f).parts.length;
  function shape(f, opt) {
    opt = opt || {};
    const g = geom(f), svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("viewBox", g.vb); svg.setAttribute("class", ["ex-shape", g.cls, opt.size || "", f.k === "pizza" ? "lg" : ""].join(" ").trim());
    if (!opt.interactive) { svg.setAttribute("role", "img"); svg.setAttribute("aria-label", `Figura con ${g.parts.length} partes, ${opt.shaded || 0} coloreadas`); }
    if (f.k === "pizza") { const c = document.createElementNS(SVGNS, "circle"); c.setAttribute("cx", "50"); c.setAttribute("cy", "50"); c.setAttribute("r", "49"); c.setAttribute("fill", "#d98a3a"); svg.append(c); }
    const paths = g.parts.map((d, i) => {
      const p = document.createElementNS(SVGNS, "path"); p.setAttribute("d", d);
      p.setAttribute("class", (f.k === "pizza" ? "pz" : "part") + (i < (opt.shaded || 0) ? " shade" : ""));
      if (opt.interactive) {
        p.classList.add("click"); p.setAttribute("tabindex", "0"); p.setAttribute("role", "button"); p.setAttribute("aria-label", `Parte ${i + 1}`); p.setAttribute("aria-pressed", "false");
        const t = () => { p.classList.toggle("on"); p.setAttribute("aria-pressed", String(p.classList.contains("on"))); };
        p.addEventListener("click", t); p.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); t(); } });
      }
      svg.append(p); return p;
    });
    if (f.k === "pizza") for (let i = 0; i < g.parts.length; i++) { const a = (i + .5) / g.parts.length * 2 * Math.PI - Math.PI / 2; [[28, 5.5], [14, 3.5]].forEach(([r, s]) => { const m = document.createElementNS(SVGNS, "circle"); m.setAttribute("cx", (50 + r * Math.cos(a)).toFixed(2)); m.setAttribute("cy", (50 + r * Math.sin(a)).toFixed(2)); m.setAttribute("r", s); m.setAttribute("fill", "#c0392b"); svg.append(m); }); }
    return { el: svg, count: () => paths.filter((p) => p.classList.contains("on")).length };
  }

  /* ---------- motor ---------- */
  // opts: { speak(text), sfx: {right, wrong, tap}, onDone({first, total, exam}), speakIcon }
  function mount(root, exam, opts) {
    opts = opts || {};
    const sfx = opts.sfx || {}, items = exam.items.filter((x) => !["read", "h", "note"].includes(x.t));
    const st = { total: items.length, solved: 0, first: 0, ended: false };
    root.innerHTML = "";
    const bar = h("div", { class: "ex-progress", "aria-live": "polite" }, h("div", { class: "ex-track" }, h("span", { class: "ex-fill" })), h("span", { class: "ex-ptext" }));
    root.append(bar);
    const upd = () => {
      bar.querySelector(".ex-fill").style.width = (st.solved / st.total * 100) + "%";
      bar.querySelector(".ex-ptext").textContent = `${st.solved} de ${st.total} resueltas · ${st.first} al primer intento`;
      if (st.solved === st.total && !st.ended) { st.ended = true; if (opts.onDone) opts.onDone({ first: st.first, total: st.total, exam }); }
    };
    const spk = (text) => { const b = h("button", { class: "speak ex-speak", type: "button", "aria-label": "Escuchar", html: opts.speakIcon || "🔊" }); b.addEventListener("click", () => opts.speak && opts.speak(text)); return b; };
    let num = 0;
    function Q(title, readText) {
      num++;
      const card = h("div", { class: "ex-card" }, h("div", { class: "ex-qhead" }, h("span", { class: "ex-qnum" }, String(num)), h("div", { class: "ex-qtitle", html: rich(title) }), spk(readText || plain(title))));
      root.append(card);
      const q = { card, parts: 0, ok: 0, failed: false, done: false };
      q.partSolved = () => { q.ok++; if (q.ok === q.parts && !q.done) { q.done = true; card.classList.add("solved"); st.solved++; if (!q.failed) st.first++; upd(); } };
      return q;
    }
    const fb = () => h("div", { class: "ex-fb", "aria-live": "polite" });
    const good = (el, why) => { el.className = "ex-fb ok"; el.innerHTML = "<b>¡Muy bien! 🎉</b> " + rich(why || ""); if (sfx.right) sfx.right(); };
    const bad = (el, msg) => { el.className = "ex-fb bad"; el.innerHTML = "<b>¡Casi! Intenta otra vez.</b> " + msg; if (sfx.wrong) sfx.wrong(); if (opts.speak) opts.speak("Casi. " + el.textContent.replace(/^¡Casi! Intenta otra vez\.\s*/, "")); };
    function mc(q, x) {
      q.parts++; let done = false; const f = fb(), wrap = h("div", { class: "ex-opts" });
      x.o.forEach((txt, i) => {
        const b = h("button", { class: "ex-opt", type: "button" }, h("span", { class: "L" }, "ABCDEF"[i]), h("span", { html: rich(txt) }));
        b.addEventListener("click", () => {
          if (done) return;
          if (i === x.a) { done = true; b.classList.add("ok"); good(f, x.why); wrap.querySelectorAll(".ex-opt").forEach((y) => (y.disabled = true)); q.partSolved(); }
          else { b.classList.add("bad"); b.disabled = true; q.failed = true; bad(f, rich(x.hint || "Lee otra vez con calma.")); }
        });
        wrap.append(b);
      });
      return h("div", {}, wrap, f);
    }
    function check(q, fn) {
      q.parts++; let done = false; const f = fb(), b = h("button", { class: "btn ex-check", type: "button" }, "Revisar");
      b.addEventListener("click", () => { if (done) return; const r = fn(); if (r === true) { done = true; good(f); b.disabled = true; b.textContent = "✓ Listo"; q.partSolved(); } else { q.failed = true; bad(f, r); } });
      return h("div", { class: "ex-checkrow" }, b, f);
    }
    const numIn = (label) => h("input", { class: "ex-num", type: "number", inputmode: "numeric", min: "0", "aria-label": label });
    function fracInput() { const n = numIn("numerador"), d = numIn("denominador"); return { el: h("span", { class: "ex-fin" }, n, h("i"), d), n: () => parseInt(n.value, 10), d: () => parseInt(d.value, 10) }; }
    const sel = (o, label) => h("select", { class: "ex-sel", "aria-label": label || "elige" }, h("option", { value: "" }, "— elige —"), o.map((v) => h("option", { value: v }, v)));
    const colorMsg = (c, n) => { if (c === n) return true; if (c < n) { const f = n - c; return `Coloreaste ${c} ${c === 1 ? "parte" : "partes"}. Te ${f === 1 ? "falta" : "faltan"} ${f}. El numerador (el número de arriba) dice cuántas partes colorear.`; } return `Coloreaste ${c} partes, ¡son muchas! Solo necesitas ${n}. Toca una parte coloreada para borrarla.`; };
    const fracTxt = (n, d) => `<span class="frac"><span>${n}</span><span>${d}</span></span>`;

    exam.items.forEach((x) => {
      if (x.t === "read") {
        const card = h("div", { class: "ex-card ex-reading" }, x.intro ? h("p", { class: "ex-hint-top" }, x.intro) : null,
          h("div", { class: "row" }, h("h2", { style: "flex:1" }, x.title || "Lectura"), spk([x.title, ...(x.text || []), ...(x.poem || [])].filter(Boolean).join(". ")))
        );
        (x.text || []).forEach((p, i) => { card.append(h("p", { html: rich(p) })); if (x.poem && i === (x.poemAfter != null ? x.poemAfter : 0)) card.append(h("div", { class: "ex-poem", html: x.poem.map(esc).join("<br>") })); });
        if (x.poem && !(x.text || []).length) card.append(h("div", { class: "ex-poem", html: x.poem.map(esc).join("<br>") }));
        root.append(card); return;
      }
      if (x.t === "h") { root.append(h("h2", { class: "ex-section" }, x.text)); return; }
      if (x.t === "note") { root.append(h("div", { class: "ex-card ex-note", html: rich(x.text) })); return; }
      const q = Q(x.q, x.t === "mc" ? plain(x.q) + ". " + x.o.map((o, i) => `${"ABCDEF"[i]}: ${plain(o)}`).join(". ") : null);
      if (x.fig) q.card.append(h("div", { class: "ex-shapes center" }, shape(x.fig, { shaded: x.fig.shaded }).el));
      if (x.t === "mc") q.card.append(mc(q, x));
      else if (x.t === "write") {
        const inp = h("input", { class: "input ex-write", type: "text", autocomplete: "off", spellcheck: "false", "aria-label": "Tu respuesta", placeholder: x.placeholder || "Escribe tu respuesta" });
        q.card.append(inp, check(q, () => { const v = norm(inp.value); if (!v) return "Escribe tu respuesta primero."; return x.a.some((a) => norm(a) === v) ? true : rich(x.hint || "Revisa tu respuesta."); }));
        inp.addEventListener("keydown", (e) => { if (e.key === "Enter") q.card.querySelector(".ex-check").click(); });
      } else if (x.t === "color") {
        x.parts.forEach((pt, i) => {
          const wholes = pt.wholes || Math.max(1, Math.ceil(pt.n / figParts(pt.fig)));
          const ss = [...Array(wholes)].map(() => shape(pt.fig, { interactive: true, size: pt.fig.k === "pie" && wholes > 1 ? "sm" : "" }));
          q.card.append(h("div", { class: "ex-sub" }, h("div", { class: "ex-sublabel", html: `${x.parts.length > 1 ? "abcdefgh"[i] + ") " : ""}${pt.label ? rich(pt.label) : fracTxt(pt.n, figParts(pt.fig))}` }),
            wholes > 1 ? h("p", { class: "ex-note-s" }, `Aquí el numerador es mayor que el denominador, por eso necesitas más de una figura entera.`) : null,
            h("div", { class: "ex-shapes" }, ss.map((s) => s.el)), check(q, () => colorMsg(ss.reduce((t, s) => t + s.count(), 0), pt.n))));
        });
      } else if (x.t === "frac") {
        const fi = fracInput();
        q.card.append(h("div", { class: "ex-shapes center" }, fi.el), check(q, () => { const n = fi.n(), d = fi.d(); if (isNaN(n) || isNaN(d)) return "Escribe arriba el numerador y abajo el denominador."; if (d !== x.ans[1]) return rich(x.hintD || "Revisa el denominador: cuenta **todas** las partes."); if (n !== x.ans[0]) return rich(x.hintN || "Revisa el numerador: cuenta las partes **coloreadas**."); return true; }));
      } else if (x.t === "fracop") {
        x.rows.forEach((r) => {
          const f = { k: r.k, d: r.d }, res = (r.op === "-" ? r.a - r.b : r.a + r.b), out = shape(f, { interactive: true }), fi = fracInput();
          q.card.append(h("div", { class: "ex-sub" }, h("div", { class: "ex-eq" },
            h("div", { class: "ex-term" }, shape(f, { shaded: r.a }).el, h("span", { class: "big", html: fracTxt(r.a, r.d) })), h("span", { class: "ex-op" }, r.op === "-" ? "−" : "+"),
            h("div", { class: "ex-term" }, shape(f, { shaded: r.b }).el, h("span", { class: "big", html: fracTxt(r.b, r.d) })), h("span", { class: "ex-op" }, "="),
            h("div", { class: "ex-term" }, out.el, fi.el)),
          check(q, () => { const n = fi.n(), d = fi.d(); if (isNaN(n) || isNaN(d)) return "Escribe el resultado: arriba el numerador y abajo el denominador."; if (d !== r.d) return "Revisa el denominador. Cuando las fracciones tienen el mismo denominador, <b>el denominador se queda igual</b>."; if (n !== res) return r.op === "-" ? `Revisa el numerador: resta los números de arriba (${r.a} − ${r.b}).` : `Revisa el numerador: suma los números de arriba (${r.a} + ${r.b}).`; if (out.count() !== res) return `¡El resultado está bien escrito! Ahora colorea ${res} ${res === 1 ? "parte" : "partes"} en la última figura (llevas ${out.count()}).`; return true; })));
        });
      } else if (x.t === "table") {
        const ins = x.rows.map((row) => row.map((c) => {
          if (c && typeof c === "object") {
            if (c.frac) { const fi = fracInput(); return { el: fi.el, ok: () => fi.n() === c.frac[0] && fi.d() === c.frac[1] }; }
            if (c.num != null) { const n = numIn("número"); return { el: n, ok: () => parseFloat(String(n.value).replace(",", ".")) === +c.num }; }
            if (c.sel) { const s = sel(c.sel); return { el: s, ok: () => s.value === c.a }; }
            if (c.text) { const t = h("input", { class: "input ex-cell", type: "text", autocomplete: "off", "aria-label": "Respuesta" }); return { el: t, ok: () => c.text.some((a) => norm(a) === norm(t.value)) }; }
            if (c.fig) return { el: shape(c.fig, { shaded: c.fig.shaded, size: "tbl" }).el };
          }
          return { el: h("span", { html: rich(c) }) };
        }));
        q.card.append(h("div", { class: "ex-tbl-wrap" }, h("table", { class: "ex-tbl" }, h("thead", {}, h("tr", {}, x.cols.map((c) => h("th", {}, c)))), h("tbody", {}, ins.map((row) => h("tr", {}, row.map((c) => h("td", {}, c.el))))))));
        q.card.append(check(q, () => { const badRows = []; ins.forEach((row, i) => { if (row.some((c) => c.ok && !c.ok())) badRows.push(i + 1); }); return badRows.length ? `Revisa ${badRows.length === 1 ? "la fila" : "las filas"} ${badRows.join(", ")}.` + (x.hint ? "<br><i>" + rich(x.hint) + "</i>" : "") : true; }));
      } else if (x.t === "order") {
        const pool = h("div", { class: "ex-pool" }), slots = h("div", { class: "ex-slots" }), chosen = [];
        const shuffled = x.items.map((v, i) => ({ v, i })).sort(() => Math.random() - 0.5);
        if (shuffled.every((s, k) => s.i === k)) shuffled.reverse();
        const draw = () => { slots.innerHTML = ""; chosen.forEach((s, k) => { const b = h("button", { class: "ex-chip on", type: "button" }, `${k + 1}. ${s.v}`); b.addEventListener("click", () => { chosen.splice(k, 1); pool.append(s.btn); s.btn.hidden = false; draw(); }); slots.append(b); }); if (!chosen.length) slots.append(h("span", { class: "ex-note-s" }, "Toca las tarjetas en el orden correcto")); };
        shuffled.forEach((s) => { s.btn = h("button", { class: "ex-chip", type: "button" }, s.v); s.btn.addEventListener("click", () => { chosen.push(s); s.btn.hidden = true; draw(); if (sfx.tap) sfx.tap(); }); pool.append(s.btn); });
        draw();
        q.card.append(slots, pool, check(q, () => { if (chosen.length < x.items.length) return "Ordena todas las tarjetas primero."; const ok = chosen.every((s, k) => s.i === k); if (!ok) { chosen.splice(0).forEach((s) => { s.btn.hidden = false; }); draw(); } return ok ? true : rich(x.hint || "Ese no es el orden. Piensa qué pasa primero."); }));
      }
    });
    const done = h("div", { class: "ex-done", hidden: "" }); root.append(done);
    upd();
    return {
      finish(html) { done.innerHTML = html; done.hidden = false; done.scrollIntoView({ behavior: "smooth", block: "center" }); },
      stats: st
    };
  }

  window.ExamEngine = { mount, rich, plain };
})();
