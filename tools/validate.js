/* Valida el currículo y los paquetes de contenido.
   Uso: node tools/validate.js            (todo)
        node tools/validate.js mat        (solo una materia: mat, ing, len, cie, soc, tec)
   Carga js/countries.js, js/curriculum.js, js/content/*.js y js/app.js con un DOM mínimo,
   genera muchas preguntas de cada tema y revisa que estén bien formadas. */
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const only = process.argv[2] || null;

// DOM mínimo para poder cargar app.js
const store = {};
global.window = global;
global.localStorage = { getItem: (k) => store[k] || null, setItem: (k, v) => { store[k] = v; }, removeItem: (k) => { delete store[k]; } };
const el = () => ({ innerHTML: "", textContent: "", classList: { add() {}, remove() {}, toggle() {} }, insertAdjacentHTML() {}, appendChild() {}, querySelector: () => el(), setAttribute() {}, style: { setProperty() {} }, dataset: {} });
global.document = { documentElement: { dataset: {} }, body: el(), querySelector: () => el(), querySelectorAll: () => [], addEventListener() {}, createElement: el };
global.location = { protocol: "file:" };
global.matchMedia = () => ({ matches: true });
global.scrollTo = () => {}; global.innerWidth = 800; global.innerHeight = 600; global.addEventListener = () => {};

const errors = [];
const err = (m) => { if (errors.length < 400) errors.push(m); };
const load = (f) => { try { (0, eval)(fs.readFileSync(f, "utf8")); } catch (e) { err(`${path.relative(ROOT, f)}: ${e.message}`); } };
load(path.join(ROOT, "js/countries.js"));
load(path.join(ROOT, "js/curriculum.js"));
const contentDir = path.join(ROOT, "js/content");
const packs = fs.existsSync(contentDir) ? fs.readdirSync(contentDir).filter((f) => f.endsWith(".js")).sort() : [];
packs.forEach((f) => load(path.join(contentDir, f)));
load(path.join(ROOT, "js/art.js"));
let app = fs.readFileSync(path.join(ROOT, "js/app.js"), "utf8");
app = app.replace("/* ================= arranque ================= */", "window.__T = { GEN, buildQuestions, unit, TOPIC_INDEX, setProfile: (p) => { S.profile = p; } };");
try { (0, eval)(app); } catch (e) { err("js/app.js: " + e.message); }
const T = window.__T, C = window.CURRICULUM;
if (!T || !C) { console.error(errors.join("\n")); process.exit(1); }

// 1. bancos bien formados
const isStr = (x) => typeof x === "string" && x.trim().length > 0;
Object.entries(C.Q).forEach(([k, bank]) => {
  if (!Array.isArray(bank) || bank.length < 4) err(`Q.${k}: necesita al menos 4 preguntas`);
  const seen = new Set();
  (bank || []).forEach((it, i) => {
    const where = `Q.${k}[${i}]`;
    if (!Array.isArray(it) || !isStr(it[0]) || !isStr(String(it[1] ?? "")) || !Array.isArray(it[2])) return err(`${where}: formato [pregunta, correcta, [incorrectas], emoji?, explicación?]`);
    if (it[2].length < 2) err(`${where}: necesita al menos 2 incorrectas`);
    if (it[2].map(String).includes(String(it[1]))) err(`${where}: una incorrecta es igual a la correcta`);
    if (new Set(it[2].map(String)).size !== it[2].length) err(`${where}: incorrectas repetidas`);
    const key = it[0] + "→" + it[1]; if (seen.has(key)) err(`${where}: pregunta repetida en el banco`); seen.add(key);
  });
});
Object.entries(C.SORT).forEach(([k, b]) => {
  if (!b) return;
  if (!Array.isArray(b.bins) || b.bins.length < 2) err(`SORT.${k}: necesita 2 o más categorías`);
  (b.items || []).forEach((it, i) => { if (!isStr(it[0]) || !(it[1] >= 0 && it[1] < b.bins.length)) err(`SORT.${k}.items[${i}]: formato ["texto", índiceCategoría]`); });
  if ((b.items || []).length < 6) err(`SORT.${k}: necesita al menos 6 elementos`);
});
Object.entries(C.ORDER).forEach(([k, list]) => {
  if (!Array.isArray(list) || list.length < (Array.isArray(list[0]) ? 1 : 3)) err(`ORDER.${k}: muy pocos elementos`);
  (list || []).forEach((x, i) => {
    if (Array.isArray(x)) { if (x.length < 3 || x.some((y) => !isStr(y)) || new Set(x).size !== x.length) err(`ORDER.${k}[${i}]: pasos (3+ textos distintos)`); }
    else if (!isStr(x) || x.split(" ").length < 3) err(`ORDER.${k}[${i}]: oración de 3 o más palabras`);
  });
});
Object.entries(C.READ).forEach(([k, list]) => (list || []).forEach((st, i) => {
  if (!isStr(st.title) || !isStr(st.text) || !Array.isArray(st.qs) || st.qs.length < 3) err(`READ.${k}[${i}]: {title, text, qs: 3+ preguntas}`);
  (st.qs || []).forEach((q, j) => { if (!isStr(q[0]) || !isStr(q[1]) || !Array.isArray(q[2]) || q[2].length < 2 || q[2].includes(q[1])) err(`READ.${k}[${i}].qs[${j}]: formato`); });
}));
Object.entries(C.VOCAB).forEach(([k, list]) => { if (!Array.isArray(list) || list.length < 5) err(`VOCAB.${k}: al menos 5 palabras`); (list || []).forEach((w, i) => { if (!Array.isArray(w) || w.length < 3 || !w.every(isStr)) err(`VOCAB.${k}[${i}]: [emoji, inglés, español]`); }); });

