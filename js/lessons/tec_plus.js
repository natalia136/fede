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
      ["Busca lo natural:", "Un árbol", ["Una mesa", "Un carro", "Una cuchara"], "El árbol crece solo en la naturaleza; nadie lo fabrica."],
      ["¿Qué es artificial?", "Una pelota", ["Una piedra", "Una nube", "Una hoja"], "La pelota la hacen las personas en una fábrica."],
      ["¿Cuál de estas cosas es natural?", "El agua del río", ["Un juguete", "Un lápiz", "Una botella"], "El agua del río está en la naturaleza."],
      ["¿Cuál de estas cosas es artificial?", "Un zapato", ["Una concha", "Una montaña", "Una flor"], "Los zapatos los fabrican las personas."],
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
      ["¿Qué aparato de la cocina necesita electricidad para enfriar?", "La nevera", ["Una pelota", "Un lápiz", "Una cuchara"], "La nevera se conecta al enchufe para enfriar."],
      ["¿Con qué funciona un celular?", "Con batería", ["Con agua", "Con arena", "Con viento"], "El celular tiene una batería que se recarga."],
      ["¿Qué juguete NO necesita pilas?", "Unos bloques de armar", ["Un carro a control remoto", "Un robot que habla", "Un muñeco con luces"], "Los bloques se arman con las manos."],
      ["¿Qué objeto de la sala suele llevar una pila pequeña?", "Un reloj de pared", ["Una silla", "Un libro", "Una cuchara"], "Muchos relojes de pared usan una pila pequeña."],
      ["¿Cuál de estos aparatos se conecta al enchufe?", "La lavadora", ["La escoba", "El balde", "El trapo"], "La lavadora se conecta para mover su tambor."],
      ["¿Qué objeto usas sin pilas ni enchufe?", "Unas tijeras", ["Una licuadora", "Un televisor", "Un horno microondas"], "Las tijeras se mueven con tu mano."],
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
  /* ===== 1.º ===== */
  "t1a": {
    before: ["Una herramienta es un objeto que nos ayuda a hacer un trabajo con menos esfuerzo.", "Cada herramienta tiene un trabajo especial y se usa con cuidado."],
    vocab: [["herramienta", "Objeto que nos ayuda a hacer un trabajo."], ["martillo", "Herramienta para clavar clavos."], ["destornillador", "Herramienta para meter o sacar tornillos."], ["serrucho", "Herramienta con dientes para cortar madera."]],
    worked: [
      { problem: "Hay que apretar un tornillo de la silla. ¿Qué herramienta usas?", steps: ["El trabajo es girar un tornillo.", "El martillo golpea, pero no gira tornillos.", "El destornillador encaja en el tornillo y lo gira."], answer: "El destornillador (con ayuda de un adulto)." },
      { problem: "Quieres regar las plantas del jardín. ¿Qué herramienta te ayuda?", steps: ["El trabajo es llevar agua a las plantas.", "Necesito algo que guarde y deje salir agua.", "La regadera hace justo eso."], answer: "La regadera." }
    ],
    practice: [
      ["¿Qué herramienta sirve para cortar madera?", "El serrucho", ["El martillo", "La regla", "La escoba"], "El serrucho tiene dientes que cortan la madera."],
      ["¿Qué herramienta usas para apretar un tornillo?", "El destornillador", ["Las tijeras", "La pala", "El pincel"], "El destornillador gira los tornillos."],
      ["¿Qué herramienta sirve para cavar en la tierra?", "La pala", ["El martillo", "El lápiz", "La cuchara"], "La pala saca tierra para hacer huecos."],
      ["¿Qué herramienta usa un pintor de paredes?", "El rodillo", ["El serrucho", "El alicate", "El rastrillo"], "El rodillo esparce la pintura en la pared."],
      ["¿Qué herramienta sirve para recoger hojas secas?", "El rastrillo", ["El destornillador", "El martillo", "La regla"], "El rastrillo junta las hojas del suelo."],
      ["¿Qué herramienta usa un cocinero para cortar verduras?", "El cuchillo", ["El martillo", "La pala", "La brocha"], "El cuchillo corta los alimentos; lo usa un adulto o con su ayuda."],
      ["¿Qué debes hacer al usar herramientas?", "Usarlas con cuidado y con un adulto", ["Correr con ellas", "Lanzarlas", "Usarlas como juguete"], "Las herramientas pueden lastimar si se usan mal."],
      ["¿Qué herramienta sujeta y dobla alambres?", "El alicate", ["La regadera", "La escoba", "El pincel"], "El alicate agarra con fuerza y dobla alambres."],
      ["¿Dónde se guardan las herramientas después de usarlas?", "En su caja o lugar", ["En el piso", "En la cama", "En la mochila del colegio"], "Guardarlas evita accidentes y las encuentras rápido."]
    ]
  },
  "t1b": {
    before: ["El computador recibe lo que tú le dices, lo piensa y te muestra el resultado.", "Unas partes sirven para meter información y otras para mostrarla."],
    vocab: [["teclado", "Parte con teclas para escribir letras y números."], ["ratón", "Parte que mueves para señalar y hacer clic."], ["pantalla", "Parte donde ves imágenes y letras."], ["parlantes", "Partes por donde sale el sonido."], ["CPU", "Parte que procesa la información, el «cerebro» del computador."]],
    worked: [
      { problem: "Quieres escuchar una canción en el computador. ¿Qué parte la hace sonar?", steps: ["La canción es sonido.", "El sonido sale del computador hacia ti.", "Los parlantes o audífonos sacan el sonido."], answer: "Los parlantes (o los audífonos)." },
      { problem: "Quieres elegir un dibujo en la pantalla. ¿Qué parte usas?", steps: ["Necesito señalar algo en la pantalla.", "El ratón mueve la flecha.", "Hago clic encima del dibujo."], answer: "El ratón." }
    ],
    practice: [
      ["¿Qué parte mueves para señalar en la pantalla?", "El ratón", ["Los parlantes", "La impresora", "La pantalla"], "El ratón mueve la flecha por la pantalla."],
      ["¿Por dónde sale el sonido?", "Por los parlantes", ["Por el teclado", "Por el ratón", "Por la cámara"], "Los parlantes producen el sonido."],
      ["¿Qué parte se conoce como el «cerebro» del computador?", "La CPU o procesador", ["El ratón", "La pantalla", "El teclado"], "El procesador hace las cuentas y procesa la información."],
      ["¿Qué parte pone en papel lo que hiciste?", "La impresora", ["El micrófono", "El ratón", "La cámara"], "La impresora saca tu trabajo en papel."],
      ["¿Qué parte capta tu voz?", "El micrófono", ["La pantalla", "La impresora", "Los parlantes"], "El micrófono recibe tu voz y la mete al computador."],
      ["¿Qué parte toma fotos o video de ti?", "La cámara", ["El teclado", "Los parlantes", "La impresora"], "La cámara capta imágenes."],
      ["¿Qué parte sirve para MOSTRAR información?", "La pantalla", ["El ratón", "El teclado", "El micrófono"], "La pantalla muestra lo que pasa en el computador."],
      ["¿Qué parte sirve para METER información?", "El teclado", ["Los parlantes", "La pantalla", "La impresora"], "Con el teclado le das letras y números al computador."]
    ]
  },
  "t1c": {
    before: ["Un plan es decidir todos los pasos antes de empezar.", "Cuenta las casillas en cada dirección antes de poner las flechas."],
    vocab: [["plan", "Lista de pasos que decides antes de actuar."], ["camino", "Las casillas por donde pasa el robot."], ["ejecutar", "Poner a funcionar el plan."], ["revisar", "Mirar si el plan funcionó."]],
    worked: [
      { problem: "La meta está 3 casillas a la derecha y luego 2 abajo. Escribe el plan.", steps: ["Cuento hacia la derecha: 1, 2, 3 → → →.", "Cuento hacia abajo: 1, 2 → ↓ ↓.", "Junto todo en orden."], answer: "→ → → ↓ ↓" },
      { problem: "Tu plan es ↑ ↑ → pero el robot quedó una casilla antes de la meta, a la izquierda. ¿Qué corriges?", steps: ["La meta está una casilla más a la derecha.", "Me faltó una flecha →.", "Agrego la flecha al final y pruebo de nuevo."], answer: "↑ ↑ → →" }
    ],
    practice: [
      ["¿Qué es un plan?", "Decidir todos los pasos antes de empezar", ["Moverse sin pensar", "Borrar todo", "Esperar sin hacer nada"], "Planear es pensar el camino completo antes de mover."],
      ["La meta está 4 casillas arriba. ¿Qué flechas usas?", "↑ ↑ ↑ ↑", ["↑ ↑ ↑", "↓ ↓ ↓ ↓", "→ → → →"], "Cuatro casillas arriba son cuatro flechas ↑."],
      ["Con el plan → → ↓, ¿cuántas flechas hay?", "3", ["2", "4", "1"], "Dos flechas → y una ↓ suman tres."],
      ["El plan → ↓ → ↓ lleva al robot…", "2 a la derecha y 2 abajo", ["4 a la derecha", "4 abajo", "2 a la izquierda y 2 arriba"], "Hay dos → y dos ↓."],
      ["El robot no llegó a la meta. ¿Qué haces?", "Reviso el plan y lo corrijo", ["Rompo el robot", "Me rindo", "Pongo flechas al azar"], "Revisar y corregir es parte de programar."],
      ["La meta está 1 a la izquierda y 3 abajo. ¿Qué plan sirve?", "← ↓ ↓ ↓", ["→ ↓ ↓ ↓", "← ↑ ↑ ↑", "← ↓ ↓"], "Una flecha ← y tres flechas ↓."],
      ["¿Por qué contamos las casillas antes de mover?", "Para poner las flechas justas", ["Para cansar al robot", "Para que vaya más lento", "No sirve para nada"], "Si cuentas bien, no sobran ni faltan flechas."],
      ["El robot se pasó 2 casillas a la derecha. ¿Cuántas flechas → sobran?", "2", ["1", "3", "Ninguna"], "Cada flecha es una casilla: sobran dos."]
    ]
  },
  "xtec1a": {
    before: ["Un aparato es tecnología que nos ayuda en tareas que solos no podríamos hacer bien.", "Hay aparatos para comunicarnos, para medir, para ver mejor y para aprender."],
    vocab: [["medir", "Saber cuánto mide, pesa o qué temperatura tiene algo."], ["comunicarse", "Compartir mensajes con otras personas."], ["lupa", "Vidrio que hace ver las cosas más grandes."], ["báscula", "Aparato que mide cuánto pesa algo."]],
    worked: [
      { problem: "Quieres saber cuánto pesas. ¿Qué aparato usas?", steps: ["La tarea es medir el peso.", "El termómetro mide temperatura, no peso.", "La báscula mide cuánto pesamos."], answer: "La báscula." },
      { problem: "Tu abuela vive lejos y quieres hablar con ella. ¿Qué aparato te ayuda?", steps: ["La tarea es comunicarse a distancia.", "Necesito un aparato que lleve mi voz lejos.", "El teléfono o el celular hacen eso."], answer: "El teléfono o el celular." }
    ],
    practice: [
      ["¿Qué aparato sirve para ver estrellas lejanas?", "El telescopio", ["El microscopio", "El termómetro", "La báscula"], "El telescopio acerca lo que está muy lejos."],
      ["¿Qué aparato mide cuánto pesas?", "La báscula", ["El reloj", "La lupa", "La radio"], "La báscula mide el peso."],
      ["¿Qué aparato te dice la hora?", "El reloj", ["El termómetro", "La báscula", "El microscopio"], "El reloj mide el tiempo."],
      ["¿Qué aparato sirve para hablar con alguien lejos?", "El teléfono", ["La lupa", "La regla", "La báscula"], "El teléfono lleva tu voz a otra persona."],
      ["¿Qué aparato agranda un poco lo que miras, como una hormiga?", "La lupa", ["El reloj", "El parlante", "El teléfono"], "La lupa tiene un vidrio que aumenta el tamaño."],
      ["¿Qué aparato sirve para aprender viendo videos y leyendo?", "La tableta", ["La báscula", "El termómetro", "La plancha"], "En la tableta puedes leer y ver videos educativos."],
      ["¿Qué aparato mide la temperatura del aire?", "El termómetro", ["El telescopio", "La lupa", "El teléfono"], "El termómetro mide si hace frío o calor."],
      ["¿Qué aparato toma fotos?", "La cámara", ["La báscula", "La regla", "El reloj"], "La cámara guarda imágenes."]
    ]
  },
  "xtec1b": {
    before: ["El ratón mueve una flecha llamada puntero; con el clic eliges cosas.", "En el teclado cada tecla escribe una letra, un número o hace una tarea especial."],
    vocab: [["puntero", "La flechita que se mueve en la pantalla con el ratón."], ["clic", "Apretar el botón del ratón una vez."], ["doble clic", "Apretar el botón del ratón dos veces rápido."], ["tecla de borrar", "Tecla que quita la letra que está antes del cursor."], ["Shift (Mayús)", "Tecla que, apretada junto a una letra, la escribe en mayúscula."]],
    worked: [
      { problem: "Escribiste «Hola mumdo». ¿Cómo lo corriges?", steps: ["La letra equivocada es la m de «mumdo».", "Pongo el cursor justo después de esa m.", "Aprieto la tecla de borrar y escribo n."], answer: "Queda «Hola mundo»." },
      { problem: "Quieres escribir tu nombre, Ana, con A mayúscula. ¿Cómo lo haces?", steps: ["Mantengo apretada la tecla Shift.", "Aprieto la A y suelto las dos.", "Escribo «na» normal."], answer: "Shift + A, luego n y a: «Ana»." }
    ],
    practice: [
      ["¿Cómo se llama la flecha que mueves con el ratón?", "Puntero", ["Teclado", "Enter", "Pantalla"], "El puntero sigue el movimiento del ratón."],
      ["¿Qué tecla quita una letra equivocada?", "La tecla de borrar", ["La barra espaciadora", "Enter", "Shift"], "La tecla de borrar elimina la letra antes del cursor."],
      ["¿Qué tecla te ayuda a escribir una mayúscula?", "Shift (Mayús)", ["Enter", "Espacio", "Borrar"], "Shift junto con una letra la escribe en mayúscula."],
      ["Para abrir un programa del escritorio muchas veces se hace…", "Doble clic", ["Apretar Espacio", "Apagar el computador", "Girar el ratón"], "Dos clics rápidos abren el ícono."],
      ["¿Cuántas veces aprietas el botón en un «clic»?", "Una vez", ["Dos veces", "Tres veces", "Ninguna"], "Un clic es apretar una sola vez."],
      ["Para escribir «sol azul» necesitas, entre las palabras…", "La barra espaciadora", ["Enter", "Shift", "Borrar"], "El espacio separa las dos palabras."],
      ["¿Dónde está el cursor?", "Donde aparece la siguiente letra que escribas", ["En el ratón", "Debajo del teclado", "En los parlantes"], "El cursor es la rayita que parpadea donde escribes."],
      ["¿Qué tecla usas para empezar un renglón nuevo?", "Enter", ["Borrar", "Shift", "Espacio"], "Enter baja a la línea siguiente."]
    ]
  },
  "xtec1c": {
    before: ["Los materiales tienen propiedades: pueden ser duros, blandos, transparentes, flexibles o impermeables.", "Elegimos el material según lo que necesita hacer el objeto."],
    vocab: [["duro", "Que no se deja doblar ni rayar con facilidad."], ["flexible", "Que se dobla sin romperse."], ["transparente", "Que deja pasar la luz y se ve a través."], ["impermeable", "Que no deja pasar el agua."]],
    worked: [
      { problem: "¿Qué material es bueno para un impermeable de lluvia?", steps: ["Necesito que no pase el agua.", "La tela de algodón se moja; el papel se rompe.", "El plástico no deja pasar el agua."], answer: "Plástico (material impermeable)." },
      { problem: "¿Por qué un martillo no es de goma?", steps: ["El martillo debe golpear fuerte.", "La goma es blanda y rebota.", "El metal es duro y no se deforma."], answer: "Porque necesita un material duro, como el metal." }
    ],
    practice: [
      ["¿Qué material es flexible?", "El caucho de una liga", ["La piedra", "El vidrio", "El ladrillo"], "La liga se estira y dobla sin romperse."],
      ["¿Qué material es duro?", "La piedra", ["El algodón", "La esponja", "La lana"], "La piedra no se dobla ni se aplasta con la mano."],
      ["¿Qué material NO deja pasar el agua?", "El plástico", ["El papel", "La tela de algodón", "El cartón"], "El plástico es impermeable."],
      ["¿Qué material es blando y suave para una almohada?", "Plumas o algodón", ["Metal", "Piedra", "Vidrio"], "Las plumas y el algodón son blandos."],
      ["¿Por qué las gafas tienen lentes transparentes?", "Para poder ver a través", ["Para que pesen más", "Para que reboten", "Para que no se vean"], "Lo transparente deja pasar la luz."],
      ["¿Qué material es bueno para una botella que no se rompa si cae?", "Plástico", ["Vidrio", "Papel", "Arena"], "El plástico resiste golpes mejor que el vidrio."],
      ["¿Qué material absorbe el agua?", "La esponja", ["El plástico", "El metal", "El vidrio"], "La esponja chupa el agua."],
      ["Una caja de cartón bajo la lluvia…", "Se moja y se daña", ["Queda igual", "Se vuelve metal", "Rebota"], "El cartón no es impermeable."]
    ]
  },
  "xtec1d": {
    before: ["Antes de elegir una herramienta, piensa qué trabajo quieres hacer.", "Las herramientas escolares se usan con cuidado y se guardan al terminar."],
    vocab: [["regla", "Herramienta recta con números para medir y trazar líneas."], ["pegante", "Sustancia que une dos cosas."], ["sacapuntas", "Herramienta que afila la punta del lápiz."], ["borrador", "Herramienta que quita lo escrito con lápiz."]],
    worked: [
      { problem: "Quieres hacer una tarjeta: cortar un corazón, pegarlo y escribir tu nombre. ¿Qué herramientas usas?", steps: ["Para cortar el corazón: tijeras.", "Para pegarlo: pegante.", "Para escribir: lápiz o marcador."], answer: "Tijeras, pegante y lápiz." },
      { problem: "Debes trazar una línea recta de 10 cm. ¿Qué usas?", steps: ["Necesito medir 10 cm.", "También necesito una línea recta.", "La regla mide y ayuda a trazar recto."], answer: "La regla y el lápiz." }
    ],
    practice: [
      ["¿Qué herramienta afila el lápiz?", "El sacapuntas", ["El borrador", "La regla", "El pegante"], "El sacapuntas le saca punta al lápiz."],
      ["¿Qué herramienta usas para unir dos papeles?", "El pegante", ["Las tijeras", "La regla", "El sacapuntas"], "El pegante une los papeles."],
      ["¿Qué herramienta quita un error hecho con lápiz?", "El borrador", ["El pegante", "Las tijeras", "El marcador"], "El borrador quita el grafito del lápiz."],
      ["¿Qué herramienta usas para colorear?", "Los colores", ["La regla", "El sacapuntas", "El pegante"], "Los colores sirven para pintar dibujos."],
      ["¿Qué herramienta te ayuda a hacer líneas rectas?", "La regla", ["El borrador", "La goma", "El pincel"], "Pasando el lápiz junto a la regla la línea queda recta."],
      ["¿Qué herramienta une hojas con un ganchito metálico?", "La cosedora", ["El sacapuntas", "El borrador", "La regla"], "La cosedora pone un gancho que une las hojas."],
      ["¿Cómo se pasan las tijeras a un compañero?", "Cerradas y por el mango", ["Abiertas y apuntando", "Lanzándolas", "Corriendo"], "Así nadie se corta."],
      ["¿Qué herramienta usas para pintar con témperas?", "El pincel", ["La regla", "La cosedora", "El sacapuntas"], "El pincel lleva la pintura al papel."]
    ]
  },
  "xtec1e": {
    before: ["Seguir pasos en orden ayuda a que las cosas salgan bien a la primera.", "En el computador, guardar es un paso que no se puede olvidar."],
    vocab: [["encender", "Prender un aparato para que funcione."], ["programa", "Aplicación del computador que sirve para una tarea, como dibujar."], ["guardar", "Dejar el trabajo almacenado para no perderlo."], ["apagar", "Hacer que el aparato deje de funcionar."]],
    worked: [
      { problem: "Ordena: escribir un cuento en el computador.", steps: ["Encender el computador.", "Abrir el programa para escribir.", "Escribir el cuento.", "Guardar el archivo."], answer: "Encender → abrir programa → escribir → guardar." },
      { problem: "Ordena: hacer un avión de papel.", steps: ["Tomar una hoja.", "Doblarla por la mitad.", "Doblar las puntas hacia el centro.", "Doblar las alas y lanzarlo."], answer: "Hoja → doblar mitad → doblar puntas → alas → lanzar." }
    ],
    practice: [
      ["¿Qué va primero para usar el computador?", "Encenderlo", ["Guardar", "Apagarlo", "Imprimir"], "Sin encenderlo no funciona nada."],
      ["¿Qué paso va justo después de terminar tu dibujo?", "Guardarlo", ["Encender el computador", "Abrir el programa", "Comprar papel"], "Guardas para no perder tu trabajo."],
      ["¿Qué va al final cuando terminas de usar el computador?", "Apagarlo bien", ["Encenderlo", "Abrir un programa", "Empezar a dibujar"], "Al final se apaga correctamente."],
      ["Para pegar una figura, ¿qué va primero?", "Recortarla", ["Pegarla", "Colgarla", "Botar el papel"], "Primero recortas y luego la pegas."],
      ["Para hacer un collar de cuentas, ¿qué va primero?", "Cortar el hilo", ["Amarrar el collar", "Ponérselo", "Guardarlo"], "Necesitas el hilo antes de meter cuentas."],
      ["Al pintar con témperas, ¿qué va al final?", "Lavar el pincel", ["Abrir la pintura", "Mojar el pincel", "Pintar"], "Al terminar se limpian los materiales."],
      ["Si te saltas un paso de las instrucciones, ¿qué puede pasar?", "El trabajo puede salir mal", ["Sale mejor siempre", "No importa nunca", "Se hace solo"], "Cada paso es necesario."],
      ["Ordena: abrir programa (A), encender (B), escribir (C).", "B, A, C", ["A, B, C", "C, B, A", "A, C, B"], "Primero encender, luego abrir el programa y después escribir."]
    ]
  },
  "xtec1f": {
    before: ["Una secuencia es una serie de cosas en orden; si tiene un núcleo que se repite, es un patrón.", "Para predecir qué sigue, busca el núcleo y repítelo."],
    vocab: [["secuencia", "Cosas puestas una después de otra en orden."], ["núcleo", "La parte de un patrón que se repite."], ["predecir", "Adivinar con pistas lo que viene después."]],
    worked: [
      { problem: "1, 2, 1, 2, 1, … ¿qué sigue?", steps: ["Busco lo que se repite: 1, 2.", "El núcleo tiene 2 elementos.", "Después de 1 viene 2."], answer: "Sigue 2." },
      { problem: "🔵🔵🟠🟠🔵🔵🟠 ¿qué sigue?", steps: ["Leo: azul, azul, naranja, naranja…", "El núcleo es azul-azul-naranja-naranja.", "Ya hay un naranja; falta el segundo."], answer: "Sigue 🟠." }
    ],
    practice: [
      ["A, B, A, B, A, … ¿qué sigue?", "B", ["A", "C", "D"], "El núcleo es A-B."],
      ["🐱🐭🐭🐱🐭🐭🐱 ¿qué sigue?", "🐭", ["🐱", "🐶", "🐰"], "El núcleo es gato-ratón-ratón."],
      ["¿Cuál es el núcleo de ⭐⭐🌙⭐⭐🌙?", "⭐⭐🌙", ["⭐🌙", "🌙🌙", "⭐"], "Se repite estrella-estrella-luna."],
      ["5, 10, 5, 10, 5, … ¿qué sigue?", "10", ["5", "15", "20"], "Se repite 5-10."],
      ["🟥🟩🟦🟥🟩 ¿qué sigue?", "🟦", ["🟥", "🟩", "🟨"], "El núcleo tiene tres colores: rojo-verde-azul."],
      ["¿Cuántos elementos tiene el núcleo de ▲●●▲●●?", "3", ["2", "4", "6"], "El núcleo es ▲●●: tres elementos."],
      ["⬆️⬇️⬆️⬇️ … ¿qué siguen dos?", "⬆️⬇️", ["⬇️⬆️", "⬆️⬆️", "⬇️⬇️"], "Se repite arriba-abajo."],
      ["¿Para qué sirve encontrar un patrón?", "Para predecir lo que sigue", ["Para borrar la secuencia", "Para que se acabe", "No sirve"], "Conociendo el núcleo sabes qué viene."]
    ]
  },
  /* ===== 2.º ===== */
  "t2a": {
    before: ["Un invento es algo nuevo que alguien crea para resolver un problema.", "Muchos inventos antiguos todavía los usamos hoy, como la rueda."],
    vocab: [["invento", "Algo nuevo creado para resolver un problema."], ["inventor", "Persona que crea un invento."], ["imprenta", "Máquina para imprimir muchos libros iguales."], ["teléfono", "Aparato para hablar con alguien que está lejos."]],
    worked: [
      { problem: "¿Qué problema resolvió la rueda?", steps: ["Antes las cargas se arrastraban o se llevaban a cuestas.", "La rueda gira y reduce el esfuerzo.", "Con ella se hicieron carretas y luego carros."], answer: "Mover cargas pesadas con menos esfuerzo." },
      { problem: "¿Qué cambió con la imprenta?", steps: ["Antes los libros se copiaban a mano, muy despacio.", "La imprenta hacía muchas copias iguales rápido.", "Más personas pudieron tener libros y aprender."], answer: "Los libros se hicieron más rápido y llegaron a más personas." }
    ],
    practice: [
      ["¿Qué es un invento?", "Algo nuevo creado para resolver un problema", ["Algo que crece en el bosque", "Un animal", "Un juego de lluvia"], "Los inventos los crean personas para solucionar algo."],
      ["¿Qué invento permitió hablar con alguien lejos?", "El teléfono", ["La rueda", "La bombilla", "La imprenta"], "El teléfono lleva la voz a distancia."],
      ["¿Qué invento ayudó a mover cargas pesadas?", "La rueda", ["El teléfono", "La radio", "La bombilla"], "La rueda gira y facilita llevar cargas."],
      ["Antes de la imprenta, los libros se hacían…", "Copiándolos a mano", ["Con computador", "Con fotocopiadora", "Con celular"], "Los copistas escribían libro por libro."],
      ["¿Qué invento sirve para ver de lejos?", "El telescopio", ["La rueda", "El jabón", "El reloj de arena"], "El telescopio acerca objetos lejanos."],
      ["¿Qué invento nos deja guardar comida fría?", "La nevera", ["La imprenta", "La rueda", "El teléfono"], "La nevera conserva los alimentos."],
      ["¿Qué invento usamos para escribir mensajes que viajan por internet?", "El computador", ["La carreta", "La vela", "El arado"], "Con el computador enviamos correos y mensajes."],
      ["¿Para qué sirven los inventos?", "Para hacer la vida más fácil o segura", ["Para complicar todo", "Para nada", "Solo para jugar"], "Resuelven problemas de las personas."]
    ]
  },
  "t2b": {
    before: ["Los objetos se fabrican con materiales como madera, metal, plástico, vidrio, papel o tela.", "Cada material tiene un origen y sirve para cosas distintas."],
    vocab: [["madera", "Material que sale del tronco de los árboles."], ["metal", "Material duro y brillante, como el hierro o el aluminio."], ["plástico", "Material fabricado, liviano y fácil de moldear."], ["vidrio", "Material transparente que se hace con arena y calor."]],
    worked: [
      { problem: "¿De qué material harías una ventana?", steps: ["La ventana debe dejar ver hacia afuera.", "Necesito un material transparente.", "El vidrio es transparente."], answer: "De vidrio." },
      { problem: "¿Por qué los platos para niños pequeños suelen ser de plástico?", steps: ["Los niños pueden dejar caer los platos.", "El vidrio y la cerámica se rompen.", "El plástico es liviano y no se rompe fácil."], answer: "Porque el plástico es liviano y resistente a las caídas." }
    ],
    practice: [
      ["¿De qué material es una cuchara metálica?", "Metal", ["Madera", "Papel", "Tela"], "Las cucharas metálicas son de acero, un metal."],
      ["¿De qué material es un cuaderno?", "Papel", ["Vidrio", "Metal", "Piedra"], "Las hojas del cuaderno son de papel."],
      ["¿Con qué se fabrica el vidrio?", "Con arena y mucho calor", ["Con hojas de árboles", "Con lana", "Con agua y sal"], "La arena se funde a altas temperaturas."],
      ["¿De qué material es tu camiseta?", "Tela", ["Vidrio", "Metal", "Madera"], "La ropa se hace con telas como el algodón."],
      ["¿Qué material viene del petróleo?", "El plástico", ["La madera", "La lana", "El papel"], "La mayoría del plástico se fabrica a partir del petróleo."],
      ["¿Qué material conduce bien el calor para cocinar?", "El metal", ["La madera", "El plástico", "El papel"], "Por eso las ollas son de metal."],
      ["¿De qué material es casi siempre un lápiz por fuera?", "Madera", ["Vidrio", "Metal", "Tela"], "El lápiz tiene madera alrededor de la mina."],
      ["¿Qué material sale de la oveja?", "La lana", ["El plástico", "El vidrio", "El metal"], "La lana es el pelo de la oveja."]
    ]
  },
  "t2c": {
    before: ["Un obstáculo es algo que bloquea el camino, como una roca.", "Si hay obstáculo, el robot debe rodearlo con otras flechas."],
    vocab: [["obstáculo", "Algo que bloquea el paso."], ["esquivar", "Rodear algo para no chocar."], ["ruta", "El camino elegido para llegar."], ["regla", "Una indicación que siempre se cumple, como «no pisar rocas»."]],
    worked: [
      { problem: "La meta está 2 casillas a la derecha, pero hay una roca en la casilla de en medio. ¿Qué haces?", steps: ["No puedo ir → → porque choco con la roca.", "Bajo una casilla: ↓.", "Avanzo dos a la derecha: → →.", "Subo para llegar a la meta: ↑."], answer: "↓ → → ↑" },
      { problem: "Hay dos caminos: uno de 4 pasos y otro de 6, ambos sin rocas. ¿Cuál eliges?", steps: ["Los dos llegan a la meta.", "Comparo: 4 es menos que 6.", "El de menos pasos es más corto."], answer: "El de 4 pasos." }
    ],
    practice: [
      ["¿Qué es un obstáculo?", "Algo que bloquea el camino", ["La meta", "Una flecha", "El robot"], "Las rocas son obstáculos: no se pueden atravesar."],
      ["Hay una roca justo a la derecha del robot. ¿Puedes usar → primero?", "No, chocaría", ["Sí, la roca se mueve", "Sí, el robot salta", "Sí, siempre"], "Debes usar otra flecha para rodearla."],
      ["Para rodear una roca, el robot puede…", "Subir o bajar y luego seguir", ["Atravesarla", "Quedarse quieto", "Volver al inicio siempre"], "Se rodea cambiando de fila o columna."],
      ["¿Qué significa esquivar?", "Rodear para no chocar", ["Chocar a propósito", "Saltar encima", "Apagar el robot"], "Esquivar es pasar al lado del obstáculo."],
      ["Un camino tiene 5 pasos y otro 7. ¿Cuál es más corto?", "El de 5 pasos", ["El de 7 pasos", "Son iguales", "Ninguno"], "5 es menor que 7."],
      ["Probaste tu ruta y el robot chocó. ¿Qué haces?", "Busco dónde chocó y cambio esas flechas", ["Borro todo y me rindo", "Pongo más flechas al azar", "Culpo al robot"], "Corregir solo la parte que falla es más fácil."],
      ["Para pasar por debajo de una roca que está a la derecha, ¿qué flecha va primero?", "↓", ["→", "←", "↑"], "Primero bajas para quedar debajo de la roca."],
      ["¿Una buena regla para el robot es…?", "Nunca entrar en una casilla con roca", ["Siempre ir a la derecha", "No mirar el mapa", "Usar solo una flecha"], "Así evitas choques."]
    ]
  },
  "xtec2a": {
    before: ["Los inventos no se quedan iguales: las personas los mejoran con el tiempo.", "Cada mejora resuelve un problema del invento anterior."],
    vocab: [["antes", "En el pasado, hace mucho tiempo."], ["ahora", "En el presente, hoy."], ["mejorar", "Hacer que algo funcione mejor."], ["evolución", "Cambio poco a poco a lo largo del tiempo."]],
    worked: [
      { problem: "Ordena de antes a ahora: celular, teléfono de disco, carta.", steps: ["La carta es la más antigua: viajaba días.", "Después vino el teléfono de disco, fijo en la casa.", "Hoy usamos el celular, que va con nosotros."], answer: "Carta → teléfono de disco → celular." },
      { problem: "¿Qué problema resolvió la lavadora frente a lavar a mano?", steps: ["Lavar a mano cansa y demora.", "La lavadora mueve la ropa sola.", "Así ahorramos tiempo y esfuerzo."], answer: "Ahorra tiempo y esfuerzo." }
    ],
    practice: [
      ["¿Qué vino antes del carro?", "La carreta con caballos", ["El avión", "El tren eléctrico", "La moto eléctrica"], "Antes de los motores se usaban animales para tirar carretas."],
      ["Antes de la cámara del celular, las fotos se tomaban con…", "Cámaras de rollo", ["Tabletas", "Relojes inteligentes", "Computadores"], "Las cámaras de rollo guardaban fotos en película."],
      ["Antes de la estufa, se cocinaba con…", "Fogón de leña", ["Microondas", "Nevera", "Licuadora"], "El fuego de leña era la forma antigua de cocinar."],
      ["¿Qué vino después del disco de vinilo para escuchar música?", "El casete", ["El tambor", "La flauta", "El fonógrafo"], "Primero vinilo, luego casete, CD y ahora música digital."],
      ["Hoy, para buscar una palabra, además del diccionario de papel puedes usar…", "Un diccionario en línea", ["Una vela", "Una carreta", "Un telégrafo"], "La tecnología digital nos da diccionarios en línea."],
      ["Ordena de antes a ahora: escoba, aspiradora robot, aspiradora.", "Escoba → aspiradora → aspiradora robot", ["Aspiradora robot → escoba → aspiradora", "Aspiradora → escoba → aspiradora robot", "Escoba → aspiradora robot → aspiradora"], "Cada invento mejoró al anterior."],
      ["¿Qué ventaja tiene el correo electrónico frente a la carta de papel?", "Llega en segundos", ["Se demora semanas", "Necesita estampilla", "Se moja con la lluvia"], "El correo viaja por internet casi al instante."],
      ["¿Por qué la bombilla LED mejoró a la bombilla antigua?", "Gasta menos energía", ["Da más humo", "Se rompe más", "Necesita fuego"], "Las LED dan la misma luz con mucha menos energía."]
    ]
  },
  "xtec2b": {
    before: ["El transporte nos lleva de un lugar a otro por tierra, agua o aire.", "Todo transporte necesita energía: músculos, viento, combustible o electricidad."],
    vocab: [["transporte", "Medio para llevar personas o cosas de un lugar a otro."], ["combustible", "Sustancia que se quema para dar energía, como la gasolina."], ["batería", "Guarda electricidad para mover vehículos eléctricos."], ["terrestre", "Que va por tierra."]],
    worked: [
      { problem: "Clasifica: canoa, tren, helicóptero.", steps: ["La canoa va por el agua: acuático.", "El tren va por rieles en tierra: terrestre.", "El helicóptero vuela: aéreo."], answer: "Canoa: agua · Tren: tierra · Helicóptero: aire." },
      { problem: "¿Qué energía mueve una canoa de remos?", steps: ["La canoa no tiene motor.", "Las personas mueven los remos.", "La fuerza viene de sus músculos."], answer: "La fuerza de los músculos." }
    ],
    practice: [
      ["¿Cuál es un transporte por agua?", "El barco", ["El bus", "El avión", "La bicicleta"], "El barco navega por ríos y mares."],
      ["¿Cuál es un transporte por tierra?", "El tren", ["El velero", "El helicóptero", "El globo"], "El tren va sobre rieles en la tierra."],
      ["¿Qué energía usa un carro de gasolina?", "Combustible", ["Viento", "Piernas", "Sol directo"], "La gasolina es un combustible."],
      ["¿Qué energía mueve un carro eléctrico?", "La batería", ["La gasolina", "El viento", "Los caballos"], "Los carros eléctricos guardan energía en baterías."],
      ["¿Qué transporte no contamina el aire al moverse?", "La bicicleta", ["El bus de diésel", "El avión", "La moto de gasolina"], "La bicicleta se mueve con tu fuerza."],
      ["¿Qué mueve a un globo aerostático hacia arriba?", "El aire caliente", ["Las ruedas", "Los remos", "Los pedales"], "El aire caliente es más liviano y lo eleva."],
      ["El avión y el helicóptero son transportes…", "Aéreos", ["Acuáticos", "Terrestres", "Subterráneos"], "Los dos viajan por el aire."],
      ["¿Qué transporte usa una vía bajo tierra en algunas ciudades?", "El metro", ["El velero", "El globo", "La canoa"], "Muchos metros van por túneles."]
    ]
  },
  "xtec2c": {
    before: ["La electricidad solo viaja si tiene un camino completo, sin cortes.", "Las pilas pequeñas son seguras para experimentar; los enchufes de la pared, ¡nunca!"],
    vocab: [["circuito", "Camino cerrado por donde viaja la electricidad."], ["pila", "Fuente de energía del circuito."], ["cable", "Hilo de metal por donde pasa la electricidad."], ["interruptor", "Botón que abre o cierra el circuito."]],
    worked: [
      { problem: "Armaste pila, cables y bombilla, pero no prende. ¿Qué revisas?", steps: ["Reviso que cada cable toque bien la pila.", "Reviso que cada cable toque bien la bombilla.", "Busco algún cable suelto: si lo hay, el camino está abierto."], answer: "Que el camino esté cerrado: ningún cable suelto." },
      { problem: "¿Qué hace el interruptor cuando lo apagas?", steps: ["El interruptor es una puerta en el camino.", "Al apagarlo, abre el camino.", "La electricidad no pasa y la bombilla se apaga."], answer: "Abre el circuito y la luz se apaga." }
    ],
    practice: [
      ["¿Qué es un circuito?", "Un camino cerrado para la electricidad", ["Una pista de carreras", "Un tipo de pila", "Una bombilla rota"], "La electricidad recorre un camino completo."],
      ["¿Qué parte enciende y apaga la luz?", "El interruptor", ["La pila", "El cable", "La bombilla"], "El interruptor abre o cierra el camino."],
      ["¿Por dónde viaja la electricidad en el circuito?", "Por los cables", ["Por el aire", "Por la madera", "Por el agua del vaso"], "Los cables de metal la conducen."],
      ["¿Qué parte del circuito da luz?", "La bombilla", ["La pila", "El interruptor", "El cable"], "La bombilla transforma la electricidad en luz."],
      ["Si el camino está completo, la bombilla…", "Se enciende", ["Se apaga", "Se derrite", "Desaparece"], "Con el circuito cerrado pasa la electricidad."],
      ["¿Con qué es seguro hacer circuitos en clase?", "Con pilas pequeñas", ["Con el enchufe de la pared", "Con cables de la calle", "Con agua"], "Las pilas pequeñas tienen poca energía; el enchufe es peligroso."],
      ["¿De qué material es el centro de los cables?", "De metal, como el cobre", ["De papel", "De madera", "De lana"], "El metal deja pasar la electricidad."],
      ["La linterna no prende y los cables están bien. ¿Qué puede pasar?", "La pila está gastada", ["La linterna tiene sueño", "Falta agua", "Es de día"], "Sin energía en la pila, no hay luz."]
    ]
  },
  "xtec2d": {
    before: ["Los residuos son lo que ya no usamos y botamos.", "Si los separamos bien, muchos se pueden reciclar y convertir en cosas nuevas."],
    vocab: [["residuo", "Lo que sobra o botamos."], ["reciclar", "Convertir un residuo en material para hacer algo nuevo."], ["orgánico", "Residuo que viene de plantas o animales, como cáscaras."], ["contenedor", "Caneca o recipiente para cada tipo de residuo."]],
    worked: [
      { problem: "¿Dónde va una caja de cereal vacía?", steps: ["Pienso de qué material es: cartón.", "La aplasto para que ocupe menos.", "La pongo con el papel y cartón."], answer: "En el contenedor de papel y cartón." },
      { problem: "¿Dónde va un frasco de mermelada vacío?", steps: ["Es de vidrio.", "Lo enjuago para quitar la mermelada.", "Lo llevo al contenedor de vidrio."], answer: "En el contenedor de vidrio, limpio." }
    ],
    practice: [
      ["¿Dónde va una botella plástica de agua?", "Con los plásticos", ["Con los orgánicos", "Con el vidrio", "Con las pilas"], "La botella es de plástico."],
      ["¿Dónde van las hojas de papel usadas?", "Con papel y cartón", ["Con los orgánicos", "Con el vidrio", "Con el metal"], "El papel se recicla para hacer papel nuevo."],
      ["¿Dónde van las cáscaras de huevo?", "Con los orgánicos", ["Con los plásticos", "Con el vidrio", "Con el papel"], "Vienen de un animal: son orgánicas."],
      ["¿Qué se puede hacer con los residuos orgánicos?", "Abono para las plantas", ["Botellas nuevas", "Vidrio nuevo", "Pilas nuevas"], "Lo orgánico se descompone y se vuelve compost."],
      ["¿Dónde va una lata de gaseosa?", "Con los metales", ["Con los orgánicos", "Con el papel", "Con el vidrio"], "Las latas son de aluminio, un metal."],
      ["¿Qué pasa si mezclas todo en una sola bolsa?", "Es más difícil reciclar", ["Se recicla mejor", "No pasa nada", "Se vuelve oro"], "Los residuos mezclados se ensucian y no se pueden separar fácil."],
      ["¿Qué se puede fabricar reciclando botellas plásticas?", "Ropa o nuevas botellas", ["Frutas", "Árboles", "Agua"], "El plástico reciclado se convierte en fibras y envases."],
      ["Una servilleta sucia de comida, ¿se recicla con el papel?", "No, porque está sucia", ["Sí, siempre", "Sí, con el vidrio", "Sí, con las latas"], "El papel sucio de grasa no se puede reciclar como papel."]
    ]
  },
  "xtec2e": {
    before: ["Las pantallas nos entretienen y enseñan, pero usarlas mucho cansa los ojos y el cuerpo.", "Un horario acordado con tu familia te ayuda a tener tiempo para todo."],
    vocab: [["pantalla", "Superficie del celular, tableta o televisor donde vemos imágenes."], ["postura", "La forma en que pones tu cuerpo al sentarte."], ["pausa", "Un descanso corto."], ["horario", "Tiempo acordado para hacer algo."]],
    worked: [
      { problem: "Llevas un rato largo jugando en la tableta y te arden los ojos. ¿Qué haces?", steps: ["Mis ojos necesitan descanso.", "Hago una pausa y miro algo lejano.", "Parpadeo, me estiro y tomo agua."], answer: "Pauso, miro lejos y descanso un rato." },
      { problem: "¿Cómo te sientas bien frente al computador?", steps: ["Apoyo la espalda en la silla.", "Pongo los pies en el suelo o en un apoyo.", "Dejo la pantalla a la altura de los ojos y a distancia de un brazo."], answer: "Espalda recta, pies apoyados y pantalla a un brazo de distancia." }
    ],
    practice: [
      ["¿Cuál es una buena postura frente a la pantalla?", "Espalda apoyada y pies en el suelo", ["Acostado boca abajo", "Encorvado muy cerca", "De pie en la silla"], "Así cuidas tu espalda y cuello."],
      ["¿A qué distancia es bueno tener la pantalla?", "Más o menos a un brazo", ["Pegada a la nariz", "A un dedo", "Dentro de la cobija"], "Muy cerca cansa los ojos."],
      ["¿Quién te ayuda a acordar el horario de pantallas?", "Tu familia", ["Un desconocido en internet", "El videojuego", "Nadie"], "El horario se acuerda en casa."],
      ["¿Qué es mejor hacer en el tiempo sin pantallas?", "Jugar afuera, leer o dibujar", ["Mirar otra pantalla", "Quedarse sin moverse", "Dormir de día siempre"], "Moverse y crear es bueno para el cuerpo y la mente."],
      ["¿Por qué no es bueno usar pantallas en la cama antes de dormir?", "Porque la luz dificulta dormirse", ["Porque se dañan", "Porque se enfrían", "Porque engordan"], "La luz de la pantalla le dice al cerebro que sigue despierto."],
      ["¿Es bueno comer viendo la pantalla?", "No, mejor compartir en familia", ["Sí, siempre", "Sí, en cada comida", "Sí, si es tarde"], "Comer sin pantallas ayuda a conversar y a sentir cuándo ya comiste."],
      ["El tiempo acordado terminó. ¿Qué haces?", "Apago la pantalla", ["Sigo a escondidas", "Me enojo", "Cambio de aparato"], "Respetar el acuerdo crea buenos hábitos."],
      ["Si algo en la pantalla te asusta o incomoda, ¿qué haces?", "Lo cierro y le cuento a un adulto", ["Lo sigo viendo", "Lo comparto", "Lo guardo en secreto"], "Un adulto de confianza te puede ayudar."]
    ]
  },
  "xtec2f": {
    before: ["Las tres R son: reducir, reutilizar y reciclar.", "Para reciclar un envase primero se limpia, luego se separa y después se lleva al contenedor."],
    vocab: [["reducir", "Usar y comprar menos cosas que se vuelven basura."], ["reutilizar", "Volver a usar algo, a veces para otra función."], ["reciclar", "Transformar un residuo en material nuevo."], ["enjuagar", "Lavar con agua para quitar restos."]],
    worked: [
      { problem: "¿Cómo preparas una botella de jugo para reciclar?", steps: ["La vacío y la enjuago.", "La aplasto para que ocupe menos espacio.", "La pongo en el contenedor de plásticos."], answer: "Enjuagar → aplastar → contenedor de plástico." },
      { problem: "Tienes un frasco de vidrio vacío. Da una idea para reutilizarlo.", steps: ["Lo lavo bien.", "Pienso qué necesito guardar.", "Lo uso como lapicero o para guardar botones."], answer: "Reutilizarlo como portalápices o recipiente." }
    ],
    practice: [
      ["¿Cuáles son las tres R?", "Reducir, reutilizar, reciclar", ["Romper, regar, reír", "Recortar, rayar, rodar", "Reducir, romper, regalar"], "Son tres formas de producir menos basura."],
      ["Llevar tu propia bolsa de tela al mercado es…", "Reducir", ["Reciclar", "Romper", "Botar"], "Evitas usar bolsas plásticas nuevas."],
      ["¿Qué va después de limpiar un envase?", "Aplastarlo y separarlo", ["Ensuciarlo", "Botarlo al río", "Quemarlo"], "Luego se separa y se lleva al contenedor."],
      ["Hacer un juguete con un tubo de papel higiénico es…", "Reutilizar", ["Reducir", "Contaminar", "Comprar"], "Le das un nuevo uso al tubo."],
      ["Una fábrica convierte latas viejas en latas nuevas. Eso es…", "Reciclar", ["Reducir", "Reutilizar", "Botar"], "El metal se funde y se transforma."],
      ["¿Por qué aplastamos las botellas?", "Para que ocupen menos espacio", ["Para que pesen más", "Para que se ensucien", "Para que se pinten"], "Así caben más en el contenedor."],
      ["¿Qué es mejor para el planeta, en general?", "Reducir lo que usamos", ["Botar todo junto", "Comprar más envases", "Usar todo una sola vez"], "Si no hay residuo, no hay que reciclarlo."],
      ["Usar las hojas por los dos lados es…", "Reducir el uso de papel", ["Reciclar vidrio", "Contaminar", "Desperdiciar"], "Gastas menos hojas nuevas."]
    ]
  },
  /* ===== 3.º ===== */
  "t3a": {
    before: ["En internet hay personas que no conocemos, y no siempre son quienes dicen ser.", "Tus datos personales y tus contraseñas son privados: solo los conocen tus padres o cuidadores."],
    vocab: [["datos personales", "Información que dice quién eres o dónde estás: nombre completo, dirección, teléfono, colegio."], ["desconocido", "Persona que no conoces en la vida real."], ["privado", "Que solo tú y tu familia deben conocer."], ["enlace", "Texto o botón que te lleva a otra página."]],
    worked: [
      { problem: "En un juego en línea, alguien te ofrece monedas gratis si le das tu contraseña. ¿Qué haces?", steps: ["Nadie necesita tu contraseña para darte un regalo.", "Es un engaño para robar tu cuenta.", "No respondo y le cuento a un adulto."], answer: "No doy la contraseña y aviso a un adulto." },
      { problem: "Quieres subir una foto con tu uniforme del colegio. ¿Qué revisas?", steps: ["El uniforme muestra en qué colegio estudias.", "Eso ayuda a un desconocido a encontrarte.", "Le pregunto a un adulto y elijo una foto sin datos."], answer: "Pido permiso y evito fotos que muestren mi colegio o dirección." }
    ],
    practice: [
      ["¿Cuál es un dato personal?", "El nombre de tu colegio", ["Tu color favorito", "Tu animal preferido", "Tu comida favorita"], "Con el nombre del colegio alguien podría encontrarte."],
      ["Te llega un mensaje: «¡Ganaste un celular! Haz clic aquí». ¿Qué haces?", "No hago clic y aviso a un adulto", ["Hago clic rápido", "Lo reenvío a todos", "Doy mis datos"], "Los premios falsos son trampas comunes."],
      ["Un amigo del juego que no conoces en persona quiere verte en el parque. ¿Qué haces?", "No voy y le cuento a un adulto", ["Voy solo", "Le doy mi dirección", "Lo guardo en secreto"], "Nunca te encuentres con alguien de internet sin tus padres."],
      ["¿Qué nombre de usuario es más seguro?", "EstrellaVeloz", ["Juan_Perez_Calle10", "Maria2015_ColegioSol", "Pedro_tel3001234567"], "Un apodo no revela tu nombre real, dirección ni teléfono."],
      ["¿Qué haces si ves algo en internet que te hace sentir mal?", "Lo cierro y le cuento a un adulto", ["Lo comparto", "Me quedo callado", "Lo vuelvo a ver"], "Un adulto de confianza te ayuda."],
      ["¿Está bien decir en un chat a qué hora sales solo de casa?", "No, es información privada", ["Sí, a todos", "Sí, si preguntan amable", "Sí, con foto"], "Eso le dice a un desconocido dónde y cuándo encontrarte."],
      ["Antes de descargar un juego, ¿qué haces?", "Pido permiso a un adulto", ["Lo descargo sin preguntar", "Doy mi contraseña", "Desactivo el antivirus"], "Algunas descargas traen virus o piden datos."],
      ["Alguien te pide guardar en secreto sus mensajes. ¿Qué haces?", "Le cuento a un adulto de confianza", ["Guardo el secreto", "Borro todo", "Le mando una foto"], "Un adulto que pide secretos en línea es señal de peligro."],
      ["¿Cuál de estas acciones protege tu cuenta?", "Cerrar sesión en computadores compartidos", ["Anotar la contraseña en el pupitre", "Usar la misma clave para todo", "Decirla a tus amigos"], "Así nadie más entra con tu cuenta."]
    ]
  },
  "t3b": {
    before: ["Un algoritmo es una lista de pasos claros y ordenados para resolver una tarea.", "Las computadoras solo hacen exactamente lo que dicen los pasos."],
    vocab: [["algoritmo", "Lista de pasos ordenados para resolver algo."], ["instrucción", "Cada paso u orden del algoritmo."], ["secuencia", "Pasos que van uno detrás de otro."], ["resultado", "Lo que se obtiene al terminar los pasos."]],
    worked: [
      { problem: "Escribe un algoritmo para preparar un vaso de leche con chocolate.", steps: ["1. Sacar el vaso.", "2. Servir la leche.", "3. Agregar el chocolate en polvo.", "4. Revolver con la cuchara."], answer: "Vaso → leche → chocolate → revolver." },
      { problem: "Este algoritmo para sembrar tiene un error: regar, poner la semilla, hacer un hueco, tapar. ¿Cuál es el orden correcto?", steps: ["Primero hay que hacer el hueco.", "Después se pone la semilla y se tapa.", "Al final se riega."], answer: "Hueco → semilla → tapar → regar." }
    ],
    practice: [
      ["¿Qué tiene un buen algoritmo?", "Pasos claros y en orden", ["Pasos al azar", "Un solo dibujo", "Palabras difíciles sin orden"], "La claridad y el orden hacen que funcione."],
      ["¿Cuál es el primer paso para enviar una carta?", "Escribirla", ["Ponerla en el buzón", "Que la lean", "Pegar la estampilla"], "Sin escribirla no hay nada que enviar."],
      ["Algoritmo de lavarse los dientes: crema, cepillar, ___, guardar. ¿Qué falta?", "Enjuagar", ["Comer", "Peinarse", "Dormir"], "Después de cepillar se enjuaga la boca."],
      ["¿Una receta de cocina es un algoritmo?", "Sí, son pasos en orden", ["No, es un dibujo", "No, es un juego", "Solo si es dulce"], "La receta dice qué hacer y en qué orden."],
      ["«Haz algo con la pelota» es una instrucción…", "Poco clara", ["Muy clara", "Perfecta", "Ordenada"], "No dice qué hacer exactamente."],
      ["¿Qué instrucción es más clara para un robot?", "Avanza 3 pasos", ["Ve por ahí", "Muévete un poco", "Haz lo que quieras"], "Dice exactamente qué hacer y cuánto."],
      ["Ordena para ponerse un abrigo: abrochar (A), meter brazos (B), tomar el abrigo (C).", "C, B, A", ["A, B, C", "B, A, C", "C, A, B"], "Tomas, metes los brazos y luego abrochas."],
      ["¿Qué hace un computador con un algoritmo?", "Sigue sus pasos exactamente", ["Lo cambia a su gusto", "Adivina los pasos", "Se salta los difíciles"], "Por eso los pasos deben ser correctos."]
    ]
  },
  "t3c": {
    before: ["Las misiones largas se resuelven mejor por partes: primero un objetivo, luego el siguiente.", "Si algo falla, no empiezas de cero: buscas el paso con error y lo corriges."],
    vocab: [["misión", "Reto con varios objetivos para el robot."], ["depurar", "Encontrar y corregir errores del programa."], ["ejecutar", "Poner a funcionar el programa."], ["subobjetivo", "Una parte pequeña de la misión, como recoger la llave."]],
    worked: [
      { problem: "La misión: recoger la llave y luego abrir la puerta. ¿Cómo la planeas?", steps: ["Divido la misión en dos partes.", "Parte 1: camino del robot hasta la llave.", "Parte 2: camino de la llave hasta la puerta.", "Pruebo cada parte por separado."], answer: "Planear y probar por partes: llave primero, puerta después." },
      { problem: "Tu programa → → ↓ ↓ → hace chocar al robot en el cuarto paso. ¿Qué haces?", steps: ["Ejecuto paso a paso para ver dónde choca.", "El error está en el cuarto paso (↓).", "Cambio solo ese paso y vuelvo a probar."], answer: "Depuro el cuarto paso sin borrar todo." }
    ],
    practice: [
      ["¿Qué es lo primero ante una misión larga?", "Planear", ["Ejecutar sin mirar", "Borrar todo", "Rendirse"], "Planear evita muchos errores."],
      ["El robot debe recoger 2 gemas y llegar a la meta. ¿Cuántas partes tiene la misión?", "3", ["1", "2", "5"], "Gema 1, gema 2 y la meta."],
      ["Si el robot falla en el paso 6 de 10, ¿qué revisas primero?", "El paso 6", ["El paso 1", "Todo desde cero", "Ninguno"], "El error suele estar donde empieza a fallar."],
      ["¿Qué es un «bug»?", "Un error en el programa", ["Un tipo de robot", "Una meta", "Un premio"], "Así se llaman los errores en programación."],
      ["Probar cada parte por separado ayuda a…", "Encontrar errores más rápido", ["Hacer el programa más largo", "Gastar más tiempo", "Ocultar errores"], "Si una parte falla, sabes exactamente cuál."],
      ["Después de corregir un error, ¿qué haces?", "Vuelvo a ejecutar para probar", ["Apago todo", "Agrego errores", "No pruebo nunca"], "Hay que comprobar que la corrección funcionó."],
      ["El robot debe evitar el agua. Su programa lo hace caer al agua en el paso 3. ¿Qué debe hacer el paso 3?", "Rodear el agua", ["Entrar al agua", "Detener el programa", "Volver al inicio"], "Hay que cambiarlo para esquivar el obstáculo."],
      ["Planea, ejecuta y ___. ¿Qué falta?", "Corrige", ["Rompe", "Olvida", "Esconde"], "El ciclo es planear, ejecutar y depurar."]
    ]
  },
  "xtec3a": {
    before: ["Un algoritmo funciona si sus pasos están completos y en el orden correcto.", "Los errores son normales: lo importante es encontrarlos y corregirlos."],
    vocab: [["bug", "Error en un programa o en una lista de pasos."], ["depurar", "Buscar y corregir los errores."], ["paso faltante", "Un paso que se olvidó y hace que todo falle."], ["paso de más", "Un paso que sobra y cambia el resultado."]],
    worked: [
      { problem: "Algoritmo para hacer un sándwich: tomar pan, poner jamón, comer. ¿Qué bug tiene?", steps: ["Reviso paso a paso.", "Después del jamón falta tapar con otro pan.", "Agrego el paso que falta antes de comer."], answer: "Falta «poner el otro pan encima»." },
      { problem: "Algoritmo para cepillarse: cepillar, enjuagar, poner crema. ¿Qué bug tiene?", steps: ["Los pasos están, pero en desorden.", "La crema debe ir antes de cepillar.", "Reordeno los pasos."], answer: "Error de orden: crema → cepillar → enjuagar." }
    ],
    practice: [
      ["Un algoritmo dice: abrir la llave, cepillar, cerrar la llave, ponerse crema. ¿Qué tipo de error tiene?", "De orden", ["De color", "De tamaño", "Ninguno"], "La crema debería ir antes de cepillar."],
      ["Para regar una planta: tomar la regadera, regar. ¿Qué paso falta?", "Llenarla de agua", ["Pintarla", "Romperla", "Guardarla vacía"], "Sin agua no se puede regar."],
      ["Un robot debe avanzar 3 y avanza 4. ¿Qué error hay?", "Un paso de más", ["Un paso faltante", "Ningún error", "Un error de color"], "Sobró un «avanzar»."],
      ["Probar el algoritmo paso a paso ayuda a…", "Encontrar dónde está el error", ["Hacerlo más largo", "Cambiar de tema", "Esconder el error"], "Revisando uno por uno ves cuál falla."],
      ["Después de corregir un bug, debes…", "Probar otra vez", ["Borrar todo", "No volver a mirarlo", "Agregar más pasos al azar"], "Probar confirma que la corrección funcionó."],
      ["El pastel salió crudo. ¿Qué paso de la receta pudo fallar?", "Hornear el tiempo indicado", ["Comprar el molde", "Lavar los platos al final", "Elegir la vela"], "Si no se hornea lo suficiente, queda crudo."],
      ["¿Es malo equivocarse al programar?", "No, es normal y se corrige", ["Sí, hay que dejar de programar", "Sí, nunca debe pasar", "Sí, el computador se daña"], "Hasta los expertos cometen errores y los depuran."],
      ["La palabra «bug» en inglés significa…", "Bicho", ["Botón", "Caja", "Robot"], "Se cuenta que una vez un insecto dañó una computadora antigua."]
    ]
  },
  "xtec3b": {
    before: ["Un atajo es una combinación de teclas que se aprietan al mismo tiempo.", "Primero mantienes Ctrl apretada y luego tocas la letra. En computadores Mac se usa la tecla Cmd (⌘)."],
    vocab: [["atajo", "Combinación de teclas para hacer algo rápido."], ["Ctrl", "Tecla Control, la base de muchos atajos."], ["seleccionar", "Marcar un texto o archivo para trabajar con él."], ["portapapeles", "Lugar invisible donde se guarda lo que copias o cortas."]],
    worked: [
      { problem: "Quieres mover una frase del inicio al final del texto. ¿Qué atajos usas?", steps: ["Selecciono la frase.", "Corto con Ctrl + X: sale del inicio y queda en el portapapeles.", "Pongo el cursor al final.", "Pego con Ctrl + V."], answer: "Ctrl + X y luego Ctrl + V." },
      { problem: "Borraste un párrafo sin querer. ¿Cómo lo recuperas?", steps: ["No toco nada más.", "Aprieto Ctrl + Z para deshacer.", "El párrafo vuelve a aparecer."], answer: "Ctrl + Z (deshacer)." }
    ],
    practice: [
      ["¿Qué atajo copia lo seleccionado?", "Ctrl + C", ["Ctrl + V", "Ctrl + Z", "Ctrl + S"], "C de copiar."],
      ["¿Qué atajo corta lo seleccionado?", "Ctrl + X", ["Ctrl + C", "Ctrl + A", "Ctrl + Z"], "Cortar quita el texto y lo guarda para pegarlo."],
      ["¿Qué atajo guarda tu trabajo?", "Ctrl + S", ["Ctrl + V", "Ctrl + X", "Ctrl + C"], "S de «save», guardar en inglés."],
      ["¿Qué atajo selecciona todo?", "Ctrl + A", ["Ctrl + Z", "Ctrl + S", "Ctrl + V"], "A de «all», todo en inglés."],
      ["¿Qué diferencia hay entre copiar y cortar?", "Cortar quita el original; copiar lo deja", ["Son lo mismo", "Copiar borra todo", "Cortar cambia el color"], "Al cortar, el texto sale de su lugar."],
      ["En un computador Mac, ¿qué tecla reemplaza a Ctrl en los atajos?", "Cmd (⌘)", ["Enter", "Espacio", "Shift"], "En Mac se usa Cmd + C, Cmd + V, etc."],
      ["¿Cómo se aprieta un atajo?", "Mantengo Ctrl y toco la letra", ["Toco la letra y luego Ctrl", "Toco solo la letra", "Toco Ctrl cinco veces"], "Ctrl se mantiene apretada mientras tocas la otra tecla."],
      ["¿Qué debes hacer antes de copiar un texto?", "Seleccionarlo", ["Pegarlo", "Guardarlo", "Imprimirlo"], "El computador copia solo lo que está seleccionado."]
    ]
  },
  "xtec3c": {
    before: ["Un archivo guarda un trabajo: un texto, un dibujo, una canción.", "Las carpetas son como cajas para ordenar los archivos por temas."],
    vocab: [["archivo", "Documento guardado en el computador, como un texto o una foto."], ["carpeta", "Lugar donde se agrupan archivos."], ["extensión", "Letras después del punto que dicen el tipo de archivo, como .txt o .jpg."], ["renombrar", "Cambiar el nombre de un archivo o carpeta."]],
    worked: [
      { problem: "Tienes estos archivos: suma.txt, volcan.jpg, restas.txt. Organízalos.", steps: ["Veo los temas: matemáticas y ciencias.", "Creo la carpeta Matemáticas y pongo suma.txt y restas.txt.", "Creo la carpeta Ciencias y pongo volcan.jpg."], answer: "📁 Matemáticas (suma, restas) · 📁 Ciencias (volcan)." },
      { problem: "Un archivo se llama «aaa2». ¿Cómo lo mejoras?", steps: ["Abro el archivo para ver qué es: un cuento de dragones.", "Pienso un nombre que diga el contenido.", "Lo renombro."], answer: "cuento_dragones" }
    ],
    practice: [
      ["¿Qué guarda un archivo?", "Un trabajo, como un texto o una foto", ["Solo carpetas", "La electricidad", "El teclado"], "Cada archivo contiene un trabajo."],
      ["¿Qué extensión suele tener una foto?", ".jpg", [".txt", ".mp3", ".doc"], ".jpg y .png son formatos de imagen."],
      ["¿Qué extensión suele tener una canción?", ".mp3", [".jpg", ".txt", ".png"], ".mp3 es un formato de audio."],
      ["¿Qué carpeta es buena para un trabajo sobre el sistema solar?", "Ciencias", ["Música", "Educación física", "Juegos"], "El sistema solar es un tema de ciencias."],
      ["¿Se puede poner una carpeta dentro de otra carpeta?", "Sí", ["No, nunca", "Solo si está vacía", "Solo en papel"], "Así se hacen subcarpetas: Colegio → Ciencias."],
      ["Cambiar el nombre de un archivo es…", "Renombrarlo", ["Borrarlo", "Copiarlo", "Imprimirlo"], "Renombrar es poner un nombre nuevo."],
      ["¿Qué nombre de carpeta es más claro?", "Fotos_paseo_2025", ["Carpeta nueva (3)", "xxx", "asdf"], "Dice qué hay dentro y de cuándo es."],
      ["¿Para qué sirve ordenar los archivos en carpetas?", "Para encontrarlos rápido", ["Para que pesen menos", "Para borrarlos", "Para que se dañen"], "Con orden no pierdes tiempo buscando."]
    ]
  },
  "xtec3d": {
    before: ["Internet es una red que une millones de computadores en todo el mundo.", "Para navegar usas un navegador, y siempre es mejor con un adulto cerca."],
    vocab: [["internet", "Red mundial que conecta computadores."], ["navegador", "Programa para ver páginas web."], ["página web", "Documento en internet con textos, imágenes y enlaces."], ["dirección web", "Nombre de una página, como www.ejemplo.com."], ["wifi", "Conexión a internet sin cables."]],
    worked: [
      { problem: "Quieres entrar a la página del museo que te dio tu profe. ¿Cómo lo haces?", steps: ["Abro el navegador.", "Escribo la dirección web en la barra de direcciones.", "Aprieto Enter y la página se abre."], answer: "Navegador → escribir la dirección → Enter." },
      { problem: "Aparece una ventana que dice «¡Descarga este juego gratis!». ¿Qué haces?", steps: ["No sé si es seguro.", "No hago clic.", "Le pregunto a un adulto."], answer: "No hago clic y pregunto a un adulto." }
    ],
    practice: [
      ["¿Qué es internet?", "Una red que conecta computadores del mundo", ["Un solo computador", "Un tipo de teclado", "Un juego"], "Internet une millones de equipos."],
      ["¿Dónde escribes la dirección de una página?", "En la barra de direcciones", ["En el ratón", "En la impresora", "En la pantalla apagada"], "Está en la parte de arriba del navegador."],
      ["¿Qué es el wifi?", "Una conexión a internet sin cables", ["Un cable largo", "Un programa de dibujo", "Una tecla"], "El wifi lleva internet por ondas."],
      ["¿Cuál es una dirección web?", "www.ejemplo.com", ["Calle 10 #5-20", "3001234567", "Hola mundo"], "Las direcciones web tienen un formato como www.nombre.com."],
      ["¿Qué botón del navegador te lleva a la página anterior?", "La flecha de atrás", ["El botón de apagar", "La tecla Shift", "El botón de imprimir"], "La flecha ← regresa a lo que veías antes."],
      ["Una página te pide tu nombre completo y dirección. ¿Qué haces?", "Le pregunto a un adulto antes", ["Los escribo de una vez", "Invento datos de otro", "Doy también mi teléfono"], "Tus datos son privados."],
      ["¿Qué es una página web?", "Un documento en internet con textos e imágenes", ["Una hoja de cuaderno", "Un cable", "Un enchufe"], "Las páginas web se ven en el navegador."],
      ["Para buscar información en internet sirve…", "Un buscador", ["Una calculadora de bolsillo", "Una regla", "Un sacapuntas"], "Los buscadores encuentran páginas con lo que pides."]
    ]
  },
  "xtec3e": {
    before: ["La contraseña es la llave secreta de tus cuentas.", "Cuanto más larga y variada, más difícil es de adivinar."],
    vocab: [["contraseña", "Palabra o frase secreta para entrar a una cuenta."], ["símbolo", "Carácter especial, como # ! @ $."], ["frase de contraseña", "Varias palabras unidas que forman una clave larga y fácil de recordar."], ["cuenta", "Tu espacio personal en un juego, correo o aplicación."]],
    worked: [
      { problem: "Convierte «gatoazul» en una contraseña más fuerte.", steps: ["Agrego otra palabra: gatoazul + nube.", "Pongo mayúsculas: GatoAzulNube.", "Agrego número y símbolo: GatoAzul7Nube!"], answer: "GatoAzul7Nube!" },
      { problem: "Tu amigo dice que su contraseña es su fecha de cumpleaños. ¿Es buena?", steps: ["Muchas personas conocen su cumpleaños.", "Además es corta y solo tiene números.", "Es fácil de adivinar."], answer: "No es buena: es un dato que otros conocen." }
    ],
    practice: [
      ["¿Qué contraseña es más débil?", "abc123", ["Rio!Verde42Casa", "Tigre#Sol8Pan", "Mar9Luna$Pino"], "abc123 es corta y muy común."],
      ["¿Qué hace más fuerte una contraseña?", "Ser larga y mezclar caracteres", ["Ser tu nombre", "Ser 1111", "Ser corta"], "Larga y variada es difícil de adivinar."],
      ["¿Es buena idea usar tu nombre como contraseña?", "No, es fácil de adivinar", ["Sí, es seguro", "Sí, si es corto", "Sí, con minúsculas"], "Tu nombre lo conoce mucha gente."],
      ["¿Cuál es un mal lugar para guardar tu contraseña?", "Un papel pegado a la pantalla", ["Tu memoria", "Una libreta que guardan tus padres", "Un gestor de contraseñas que configura un adulto"], "Cualquiera que pase podría verla."],
      ["¿Es buena idea usar la misma contraseña para todo?", "No, si la descubren entran a todo", ["Sí, es más fácil", "Sí, siempre", "Sí, si es corta"], "Lo ideal es una distinta para cada cuenta."],
      ["¿Cuál es un símbolo?", "#", ["A", "7", "m"], "# es un símbolo; A y m son letras y 7 es número."],
      ["Un amigo te pide tu contraseña para ayudarte en el juego. ¿Qué haces?", "No se la doy", ["Se la doy", "Se la escribo en un papel", "La publico"], "Ni a los amigos se les da la contraseña."],
      ["Crees que alguien conoce tu contraseña. ¿Qué haces?", "La cambio con ayuda de un adulto", ["La dejo igual", "La comparto con más gente", "Borro el computador"], "Cambiarla protege tu cuenta."]
    ]
  },
  "xtec3f": {
    before: ["La energía eléctrica se produce en centrales y llega a casa por cables; producirla cuesta dinero y recursos.", "Ahorrar energía es usar solo la que necesitamos."],
    vocab: [["energía eléctrica", "Electricidad que hace funcionar aparatos."], ["ahorrar", "Usar menos para no desperdiciar."], ["LED", "Tipo de bombilla que gasta poca energía."], ["desconectar", "Sacar el enchufe para que el aparato no gaste."]],
    worked: [
      { problem: "Terminaste de cargar el celular. ¿Qué haces con el cargador?", steps: ["El cargador conectado sigue gastando un poco.", "Le pido a un adulto que lo desconecte (o lo hago con manos secas, si me enseñaron).", "Así no hay gasto sin uso."], answer: "Desconectarlo del enchufe." },
      { problem: "Es de día y el cuarto está oscuro con la luz prendida. ¿Cómo ahorras?", steps: ["Afuera hay luz del sol.", "Abro las cortinas.", "Apago la bombilla."], answer: "Abrir las cortinas y apagar la luz." }
    ],
    practice: [
      ["¿Qué gasta energía sin necesidad?", "Un televisor prendido sin nadie", ["Una luz apagada", "Un cargador desconectado", "Una cortina abierta"], "Si nadie lo usa, mejor apagarlo."],
      ["¿Qué hacer con la puerta de la nevera?", "Abrirla poco y cerrarla rápido", ["Dejarla abierta", "Abrirla cada minuto", "Quitarla"], "Si se abre mucho, se escapa el frío y gasta más."],
      ["¿Qué ayuda a ahorrar energía de día?", "Usar la luz del sol", ["Prender todas las luces", "Cerrar las cortinas", "Dejar el horno prendido"], "La luz natural es gratis."],
      ["¿Por qué ahorrar energía cuida el planeta?", "Se usan menos recursos para producirla", ["Porque llueve más", "Porque crecen las montañas", "No lo cuida"], "Producir electricidad usa recursos y puede contaminar."],
      ["¿Qué aparato conviene apagar al salir de la habitación?", "La luz y el ventilador", ["La nevera", "El reloj de la pared", "Nada"], "Si no hay nadie, no se necesitan."],
      ["Secar la ropa al sol en vez de en secadora…", "Ahorra energía", ["Gasta más", "Daña la ropa siempre", "No cambia nada"], "El sol y el viento secan gratis."],
      ["¿Qué bombilla es más eficiente?", "LED", ["Incandescente antigua", "Una vela", "Una linterna de pilas gastadas"], "Las LED gastan mucho menos."],
      ["Ahorrar energía también ayuda a la familia a…", "Pagar menos en la factura", ["Pagar más", "Tener más cables", "Necesitar más enchufes"], "Menos consumo, menos dinero."]
    ]
  },
  "xtec3g": {
    before: ["Leer bien es leer con un propósito: saber qué buscas en el texto.", "En las historias sobre tecnología fíjate en qué hicieron bien y mal los personajes."],
    vocab: [["personaje", "Quien participa en la historia."], ["problema", "La dificultad que aparece en la historia."], ["solución", "Cómo se resuelve el problema."], ["detalle", "Dato pequeño del texto que ayuda a entender."]],
    worked: [
      { problem: "En un cuento, Tomás anota su contraseña en un papel pegado al computador y su cuenta es robada. ¿Cuál es el problema?", steps: ["Busco qué salió mal.", "La contraseña estaba a la vista.", "Alguien la vio y entró a su cuenta."], answer: "Dejó su contraseña a la vista de todos." },
      { problem: "En otra historia, un robot no llega a la meta y su dueña revisa los pasos uno por uno. ¿Qué hizo bien?", steps: ["Busco la acción de la dueña.", "Revisó paso a paso para encontrar el error.", "Eso se llama depurar."], answer: "Depuró el programa paso a paso." }
    ],
    practice: [
      ["¿Qué haces antes de leer un cuento?", "Leo el título y pienso de qué trata", ["Leo solo el final", "Lo cierro", "Respondo sin leer"], "Predecir te ayuda a leer con atención."],
      ["Un personaje comparte su contraseña con un desconocido. ¿Hizo bien?", "No, la contraseña es secreta", ["Sí, siempre", "Sí, si el otro es amable", "Sí, en los juegos"], "Las contraseñas no se comparten."],
      ["¿Qué es la solución en una historia?", "Cómo se resuelve el problema", ["El título", "El primer personaje", "El dibujo"], "La solución termina con el problema."],
      ["¿Qué es un detalle del texto?", "Un dato pequeño que ayuda a entender", ["El nombre del libro solamente", "Algo que inventas tú", "La portada"], "Los detalles están escritos en el texto."],
      ["Si no recuerdas qué pasó en la historia, ¿qué haces?", "Vuelvo a leer esa parte", ["Invento la respuesta", "Copio al compañero", "Dejo en blanco"], "La respuesta está en el texto."],
      ["En la historia, un robot choca porque le faltó un paso. ¿Qué aprendes?", "Que los pasos deben estar completos", ["Que los robots son malos", "Que no hay que programar", "Que los pasos sobran"], "Un paso faltante causa errores."],
      ["Relacionar la lectura con tu vida es…", "Pensar qué harías tú en esa situación", ["Copiar el texto", "Leer solo el título", "Borrar el cuento"], "Así aplicas lo que aprendiste."],
      ["Después de leer, contar la historia con tus palabras sirve para…", "Comprobar que la entendiste", ["Olvidarla", "Hacerla más larga", "Cambiar el final"], "Si puedes contarla, la comprendiste."]
    ]
  },
  /* ===== 4.º ===== */
  "t4a": {
    before: ["Una máquina simple tiene pocas o ninguna pieza móvil y nos ayuda a hacer fuerza más fácil.", "Las cinco más conocidas son la palanca, la polea, la rueda con eje, el plano inclinado y la cuña; el tornillo también se considera máquina simple."],
    vocab: [["palanca", "Barra que gira sobre un punto de apoyo para levantar cargas."], ["punto de apoyo", "Lugar fijo sobre el que gira la palanca."], ["polea", "Rueda con una cuerda para subir cargas."], ["plano inclinado", "Rampa para subir objetos con menos fuerza."], ["cuña", "Pieza en forma de V que separa o corta, como el hacha."]],
    worked: [
      { problem: "Quieres subir una caja pesada a un camión. ¿Qué máquina simple usas?", steps: ["Levantarla derecho requiere mucha fuerza.", "Una rampa permite subirla poco a poco.", "La rampa es un plano inclinado."], answer: "Un plano inclinado (rampa)." },
      { problem: "Con una palanca, ¿es más fácil levantar la carga si empujas lejos o cerca del punto de apoyo?", steps: ["La palanca multiplica la fuerza según la distancia.", "Mientras más lejos del apoyo empujas, menos fuerza necesitas.", "Por eso las palancas largas ayudan más."], answer: "Lejos del punto de apoyo." }
    ],
    practice: [
      ["¿Qué máquina simple es el hacha?", "Cuña", ["Polea", "Palanca", "Rueda y eje"], "El filo en V separa la madera."],
      ["¿Qué máquina simple usa un pozo para subir el balde?", "Polea", ["Cuña", "Plano inclinado", "Tornillo"], "La cuerda pasa por una rueda y sube el balde."],
      ["Unas tijeras están formadas por dos…", "Palancas", ["Poleas", "Ruedas", "Rampas"], "Cada hoja gira sobre el tornillo central, que es el apoyo."],
      ["La perilla de una puerta funciona como…", "Rueda y eje", ["Cuña", "Polea", "Plano inclinado"], "Al girar la perilla gira el eje que mueve el pestillo."],
      ["¿Qué máquina simple es un clavo?", "Cuña", ["Polea", "Palanca", "Rueda y eje"], "Su punta en forma de cuña se abre paso en la madera."],
      ["Un camino que sube en zigzag por la montaña es un…", "Plano inclinado", ["Polea", "Tornillo de banco", "Engranaje"], "Es una rampa larga que reduce la fuerza para subir."],
      ["¿Para qué sirven las máquinas simples?", "Para hacer un trabajo con menos fuerza", ["Para gastar electricidad", "Para hacer ruido", "Para complicar el trabajo"], "Cambian la fuerza o su dirección."],
      ["¿Qué necesitan las máquinas simples para funcionar?", "Fuerza de una persona, animal u otra fuente", ["Siempre electricidad", "Internet", "Pilas"], "Muchas funcionan solo con la fuerza que les aplicas."],
      ["En un destapador de botellas, el punto de apoyo es…", "El borde que se apoya en la tapa", ["La botella entera", "Tu mano", "El líquido"], "El destapador es una palanca que gira sobre ese borde."]
    ]
  },
  "t4b": {
    before: ["La energía no se crea ni se destruye: se transforma de una forma a otra.", "Los artefactos toman una forma de energía (casi siempre eléctrica) y la convierten en luz, calor, movimiento o sonido."],
    vocab: [["energía eléctrica", "Energía de la corriente que llega por cables o de pilas."], ["energía térmica", "Energía en forma de calor."], ["energía mecánica", "Energía del movimiento."], ["energía química", "Energía guardada en pilas, comida o combustibles."], ["eficiente", "Que desperdicia poca energía."]],
    worked: [
      { problem: "¿Qué transformación hace un ventilador?", steps: ["Entra electricidad.", "El motor hace girar las aspas.", "El giro es movimiento (también sale un poco de calor y sonido)."], answer: "Eléctrica → mecánica (movimiento)." },
      { problem: "¿Qué transformación hace un parlante?", steps: ["Recibe electricidad.", "La membrana vibra.", "La vibración produce sonido."], answer: "Eléctrica → sonora." }
    ],
    practice: [
      ["¿En qué transforma la electricidad una bombilla?", "Luz (y algo de calor)", ["Sonido", "Movimiento", "Comida"], "La bombilla da luz y también se calienta un poco."],
      ["¿En qué transforma la electricidad una licuadora?", "Movimiento", ["Luz", "Frío", "Agua"], "Su motor hace girar las cuchillas."],
      ["¿En qué transforma la electricidad un timbre?", "Sonido", ["Calor", "Luz", "Viento"], "El timbre produce un sonido."],
      ["Un panel solar transforma…", "Luz en electricidad", ["Electricidad en luz", "Calor en frío", "Agua en viento"], "Capta la luz del sol y produce electricidad."],
      ["En una linterna de pilas, la energía empieza como…", "Química", ["Eólica", "Mecánica", "Sonora"], "La pila guarda energía química."],
      ["¿Qué artefacto transforma electricidad en calor?", "El horno eléctrico", ["El parlante", "El ventilador", "El televisor sin sonido"], "Su función principal es calentar."],
      ["¿Por qué un cargador se calienta un poco?", "Parte de la energía se pierde como calor", ["Porque está enfermo", "Porque tiene fuego", "Porque es de noche"], "Ninguna transformación es perfecta; siempre se escapa calor."],
      ["Un molino de viento transforma…", "El movimiento del viento en energía útil", ["Luz en sonido", "Agua en luz", "Calor en hielo"], "El viento mueve las aspas y se genera energía."]
    ]
  },
  "t4c": {
    before: ["Un laberinto largo se resuelve mejor por tramos.", "Si un movimiento se repite muchas veces seguidas, puedes escribirlo con REPETIR."],
    vocab: [["tramo", "Parte del camino entre dos puntos."], ["REPETIR", "Bloque que hace las mismas instrucciones varias veces."], ["descomponer", "Dividir un problema grande en partes pequeñas."], ["callejón sin salida", "Camino que no lleva a ninguna parte."]],
    worked: [
      { problem: "Escribe en forma corta: ↓ ↓ ↓ ↓ → → →.", steps: ["Cuento las flechas ↓: son 4.", "Cuento las flechas →: son 3.", "Uso REPETIR para cada grupo."], answer: "REPETIR 4 [↓], REPETIR 3 [→]" },
      { problem: "Un laberinto tiene un punto de control a mitad de camino. ¿Cómo lo resuelves?", steps: ["Tramo 1: del inicio al punto de control.", "Programo y pruebo ese tramo.", "Tramo 2: del punto de control a la meta.", "Programo, pruebo y uno los dos."], answer: "Dividir en dos tramos y probar cada uno." }
    ],
    practice: [
      ["REPETIR 3 [↑] es lo mismo que…", "↑ ↑ ↑", ["↑", "↑ ↑", "↑ ↑ ↑ ↑"], "Repite la flecha 3 veces."],
      ["→ → ↓ → → ↓ se puede escribir como…", "REPETIR 2 [→ → ↓]", ["REPETIR 6 [→]", "REPETIR 2 [→ ↓]", "REPETIR 3 [→ → ↓]"], "El grupo → → ↓ se repite dos veces."],
      ["¿Qué es descomponer un problema?", "Dividirlo en partes pequeñas", ["Romper el computador", "Borrar el programa", "Hacerlo más difícil"], "Las partes pequeñas son más fáciles de resolver."],
      ["Encuentras un callejón sin salida. ¿Qué haces?", "Regreso y pruebo otro camino", ["Me quedo ahí", "Atravieso la pared", "Apago el juego"], "Hay que buscar otra ruta."],
      ["REPETIR 4 [→ ↓] tiene en total…", "8 movimientos", ["4 movimientos", "6 movimientos", "2 movimientos"], "Cada repetición tiene 2 movimientos: 4 × 2 = 8."],
      ["¿Por qué usar REPETIR?", "Hace el programa más corto y claro", ["Hace el robot más lento", "Agrega errores", "No sirve"], "Menos bloques, más fácil de leer."],
      ["Probar el programa por tramos ayuda a…", "Saber en qué parte está el error", ["Gastar batería", "Hacer el laberinto más largo", "Ocultar los errores"], "Si un tramo falla, sabes dónde corregir."],
      ["Antes de programar un laberinto largo conviene…", "Observar todo el laberinto", ["Mover al azar", "Cerrar los ojos", "Empezar por la meta sin mirar"], "Mirar el mapa completo ayuda a planear."]
    ]
  },
  "xtec4a": {
    before: ["Un bucle repite instrucciones un número de veces o mientras algo pase.", "Un condicional pregunta algo que puede ser verdadero o falso y decide qué hacer."],
    vocab: [["bucle", "Instrucción que repite otras instrucciones."], ["condicional", "Instrucción SI… ENTONCES… que decide según una condición."], ["condición", "Pregunta que puede ser verdadera o falsa."], ["SI NO", "Lo que se hace cuando la condición es falsa."]],
    worked: [
      { problem: "Dibuja un triángulo con un bucle. ¿Cuántas veces repites y cuánto giras?", steps: ["Un triángulo tiene 3 lados.", "Para cerrar la figura el robot gira 360° en total.", "360 ÷ 3 = 120° en cada vuelta."], answer: "REPETIR 3: avanzar y girar 120°." },
      { problem: "Escribe un condicional para el semáforo peatonal.", steps: ["Condición: ¿el muñeco está en verde?", "Si es verdadero: cruzo.", "Si es falso: espero."], answer: "SI muñeco verde ENTONCES cruzar, SI NO esperar." }
    ],
    practice: [
      ["REPETIR 5 [saltar]. ¿Cuántas veces salta?", "5", ["1", "4", "10"], "El bucle repite el salto 5 veces."],
      ["En «SI hace frío ENTONCES abrigo», la condición es…", "Hace frío", ["Abrigo", "ENTONCES", "SI"], "La condición es la pregunta: ¿hace frío?"],
      ["Una condición solo puede ser…", "Verdadera o falsa", ["Roja o azul", "Grande o pequeña", "Rápida o lenta"], "El condicional revisa si es verdadero o falso."],
      ["«SI tengo hambre ENTONCES como, SI NO juego». No tengo hambre. ¿Qué hago?", "Juego", ["Como", "Las dos cosas", "Nada"], "La condición es falsa, así que se hace lo de SI NO."],
      ["REPETIR 3 [aplaudir 2 veces]. ¿Cuántos aplausos hay?", "6", ["3", "5", "2"], "3 repeticiones × 2 aplausos = 6."],
      ["¿Qué figura dibuja REPETIR 6: avanzar y girar 60°?", "Un hexágono", ["Un cuadrado", "Un triángulo", "Un círculo perfecto"], "6 lados iguales y 6 × 60° = 360°."],
      ["Un robot repite «avanzar» hasta tocar una pared. Eso combina…", "Un bucle y una condición", ["Solo un dibujo", "Una variable de puntos", "Nada"], "Repite mientras la condición (no hay pared) se cumple."],
      ["¿Cuál es un bucle de la vida diaria?", "Subir escalón por escalón hasta el final", ["Comer una vez", "Abrir una puerta", "Decir hola"], "Repites el mismo paso varias veces."]
    ]
  },
  "xtec4b": {
    before: ["Los computadores solo entienden dos estados: encendido (1) y apagado (0).", "En binario cada posición vale el doble que la de su derecha: 1, 2, 4, 8, 16…"],
    vocab: [["binario", "Sistema de números que solo usa 0 y 1."], ["bit", "Cada 0 o 1; la unidad más pequeña de información."], ["byte", "Grupo de 8 bits."], ["valor de posición", "Lo que vale un dígito según el lugar donde está."]],
    worked: [
      { problem: "¿Cuánto vale 101 en binario?", steps: ["Las posiciones valen 4, 2, 1 (de izquierda a derecha).", "Hay 1 en el 4, 0 en el 2 y 1 en el 1.", "Sumo: 4 + 0 + 1."], answer: "101 = 5" },
      { problem: "Escribe el número 6 en binario.", steps: ["Las posiciones valen 4, 2, 1.", "6 = 4 + 2.", "Pongo 1 en el 4, 1 en el 2 y 0 en el 1."], answer: "6 = 110" }
    ],
    practice: [
      ["¿Cuánto vale 10 en binario?", "2", ["10", "1", "3"], "1 en la posición del 2 y 0 en la del 1: 2."],
      ["¿Cuánto vale 111 en binario?", "7", ["3", "6", "111"], "4 + 2 + 1 = 7."],
      ["¿Cuánto vale 1000 en binario?", "8", ["4", "16", "1000"], "La cuarta posición vale 8."],
      ["¿Cómo se escribe 5 en binario?", "101", ["110", "111", "100"], "5 = 4 + 1."],
      ["¿Cuántos bits tiene un byte?", "8", ["2", "10", "16"], "Un byte son 8 bits."],
      ["¿Cuánto vale 1010 en binario?", "10", ["5", "12", "1010"], "8 + 2 = 10."],
      ["¿Qué dígitos usa el sistema binario?", "Solo 0 y 1", ["Del 0 al 9", "Solo 1 y 2", "Letras y números"], "Bi significa dos: dos dígitos."],
      ["En binario, la posición después del 8 vale…", "16", ["9", "10", "12"], "Cada posición es el doble: 8 × 2 = 16."],
      ["¿Qué número es mayor: 110 o 11 en binario?", "110", ["11", "Son iguales", "No se puede saber"], "110 = 6 y 11 = 3."]
    ]
  },
  "xtec4c": {
    before: ["Un buscador encuentra páginas usando las palabras que escribes.", "No todo lo que aparece es verdad: hay que revisar quién lo escribió y comparar fuentes."],
    vocab: [["buscador", "Herramienta para encontrar información en internet."], ["palabras clave", "Las palabras más importantes de lo que buscas."], ["fuente", "Lugar de donde sale la información."], ["confiable", "Que podemos creer porque es seria y comprobable."], ["anuncio", "Publicidad pagada que aparece entre los resultados."]],
    worked: [
      { problem: "Quieres saber qué comen los colibríes. ¿Qué escribes en el buscador?", steps: ["La pregunta completa es larga.", "Elijo las palabras más importantes.", "Escribo «colibrí alimentación»."], answer: "Palabras clave: colibrí alimentación." },
      { problem: "Una página dice que los tiburones son mamíferos. ¿Cómo lo compruebas?", steps: ["Miro quién escribió la página.", "Busco la información en un museo o enciclopedia.", "Comparo: las fuentes serias dicen que son peces."], answer: "Comparar con 2 o 3 fuentes confiables: son peces." }
    ],
    practice: [
      ["¿Cuáles son buenas palabras clave para saber la altura del Aconcagua?", "Aconcagua altura", ["Hola quiero saber cosas", "Montaña bonita grande", "Por favor dime"], "Las palabras clave van al grano."],
      ["Para una tarea de ciencias, ¿dónde conviene consultar?", "Una enciclopedia reconocida", ["Un comentario anónimo", "Un meme", "Un mensaje en cadena"], "Las enciclopedias revisan sus datos."],
      ["Un resultado tiene la palabra «Anuncio» o «Patrocinado». ¿Qué significa?", "Es publicidad pagada", ["Es la mejor respuesta", "Es del gobierno siempre", "Es un virus seguro"], "Los anuncios buscan venderte algo."],
      ["Si dos páginas serias dicen lo mismo y una desconocida dice otra cosa…", "Creo más a las páginas serias", ["Creo a la desconocida", "No creo a nadie", "Lo invento"], "Comparar fuentes ayuda a encontrar la verdad."],
      ["¿Qué pista muestra que una página puede no ser confiable?", "No dice quién la escribió", ["Tiene autor y fecha", "Es de una universidad", "Cita sus fuentes"], "Sin autor no sabemos si es seria."],
      ["¿Para qué sirve ser específico en la búsqueda?", "Para obtener resultados más útiles", ["Para tener menos internet", "Para que el buscador se apague", "No sirve"], "Más preciso, mejores resultados."],
      ["¿Por qué revisar la fecha de una página?", "Para saber si la información está actualizada", ["Para saber su color", "Para saber cuánto pesa", "No importa"], "Algunos datos cambian con el tiempo."],
      ["Copiar un texto de internet en tu tarea sin decir de dónde salió es…", "Incorrecto: debes citar la fuente", ["Correcto siempre", "Obligatorio", "Lo mejor"], "Hay que decir de dónde viene la información."]
    ]
  },
  "xtec4d": {
    before: ["La huella digital es el rastro de todo lo que haces y publicas en internet.", "Lo que publicas puede copiarse y durar años, así que piensa antes de compartir."],
    vocab: [["huella digital", "Rastro que dejas con tus publicaciones y actividad en línea."], ["publicar", "Poner algo en internet para que otros lo vean."], ["privacidad", "Control sobre quién ve tu información."], ["captura de pantalla", "Foto de lo que se ve en la pantalla."]],
    worked: [
      { problem: "Estás enojado y quieres escribir un comentario grosero. ¿Qué haces?", steps: ["Me pregunto: ¿me gustaría que mi abuela lo leyera?", "No: dejaría una huella negativa.", "Espero a calmarme y no lo publico."], answer: "No lo publico; respiro y hablo después con calma." },
      { problem: "¿Por qué una foto «que se borra en 24 horas» puede seguir existiendo?", steps: ["Cualquiera puede hacer una captura de pantalla.", "La captura queda guardada en otro aparato.", "Puede compartirse aunque tú borres la original."], answer: "Porque alguien pudo guardarla con una captura." }
    ],
    practice: [
      ["¿Qué es la huella digital?", "El rastro de lo que haces en internet", ["La marca de tu dedo en la pantalla", "Un tipo de virus", "Una contraseña"], "Cada publicación, comentario o «me gusta» deja rastro."],
      ["¿Qué publicación construye una huella positiva?", "Compartir un dibujo que hiciste, con permiso", ["Burlarte de alguien", "Publicar tu dirección", "Subir la foto de otro sin permiso"], "Lo creativo y respetuoso suma."],
      ["Antes de publicar algo, ¿qué te preguntas?", "¿Me sentiría bien si lo viera mi familia o un profesor?", ["¿Cuántos «me gusta» tendrá?", "¿Lo verá alguien?", "Nada"], "Es la regla de la abuela."],
      ["¿Es buena idea publicar fotos de tu casa con el número visible?", "No, revela dónde vives", ["Sí, siempre", "Sí, si es bonita", "Sí, con filtros"], "Esos detalles dan tu dirección."],
      ["¿Puedes publicar una foto de un amigo sin preguntarle?", "No, primero le pides permiso", ["Sí, siempre", "Sí, si sale feo", "Sí, si es gracioso"], "Cada persona decide sobre sus fotos."],
      ["¿Qué es una captura de pantalla?", "Una foto de lo que se ve en la pantalla", ["Un virus", "Un juego", "Un cable"], "Con ella alguien puede guardar lo que publicaste."],
      ["En el futuro, ¿quién podría ver lo que publicas hoy?", "Profesores, colegios o empleadores", ["Nadie nunca", "Solo tú", "Solo los robots"], "Lo publicado puede encontrarse años después."],
      ["¿Qué ayuda a controlar quién ve tus publicaciones?", "Configurar la privacidad con un adulto", ["Publicar más", "Usar mayúsculas", "Aceptar a todos"], "La privacidad limita quién te ve."]
    ]
  },
  "xtec4e": {
    before: ["Un mecanismo es un conjunto de piezas que pasa el movimiento de un lugar a otro.", "Algunos mecanismos cambian la velocidad, la fuerza o la dirección del movimiento."],
    vocab: [["engranaje", "Rueda con dientes que encaja con otra para transmitir el giro."], ["polea con correa", "Dos ruedas unidas por una banda que gira."], ["cadena", "Eslabones que unen dos ruedas dentadas, como en la bicicleta."], ["manivela", "Brazo que se gira con la mano para mover un eje."]],
    worked: [
      { problem: "Un engranaje grande mueve uno pequeño. ¿Cuál gira más rápido?", steps: ["El grande tiene más dientes.", "Cada vuelta del grande hace dar varias vueltas al pequeño.", "El pequeño da más vueltas en el mismo tiempo."], answer: "El pequeño gira más rápido." },
      { problem: "Tres engranajes en fila: el primero gira a la derecha. ¿Hacia dónde gira el tercero?", steps: ["El segundo gira al contrario del primero: izquierda.", "El tercero gira al contrario del segundo: derecha.", "Se alternan los sentidos."], answer: "A la derecha, igual que el primero." }
    ],
    practice: [
      ["¿Qué mecanismo usa un sacapuntas de manivela?", "Manivela", ["Polea con correa", "Cadena de bicicleta", "Plano inclinado"], "Giras el brazo y el eje mueve las cuchillas."],
      ["Dos poleas unidas por una correa giran…", "En el mismo sentido", ["En sentidos contrarios", "No giran", "Solo una gira"], "La correa no se cruza, así que giran igual."],
      ["¿Qué tienen los engranajes?", "Dientes", ["Cuerdas", "Alas", "Ruedas lisas"], "Los dientes encajan entre sí."],
      ["En una bicicleta, si el plato de los pedales es grande y el piñón de atrás es pequeño…", "La rueda gira más rápido que los pedales", ["La rueda no gira", "Los pedales giran más rápido", "Va hacia atrás"], "Cada pedalada da varias vueltas a la rueda."],
      ["¿Qué hace un mecanismo?", "Transmite y transforma el movimiento", ["Produce electricidad siempre", "Guarda datos", "Da luz"], "Pasa el movimiento de una pieza a otra."],
      ["¿Dónde encuentras engranajes?", "En un reloj de agujas", ["En una hoja de papel", "En un vaso", "En una almohada"], "Los relojes mecánicos tienen muchos engranajes."],
      ["Una manivela sirve para…", "Girar un eje con la mano", ["Medir la temperatura", "Cortar papel", "Pegar cosas"], "Es el brazo que giras."],
      ["Si quieres más fuerza para subir una cuesta en bicicleta, usas…", "Un plato pequeño adelante", ["Un plato enorme adelante", "Ninguna cadena", "Frenos"], "Con plato pequeño pedaleas más fácil, aunque vas más lento."]
    ]
  },
  "xtec4f": {
    before: ["Los inventos nacen de un problema real que alguien quiere resolver.", "El proceso de diseño es un ciclo: si la prueba falla, se mejora y se vuelve a probar."],
    vocab: [["problema", "Situación que queremos mejorar."], ["prototipo", "Primer modelo para probar una idea."], ["boceto", "Dibujo rápido de la idea."], ["probar", "Usar el prototipo para ver si funciona."], ["mejorar", "Hacer cambios para que funcione mejor."]],
    worked: [
      { problem: "Las plantas del salón se secan los fines de semana. Aplica el proceso de diseño.", steps: ["Problema: nadie riega los fines de semana.", "Idea: una botella que gotee despacio.", "Construyo el prototipo con una botella con un hueco pequeño.", "Pruebo un fin de semana: gotea muy rápido.", "Mejoro: hago el hueco más pequeño."], answer: "Un riego por goteo con botella, mejorado tras probar." },
      { problem: "Tu puente de palitos se dobla con una carga. ¿Qué haces?", steps: ["La prueba mostró un problema.", "Pienso qué lo hace débil: falta apoyo en el centro.", "Agrego triángulos o un apoyo y pruebo de nuevo."], answer: "Mejorar el diseño y volver a probar." }
    ],
    practice: [
      ["¿Qué paso va después de planear?", "Construir", ["Identificar el problema", "Mejorar", "Rendirse"], "Planear → construir → probar → mejorar."],
      ["¿Qué es un boceto?", "Un dibujo rápido de la idea", ["El producto final", "Una prueba", "Un error"], "Ayuda a planear antes de construir."],
      ["Si el prototipo falla en la prueba, ¿qué haces?", "Lo mejoro y vuelvo a probar", ["Lo boto y me rindo", "Digo que funcionó", "No hago nada"], "Fallar en la prueba da información para mejorar."],
      ["¿Cuál es un buen problema para diseñar una solución?", "Los lápices se caen del pupitre", ["Me gusta el azul", "Hoy es martes", "El cielo es grande"], "Es una situación concreta que se puede mejorar."],
      ["¿Por qué se prueba un prototipo?", "Para ver si resuelve el problema", ["Para venderlo enseguida", "Para romperlo a propósito", "Por diversión solamente"], "La prueba muestra qué funciona y qué no."],
      ["El proceso de diseño es un ciclo porque…", "Se puede repetir hasta que funcione", ["Tiene forma de rueda", "Se hace una sola vez", "Nunca termina en nada"], "Probar y mejorar se repite varias veces."],
      ["Para planear, ¿qué conviene hacer?", "Pensar materiales y hacer un boceto", ["Construir sin pensar", "Copiar sin entender", "Esperar sin hacer nada"], "Un buen plan ahorra tiempo y materiales."],
      ["Escuchar lo que opinan otros sobre tu invento sirve para…", "Encontrar ideas para mejorarlo", ["Nada", "Pelear", "Abandonarlo"], "Las opiniones ayudan a mejorar."]
    ]
  },
  /* ===== 5.º ===== */
  "t5a": {
    before: ["Un ciudadano digital usa internet con respeto, responsabilidad y seguridad.", "Las mismas reglas de convivencia de la vida real se aplican en línea."],
    vocab: [["ciudadano digital", "Persona que participa en internet de forma responsable."], ["plagio", "Presentar como tuyo el trabajo de otra persona."], ["derechos de autor", "Derechos que tiene quien crea una obra sobre su uso."], ["citar", "Decir de dónde tomaste una información."]],
    worked: [
      { problem: "Usas una foto de un sitio web para tu presentación. ¿Qué haces bien?", steps: ["Reviso si la foto se puede usar libremente.", "Escribo debajo el autor o el sitio de donde salió.", "Así reconozco el trabajo de otra persona."], answer: "Uso imágenes permitidas y cito la fuente." },
      { problem: "Te llega un mensaje alarmante: «¡Mañana no habrá clases en todo el país!». ¿Qué haces?", steps: ["No lo reenvío enseguida.", "Busco si un medio o el colegio lo confirma.", "Si no está confirmado, no lo comparto."], answer: "Verificar antes de compartir." }
    ],
    practice: [
      ["¿Qué es citar una fuente?", "Decir de dónde tomaste la información", ["Copiar sin decir nada", "Borrar la fuente", "Inventar datos"], "Citar reconoce al autor original."],
      ["¿Qué comportamiento es respetuoso en un chat de clase?", "Escribir sin insultos ni burlas", ["Escribir todo en mayúsculas gritando", "Enviar cadenas sin parar", "Burlarse de errores"], "El respeto también aplica en línea."],
      ["¿Qué haces si te llega una cadena que dice «reenvía o tendrás mala suerte»?", "No la reenvío", ["La envío a todos", "Le creo", "La publico en todas partes"], "Las cadenas suelen ser falsas y llenan de basura los chats."],
      ["Descargar películas desde sitios ilegales…", "Va contra los derechos de autor", ["Es lo correcto", "Ayuda al autor", "Es obligatorio"], "Los creadores tienen derecho a decidir cómo se usa su obra."],
      ["¿Qué hace un buen ciudadano digital con su información?", "La protege y comparte solo lo necesario", ["La publica toda", "La regala a desconocidos", "Usa la misma clave para todo"], "Cuidar tus datos es parte de ser responsable."],
      ["Ves que un compañero dejó su sesión abierta en el computador del colegio. ¿Qué haces?", "Cierro su sesión o le aviso", ["Publico algo en su nombre", "Leo sus mensajes", "Cambio su contraseña"], "Respetar las cuentas ajenas es parte de la ciudadanía digital."],
      ["¿Qué es una licencia Creative Commons?", "Un permiso del autor para usar su obra con ciertas condiciones", ["Un virus", "Una red social", "Un tipo de computador"], "Algunos autores permiten usar sus obras si los citas."],
      ["Escribir en mayúsculas en un chat suele interpretarse como…", "Gritar", ["Susurrar", "Reír", "Saludar"], "Mejor escribir normal para no parecer enojado."]
    ]
  },
  "t5b": {
    before: ["El hardware son las partes físicas que puedes tocar; el software son los programas e instrucciones.", "Uno sin el otro no sirve: el hardware necesita software para hacer algo útil."],
    vocab: [["hardware", "Partes físicas de un equipo: teclado, pantalla, procesador."], ["software", "Programas y aplicaciones que dicen qué hacer al equipo."], ["sistema operativo", "Software principal que maneja el equipo, como Windows, Android o iOS."], ["aplicación", "Programa para una tarea concreta, como un juego o un editor de texto."], ["memoria RAM", "Hardware que guarda lo que el equipo usa en el momento."]],
    worked: [
      { problem: "Clasifica: procesador, navegador, impresora, juego de fútbol.", steps: ["Procesador: se puede tocar → hardware.", "Navegador: es un programa → software.", "Impresora: se toca → hardware.", "Juego de fútbol: es un programa → software."], answer: "Hardware: procesador, impresora · Software: navegador, juego." },
      { problem: "El celular se volvió lento tras instalar muchas apps. ¿Es un problema de hardware o de software?", steps: ["El aparato no está roto físicamente.", "El problema viene de los programas instalados.", "Desinstalar apps que no uso puede ayudar."], answer: "Principalmente de software." }
    ],
    practice: [
      ["¿Cuál es software?", "Un editor de texto", ["El ratón", "La pantalla", "El disco duro"], "El editor de texto es un programa."],
      ["¿Cuál de estos elementos es una pieza de hardware?", "El procesador", ["Un videojuego", "Un antivirus", "Un navegador"], "El procesador es una pieza física."],
      ["¿Cuál es un sistema operativo?", "Windows", ["Un teclado", "Una impresora", "Un parlante"], "Windows maneja el computador."],
      ["Una app de mapas en el celular es…", "Software", ["Hardware", "Un cable", "Una batería"], "Las apps son programas."],
      ["¿Qué pasa si un computador no tiene sistema operativo?", "No puede usarse con normalidad", ["Funciona mejor", "Se vuelve más rápido", "No pasa nada"], "El sistema operativo coordina todo el hardware."],
      ["¿Qué hardware guarda tus archivos aunque apagues el equipo?", "El disco duro o almacenamiento", ["La RAM", "El monitor", "El ratón"], "La RAM se borra al apagar; el almacenamiento no."],
      ["Una actualización de software sirve para…", "Corregir errores y mejorar la seguridad", ["Cambiar el teclado", "Hacer más pesada la pantalla", "Romper el equipo"], "Las actualizaciones arreglan fallos y huecos de seguridad."],
      ["¿Desde dónde es más seguro instalar apps?", "Desde la tienda oficial y con permiso de un adulto", ["Desde cualquier enlace", "Desde mensajes de desconocidos", "Desde ventanas emergentes"], "Las tiendas oficiales revisan las apps."]
    ]
  },
  "t5c": {
    before: ["Programar es escribir instrucciones para que un computador las siga.", "Las ideas clave son: secuencia, bucle, condicional y variable."],
    vocab: [["secuencia", "Instrucciones en orden, una tras otra."], ["bucle", "Repetición de instrucciones."], ["condicional", "Decisión SI… ENTONCES… SI NO."], ["variable", "Caja con nombre que guarda un dato que puede cambiar."]],
    worked: [
      { problem: "vidas = 3. El personaje choca dos veces y cada choque resta 1. ¿Cuántas vidas quedan?", steps: ["Empieza en 3.", "Primer choque: 3 − 1 = 2.", "Segundo choque: 2 − 1 = 1."], answer: "Queda 1 vida." },
      { problem: "¿Qué idea de programación usarías para que un pez nade de lado a lado sin parar?", steps: ["La acción se repite muchas veces.", "Para repetir se usa un bucle.", "Dentro: avanzar y SI toca el borde, girar."], answer: "Un bucle «por siempre» con un condicional." }
    ],
    practice: [
      ["¿Qué idea usas para hacer algo 10 veces?", "Un bucle", ["Una variable", "Un condicional", "Un evento"], "El bucle repite instrucciones."],
      ["puntos = 5 y luego puntos = puntos + 2. ¿Cuánto vale puntos?", "7", ["5", "2", "52"], "5 + 2 = 7."],
      ["«SI vidas = 0 ENTONCES fin del juego». ¿Qué idea es?", "Condicional", ["Bucle", "Secuencia", "Variable"], "Decide según si la condición es verdadera."],
      ["Pasos en orden, uno tras otro, forman una…", "Secuencia", ["Variable", "Condición", "Pantalla"], "La secuencia es la base de todo programa."],
      ["¿Qué es una variable?", "Un espacio con nombre que guarda un dato", ["Un error", "Una tecla", "Un tipo de robot"], "Por ejemplo, «puntos» guarda la puntuación."],
      ["tiempo = 30. Cada segundo resta 1. Tras 10 segundos, tiempo vale…", "20", ["10", "30", "40"], "30 − 10 = 20."],
      ["En un juego de preguntas, «SI la respuesta es correcta ENTONCES suma 1» usa…", "Un condicional y una variable", ["Solo un bucle", "Solo una secuencia", "Nada de programación"], "Decide y cambia la variable de puntos."],
      ["¿Por qué el nombre de una variable debe ser claro?", "Para entender qué dato guarda", ["Para que el programa sea más lento", "No importa", "Para confundir"], "«vidas» es más claro que «x»."]
    ]
  },
  "xtec5a": {
    before: ["Un evento es algo que pasa y pone en marcha instrucciones: un clic, una tecla, un toque.", "Una variable guarda un dato que puede cambiar durante el juego."],
    vocab: [["evento", "Algo que ocurre y dispara un programa, como un clic."], ["variable", "Dato con nombre que se puede cambiar."], ["inicializar", "Dar el valor inicial a una variable."], ["bandera verde", "Evento típico que inicia un programa por bloques."]],
    worked: [
      { problem: "Quieres que el gato salte cuando aprietas la barra espaciadora. ¿Qué evento usas?", steps: ["La acción empieza con una tecla.", "Busco el bloque «al presionar tecla».", "Elijo la tecla espacio y debajo pongo «saltar»."], answer: "Al presionar tecla espacio → saltar." },
      { problem: "Un juego empieza con puntos = 0. Atrapas 4 manzanas (+1 cada una) y tocas 1 bomba (−2). ¿Cuántos puntos tienes?", steps: ["Empiezo en 0.", "4 manzanas: 0 + 4 = 4.", "1 bomba: 4 − 2 = 2."], answer: "2 puntos." }
    ],
    practice: [
      ["¿Cuál es un evento?", "Presionar una tecla", ["Guardar el número 5", "Un color de fondo", "El nombre del juego"], "Presionar una tecla dispara acciones."],
      ["¿Por qué se ponen los puntos en 0 al empezar?", "Para que cada partida empiece limpia", ["Para que el juego se trabe", "Porque es obligatorio para el sonido", "No sirve"], "Si no, se arrastran los puntos de la partida anterior."],
      ["vidas = 3. Pierdes 1 vida. ¿Qué bloque usas?", "Cambiar vidas en −1", ["Fijar vidas a 3", "Cambiar vidas en +1", "Fijar vidas a 0"], "Restar 1 a la variable."],
      ["«Al hacer clic en este objeto» es un evento que ocurre cuando…", "Tocas o haces clic sobre el personaje", ["Se acaba el juego", "Pasan 10 segundos", "Apagas el equipo"], "El programa reacciona a tu clic."],
      ["Si nivel = 2 y subes de nivel, ¿cuánto vale nivel?", "3", ["2", "1", "4"], "Sumas 1: 2 + 1 = 3."],
      ["¿Qué nombre de variable es mejor para guardar el tiempo?", "tiempo", ["x", "cosa", "aaa"], "Un nombre claro dice qué guarda."],
      ["Una variable puede guardar…", "Números o textos", ["Solo colores", "Solo sonidos", "Solo imágenes"], "Puede guardar el puntaje o el nombre del jugador."],
      ["Para que el juego termine cuando vidas llegue a 0, se usa…", "Un condicional que revisa la variable", ["Un evento de tecla", "Un cambio de fondo", "Una variable nueva sin usar"], "SI vidas = 0 ENTONCES fin."]
    ]
  },
  "xtec5b": {
    before: ["El ciberacoso son burlas, amenazas o exclusiones repetidas por medios digitales.", "Ante el ciberacoso: no respondas, guarda pruebas, bloquea y cuéntale a un adulto de confianza."],
    vocab: [["ciberacoso", "Molestar, humillar o amenazar a alguien varias veces por internet."], ["empatía", "Ponerse en el lugar del otro y entender cómo se siente."], ["bloquear", "Impedir que una persona te contacte."], ["reportar", "Avisar a la plataforma de un contenido o usuario dañino."], ["testigo", "Quien ve lo que pasa."]],
    worked: [
      { problem: "Alguien crea un grupo para burlarse de una compañera. Te agregan. ¿Qué haces?", steps: ["No participo ni pongo «me gusta».", "Salgo del grupo y lo reporto.", "Apoyo a mi compañera y le cuento a un adulto."], answer: "No participar, reportar, apoyar y avisar a un adulto." },
      { problem: "Recibes mensajes ofensivos varios días seguidos. ¿Qué pasos sigues?", steps: ["No respondo, para no empeorarlo.", "Hago capturas de pantalla como prueba.", "Bloqueo a la persona.", "Le cuento a un adulto de confianza."], answer: "No responder → guardar pruebas → bloquear → contar." }
    ],
    practice: [
      ["¿Qué es ciberacoso?", "Molestar a alguien repetidamente por internet", ["Jugar en línea con amigos", "Enviar una felicitación", "Hacer una tarea en grupo"], "Es daño repetido usando medios digitales."],
      ["¿Qué es la empatía?", "Ponerte en el lugar del otro", ["Ganar siempre", "Ignorar a todos", "Burlarse en secreto"], "Entender cómo se siente la otra persona."],
      ["¿Por qué guardar capturas de los mensajes ofensivos?", "Como prueba para los adultos", ["Para reenviarlos", "Para burlarse", "No sirve"], "Las pruebas ayudan a resolver el caso."],
      ["Responder a un acosador con insultos…", "Suele empeorar la situación", ["Lo soluciona siempre", "Es lo mejor", "Lo hace feliz"], "Mejor no responder y pedir ayuda."],
      ["¿Qué hace la opción «reportar» en una red o juego?", "Avisa a la plataforma de un contenido dañino", ["Borra tu cuenta", "Envía tu contraseña", "Sube una foto"], "La plataforma puede retirar el contenido."],
      ["Un testigo de ciberacoso puede ayudar…", "Apoyando a la víctima y avisando a un adulto", ["Riéndose", "Compartiendo la burla", "Guardando silencio siempre"], "Los testigos pueden detener el acoso."],
      ["Antes de enviar un mensaje, ¿qué te preguntas?", "¿Podría herir a alguien?", ["¿Será el más largo?", "¿Tendrá muchos emojis?", "¿Lo verán rápido?"], "Pensar antes de escribir evita hacer daño."],
      ["Excluir a alguien a propósito de un grupo para que se sienta mal es…", "Una forma de ciberacoso", ["Una broma sana", "Algo normal", "Un juego"], "Dejar por fuera para lastimar también es acoso."]
    ]
  },
  "xtec5c": {
    before: ["Cuando envías algo por internet, se divide en paquetes pequeños que viajan por la red.", "Cada dispositivo conectado tiene una dirección IP para que los paquetes sepan a dónde ir."],
    vocab: [["paquete", "Trozo pequeño de información que viaja por la red."], ["dirección IP", "Número que identifica a un dispositivo en la red."], ["router", "Aparato que dirige los paquetes hacia su destino."], ["servidor", "Computador que guarda y entrega páginas, videos o mensajes."], ["fibra óptica", "Cable de vidrio muy fino que lleva información con luz."]],
    worked: [
      { problem: "Envías una foto a tu primo. Ordena el viaje.", steps: ["La foto se divide en paquetes en tu celular.", "Los paquetes salen por el wifi hacia el router.", "Viajan por cables y fibra óptica pasando por otros routers y servidores.", "Llegan al celular de tu primo y se vuelven a unir."], answer: "Paquetes → router → red → servidor → destino (se unen)." },
      { problem: "Un paquete se pierde en el camino. ¿Qué pasa?", steps: ["El destino nota que falta un paquete.", "Pide que se envíe de nuevo.", "Cuando llega, la foto se arma completa."], answer: "Se vuelve a enviar ese paquete." }
    ],
    practice: [
      ["¿Qué es una dirección IP?", "Un número que identifica un dispositivo en la red", ["Una contraseña", "El nombre de una calle", "Un tipo de cable"], "Funciona como la dirección de una casa."],
      ["¿Qué es un servidor?", "Un computador que guarda y entrega información", ["Un mesero", "Un ratón", "Un cable"], "Los servidores alojan páginas, videos y correos."],
      ["¿Con qué lleva información la fibra óptica?", "Con luz", ["Con agua", "Con aire", "Con sonido"], "Pulsos de luz viajan por hilos de vidrio."],
      ["¿Por qué la información se divide en paquetes?", "Para viajar más fácil y rearmarse al llegar", ["Para perderse", "Para que pese más", "Para que no llegue"], "Los paquetes pequeños viajan por distintos caminos."],
      ["¿Los paquetes de un mismo mensaje siguen siempre el mismo camino?", "No, pueden ir por caminos distintos", ["Sí, siempre", "Nunca se mueven", "Solo uno viaja"], "Los routers eligen la mejor ruta para cada paquete."],
      ["¿Qué cables unen internet entre continentes?", "Cables submarinos", ["Cuerdas de cometa", "Cables de lámparas", "Mangueras"], "Hay cables bajo el mar que cruzan océanos."],
      ["El wifi de tu casa se conecta a internet a través del…", "Router", ["Teclado", "Parlante", "Monitor"], "El router une tu red con internet."],
      ["¿Qué pasa cuando los paquetes llegan a su destino?", "Se unen en orden para formar el mensaje", ["Se borran", "Se quedan separados", "Regresan al inicio"], "Cada paquete lleva un número de orden."]
    ]
  },
  "xtec5d": {
    before: ["Un robot es una máquina que percibe, decide y actúa.", "Sus sensores son como sentidos, el controlador como el cerebro y los motores como los músculos."],
    vocab: [["sensor", "Pieza que detecta algo del entorno: luz, distancia, temperatura."], ["controlador", "Computador pequeño que procesa los datos y decide."], ["motor", "Pieza que produce movimiento."], ["actuador", "Parte que hace que el robot actúe: motores, luces, parlantes."]],
    worked: [
      { problem: "Un robot debe seguir una línea negra en el piso. ¿Qué sensor usa?", steps: ["Necesita distinguir negro de blanco.", "El negro refleja menos luz que el blanco.", "Un sensor de luz o de color lo detecta."], answer: "Un sensor de luz (o de color)." },
      { problem: "Una puerta de supermercado se abre sola. Explica cómo funciona como robot.", steps: ["Percibe: un sensor de movimiento detecta a la persona.", "Procesa: el controlador decide abrir.", "Actúa: un motor desliza la puerta."], answer: "Sensor de movimiento → controlador → motor." }
    ],
    practice: [
      ["¿Qué sensor usa un robot para no chocar?", "Sensor de distancia", ["Sensor de sabor", "Sensor de olor a flores", "Ninguno"], "Mide qué tan cerca está un obstáculo."],
      ["¿Qué parte del robot produce movimiento?", "El motor", ["El sensor", "La batería sola", "La carcasa"], "Los motores mueven ruedas y brazos."],
      ["Un termostato que prende el aire acondicionado cuando hace calor usa un sensor de…", "Temperatura", ["Distancia", "Sonido", "Color"], "Mide la temperatura del cuarto."],
      ["¿Cuál es el orden en que trabaja un robot?", "Percibir → procesar → actuar", ["Actuar → percibir → dormir", "Procesar → apagar → percibir", "Actuar → actuar → actuar"], "Primero detecta, luego decide y después actúa."],
      ["Las luces de la calle que se encienden solas al anochecer usan un sensor de…", "Luz", ["Peso", "Sabor", "Viento"], "Detectan que hay poca luz."],
      ["¿Qué hace el robot después de actuar?", "Vuelve a percibir y repite el ciclo", ["Se apaga siempre", "Olvida todo", "Se rompe"], "El ciclo se repite muchas veces por segundo."],
      ["En un robot, el controlador se parece a…", "El cerebro", ["Los pies", "La piel", "El cabello"], "Procesa la información y decide."],
      ["¿Cuál de estos es un robot?", "Una aspiradora que esquiva muebles sola", ["Una escoba", "Una silla", "Un libro"], "Percibe, decide y actúa por sí misma."]
    ]
  },
  "xtec5e": {
    before: ["La basura electrónica (RAEE) son aparatos eléctricos y electrónicos que ya no se usan.", "Contienen sustancias que contaminan y materiales valiosos que se pueden recuperar."],
    vocab: [["basura electrónica", "Aparatos eléctricos y electrónicos desechados, también llamados RAEE."], ["punto de recolección", "Lugar especial que recibe pilas y aparatos viejos."], ["metales pesados", "Sustancias como plomo o mercurio que contaminan suelo y agua."], ["reparar", "Arreglar algo para que siga funcionando."]],
    worked: [
      { problem: "Tu familia tiene un celular viejo que todavía funciona. ¿Qué es lo mejor?", steps: ["Primero pienso en reutilizar.", "Si funciona, se puede donar o usar para otra cosa.", "Antes, un adulto borra los datos personales."], answer: "Borrar los datos y donarlo o reutilizarlo." },
      { problem: "Se dañó el control remoto y no tiene arreglo. ¿Qué haces con él y sus pilas?", steps: ["Saco las pilas.", "Llevo las pilas a un punto de recolección de pilas.", "Llevo el control a un punto o campaña de reciclaje de electrónicos."], answer: "Pilas y aparato a puntos de recolección especiales." }
    ],
    practice: [
      ["¿Cuál es basura electrónica?", "Un cargador dañado", ["Una cáscara de naranja", "Una caja de cartón", "Una botella de vidrio"], "Es un aparato eléctrico desechado."],
      ["¿Por qué no se botan las pilas en la basura común?", "Pueden contaminar el suelo y el agua", ["Porque explotan siempre", "Porque son muy livianas", "Porque huelen mal"], "Contienen sustancias tóxicas."],
      ["¿Qué metal valioso tienen los circuitos de los aparatos, además del oro?", "Cobre", ["Madera", "Arcilla", "Algodón"], "El cobre de los cables y circuitos se recupera."],
      ["Antes de donar un celular viejo, ¿qué debe hacer un adulto?", "Borrar los datos personales", ["Romperle la pantalla", "Pintarlo", "Mojarlo"], "Así nadie ve fotos ni contraseñas."],
      ["¿Qué es mejor antes de comprar un aparato nuevo?", "Intentar repararlo si se puede", ["Botarlo enseguida", "Quemarlo", "Esconderlo"], "Reparar alarga la vida del aparato."],
      ["Un computador viejo se puede…", "Reparar, donar o reciclar en un punto especial", ["Botar al río", "Enterrar en el patio", "Quemar"], "Así no contamina y se aprovecha."],
      ["¿Qué ayuda a que los aparatos duren más?", "Cuidarlos y usar fundas o protectores", ["Dejarlos caer", "Mojarlos", "Dejarlos al sol todo el día"], "Un buen cuidado evita daños."],
      ["¿Qué es un punto de recolección?", "Un lugar que recibe pilas y aparatos viejos", ["Una tienda de dulces", "Una cancha", "Un parque de juegos"], "Allí se llevan para reciclarlos de forma segura."]
    ]
  },
  "xtec5f": {
    before: ["Los dispositivos de entrada llevan información al computador; los de salida la sacan hacia nosotros.", "Algunos dispositivos son de entrada y salida a la vez."],
    vocab: [["entrada", "Información que entra al computador."], ["salida", "Información que sale del computador hacia nosotros."], ["periférico", "Dispositivo que se conecta al computador, como el ratón o la impresora."], ["pantalla táctil", "Pantalla que muestra imágenes y recibe toques."]],
    worked: [
      { problem: "Clasifica: escáner, impresora, audífonos con micrófono.", steps: ["Escáner: mete la imagen al computador → entrada.", "Impresora: saca el documento en papel → salida.", "Audífonos con micrófono: oyes (salida) y hablas (entrada) → ambos."], answer: "Escáner: entrada · Impresora: salida · Audífonos con micrófono: entrada y salida." },
      { problem: "Haces una videollamada. ¿Qué dispositivos de entrada y salida usas?", steps: ["Entrada: cámara (tu imagen) y micrófono (tu voz).", "Proceso: el computador envía y recibe datos.", "Salida: pantalla (ves a tu amigo) y parlantes (lo oyes)."], answer: "Entrada: cámara y micrófono · Salida: pantalla y parlantes." }
    ],
    practice: [
      ["¿Qué aparato mete imágenes en papel al computador?", "El escáner", ["La impresora", "El parlante", "El proyector"], "El escáner mete imágenes al computador."],
      ["¿Qué dispositivo de salida pone tu trabajo en papel?", "La impresora", ["El teclado", "El ratón", "La cámara web"], "Saca documentos en papel."],
      ["¿Qué dispositivo es de entrada y salida a la vez?", "La pantalla táctil", ["El ratón", "El parlante", "El micrófono"], "Recibe tus toques y muestra imágenes."],
      ["El proyector es un dispositivo de…", "Salida", ["Entrada", "Almacenamiento de energía", "Ninguno"], "Muestra imágenes en la pared."],
      ["La cámara web es un dispositivo de…", "Entrada", ["Salida", "Impresión", "Sonido de salida"], "Mete imágenes al computador."],
      ["¿Cuál es el camino de la información?", "Entrada → procesamiento → salida", ["Salida → entrada → nada", "Procesamiento → salida → entrada", "Solo salida"], "Primero entra, se procesa y luego sale."],
      ["Un control de videojuegos con vibración es…", "De entrada y salida", ["Solo de salida", "Solo de entrada", "Ni entrada ni salida"], "Los botones envían datos y la vibración es una salida."],
      ["¿Qué parte procesa la información entre la entrada y la salida?", "El procesador", ["El parlante", "El teclado", "La impresora"], "El procesador hace los cálculos."]
    ]
  },
  "xtec5g": {
    before: ["Un programa bien ordenado tiene: evento de inicio, preparación de variables, un bucle y condicionales dentro.", "Probar y depurar es el último paso, y se repite las veces que haga falta."],
    vocab: [["evento de inicio", "Bloque que pone en marcha el programa."], ["inicializar", "Dar valores de partida a las variables."], ["por siempre", "Bucle que repite mientras el juego esté activo."], ["depurar", "Encontrar y corregir errores."]],
    worked: [
      { problem: "Organiza un juego de esquivar meteoros con 3 vidas.", steps: ["Evento: al hacer clic en la bandera verde.", "Preparar: vidas = 3, nave en el centro.", "Por siempre: mover la nave con las flechas.", "SI toca un meteoro: vidas − 1. SI vidas = 0: fin del juego."], answer: "Inicio → vidas = 3 → por siempre → condicionales." },
      { problem: "Los puntos nunca vuelven a 0 al reiniciar el juego. ¿Dónde está el error?", steps: ["Reviso la preparación de variables.", "Falta «puntos = 0» después de la bandera verde.", "Lo agrego antes del bucle y pruebo."], answer: "Faltaba inicializar puntos = 0 antes del bucle." }
    ],
    practice: [
      ["¿Qué va justo después del evento de inicio?", "Preparar las variables", ["El fin del juego", "Depurar", "Apagar el computador"], "Se dan valores iniciales antes de jugar."],
      ["¿Dónde van los condicionales del juego?", "Dentro del bucle", ["Antes del evento de inicio", "Fuera del programa", "En el título"], "Así se revisan una y otra vez mientras juegas."],
      ["¿Qué bucle se usa para que el juego revise todo sin parar?", "Por siempre", ["Repetir 1 vez", "Ninguno", "Esperar 100 segundos"], "Revisa continuamente mientras se juega."],
      ["Si pones «puntos = 0» dentro del bucle «por siempre», ¿qué pasa?", "Los puntos vuelven a 0 todo el tiempo", ["Funciona perfecto", "Los puntos suben solos", "El juego se acelera"], "La variable se reinicia en cada vuelta."],
      ["¿Qué paso va al final al hacer un programa?", "Probar y depurar", ["Elegir el evento de inicio", "Preparar variables", "Pensar la idea"], "Siempre se prueba al terminar."],
      ["El personaje no se mueve al apretar la flecha. ¿Qué revisas primero?", "El bloque del evento de la tecla", ["El color del fondo", "El nombre del juego", "El sonido"], "Si el evento está mal, no hay movimiento."],
      ["Ordena: bucle (A), evento de inicio (B), variables (C).", "B, C, A", ["A, B, C", "C, A, B", "A, C, B"], "Inicio → variables → bucle."],
      ["«SI toca ⭐ ENTONCES puntos + 1» va…", "Dentro del bucle «por siempre»", ["Antes de la bandera verde", "En lugar del evento", "Fuera de todo"], "Debe revisarse continuamente."]
    ]
  },
  "xtec5h": {
    before: ["Leer textos informativos requiere buscar palabras técnicas y el orden de los hechos.", "Responder con evidencia es apoyar tu respuesta en una frase del texto."],
    vocab: [["evidencia", "Frase del texto que prueba tu respuesta."], ["secuencia", "Orden en que pasan los hechos."], ["inferir", "Deducir algo que el texto no dice directamente, usando pistas."], ["convivencia digital", "Cómo nos tratamos en chats y redes."]],
    worked: [
      { problem: "El texto dice: «Daniela escribió en mayúsculas y sus amigos pensaron que estaba enojada». ¿Qué puedes inferir?", steps: ["El texto no dice que Daniela estuviera enojada.", "Pero las mayúsculas se leen como gritos.", "Infiero que su mensaje se malinterpretó."], answer: "Sus amigos creyeron que gritaba por usar mayúsculas." },
      { problem: "Pregunta: «¿Qué aparato dirigió los paquetes?». ¿Cómo respondes con evidencia?", steps: ["Busco en el texto la palabra «paquetes».", "Encuentro: «el router los envió por el mejor camino».", "Respondo citando esa frase."], answer: "El router; el texto dice que «los envió por el mejor camino»." }
    ],
    practice: [
      ["¿Qué es responder con evidencia?", "Apoyar la respuesta en una frase del texto", ["Responder lo que yo creo sin leer", "Copiar la pregunta", "Inventar un dato"], "La evidencia está escrita en el texto."],
      ["¿Qué es inferir?", "Deducir algo usando pistas del texto", ["Copiar el título", "Leer en voz alta", "Saltarse el texto"], "Unes pistas para entender lo que no se dice directo."],
      ["Antes de leer, mirar el título y las imágenes sirve para…", "Predecir de qué trata el texto", ["Saber las respuestas exactas", "Terminar más rápido sin leer", "Nada"], "Predecir prepara tu mente para leer."],
      ["Durante la lectura conviene subrayar…", "Las palabras técnicas y las ideas importantes", ["Todas las palabras", "Solo los números de página", "Nada"], "Así encuentras rápido lo importante."],
      ["En la historia, un personaje se burla en el chat. ¿Qué consecuencia es probable?", "Alguien se siente herido", ["Todos se ríen siempre", "No pasa nada", "Se arregla el wifi"], "Las burlas hacen daño a las personas."],
      ["Si el texto dice «primero», «después» y «al final», te ayuda a…", "Ordenar la secuencia", ["Encontrar el autor", "Contar palabras", "Saber el precio"], "Esas palabras marcan el orden."],
      ["¿Qué personaje del chat convivió bien?", "El que pidió perdón y aclaró el malentendido", ["El que reenvió la burla", "El que insultó", "El que excluyó a otro"], "Pedir perdón y aclarar mejora la convivencia."],
      ["Si dos respuestas parecen correctas, ¿qué haces?", "Vuelvo al texto y busco la evidencia", ["Elijo la más larga", "Elijo al azar", "Dejo en blanco"], "El texto decide cuál es la correcta."]
    ]
  },
  /* ===== 6.º ===== */
  "t6a": {
    before: ["La inteligencia artificial (IA) son programas que aprenden de muchos datos para reconocer patrones y hacer predicciones.", "La IA no piensa ni siente como una persona: calcula la respuesta más probable, y puede equivocarse."],
    vocab: [["inteligencia artificial", "Programas capaces de hacer tareas que parecen inteligentes, como reconocer imágenes."], ["datos de entrenamiento", "Ejemplos con los que aprende una IA."], ["patrón", "Regularidad que se repite en los datos."], ["predicción", "Respuesta que la IA calcula como la más probable."], ["etiqueta", "Nombre que se le pone a un ejemplo, como «gato» o «perro»."]],
    worked: [
      { problem: "Quieres que una IA distinga manzanas de naranjas. ¿Cómo la entrenas?", steps: ["Reúno muchas fotos de manzanas y de naranjas.", "Etiqueto cada foto con su nombre.", "La IA busca patrones: color, forma, textura.", "La pruebo con fotos nuevas que no ha visto."], answer: "Con muchos ejemplos etiquetados y luego pruebas con fotos nuevas." },
      { problem: "Una IA que solo vio gatos negros dice que un gato blanco «no es un gato». ¿Por qué?", steps: ["Aprendió solo de gatos negros.", "Sus datos no representaban todos los gatos.", "Faltaban ejemplos variados."], answer: "Por datos de entrenamiento incompletos." }
    ],
    practice: [
      ["¿Cuál es un ejemplo de IA?", "Un traductor automático", ["Una calculadora de bolsillo simple", "Una regla", "Un interruptor"], "El traductor aprendió de muchísimos textos."],
      ["¿Qué necesita una IA para aprender?", "Muchos datos y ejemplos", ["Solo electricidad", "Dormir", "Una regla"], "Sin datos no puede encontrar patrones."],
      ["¿La IA entiende el mundo como una persona?", "No, encuentra patrones y calcula probabilidades", ["Sí, igual que nosotros", "Sí, y además siente", "Sí, sabe todo"], "Calcula, pero no comprende como un humano."],
      ["Si una IA aprendió con datos equivocados, probablemente…", "Dará respuestas equivocadas", ["Será perfecta", "Se apagará", "Aprenderá sola la verdad"], "Datos malos producen resultados malos."],
      ["¿Qué hace el desbloqueo con la cara de un celular?", "Reconoce patrones de tu rostro", ["Lee tu mente", "Mide tu altura", "Escucha tu corazón"], "Compara rasgos de la cara con los guardados."],
      ["Las recomendaciones de videos se basan en…", "Lo que has visto antes", ["El clima", "El color de tu ropa", "Tu estatura"], "La IA busca patrones en tu historial."],
      ["¿Qué es una etiqueta en el entrenamiento de una IA?", "El nombre correcto de cada ejemplo", ["Una pegatina de precio", "Un virus", "Una contraseña"], "Ej.: esta foto = «perro»."],
      ["¿Por qué se prueba la IA con datos nuevos?", "Para ver si aprendió de verdad", ["Para borrarla", "Para que vaya más lento", "No hace falta"], "Si solo acierta con lo que ya vio, no aprendió bien."]
    ]
  },
  "t6b": {
    before: ["Un circuito tiene fuente, conductores, receptores y, a veces, un interruptor.", "La corriente solo circula si el circuito está cerrado."],
    vocab: [["corriente eléctrica", "Movimiento de cargas eléctricas por un conductor."], ["conductor", "Material que deja pasar la corriente, como el cobre."], ["aislante", "Material que no deja pasar la corriente, como el plástico."], ["en serie", "Conexión con un solo camino para la corriente."], ["en paralelo", "Conexión con varios caminos, uno por receptor."]],
    worked: [
      { problem: "Quieres comprobar si una moneda es conductora. ¿Cómo lo haces?", steps: ["Armo un circuito con pila, cables y bombilla, dejando un hueco.", "Pongo la moneda en el hueco.", "Si la bombilla se enciende, la corriente pasa."], answer: "Si la bombilla prende, la moneda es conductora (los metales lo son)." },
      { problem: "Dos bombillas en serie: una se funde. ¿Qué pasa y por qué?", steps: ["En serie hay un solo camino.", "La bombilla fundida corta ese camino.", "El circuito queda abierto."], answer: "Las dos se apagan porque el circuito se abre." }
    ],
    practice: [
      ["¿Qué material es conductor?", "El cobre", ["La madera seca", "El caucho", "El vidrio"], "Los metales como el cobre conducen la corriente."],
      ["¿Por qué los cables están cubiertos de plástico?", "Porque el plástico es aislante y nos protege", ["Para que brillen", "Para que conduzcan más", "Para que pesen menos"], "El aislante evita descargas."],
      ["Las luces de una casa están conectadas en…", "Paralelo", ["Serie", "Ningún circuito", "Un solo cable sin fuente"], "Así cada una funciona aunque otra se dañe."],
      ["¿Qué parte del circuito transforma la energía en luz o movimiento?", "El receptor", ["La fuente", "El interruptor", "El aislante"], "Bombillas y motores son receptores."],
      ["Un interruptor abierto hace que el circuito…", "Se interrumpa y no circule corriente", ["Funcione mejor", "Se cargue", "Se vuelva paralelo"], "Abrir el interruptor corta el camino."],
      ["¿Qué es un cortocircuito?", "Cuando la corriente pasa por un atajo sin receptor y se calienta peligrosamente", ["Un circuito muy corto pero seguro", "Un tipo de pila", "Un interruptor"], "Puede causar calor excesivo e incendios."],
      ["¿Qué fuente de energía usamos en circuitos escolares?", "Pilas", ["El enchufe de la pared", "Rayos", "Cables de la calle"], "Las pilas tienen poco voltaje y son más seguras."],
      ["En un circuito en serie con 3 bombillas, si quitas una…", "Se apagan todas", ["Las otras brillan igual", "Solo se apaga la del lado", "Se encienden más"], "Se rompe el único camino."],
      ["¿Por qué es peligroso sobrecargar una toma con muchos aparatos?", "Puede calentarse y causar un incendio", ["Porque se ahorra energía", "Porque los aparatos funcionan mejor", "No es peligroso"], "Demasiada corriente calienta los cables."]
    ]
  },
  "t6c": {
    before: ["En los retos difíciles conviene analizar, comparar caminos y usar bucles y condicionales.", "Un programa que funciona se puede optimizar: hacerlo más corto o eficiente."],
    vocab: [["optimizar", "Mejorar un programa que funciona para que use menos pasos."], ["eficiente", "Que logra el objetivo con menos recursos o pasos."], ["camino más corto", "Ruta con menos movimientos entre inicio y meta."], ["prueba de escritorio", "Seguir el programa en papel, paso a paso, antes de ejecutarlo."]],
    worked: [
      { problem: "Camino A: 12 movimientos. Camino B: 9 movimientos, pero pasa junto a un enemigo que se mueve. ¿Qué haces?", steps: ["B es más corto.", "Pero necesita reaccionar al enemigo.", "Agrego un condicional: SI el enemigo está delante, esperar.", "Comparo: si B sigue siendo más corto con la espera, lo elijo."], answer: "Elegir B con un condicional para el enemigo, si sigue siendo más corto." },
      { problem: "Optimiza: → → → ↑ → → → ↑ → → → ↑", steps: ["Busco el patrón: → → → ↑.", "Se repite 3 veces.", "Lo agrupo en un bucle."], answer: "REPETIR 3 [REPETIR 3 [→], ↑]" }
    ],
    practice: [
      ["¿Qué es optimizar un programa?", "Mejorarlo para que use menos pasos", ["Agregarle errores", "Borrarlo", "Hacerlo más largo"], "Optimizar es hacerlo más eficiente."],
      ["Camino 1: 15 pasos. Camino 2: 11 pasos. Ambos llegan. ¿Cuál es más eficiente?", "El camino 2", ["El camino 1", "Son iguales", "Ninguno"], "11 pasos son menos que 15."],
      ["↑ → ↑ → ↑ → ↑ → se optimiza como…", "REPETIR 4 [↑ →]", ["REPETIR 8 [↑]", "REPETIR 2 [↑ →]", "REPETIR 4 [→]"], "El grupo ↑ → se repite 4 veces."],
      ["Una puerta a veces está abierta y a veces cerrada. ¿Qué necesitas?", "Un condicional", ["Solo más flechas", "Un bucle sin condición", "Nada"], "El robot debe decidir según el estado de la puerta."],
      ["¿Qué es una prueba de escritorio?", "Seguir el programa en papel paso a paso", ["Probar el escritorio", "Limpiar la mesa", "Borrar el programa"], "Ayuda a encontrar errores antes de ejecutar."],
      ["REPETIR 3 [REPETIR 2 [→]] da un total de…", "6 movimientos →", ["5 movimientos", "3 movimientos", "2 movimientos"], "3 × 2 = 6."],
      ["Antes de programar un reto difícil, ¿qué identificas?", "Inicio, meta, obstáculos y reglas", ["Solo el color del robot", "El nombre del nivel", "Nada"], "Analizar el reto evita errores."],
      ["Tu programa funciona pero tiene 30 bloques; uno con bucles tiene 8. ¿Cuál es mejor?", "El de 8 bloques, si hace lo mismo", ["El de 30 bloques", "Ninguno", "Los dos son peores"], "Más corto y claro, con el mismo resultado."]
    ]
  },
  "xtec6a": {
    before: ["Todo programa sigue el modelo entrada → proceso → salida.", "Una función es un bloque de instrucciones con nombre que puedes usar muchas veces con distintos valores."],
    vocab: [["función", "Grupo de instrucciones con nombre que hace una tarea."], ["parámetro", "Valor que recibe la función para trabajar."], ["devolver", "Entregar el resultado de la función."], ["llamar", "Usar una función escribiendo su nombre y sus valores."], ["caso de prueba", "Entrada con resultado esperado que sirve para comprobar el programa."]],
    worked: [
      { problem: "triple(n) devuelve n × 3. ¿Cuánto es triple(4) + triple(2)?", steps: ["triple(4) = 4 × 3 = 12.", "triple(2) = 2 × 3 = 6.", "Sumo: 12 + 6."], answer: "18" },
      { problem: "Alguien escribió area(base, altura) que devuelve base + altura para un rectángulo. Al probar area(3, 4) da 7. ¿Qué pasa?", steps: ["El área de un rectángulo es base × altura = 12.", "La función da 7: el resultado no es el esperado.", "El error está en el proceso: suma en lugar de multiplicar.", "Corrijo a base × altura y pruebo de nuevo."], answer: "Bug: debía multiplicar; area(3, 4) = 12." }
    ],
    practice: [
      ["mitad(n) devuelve n ÷ 2. ¿Cuánto es mitad(18)?", "9", ["36", "16", "20"], "18 ÷ 2 = 9."],
      ["sumar(a, b) devuelve a + b. ¿Cuánto es sumar(5, 8)?", "13", ["58", "40", "3"], "5 + 8 = 13."],
      ["En doble(7), ¿qué es el 7?", "El parámetro o argumento", ["El resultado", "El nombre de la función", "Un error"], "Es el valor que recibe la función."],
      ["En una calculadora, la pantalla que muestra el resultado es…", "Salida", ["Entrada", "Proceso", "Parámetro"], "Muestra el resultado al usuario."],
      ["cuadrado(n) devuelve n × n. ¿Cuánto es cuadrado(6)?", "36", ["12", "66", "6"], "6 × 6 = 36."],
      ["saludar(nombre) muestra «Hola, » + nombre. ¿Qué muestra saludar(«Luis»)?", "Hola, Luis", ["Hola, nombre", "Luis, Hola", "Hola"], "Reemplaza nombre por «Luis»."],
      ["¿Para qué se prueba una función con valores como 0 o negativos?", "Para encontrar errores en casos especiales", ["Para que vaya más rápido", "Para borrarla", "No sirve de nada"], "Los casos extremos revelan bugs escondidos."],
      ["doble(triple(2)) es igual a…", "12", ["6", "10", "5"], "triple(2) = 6 y doble(6) = 12."],
      ["Un sensor que mide temperatura para un programa es un ejemplo de…", "Entrada", ["Salida", "Función", "Resultado"], "Le entrega datos al programa."]
    ]
  },
  "xtec6b": {
    before: ["Las herramientas de IA generativa crean textos e imágenes a partir de lo que aprendieron, pero pueden inventar datos.", "Úsala para aprender, verifica lo que te diga y nunca le des datos personales. Muchas tienen edad mínima: úsala con permiso de un adulto."],
    vocab: [["IA generativa", "IA que crea textos, imágenes o audios nuevos."], ["sesgo", "Inclinación injusta que aparece cuando los datos no representan a todos."], ["alucinación", "Respuesta inventada por la IA que suena real pero es falsa."], ["instrucción (prompt)", "Lo que le escribes a la IA para pedirle algo."], ["verificar", "Comprobar en fuentes confiables si algo es cierto."]],
    worked: [
      { problem: "Un chatbot te da una fecha histórica para tu tarea. ¿Qué haces?", steps: ["No la copio directamente.", "La busco en un libro o en una fuente confiable.", "Si coincide, la uso y cito la fuente confiable; si no, la descarto."], answer: "Verificar en otra fuente antes de usarla." },
      { problem: "Le pides a una IA «dibuja un científico» y siempre muestra hombres mayores. ¿Qué ocurre?", steps: ["La IA repite lo que más vio en sus datos.", "Sus datos no representaban a todas las personas.", "Eso es un sesgo."], answer: "Es un sesgo de los datos de entrenamiento." }
    ],
    practice: [
      ["¿Qué es una alucinación de la IA?", "Una respuesta inventada que suena creíble", ["Un sueño del computador", "Un virus", "Una imagen borrosa"], "La IA puede inventar fechas, citas o fuentes."],
      ["¿Qué uso de la IA es responsable?", "Pedirle que te explique un tema y luego hacer tú la tarea", ["Copiar su respuesta completa como tuya", "Darle tu dirección", "Creer todo sin revisar"], "Úsala para aprender, no para copiar."],
      ["¿Qué es un prompt?", "La instrucción que le escribes a la IA", ["Un tipo de cable", "La respuesta de la IA", "Un error de la pantalla"], "Es lo que le pides."],
      ["¿Qué información NO debes compartir con un chatbot?", "Tu contraseña", ["Una pregunta de ciencias", "El tema de tu tarea", "Tu duda de matemáticas"], "Las contraseñas nunca se comparten."],
      ["Si tu profesor pide decir cuándo usaste IA, ¿qué haces?", "Lo digo con honestidad", ["Lo escondo", "Digo que lo hice todo yo", "Borro las pruebas"], "La honestidad es parte de usarla bien."],
      ["Una IA te cita un libro que no encuentras en ninguna parte. Probablemente…", "Lo inventó", ["Es un libro secreto", "Tu internet falla", "Es verdad siempre"], "Las IA a veces inventan fuentes."],
      ["¿Cómo se reduce el sesgo de una IA?", "Entrenándola con datos variados que representen a todos", ["Usando menos datos", "Apagándola", "Ignorándolo"], "Datos diversos dan resultados más justos."],
      ["¿Qué debes hacer antes de usar una app de IA?", "Pedir permiso a un adulto y revisar la edad mínima", ["Instalarla sin preguntar", "Darle tu número de teléfono", "Crear una cuenta con datos falsos de un adulto"], "Muchas apps tienen límite de edad."]
    ]
  },
  "xtec6c": {
    before: ["Los datos personales te identifican o permiten encontrarte; los sensibles (contraseñas, salud, dinero) son aún más delicados.", "Configurar la privacidad con un adulto y pensar antes de compartir te protege."],
    vocab: [["dato personal", "Información que te identifica, como tu nombre completo o tu dirección."], ["dato sensible", "Dato delicado, como contraseñas, salud o información de dinero."], ["permisos de una app", "Accesos que pide una aplicación: cámara, micrófono, ubicación, contactos."], ["suplantación de identidad (phishing)", "Engaño que imita a una empresa o persona para robar datos."], ["verificación en dos pasos", "Segundo código, además de la contraseña, para entrar a una cuenta."]],
    worked: [
      { problem: "Un juego de linterna pide acceso a tus contactos y a tu ubicación. ¿Qué haces?", steps: ["Una linterna no necesita contactos ni ubicación.", "Son permisos innecesarios: sospechoso.", "Con un adulto, niego esos permisos o no instalo la app."], answer: "Negar permisos innecesarios o no instalarla." },
      { problem: "Te llega un correo: «Tu cuenta será bloqueada, escribe tu contraseña aquí». ¿Qué haces?", steps: ["Las empresas serias no piden contraseñas por correo.", "Es un intento de phishing.", "No hago clic, lo reporto y aviso a un adulto."], answer: "No responder, no hacer clic y avisar a un adulto." }
    ],
    practice: [
      ["¿Cuál es un dato sensible?", "Tu historia médica", ["Tu película favorita", "Tu deporte preferido", "Tu color favorito"], "La información de salud es muy delicada."],
      ["¿Qué es el phishing?", "Un engaño para robar datos haciéndose pasar por otro", ["Un deporte de pesca", "Un antivirus", "Un tipo de computador"], "Imitan bancos, juegos o tiendas para robar claves."],
      ["¿Qué agrega la verificación en dos pasos?", "Un segundo código además de la contraseña", ["Dos contraseñas iguales", "Otra cuenta", "Un virus"], "Aunque roben tu clave, no pueden entrar sin el código."],
      ["Una foto en la que se ve el nombre de tu calle revela…", "Tu ubicación", ["Tu edad exacta", "Tu contraseña", "Nada"], "Los detalles del fondo dan pistas."],
      ["¿Qué permiso NO necesita una app de calculadora?", "Acceso al micrófono", ["Mostrar números en pantalla", "Usar el teclado", "Ninguno de esos"], "Una calculadora no necesita escucharte."],
      ["En redes sociales es mejor tener el perfil…", "Privado, revisado con un adulto", ["Público para todos", "Con tu dirección visible", "Con tu teléfono publicado"], "Así solo ven tu información personas conocidas."],
      ["Una solicitud de amistad de alguien que no conoces en la vida real…", "No la acepto", ["La acepto siempre", "Le envío mis fotos", "Le doy mi teléfono"], "Acepta solo a quienes conoces en persona."],
      ["Un sitio seguro para escribir datos suele mostrar en la dirección…", "Un candado y «https»", ["Muchos anuncios", "Letras parpadeando", "Un premio"], "El candado indica conexión cifrada (aunque no garantiza que el sitio sea honesto)."],
      ["¿Qué haces si crees que alguien entró a tu cuenta?", "Cambiar la contraseña con un adulto y avisar", ["No hacer nada", "Publicarlo con tu contraseña", "Crear la misma clave otra vez"], "Actuar rápido protege tu información."]
    ]
  },
  "xtec6d": {
    before: ["Una hoja de cálculo organiza datos en celdas, nombradas por columna (letra) y fila (número).", "Las fórmulas empiezan con = y se recalculan solas cuando cambian los datos."],
    vocab: [["celda", "Cuadro donde se cruzan una columna y una fila, como B3."], ["rango", "Grupo de celdas seguidas, como A1:A5."], ["fórmula", "Operación que empieza con = y calcula un resultado."], ["función", "Fórmula lista para usar, como SUMA o PROMEDIO."], ["gráfico", "Dibujo que representa los datos."]],
    worked: [
      { problem: "A1 = 4, A2 = 6, A3 = 8. ¿Qué da =PROMEDIO(A1:A3)?", steps: ["Sumo: 4 + 6 + 8 = 18.", "Cuento las celdas: 3.", "Divido: 18 ÷ 3."], answer: "6" },
      { problem: "En B2 está el precio de una galleta (500) y en C2 la cantidad vendida (12). ¿Qué fórmula da el total en D2?", steps: ["Total = precio × cantidad.", "En la hoja se multiplica con *.", "Escribo la fórmula con nombres de celdas."], answer: "=B2*C2 (da 6000)" }
    ],
    practice: [
      ["¿Qué identifica la celda D7?", "Columna D, fila 7", ["Fila D, columna 7", "Siete celdas D", "La página 7"], "Primero la letra (columna) y luego el número (fila)."],
      ["¿Qué símbolo se usa para multiplicar en una hoja de cálculo?", "*", ["x", "÷", "#"], "El asterisco multiplica."],
      ["Si A1 = 10 y A2 = 5, ¿qué da =A1-A2?", "5", ["15", "50", "2"], "10 − 5 = 5."],
      ["¿Qué incluye el rango B1:B4?", "B1, B2, B3 y B4", ["Solo B1 y B4", "B1 y B2", "Toda la hoja"], "Los dos puntos indican «desde… hasta…»."],
      ["Si A1 = 20 y A2 = 4, ¿qué da =A1/A2?", "5", ["80", "24", "16"], "20 ÷ 4 = 5."],
      ["¿Qué pasa si cambias un número usado en una fórmula?", "El resultado se actualiza solo", ["La fórmula se borra", "Hay que reescribir todo", "Nada cambia nunca"], "Las fórmulas se recalculan automáticamente."],
      ["A1 = 2, A2 = 3, A3 = 5. ¿Qué da =SUMA(A1:A3)?", "10", ["30", "5", "8"], "2 + 3 + 5 = 10."],
      ["¿Qué gráfico es bueno para comparar ventas de cada día?", "Un gráfico de barras", ["Un mapa del mundo", "Una foto", "Un texto largo"], "Las barras muestran fácilmente qué día vendió más."],
      ["Escribes «A1+A2» sin el signo =. ¿Qué pasa?", "Se muestra como texto, no calcula", ["Calcula igual", "Se borra la hoja", "Da error de pantalla"], "Sin = la hoja no sabe que es una fórmula."]
    ]
  },
  "xtec6e": {
    before: ["Los makers crean, reparan y comparten usando herramientas, electrónica, programación e impresión 3D.", "La impresión 3D fabrica un objeto añadiendo capas, a partir de un modelo digital."],
    vocab: [["modelo 3D", "Diseño digital de un objeto con ancho, alto y profundidad."], ["laminador", "Programa que corta el modelo en capas e instruye a la impresora."], ["filamento", "Hilo de plástico que la impresora derrite."], ["fabricación aditiva", "Hacer objetos agregando material capa por capa."], ["prototipo", "Primera versión para probar un diseño."]],
    worked: [
      { problem: "Se rompió el gancho de una mochila. Planea cómo hacer uno nuevo con impresión 3D.", steps: ["Mido el gancho original con una regla.", "Diseño el modelo 3D con esas medidas.", "Lo paso por el laminador y lo imprimo.", "Lo pruebo; si no encaja, ajusto el modelo y reimprimo."], answer: "Medir → diseñar → laminar → imprimir → probar y mejorar." },
      { problem: "Una pieza de 2 cm de alto se imprime en capas de 0,2 mm. ¿Cuántas capas tiene?", steps: ["Paso 2 cm a milímetros: 20 mm.", "Divido por el grosor de cada capa: 20 ÷ 0,2.", "Resultado: 100."], answer: "100 capas." }
    ],
    practice: [
      ["¿Qué material usan muchas impresoras 3D escolares?", "Filamento de plástico", ["Tinta de lapicero", "Arena de playa", "Papel de cuaderno"], "El filamento (como el PLA) se derrite y se deposita."],
      ["¿Qué hace el laminador?", "Corta el modelo en capas para la impresora", ["Pinta la pieza", "Enfría la casa", "Escribe el modelo a mano"], "Prepara las instrucciones capa por capa."],
      ["¿En qué dirección se construye la pieza en una impresora 3D?", "De abajo hacia arriba", ["De arriba hacia abajo", "De afuera hacia adentro solamente", "Toda de una vez"], "Cada capa se apoya en la anterior."],
      ["La impresión 3D también se llama fabricación…", "Aditiva", ["Sustractiva", "Invisible", "Líquida"], "Agrega material en lugar de quitarlo."],
      ["¿Qué caracteriza a un maker?", "Crea, repara y comparte sus proyectos", ["Solo compra cosas nuevas", "Nunca prueba sus ideas", "Bota lo que se daña"], "La cultura maker valora hacer con las propias manos."],
      ["¿Por qué hay que tener cuidado con la boquilla de la impresora?", "Está muy caliente", ["Está congelada", "Tiene electricidad en el aire", "Es de papel"], "Derrite plástico a más de 180 °C."],
      ["La pieza impresa no encaja. ¿Qué haces?", "Ajusto las medidas del modelo y reimprimo", ["Boto la impresora", "La fuerzo hasta romperla", "Digo que funcionó"], "Mejorar el diseño es parte del proceso."],
      ["Compartir tu diseño para que otros lo mejoren es parte de…", "La cultura maker", ["El plagio", "La basura electrónica", "Un virus"], "Los makers comparten conocimiento."]
    ]
  },
  "xtec6f": {
    before: ["La tecnología tiene muchas profesiones, y casi todas combinan creatividad, lógica y trabajo en equipo.", "No necesitas saber todo ahora: la curiosidad y la práctica son el primer paso."],
    vocab: [["programador", "Persona que escribe código para apps, webs y juegos."], ["ciberseguridad", "Protección de sistemas y datos contra ataques."], ["científico de datos", "Persona que analiza mucha información para encontrar patrones."], ["diseñador de experiencia de usuario", "Persona que hace que una app sea fácil y agradable de usar."], ["ingeniero en robótica", "Persona que diseña y construye robots."]],
    worked: [
      { problem: "A Sara le encanta dibujar y pensar cómo usan las personas las apps. ¿Qué carrera podría interesarle?", steps: ["Le gusta el diseño visual.", "También le importa cómo se sienten los usuarios.", "Eso une diseño y tecnología."], answer: "Diseño de experiencia de usuario (UX) o diseño de interfaces." },
      { problem: "Un hospital quiere un brazo mecánico para ayudar en operaciones. ¿Qué profesionales necesita?", steps: ["Alguien que diseñe la máquina con sensores y motores: ingeniería en robótica.", "Alguien que escriba el programa: programación.", "Alguien que proteja el sistema de ataques: ciberseguridad."], answer: "Robótica, programación y ciberseguridad trabajando en equipo." }
    ],
    practice: [
      ["¿Quién hace que una app sea fácil de usar?", "Un diseñador de experiencia de usuario", ["Un técnico de nevera", "Un piloto", "Un panadero"], "Piensa en cómo la usan las personas."],
      ["¿Quién diseña robots para fábricas o para el espacio?", "Un ingeniero en robótica", ["Un científico de datos", "Un animador", "Un periodista"], "Une mecánica, electrónica y programación."],
      ["¿Quién escribe el código de un videojuego?", "Un programador", ["Un diseñador de ropa", "Un jardinero", "Un médico"], "Programar es escribir instrucciones."],
      ["¿Qué hace un técnico en reparación de equipos?", "Arregla computadores y aparatos", ["Escribe noticias", "Siembra árboles", "Diseña ropa"], "Diagnostica y repara hardware."],
      ["¿Qué habilidad sirve en casi todas las carreras de tecnología?", "Resolver problemas paso a paso", ["Memorizar canciones", "Correr rápido", "Dibujar solo paisajes"], "El pensamiento lógico es clave."],
      ["Un experto que busca fallas de seguridad con permiso de la empresa es un…", "Hacker ético", ["Ladrón de datos", "Spammer", "Troll"], "Ayuda a corregir fallas antes de que alguien las aproveche."],
      ["¿Quién crea animaciones y efectos para películas con computador?", "Un animador digital", ["Un electricista", "Un cajero", "Un fontanero"], "Usa software de animación 3D."],
      ["¿Las carreras de tecnología son solo para hombres?", "No, son para todas las personas", ["Sí, solo hombres", "Solo para adultos mayores", "Solo para genios"], "Cualquier persona con interés y práctica puede dedicarse a ellas."]
    ]
  },
  "xtec6g": {
    before: ["Una noticia falsa es información inventada o manipulada presentada como verdad; un ultrafalso (deepfake) imita con IA la cara o la voz de alguien.", "Ante algo sorprendente: pausa, revisa la fuente y la fecha, y compara con otros medios."],
    vocab: [["noticia falsa", "Información inventada o manipulada que se presenta como cierta."], ["ultrafalso", "Video, audio o imagen hecho con IA que imita a una persona real."], ["fuente", "Quién publica o de dónde viene la información."], ["titular engañoso", "Título exagerado que busca clics."], ["verificador de datos", "Organización que comprueba si algo es cierto."]],
    worked: [
      { problem: "Ves la noticia: «¡Científicos confirman que el chocolate cura todas las enfermedades!». ¿Cómo la analizas?", steps: ["Pausa: el titular es exagerado y emocionante.", "Fuente: es una página desconocida sin autor.", "Comparo: ningún medio serio ni científico lo publica."], answer: "Es probablemente falsa: no la comparto." },
      { problem: "Un audio dice ser de la rectora anunciando que no habrá clases un mes. ¿Qué haces?", steps: ["Me detengo: podría ser una voz falsa hecha con IA.", "Reviso los canales oficiales del colegio.", "Si no aparece allí, no lo reenvío y aviso a un adulto."], answer: "Verificar en canales oficiales antes de creerlo o compartirlo." }
    ],
    practice: [
      ["¿Qué señal hace sospechar de un ultrafalso?", "Los labios no coinciden con la voz", ["El video tiene buena luz", "Lo publica un medio conocido", "La persona habla normal"], "Los detalles raros delatan videos hechos con IA."],
      ["Una noticia vieja reenviada como nueva…", "También engaña", ["Siempre es cierta", "Es mejor", "No importa"], "Revisar la fecha es parte de verificar."],
      ["¿Qué es un titular engañoso?", "Un título exagerado que busca clics", ["Un título corto y exacto", "El nombre del periódico", "La fecha"], "Prometen algo que el texto no cumple."],
      ["¿Qué hacen los verificadores de datos?", "Comprueban si una información es cierta", ["Inventan noticias", "Venden celulares", "Borran internet"], "Investigan y publican si algo es verdadero o falso."],
      ["¿Por qué las noticias falsas se comparten tanto?", "Porque provocan emociones fuertes", ["Porque son aburridas", "Porque son largas", "Porque tienen fuentes"], "Miedo, rabia o risa nos hacen compartir sin pensar."],
      ["Una imagen parece sospechosa. ¿Qué herramienta ayuda?", "La búsqueda inversa de imágenes", ["Subirle el brillo", "Reenviarla a todos", "Ponerle un filtro"], "Muestra dónde apareció antes la imagen."],
      ["Si ya compartiste algo que resultó falso, ¿qué haces?", "Aviso que era falso y lo borro", ["No digo nada", "Lo comparto otra vez", "Invento otra noticia"], "Corregir ayuda a frenar la desinformación."],
      ["¿Cuál es una fuente más confiable para una noticia de salud?", "El sitio oficial del ministerio de salud", ["Un mensaje en cadena", "Un video sin autor", "Un comentario anónimo"], "Las fuentes oficiales y expertas son más confiables."]
    ]
  },
  "xtec6h": {
    before: ["Los proyectos tecnológicos siguen pasos ordenados: planear, hacer, probar y mejorar.", "Saltarse un paso suele traer errores difíciles de encontrar después."],
    vocab: [["planear", "Decidir qué se hará y cómo antes de empezar."], ["recolectar datos", "Reunir información, por ejemplo con una encuesta."], ["reproducir un error", "Hacer que el error vuelva a ocurrir para estudiarlo."], ["iterar", "Repetir el ciclo de probar y mejorar."]],
    worked: [
      { problem: "Quieres saber cuál es la fruta favorita de tu curso. Ordena el proyecto.", steps: ["Pregunta: ¿cuál es la fruta favorita?", "Recolecto datos con una encuesta.", "Organizo los datos en una hoja de cálculo.", "Calculo los totales con SUMA.", "Hago un gráfico de barras y concluyo."], answer: "Pregunta → recolectar → organizar → calcular → graficar → concluir." },
      { problem: "Tu juego se cierra cuando el puntaje llega a 100. ¿Cómo lo depuras?", steps: ["Reproduzco el error llegando a 100 puntos.", "Aíslo la parte que se ejecuta con puntaje 100.", "Leo esas líneas y encuentro el bloque «detener todo».", "Lo corrijo y pruebo de nuevo."], answer: "Reproducir → aislar → leer → corregir → probar." }
    ],
    practice: [
      ["¿Qué paso va justo después de diseñar el modelo 3D?", "Laminarlo en capas", ["Revisar la pieza terminada", "Tener la idea", "Pintar la pieza"], "Idea → modelo → laminar → imprimir → revisar."],
      ["Al verificar una noticia, ¿qué va después de revisar la fuente?", "Revisar la fecha", ["Compartirla", "Hacer una pausa", "Olvidarla"], "Pausa → fuente → fecha → comparar → decidir."],
      ["En un análisis de datos, ¿qué va al final?", "Sacar conclusiones", ["Hacer la pregunta", "Recolectar datos", "Organizar en la hoja"], "Las conclusiones se basan en los resultados."],
      ["Al depurar, después de aislar la parte que falla…", "Leo esas líneas con cuidado", ["Borro todo el programa", "Comparto el programa", "Apago el computador"], "Leer línea por línea muestra el error."],
      ["¿Qué significa iterar?", "Repetir el ciclo de probar y mejorar", ["Terminar sin probar", "Empezar otro proyecto", "Borrar todo"], "Cada vuelta mejora el resultado."],
      ["¿Qué tienen en común todos estos proyectos?", "Planear, hacer, probar y mejorar", ["Usar siempre impresora 3D", "No tener pasos", "Terminar sin revisar"], "Es el patrón común de los proyectos."],
      ["Imprimes una pieza sin revisar el modelo y sale torcida. ¿Qué paso te saltaste?", "Revisar el modelo antes de imprimir", ["Encender la luz", "Comprar otra impresora", "Ninguno"], "Revisar a tiempo ahorra material."],
      ["Para analizar datos, ¿qué va primero?", "Hacer una pregunta clara", ["Hacer un gráfico", "Calcular el promedio", "Concluir"], "La pregunta guía todo el proyecto."]
    ]
  },
  "xtec6i": {
    before: ["Pensar críticamente es buscar pistas y razones antes de creer o compartir algo.", "Un hecho se puede comprobar; una opinión es lo que alguien piensa o siente."],
    vocab: [["hecho", "Afirmación que se puede comprobar."], ["opinión", "Lo que alguien piensa, cree o siente."], ["intención", "Para qué se creó un contenido: informar, vender, engañar…"], ["conclusión", "Idea final a la que llegas con razones."], ["pensamiento crítico", "Analizar la información antes de aceptarla."]],
    worked: [
      { problem: "Clasifica: «El video se publicó el lunes» y «El video es aburrido».", steps: ["«Se publicó el lunes» se puede comprobar mirando la fecha: hecho.", "«Es aburrido» depende de quién lo vea: opinión."], answer: "Primera: hecho · Segunda: opinión." },
      { problem: "En la historia, el pueblo creyó un video falso del alcalde. ¿Qué pistas debieron revisar?", steps: ["La fuente: una cuenta desconocida.", "La emoción: el video causaba mucho miedo.", "Los detalles: la voz no coincidía con los labios.", "La confirmación: ningún medio lo publicó."], answer: "Fuente, emoción, detalles raros y falta de confirmación." }
    ],
    practice: [
      ["«El equipo probó el invento tres veces» es…", "Un hecho", ["Una opinión", "Una pregunta", "Un ultrafalso"], "Se puede comprobar."],
      ["«El invento es el mejor del mundo» es…", "Una opinión", ["Un hecho", "Un dato medible", "Una fecha"], "Expresa lo que alguien piensa."],
      ["¿Qué pregunta ayuda a pensar críticamente sobre un video?", "¿Quién lo creó y con qué intención?", ["¿Cuántos colores tiene?", "¿Es largo?", "¿Tiene música?"], "La intención revela si busca informar o engañar."],
      ["En el proyecto maker, ¿qué va después de construir?", "Probar", ["Identificar el problema", "Tener la idea", "Diseñar"], "Problema → idea → diseño → construcción → prueba → mejora."],
      ["¿Qué hace fuerte una conclusión?", "Citar partes del texto como razones", ["Escribirla en mayúsculas", "Hacerla muy corta sin razones", "Copiar la pregunta"], "Las evidencias apoyan la conclusión."],
      ["Una noticia busca hacerte enojar para que la compartas. Su intención probablemente es…", "Manipular o ganar clics", ["Informar con calma", "Enseñar matemáticas", "Ayudarte a dormir"], "Las emociones fuertes se usan para viralizar."],
      ["«La impresora tardó 2 horas en hacer la pieza» es…", "Un hecho", ["Una opinión", "Un sentimiento", "Un rumor"], "Se puede medir y comprobar."],
      ["Antes de leer, plantearse preguntas sirve para…", "Leer con propósito", ["Leer más lento sin entender", "Saltarse el texto", "Nada"], "Sabes qué buscar mientras lees."]
    ]
  }
});
