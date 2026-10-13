/* Lecciones completas: Tecnología */
window.CURRICULUM_LESSONS = window.CURRICULUM_LESSONS || {};
Object.assign(window.CURRICULUM_LESSONS, {
  /* ===== Preescolar ===== */
  "t0a": {
    hook: "Mira a tu alrededor: ¿quién hizo la silla en la que te sientas? ¿Y quién hizo el árbol del parque? 🌳",
    steps: [
      { title: "Lo que da la naturaleza", text: "Lo natural no lo fabrica nadie: nace o está en la naturaleza. Las piedras, los árboles, el agua y las flores son naturales.", example: "🪨 piedra · 🌸 flor · 🐚 concha" },
      { title: "Lo que hacen las personas", text: "Lo artificial lo fabrican las personas con sus manos o con máquinas. Una silla, un lápiz y un juguete son artificiales.", example: "🪑 silla · ✏️ lápiz · 🧸 juguete" },
      { title: "De natural a artificial", text: "Muchas cosas artificiales se hacen con materiales naturales. La madera viene del árbol, y con ella las personas hacen una mesa.", example: "🌳 árbol → 🪵 madera → 🪑 silla" },
      { title: "Juega a clasificar", text: "Pregúntate: ¿esto lo hizo una persona? Si dices que sí, es artificial. Si nació solo en la naturaleza, es natural.", example: "🍎 manzana = natural · 🥤 vaso = artificial" }
    ],
    remember: ["Lo natural viene de la naturaleza.", "Lo artificial lo hacen las personas.", "Con cosas naturales se fabrican cosas artificiales."],
    mistake: "Pensar que la mesa de madera es natural. La madera es natural, pero la mesa la hizo una persona: es artificial.",
    fun: "¿Sabías que el papel se fabrica con madera de los árboles? Por eso reciclar papel ayuda a cuidar los bosques.",
    check: [
      ["¿Qué es natural?", "Una flor", ["Una silla", "Un lápiz"]],
      ["¿Quién hace las cosas artificiales?", "Las personas", ["Los árboles", "La lluvia"]]
    ]
  },
  "t0b": {
    hook: "El robot quiere llegar a la estrella ⭐, pero solo se mueve si tú le dices hacia dónde. ¿Lo ayudas?",
    steps: [
      { title: "Las flechas", text: "Cada flecha le dice al robot hacia dónde moverse una casilla: derecha, izquierda, arriba o abajo.", example: "→ derecha · ← izquierda · ↑ arriba · ↓ abajo" },
      { title: "Una flecha, un paso", text: "El robot avanza solo una casilla por cada flecha. Si necesitas dos pasos a la derecha, pones dos flechas.", example: "→ → = dos casillas a la derecha" },
      { title: "En orden", text: "El robot hace las flechas en orden, una después de otra. Si cambias el orden, el robot va a otro lugar.", example: "→ → ↓ llega a la estrella" },
      { title: "Prueba y mira", text: "Pon tus flechas y mira al robot moverse. Si no llega a la estrella, no pasa nada: cambias una flecha y lo intentas otra vez.", example: "¿Se pasó? Quita una flecha." }
    ],
    remember: ["Cada flecha es un paso.", "El robot sigue las flechas en orden.", "Si falla, cambias y pruebas de nuevo."],
    mistake: "Poner una sola flecha y pensar que el robot camina hasta el final. El robot solo da un paso por flecha: cuenta las casillas.",
    fun: "¿Sabías que los robots no piensan solos? Solo hacen lo que las personas les dicen con instrucciones.",
    check: [
      ["¿Cuántas casillas avanza el robot con una flecha?", "Una", ["Tres", "Ninguna"]],
      ["Para ir a la derecha dos casillas, pones…", "→ →", ["↓ ↓", "←"]]
    ]
  },
  "xtec0a": {
    hook: "¿Para qué tienes un cepillo de dientes? ¡Para lavarte los dientes! Todo objeto tiene un trabajo. 🪥",
    steps: [
      { title: "Cada objeto ayuda", text: "Los objetos que usamos tienen una función: un trabajo que nos ayudan a hacer. La cuchara nos ayuda a comer la sopa.", example: "🥄 cuchara → comer" },
      { title: "Objetos para cuidarnos", text: "Algunos objetos nos protegen. El paraguas nos cuida de la lluvia y la gorra nos cuida del sol.", example: "☂️ paraguas → no mojarnos · 🧢 gorra → sol" },
      { title: "Objetos para aprender y jugar", text: "Hay objetos para aprender y divertirnos. Con el lápiz escribimos y dibujamos; con la pelota jugamos.", example: "✏️ lápiz → escribir · ⚽ pelota → jugar" },
      { title: "Pregunta: ¿para qué sirve?", text: "Cuando veas un objeto nuevo, pregúntate para qué sirve. Así sabrás usarlo bien y cuidarlo.", example: "🔑 llave → abrir la puerta" }
    ],
    remember: ["Cada objeto tiene una función.", "La función es el trabajo que nos ayuda a hacer.", "Usamos cada objeto para lo que sirve."],
    mistake: "Usar un objeto para algo que no es, como las tijeras para jugar. Así puede romperse o lastimarnos.",
    fun: "¿Sabías que el cepillo de dientes con cerdas como el de hoy se empezó a fabricar en China hace más de 500 años?",
    check: [
      ["¿Para qué sirve el paraguas?", "Para no mojarnos", ["Para comer", "Para escribir"]],
      ["¿Qué objeto sirve para escribir?", "El lápiz", ["La cuchara", "La pelota"]]
    ]
  },
  "xtec0b": {
    hook: "La electricidad enciende la luz y la tele. ¡Es muy útil! Pero también puede hacer daño. ¿Sabes cómo cuidarte? ⚡",
    steps: [
      { title: "La electricidad ayuda", text: "La electricidad hace funcionar muchos aparatos: la luz, la nevera y la televisión. Llega por cables hasta los enchufes.", example: "💡 luz · 📺 tele · 🧊 nevera" },
      { title: "Los enchufes no se tocan", text: "Nunca metas los dedos ni objetos en un enchufe. La electricidad puede darte un golpe muy fuerte que se llama descarga.", example: "⛔ dedos en el enchufe" },
      { title: "Agua y electricidad, ¡no!", text: "El agua y la electricidad son peligrosas juntas. No toques aparatos ni enchufes con las manos mojadas.", example: "⛔ manos mojadas + enchufe" },
      { title: "Pide ayuda a un adulto", text: "Si necesitas enchufar algo o ves un cable roto, llama a un adulto. Los adultos se encargan de los cables y enchufes.", example: "✅ pedir ayuda a un adulto" }
    ],
    remember: ["No toques los enchufes.", "Nunca uses aparatos con las manos mojadas.", "Los cables y enchufes los maneja un adulto."],
    mistake: "Pensar que un cable roto no pasa nada. Un cable roto es peligroso: no lo toques y avísale a un adulto.",
    fun: "¿Sabías que los rayos de una tormenta son electricidad de la naturaleza? ⚡",
    check: [
      ["¿Quién debe manejar los enchufes?", "Un adulto", ["Un niño pequeño", "Nadie, se tocan con agua"]],
      ["¿Se puede tocar un aparato con las manos mojadas?", "No", ["Sí, siempre", "Sí, si es pequeño"]]
    ]
  },
  "xtec0c": {
    hook: "¿Quién lava la ropa en tu casa? ¡A veces lo hace una máquina! 🧺",
    steps: [
      { title: "Aparatos que limpian", text: "Algunos aparatos nos ayudan a limpiar. La lavadora lava la ropa y la aspiradora recoge el polvo del piso.", example: "🧺 lavadora · 🧹 aspiradora" },
      { title: "Aparatos que enfrían y calientan", text: "La nevera mantiene fría la comida para que no se dañe. La estufa y el horno la calientan para cocinarla.", example: "🧊 nevera enfría · 🔥 horno calienta" },
      { title: "Aparatos para divertirnos", text: "La televisión, la radio y la tableta nos entretienen con imágenes, música y cuentos.", example: "📺 televisión · 📻 radio" },
      { title: "Úsalos con cuidado", text: "Los aparatos se usan con permiso y con un adulto. Algunos se ponen muy calientes, como la plancha o el horno.", example: "⚠️ plancha caliente" }
    ],
    remember: ["Los aparatos nos ayudan en casa.", "Unos lavan, otros enfrían, calientan o entretienen.", "Los usamos con un adulto y con cuidado."],
    mistake: "Abrir el horno o tocar la plancha para ver si está caliente. ¡Te puedes quemar! Pregúntale a un adulto.",
    fun: "¿Sabías que antes de la nevera la gente guardaba la comida fría con bloques de hielo?",
    check: [
      ["¿Qué aparato enfría la comida?", "La nevera", ["El horno", "La lavadora"]],
      ["¿Qué hace la lavadora?", "Lava la ropa", ["Enfría la leche", "Pone música"]]
    ]
  },
  "xtec0d": {
    hook: "¿Qué pasa si te secas las manos antes de lavarlas? ¡No tiene sentido! El orden importa. 🧼",
    steps: [
      { title: "Las cosas tienen pasos", text: "Muchas cosas que hacemos tienen pasos. Primero hacemos uno, luego el otro, hasta terminar.", example: "Ponerse medias → luego zapatos" },
      { title: "Lavarse las manos", text: "Para lavarte las manos sigues pasos: mojas, pones jabón, frotas, enjuagas y secas.", example: "🧼 jabón → 👐 frotar → 💧 enjuagar → 🧻 secar" },
      { title: "Si cambia el orden…", text: "Si cambias el orden, la tarea sale mal. No puedes ponerte los zapatos antes que las medias.", example: "👟 y luego 🧦 = ¡no funciona!" },
      { title: "Pensar como programador", text: "Los programadores escriben pasos en orden para que las máquinas trabajen. Cuando ordenas tus rutinas, ¡piensas como ellos!", example: "1. Despertar 2. Bañarme 3. Vestirme" }
    ],
    remember: ["Muchas tareas se hacen en pasos.", "El orden de los pasos es importante.", "Ordenar pasos es pensar como programador."],
    mistake: "Saltarse un paso, como olvidar el jabón. Si falta un paso, la tarea no queda bien hecha.",
    fun: "¿Sabías que para lavarte bien las manos debes frotarlas unos 20 segundos? ¡Es lo que dura cantar dos veces «Feliz cumpleaños»!",
    check: [
      ["¿Qué va primero?", "Ponerse las medias", ["Ponerse los zapatos", "Atar los cordones"]],
      ["¿Cuál es el último paso al lavarse las manos?", "Secar", ["Poner jabón", "Mojar"]]
    ]
  },
  "xtec0e": {
    hook: "Tu peluche no necesita pilas para abrazarte, pero el televisor no prende sin electricidad. ¿Por qué? 🔌",
    steps: [
      { title: "Con electricidad", text: "Algunos aparatos necesitan electricidad para funcionar. Se conectan a un enchufe con un cable.", example: "📺 televisor · 🧊 nevera" },
      { title: "Con pilas o batería", text: "Otros aparatos llevan pilas o batería por dentro. Así funcionan sin cable, pero hay que cargarlos o cambiar las pilas.", example: "🔦 linterna · 📱 celular" },
      { title: "Sin electricidad", text: "Muchos objetos no necesitan electricidad: funcionan con tu fuerza o no se mueven solos.", example: "🧸 peluche · ✂️ tijeras · 🚲 bicicleta" },
      { title: "¿Cómo saberlo?", text: "Busca si tiene cable, enchufe, botón de encendido o un lugar para pilas. Si tiene, usa electricidad.", example: "Botón ⏻ = usa electricidad" }
    ],
    remember: ["Unos objetos usan electricidad del enchufe.", "Otros usan pilas o batería.", "Muchos objetos no usan electricidad."],
    mistake: "Pensar que todos los juguetes usan pilas. Una pelota o un peluche funcionan sin electricidad.",
    fun: "¿Sabías que la bicicleta funciona solo con la fuerza de tus piernas? ¡Tú eres su motor! 🚲",
    check: [
      ["¿Qué necesita electricidad?", "El televisor", ["El peluche", "La pelota"]],
      ["¿Qué funciona con pilas?", "La linterna", ["Las tijeras", "La cuchara"]]
    ]
  },
  "xtec0f": {
    hook: "Rojo, azul, rojo, azul… ¿qué color sigue? ¡Si lo sabes, encontraste un patrón! 🔴🔵",
    steps: [
      { title: "¿Qué es un patrón?", text: "Un patrón es algo que se repite siempre igual, una y otra vez, como en un collar de cuentas.", example: "🔴🔵🔴🔵🔴🔵" },
      { title: "Encuentra la parte que se repite", text: "Mira con atención y busca el grupito que se repite. Ese grupito es la clave del patrón.", example: "🐶🐱🐶🐱 → se repite 🐶🐱" },
      { title: "Adivina lo que sigue", text: "Cuando conoces la parte que se repite, puedes decir qué viene después.", example: "⭐🌙⭐🌙⭐ → sigue 🌙" },
      { title: "Patrones por todas partes", text: "Hay patrones en la ropa, en las canciones y en los días de la semana. ¡Búscalos a tu alrededor!", example: "Camiseta a rayas · día y noche" }
    ],
    remember: ["Un patrón se repite siempre igual.", "Busca la parte que se repite.", "Con el patrón sabes qué sigue."],
    mistake: "Mirar solo el último dibujo. Para saber qué sigue, mira todo el patrón desde el principio.",
    fun: "¿Sabías que las cebras tienen rayas y que cada cebra tiene un patrón de rayas diferente? 🦓",
    check: [
      ["🔴🔵🔴🔵🔴 ¿Qué sigue?", "🔵", ["🔴", "🟢"]],
      ["Un patrón es algo que…", "Se repite siempre igual", ["Nunca se repite", "Cambia cada vez"]]
    ]
  },
  /* ===== 1.º ===== */
  "t1a": {
    hook: "¿Podrías clavar un clavo con la mano? ¡Ay! Para eso existe el martillo. 🔨",
    steps: [
      { title: "¿Qué es una herramienta?", text: "Una herramienta es un objeto que nos ayuda a hacer un trabajo más fácil, rápido o seguro.", example: "🔨 martillo · ✂️ tijeras · 🪛 destornillador" },
      { title: "Cada una para su trabajo", text: "El martillo clava, el destornillador aprieta tornillos, la tijera corta y la pala sirve para cavar.", example: "🪛 destornillador → tornillos" },
      { title: "Herramientas en todos lados", text: "No solo hay herramientas en un taller. En la cocina, en el jardín y en el colegio también usamos herramientas.", example: "🥄 cucharón · 🧹 escoba · 📏 regla" },
      { title: "Úsalas con cuidado", text: "Algunas herramientas cortan o pesan. Úsalas despacio, con permiso, y guárdalas en su lugar al terminar.", example: "✂️ Pasa las tijeras con la punta hacia abajo" }
    ],
    remember: ["Las herramientas nos ayudan a trabajar.", "Cada herramienta tiene su trabajo.", "Las usamos con cuidado y las guardamos."],
    mistake: "Usar cualquier herramienta para todo, como un cuchillo de mesa como destornillador. Puede romperse y lastimarte.",
    fun: "¿Sabías que algunos animales usan herramientas? Los chimpancés usan palitos para sacar termitas de su nido.",
    check: [
      ["¿Qué herramienta sirve para clavar?", "El martillo", ["La tijera", "La regla"]],
      ["¿Para qué sirven las herramientas?", "Para hacer trabajos más fácil", ["Para dormir", "Para no hacer nada"]]
    ]
  },
  "t1b": {
    hook: "¿Cómo sabe el computador lo que tú quieres? ¡Tú se lo dices con sus partes! 🖥️",
    steps: [
      { title: "Partes para entrar información", text: "Con el teclado y el ratón le damos información al computador: escribimos letras y señalamos cosas.", example: "⌨️ teclado · 🖱️ ratón" },
      { title: "Partes para mostrar información", text: "La pantalla nos muestra lo que hace el computador. Los parlantes nos dejan oír sonidos y música.", example: "🖥️ pantalla · 🔊 parlantes" },
      { title: "La parte que piensa", text: "Dentro del computador está el procesador, que hace las cuentas y sigue las instrucciones. Es como su cerebro.", example: "🧠 procesador" },
      { title: "Trabajan juntas", text: "Escribes con el teclado, el procesador trabaja y la pantalla te muestra el resultado. Todas las partes trabajan en equipo.", example: "Tecleo «A» → aparece A en la pantalla" }
    ],
    remember: ["Teclado y ratón sirven para dar información.", "Pantalla y parlantes muestran información.", "El procesador es el cerebro del computador."],
    mistake: "Pensar que la pantalla es todo el computador. La pantalla solo muestra; el trabajo lo hace el procesador por dentro.",
    fun: "¿Sabías que los primeros computadores eran tan grandes que ocupaban un cuarto entero?",
    check: [
      ["¿Con qué parte escribes letras?", "El teclado", ["La pantalla", "Los parlantes"]],
      ["¿Qué parte muestra las imágenes?", "La pantalla", ["El ratón", "El teclado"]]
    ]
  },
  "t1c": {
    hook: "Si sales de casa sin saber el camino, ¡te puedes perder! El robot también necesita un plan. 🗺️",
    steps: [
      { title: "Mira el mapa", text: "Antes de mover al robot, mira dónde está y dónde está la meta. Observa todo el tablero.", example: "🤖 en la esquina · ⭐ abajo a la derecha" },
      { title: "Cuenta las casillas", text: "Cuenta cuántas casillas hay hacia la derecha y cuántas hacia abajo. Así sabes cuántas flechas necesitas.", example: "3 a la derecha y 2 abajo" },
      { title: "Escribe el plan completo", text: "Pon todas las flechas antes de ejecutar. Un plan completo es una lista de pasos de principio a fin.", example: "→ → → ↓ ↓" },
      { title: "Ejecuta y revisa", text: "Ahora deja que el robot siga el plan. Si no llega, revisa tus flechas, encuentra el error y corrígelo.", example: "Faltó una ↓ → la agrego" }
    ],
    remember: ["Primero miramos el tablero.", "Contamos las casillas antes de mover.", "Planeamos todo el camino y luego ejecutamos."],
    mistake: "Mover sin contar y adivinar. Si cuentas primero, aciertas más y gastas menos intentos.",
    fun: "¿Sabías que los robots que exploran Marte reciben un plan de movimientos desde la Tierra y luego lo ejecutan?",
    check: [
      ["¿Qué haces antes de mover al robot?", "Contar las casillas", ["Cerrar los ojos", "Poner flechas al azar"]],
      ["Si la meta está 2 casillas abajo, ¿qué flechas usas?", "↓ ↓", ["→ →", "↑ ↑"]]
    ]
  },
  "xtec1a": {
    hook: "¿Cómo sabe el doctor si tienes fiebre? ¡Usa un aparato! 🌡️",
    steps: [
      { title: "Aparatos para comunicarnos", text: "El teléfono y la computadora nos dejan hablar y escribir a personas que están lejos.", example: "📱 teléfono · 💻 computadora" },
      { title: "Aparatos para medir", text: "Algunos aparatos miden cosas: el termómetro mide la temperatura y la balanza mide cuánto pesamos.", example: "🌡️ termómetro · ⚖️ balanza" },
      { title: "Aparatos para ver", text: "Hay aparatos que nos ayudan a ver lo que no vemos solos: la lupa y el microscopio agrandan lo pequeño; el telescopio acerca lo lejano.", example: "🔬 microscopio · 🔭 telescopio" },
      { title: "Aparatos para aprender", text: "Libros digitales, tabletas y proyectores nos ayudan a aprender cosas nuevas en la escuela y en casa.", example: "📽️ proyector en el salón" }
    ],
    remember: ["Los aparatos son tecnología.", "Nos ayudan a comunicarnos, medir, ver y aprender.", "Cada aparato tiene una función especial."],
    mistake: "Confundir el microscopio con el telescopio. El microscopio ve lo muy pequeño; el telescopio ve lo muy lejano, como las estrellas.",
    fun: "¿Sabías que Galileo Galilei usó un telescopio en 1610 y descubrió cuatro lunas que giran alrededor de Júpiter?",
    check: [
      ["¿Qué aparato mide la fiebre?", "El termómetro", ["El telescopio", "La radio"]],
      ["¿Qué aparato sirve para ver cosas muy pequeñas?", "El microscopio", ["El teléfono", "La balanza"]]
    ]
  },
  "xtec1b": {
    hook: "¿Sabes cómo escribir tu nombre en el computador y dejar un espacio entre palabras? ⌨️",
    steps: [
      { title: "El ratón señala", text: "Al mover el ratón, se mueve una flechita en la pantalla llamada puntero. Con ella señalas lo que quieres.", example: "🖱️ mover → se mueve el puntero" },
      { title: "Hacer clic", text: "Hacer clic es apretar el botón del ratón una vez. Así eliges o abres algo. Doble clic es apretar dos veces rápido.", example: "Clic en el dibujo para elegirlo" },
      { title: "El teclado escribe", text: "El teclado tiene teclas con letras, números y signos. Cada tecla que aprietas aparece en la pantalla.", example: "Teclas A, B, C… 1, 2, 3…" },
      { title: "Teclas especiales", text: "La barra espaciadora deja un espacio entre palabras. Enter baja a la siguiente línea. Borrar quita lo que escribiste mal.", example: "Espacio ␣ · Enter ↵ · Borrar ⌫" },
      { title: "Mayúsculas", text: "Para escribir una letra mayúscula, mantén presionada la tecla Mayús (Shift) y aprieta la letra.", example: "Mayús + a = A" }
    ],
    remember: ["El ratón señala y hace clic.", "El teclado escribe letras y números.", "Espacio separa palabras; Enter baja de línea."],
    mistake: "Escribir todas las palabras pegadas. Recuerda apretar la barra espaciadora entre una palabra y otra.",
    fun: "¿Sabías que el ratón de computador se llama así porque el primero, inventado por Douglas Engelbart en los años 60, tenía un cable que parecía una cola?",
    check: [
      ["¿Qué tecla separa las palabras?", "La barra espaciadora", ["Enter", "Borrar"]],
      ["¿Qué tecla baja a la siguiente línea?", "Enter", ["Espacio", "Mayús"]]
    ]
  },
  "xtec1c": {
    hook: "¿Por qué las ventanas son de vidrio y no de madera? ¡Porque queremos ver hacia afuera! 🪟",
    steps: [
      { title: "Duros y blandos", text: "Algunos materiales son duros, como la madera y el metal, y sirven para cosas fuertes. Otros son blandos, como la tela y la esponja.", example: "🔩 metal duro · 🧽 esponja blanda" },
      { title: "Transparentes", text: "Los materiales transparentes dejan pasar la luz y podemos ver a través de ellos, como el vidrio.", example: "🪟 ventana de vidrio" },
      { title: "Flexibles", text: "Los materiales flexibles se doblan sin romperse, como el caucho y la tela. El caucho además rebota.", example: "🏀 pelota de caucho rebota" },
      { title: "Elegir el material", text: "Las personas eligen el material según lo que necesita el objeto. Una silla debe ser dura; una almohada, blanda.", example: "☔ paraguas de tela impermeable" }
    ],
    remember: ["Hay materiales duros, blandos, transparentes y flexibles.", "Cada objeto se hace con el material que necesita.", "El vidrio es transparente y el caucho es flexible."],
    mistake: "Pensar que cualquier material sirve para todo. Una olla de plástico se derretiría en el fuego: por eso las ollas son de metal.",
    fun: "¿Sabías que el caucho natural sale de un árbol llamado árbol del caucho, de la selva amazónica?",
    check: [
      ["¿Qué material es transparente?", "El vidrio", ["La madera", "El metal"]],
      ["¿Qué material es bueno para una pelota que rebota?", "El caucho", ["El vidrio", "La piedra"]]
    ]
  },
  "xtec1d": {
    hook: "Quieres hacer una tarjeta: cortar, dibujar y medir. ¿Qué herramienta usas para cada cosa? ✂️",
    steps: [
      { title: "Para cortar", text: "Para cortar papel usamos tijeras. Las de punta redonda son las más seguras para niños.", example: "✂️ tijeras de punta redonda" },
      { title: "Para dibujar y colorear", text: "Para dibujar usamos lápiz, y para colorear crayones, colores o marcadores.", example: "✏️ lápiz · 🖍️ crayones" },
      { title: "Para medir", text: "Para medir el largo de algo usamos la regla. Empezamos a medir desde el cero.", example: "📏 regla: la tarjeta mide 10 cm" },
      { title: "Para pegar", text: "Para unir dos papeles usamos pegante o cinta. Usa poquito pegante para que no se arrugue.", example: "🧴 pegante en barra" },
      { title: "Pregúntate qué trabajo es", text: "Antes de empezar, piensa qué trabajo vas a hacer y elige la herramienta correcta.", example: "¿Corto? → tijeras" }
    ],
    remember: ["Elegimos la herramienta según el trabajo.", "Tijeras cortan, lápiz dibuja, regla mide.", "Al medir empezamos desde el cero."],
    mistake: "Medir desde el borde de la regla en vez de desde el cero. Pon el cero justo al inicio de lo que mides.",
    fun: "¿Sabías que en el antiguo Egipto ya se usaban tijeras de metal hace más de 3000 años?",
    check: [
      ["¿Qué herramienta usas para medir?", "La regla", ["Las tijeras", "El pegante"]],
      ["¿Qué herramienta usas para cortar papel?", "Las tijeras", ["La regla", "El crayón"]]
    ]
  },
  "xtec1e": {
    hook: "¿Cómo dibujas en el computador y guardas tu dibujo para que no se pierda? ¡Paso a paso! 🖌️",
    steps: [
      { title: "Seguir instrucciones", text: "Para usar aparatos y hacer manualidades seguimos instrucciones: pasos que van en un orden.", example: "1, 2, 3… en orden" },
      { title: "Dibujar en el computador", text: "Primero enciendes el computador, luego abres el programa de dibujo, dibujas y al final guardas.", example: "Encender → abrir programa → dibujar → guardar" },
      { title: "No saltarse pasos", text: "Si te saltas un paso, algo sale mal. Si no guardas, tu dibujo se pierde al apagar el computador.", example: "Sin guardar = dibujo perdido 😢" },
      { title: "Manualidades en orden", text: "Para hacer un barco de papel también sigues pasos: doblar por la mitad, doblar las esquinas, abrir y dar forma.", example: "📄 → doblar → doblar → ⛵" }
    ],
    remember: ["Las tareas tienen pasos en orden.", "Seguimos las instrucciones una a una.", "Guardar es el último paso para no perder el trabajo."],
    mistake: "Apagar el computador sin guardar. Siempre guarda tu trabajo antes de cerrar.",
    fun: "¿Sabías que las recetas de cocina son instrucciones paso a paso, igual que los programas de computador?",
    check: [
      ["¿Qué haces antes de dibujar en el computador?", "Abrir el programa", ["Guardar", "Apagar"]],
      ["¿Qué pasa si no guardas tu dibujo?", "Se puede perder", ["Se imprime solo", "Se vuelve más bonito"]]
    ]
  },
  "xtec1f": {
    hook: "Manzana, manzana, banano… manzana, manzana, banano… ¿qué viene ahora? 🍎🍎🍌",
    steps: [
      { title: "Secuencias", text: "Una secuencia es una fila de cosas en un orden. Si el orden se repite, forma un patrón.", example: "1, 2, 1, 2, 1, 2" },
      { title: "Encuentra el núcleo", text: "El núcleo es el grupito que se repite. Encuéntralo y sabrás cómo sigue la secuencia.", example: "🍎🍎🍌 🍎🍎🍌 → núcleo: 🍎🍎🍌" },
      { title: "Predecir", text: "Si conoces el núcleo, puedes predecir lo que sigue, aunque la fila sea muy larga.", example: "🍎🍎🍌🍎🍎 → sigue 🍌" },
      { title: "Los computadores usan patrones", text: "Los computadores repiten pasos muchas veces siguiendo patrones. Así dibujan figuras, ponen música o mueven personajes.", example: "Avanzar, girar, avanzar, girar = cuadrado" }
    ],
    remember: ["Una secuencia es una fila en orden.", "El núcleo es la parte que se repite.", "Con el patrón puedes predecir."],
    mistake: "Pensar que el núcleo tiene siempre dos elementos. Puede tener tres o más: cuenta bien antes de que se repita.",
    fun: "¿Sabías que la música tiene patrones? Muchas canciones repiten el coro varias veces.",
    check: [
      ["🍎🍎🍌🍎🍎🍌🍎🍎 ¿Qué sigue?", "🍌", ["🍎", "🍇"]],
      ["La parte que se repite se llama…", "Núcleo", ["Final", "Error"]]
    ]
  },
  /* ===== 2.º ===== */
  "t2a": {
    hook: "Imagina un día sin ruedas ni luz eléctrica: ¿cómo irías al colegio? ¿Cómo leerías de noche? 💡",
    steps: [
      { title: "¿Qué es un invento?", text: "Un invento es algo nuevo que crea una persona para resolver un problema o hacer la vida más fácil.", example: "Problema: cargar cosas pesadas → invento: la rueda" },
      { title: "La rueda", text: "La rueda se inventó hace más de 5000 años, en Mesopotamia. Con ella se hicieron carretas y después bicicletas y carros.", example: "🛞 rueda → 🛒 carreta → 🚗 carro" },
      { title: "La bombilla", text: "Thomas Edison y su equipo crearon en 1879 una bombilla eléctrica que duraba muchas horas. Así las casas tuvieron luz sin fuego.", example: "🕯️ vela → 💡 bombilla" },
      { title: "La imprenta y el teléfono", text: "Johannes Gutenberg creó la imprenta hacia 1450 y los libros se hicieron más fáciles de copiar. En 1876 Alexander Graham Bell patentó el teléfono.", example: "📖 libros impresos · ☎️ teléfono" },
      { title: "Los inventos cambian la vida", text: "Gracias a los inventos viajamos más rápido, nos comunicamos con personas lejanas y aprendemos más.", example: "✈️ avión de los hermanos Wright, 1903" }
    ],
    remember: ["Un invento resuelve un problema.", "La rueda, la bombilla y la imprenta cambiaron el mundo.", "Los inventores observan, prueban y mejoran."],
    mistake: "Creer que un invento aparece de un día para otro. Los inventores prueban muchas veces y se equivocan antes de lograrlo.",
    fun: "¿Sabías que el primer vuelo de los hermanos Wright, en 1903, duró solo 12 segundos?",
    check: [
      ["¿Qué invento dio luz a las casas sin fuego?", "La bombilla", ["La rueda", "La imprenta"]],
      ["¿Quién creó la imprenta hacia 1450?", "Johannes Gutenberg", ["Thomas Edison", "Galileo Galilei"]]
    ]
  },
  "t2b": {
    hook: "Tu mesa, tu cuchara y tu botella de agua: ¿de qué están hechas? 🪵🔩🧴",
    steps: [
      { title: "La madera", text: "La madera viene de los árboles. Es fuerte, se puede cortar y lijar. Con ella se hacen muebles, lápices y puertas.", example: "🪵 mesa · ✏️ lápiz" },
      { title: "El metal", text: "Los metales, como el hierro y el aluminio, son duros y resistentes, y conducen el calor y la electricidad.", example: "🔩 tornillo · 🥄 cuchara · 🍳 olla" },
      { title: "El plástico", text: "El plástico es liviano, se puede moldear en muchas formas y no deja pasar el agua. Se fabrica sobre todo con petróleo.", example: "🧴 botella · 🪣 balde" },
      { title: "Otros materiales", text: "También usamos vidrio (transparente), tela (suave y flexible), papel y cerámica (para platos y tazas).", example: "🫙 frasco de vidrio · 👕 camiseta de tela" },
      { title: "Cada objeto, su material", text: "Se elige el material según lo que necesita el objeto: resistencia, peso, si debe ser transparente o aguantar el calor.", example: "Olla de metal: aguanta el fuego" }
    ],
    remember: ["Los objetos se fabrican con distintos materiales.", "Madera de árboles; plástico casi siempre del petróleo.", "El material se elige según el uso."],
    mistake: "Pensar que el plástico es natural. El plástico lo fabrican las personas; por eso es un material artificial.",
    fun: "¿Sabías que el vidrio se fabrica principalmente con arena calentada a más de 1000 °C?",
    check: [
      ["¿De dónde viene la madera?", "De los árboles", ["Del petróleo", "De la arena"]],
      ["¿Qué material es bueno para una olla que va al fuego?", "Metal", ["Plástico", "Papel"]]
    ]
  },
  "t2c": {
    hook: "¡Hay rocas en el camino! Si el robot choca, no llega a la meta. ¿Cómo lo esquivas? 🪨",
    steps: [
      { title: "Ubica los obstáculos", text: "Mira el tablero y marca dónde están las rocas. El robot no puede pasar por esas casillas.", example: "🪨 en la segunda casilla de la derecha" },
      { title: "Busca otro camino", text: "Si una roca bloquea el camino recto, rodéala: baja, avanza y vuelve a subir si hace falta.", example: "En vez de → → →, usa ↓ → → ↑ →" },
      { title: "Piensa en reglas", text: "Puedes usar una regla: SI hay roca adelante, ENTONCES gira y busca otra ruta. Así razonan los programas.", example: "SI 🪨 ENTONCES cambiar de camino" },
      { title: "Prueba y corrige", text: "Ejecuta tu plan. Si el robot choca, busca en qué flecha se equivocó y cámbiala. Corregir es parte de programar.", example: "Choca en el paso 3 → cambio esa flecha" }
    ],
    remember: ["Primero ubicamos los obstáculos.", "Si hay roca, buscamos otro camino.", "Probamos y corregimos los errores."],
    mistake: "Pensar que solo hay un camino correcto. Puede haber varios caminos para llegar a la meta; elige uno que esquive todas las rocas.",
    fun: "¿Sabías que las aspiradoras robot tienen sensores para detectar paredes y muebles y cambiar de dirección?",
    check: [
      ["Si hay una roca en el camino, ¿qué haces?", "Buscar otro camino", ["Pasar por encima", "Detener el juego"]],
      ["¿Hay un solo camino para llegar a la meta?", "No, puede haber varios", ["Sí, siempre uno solo", "No hay ninguno"]]
    ]
  },
  "xtec2a": {
    hook: "Tus abuelos escribían cartas en papel; hoy puedes mandar un mensaje en segundos. ¿Qué pasó? ✉️➡️📧",
    steps: [
      { title: "Los inventos se mejoran", text: "Las personas ven un problema en un invento y lo mejoran. Así los objetos cambian con el tiempo.", example: "Problema: la vela se apaga y da poca luz" },
      { title: "La luz", text: "Primero se usaban fogatas, después velas y lámparas de aceite, luego bombillas y hoy luces LED que gastan muy poca energía.", example: "🔥 → 🕯️ → 💡 → LED" },
      { title: "La comunicación", text: "Antes se enviaban cartas que tardaban días. Luego llegó el teléfono, y hoy el correo electrónico y los mensajes llegan en segundos.", example: "✉️ carta → ☎️ teléfono → 📧 correo" },
      { title: "La música", text: "La música se escuchaba en discos, luego en casetes y CD, y ahora en el celular por internet.", example: "💿 disco → 📼 casete → 📱 música digital" },
      { title: "Compara antes y ahora", text: "Para comparar, pregúntate: ¿qué problema tenía el invento viejo? ¿Cómo lo resolvió el nuevo?", example: "La vela se apagaba con el viento; la bombilla no" }
    ],
    remember: ["Los inventos cambian con el tiempo.", "Se mejoran para resolver problemas.", "Hoy hacemos más rápido lo que antes tomaba días."],
    mistake: "Pensar que lo antiguo era inútil. Los inventos viejos fueron la base de los nuevos; sin la carta no habría correo.",
    fun: "¿Sabías que el primer correo electrónico entre computadores conectados en red lo envió Ray Tomlinson en 1971? Fue él quien eligió el símbolo @.",
    check: [
      ["¿Qué vino después de la vela?", "La bombilla", ["La fogata", "La carta"]],
      ["¿Por qué se mejoran los inventos?", "Para resolver problemas", ["Para que sean más feos", "Porque sí, sin razón"]]
    ]
  },
  "xtec2b": {
    hook: "Un barco de vela, una bicicleta y un carro eléctrico se mueven. Pero ¿qué los empuja? ⛵🚲🔋",
    steps: [
      { title: "Por tierra", text: "Por tierra viajan bicicletas, buses, carros y trenes. Usan ruedas sobre calles o rieles.", example: "🚲 bicicleta · 🚆 tren · 🚌 bus" },
      { title: "Por agua", text: "Por agua viajan canoas, barcos y lanchas. Flotan y se mueven con remos, velas o motores.", example: "🛶 canoa · ⛵ velero · 🚢 barco" },
      { title: "Por aire", text: "Por aire viajan aviones, helicópteros y globos. Los aviones usan motores y alas para volar.", example: "✈️ avión · 🚁 helicóptero · 🎈 globo" },
      { title: "Cada uno usa una energía", text: "La bicicleta y la canoa usan la fuerza de tu cuerpo, el velero usa el viento, los carros usan gasolina o baterías.", example: "🚲 piernas · ⛵ viento · 🔋 baterías · ⛽ gasolina" },
      { title: "Transporte que cuida el planeta", text: "Caminar, ir en bici o usar transporte público contamina menos que ir solo en carro de gasolina.", example: "🚶 caminar · 🚌 bus compartido" }
    ],
    remember: ["El transporte va por tierra, agua y aire.", "Cada medio usa una energía distinta.", "Caminar y la bici no contaminan."],
    mistake: "Pensar que todos los carros usan gasolina. Hay carros eléctricos que funcionan con baterías recargables.",
    fun: "¿Sabías que la primera bicicleta, de 1817, no tenía pedales? Se empujaba con los pies en el suelo.",
    check: [
      ["¿Qué energía mueve al velero?", "El viento", ["La gasolina", "Las pilas"]],
      ["¿Cuál es un transporte por aire?", "El avión", ["El tren", "La canoa"]]
    ]
  },
  "xtec2c": {
    hook: "¿Cómo llega la electricidad de una pila hasta una bombilla para encenderla? ¡Por un camino! 🔋💡",
    steps: [
      { title: "Las partes del circuito", text: "Un circuito sencillo tiene una pila (da la energía), cables (el camino) y una bombilla (usa la energía para dar luz).", example: "🔋 pila · 〰️ cables · 💡 bombilla" },
      { title: "Un camino cerrado", text: "La electricidad viaja desde la pila por un cable hasta la bombilla, y vuelve a la pila por otro cable. El camino debe estar cerrado, sin cortes.", example: "🔋 → cable → 💡 → cable → 🔋" },
      { title: "Si se abre, se apaga", text: "Si un cable se suelta, el camino queda abierto y la electricidad no pasa. La bombilla se apaga.", example: "Cable suelto = 💡 apagada" },
      { title: "El interruptor", text: "Un interruptor abre y cierra el camino a propósito. Así prendemos y apagamos la luz de la casa.", example: "Interruptor encendido = camino cerrado" }
    ],
    remember: ["Un circuito tiene pila, cables y bombilla.", "El camino debe estar cerrado para que pase la electricidad.", "El interruptor abre y cierra el circuito."],
    mistake: "Conectar un solo cable y esperar que la bombilla prenda. Se necesitan dos conexiones para que la electricidad vaya y vuelva.",
    fun: "¿Sabías que la primera pila eléctrica la inventó Alessandro Volta en 1800? Por él decimos «voltios».",
    check: [
      ["¿Qué pasa si un cable se suelta?", "La bombilla se apaga", ["La bombilla brilla más", "La pila crece"]],
      ["¿Qué parte da la energía en el circuito?", "La pila", ["La bombilla", "El cable"]]
    ]
  },
  "xtec2d": {
    hook: "¿Sabías que una botella de plástico puede convertirse en una camiseta? Todo empieza al separar la basura. ♻️",
    steps: [
      { title: "¿Qué son los residuos?", text: "Los residuos son lo que ya no usamos y desechamos. Si los mezclamos todos, se vuelven basura difícil de aprovechar.", example: "Cáscaras, botellas, cajas, frascos" },
      { title: "Separar por material", text: "Separamos en grupos: papel y cartón, plástico, vidrio, metal y orgánicos (restos de comida).", example: "📦 cartón · 🧴 plástico · 🫙 vidrio · 🍌 orgánico" },
      { title: "Los colores ayudan", text: "En muchos lugares las canecas tienen colores para cada tipo de residuo. Los colores cambian según el país o la ciudad, así que lee el letrero.", example: "Lee el dibujo o el letrero de la caneca" },
      { title: "¿Qué pasa después?", text: "El material separado va a plantas de reciclaje donde lo limpian, lo trituran o lo funden para fabricar cosas nuevas. Los orgánicos pueden volverse abono.", example: "🧴 botellas → hilos → 👕 camiseta" }
    ],
    remember: ["Separamos los residuos por material.", "Lo separado se puede reciclar.", "Los restos de comida pueden volverse abono."],
    mistake: "Echar todo junto en la misma bolsa. Si el papel se moja con comida, ya no se puede reciclar.",
    fun: "¿Sabías que el vidrio se puede reciclar una y otra vez sin perder su calidad?",
    check: [
      ["¿Dónde va la cáscara de banano?", "Orgánicos", ["Vidrio", "Plástico"]],
      ["¿Por qué separamos los residuos?", "Para poder reciclarlos", ["Para tener más basura", "Para ensuciar menos canecas"]]
    ]
  },
  "xtec2e": {
    hook: "Los videos y juegos son divertidos, pero ¿qué pasa si te quedas horas frente a la pantalla? 📱",
    steps: [
      { title: "Un horario acordado", text: "Acuerda con tu familia cuánto tiempo y a qué horas usarás pantallas. Así queda tiempo para jugar, leer y dormir.", example: "✅ 30 minutos después de las tareas" },
      { title: "Buena postura", text: "Siéntate derecho, con la espalda apoyada y la pantalla a la altura de los ojos. Mantén el celular o la tableta lejos de la cara.", example: "Espalda recta · pantalla a un brazo de distancia" },
      { title: "Pausas para tus ojos", text: "Cada rato, levanta la vista y mira algo lejano por unos segundos. Parpadea y estira el cuerpo.", example: "Mira por la ventana 20 segundos 👀" },
      { title: "Nada de pantallas antes de dormir", text: "La luz de las pantallas puede quitarte el sueño. Apágalas un rato antes de ir a la cama y lee un cuento.", example: "❌ tableta en la cama · ✅ cuento de papel" },
      { title: "Más que pantallas", text: "Equilibra: juega afuera, haz deporte, dibuja y conversa con tu familia. Tu cuerpo y tu mente lo necesitan.", example: "⚽ jugar · 🎨 dibujar · 👨‍👩‍👧 conversar" }
    ],
    remember: ["Usa las pantallas con un horario acordado.", "Siéntate bien y haz pausas.", "Apaga las pantallas antes de dormir."],
    mistake: "Pensar que si el video es educativo no importa cuánto tiempo pases. Igual necesitas pausas, moverte y dormir bien.",
    fun: "¿Sabías que parpadeamos menos cuando miramos una pantalla? Por eso a veces los ojos se sienten secos y cansados.",
    check: [
      ["¿Qué es bueno hacer antes de dormir?", "Apagar las pantallas", ["Ver videos en la cama", "Jugar en la tableta"]],
      ["¿Qué ayuda a descansar los ojos?", "Mirar algo lejano un rato", ["Acercar más la pantalla", "No parpadear"]]
    ]
  },
  "xtec2f": {
    hook: "Tienes una botella vacía. ¿La botas, la reciclas o la conviertes en una maceta? ¡Hay pasos para hacerlo bien! 🪴",
    steps: [
      { title: "Reducir, reutilizar, reciclar", text: "Reducir es usar menos cosas. Reutilizar es darle otro uso a algo. Reciclar es transformar un material en uno nuevo.", example: "♻️ las 3 R" },
      { title: "Paso 1: limpiar", text: "Enjuaga los envases para quitar restos de comida o bebida. Un envase sucio puede dañar todo el material reciclado.", example: "Enjuagar el frasco de yogur 💧" },
      { title: "Paso 2: aplastar y separar", text: "Aplasta las botellas y cajas para que ocupen menos espacio. Luego ponlas en el contenedor correcto.", example: "Aplastar → contenedor ♻️" },
      { title: "Paso 3: transformar", text: "En la planta de reciclaje el material se tritura o funde y se convierte en materia prima para nuevos objetos.", example: "Latas → aluminio nuevo → latas nuevas" },
      { title: "Reutilizar en casa", text: "Antes de reciclar, piensa si puedes reutilizar: una botella puede ser maceta, alcancía o portalápices.", example: "🧴 botella → 🪴 maceta" }
    ],
    remember: ["Primero reducir, luego reutilizar y al final reciclar.", "Para reciclar: limpiar, separar y transformar.", "Los envases van limpios y aplastados."],
    mistake: "Reciclar envases con comida adentro. Primero hay que enjuagarlos para que el material sirva.",
    fun: "¿Sabías que una lata de aluminio reciclada puede volver a la tienda como lata nueva en unas pocas semanas?",
    check: [
      ["¿Cuál es el primer paso para reciclar un envase?", "Limpiarlo", ["Transformarlo", "Quemarlo"]],
      ["Usar una botella como maceta es…", "Reutilizar", ["Reducir", "Contaminar"]]
    ]
  },
  /* ===== 3.º ===== */
  "t3a": {
    hook: "Alguien que no conoces te escribe en un juego y te pregunta dónde vives. ¿Qué haces? 🔐",
    steps: [
      { title: "Tus datos personales", text: "Tus datos personales son la información que dice quién eres y dónde estás: nombre completo, dirección, teléfono, colegio y fotos.", example: "📍 dirección · 📞 teléfono · 🏫 colegio" },
      { title: "No los compartas", text: "No publiques ni envíes tus datos personales a personas que no conoces en la vida real, aunque parezcan amables.", example: "❌ «¿En qué colegio estudias?» → no respondas" },
      { title: "Contraseñas secretas", text: "Tu contraseña es como la llave de tu casa: solo la conocen tú y tu familia. No se la des a amigos.", example: "🔐 contraseña segura y secreta" },
      { title: "Pide ayuda a un adulto", text: "Si algo te da miedo, te incomoda o te parece raro, cierra la página y cuéntale a un adulto de confianza. No es tu culpa.", example: "👩 mamá · 👨‍🏫 profesor" },
      { title: "Piensa antes de hacer clic", text: "No abras enlaces ni descargues archivos de desconocidos. Pueden tener virus o engaños.", example: "«¡Ganaste un premio! Haz clic» → ❌ es un engaño" }
    ],
    remember: ["No compartas tus datos personales.", "Tu contraseña es secreta.", "Si algo te incomoda, cuéntale a un adulto."],
    mistake: "Creer que alguien es tu amigo solo porque chatean en un juego. En internet no sabes quién está del otro lado.",
    fun: "¿Sabías que cada año, en febrero, muchos países celebran el Día de Internet Segura?",
    check: [
      ["Un desconocido te pide tu dirección. ¿Qué haces?", "No la doy y le cuento a un adulto", ["Se la doy", "Le mando una foto de mi casa"]],
      ["¿Con quién compartes tu contraseña?", "Solo con mi familia", ["Con todos mis amigos", "Con quien la pida en el chat"]]
    ]
  },
  "t3b": {
    hook: "¿Cómo le explicarías a un robot que se lave las manos? ¡Tendrías que darle cada paso! 🤖🧼",
    steps: [
      { title: "¿Qué es un algoritmo?", text: "Un algoritmo es una lista de pasos ordenados para resolver un problema o hacer una tarea. Tiene un inicio y un final.", example: "Receta de cocina = algoritmo" },
      { title: "Pasos claros", text: "Cada paso debe ser claro y preciso, para que cualquiera lo pueda seguir sin adivinar.", example: "❌ «Lávate» · ✅ «Abre la llave del agua»" },
      { title: "El orden importa", text: "Si cambias el orden de los pasos, el resultado cambia o sale mal.", example: "Abrir, mojar, jabón, enjuagar, cerrar, secar" },
      { title: "Escribe tu algoritmo", text: "Escribe los pasos numerados. Ejemplo para un sándwich: 1. Tomar dos panes. 2. Poner queso en uno. 3. Tapar con el otro pan. 4. Servir.", example: "1 → 2 → 3 → 4 🥪" },
      { title: "Los computadores siguen algoritmos", text: "Los programas de computador son algoritmos escritos en un lenguaje que la máquina entiende.", example: "Un videojuego sigue miles de pasos" }
    ],
    remember: ["Un algoritmo es una lista de pasos en orden.", "Cada paso debe ser claro.", "Los programas son algoritmos para computadores."],
    mistake: "Escribir pasos muy generales como «haz el sándwich». Un algoritmo debe detallar cada acción.",
    fun: "¿Sabías que la palabra algoritmo viene del nombre de Al-Juarismi, un matemático persa que vivió hace unos 1200 años?",
    check: [
      ["¿Qué es un algoritmo?", "Una lista de pasos en orden", ["Un tipo de robot", "Un dibujo"]],
      ["¿Qué pasa si cambias el orden de los pasos?", "El resultado puede salir mal", ["Siempre sale igual", "Sale mejor"]]
    ]
  },
  "t3c": {
    hook: "La misión del robot tiene rocas, agua y una llave que recoger. ¿Cómo planeas un programa tan largo? 🗝️",
    steps: [
      { title: "Planea", text: "Mira el tablero completo, marca los obstáculos y decide el orden de las metas: primero la llave, después la puerta.", example: "🤖 → 🗝️ → 🚪" },
      { title: "Divide la misión", text: "Parte el programa largo en tramos cortos. Es más fácil pensar en «llegar a la llave» y luego «llegar a la puerta».", example: "Tramo 1: → → ↓ · Tramo 2: → ↓ ↓" },
      { title: "Ejecuta", text: "Corre el programa y observa con atención cada movimiento del robot.", example: "▶️ ejecutar y mirar" },
      { title: "Depura", text: "Si el robot falla, encuentra el paso exacto donde se equivocó y corrígelo. A eso se le llama depurar.", example: "Choca en el paso 5 → cambio la flecha 5" }
    ],
    remember: ["Planea, ejecuta y corrige.", "Divide los programas largos en partes.", "Depurar es encontrar y corregir errores."],
    mistake: "Borrar todo el programa cuando falla. Normalmente solo hay que corregir un paso: busca exactamente dónde falló.",
    fun: "¿Sabías que en 1947 se encontró una polilla atrapada en un computador llamado Harvard Mark II? La pegaron en el cuaderno como el primer «bug» (bicho) encontrado.",
    check: [
      ["¿Qué significa depurar?", "Encontrar y corregir errores", ["Borrar todo", "Apagar el robot"]],
      ["¿Qué ayuda con un programa muy largo?", "Dividirlo en partes", ["Hacerlo sin mirar", "Ponerle más rocas"]]
    ]
  },
  "xtec3a": {
    hook: "Seguiste una receta y el pastel salió salado. ¿Dónde estuvo el error? 🎂",
    steps: [
      { title: "Algoritmo = pasos ordenados", text: "Un algoritmo es una lista de pasos ordenados para lograr algo. Una receta es un algoritmo de cocina.", example: "1. Mezclar 2. Hornear 3. Decorar" },
      { title: "Los errores se llaman bugs", text: "Cuando un algoritmo o un programa no hace lo que esperamos, tiene un error. En programación se le dice bug (bicho, en inglés).", example: "Puse sal en vez de azúcar = bug" },
      { title: "Tipos de errores", text: "Un paso puede estar en el orden equivocado, faltar o estar mal escrito.", example: "Hornear antes de mezclar = orden equivocado" },
      { title: "Depurar paso a paso", text: "Para depurar, revisa el algoritmo paso por paso, compara lo que pasó con lo que debía pasar y encuentra dónde cambia.", example: "Paso 1 ✅ Paso 2 ✅ Paso 3 ❌ → aquí está el error" },
      { title: "Corrige y prueba de nuevo", text: "Cambia el paso que falla y vuelve a probar. Si funciona, ¡lo depuraste! Si no, repite.", example: "Cambio sal por azúcar → 🎂 rico" }
    ],
    remember: ["Un algoritmo es una lista de pasos ordenados.", "Un bug es un error.", "Depurar es encontrar y corregir el error."],
    mistake: "Pensar que equivocarse es malo. Todos los programadores encuentran errores; lo importante es saber buscarlos y corregirlos.",
    fun: "¿Sabías que Grace Hopper, una pionera de la programación, ayudó a popularizar la palabra «bug» para los errores de los computadores?",
    check: [
      ["¿Cómo se le dice a un error en un programa?", "Bug", ["Mouse", "Wifi"]],
      ["¿Qué es depurar?", "Buscar y corregir errores", ["Escribir más rápido", "Borrar el computador"]]
    ]
  },
  "xtec3b": {
    hook: "¿Copias un texto con el ratón, menú y clics? ¡Hay un truco con dos teclas que lo hace en un segundo! ⚡",
    steps: [
      { title: "¿Qué es un atajo?", text: "Un atajo de teclado es una combinación de teclas que hace una acción rápida. Mantienes apretada una tecla y aprietas otra.", example: "Ctrl + C" },
      { title: "Copiar y pegar", text: "Primero seleccionas el texto. Con Ctrl + C lo copias y con Ctrl + V lo pegas donde quieras.", example: "Ctrl + C copiar · Ctrl + V pegar" },
      { title: "Cortar y deshacer", text: "Ctrl + X corta: quita el texto para pegarlo en otro lugar. Ctrl + Z deshace el último cambio si te equivocaste.", example: "Ctrl + X cortar · Ctrl + Z deshacer" },
      { title: "Guardar y seleccionar todo", text: "Ctrl + S guarda tu trabajo y Ctrl + A selecciona todo el texto de la página.", example: "Ctrl + S guardar · Ctrl + A todo" },
      { title: "En otros equipos", text: "En los computadores Mac se usa la tecla Comando (⌘) en lugar de Ctrl. Las letras son las mismas.", example: "⌘ + C copiar en Mac" }
    ],
    remember: ["Un atajo combina teclas para trabajar rápido.", "Ctrl + C copia, Ctrl + V pega, Ctrl + Z deshace.", "En Mac se usa ⌘ en vez de Ctrl."],
    mistake: "Apretar Ctrl + C sin seleccionar el texto primero. Si no seleccionas nada, no se copia nada.",
    fun: "¿Sabías que copiar, cortar y pegar con atajos fue popularizado por Larry Tesler, un científico de la computación que trabajó en Xerox y Apple?",
    check: [
      ["¿Qué atajo sirve para pegar?", "Ctrl + V", ["Ctrl + Z", "Ctrl + S"]],
      ["¿Qué hace Ctrl + Z?", "Deshacer", ["Guardar", "Copiar"]]
    ]
  },
  "xtec3c": {
    hook: "Si guardas tus juguetes en cajas con nombre, los encuentras rápido. ¡En el computador pasa igual! 📁",
    steps: [
      { title: "Archivos", text: "Un archivo es un trabajo guardado: un texto, un dibujo, una foto o una canción. Cada archivo tiene un nombre.", example: "📄 plantas.txt · 🖼️ dibujo.png" },
      { title: "Carpetas", text: "Una carpeta es como una caja donde guardamos archivos. Dentro de una carpeta puede haber otras carpetas.", example: "📁 Colegio → 📁 Ciencias" },
      { title: "Nombres claros", text: "Ponles nombres que digan qué hay adentro. «tarea_plantas» es mejor que «archivo1».", example: "✅ tarea_plantas · ❌ asdfg" },
      { title: "Ordena por temas", text: "Crea una carpeta por materia o tema. Así encuentras todo fácil.", example: "📁 Colegio → 📁 Ciencias → 📄 plantas.txt" },
      { title: "La extensión", text: "Al final del nombre suele haber un punto y unas letras que dicen el tipo de archivo. Se llama extensión.", example: ".txt texto · .png imagen · .mp3 sonido" }
    ],
    remember: ["Los archivos guardan nuestro trabajo.", "Las carpetas organizan los archivos.", "Usamos nombres claros."],
    mistake: "Guardar todo en el escritorio con nombres como «nuevo» o «sin título». Después no encuentras nada.",
    fun: "¿Sabías que el dibujo de un disquete 💾 todavía se usa como botón de «guardar», aunque casi nadie usa disquetes hoy?",
    check: [
      ["¿Dónde organizamos los archivos?", "En carpetas", ["En la pantalla apagada", "En el ratón"]],
      ["¿Qué nombre de archivo es más claro?", "tarea_plantas", ["archivo1", "zzzz"]]
    ]
  },
  "xtec3d": {
    hook: "¿Cómo puedes ver una página creada en otro país en solo un segundo? ¡Gracias a internet! 🌐",
    steps: [
      { title: "¿Qué es internet?", text: "Internet es una red gigante que conecta millones de computadores y celulares de todo el mundo para compartir información.", example: "🌍 red mundial" },
      { title: "Cómo te conectas", text: "Te conectas por wifi (sin cables), por cable o por datos del celular. El router de la casa reparte la conexión.", example: "📶 wifi · 📡 router" },
      { title: "El navegador", text: "El navegador es el programa que usamos para ver páginas web. Escribes la dirección o buscas lo que quieres.", example: "🧭 navegador → www.ejemplo.com" },
      { title: "Los enlaces", text: "Un enlace es un texto o botón que, al hacer clic, te lleva a otra página. A veces el puntero se vuelve una manito 👆.", example: "🔗 enlace → otra página" },
      { title: "Navega con un adulto", text: "Usa internet con un adulto cerca y en páginas adecuadas para niños. Si algo te incomoda, avisa.", example: "✅ adulto cerca · ✅ páginas para niños" }
    ],
    remember: ["Internet conecta computadores de todo el mundo.", "El navegador sirve para ver páginas.", "Navegamos con un adulto cerca."],
    mistake: "Pensar que internet y wifi son lo mismo. El wifi es solo una forma de conectarse a internet sin cables.",
    fun: "¿Sabías que la Web fue inventada por Tim Berners-Lee en 1989, mientras trabajaba en el CERN, en Suiza?",
    check: [
      ["¿Qué programa usamos para ver páginas web?", "El navegador", ["La calculadora", "El reproductor de música"]],
      ["¿Qué es un enlace?", "Algo que te lleva a otra página", ["Un tipo de cable", "Una contraseña"]]
    ]
  },
  "xtec3e": {
    hook: "¿Qué es más fácil de adivinar: «123456» o «Sol#Pan9Rio»? ¡Los ladrones de cuentas lo saben! 🔐",
    steps: [
      { title: "¿Para qué sirve?", text: "Una contraseña protege tus cuentas, como una llave protege tu casa. Solo quien la sabe puede entrar.", example: "🔑 llave = 🔐 contraseña" },
      { title: "Que sea larga", text: "Mientras más larga, más difícil de adivinar. Usa al menos 12 caracteres si puedes.", example: "✅ Sol#Pan9Rio (11) · ❌ gato (4)" },
      { title: "Que mezcle", text: "Combina mayúsculas, minúsculas, números y símbolos. Un truco: une tres palabras raras y agrégales números y símbolos.", example: "Luna + Tren + Mango → Luna7Tren!Mango" },
      { title: "Lo que NO debes usar", text: "No uses tu nombre, tu fecha de cumpleaños, el nombre de tu mascota ni secuencias como 123456 o qwerty.", example: "❌ Sofia2015 · ❌ 123456" },
      { title: "Nunca se comparte", text: "No le des tu contraseña a amigos. Solo tus papás o cuidadores pueden conocerla. Si crees que alguien la sabe, cámbiala.", example: "🤫 contraseña secreta" }
    ],
    remember: ["Una contraseña fuerte es larga.", "Mezcla mayúsculas, minúsculas, números y símbolos.", "Nunca la compartas con amigos."],
    mistake: "Usar la misma contraseña para todo. Si alguien la descubre, puede entrar a todas tus cuentas.",
    fun: "¿Sabías que «123456» aparece año tras año en las listas de contraseñas más usadas del mundo? ¡Y se adivina en menos de un segundo!",
    check: [
      ["¿Cuál contraseña es más fuerte?", "Luna7Tren!Mango", ["123456", "Sofia2015"]],
      ["¿Con quién compartes tu contraseña?", "Solo con mis papás o cuidadores", ["Con mi mejor amigo", "Con todos en el chat"]]
    ]
  },
  "xtec3f": {
    hook: "Un televisor prendido sin nadie mirándolo gasta energía y dinero. ¿Cómo podemos ahorrar? 💡",
    steps: [
      { title: "¿De dónde viene la energía?", text: "La electricidad de la casa se produce en centrales: con agua (hidroeléctricas), sol, viento o quemando combustibles que contaminan.", example: "💧 agua · ☀️ sol · 🌬️ viento" },
      { title: "Apagar lo que no usas", text: "Apaga las luces al salir de un cuarto y el televisor o la consola cuando nadie los usa.", example: "🌱 apagar luces · 💸 TV prendida sin nadie" },
      { title: "Desconectar cargadores", text: "Muchos aparatos siguen gastando un poco de energía cuando están enchufados aunque estén apagados. Desconecta cargadores que no estés usando.", example: "🔌 desconectar el cargador" },
      { title: "Usar la luz del sol", text: "De día, abre las cortinas y aprovecha la luz natural en vez de prender bombillas.", example: "☀️ cortinas abiertas" },
      { title: "Bombillas LED y nevera cerrada", text: "Las bombillas LED gastan mucha menos energía que las antiguas. Y no dejes la nevera abierta mucho tiempo.", example: "LED ✅ · 🧊 cerrar la nevera rápido" }
    ],
    remember: ["Ahorrar energía cuida el planeta y el dinero.", "Apaga y desconecta lo que no uses.", "Aprovecha la luz del sol."],
    mistake: "Pensar que un aparato apagado pero enchufado no gasta nada. Muchos siguen consumiendo un poco: desenchúfalos.",
    fun: "¿Sabías que una bombilla LED puede gastar hasta un 80 % menos de energía que una bombilla incandescente antigua?",
    check: [
      ["¿Qué ayuda a ahorrar energía?", "Apagar las luces al salir", ["Dejar la TV prendida", "Abrir la nevera seguido"]],
      ["¿Qué bombillas gastan menos energía?", "Las LED", ["Las incandescentes antiguas", "Todas gastan igual"]]
    ]
  },
  "xtec3g": {
    hook: "Las historias también enseñan tecnología. ¿Puedes encontrar en un cuento qué hizo bien el personaje? 📖",
    steps: [
      { title: "Lee con un propósito", text: "Antes de leer, mira el título y pregúntate: ¿de qué tratará? ¿Qué puedo aprender sobre usar la tecnología con cuidado?", example: "Título: «Tomás y la contraseña secreta»" },
      { title: "Busca los detalles", text: "Fíjate en lo que hacen los personajes: ¿comparten datos?, ¿piden ayuda?, ¿cómo programan al robot?", example: "Tomás no dio su contraseña a un desconocido" },
      { title: "Identifica el problema y la solución", text: "Casi todas las historias tienen un problema y una solución. Encuéntralos y piensa si la solución fue segura.", example: "Problema: mensaje raro · Solución: contarle a su mamá" },
      { title: "Relaciona con tu vida", text: "Piensa qué harías tú en la misma situación. Así la lectura se convierte en una regla que puedes usar.", example: "Yo también le contaría a un adulto" }
    ],
    remember: ["Lee con atención y busca los detalles.", "Identifica el problema y la solución.", "Relaciona la historia con tus reglas de seguridad."],
    mistake: "Responder sin volver al texto. Si dudas, regresa a la lectura y busca la frase que da la respuesta.",
    fun: "¿Sabías que la palabra robot apareció por primera vez en una obra de teatro, R.U.R., del escritor checo Karel Čapek, en 1920?",
    check: [
      ["Si dudas de una respuesta sobre la lectura, ¿qué haces?", "Vuelvo a buscar en el texto", ["Invento una respuesta", "Dejo la pregunta"]],
      ["En la historia, alguien pide su contraseña. ¿Qué es lo seguro?", "No darla y avisar a un adulto", ["Darla rápido", "Publicarla en el chat"]]
    ]
  },
  /* ===== 4.º ===== */
  "t4a": {
    hook: "¿Cómo levantaron los antiguos piedras enormes sin grúas ni motores? ¡Con máquinas simples! ⚙️",
    steps: [
      { title: "¿Qué es una máquina simple?", text: "Una máquina simple es un objeto con pocas o ninguna pieza móvil que nos ayuda a hacer fuerza o a cambiar su dirección. Hace el trabajo más fácil.", example: "Palanca, polea, rueda y eje, plano inclinado, cuña" },
      { title: "La palanca", text: "Es una barra que gira sobre un punto de apoyo. Si empujas lejos del apoyo, levantas más peso con menos fuerza.", example: "⚖️ subibaja · tijeras · destapador" },
      { title: "La polea", text: "Es una rueda con una cuerda. Cambia la dirección de la fuerza: tiras hacia abajo y la carga sube.", example: "🪣 balde en un pozo · bandera en su asta" },
      { title: "Rueda y eje", text: "Una rueda unida a una barra (eje) que giran juntos. Facilita mover cosas y girar objetos.", example: "🛞 carretilla · perilla de la puerta" },
      { title: "Plano inclinado y cuña", text: "El plano inclinado es una rampa: subes un peso con menos fuerza pero recorres más distancia. La cuña son dos planos inclinados juntos que sirven para cortar o separar.", example: "♿ rampa · 🪓 hacha (cuña)" }
    ],
    remember: ["Hay cinco máquinas simples clásicas en esta lección: palanca, polea, rueda y eje, plano inclinado y cuña.", "Facilitan el trabajo reduciendo o cambiando la dirección de la fuerza.", "Las encontramos en objetos de todos los días."],
    mistake: "Pensar que la rampa hace desaparecer el esfuerzo. Necesitas menos fuerza, pero recorres un camino más largo.",
    fun: "¿Sabías que Arquímedes, hace más de 2200 años, dijo: «Denme un punto de apoyo y moveré el mundo», hablando de la palanca?",
    check: [
      ["¿Qué máquina simple es un subibaja?", "Palanca", ["Polea", "Cuña"]],
      ["Una rampa es un…", "Plano inclinado", ["Rueda y eje", "Polea"]],
      ["¿Qué máquina simple usa una rueda con cuerda para subir cargas?", "Polea", ["Cuña", "Plano inclinado"]]
    ]
  },
  "t4b": {
    hook: "Cuando prendes una linterna, la energía de la pila se convierte en luz. ¿A dónde se va la energía? 🔦",
    steps: [
      { title: "La energía se transforma", text: "La energía no desaparece: cambia de una forma a otra. Los artefactos son máquinas que transforman la energía para darnos lo que necesitamos.", example: "⚡ eléctrica → 💡 luz" },
      { title: "Formas de energía", text: "Hay energía eléctrica, luminosa (luz), térmica (calor), sonora (sonido), de movimiento y química (guardada en pilas o alimentos).", example: "🔋 química · 🔥 térmica · 🔊 sonora" },
      { title: "Ejemplos en casa", text: "La bombilla transforma electricidad en luz; la plancha, en calor; el parlante, en sonido; el ventilador, en movimiento.", example: "Ventilador: ⚡ → 🌀 movimiento" },
      { title: "Siempre se escapa algo de calor", text: "Al transformarse, parte de la energía se vuelve calor que no usamos. Por eso un cargador o una bombilla vieja se calientan.", example: "Bombilla antigua: mucha energía se vuelve calor" },
      { title: "Artefactos más eficientes", text: "Un artefacto eficiente aprovecha mejor la energía y desperdicia menos. Por eso las bombillas LED ahorran tanto.", example: "LED: más luz, menos calor" }
    ],
    remember: ["Los artefactos transforman la energía.", "La energía cambia de forma, no desaparece.", "Un artefacto eficiente desperdicia menos energía."],
    mistake: "Creer que la pila «fabrica» electricidad de la nada. La pila guarda energía química y la transforma en eléctrica hasta que se agota.",
    fun: "¿Sabías que el cuerpo humano también transforma energía? Convierte la energía química de los alimentos en movimiento y calor.",
    check: [
      ["¿En qué transforma la electricidad una plancha?", "En calor", ["En sonido", "En agua"]],
      ["¿Qué tipo de energía guarda una pila?", "Química", ["Sonora", "Luminosa"]]
    ]
  },
  "t4c": {
    hook: "Un laberinto enorme parece imposible… hasta que lo partes en trozos pequeños. 🧩",
    steps: [
      { title: "Observa todo el laberinto", text: "Identifica el inicio, la meta, los muros y los caminos sin salida antes de escribir una sola instrucción.", example: "🤖 inicio · ⭐ meta · 🧱 muros" },
      { title: "Divide el camino en partes", text: "Marca puntos intermedios (como esquinas) y resuelve el camino de un punto al siguiente. Es la estrategia de dividir y vencer.", example: "Inicio → esquina A → esquina B → meta" },
      { title: "Usa repeticiones", text: "Si un movimiento se repite muchas veces, usa un bucle: en vez de → → → → → escribes REPETIR 5: avanzar.", example: "REPETIR 5 [ → ]" },
      { title: "Prueba por tramos", text: "Ejecuta cada parte por separado y revisa que funcione. Así, si algo falla, sabes en qué tramo está el error.", example: "Tramo 1 ✅ · Tramo 2 ❌ → reviso el tramo 2" },
      { title: "Busca el camino corto", text: "Cuando funcione, mira si hay un camino con menos pasos. Un programa más corto es más fácil de leer y corregir.", example: "14 pasos → 10 pasos" }
    ],
    remember: ["Divide el camino largo en partes.", "Usa bucles para los movimientos repetidos.", "Prueba cada tramo y corrige."],
    mistake: "Escribir todo el programa de una vez sin probar. Si falla, cuesta mucho encontrar el error; prueba por partes.",
    fun: "¿Sabías que una regla famosa para salir de muchos laberintos es poner una mano en la pared y nunca soltarla? Funciona si todas las paredes están conectadas.",
    check: [
      ["¿Qué estrategia ayuda con un laberinto largo?", "Dividirlo en partes", ["Mover al azar", "Empezar por la meta sin mirar"]],
      ["→ → → → → se puede escribir como…", "REPETIR 5 [ → ]", ["REPETIR 2 [ → ]", "SI → ENTONCES ↓"]]
    ]
  },
  "xtec4a": {
    hook: "¿Le dirías a un robot «avanza» 100 veces? ¡Hay una forma más corta! Y ¿cómo decide si llevar paraguas? ☂️",
    steps: [
      { title: "El bucle repite", text: "Un bucle (o ciclo) repite un grupo de instrucciones un número de veces o mientras algo sea cierto. Ahorra escribir lo mismo muchas veces.", example: "REPETIR 4 veces: aplaudir 👏" },
      { title: "Dibujar un cuadrado", text: "Un cuadrado tiene 4 lados iguales y 4 giros. Con un bucle: REPETIR 4: avanzar 10 pasos, girar 90°.", example: "REPETIR 4 [ avanzar 10 · girar 90° ] = ⬜" },
      { title: "El condicional decide", text: "Un condicional revisa si algo es verdadero o falso y según eso hace una cosa u otra. Se escribe SI… ENTONCES… SI NO…", example: "SI llueve ENTONCES llevar paraguas SI NO llevar gorra" },
      { title: "Verdadero o falso", text: "La condición siempre tiene respuesta de sí o no: ¿hay muro adelante?, ¿los puntos son más de 10?", example: "¿Hay muro? Sí → girar · No → avanzar" },
      { title: "Bucle + condicional", text: "Juntos son muy poderosos: el robot repite pasos y en cada uno decide qué hacer.", example: "REPETIR 10 [ SI hay muro ENTONCES girar SI NO avanzar ]" }
    ],
    remember: ["Un bucle repite instrucciones.", "Un condicional decide según si algo es verdadero o falso.", "Juntos permiten programas cortos e inteligentes."],
    mistake: "Confundir bucle con condicional. El bucle REPITE; el condicional DECIDE. Pregúntate: ¿quiero repetir o elegir?",
    fun: "¿Sabías que los semáforos funcionan con un bucle? Repiten verde, amarillo y rojo una y otra vez todo el día.",
    check: [
      ["¿Qué hace un bucle?", "Repite instrucciones", ["Decide entre dos opciones", "Apaga el programa"]],
      ["«SI llueve ENTONCES paraguas» es un…", "Condicional", ["Bucle", "Variable"]],
      ["¿Cuántas veces repites «avanzar y girar 90°» para un cuadrado?", "4", ["3", "6"]]
    ]
  },
  "xtec4b": {
    hook: "Tus fotos, juegos y canciones están guardados en el computador solo con dos números: 0 y 1. ¿Cómo es posible? 💡",
    steps: [
      { title: "Dos estados", text: "Por dentro, el computador tiene millones de diminutos interruptores que solo pueden estar encendidos (1) o apagados (0).", example: "1 = encendido 💡 · 0 = apagado ⚫" },
      { title: "El bit", text: "Cada 0 o 1 se llama bit. Con 8 bits juntos se forma un byte, que puede guardar, por ejemplo, una letra.", example: "01000001 = la letra A" },
      { title: "Contar en binario", text: "En binario solo hay 0 y 1. Cuando se acaban, se agrega una posición, igual que del 9 pasamos al 10.", example: "0, 1, 10, 11, 100 = 0, 1, 2, 3, 4" },
      { title: "El valor de cada posición", text: "Desde la derecha, las posiciones valen 1, 2, 4, 8, 16… Sumas los valores donde hay un 1.", example: "101 = 4 + 0 + 1 = 5" },
      { title: "Todo es binario", text: "Las letras, los colores de una foto y los sonidos se convierten en números, y los números en ceros y unos.", example: "🖼️ píxel → número → 0 y 1" }
    ],
    remember: ["El computador usa solo 0 y 1.", "Cada 0 o 1 es un bit; 8 bits son un byte.", "En binario, las posiciones valen 1, 2, 4, 8…"],
    mistake: "Leer «10» en binario como diez. En binario, 10 vale 2: una vez el 2 y cero veces el 1.",
    fun: "¿Sabías que el matemático Gottfried Leibniz describió el sistema binario hace más de 300 años, mucho antes de que existieran los computadores?",
    check: [
      ["¿Cuánto vale 11 en binario?", "3", ["11", "2"]],
      ["¿Cómo se llama cada 0 o 1?", "Bit", ["Byte", "Píxel"]],
      ["¿Cuánto vale 100 en binario?", "4", ["100", "8"]]
    ]
  },
  "xtec4c": {
    hook: "Buscas «dinosaurios» y aparecen millones de resultados. ¿Cómo encuentras lo que necesitas… y sabes si es verdad? 🔎",
    steps: [
      { title: "Usa palabras clave", text: "No escribas una pregunta larga: escribe las palabras más importantes de lo que buscas.", example: "❌ quiero saber qué comían los dinosaurios · ✅ alimentación dinosaurios herbívoros" },
      { title: "Sé específico", text: "Agrega palabras que precisen la búsqueda, como el lugar, la fecha o el tema exacto.", example: "volcanes Colombia · ríos de México" },
      { title: "Mira quién lo escribió", text: "Prefiere páginas de museos, universidades, organismos oficiales o enciclopedias. Desconfía de páginas sin autor ni fecha.", example: "✅ sitio de un museo · ❓ blog anónimo" },
      { title: "Compara 2 o 3 fuentes", text: "Si varias fuentes confiables dicen lo mismo, es más probable que sea cierto. Si se contradicen, investiga más.", example: "Fuente A + Fuente B + Fuente C = coinciden ✅" },
      { title: "Cuidado con los anuncios", text: "Los primeros resultados a veces son anuncios pagados. Están marcados como «Patrocinado» o «Anuncio».", example: "🏷️ Patrocinado ≠ mejor información" }
    ],
    remember: ["Busca con palabras clave.", "Revisa quién escribió la información.", "Compara 2 o 3 fuentes confiables."],
    mistake: "Creer que el primer resultado siempre es el mejor o el más verdadero. Puede ser un anuncio o una página poco confiable.",
    fun: "¿Sabías que Google procesa miles de millones de búsquedas cada día?",
    check: [
      ["¿Qué ayuda a verificar una información?", "Comparar 2 o 3 fuentes", ["Leer solo el primer resultado", "Creer todo lo que aparece"]],
      ["¿Qué fuente suele ser más confiable?", "La página de un museo", ["Un blog sin autor", "Un anuncio"]]
    ]
  },
  "xtec4d": {
    hook: "Cuando caminas en la arena dejas huellas. En internet también: cada foto, comentario y «me gusta» deja rastro. 👣",
    steps: [
      { title: "¿Qué es la huella digital?", text: "Tu huella digital es todo el rastro que dejas en internet: lo que publicas, comentas, compartes y buscas.", example: "📸 fotos · 💬 comentarios · 👍 reacciones" },
      { title: "Puede durar mucho", text: "Lo que publicas puede copiarse, reenviarse o guardarse en capturas de pantalla. Aunque lo borres, puede seguir existiendo.", example: "Borré la foto, pero alguien hizo captura 📷" },
      { title: "La regla de la abuela", text: "Antes de publicar, pregúntate: ¿me sentiría bien si mi abuela, mi profe o yo mismo en 10 años lo viera?", example: "Si dudas, no lo publiques" },
      { title: "Protege tu información", text: "No publiques tu dirección, teléfono, colegio ni dónde estás en este momento.", example: "👎 publicar tu dirección" },
      { title: "Construye una huella positiva", text: "Comparte tus logros, dibujos y comentarios amables. Tu huella puede mostrar lo mejor de ti.", example: "👍 comentario amable · 🎨 compartir un proyecto" }
    ],
    remember: ["Todo lo que publicas deja huella.", "Lo publicado puede durar mucho tiempo.", "Piensa antes de publicar y deja una huella positiva."],
    mistake: "Pensar que si borras algo desaparece por completo. Otros pueden haberlo guardado o compartido.",
    fun: "¿Sabías que existe un archivo de internet, el Internet Archive, que guarda copias de miles de millones de páginas web desde 1996?",
    check: [
      ["¿Qué deja una huella positiva?", "Un comentario amable", ["Publicar tu dirección", "Burlarte de alguien"]],
      ["Si borras una foto publicada, ¿desaparece siempre?", "No, alguien pudo guardarla", ["Sí, siempre", "Sí, en un segundo"]]
    ]
  },
  "xtec4e": {
    hook: "Cuando pedaleas, la rueda de atrás gira. ¿Cómo viaja el movimiento de tus pies hasta la rueda? 🚲",
    steps: [
      { title: "¿Qué es un mecanismo?", text: "Un mecanismo es un conjunto de piezas que transmite el movimiento de un lugar a otro o lo transforma en otro tipo de movimiento.", example: "Pedales → cadena → rueda" },
      { title: "Engranajes", text: "Son ruedas con dientes que encajan entre sí. Cuando una gira, mueve a la otra en sentido contrario.", example: "⚙️⚙️ reloj de agujas · batidora manual" },
      { title: "Poleas con correa y cadenas", text: "Una correa o una cadena une dos ruedas que están separadas para que giren juntas en el mismo sentido.", example: "🚲 cadena de bicicleta" },
      { title: "Grande y pequeño", text: "Si una rueda grande mueve a una pequeña, la pequeña gira más rápido. Así funcionan los cambios de la bicicleta.", example: "Plato grande + piñón pequeño = rueda rápida" },
      { title: "Manivelas", text: "Una manivela es una palanca que hace girar un eje. Transforma el movimiento de tu mano en un giro.", example: "Sacapuntas de manivela · molino de mano" }
    ],
    remember: ["Los mecanismos transmiten y transforman el movimiento.", "Los engranajes tienen dientes y se mueven en sentido contrario.", "Cadenas y correas unen ruedas separadas."],
    mistake: "Pensar que dos engranajes que se tocan giran hacia el mismo lado. Giran en sentidos contrarios.",
    fun: "¿Sabías que el mecanismo de Anticitera, hallado en un naufragio griego, tiene más de 2000 años y usaba engranajes para predecir eclipses?",
    check: [
      ["¿Qué une los pedales con la rueda de la bicicleta?", "La cadena", ["Una cuña", "Un plano inclinado"]],
      ["Dos engranajes que encajan giran…", "En sentidos contrarios", ["En el mismo sentido", "No giran"]]
    ]
  },
  "xtec4f": {
    hook: "Tu mochila siempre se cae del pupitre. ¿Y si inventas algo para resolverlo? 🎒💡",
    steps: [
      { title: "1. Identificar el problema", text: "Describe el problema con claridad: ¿qué pasa?, ¿a quién le afecta?, ¿cuándo ocurre?", example: "La mochila se cae del pupitre y se ensucia" },
      { title: "2. Imaginar y planear", text: "Piensa en varias ideas, elige la mejor y dibuja un plan con medidas y materiales.", example: "📝 gancho de cartón grueso, 10 cm" },
      { title: "3. Construir", text: "Fabrica un prototipo: un primer modelo sencillo para probar la idea, con materiales fáciles como cartón o cinta.", example: "🔨 gancho de cartón pegado al pupitre" },
      { title: "4. Probar", text: "Pon a prueba tu prototipo y observa qué funciona y qué no. Anota los resultados.", example: "🧪 aguanta 2 kg, pero se dobla con 3 kg" },
      { title: "5. Mejorar", text: "Con lo que aprendiste, cambia el diseño y vuelve a probar. Este ciclo se repite hasta lograrlo.", example: "🔧 lo hago doble y ahora aguanta 4 kg" }
    ],
    remember: ["El proceso de diseño tiene pasos: problema, plan, construir, probar y mejorar.", "Un prototipo es un primer modelo para probar.", "Equivocarse ayuda a mejorar el diseño."],
    mistake: "Pensar que el primer prototipo debe salir perfecto. Los inventores prueban y mejoran muchas veces.",
    fun: "¿Sabías que James Dyson hizo más de 5000 prototipos antes de lograr su aspiradora sin bolsa?",
    check: [
      ["¿Cuál es el primer paso del proceso de diseño?", "Identificar el problema", ["Construir", "Mejorar"]],
      ["¿Qué es un prototipo?", "Un primer modelo para probar la idea", ["El producto final perfecto", "Un tipo de herramienta"]]
    ]
  },
