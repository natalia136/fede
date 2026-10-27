/* Valida los exploradores ilustrados (js/explore/*.js) y los cursos preparados.
   Uso: node tools/validate-extra.js          (todo)
        node tools/validate-extra.js cie      (solo el explorador de esa materia) */
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const only = process.argv[2] || null;
global.window = global;
for (const f of ["js/countries.js", "js/curriculum.js", ...fs.readdirSync(path.join(ROOT, "js/content")).sort().map((x) => "js/content/" + x)]) (0, eval)(fs.readFileSync(path.join(ROOT, f), "utf8"));
const C = window.CURRICULUM, errors = [], isStr = (x, m = 1) => typeof x === "string" && x.trim().length >= m;
const subjOf = {}; Object.entries(C.TOPICS).forEach(([s, gr]) => gr.forEach((l) => l.forEach((t) => { subjOf[t.id] = s; })));
const dir = path.join(ROOT, "js/explore");
const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".js") && (!only || f === only + ".js")).sort() : [];
let topics = 0, items = 0;
for (const f of files) {
  window.EXPLORERS = {};
  try { (0, eval)(fs.readFileSync(path.join(dir, f), "utf8")); } catch (e) { errors.push(`${f}: ${e.message}`); continue; }
  const s = f.replace(".js", "");
  Object.entries(window.EXPLORERS).forEach(([id, x]) => {
    const w = `${f}/${id}`; topics++;
    if (!subjOf[id]) return errors.push(`${w}: no es un tema`);
    if (subjOf[id] !== s) errors.push(`${w}: el tema es de ${subjOf[id]}, no de ${s}`);
    if (!isStr(x.title, 3) || !isStr(x.intro, 10)) errors.push(`${w}: falta title o intro`);
    if (!Array.isArray(x.items) || x.items.length < 4) return errors.push(`${w}: necesita 4+ items`);
    const names = new Set();
    x.items.forEach((it, i) => {
      const wi = `${w}.items[${i}]`; items++;
      if (!it || !isStr(it.name)) return errors.push(`${wi}: falta name`);
      if (names.has(it.name)) errors.push(`${wi}: nombre repetido`); names.add(it.name);
      if (!isStr(it.art) || !/^<svg[^>]*viewBox="0 0 120 120"/.test(it.art.trim()) || !/<\/svg>\s*$/.test(it.art.trim())) errors.push(`${wi}: art debe ser <svg viewBox="0 0 120 120"> ... </svg>`);
      if (/\sid=|url\(#|<script|<image|href=|on[a-z]+=/i.test(it.art || "")) errors.push(`${wi}: art no puede usar id, url(#), image, href, script ni eventos`);
      if ((it.art || "").length > 6000) errors.push(`${wi}: art muy grande (${it.art.length})`);
      if (!Array.isArray(it.facts) || it.facts.length < 2 || !it.facts.every((t) => isStr(t, 12))) errors.push(`${wi}: facts necesita 2+ frases`);
      const q = it.q;
      if (!Array.isArray(q) || !isStr(q[0]) || !isStr(String(q[1] ?? "")) || !Array.isArray(q[2]) || q[2].length < 2) errors.push(`${wi}: q formato ["pregunta", "correcta", ["incorrecta", "incorrecta"]]`);
      else if (new Set([String(q[1]), ...q[2].map(String)]).size !== q[2].length + 1) errors.push(`${wi}: q opciones repetidas`);
    });
  });
}
if (!only) {
  C.COURSES.forEach((c) => {
    const w = `curso ${c.id}`;
    if (!isStr(c.title) || !C.SUBJECTS[c.subject] || !Array.isArray(c.grades) || !Array.isArray(c.lessons) || c.lessons.length < 3) return errors.push(`${w}: {id, title, subject, grades: [min, max], lessons: 3+}`);
    c.lessons.forEach((l, i) => {
      const wl = `${w}.lessons[${i}]`;
      if (!isStr(l.title) || !isStr(l.explanation || l.lesson, l.activities ? 40 : 8)) errors.push(`${wl}: falta title o explanation`);
      if (l.activities) {
        if (l.activities.length < 6) errors.push(`${wl}: 6+ actividades`);
        l.activities.forEach((a, j) => {
          if (a.type === "order") { if (!Array.isArray(a.items) || a.items.length < 3) errors.push(`${wl}.activities[${j}]: order con 3+ items`); return; }
          if (!isStr(a.q) || !isStr(String(a.answer ?? "")) || !Array.isArray(a.wrong) || a.wrong.length < 2 || a.wrong.map(String).includes(String(a.answer))) errors.push(`${wl}.activities[${j}]: {q, answer, wrong: [2+], explain}`);
        });
      } else if (!l.gen) errors.push(`${wl}: necesita activities o gen`);
    });
  });
}
console.log(`Exploradores: ${files.join(", ") || "ninguno"} · ${topics} temas · ${items} ilustraciones · Cursos: ${C.COURSES.length}`);
if (errors.length) { console.log(`\n${errors.length} problema(s):`); errors.slice(0, 200).forEach((e) => console.log("  - " + e)); process.exit(1); }
console.log("Todo correcto ✔");
