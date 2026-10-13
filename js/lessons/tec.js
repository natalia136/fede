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
