/* Lecciones completas (complemento): Tecnología */
window.CURRICULUM_LESSONS_PLUS = window.CURRICULUM_LESSONS_PLUS || {};
Object.assign(window.CURRICULUM_LESSONS_PLUS, {
  /* ===== Preescolar ===== */
  "t0a": {
    before: ["Las cosas que nos rodean vienen de dos lugares: de la naturaleza o de las manos de las personas.", "Para saber de dónde viene algo, pregúntate: ¿esto lo hizo alguien?"],
    vocab: [["natural", "Lo que nace o está en la naturaleza sin que nadie lo fabrique."], ["artificial", "Lo que fabrican las personas con sus manos o con máquinas."], ["material", "Aquello con lo que se hace un objeto, como madera o plástico."], ["fabricar", "Hacer un objeto con materiales y trabajo."]],
    worked: [
      { problem: "¿La piedra del jardín es natural o artificial?", steps: ["Pregunto: ¿alguien hizo la piedra?", "No, la piedra ya estaba en la tierra.", "Entonces nació en la naturaleza."], answer: "La piedra es natural." },
      { problem: "¿El vaso de vidrio es natural o artificial?", steps: ["Pregunto: ¿alguien hizo el vaso?", "Sí, lo hicieron personas en una fábrica.", "Aunque usaron arena, el vaso lo fabricaron ellas."], answer: "El vaso es artificial." }
    ],
    practice: [
      ["¿Qué es natural?", "Un árbol", ["Una mesa", "Un carro", "Una cuchara"], "El árbol crece solo en la naturaleza; nadie lo fabrica."],
      ["¿Qué es artificial?", "Una pelota", ["Una piedra", "Una nube", "Una hoja"], "La pelota la hacen las personas en una fábrica."],
      ["¿Qué es natural?", "El agua del río", ["Un juguete", "Un lápiz", "Una botella"], "El agua del río está en la naturaleza."],
      ["¿Qué es artificial?", "Un zapato", ["Una concha", "Una montaña", "Una flor"], "Los zapatos los fabrican las personas."],
      ["Una manzana del árbol es…", "Natural", ["Artificial", "Hecha en fábrica", "Un juguete"], "La manzana crece en el árbol: es natural."],
      ["Un televisor es…", "Artificial", ["Natural", "Una planta", "Un animal"], "El televisor lo fabrican personas con máquinas."],
      ["¿De qué material natural se hace una mesa de madera?", "Del árbol", ["Del plástico", "Del vidrio", "Del metal"], "La madera sale de los troncos de los árboles."],
      ["¿Qué pregunta te ayuda a saber si algo es artificial?", "¿Lo hizo una persona?", ["¿Es de color azul?", "¿Es grande?", "¿Es bonito?"], "Si una persona lo hizo, es artificial."],
      ["La lana sale de la oveja. Un gorro de lana es…", "Artificial", ["Natural", "Un animal", "Una planta"], "La lana es natural, pero el gorro lo tejió una persona."]
    ]
  },
  "t0b": {
    before: ["Las flechas indican direcciones: derecha, izquierda, arriba y abajo.", "El robot solo hace lo que tú le dices, una flecha cada vez."],
    vocab: [["flecha", "Señal que muestra hacia dónde moverse."], ["casilla", "Cada cuadrito del tablero donde puede estar el robot."], ["instrucción", "Una orden que le das al robot."], ["meta", "El lugar al que quieres que llegue el robot."]],
    worked: [
      { problem: "La estrella está 3 casillas a la derecha del robot. ¿Qué flechas pones?", steps: ["Miro hacia dónde está la estrella: a la derecha.", "Cuento las casillas: 1, 2, 3.", "Pongo una flecha → por cada casilla."], answer: "→ → →" },
      { problem: "La estrella está 1 casilla arriba y 1 a la izquierda. ¿Qué flechas pones?", steps: ["Primero subo una casilla: ↑.", "Después voy una casilla a la izquierda: ←.", "Reviso que el robot quede sobre la estrella."], answer: "↑ ←" }
    ],
    practice: [
      ["¿Qué flecha mueve al robot hacia arriba?", "↑", ["↓", "→", "←"], "La flecha que apunta hacia arriba sube al robot."],
      ["¿Qué flecha mueve al robot a la izquierda?", "←", ["→", "↑", "↓"], "La flecha que apunta a la izquierda lo mueve hacia ese lado."],
      ["¿Qué flecha mueve al robot hacia abajo?", "↓", ["↑", "←", "→"], "La flecha hacia abajo baja al robot una casilla."],
      ["Con ↓ ↓ ↓ el robot baja…", "3 casillas", ["1 casilla", "2 casillas", "4 casillas"], "Hay tres flechas, así que baja tres casillas."],
      ["La estrella está 2 casillas a la izquierda. ¿Qué pones?", "← ←", ["←", "→ →", "↑ ↑"], "Dos casillas a la izquierda son dos flechas ←."],
      ["El robot se pasó una casilla. ¿Qué haces?", "Quito una flecha", ["Pongo más flechas", "Apago el robot", "Me rindo"], "Si se pasa, sobra una flecha: la quitas y pruebas otra vez."],
      ["¿El robot hace las flechas en orden?", "Sí, una después de otra", ["No, las hace todas a la vez", "Solo hace la última", "Solo hace la primera"], "El robot sigue las flechas en orden, de la primera a la última."],
      ["Para ir una casilla a la derecha y una abajo, pones…", "→ ↓", ["← ↑", "↑ ↑", "← ←"], "Primero derecha (→) y luego abajo (↓)."],
      ["Con → → ↑ el robot va…", "2 a la derecha y 1 arriba", ["2 arriba y 1 a la derecha", "3 a la derecha", "1 a la izquierda"], "Dos flechas → y una flecha ↑."]
    ]
  },
  "xtec0a": {
    before: ["Todos los objetos que usamos sirven para algo: esa es su función.", "Si sabes para qué sirve un objeto, sabes cuándo usarlo."],
    vocab: [["objeto", "Una cosa que podemos ver y tocar."], ["función", "El trabajo que hace un objeto, para qué sirve."], ["usar", "Emplear un objeto para hacer algo."]],
    worked: [
      { problem: "¿Para qué sirve una cuchara?", steps: ["Pienso cuándo uso la cuchara.", "La uso en la sopa y el cereal.", "Me ayuda a llevar la comida a la boca."], answer: "La cuchara sirve para comer." },
      { problem: "Llueve y quieres salir sin mojarte. ¿Qué objeto usas?", steps: ["El problema es la lluvia.", "Busco un objeto que me cubra del agua.", "El paraguas o las botas me protegen."], answer: "Uso el paraguas (y botas de lluvia)." }
    ],
    practice: [
      ["¿Para qué sirve el peine?", "Para peinar el cabello", ["Para comer", "Para escribir", "Para barrer"], "El peine ordena el cabello."],
      ["¿Para qué sirve la cama?", "Para dormir", ["Para cocinar", "Para lavar", "Para escribir"], "En la cama descansamos y dormimos."],
      ["¿Qué objeto sirve para tomar agua?", "El vaso", ["El zapato", "La escoba", "El lápiz"], "En el vaso servimos el agua para beberla."],
      ["¿Para qué sirve la escoba?", "Para barrer", ["Para peinar", "Para dormir", "Para cortar"], "La escoba recoge el polvo y la basura del piso."],
      ["¿Qué objeto usas para secarte después del baño?", "La toalla", ["El plato", "La silla", "El libro"], "La toalla absorbe el agua de tu cuerpo."],
      ["¿Para qué sirve el reloj?", "Para saber la hora", ["Para lavar ropa", "Para pintar", "Para comer"], "El reloj nos dice qué hora es."],
      ["¿Qué objeto protege tus pies?", "Los zapatos", ["Los guantes", "El sombrero", "La bufanda"], "Los zapatos cuidan los pies al caminar."],
      ["¿Para qué sirve el jabón?", "Para lavarnos", ["Para jugar fútbol", "Para escribir", "Para dormir"], "El jabón quita la suciedad y los gérmenes."],
      ["Hace frío. ¿Qué objeto te ayuda?", "Un abrigo", ["Un ventilador", "Un helado", "Una gorra de playa"], "El abrigo guarda el calor del cuerpo."]
    ]
  },
  "xtec0b": {
    before: ["La electricidad hace funcionar muchos aparatos, pero puede dar golpes muy peligrosos.", "Los enchufes, cables y aparatos conectados los maneja siempre un adulto."],
    vocab: [["electricidad", "Energía que hace funcionar luces y aparatos."], ["enchufe", "Lugar de la pared donde se conectan los aparatos."], ["cable", "Cordón por donde pasa la electricidad."], ["peligro", "Algo que puede hacernos daño."]],
    worked: [
      { problem: "Ves un cable pelado en el piso. ¿Qué haces?", steps: ["Un cable pelado es peligroso.", "No lo toco ni lo piso.", "Busco a un adulto y le aviso."], answer: "No lo toco y le aviso a un adulto." },
      { problem: "Saliste del baño con las manos mojadas y quieres prender la tele. ¿Qué haces?", steps: ["El agua y la electricidad juntas son peligrosas.", "Primero me seco bien las manos.", "Si hay que conectar algo, se lo pido a un adulto."], answer: "Me seco las manos y pido ayuda a un adulto." }
    ],
    practice: [
      ["¿Se pueden meter dedos u objetos en el enchufe?", "No, nunca", ["Sí, si es rápido", "Sí, con un lápiz", "Sí, si nadie mira"], "Meter cosas en el enchufe puede dar un golpe eléctrico."],
      ["Un cable está roto. ¿Qué haces?", "No lo toco y aviso a un adulto", ["Lo toco para revisarlo", "Lo muerdo", "Lo escondo"], "Los cables rotos son peligrosos; un adulto debe arreglarlos."],
      ["¿Dónde NO debes usar aparatos eléctricos?", "Cerca del agua", ["En la mesa", "En la sala", "En el escritorio"], "El agua deja pasar la electricidad y es muy peligroso."],
      ["¿Qué hace la electricidad?", "Hace funcionar aparatos", ["Hace crecer las plantas", "Hace llover", "Hace nadar a los peces"], "La electricidad prende luces, la tele y la nevera."],
      ["¿Quién conecta la plancha?", "Un adulto", ["Un niño pequeño", "Mi mascota", "Nadie"], "Los aparatos que calientan y los enchufes los maneja un adulto."],
      ["¿Está bien jugar con los cables?", "No, es peligroso", ["Sí, son juguetes", "Sí, si son largos", "Sí, si están enchufados"], "Los cables no son juguetes."],
      ["Ves chispas en un enchufe. ¿Qué haces?", "Me alejo y llamo a un adulto", ["Le echo agua", "Lo toco", "Me quedo mirando"], "Las chispas son señal de peligro: aléjate y avisa."],
      ["¿Se puede volar cometa cerca de los cables de la calle?", "No, es peligroso", ["Sí, vuela más alto", "Sí, si llueve", "Sí, si es pequeña"], "La cometa puede enredarse en los cables y causar un accidente."]
    ]
  },
  "xtec0c": {
    before: ["Los aparatos son máquinas que nos ayudan con tareas de la casa.", "Cada aparato hace un trabajo distinto: lavar, enfriar, calentar o entretener."],
    vocab: [["aparato", "Máquina que nos ayuda a hacer un trabajo."], ["enfriar", "Poner algo frío."], ["calentar", "Poner algo caliente."], ["electrodoméstico", "Aparato eléctrico que se usa en la casa."]],
    worked: [
      { problem: "Quieres que la leche no se dañe. ¿Qué aparato usas?", steps: ["La leche se daña si está caliente mucho tiempo.", "Necesito un aparato que enfríe.", "La nevera mantiene la comida fría."], answer: "Guardo la leche en la nevera." },
      { problem: "La sopa está fría y la quieres tibia. ¿Qué aparato puede ayudar?", steps: ["Necesito calentar la sopa.", "La estufa o el microondas calientan la comida.", "Un adulto me ayuda a usarlos."], answer: "La estufa o el microondas, con ayuda de un adulto." }
    ],
    practice: [
      ["¿Qué aparato calienta la comida?", "El microondas", ["La nevera", "La lavadora", "El ventilador"], "El microondas calienta la comida rápido."],
      ["¿Qué aparato quita el polvo del piso?", "La aspiradora", ["La licuadora", "El televisor", "La plancha"], "La aspiradora chupa el polvo y la basura pequeña."],
      ["¿Qué aparato quita las arrugas de la ropa?", "La plancha", ["La nevera", "La radio", "El horno"], "La plancha alisa la ropa con calor."],
      ["¿Qué aparato mezcla las frutas para hacer jugo?", "La licuadora", ["La lavadora", "La lámpara", "La aspiradora"], "La licuadora tritura y mezcla la fruta."],
      ["¿Qué aparato da aire fresco cuando hace calor?", "El ventilador", ["El horno", "La estufa", "La plancha"], "El ventilador mueve el aire y nos refresca."],
      ["¿Qué aparato sirve para ver dibujos animados?", "El televisor", ["La nevera", "La licuadora", "La lavadora"], "En el televisor vemos programas y películas."],
      ["¿Qué aparato lava los platos en algunas casas?", "El lavaplatos", ["La lavadora de ropa", "El microondas", "El ventilador"], "El lavaplatos es una máquina que lava la vajilla."],
      ["¿Qué aparato nos deja escuchar música?", "El parlante", ["La plancha", "La nevera", "La estufa"], "El parlante produce el sonido de la música."]
    ]
  },
  "xtec0d": {
    before: ["Muchas tareas tienen varios pasos que van en un orden.", "Si cambias el orden, la tarea puede salir mal."],
    vocab: [["paso", "Cada parte pequeña de una tarea."], ["orden", "Cuál va primero, cuál después y cuál al final."], ["rutina", "Algo que hacemos todos los días de la misma manera."], ["programador", "Persona que da pasos en orden a un computador."]],
    worked: [
      { problem: "Ordena: cepillarse los dientes.", steps: ["Primero pongo crema en el cepillo.", "Después cepillo todos los dientes.", "Luego me enjuago la boca.", "Al final lavo el cepillo."], answer: "Crema → cepillar → enjuagar → lavar el cepillo." },
      { problem: "Ordena: ponerse los zapatos.", steps: ["Primero me pongo las medias.", "Después meto el pie en el zapato.", "Al final amarro los cordones."], answer: "Medias → zapato → amarrar cordones." }
    ],
    practice: [
      ["¿Qué va primero al comer un banano?", "Pelarlo", ["Comerlo", "Botar la cáscara", "Lavar el plato"], "Antes de comerlo hay que quitarle la cáscara."],
      ["¿Qué va primero al ir a dormir?", "Ponerse la pijama", ["Dormirse", "Soñar", "Despertarse"], "Primero te preparas y después te duermes."],
      ["¿Qué va después de mojar las manos?", "Ponerles jabón", ["Secarlas", "Comer", "Abrir la llave"], "Al lavarse: mojar, jabón, frotar, enjuagar y secar."],
      ["¿Qué va al final al bañarse?", "Secarse con la toalla", ["Abrir la ducha", "Ponerse jabón", "Mojarse"], "Secarse es lo último del baño."],
      ["Para pintar un dibujo, ¿qué va primero?", "Tomar el papel", ["Colgar el dibujo", "Lavar el pincel", "Secar la pintura"], "Necesitas el papel antes de pintar."],
      ["¿Qué va primero al plantar una semilla?", "Hacer un hueco en la tierra", ["Regar la planta grande", "Recoger la fruta", "Cortar flores"], "Primero preparas la tierra para la semilla."],
      ["¿Qué va al final al tomar la sopa?", "Lavar el plato", ["Servir la sopa", "Tomar la cuchara", "Soplar"], "Cuando terminas, lavas lo que usaste."],
      ["Si te secas antes de lavarte las manos, ¿qué pasa?", "Las manos quedan mojadas", ["Quedan más limpias", "No pasa nada", "Se secan mejor"], "El orden importa: secar va al final."]
    ]
  },
  "xtec0e": {
    before: ["Algunos objetos funcionan con electricidad del enchufe, otros con pilas y otros sin nada de eso.", "Para saberlo, busca si tiene cable, pilas o botón de encendido."],
    vocab: [["pila", "Pequeño objeto que guarda energía para hacer funcionar aparatos."], ["batería", "Pila recargable que tienen los celulares y tabletas."], ["cable", "Cordón que conecta el aparato al enchufe."], ["encender", "Hacer que un aparato empiece a funcionar."]],
    worked: [
      { problem: "¿El control remoto usa electricidad?", steps: ["Miro si tiene cable: no tiene.", "Miro atrás: tiene una tapa con pilas.", "Las pilas le dan energía."], answer: "Sí, funciona con pilas." },
      { problem: "¿Un libro de cuentos usa electricidad?", steps: ["Busco cable: no tiene.", "Busco pilas: no tiene.", "Lo puedo leer sin encender nada."], answer: "No, el libro no usa electricidad." }
    ],
    practice: [
      ["¿Qué funciona sin electricidad?", "Una bicicleta", ["Una nevera", "Un computador", "Una lámpara"], "La bicicleta se mueve con la fuerza de tus piernas."],
      ["¿Qué necesita electricidad?", "La nevera", ["Una pelota", "Un lápiz", "Una cuchara"], "La nevera se conecta al enchufe para enfriar."],
      ["¿Con qué funciona un celular?", "Con batería", ["Con agua", "Con arena", "Con viento"], "El celular tiene una batería que se recarga."],
      ["¿Qué juguete NO necesita pilas?", "Unos bloques de armar", ["Un carro a control remoto", "Un robot que habla", "Un muñeco con luces"], "Los bloques se arman con las manos."],
      ["¿Qué funciona con pilas?", "Un reloj de pared", ["Una silla", "Un libro", "Una cuchara"], "Muchos relojes de pared usan una pila pequeña."],
      ["¿Qué necesita electricidad?", "La lavadora", ["La escoba", "El balde", "El trapo"], "La lavadora se conecta para mover su tambor."],
      ["¿Qué funciona sin electricidad?", "Unas tijeras", ["Una licuadora", "Un televisor", "Un horno microondas"], "Las tijeras se mueven con tu mano."],
      ["¿Cómo sabes que un aparato usa electricidad?", "Tiene cable, pilas o batería", ["Es de color rojo", "Es muy pesado", "Es redondo"], "El cable, las pilas o la batería le dan la energía."]
    ]
  },
  "xtec0f": {
    before: ["Un patrón es un grupo de cosas que se repite siempre igual.", "Para descubrirlo, busca la parte que se repite y dila en voz alta."],
    vocab: [["patrón", "Algo que se repite siempre igual."], ["repetir", "Hacer o poner otra vez lo mismo."], ["seguir", "Lo que viene después."]],
    worked: [
      { problem: "⭐🌙⭐🌙⭐ ¿Qué sigue?", steps: ["Leo en voz alta: estrella, luna, estrella, luna, estrella.", "La parte que se repite es estrella-luna.", "Después de estrella viene luna."], answer: "Sigue 🌙." },
      { problem: "🐶🐶🐱🐶🐶🐱🐶 ¿Qué sigue?", steps: ["Leo: perro, perro, gato, perro, perro, gato, perro.", "Se repite perro-perro-gato.", "Después del primer perro viene otro perro."], answer: "Sigue 🐶." }
    ],
    practice: [
      ["🟢🟡🟢🟡🟢 ¿Qué sigue?", "🟡", ["🟢", "🔴", "🔵"], "Se repite verde-amarillo; después de verde va amarillo."],
      ["⬛⬜⬛⬜ ¿Qué sigue?", "⬛", ["⬜", "🟥", "🟦"], "Se repite negro-blanco; después de blanco va negro."],
      ["🍓🍓🍋🍓🍓🍋 ¿Qué sigue?", "🍓", ["🍋", "🍇", "🍌"], "Se repite fresa-fresa-limón; empieza otra vez con fresa."],
      ["🐸🐟🐸🐟🐸 ¿Qué sigue?", "🐟", ["🐸", "🐢", "🐦"], "Se repite rana-pez."],
      ["👏👣👏👣 ¿Qué sigue?", "👏", ["👣", "👋", "✋"], "Aplauso-pisada se repite: sigue aplauso."],
      ["🔺🔺🟦🔺🔺🟦🔺🔺 ¿Qué sigue?", "🟦", ["🔺", "⚪", "⭐"], "Se repite triángulo-triángulo-cuadrado."],
      ["🌞🌞🌧️🌞🌞 ¿Qué sigue?", "🌧️", ["🌞", "❄️", "🌈"], "Se repite sol-sol-lluvia."],
      ["¿Cuál es un patrón?", "🍎🍌🍎🍌🍎🍌", ["🍎🍌🍌🍎🍇🍎", "🍇🍌🍎🍓🍋🍐", "🍎🍎🍌🍇🍌🍓"], "Solo en la primera fila se repite siempre lo mismo: manzana-banano."]
    ]
  },