// 2. temas: ids únicos, generador y banco válidos, y preguntas generadas correctas
const ids = new Set(), summary = {};
const bankOf = { quiz: "Q", sort: "SORT", order: "ORDER", orderSteps: "ORDER", read: "READ", vocab: "VOCAB" };
Object.entries(C.TOPICS).forEach(([s, grades]) => {
  if (only && s !== only) return;
  summary[s] = grades.map((list) => list.length);
  grades.forEach((list, g) => list.forEach((tp) => {
    const where = `${s} grado ${g} "${tp.title}" (${tp.id})`;
    if (ids.has(tp.id)) err(`${where}: id repetido`); ids.add(tp.id);
    if (!T.GEN[tp.gen] && !["read", "robot"].includes(tp.gen)) return err(`${where}: generador desconocido "${tp.gen}"`);
    const kind = bankOf[tp.gen];
    if (kind) { const key = tp.gen === "read" ? tp.params.level : tp.params.bank; if (!C[kind === "Q" ? "Q" : kind][key]) return err(`${where}: no existe el banco ${kind}.${key}`); }
    if (!isStr(tp.lesson) || !isStr(tp.title)) err(`${where}: falta título o explicación`);
  }));
});
["co", "mx", "es", "xx"].forEach((cc) => {
  for (let g = 0; g < 7; g++) {
    T.setProfile({ name: "Fede", adult: "Mamá", country: cc, grade: g, avatar: "🦊", adultAvatar: "👩" });
    Object.values(T.TOPIC_INDEX).forEach(({ t: tp, s }) => {
      if (only && s !== only) return;
      for (let rep = 0; rep < (cc === "co" ? 25 : 2); rep++) {
        let qs; try { qs = T.buildQuestions(T.unit({ type: "topic", id: tp.id })); } catch (e) { return err(`${tp.id}: error al generar: ${e.message}`); }
        if (!qs.length) return err(`${tp.id}: no generó preguntas`);
        for (const q of qs) {
          if (q.kind === "choice") {
            if (!q.options.includes(q.answer)) return err(`${tp.id}: la respuesta "${q.answer}" no está en las opciones (${q.prompt})`);
            if (q.options.length < 2) return err(`${tp.id}: menos de 2 opciones (${q.prompt})`);
            if (new Set(q.options).size !== q.options.length) return err(`${tp.id}: opciones repetidas (${q.prompt})`);
            if (q.options.some((o) => /NaN|undefined|Infinity|\[object/.test(o))) return err(`${tp.id}: opción inválida (${q.prompt})`);
          } else if (q.kind === "order" && (!q.items || q.items.length < 2)) return err(`${tp.id}: ordenar sin elementos`);
        }
      }
    });
  }
});

console.log("Temas por grado (preescolar → 6.º):");
Object.entries(summary).forEach(([s, arr]) => console.log(`  ${s}: ${arr.join(" · ")}  (total ${arr.reduce((a, b) => a + b, 0)})`));
console.log(`Paquetes cargados: ${packs.join(", ") || "ninguno"}`);
if (errors.length) { console.log(`\n${errors.length} problema(s):`); errors.forEach((e) => console.log("  - " + e)); process.exit(1); }
console.log("\nTodo correcto ✔");
