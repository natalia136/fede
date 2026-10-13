/* Valida las lecciones completas de js/lessons/*.js
   Uso: node tools/validate-lessons.js        (todas)
        node tools/validate-lessons.js mat    (solo una materia) */
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const only = process.argv[2] || null;
global.window = global;
for (const f of ["js/countries.js", "js/curriculum.js", ...fs.readdirSync(path.join(ROOT, "js/content")).sort().map((x) => "js/content/" + x)]) (0, eval)(fs.readFileSync(path.join(ROOT, f), "utf8"));
const C = window.CURRICULUM;
const errors = [];
const isStr = (x, min = 1) => typeof x === "string" && x.trim().length >= min;
const subjects = Object.keys(C.TOPICS).filter((s) => !only || s === only);
for (const s of subjects) {
  const file = path.join(ROOT, "js/lessons", s + ".js");
  if (!fs.existsSync(file)) { errors.push(`${s}: falta js/lessons/${s}.js`); continue; }
  window.CURRICULUM_LESSONS = {};
  try { (0, eval)(fs.readFileSync(file, "utf8")); } catch (e) { errors.push(`${s}.js: ${e.message}`); continue; }
  const L = window.CURRICULUM_LESSONS, ids = new Set();
  C.TOPICS[s].forEach((list) => list.forEach((t) => ids.add(t.id)));
  Object.keys(L).forEach((id) => { if (!ids.has(id)) errors.push(`${s}: "${id}" no es un tema de esta materia`); });
  let ok = 0;
  ids.forEach((id) => {
    const l = L[id], w = `${s}/${id}`;
    if (!l) return errors.push(`${w}: falta la lección`);
    if (!isStr(l.hook, 15)) errors.push(`${w}: hook muy corto`);
    if (!Array.isArray(l.steps) || l.steps.length < 3 || l.steps.length > 6) errors.push(`${w}: steps debe tener de 3 a 6 pasos`);
    (l.steps || []).forEach((st, i) => { if (!st || !isStr(st.title, 3) || !isStr(st.text, 60)) errors.push(`${w}: steps[${i}] necesita title y text (60+ letras)`); if (st && st.example != null && !isStr(st.example)) errors.push(`${w}: steps[${i}].example vacío`); });
    if (!Array.isArray(l.remember) || l.remember.length < 2 || !l.remember.every((x) => isStr(x, 8))) errors.push(`${w}: remember necesita 2+ frases`);
    if (!isStr(l.mistake, 25)) errors.push(`${w}: mistake muy corto`);
    if (!isStr(l.fun, 25)) errors.push(`${w}: fun muy corto`);
    if (!Array.isArray(l.check) || l.check.length < 2) errors.push(`${w}: check necesita 2+ preguntas`);
    (l.check || []).forEach((q, i) => {
      if (!Array.isArray(q) || !isStr(q[0]) || !isStr(String(q[1] ?? "")) || !Array.isArray(q[2]) || q[2].length < 2) return errors.push(`${w}: check[${i}] formato ["pregunta", "correcta", ["incorrecta", "incorrecta"]]`);
      const all = [String(q[1]), ...q[2].map(String)];
      if (new Set(all).size !== all.length) errors.push(`${w}: check[${i}] opciones repetidas`);
    });
    ok++;
  });
  console.log(`${s}: ${ok}/${ids.size} lecciones`);
}
if (errors.length) { console.log(`\n${errors.length} problema(s):`); errors.slice(0, 300).forEach((e) => console.log("  - " + e)); process.exit(1); }
console.log("\nLecciones correctas ✔");
