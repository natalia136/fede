/* Ilustraciones vectoriales originales de Aventura Escolar (estilo caricatura plano).
   ART.nova(mood): mascota con expresiones "happy" | "cheer" | "sad" | "think" | "wave".
   ART.world(subject): personaje de cada mundo.  ART.unit(subject, i): personaje pequeño para cada unidad. */
(function () {
  const svg = (vb, body, label) => `<svg viewBox="${vb}" role="img" aria-label="${label}" class="art">${body}</svg>`;

  /* ---------- Nova, la mascota ---------- */
  function nova(mood = "happy") {
    const G = "#58cc02", D = "#58a700", INK = "#3c3c3c", MOUTH = "#2f6b00";
    const eyes = {
      happy: `<g class="blink"><rect x="41" y="49" width="10" height="16" rx="5" fill="${INK}"/><rect x="69" y="49" width="10" height="16" rx="5" fill="${INK}"/></g><circle cx="48" cy="52" r="2.2" fill="#fff"/><circle cx="76" cy="52" r="2.2" fill="#fff"/>`,
      cheer: `<path d="M39 61 Q46 49 53 61" stroke="${INK}" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M67 61 Q74 49 81 61" stroke="${INK}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`,
      sad: `<rect x="41" y="54" width="10" height="12" rx="5" fill="${INK}"/><rect x="69" y="54" width="10" height="12" rx="5" fill="${INK}"/><path d="M38 47 L51 51" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/><path d="M82 47 L69 51" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`,
      think: `<rect x="44" y="46" width="10" height="14" rx="5" fill="${INK}"/><rect x="72" y="46" width="10" height="14" rx="5" fill="${INK}"/><circle cx="51" cy="49" r="2" fill="#fff"/><circle cx="79" cy="49" r="2" fill="#fff"/>`,
      wave: ""
    };
    eyes.wave = eyes.happy;
    const mouth = {
      happy: `<path d="M51 86 Q60 94 69 86" stroke="${MOUTH}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      wave: `<path d="M51 86 Q60 94 69 86" stroke="${MOUTH}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      cheer: `<path d="M48 83 Q60 101 72 83 Z" fill="${MOUTH}"/><path d="M54 92 Q60 97 66 92 Q60 89 54 92Z" fill="#ff8fa3"/>`,
      sad: `<path d="M52 91 Q60 84 68 91" stroke="${MOUTH}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      think: `<path d="M54 89 Q60 86 67 88" stroke="${MOUTH}" stroke-width="4" fill="none" stroke-linecap="round"/>`
    }[mood] || "";
    const armL = mood === "cheer" ? `<rect x="2" y="26" width="15" height="32" rx="7.5" fill="${D}" transform="rotate(-18 10 56)"/><circle cx="6" cy="26" r="8" fill="${G}"/>`
      : `<rect x="4" y="58" width="15" height="28" rx="7.5" fill="${D}"/>`;
    const armR = mood === "cheer" ? `<rect x="103" y="26" width="15" height="32" rx="7.5" fill="${D}" transform="rotate(18 110 56)"/><circle cx="114" cy="26" r="8" fill="${G}"/>`
      : mood === "wave" ? `<g class="wave-arm"><rect x="103" y="22" width="15" height="34" rx="7.5" fill="${D}" transform="rotate(24 110 56)"/><circle cx="118" cy="22" r="8.5" fill="${G}"/></g>`
      : mood === "think" ? `<rect x="88" y="78" width="15" height="28" rx="7.5" fill="${D}" transform="rotate(-50 96 92)"/><circle cx="80" cy="99" r="7.5" fill="${G}"/>`
      : `<rect x="101" y="58" width="15" height="28" rx="7.5" fill="${D}"/>`;
    const extra = {
      cheer: `<path d="M14 12 l3 7 7 1 -5 5 1 7 -6 -4 -6 4 1 -7 -5 -5 7 -1z" fill="#ffc800"/><path d="M104 4 l2 5 5 .7 -3.6 3.5 .9 5 -4.3 -2.4 -4.3 2.4 .9 -5 -3.6 -3.5 5 -.7z" fill="#ff9600"/>`,
      sad: `<path d="M99 30 q7 10 0 14 q-7 -4 0 -14z" fill="#8fd3ff"/>`,
      think: `<circle cx="104" cy="22" r="13" fill="#fff" stroke="#e5e5e5" stroke-width="2"/><text x="104" y="28" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="900" font-size="17" fill="#1cb0f6">?</text><circle cx="92" cy="38" r="3" fill="#fff" stroke="#e5e5e5" stroke-width="1.5"/>`
    }[mood] || "";
    return svg("0 0 120 120", `<ellipse cx="60" cy="114" rx="34" ry="4" fill="#000" opacity=".08"/>
      <line x1="60" y1="10" x2="60" y2="26" stroke="${D}" stroke-width="4" stroke-linecap="round"/><circle class="glow" cx="60" cy="9" r="6.5" fill="#ffc800"/>
      ${armL}${armR}
      <rect x="18" y="24" width="84" height="80" rx="32" fill="${G}"/>
      <path d="M18 78 Q18 104 50 104 H70 Q102 104 102 78 Q96 96 60 96 Q24 96 18 78Z" fill="${D}" opacity=".35"/>
      <rect x="28" y="38" width="64" height="40" rx="20" fill="#fff"/>
      ${eyes[mood] || eyes.happy}
      <circle cx="31" cy="86" r="5" fill="#ff9fb0" opacity=".75"/><circle cx="89" cy="86" r="5" fill="#ff9fb0" opacity=".75"/>
      ${mouth}<circle cx="34" cy="34" r="3.5" fill="#fff" opacity=".5"/>${extra}`, "Nova, la mascota");
  }

  /* ---------- personajes de los mundos ---------- */
  const shadow = `<ellipse cx="80" cy="150" rx="46" ry="6" fill="#000" opacity=".08"/>`;
  const eye = (x, y, r = 10, dx = 2) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff"/><circle cx="${x + dx}" cy="${y + 2}" r="${r * 0.5}" fill="#3c3c3c"/><circle cx="${x + dx + 2}" cy="${y - 1}" r="${r * 0.18}" fill="#fff"/>`;
  const WORLD = {
    // Dino Suma
    mat: () => `${shadow}
      <path d="M44 120 Q8 124 12 96 Q28 110 52 104Z" fill="#ff9600"/>
      <polygon points="50,84 56,68 64,82" fill="#ffc800"/><polygon points="62,78 70,62 76,78" fill="#ffc800"/><polygon points="40,96 42,80 52,92" fill="#ffc800"/>
      <ellipse cx="80" cy="110" rx="40" ry="34" fill="#ff9600"/>
      <ellipse cx="86" cy="116" rx="24" ry="22" fill="#ffd08a"/>
      <rect x="56" y="132" width="18" height="18" rx="8" fill="#e07f00"/><rect x="90" y="134" width="18" height="16" rx="8" fill="#e07f00"/>
      <ellipse cx="94" cy="62" rx="34" ry="30" fill="#ff9600"/>
      <ellipse cx="113" cy="74" rx="18" ry="13" fill="#ffb347"/><circle cx="118" cy="70" r="2" fill="#a35300"/><circle cx="125" cy="72" r="2" fill="#a35300"/>
      ${eye(88, 54, 10, 2)}${eye(108, 50, 8, 1)}
      <path d="M98 82 Q110 89 122 80" stroke="#a35300" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <circle cx="80" cy="72" r="5" fill="#ff6b6b" opacity=".45"/>
      <ellipse cx="116" cy="106" rx="8" ry="11" fill="#e07f00"/>
      <rect x="112" y="80" width="30" height="30" rx="8" fill="#fff" stroke="#ffd08a" stroke-width="3"/>
      <path d="M127 87 V103 M119 95 H135" stroke="#ff9600" stroke-width="5" stroke-linecap="round"/>`,
    // Polly, la lora
    ing: () => `${shadow}
      <path d="M72 132 L62 156 L80 140Z" fill="#1cb0f6"/><path d="M82 134 L84 158 L94 138Z" fill="#58cc02"/>
      <ellipse cx="80" cy="102" rx="34" ry="40" fill="#ce82ff"/>
      <ellipse cx="86" cy="110" rx="20" ry="26" fill="#f1d4ff"/>
      <path d="M52 92 Q38 122 62 136 Q68 112 60 90Z" fill="#a568cc"/>
      <path d="M70 140 q-4 8 -10 8 M90 140 q4 8 10 8" stroke="#ff9600" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M76 30 Q70 8 84 14 Q82 22 86 30Z" fill="#ff4b9b"/><path d="M86 30 Q92 6 102 18 Q94 22 92 32Z" fill="#ffc800"/>
      <circle cx="84" cy="58" r="30" fill="#ce82ff"/>
      ${eye(94, 54, 10, 2)}
      <path d="M104 60 Q126 62 117 78 Q109 72 100 68Z" fill="#ffc800"/><path d="M102 68 Q113 76 108 80 Q100 76 100 70Z" fill="#e5a000"/>
      <circle cx="74" cy="70" r="5" fill="#ff6b9b" opacity=".45"/>
      <path d="M58 52 Q82 14 112 44" stroke="#3c3c3c" stroke-width="6" fill="none" stroke-linecap="round"/>
      <rect x="50" y="48" width="15" height="24" rx="7" fill="#1cb0f6"/>
      <rect x="6" y="16" width="44" height="26" rx="12" fill="#fff" stroke="#e5e5e5" stroke-width="2"/><path d="M38 41 L44 50 L30 41Z" fill="#fff"/>
      <text x="28" y="34" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="900" font-size="15" fill="#a568cc">Hi!</text>`,
    // Lolo, el libro
    len: () => `${shadow}
      <path d="M68 128 L64 148 M92 128 L96 148" stroke="#e5a000" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="60" cy="149" rx="10" ry="5" fill="#ff4b4b"/><ellipse cx="100" cy="149" rx="10" ry="5" fill="#ff4b4b"/>
      <path d="M30 88 Q14 82 16 66" stroke="#e5a000" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M130 88 Q146 82 146 68" stroke="#e5a000" stroke-width="6" fill="none" stroke-linecap="round"/>
      <g transform="rotate(14 146 56)"><rect x="141" y="30" width="10" height="34" rx="2" fill="#ff9600"/><polygon points="141,64 151,64 146,76" fill="#ffd08a"/><polygon points="144,71 148,71 146,76" fill="#3c3c3c"/><rect x="141" y="26" width="10" height="7" rx="2" fill="#ff4b9b"/></g>
      <polygon points="22,44 80,54 138,44 138,126 80,136 22,126" fill="#ffc800"/>
      <polygon points="30,48 80,58 80,128 30,118" fill="#fff"/><polygon points="130,48 80,58 80,128 130,118" fill="#f4f4f4"/>
      <path d="M38 62 L70 68 M38 72 L70 78 M90 68 L122 62 M90 78 L122 72" stroke="#e5e5e5" stroke-width="3" stroke-linecap="round"/>
      <path d="M76 56 V30 L82 38 L88 30 V55" fill="#ff4b4b"/>
      ${eye(60, 90, 10, 2)}${eye(100, 90, 10, -2)}
      <path d="M70 108 Q80 118 90 108" stroke="#3c3c3c" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <circle cx="48" cy="104" r="5" fill="#ff8fa3" opacity=".6"/><circle cx="112" cy="104" r="5" fill="#ff8fa3" opacity=".6"/>`,
    // Dra. Rana
    cie: () => `${shadow}
      <ellipse cx="60" cy="144" rx="15" ry="6" fill="#58a700"/><ellipse cx="100" cy="144" rx="15" ry="6" fill="#58a700"/>
      <ellipse cx="80" cy="114" rx="38" ry="30" fill="#58cc02"/>
      <ellipse cx="80" cy="120" rx="24" ry="18" fill="#c8f59a"/>
      <ellipse cx="80" cy="76" rx="46" ry="30" fill="#58cc02"/>
      <circle cx="56" cy="50" r="17" fill="#58cc02"/><circle cx="104" cy="50" r="17" fill="#58cc02"/>
      <path d="M36 50 H124" stroke="#3c3c3c" stroke-width="4"/>
      ${eye(56, 50, 11, 2)}${eye(104, 50, 11, -2)}
      <circle cx="56" cy="50" r="14" fill="none" stroke="#1cb0f6" stroke-width="4.5"/><circle cx="104" cy="50" r="14" fill="none" stroke="#1cb0f6" stroke-width="4.5"/>
      <path d="M54 84 Q80 104 106 84" stroke="#2f6b00" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="44" cy="82" r="6" fill="#ff8fa3" opacity=".6"/><circle cx="116" cy="82" r="6" fill="#ff8fa3" opacity=".6"/>
      <ellipse cx="120" cy="114" rx="8" ry="12" fill="#58a700"/>
      <path d="M124 82 h12 v12 l12 24 a6 6 0 0 1 -5 9 h-26 a6 6 0 0 1 -5 -9 l12 -24z" fill="#ddf4ff" stroke="#1cb0f6" stroke-width="3"/>
      <path d="M117 112 h38 l3 6 a6 6 0 0 1 -5 9 h-34 a6 6 0 0 1 -5 -9z" fill="#ff4b9b"/>
      <circle cx="132" cy="72" r="4" fill="#ddf4ff" stroke="#1cb0f6" stroke-width="2"/><circle cx="140" cy="62" r="3" fill="#ddf4ff" stroke="#1cb0f6" stroke-width="2"/>`,
    // Mundi, el globo explorador
    soc: () => `${shadow}
      <path d="M66 126 L62 146 M94 126 L98 146" stroke="#1899d6" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="58" cy="148" rx="11" ry="5" fill="#8a5a2b"/><ellipse cx="102" cy="148" rx="11" ry="5" fill="#8a5a2b"/>
      <path d="M120 98 L140 106" stroke="#1899d6" stroke-width="6" stroke-linecap="round"/>
      <g transform="rotate(-10 146 104)"><rect x="132" y="92" width="28" height="22" rx="3" fill="#fff5cc" stroke="#e5a000" stroke-width="2"/><path d="M138 98 l6 6 m0 -6 l-6 6" stroke="#ff4b4b" stroke-width="2.5" stroke-linecap="round"/><path d="M146 108 q4 -6 8 -2" stroke="#1cb0f6" stroke-width="2" fill="none"/></g>
      <circle cx="80" cy="88" r="44" fill="#1cb0f6"/>
      <path d="M48 72 q10 -16 26 -8 q8 10 -4 18 q-8 10 -18 4 q-10 -4 -4 -14z" fill="#58cc02"/>
      <path d="M94 98 q14 -6 22 6 q2 14 -12 18 q-14 0 -10 -24z" fill="#58cc02"/><path d="M90 56 q10 -6 18 2 q-4 8 -16 4z" fill="#58cc02"/>
      <path d="M106 52 A44 44 0 0 1 106 124 A52 52 0 0 0 106 52Z" fill="#1899d6" opacity=".55"/>
      ${eye(66, 84, 9, 2)}${eye(94, 84, 9, -1)}
      <path d="M70 102 Q80 112 90 102" stroke="#0b4f73" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <circle cx="56" cy="98" r="5" fill="#ff8fa3" opacity=".6"/><circle cx="104" cy="98" r="5" fill="#ff8fa3" opacity=".6"/>
      <path d="M52 48 Q54 22 80 22 Q106 22 108 48Z" fill="#c8954f"/><rect x="52" y="39" width="56" height="7" fill="#8a5a2b"/>
      <ellipse cx="80" cy="48" rx="42" ry="8" fill="#a0743c"/>`,
    // Gatobot
    tec: () => `${shadow}
      <path d="M110 134 q34 2 28 -28" stroke="#d93d82" stroke-width="8" fill="none" stroke-linecap="round"/>
      <rect x="58" y="134" width="14" height="14" rx="5" fill="#a8326a"/><rect x="88" y="134" width="14" height="14" rx="5" fill="#a8326a"/>
      <rect x="40" y="108" width="14" height="24" rx="7" fill="#d93d82"/><rect x="106" y="108" width="14" height="24" rx="7" fill="#d93d82"/>
      <rect x="50" y="102" width="60" height="38" rx="14" fill="#d93d82"/>
      <circle cx="80" cy="120" r="7" fill="#ffc800"/><circle cx="80" cy="120" r="3" fill="#fff" opacity=".7"/>
      <polygon points="36,42 50,8 70,36" fill="#ff4b9b"/><polygon points="90,36 110,8 124,42" fill="#ff4b9b"/>
      <polygon points="45,36 52,18 62,34" fill="#ffd1e6"/><polygon points="98,34 108,18 115,36" fill="#ffd1e6"/>
      <line x1="80" y1="30" x2="80" y2="14" stroke="#d93d82" stroke-width="4"/><circle class="glow" cx="80" cy="11" r="6" fill="#ffc800"/>
      <rect x="28" y="28" width="104" height="78" rx="30" fill="#ff4b9b"/>
      <rect x="40" y="42" width="80" height="50" rx="22" fill="#2b2b3a"/>
      <g class="blink"><rect x="56" y="54" width="13" height="18" rx="6.5" fill="#49c0f8"/><rect x="91" y="54" width="13" height="18" rx="6.5" fill="#49c0f8"/></g>
      <path d="M71 79 q4.5 6 9 0 q4.5 6 9 0" stroke="#49c0f8" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M44 72 H34 M44 78 L35 82 M116 72 H126 M116 78 L125 82" stroke="#ffd1e6" stroke-width="3" stroke-linecap="round"/>`
  };
  const NAMES = { mat: "Dino Suma", ing: "Polly, la lora", len: "Lolo, el libro", cie: "Dra. Rana", soc: "Mundi, el explorador", tec: "Gatobot" };
  const world = (s) => svg("0 0 160 160", (WORLD[s] || WORLD.mat)(), NAMES[s] || "Personaje");
  const unit = (s, i) => `<span class="${i % 2 ? "flip" : ""}">${world(s)}</span>`;

  /* ---------- escena para estados vacíos y resultados ---------- */
  const trophy = () => svg("0 0 120 120", `<ellipse cx="60" cy="112" rx="30" ry="4" fill="#000" opacity=".08"/>
    <rect x="40" y="94" width="40" height="14" rx="4" fill="#cd7900"/><rect x="50" y="80" width="20" height="16" fill="#e5a000"/>
    <path d="M30 22 H90 V44 Q90 80 60 82 Q30 80 30 44Z" fill="#ffc800"/><path d="M60 22 H90 V44 Q90 80 60 82Z" fill="#e5a000" opacity=".35"/>
    <path d="M30 30 Q12 30 14 46 Q16 58 32 58" stroke="#ffc800" stroke-width="7" fill="none"/><path d="M90 30 Q108 30 106 46 Q104 58 88 58" stroke="#ffc800" stroke-width="7" fill="none"/>
    <path d="M60 34 l5 10 11 1.6 -8 7.8 1.9 11 -9.9 -5.2 -9.9 5.2 1.9 -11 -8 -7.8 11 -1.6z" fill="#fff"/>`, "Trofeo");


  /* ---------- íconos propios (32×32) ---------- */
  const gearTeeth = Array.from({ length: 8 }, (_, a) => `<rect x="13.5" y="1.5" width="5" height="8" rx="1.8" transform="rotate(${a * 45} 16 16)"/>`).join("");
  const ICONS = {
    home: `<path d="M3 15 L16 4 L29 15 Z" fill="#ff4b4b"/><rect x="7" y="14" width="18" height="14" rx="2" fill="#ffc800"/><rect x="13.5" y="19" width="5" height="9" rx="2" fill="#ff9600"/><rect x="9" y="17" width="3.5" height="3.5" rx="1" fill="#fff"/><rect x="19.5" y="17" width="3.5" height="3.5" rx="1" fill="#fff"/>`,
    courses: `<rect x="4" y="6" width="6.5" height="21" rx="1.5" fill="#1cb0f6"/><rect x="11.5" y="4" width="6.5" height="23" rx="1.5" fill="#58cc02"/><rect x="19.5" y="8" width="6.5" height="19" rx="1.5" fill="#ff9600" transform="rotate(-12 22.7 17.5)"/><rect x="5" y="10" width="4.5" height="2" fill="#fff" opacity=".7"/><rect x="12.5" y="8" width="4.5" height="2" fill="#fff" opacity=".7"/><rect x="3" y="26" width="26" height="3" rx="1.5" fill="#a0743c"/>`,
    duel: `<path d="M18 2 L6 18 H14 L12 30 L26 12 H17 Z" fill="#ffc800" stroke="#ff9600" stroke-width="1.6" stroke-linejoin="round"/>`,
    plan: `<rect x="4" y="6" width="24" height="22" rx="4" fill="#fff" stroke="#e5e5e5" stroke-width="2"/><path d="M4 10 Q4 6 8 6 H24 Q28 6 28 10 V13 H4Z" fill="#ff4b4b"/><rect x="9" y="3" width="3" height="6" rx="1.5" fill="#3c3c3c"/><rect x="20" y="3" width="3" height="6" rx="1.5" fill="#3c3c3c"/><circle cx="10.5" cy="18.5" r="2" fill="#1cb0f6"/><circle cx="16" cy="18.5" r="2" fill="#1cb0f6"/><circle cx="21.5" cy="18.5" r="2" fill="#58cc02"/><circle cx="10.5" cy="23.5" r="2" fill="#1cb0f6"/><circle cx="16" cy="23.5" r="2" fill="#ffc800"/>`,
    shop: `<path d="M11 11 V8 a5 5 0 0 1 10 0 V11" stroke="#a568cc" stroke-width="2.6" fill="none"/><path d="M6 10 H26 L24 28 H8 Z" fill="#ce82ff"/><path d="M16 14.5 l1.7 3.4 3.7.5 -2.7 2.6.7 3.7 -3.4 -1.8 -3.4 1.8.7 -3.7 -2.7 -2.6 3.7 -.5z" fill="#ffc800"/>`,
    trophy: `<path d="M9 5 H23 V12 Q23 20 16 20 Q9 20 9 12 Z" fill="#ffc800"/><path d="M9.5 7.5 H5.5 Q5.5 14 10.5 14 M22.5 7.5 H26.5 Q26.5 14 21.5 14" stroke="#ffc800" stroke-width="2.6" fill="none"/><rect x="14" y="20" width="4" height="5" fill="#e5a000"/><rect x="9" y="25" width="14" height="4" rx="1.5" fill="#cd7900"/><path d="M16 8 l1.2 2.4 2.6.4 -1.9 1.8.5 2.6 -2.4 -1.3 -2.4 1.3.5 -2.6 -1.9 -1.8 2.6 -.4z" fill="#fff"/>`,
    account: `<path d="M5 29 Q6 19 16 19 Q26 19 27 29 Z" fill="#1cb0f6"/><circle cx="16" cy="11.5" r="6.5" fill="#ffcf9e"/><path d="M9.5 10 Q11 3.5 17 4 Q23 4.5 22.5 10.5 Q19 7.5 13 8.5Z" fill="#7a4a2a"/>`,
    settings: `<g fill="#8fa4ae">${gearTeeth}<circle cx="16" cy="16" r="10"/></g><circle cx="16" cy="16" r="4.5" fill="#fff"/>`,
    flame: `<path d="M16 2.5 Q25 11 24 19.5 Q23 29 16 29 Q8.5 29 8.5 20.5 Q8.5 14 13 9.5 Q13 15 16 16 Q14.5 9 16 2.5Z" fill="#ff9600"/><path d="M16 14 Q20.5 19 20 23.5 Q19.5 27.5 16 27.5 Q12.5 27.5 12.5 23.5 Q12.5 19.5 16 14Z" fill="#ffc800"/>`,
    coin: `<circle cx="16" cy="16" r="13" fill="#e5a000"/><circle cx="16" cy="15" r="12" fill="#ffc800"/><circle cx="16" cy="15" r="8.5" fill="#ffd84d"/><path d="M16 9.5 l1.6 3.4 3.7.5 -2.7 2.6.7 3.7 -3.3 -1.8 -3.3 1.8.7 -3.7 -2.7 -2.6 3.7 -.5z" fill="#e5a000"/>`,
    gem: `<path d="M8 6 H24 L29 13 L16 28 L3 13 Z" fill="#1cb0f6"/><path d="M3 13 H29 L16 28Z" fill="#1899d6"/><path d="M8 6 L12 13 L16 6 L20 13 L24 6" stroke="#ddf4ff" stroke-width="1.6" fill="none" stroke-linejoin="round"/>`,
    book: `<path d="M3.5 7 Q10 4.5 16 8 V27 Q10 23.5 3.5 26Z" fill="#fff"/><path d="M28.5 7 Q22 4.5 16 8 V27 Q22 23.5 28.5 26Z" fill="#eef7ff"/><path d="M7 12 Q10 11 13 12.5 M7 16 Q10 15 13 16.5 M19 12.5 Q22 11 25 12 M19 16.5 Q22 15 25 16" stroke="#1cb0f6" stroke-width="1.6" fill="none" stroke-linecap="round"/>`,
    dumbbell: `<rect x="2.5" y="11.5" width="5" height="9" rx="2" fill="#fff"/><rect x="24.5" y="11.5" width="5" height="9" rx="2" fill="#fff"/><rect x="6.5" y="7.5" width="5" height="17" rx="2.2" fill="#fff"/><rect x="20.5" y="7.5" width="5" height="17" rx="2.2" fill="#fff"/><rect x="11" y="14.5" width="10" height="3" fill="#fff"/>`,
    crown: `<path d="M4 24 L6 9 L12 16 L16 6 L20 16 L26 9 L28 24 Z" fill="#ffc800" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><circle cx="16" cy="19" r="2.2" fill="#ff4b4b"/><circle cx="9.5" cy="20" r="1.5" fill="#1cb0f6"/><circle cx="22.5" cy="20" r="1.5" fill="#1cb0f6"/>`,
    check: `<path d="M7 17 L13 23 L25 9" stroke="#fff" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    done: `<circle cx="16" cy="16" r="13" fill="#58cc02"/><path d="M9.5 16.5 l4.5 4.5 l8.5 -9.5" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    gamepad: `<rect x="3" y="9.5" width="26" height="15" rx="7.5" fill="#ce82ff"/><path d="M9.5 13.5 v7 M6 17 h7" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><circle cx="21" cy="14.8" r="2" fill="#ffc800"/><circle cx="24.6" cy="18.6" r="2" fill="#ff4b4b"/>`,
    team: `<path d="M2.5 28 Q3.5 18 11 18 Q14.5 18 16 20.5 Q17.5 18 21 18 Q28.5 18 29.5 28Z" fill="#58cc02"/><circle cx="11" cy="11.5" r="5.5" fill="#ffcf9e"/><circle cx="21" cy="11.5" r="5.5" fill="#c68642"/><path d="M5.8 10 Q7 5 12 5.8 Q15.5 6.5 16 9.5 Q11 7.5 5.8 10Z" fill="#3c3c3c"/><path d="M16 9 Q17 5 21.5 5.5 Q26 6.2 26.3 11 Q22 8 16 9Z" fill="#7a4a2a"/>`,
    stopwatch: `<rect x="13" y="2.5" width="6" height="4" rx="1.5" fill="#1cb0f6"/><circle cx="16" cy="18" r="11" fill="#fff" stroke="#1cb0f6" stroke-width="3"/><path d="M16 18 V11.5" stroke="#ff4b4b" stroke-width="2.6" stroke-linecap="round"/><path d="M16 18 L20.5 20.5" stroke="#3c3c3c" stroke-width="2.2" stroke-linecap="round"/><circle cx="16" cy="18" r="1.6" fill="#3c3c3c"/>`,
    mat: `<path d="M9.5 5 v9 M5 9.5 h9 M18.5 9.5 h9 M5.5 18.5 l7 7 M12.5 18.5 l-7 7 M18.5 22 h9" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/><circle cx="23" cy="18" r="1.8" fill="#fff"/><circle cx="23" cy="26" r="1.8" fill="#fff"/>`,
    ing: `<path d="M3.5 8 Q3.5 4.5 7 4.5 H25 Q28.5 4.5 28.5 8 V19 Q28.5 22.5 25 22.5 H13.5 L7 28 V22.5 Q3.5 22.5 3.5 19Z" fill="#fff"/><text x="16" y="17.6" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="900" font-size="10" fill="#a568cc">ABC</text>`,
    len: `<g transform="rotate(40 16 16)"><rect x="12" y="1.5" width="8" height="21" rx="1.5" fill="#fff"/><path d="M12 22.5 h8 l-4 7z" fill="#ffd08a"/><path d="M14.5 27 h3 l-1.5 2.5z" fill="#3c3c3c"/><rect x="12" y="1.5" width="8" height="4.5" rx="1.5" fill="#ff8fa3"/></g>`,
    cie: `<path d="M12.5 4 H19.5 M13.5 4 V12.5 L6.2 25 Q5 28 8.5 28 H23.5 Q27 28 25.8 25 L18.5 12.5 V4" fill="#fff" stroke="#fff" stroke-width="2.4" stroke-linejoin="round"/><path d="M9 20.5 H23 L25 25 Q25.6 26.8 23.6 26.8 H8.4 Q6.4 26.8 7 25Z" fill="#ff8fa3"/><circle cx="14" cy="16.5" r="1.6" fill="#9ee0ff"/><circle cx="18" cy="13.5" r="1.2" fill="#9ee0ff"/>`,
    soc: `<circle cx="16" cy="16" r="12.5" fill="#fff"/><path d="M8.5 11 q4 -4.5 8.5 -1.5 q2.5 3.5 -2 5.5 q-3.5 3 -6.5 0z M18.5 19 q4.5 -2.5 6.5 1 q0 4.5 -4.5 5.5 q-3.5 -1 -2 -6.5z M18 6.5 q3 -1 5 1 q-1.5 2 -4.5 1z" fill="#58cc02"/>`,
    tec: `<g stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M12 3v4M16 3v4M20 3v4M12 25v4M16 25v4M20 25v4M3 12h4M3 16h4M3 20h4M25 12h4M25 16h4M25 20h4"/></g><rect x="7.5" y="7.5" width="17" height="17" rx="3.5" fill="#fff"/><rect x="12" y="12" width="8" height="8" rx="1.8" fill="#ff8fc8"/>`,
    gift: `<rect x="5" y="13" width="22" height="15" rx="2" fill="#ff4b4b"/><rect x="3" y="9" width="26" height="6" rx="2" fill="#ff6b6b"/><rect x="14" y="9" width="4" height="19" fill="#ffc800"/><path d="M16 9 Q10 1.5 7.5 5.5 Q6.5 9 16 9 Q25.5 9 24.5 5.5 Q22 1.5 16 9Z" fill="#ffc800"/>`,
    sparkle: `<path d="M13.5 3 Q14.5 12 23 14 Q14.5 16 13.5 27 Q12.5 16 4 14 Q12.5 12 13.5 3Z" fill="#ce82ff"/><path d="M24 3 Q24.5 7 28.5 8 Q24.5 9 24 13 Q23.5 9 19.5 8 Q23.5 7 24 3Z" fill="#ffc800"/>`,
    sword: `<g transform="rotate(45 16 16)"><path d="M14.3 2 L16 -.5 L17.7 2 V20 H14.3Z" fill="#dfe7ee"/><path d="M16 2 V20" stroke="#b9c6d0" stroke-width="1"/><rect x="9.5" y="20" width="13" height="3.2" rx="1.6" fill="#ffc800"/><rect x="14.4" y="23" width="3.2" height="7" rx="1.5" fill="#a0743c"/></g>`,
    target: `<circle cx="16" cy="16" r="12.5" fill="#ff4b4b"/><circle cx="16" cy="16" r="8.5" fill="#fff"/><circle cx="16" cy="16" r="4.5" fill="#ff4b4b"/><path d="M16 16 L27 5" stroke="#3c3c3c" stroke-width="2" stroke-linecap="round"/><path d="M24 4 L28 4 L28 8" stroke="#3c3c3c" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    rainbow: `<path d="M3 25 a13 13 0 0 1 26 0" stroke="#ff4b4b" stroke-width="3.6" fill="none"/><path d="M7 25 a9 9 0 0 1 18 0" stroke="#ffc800" stroke-width="3.6" fill="none"/><path d="M11 25 a5 5 0 0 1 10 0" stroke="#1cb0f6" stroke-width="3.6" fill="none"/>`,
    star: `<path d="M16 3 l3.9 8 8.8 1.3 -6.4 6.2 1.5 8.8 -7.8 -4.1 -7.8 4.1 1.5 -8.8 -6.4 -6.2 8.8 -1.3z" fill="#ffc800"/>`,
    heart: `<path d="M16 28 L5 17 a6.5 6.5 0 0 1 11 -8 a6.5 6.5 0 0 1 11 8z" fill="#ff4b4b"/><circle cx="10" cy="13" r="2" fill="#fff" opacity=".6"/>`,
    lock: `<path d="M10.5 14 V10 a5.5 5.5 0 0 1 11 0 V14" stroke="#afafaf" stroke-width="3" fill="none"/><rect x="6.5" y="13.5" width="19" height="15" rx="3.5" fill="#afafaf"/><circle cx="16" cy="20" r="2.2" fill="#fff"/>`,
    speaker: `<path d="M4.5 12 h5 l7.5 -6.5 v21 l-7.5 -6.5 h-5z" fill="#1cb0f6"/><path d="M21 11 q4 5 0 10 M24.5 7.5 q7.5 8.5 0 17" stroke="#1cb0f6" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
    bulb: `<path d="M16 3 a9 9 0 0 1 5 16.5 V23 H11 V19.5 A9 9 0 0 1 16 3Z" fill="#ffc800"/><rect x="11" y="23" width="10" height="3" rx="1" fill="#afafaf"/><rect x="12.5" y="26" width="7" height="3" rx="1.5" fill="#8f8f8f"/><path d="M12.5 9.5 q2 -3.5 5.5 -2.5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    play: `<circle cx="16" cy="16" r="13" fill="#58cc02"/><path d="M12.5 9.5 L23 16 L12.5 22.5Z" fill="#fff" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>`,
    shield: `<path d="M16 3 L27 7 V15 Q27 24 16 29 Q5 24 5 15 V7Z" fill="#1cb0f6"/><path d="M16 3 V29 Q5 24 5 15 V7Z" fill="#1899d6"/><path d="M11 16 l3.5 3.5 l6.5 -7" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    users: `<circle cx="11" cy="11" r="5" fill="#ce82ff"/><circle cx="22" cy="12.5" r="4.2" fill="#1cb0f6"/><path d="M2.5 27 Q3 18 11 18 Q19 18 19.5 27Z" fill="#ce82ff"/><path d="M17 27 Q17.5 19.5 22 19.5 Q29 19.5 29.5 27Z" fill="#1cb0f6"/>`
  };
  const icon = (name) => `<svg class="ico" viewBox="0 0 32 32" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  /* ---------- avatares (64×64) ---------- */
  const E = (x, y, r = 3.4) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#3c3c3c"/><circle cx="${x + 1}" cy="${y - 1.2}" r="${r * 0.32}" fill="#fff"/>`;
  const SMILE = (y = 46, c = "#3c3c3c") => `<path d="M27 ${y} Q32 ${y + 5} 37 ${y}" stroke="${c}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  const CHEEK = (y = 42) => `<circle cx="18" cy="${y}" r="3.5" fill="#ff8fa3" opacity=".55"/><circle cx="46" cy="${y}" r="3.5" fill="#ff8fa3" opacity=".55"/>`;
  const AV = {
    fox: `<polygon points="10,30 14,4 30,20" fill="#ff8a3d"/><polygon points="54,30 50,4 34,20" fill="#ff8a3d"/><polygon points="15,22 16,11 24,19" fill="#ffd1b3"/><polygon points="49,22 48,11 40,19" fill="#ffd1b3"/><ellipse cx="32" cy="36" rx="23" ry="21" fill="#ff8a3d"/><path d="M9 38 Q32 31 55 38 Q49 58 32 58 Q15 58 9 38Z" fill="#fff"/>${E(23, 34)}${E(41, 34)}<ellipse cx="32" cy="43" rx="4.2" ry="3" fill="#3c3c3c"/>${SMILE(48)}`,
    panda: `<circle cx="14" cy="15" r="8.5" fill="#3c3c3c"/><circle cx="50" cy="15" r="8.5" fill="#3c3c3c"/><circle cx="32" cy="35" r="24" fill="#fff" stroke="#e5e5e5" stroke-width="2"/><ellipse cx="22" cy="33" rx="6.5" ry="8.5" fill="#3c3c3c" transform="rotate(-25 22 33)"/><ellipse cx="42" cy="33" rx="6.5" ry="8.5" fill="#3c3c3c" transform="rotate(25 42 33)"/><circle cx="23" cy="32" r="2.6" fill="#fff"/><circle cx="41" cy="32" r="2.6" fill="#fff"/><ellipse cx="32" cy="43" rx="4" ry="2.8" fill="#3c3c3c"/>${SMILE(48)}${CHEEK(46)}`,
    lion: `<circle cx="32" cy="33" r="29" fill="#ff9600"/><g fill="#e07f00"><circle cx="10" cy="22" r="6"/><circle cx="54" cy="22" r="6"/><circle cx="8" cy="40" r="6"/><circle cx="56" cy="40" r="6"/><circle cx="32" cy="5" r="6"/></g><circle cx="17" cy="16" r="5" fill="#ffc800"/><circle cx="47" cy="16" r="5" fill="#ffc800"/><circle cx="32" cy="35" r="19" fill="#ffc800"/><ellipse cx="32" cy="44" rx="9" ry="7" fill="#fff1b8"/>${E(25, 32)}${E(39, 32)}<path d="M28.5 40 h7 l-3.5 4z" fill="#a35300"/>${SMILE(47, "#a35300")}`,
    frog: `<circle cx="19" cy="20" r="10" fill="#58cc02"/><circle cx="45" cy="20" r="10" fill="#58cc02"/><ellipse cx="32" cy="40" rx="26" ry="19" fill="#58cc02"/><circle cx="19" cy="20" r="6.5" fill="#fff"/><circle cx="45" cy="20" r="6.5" fill="#fff"/>${E(20, 21, 3.2)}${E(44, 21, 3.2)}<path d="M18 42 Q32 54 46 42" stroke="#2f6b00" stroke-width="3" fill="none" stroke-linecap="round"/>${CHEEK(40)}`,
    cat: `<polygon points="10,28 12,4 28,16" fill="#8fa4ae"/><polygon points="54,28 52,4 36,16" fill="#8fa4ae"/><polygon points="14,22 15,11 23,17" fill="#ffc7d6"/><polygon points="50,22 49,11 41,17" fill="#ffc7d6"/><ellipse cx="32" cy="36" rx="24" ry="21" fill="#a9bbc5"/><path d="M22 18 q2 6 0 10 M32 16 v9 M42 18 q-2 6 0 10" stroke="#8fa4ae" stroke-width="2.4" fill="none" stroke-linecap="round"/>${E(23, 35)}${E(41, 35)}<path d="M29.5 42 h5 l-2.5 3z" fill="#ff8fa3"/><path d="M28 47 q4 3 4 -1 q0 4 4 1" stroke="#3c3c3c" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M8 40 h10 M8 45 l10 -2 M56 40 h-10 M56 45 l-10 -2" stroke="#6d808a" stroke-width="1.6" stroke-linecap="round"/>`,
    bunny: `<ellipse cx="22" cy="14" rx="6.5" ry="15" fill="#f2f2f2" stroke="#e5e5e5" stroke-width="1.5"/><ellipse cx="42" cy="14" rx="6.5" ry="15" fill="#f2f2f2" stroke="#e5e5e5" stroke-width="1.5"/><ellipse cx="22" cy="15" rx="3" ry="10" fill="#ffc7d6"/><ellipse cx="42" cy="15" rx="3" ry="10" fill="#ffc7d6"/><circle cx="32" cy="40" r="21" fill="#f7f7f7" stroke="#e5e5e5" stroke-width="2"/>${E(24, 38)}${E(40, 38)}<path d="M29.5 44 h5 l-2.5 3z" fill="#ff8fa3"/><rect x="29.5" y="48" width="5" height="5" rx="1" fill="#fff" stroke="#e5e5e5" stroke-width="1"/>${CHEEK(46)}`,
    bear: `<circle cx="14" cy="16" r="9" fill="#a0743c"/><circle cx="50" cy="16" r="9" fill="#a0743c"/><circle cx="14" cy="16" r="4.5" fill="#d9b48a"/><circle cx="50" cy="16" r="4.5" fill="#d9b48a"/><circle cx="32" cy="36" r="23" fill="#a0743c"/><ellipse cx="32" cy="45" rx="11" ry="8.5" fill="#d9b48a"/>${E(23, 33)}${E(41, 33)}<ellipse cx="32" cy="41" rx="4.5" ry="3.2" fill="#3c3c3c"/>${SMILE(47)}`,
    owl: `<polygon points="12,16 16,2 24,12" fill="#a568cc"/><polygon points="52,16 48,2 40,12" fill="#a568cc"/><ellipse cx="32" cy="36" rx="25" ry="24" fill="#ce82ff"/><ellipse cx="32" cy="46" rx="14" ry="11" fill="#f1d4ff"/><circle cx="22" cy="28" r="9.5" fill="#fff"/><circle cx="42" cy="28" r="9.5" fill="#fff"/><circle cx="22" cy="28" r="9.5" fill="none" stroke="#ffc800" stroke-width="2.4"/><circle cx="42" cy="28" r="9.5" fill="none" stroke="#ffc800" stroke-width="2.4"/>${E(23, 29, 4)}${E(41, 29, 4)}<path d="M28.5 36 h7 l-3.5 6z" fill="#ff9600"/>`,
    penguin: `<ellipse cx="32" cy="34" rx="25" ry="26" fill="#3c4a54"/><path d="M14 36 Q16 20 32 26 Q48 20 50 36 Q48 56 32 56 Q16 56 14 36Z" fill="#fff"/>${E(25, 34)}${E(39, 34)}<path d="M27.5 41 h9 l-4.5 5z" fill="#ff9600"/>${CHEEK(44)}`,
    dino: `<polygon points="20,10 24,1 28,10" fill="#ffc800"/><polygon points="30,8 34,-1 38,8" fill="#ffc800"/><polygon points="40,11 45,3 47,13" fill="#ffc800"/><ellipse cx="32" cy="36" rx="25" ry="23" fill="#2bd96b"/><ellipse cx="32" cy="46" rx="17" ry="10" fill="#9ff0bf"/>${E(23, 31)}${E(41, 31)}<circle cx="27" cy="42" r="1.4" fill="#1e8a48"/><circle cx="37" cy="42" r="1.4" fill="#1e8a48"/><path d="M22 47 Q32 56 42 47" stroke="#1e8a48" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M27 49.5 l2 3 2 -3 M33 49.5 l2 3 2 -3" fill="#fff"/>`,
    unicorn: `<path d="M18 22 Q8 30 12 46 Q16 30 26 26Z" fill="#ff4b9b"/><path d="M16 18 Q4 24 6 40 Q12 26 22 22Z" fill="#ce82ff"/><polygon points="34,2 30,22 40,20" fill="#ffc800"/><path d="M31.5 9 l6 -1 M30.7 14 l7.6 -1.4" stroke="#e5a000" stroke-width="1.6"/><ellipse cx="34" cy="38" rx="22" ry="21" fill="#fff" stroke="#e5e5e5" stroke-width="2"/><ellipse cx="38" cy="50" rx="13" ry="8" fill="#ffe1ee"/>${E(27, 35)}${E(43, 35)}<circle cx="34" cy="50" r="1.4" fill="#d93d82"/><circle cx="42" cy="50" r="1.4" fill="#d93d82"/>${CHEEK(43)}`,
    octopus: `<path d="M10 40 Q4 54 12 58 M20 44 Q16 58 24 62 M32 46 V62 M44 44 Q48 58 40 62 M54 40 Q60 54 52 58" stroke="#ff4b9b" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M8 34 Q8 6 32 6 Q56 6 56 34 Q56 48 32 48 Q8 48 8 34Z" fill="#ff4b9b"/>${E(24, 28, 4)}${E(40, 28, 4)}${SMILE(37)}<circle cx="20" cy="14" r="3" fill="#fff" opacity=".4"/>${CHEEK(34)}`,
    mom: `<path d="M8 38 Q6 8 32 8 Q58 8 56 38 Q56 56 48 60 V40 H16 V60 Q8 56 8 38Z" fill="#7a4a2a"/><ellipse cx="32" cy="36" rx="18" ry="21" fill="#ffcf9e"/><path d="M14 30 Q18 12 34 13 Q48 14 50 30 Q40 20 26 22 Q20 24 14 30Z" fill="#7a4a2a"/>${E(25, 36, 3)}${E(39, 36, 3)}${SMILE(46, "#c0392b")}${CHEEK(43)}`,
    dad: `<ellipse cx="32" cy="36" rx="19" ry="21" fill="#c68642"/><path d="M13 30 Q12 9 32 9 Q52 9 51 30 Q46 18 32 19 Q18 18 13 30Z" fill="#2b2b2b"/><circle cx="13" cy="37" r="4" fill="#c68642"/><circle cx="51" cy="37" r="4" fill="#c68642"/>${E(25, 35, 3)}${E(39, 35, 3)}<path d="M18 44 Q20 58 32 58 Q44 58 46 44 Q40 49 32 49 Q24 49 18 44Z" fill="#2b2b2b"/><path d="M27 48 Q32 52 37 48" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
    grandma: `<circle cx="32" cy="9" r="7" fill="#d5d5d5"/><path d="M12 34 Q10 12 32 13 Q54 12 52 34 Q48 20 32 21 Q16 20 12 34Z" fill="#d5d5d5"/><ellipse cx="32" cy="38" rx="18" ry="20" fill="#f1c27d"/><path d="M14 33 Q18 18 32 19 Q46 18 50 33 Q42 24 32 25 Q22 24 14 33Z" fill="#d5d5d5"/><circle cx="25" cy="37" r="5.5" fill="none" stroke="#a568cc" stroke-width="2"/><circle cx="39" cy="37" r="5.5" fill="none" stroke="#a568cc" stroke-width="2"/><path d="M30.5 37 h3" stroke="#a568cc" stroke-width="2"/>${E(25, 37, 2.4)}${E(39, 37, 2.4)}${SMILE(47)}${CHEEK(45)}`,
    grandpa: `<ellipse cx="32" cy="37" rx="19" ry="21" fill="#e0ac69"/><path d="M13 36 Q11 22 17 18 Q16 30 19 36Z M51 36 Q53 22 47 18 Q48 30 45 36Z" fill="#e5e5e5"/><circle cx="13" cy="38" r="4" fill="#e0ac69"/><circle cx="51" cy="38" r="4" fill="#e0ac69"/><rect x="18.5" y="31" width="11" height="9" rx="3" fill="none" stroke="#3c3c3c" stroke-width="2"/><rect x="34.5" y="31" width="11" height="9" rx="3" fill="none" stroke="#3c3c3c" stroke-width="2"/><path d="M29.5 35 h5" stroke="#3c3c3c" stroke-width="2"/>${E(24, 36, 2.4)}${E(40, 36, 2.4)}<path d="M22 47 Q27 43 32 46 Q37 43 42 47 Q37 50 32 48 Q27 50 22 47Z" fill="#e5e5e5"/><path d="M28 52 Q32 54 36 52" stroke="#3c3c3c" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    adult: `<ellipse cx="32" cy="37" rx="19" ry="21" fill="#8d5524"/><g fill="#2b2b2b"><circle cx="18" cy="20" r="7"/><circle cx="26" cy="13" r="7.5"/><circle cx="36" cy="12" r="7.5"/><circle cx="45" cy="18" r="7"/><circle cx="14" cy="29" r="5.5"/><circle cx="50" cy="28" r="5.5"/></g>${E(25, 36, 3)}${E(39, 36, 3)}${SMILE(46, "#3c1f0a")}<circle cx="18" cy="43" r="3.5" fill="#ff8fa3" opacity=".35"/><circle cx="46" cy="43" r="3.5" fill="#ff8fa3" opacity=".35"/>`,
    hero: `<path d="M6 60 Q12 34 32 34 Q52 34 58 60Z" fill="#ff4b4b"/><ellipse cx="32" cy="34" rx="18" ry="20" fill="#ffcf9e"/><path d="M14 30 Q13 11 32 11 Q51 11 50 30 Q44 20 32 21 Q20 20 14 30Z" fill="#3c3c3c"/><path d="M14 31 Q32 24 50 31 L48 39 Q40 35 32 38 Q24 35 16 39Z" fill="#1cb0f6"/><circle cx="24" cy="33.5" r="3" fill="#fff"/><circle cx="40" cy="33.5" r="3" fill="#fff"/><circle cx="24.5" cy="33.5" r="1.6" fill="#3c3c3c"/><circle cx="40.5" cy="33.5" r="1.6" fill="#3c3c3c"/>${SMILE(44)}<path d="M26 56 l6 -6 6 6 -6 6z" fill="#ffc800"/>`
  };

  /* ---------- creador de avatar: "c:piel.peinado.colorPelo.ojos.boca.accesorio.camiseta.fondo" ---------- */
  const PARTS = {
    skin: ["#ffdbb4", "#f1c27d", "#e0ac69", "#c68642", "#8d5524", "#5c3a21"],
    hair: ["Calvo", "Corto", "Puntas", "Largo", "Afro", "Coletas", "Moño", "Cresta"],
    hairColor: ["#2b2b2b", "#7a4a2a", "#f2c14e", "#c0392b", "#1cb0f6", "#ff4b9b", "#a568cc", "#58cc02"],
    eyes: ["Puntos", "Felices", "Brillantes", "Guiño", "Estrellas", "Dormilones"],
    mouth: ["Sonrisa", "Carcajada", "Lengua", "Sorpresa", "Pícara"],
    acc: ["Nada", "Gafas", "Gafas de sol", "Gorra", "Corona", "Audífonos", "Moño", "Flor", "Gorro de fiesta"],
    shirt: ["#58cc02", "#1cb0f6", "#ff4b4b", "#ffc800", "#ce82ff", "#ff9600", "#ff4b9b", "#3c3c3c"],
    bg: ["#ddf4ff", "#d7ffb8", "#fff5cc", "#ffdfe0", "#f1d4ff", "#ffe8cc", "#e5e5e5", "#c9f2ff"]
  };
  const KEYS = ["skin", "hair", "hairColor", "eyes", "mouth", "acc", "shirt", "bg"];
  const parseC = (v) => { const n = String(v).slice(2).split(".").map(Number); const o = {}; KEYS.forEach((k, i) => { const max = PARTS[k].length; o[k] = Number.isInteger(n[i]) && n[i] >= 0 && n[i] < max ? n[i] : 0; }); return o; };
  const encodeC = (o) => "c:" + KEYS.map((k) => o[k] || 0).join(".");
  const randomC = () => { const o = {}; KEYS.forEach((k) => { o[k] = Math.floor(Math.random() * PARTS[k].length); }); if (o.acc && Math.random() < 0.3) o.acc = 0; return encodeC(o); };
  function custom(o) {
    const sk = PARTS.skin[o.skin], hc = PARTS.hairColor[o.hairColor], h = o.hair, ink = "#3c3c3c";
    const back = { 3: `<path d="M14 30 Q13 11 32 11 Q51 11 50 30 V54 H42 V34 H22 V54 H14Z" fill="${hc}"/>`, 4: `<circle cx="32" cy="24" r="20" fill="${hc}"/><circle cx="15" cy="32" r="7" fill="${hc}"/><circle cx="49" cy="32" r="7" fill="${hc}"/>`, 5: `<circle cx="11" cy="31" r="6.5" fill="${hc}"/><circle cx="53" cy="31" r="6.5" fill="${hc}"/><circle cx="16" cy="30" r="2" fill="#ff4b9b"/><circle cx="48" cy="30" r="2" fill="#ff4b9b"/>`, 6: `<circle cx="32" cy="9" r="7.5" fill="${hc}"/>` }[h] || "";
    const front = { 1: `<path d="M17 28 Q16 12 32 12 Q48 12 47 28 Q42 18 32 19 Q22 18 17 28Z" fill="${hc}"/>`, 2: `<path d="M17 27 L18 15 L23 18 L26 9 L30 16 L34 8 L37 16 L42 10 L43 18 L47 16 L47 27 Q40 19 32 20 Q24 19 17 27Z" fill="${hc}"/>`, 3: `<path d="M17 29 Q16 12 32 12 Q48 12 47 29 Q44 19 36 18 Q30 24 18 29Z" fill="${hc}"/>`, 4: `<path d="M17 26 Q18 12 32 12 Q46 12 47 26 Q40 20 32 20 Q24 20 17 26Z" fill="${hc}"/>`, 5: `<path d="M17 27 Q16 12 32 12 Q48 12 47 27 Q40 20 32 21 Q24 20 17 27Z" fill="${hc}"/><path d="M32 12 V20" stroke="${sk}" stroke-width="1.5"/>`, 6: `<path d="M17 27 Q16 13 32 13 Q48 13 47 27 Q40 20 32 21 Q24 20 17 27Z" fill="${hc}"/>`, 7: `<path d="M28 5 Q32 2 36 5 L36 21 L28 21Z" fill="${hc}"/>` }[h] || "";
    const ex = [26, 38], ey = 30;
    const eyes = [
      ex.map((x) => `<circle cx="${x}" cy="${ey}" r="2.6" fill="${ink}"/><circle cx="${x + .9}" cy="${ey - 1}" r=".8" fill="#fff"/>`).join(""),
      ex.map((x) => `<path d="M${x - 3} ${ey + 1} Q${x} ${ey - 3} ${x + 3} ${ey + 1}" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`).join(""),
      ex.map((x) => `<circle cx="${x}" cy="${ey}" r="4.4" fill="#fff"/><circle cx="${x + .6}" cy="${ey + .5}" r="2.7" fill="${ink}"/><circle cx="${x + 1.6}" cy="${ey - .8}" r="1" fill="#fff"/>`).join(""),
      `<circle cx="26" cy="${ey}" r="2.6" fill="${ink}"/><path d="M35 ${ey} Q38 ${ey - 3} 41 ${ey}" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
      ex.map((x) => `<path d="M${x} ${ey - 4} l1.2 2.6 2.8.4 -2 1.9.5 2.8 -2.5 -1.3 -2.5 1.3.5 -2.8 -2 -1.9 2.8 -.4z" fill="#ffc800" stroke="#e5a000" stroke-width=".6"/>`).join(""),
      ex.map((x) => `<path d="M${x - 3} ${ey} H${x + 3}" stroke="${ink}" stroke-width="2.2" stroke-linecap="round"/>`).join("")
    ][o.eyes];
    const mouth = [
      `<path d="M27.5 38 Q32 42 36.5 38" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
      `<path d="M26.5 37 Q32 45.5 37.5 37Z" fill="#8b2b2b"/><path d="M28 37.5 H36 V39 H28Z" fill="#fff"/>`,
      `<path d="M27.5 37.5 Q32 41.5 36.5 37.5" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/><ellipse cx="33.5" cy="41" rx="2.6" ry="2.2" fill="#ff8fa3"/>`,
      `<ellipse cx="32" cy="39" rx="2.6" ry="3.2" fill="#8b2b2b"/>`,
      `<path d="M28 39.5 Q33 41.5 37 37" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`
    ][o.mouth];
    const acc = [
      "",
      ex.map((x) => `<circle cx="${x}" cy="${ey}" r="5.2" fill="none" stroke="${ink}" stroke-width="1.8"/>`).join("") + `<path d="M31.2 ${ey} h1.6" stroke="${ink}" stroke-width="1.8"/>`,
      ex.map((x) => `<rect x="${x - 5.5}" y="${ey - 3.5}" width="11" height="7.5" rx="3" fill="#2b2b2b"/>`).join("") + `<path d="M31 ${ey - 1} h2" stroke="#2b2b2b" stroke-width="2"/><path d="M22 28 l3 -1" stroke="#fff" stroke-width="1.2" opacity=".6"/>`,
      `<path d="M15.5 24 Q16 9 32 9 Q48 9 48.5 24Z" fill="#ff4b4b"/><path d="M32 21 H55 Q55 25.5 49 25.5 H32Z" fill="#ea2b2b"/><circle cx="32" cy="9.5" r="2" fill="#ffc800"/>`,
      `<path d="M19 15 L21 4 L26.5 10 L32 2 L37.5 10 L43 4 L45 15Z" fill="#ffc800" stroke="#e5a000" stroke-width="1"/><circle cx="32" cy="10.5" r="1.8" fill="#ff4b4b"/>`,
      `<path d="M14.5 30 Q14.5 9 32 9 Q49.5 9 49.5 30" stroke="${ink}" stroke-width="3.5" fill="none"/><rect x="10.5" y="25" width="7" height="12" rx="3.5" fill="#1cb0f6"/><rect x="46.5" y="25" width="7" height="12" rx="3.5" fill="#1cb0f6"/>`,
      `<path d="M38 13 L46 8 L46 18Z M38 13 L30 8 L30 18Z" fill="#ff4b9b"/><circle cx="38" cy="13" r="2.4" fill="#d93d82"/>`,
      `<g transform="translate(45 14)"><circle cx="0" cy="-4" r="3.2" fill="#ff8fa3"/><circle cx="4" cy="0" r="3.2" fill="#ff8fa3"/><circle cx="0" cy="4" r="3.2" fill="#ff8fa3"/><circle cx="-4" cy="0" r="3.2" fill="#ff8fa3"/><circle r="2.6" fill="#ffc800"/></g>`,
      `<path d="M23 15 L32 -2 L41 15Z" fill="#ce82ff"/><path d="M26 9 L38 9 M24.5 12 L39.5 12" stroke="#ffc800" stroke-width="1.6"/><circle cx="32" cy="-1" r="2.6" fill="#ffc800"/>`
    ][o.acc];
    return `<circle cx="32" cy="32" r="32" fill="${PARTS.bg[o.bg]}"/>${back}
      <path d="M9 66 Q11 46 32 46 Q53 46 55 66Z" fill="${PARTS.shirt[o.shirt]}"/><path d="M26 46 Q32 52 38 46" fill="${sk}"/>
      <rect x="28" y="40" width="8" height="8" fill="${sk}"/><circle cx="16.5" cy="31" r="3.6" fill="${sk}"/><circle cx="47.5" cy="31" r="3.6" fill="${sk}"/>
      <ellipse cx="32" cy="30" rx="15.5" ry="16" fill="${sk}"/>${front}
      <circle cx="21" cy="36" r="2.8" fill="#ff8fa3" opacity=".5"/><circle cx="43" cy="36" r="2.8" fill="#ff8fa3" opacity=".5"/>${eyes}${mouth}${acc}`;
  }

  const KID_AVATARS = ["fox", "panda", "lion", "frog", "cat", "bunny", "bear", "owl", "penguin", "dino", "unicorn", "octopus"];
  const ADULT_AVATARS = ["mom", "dad", "grandma", "grandpa", "adult", "hero"];
  const FROM_EMOJI = { "🦊": "fox", "🐼": "panda", "🦁": "lion", "🐸": "frog", "🦄": "unicorn", "🐙": "octopus", "🐯": "cat", "🐨": "bear", "🦖": "dino", "🐧": "penguin", "🚀": "owl", "🧑‍🚀": "bunny", "🙂": "bunny", "👩": "mom", "👨": "dad", "👵": "grandma", "👴": "grandpa", "🧑": "adult", "🦸": "hero" };
  const avatarId = (v) => (AV[v] ? v : FROM_EMOJI[v] || null);
  let clipN = 0;
  const avatar = (v) => { if (typeof v === "string" && v.startsWith("c:")) { const id = "avc" + (++clipN); return `<svg class="avi" viewBox="0 0 64 64" role="img" aria-label="Avatar"><defs><clipPath id="${id}"><circle cx="32" cy="32" r="32"/></clipPath></defs><g clip-path="url(#${id})">${custom(parseC(v))}</g></svg>`; } const id = avatarId(v); return id ? `<svg class="avi" viewBox="0 0 64 64" role="img" aria-label="Avatar">${AV[id]}</svg>` : `<span class="avi">${v || ""}</span>`; };

  window.ART = { nova, world, unit, trophy, NAMES, icon, avatar, avatarId, KID_AVATARS, ADULT_AVATARS, PARTS, AVKEYS: KEYS, parseC, encodeC, randomC };
})();
