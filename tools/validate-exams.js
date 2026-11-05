/* Valida los exámenes de js/exams/*.js
   Uso: node tools/validate-exams.js [archivo]
   Formato de un examen:
   { id, subject: "mat"|"ing"|"len"|"cie"|"soc"|"tec", grade: 0-6, title, tag?, items: [...] }
   Tipos de item:
   - { t:"read", title, intro?, text:[párrafos], poem?:[versos], poemAfter?:índice }   (lectura, no cuenta)
   - { t:"h", text } título de sección · { t:"note", text } aviso
   - { t:"mc", q, o:[2-5 opciones], a:índice, hint, why, fig? }
   - { t:"write", q, a:["respuestas aceptadas"], hint, placeholder? }
   - { t:"order", q, items:["en el orden correcto"], hint }
   - { t:"color", q, parts:[{ fig, n, wholes?, label? }] }
   - { t:"frac", q, fig:{...,shaded}, ans:[num, den], hintN?, hintD? }
   - { t:"fracop", q, rows:[{ k, d, a, b, op:"+"|"-" }] }
   - { t:"table", q, cols:[...], rows:[[celda...]], hint? }  celdas: "texto" | {fig} | {frac:[n,d]} | {num} | {sel:[...], a} | {text:[...]}
   fig: { k:"pie"|"bar"|"grid"|"dots"|"diamond"|"squareX"|"square8"|"hexa"|"pizza", d?, r?, c?, shaded? }
   Texto: [[3/4]] dibuja una fracción y **así** pone negrita. */
