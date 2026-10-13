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

  window.ART = { nova, world, unit, trophy, NAMES };
})();