"use strict";
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = global;
(0, eval)(fs.readFileSync(path.join(ROOT, "js/exam.js"), "utf8").replace(/^\(function \(\) \{/, "(function () {").replace("window.ExamEngine =", "window.ExamEngine ="));
const dir = path.join(ROOT, "js/exams"), only = process.argv[2];
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".js") && (!only || f === only || f === only + ".js")).sort();
const errors = [], isStr = (x, n = 1) => typeof x === "string" && x.trim().length >= n;
const SUBJ = ["mat", "ing", "len", "cie", "soc", "tec"], KINDS = ["pie", "bar", "grid", "dots", "diamond", "squareX", "square8", "hexa", "pizza"];
const fixed = { diamond: 4, squareX: 4, square8: 8, hexa: 6 };
const nParts = (f) => (fixed[f.k] || (f.k === "grid" ? f.r * f.c : f.d));
function fig(f, w) {
  if (!f || !KINDS.includes(f.k)) return errors.push(`${w}: fig.k inválido`);
  if (f.k === "grid" ? !(f.r > 0 && f.c > 0 && f.r * f.c <= 40) : !fixed[f.k] && !(f.d > 0 && f.d <= 24)) errors.push(`${w}: tamaño de figura inválido`);
  if (f.shaded != null && (f.shaded < 0 || f.shaded > nParts(f))) errors.push(`${w}: shaded fuera de rango`);
}
let total = 0;
for (const file of files) {
  const before = window.EXAMS.list.length;
  try { (0, eval)(fs.readFileSync(path.join(dir, file), "utf8")); } catch (e) { errors.push(`${file}: ${e.message}`); continue; }
  const added = window.EXAMS.list.slice(before);
  added.forEach((e) => {
    const w0 = `${file}/${e.id}`;
    if (!isStr(e.id) || !SUBJ.includes(e.subject) || !(e.grade >= 0 && e.grade <= 6) || !isStr(e.title, 4) || !Array.isArray(e.items)) return errors.push(`${w0}: faltan id/subject/grade/title/items`);
    let n = 0;
    e.items.forEach((x, i) => {
      const w = `${w0}#${i}(${x && x.t})`;
      if (!x) return errors.push(`${w}: vacío`);
      if (x.t === "read") { if (!Array.isArray(x.text) || !x.text.every((p) => isStr(p, 20))) errors.push(`${w}: text debe ser una lista de párrafos`); return; }
      if (x.t === "h" || x.t === "note") { if (!isStr(x.text, 3)) errors.push(`${w}: text vacío`); return; }
      n++;
      if (!isStr(x.q, 6)) errors.push(`${w}: q muy corta`);
      if (x.fig) fig(x.fig, w);
      if (x.t === "mc") {
        if (!Array.isArray(x.o) || x.o.length < 2 || x.o.length > 5 || !(x.a >= 0 && x.a < x.o.length)) errors.push(`${w}: o/a inválidos`);
        else if (new Set(x.o.map(String)).size !== x.o.length) errors.push(`${w}: opciones repetidas`);
        if (!isStr(x.hint, 10) || !isStr(x.why, 8)) errors.push(`${w}: falta hint o why`);
      } else if (x.t === "write") { if (!Array.isArray(x.a) || !x.a.length || !x.a.every((s) => isStr(String(s)))) errors.push(`${w}: a debe ser lista de respuestas`); if (!isStr(x.hint, 10)) errors.push(`${w}: falta hint`); }
      else if (x.t === "order") { if (!Array.isArray(x.items) || x.items.length < 3 || x.items.length > 8 || new Set(x.items).size !== x.items.length) errors.push(`${w}: items 3-8 distintos`); if (!isStr(x.hint, 10)) errors.push(`${w}: falta hint`); }
      else if (x.t === "color") { if (!Array.isArray(x.parts) || !x.parts.length) errors.push(`${w}: parts vacío`); (x.parts || []).forEach((pt, j) => { fig(pt.fig, `${w}.parts[${j}]`); const wh = pt.wholes || Math.max(1, Math.ceil(pt.n / nParts(pt.fig))); if (!(pt.n > 0 && pt.n <= wh * nParts(pt.fig))) errors.push(`${w}.parts[${j}]: n no cabe`); }); }
      else if (x.t === "frac") { fig(x.fig, w); if (!Array.isArray(x.ans) || x.ans.length !== 2) errors.push(`${w}: ans [n, d]`); else if (x.fig && x.fig.shaded != null && (x.ans[0] !== x.fig.shaded || x.ans[1] !== nParts(x.fig))) errors.push(`${w}: ans no coincide con la figura`); }
      else if (x.t === "fracop") { (x.rows || []).forEach((r, j) => { fig({ k: r.k, d: r.d }, `${w}.rows[${j}]`); const v = r.op === "-" ? r.a - r.b : r.a + r.b; if (!["+", "-"].includes(r.op) || v < 0 || v > nParts({ k: r.k, d: r.d }) || (fixed[r.k] && fixed[r.k] !== r.d)) errors.push(`${w}.rows[${j}]: operación inválida`); }); }
      else if (x.t === "table") {
        if (!Array.isArray(x.cols) || !Array.isArray(x.rows) || !x.rows.length) errors.push(`${w}: cols/rows`);
        let inputs = 0;
        (x.rows || []).forEach((row, j) => { if (row.length !== x.cols.length) errors.push(`${w}.rows[${j}]: columnas distintas`); row.forEach((c) => { if (c && typeof c === "object") { if (c.fig) fig(c.fig, w); if (c.frac || c.num != null || c.sel || c.text) inputs++; if (c.sel && !c.sel.includes(c.a)) errors.push(`${w}.rows[${j}]: sel.a no está en sel`); } }); });
        if (!inputs) errors.push(`${w}: la tabla no tiene nada para completar`);
      } else errors.push(`${w}: tipo desconocido`);
    });
    if (n < 6) errors.push(`${w0}: muy pocas preguntas (${n})`);
    total++;
  });
  console.log(`${file}: ${added.length} exámenes`);
}
const ids = window.EXAMS.list.map((e) => e.id); if (new Set(ids).size !== ids.length) errors.push("ids repetidos");
if (errors.length) { console.log(`\n${errors.length} problema(s):`); errors.slice(0, 200).forEach((e) => console.log("  - " + e)); process.exit(1); }
console.log(`\n${total} exámenes correctos ✔`);
