/* Lecciones completas: Matemáticas */
window.CURRICULUM_LESSONS = window.CURRICULUM_LESSONS || {};
Object.assign(window.CURRICULUM_LESSONS, {
  "m0a": {
    hook: "¿Cuántos dedos tienes en tus dos manos? ¡Vamos a contarlos juntos!",
    steps: [
      { title: "Los números para contar", text: "Para contar decimos los números siempre en el mismo orden: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.", example: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10 🖐️🖐️" },
      { title: "Señala cada cosa", text: "Toca o señala cada cosa con tu dedo. Cada vez que tocas una cosa, dices un número.", example: "🐥 uno · 🐥 dos · 🐥 tres" },
      { title: "Una sola vez", text: "Cada cosa se cuenta una sola vez. Si cuentas dos veces la misma, te equivocas.", example: "⭐⭐⭐⭐ → 1, 2, 3, 4 (sin repetir ninguna)" },
      { title: "El último número", text: "El último número que dices te dice cuántas cosas hay en total. ¡Esa es la respuesta!", example: "🍎🍎🍎 → 1, 2, 3. ¡Hay 3 manzanas!" }
    ],
    remember: ["Contamos 1, 2, 3… siempre en orden.", "Cada cosa se cuenta una sola vez.", "El último número dice cuántas hay."],
    mistake: "A veces contamos una cosa dos veces o nos saltamos una. Para evitarlo, aparta cada cosa que ya contaste o tócala con el dedo.",
    fun: "¿Sabías que contamos de 10 en 10 porque tenemos 10 dedos en las manos? ¡Los dedos fueron la primera calculadora!",
    check: [
      ["¿Cuántas manzanas hay? 🍎🍎🍎🍎", "4", ["3", "5"]],
      ["¿Qué número dices al final cuando cuentas?", "El que dice cuántas cosas hay", ["El primero", "Ninguno"]],
      ["¿Cuántas veces se cuenta cada cosa?", "Una sola vez", ["Dos veces", "Tres veces"]]
    ]
  },
  "m0b": {
    hook: "Si tú tienes 4 galletas y tu amigo tiene 2, ¿quién tiene más? ¡Vamos a descubrirlo!",
    steps: [
      { title: "Mira los dos grupos", text: "Comparar es mirar dos grupos de cosas y ver cuál tiene más y cuál tiene menos.", example: "🐟🐟🐟🐟 y 🐟🐟" },
      { title: "Haz parejas", text: "Pon una cosa de un grupo junto a una cosa del otro. El grupo al que le sobran cosas tiene más.", example: "🐟🐟🐟🐟 / 🐟🐟 → sobran 2 peces arriba" },
      { title: "Cuenta cada grupo", text: "También puedes contar los dos grupos. El número más grande es el grupo que tiene más.", example: "4 peces y 2 peces → 4 es más que 2" },
      { title: "Iguales", text: "Si al hacer parejas no sobra ninguna cosa, los dos grupos tienen lo mismo. Son iguales.", example: "🌼🌼🌼 y 🌼🌼🌼 → ¡iguales!" }
    ],
    remember: ["El grupo con más cosas tiene MÁS.", "El grupo con menos cosas tiene MENOS.", "Si no sobra nada, son iguales."],
    mistake: "Algunos niños creen que el grupo que ocupa más espacio tiene más. ¡No siempre! Cuenta o haz parejas para estar seguro.",
    fun: "¿Sabías que los cuervos y las abejas pueden saber qué grupo tiene más cosas? ¡Los animales también comparan!",
    check: [
      ["¿Qué grupo tiene más? 🐟🐟🐟🐟 o 🐟🐟", "🐟🐟🐟🐟", ["🐟🐟", "Son iguales"]],
      ["¿Qué grupo tiene menos? 🍓🍓🍓 o 🍓🍓🍓🍓🍓", "🍓🍓🍓", ["🍓🍓🍓🍓🍓", "Son iguales"]],
      ["Si al hacer parejas no sobra nada, los grupos son…", "Iguales", ["Más", "Menos"]]
    ]
  },
  "m0c": {
    hook: "Mira a tu alrededor: ¿ves algo redondo como una pelota o algo con puntas como un techo?",
    steps: [
      { title: "El círculo", text: "El círculo es redondo. No tiene puntas ni lados rectos. Rueda muy bien.", example: "⚪ una moneda, un plato, una rueda" },
      { title: "El cuadrado", text: "El cuadrado tiene 4 lados y todos son iguales. También tiene 4 puntas.", example: "⬛ una ventana, una galleta cuadrada" },
      { title: "El triángulo", text: "El triángulo tiene 3 lados y 3 puntas. Parece el techo de una casita.", example: "🔺 un trozo de pizza, una señal" },
      { title: "El rectángulo", text: "El rectángulo tiene 4 lados, pero dos son largos y dos son cortos. Parece un cuadrado estirado.", example: "🚪 una puerta, un libro" }
    ],
    remember: ["El círculo es redondo y no tiene lados.", "El cuadrado tiene 4 lados iguales.", "El triángulo tiene 3 lados."],
    mistake: "A veces confundimos el cuadrado con el rectángulo. Fíjate: en el cuadrado todos los lados son iguales; en el rectángulo hay lados largos y cortos.",
    fun: "¿Sabías que las abejas hacen sus casitas con forma de hexágono, una figura de 6 lados?",
    check: [
      ["¿Cuántos lados tiene un triángulo?", "3", ["4", "0"]],
      ["¿Qué figura es redonda?", "El círculo", ["El cuadrado", "El triángulo"]],
      ["¿Qué figura tiene 4 lados iguales?", "El cuadrado", ["El círculo", "El triángulo"]]
    ]
  },
  "m0d": {
    hook: "Rojo, azul, rojo, azul… ¿qué color sigue? ¡Ya sabes qué es un patrón!",
    steps: [
      { title: "¿Qué es un patrón?", text: "Un patrón es algo que se repite siempre en el mismo orden, una y otra vez.", example: "🍎🍌🍎🍌🍎🍌" },
      { title: "Busca lo que se repite", text: "Mira con calma y busca el trocito que se repite. Ese trocito es la parte del patrón.", example: "🐶🐱🐶🐱 → se repite 🐶🐱" },
      { title: "¿Qué sigue?", text: "Cuando sabes qué se repite, puedes decir qué viene después. Solo sigue el mismo orden.", example: "🍎🍌🍎🍌🍎 … ¿qué sigue? 🍌" },
      { title: "Patrones más largos", text: "Algunos patrones tienen tres cosas que se repiten. Igual buscamos el trocito y seguimos.", example: "🔴🔵🟡🔴🔵🟡🔴 … sigue 🔵" }
    ],
    remember: ["Un patrón se repite siempre igual.", "Busca el trocito que se repite.", "Sigue el mismo orden para saber qué viene."],
    mistake: "A veces miramos solo la última cosa y adivinamos. Mejor lee el patrón desde el principio y di los nombres en voz alta.",
    fun: "¿Sabías que las rayas de la cebra y los días de la semana también son patrones? ¡Están por todas partes!",
    check: [
      ["🍎🍌🍎🍌🍎 … ¿qué sigue?", "🍌", ["🍎", "🍇"]],
      ["🔴🔵🟡🔴🔵🟡🔴 … ¿qué sigue?", "🔵", ["🔴", "🟡"]],
      ["Un patrón es algo que…", "Se repite en el mismo orden", ["Nunca se repite", "Cambia siempre"]]
    ]
  },
  "xmat0a": {
    hook: "¿Quién es más grande, un elefante o un ratón? ¡Vamos a comparar!",
    steps: [
      { title: "Grande y pequeño", text: "Comparamos dos cosas para ver cuál es más grande y cuál es más pequeña.", example: "🐘 es más grande que 🐭" },
      { title: "Alto y bajito", text: "Para ver quién es más alto, ponemos las cosas paradas una al lado de la otra, empezando desde el piso.", example: "🦒 es más alta que 🐶" },
      { title: "Largo y corto", text: "Para ver qué es más largo, ponemos las dos cosas juntas, empezando en el mismo lugar.", example: "🐍 es más larga que 🐛" },
      { title: "Pesado y liviano", text: "Algunas cosas pesan mucho y otras pesan poco. Si las cargas, sientes cuál pesa más.", example: "Una sandía 🍉 pesa más que una uva 🍇" }
    ],
    remember: ["Grande y pequeño hablan del tamaño.", "Alto y bajito hablan de la altura.", "Pesado y liviano hablan del peso."],
    mistake: "Lo más grande no siempre es lo más pesado. ¡Un globo grande pesa menos que una piedra pequeña!",
    fun: "¿Sabías que la ballena azul es el animal más grande del mundo? ¡Es más grande que un dinosaurio!",
    check: [
      ["¿Qué es más grande?", "🐘 elefante", ["🐭 ratón", "🐜 hormiga"]],
      ["¿Quién es más alta?", "🦒 jirafa", ["🐶 perro", "🐰 conejo"]],
      ["¿Qué pesa más?", "🍉 sandía", ["🍇 uva", "🪶 pluma"]]
    ]
  },
  "xmat0b": {
    hook: "¿Dónde está tu nariz? ¿Arriba o abajo de tu boca? ¡Hoy aprendemos a decir dónde están las cosas!",
    steps: [
      { title: "Arriba y abajo", text: "Arriba es hacia el cielo. Abajo es hacia el piso. El sombrero va arriba y los zapatos van abajo.", example: "El pájaro está ARRIBA del árbol 🐦🌳" },
      { title: "Dentro y fuera", text: "Dentro es en el interior de algo. Fuera es afuera. El pez vive dentro del agua.", example: "🐟 está DENTRO de la pecera · 🐱 está FUERA" },
      { title: "Primero y último", text: "En una fila, el primero es el que va adelante. El último es el que va al final.", example: "🐥🐥🐥🦆 → el pato es el ÚLTIMO" },
      { title: "Cerca y lejos", text: "Cerca es al lado de ti. Lejos es en un lugar apartado. El sol está muy lejos de nosotros.", example: "Mi mochila está CERCA · la luna está LEJOS 🌙" }
    ],
    remember: ["Arriba y abajo.", "Dentro y fuera.", "Primero y último en una fila."],
    mistake: "A veces confundimos primero y último. El primero es el que llega antes, el que está delante de todos.",
    fun: "¿Sabías que los astronautas en el espacio flotan y no hay un arriba ni un abajo como en la Tierra?",
    check: [
      ["El pájaro está sobre el árbol. Está…", "Arriba", ["Abajo", "Dentro"]],
      ["El pez está en la pecera. Está…", "Dentro", ["Fuera", "Arriba"]],
      ["En la fila, el que va adelante de todos es el…", "Primero", ["Último", "Del medio"]]
    ]
  },
  "xmat0c": {
    hook: "¿Cuántos años tienes? ¡Ese también es un número! Vamos a conocer los números del 1 al 10.",
    steps: [
      { title: "Los números en fila", text: "Los números van en orden: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Cada uno tiene su lugar.", example: "1 2 3 4 5 6 7 8 9 10" },
      { title: "Antes y después", text: "El número que viene después es uno más. El número que va antes es uno menos.", example: "El 4 va después del 3 y antes del 5" },
      { title: "Cuenta con tu cuerpo", text: "Tu cuerpo te ayuda a contar: tienes 1 nariz, 2 ojos y 5 dedos en cada mano.", example: "1, 2, 3, 4, 5 🖐️" },
      { title: "Número y cantidad", text: "Cada número dice cuántas cosas hay. El 3 son tres cosas, el 6 son seis cosas.", example: "3 = ⭐⭐⭐ · 6 = ⭐⭐⭐⭐⭐⭐" }
    ],
    remember: ["Los números van del 1 al 10 en orden.", "El número de después es uno más.", "Cada número dice cuántas cosas hay."],
    mistake: "Muchos niños escriben el 6 y el 9 al revés. Recuerda: el 6 tiene la pancita abajo y el 9 tiene la pancita arriba.",
    fun: "¿Sabías que el 0 se inventó mucho después que los otros números? ¡Significa que no hay nada!",
    check: [
      ["¿Qué número va después del 7?", "8", ["6", "9"]],
      ["¿Qué número va antes del 5?", "4", ["6", "3"]],
      ["¿Cuántos dedos tienes en una mano?", "5", ["10", "4"]]
    ]
  },
  "xmat0d": {
    hook: "Tienes 2 caramelos y te regalan 1 más. ¿Tienes más o menos que antes?",
    steps: [
      { title: "Juntar", text: "Juntar es poner cosas en un mismo grupo. Cuando juntamos, tenemos más que antes.", example: "🍎🍎 ➕ 🍎 = 3 manzanas" },
      { title: "Cuenta todo", text: "Después de juntar, cuenta todas las cosas desde el principio para saber cuántas hay ahora.", example: "🐥🐥🐥 y 🐥🐥 → 1, 2, 3, 4, 5. ¡5 pollitos!" },
      { title: "Quitar", text: "Quitar es sacar cosas de un grupo. Cuando quitamos, nos quedan menos que antes.", example: "🎈🎈🎈🎈 y se vuela 1 🎈 → quedan 3" },
      { title: "Cuenta lo que queda", text: "Después de quitar, cuenta solo las cosas que quedan. Esa es la respuesta.", example: "🍪🍪🍪🍪🍪, me como 2 → quedan 🍪🍪🍪 = 3" }
    ],
    remember: ["Juntar nos da más.", "Quitar nos deja menos.", "Contamos para saber cuántas hay."],
    mistake: "Al quitar, a veces contamos también lo que se fue. Tapa con la mano lo que quitaste y cuenta solo lo que queda.",
    fun: "¿Sabías que el signo ➕ se usa para juntar y el ➖ para quitar? ¡Pronto los vas a usar mucho!",
    check: [
      ["🍎🍎 y 🍎🍎 juntas son…", "4 manzanas", ["3 manzanas", "5 manzanas"]],
      ["Tienes 🎈🎈🎈 y se vuela 1. ¿Cuántos quedan?", "2", ["3", "4"]],
      ["Si quitamos cosas, nos quedan…", "Menos", ["Más", "Las mismas"]]
    ]
  },
  "xmat0e": {
    hook: "¿Cómo guardas tus juguetes? Si pones los autos juntos y los peluches juntos, ¡estás clasificando!",
    steps: [
      { title: "¿Qué es clasificar?", text: "Clasificar es poner juntas las cosas que se parecen en algo. Así todo queda ordenado.", example: "🐶 y 🐱 son animales · 🍌 y 🍇 son frutas" },
      { title: "Por color", text: "Podemos juntar las cosas que tienen el mismo color: las rojas con las rojas, las azules con las azules.", example: "🔴🍎🍓 rojas · 🔵💙🫐 azules" },
      { title: "Por forma o tamaño", text: "También podemos juntar por forma o por tamaño: las redondas juntas, las grandes juntas.", example: "⚽🏀 redondas · 📦🎁 cuadradas" },
      { title: "El que no va", text: "A veces una cosa no se parece a las demás. Esa es la que no pertenece al grupo.", example: "🍌🍇🍎🐶 → el 🐶 no es fruta" }
    ],
    remember: ["Clasificar es juntar lo que se parece.", "Podemos clasificar por tipo, color, forma o tamaño.", "Lo que no se parece, va en otro grupo."],
    mistake: "A veces mezclamos dos reglas a la vez. Primero elige una sola regla, por ejemplo el color, y úsala con todas las cosas.",
    fun: "¿Sabías que en el supermercado las cosas están clasificadas? ¡Las frutas en un lugar y la leche en otro!",
    check: [
      ["¿Cuál NO es fruta? 🍌🍇🍎🐶", "🐶", ["🍌", "🍇"]],
      ["🐶 y 🐱 van juntos porque son…", "Animales", ["Frutas", "Juguetes"]],
      ["Clasificar es…", "Juntar lo que se parece", ["Contar hasta 10", "Tirar las cosas"]]
    ]
  },
  "xmat0f": {
    hook: "¿Qué haces primero en la mañana: te pones los zapatos o los calcetines?",
    steps: [
      { title: "Primero", text: "Lo que pasa primero es lo que ocurre antes que todo. Es el comienzo de la historia.", example: "Primero hay un huevo 🥚" },
      { title: "Después", text: "Después viene lo que pasa a continuación, cuando ya terminó lo primero.", example: "Después nace un pollito 🐣" },
      { title: "Al final", text: "Al final es lo último que pasa. Es el cierre de la historia.", example: "Al final crece una gallina 🐔" },
      { title: "Ordena la historia", text: "Para ordenar, piensa qué tiene que pasar antes para que pase lo siguiente.", example: "🥚 → 🐣 → 🐔" }
    ],
    remember: ["Primero, después y al final.", "Algunas cosas tienen que pasar antes que otras.", "Ordenar nos ayuda a pensar."],
    mistake: "A veces ponemos el final al principio. Pregúntate: ¿esto puede pasar si lo otro no pasó antes?",
    fun: "¿Sabías que una oruga 🐛 primero hace un capullo y al final se convierte en mariposa 🦋?",
    check: [
      ["¿Qué pasa primero?", "🥚 huevo", ["🐔 gallina", "🐣 pollito"]],
      ["¿Qué te pones primero?", "Los calcetines", ["Los zapatos", "Da igual"]],
      ["¿Qué viene al final? 🐛 → capullo → …", "🦋 mariposa", ["🥚 huevo", "🐛 oruga"]]
    ]
  },
  "m1a": {
    hook: "¿Cómo sabes si 47 es más que 74? El secreto está en las decenas y las unidades.",
    steps: [
      { title: "La decena", text: "Una decena es un grupo de 10. Cuando juntamos 10 unidades, formamos 1 decena, como un paquete de 10 lápices.", example: "10 unidades = 1 decena ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️" },
      { title: "Dos cifras", text: "En un número de dos cifras, la cifra de la izquierda dice las decenas y la de la derecha dice las unidades.", example: "47 = 4 decenas y 7 unidades" },
      { title: "Descomponer", text: "Podemos separar un número en decenas y unidades. Las decenas valen 10 cada una, así que 3 decenas valen 30.", example: "35 = 30 + 5 · 82 = 80 + 2" },
      { title: "Contar hasta 100", text: "Después de 9 unidades viene una decena nueva: 19, 20; 29, 30. Así seguimos hasta llegar a 10 decenas, que es 100.", example: "…, 98, 99, 100" }
    ],
    remember: ["1 decena = 10 unidades.", "La cifra de la izquierda son las decenas.", "10 decenas = 100."],
    mistake: "No es lo mismo 47 que 74. En 47 hay 4 decenas (40) y en 74 hay 7 decenas (70). ¡La posición de la cifra cambia su valor!",
    fun: "¿Sabías que la palabra 'centenario' significa 100 años? 'Cien' viene del latín 'centum'.",
    check: [
      ["¿Cuántas decenas tiene el 63?", "6", ["3", "9"]],
      ["¿Cómo se descompone 58?", "50 + 8", ["5 + 8", "80 + 5"]],
      ["¿Qué número viene después del 79?", "80", ["70", "710"]]
    ]
  },
  "m1b": {
    hook: "Tienes 8 canicas y ganas 5 más. ¿Cuántas tienes? ¡Hay un truco para sumar rápido!",
    steps: [
      { title: "Sumar es juntar", text: "Sumar es juntar dos grupos para saber cuántos hay en total. Usamos el signo + y el signo =.", example: "🍎🍎🍎 + 🍎🍎 = 5 manzanas → 3 + 2 = 5" },
      { title: "Empieza por el mayor", text: "Pon el número más grande en tu cabeza y cuenta hacia adelante el número pequeño con los dedos.", example: "8 + 5 → 9, 10, 11, 12, 13" },
      { title: "Completa el 10", text: "Otro truco: primero completa el 10 y luego suma lo que falta. Es muy rápido.", example: "8 + 5 = 8 + 2 + 3 = 10 + 3 = 13" },
      { title: "Los dobles", text: "Aprende los dobles de memoria: 5 + 5, 6 + 6, 7 + 7. Te ayudan a sumar números vecinos.", example: "6 + 6 = 12, entonces 6 + 7 = 13" }
    ],
    remember: ["Sumar es juntar.", "Cuenta hacia adelante desde el número mayor.", "Completar el 10 hace la suma más fácil."],
    mistake: "Al contar hacia adelante, algunos niños cuentan también el número de partida. En 8 + 5 no digas 8, 9, 10…; empieza en 9.",
    fun: "¿Sabías que el orden no cambia la suma? 3 + 9 da lo mismo que 9 + 3: ¡12!",
    check: [
      ["¿Cuánto es 8 + 5?", "13", ["12", "14"]],
      ["¿Cuánto es 7 + 7?", "14", ["13", "15"]],
      ["Para sumar 9 + 4, conviene empezar desde…", "El 9", ["El 4", "El 0"]]
    ]
  },
  "m1c": {
    hook: "Tenías 12 globos y se volaron 4. ¿Cuántos te quedan? ¡Aprendamos a restar!",
    steps: [
      { title: "Restar es quitar", text: "Restar es quitar algunas cosas de un grupo y ver cuántas quedan. Usamos el signo −.", example: "🎈🎈🎈🎈🎈 − 🎈🎈 = 🎈🎈🎈 → 5 − 2 = 3" },
      { title: "Contar hacia atrás", text: "Empieza en el número grande y cuenta hacia atrás tantas veces como dice el número pequeño.", example: "12 − 4 → 11, 10, 9, 8. ¡Quedan 8!" },
      { title: "Pensar qué falta", text: "También puedes preguntar: ¿cuánto le falta al número pequeño para llegar al grande?", example: "15 − 13 → de 13 a 15 faltan 2" },
      { title: "Comprobar con la suma", text: "La resta y la suma son amigas. Suma el resultado y lo que quitaste: debe darte el número del principio.", example: "12 − 4 = 8, porque 8 + 4 = 12 ✔" }
    ],
    remember: ["Restar es quitar.", "Cuenta hacia atrás o piensa qué falta.", "Comprueba sumando."],
    mistake: "En la resta el orden sí importa. Siempre se escribe primero el número más grande: 12 − 4, no 4 − 12.",
    fun: "¿Sabías que si a cualquier número le restas el mismo número, siempre te da 0? 9 − 9 = 0.",
    check: [
      ["¿Cuánto es 12 − 4?", "8", ["9", "7"]],
      ["¿Cuánto es 15 − 13?", "2", ["3", "28"]],
      ["¿Cómo compruebas que 10 − 3 = 7?", "7 + 3 = 10", ["7 − 3 = 4", "10 + 3 = 13"]]
    ]
  },
  "m1d": {
    hook: "¿A qué hora entras al colegio? El reloj nos lo dice si sabemos mirar sus agujas.",
    steps: [
      { title: "Las partes del reloj", text: "El reloj tiene los números del 1 al 12 en círculo y dos agujas: una corta y una larga.", example: "🕐 números del 1 al 12" },
      { title: "La aguja corta", text: "La aguja corta marca la hora. Mira a qué número apunta y esa es la hora.", example: "Aguja corta en el 3 → son las 3" },
      { title: "La aguja larga en el 12", text: "Cuando la aguja larga apunta justo al 12, decimos que es la hora 'en punto'.", example: "🕒 = Son las 3 en punto (3:00)" },
      { title: "Escribir la hora", text: "En los relojes digitales la hora en punto se escribe con el número de la hora, dos puntos y 00.", example: "Las 8 en punto = 8:00" }
    ],
    remember: ["La aguja corta marca la hora.", "La aguja larga en el 12 es 'en punto'.", "En punto se escribe con :00."],
    mistake: "Es fácil confundir las agujas. Recuerda: la corta es la de la hora, y la larga es la de los minutos.",
    fun: "¿Sabías que la aguja corta da 2 vueltas completas al reloj en un día entero?",
    check: [
      ["La aguja corta está en el 5 y la larga en el 12. ¿Qué hora es?", "Las 5 en punto", ["Las 12 en punto", "Las 5 y media"]],
      ["¿Qué marca la aguja corta?", "La hora", ["Los minutos", "El día"]],
      ["¿Cómo se escriben las 7 en punto?", "7:00", ["7:30", "12:07"]]
    ]
  },
  "xmat1a": {
    hook: "Quieres comprar un lápiz de $8 y tienes una moneda de $5 y otra de $2. ¿Te alcanza?",
    steps: [
      { title: "Monedas y su valor", text: "Cada moneda tiene un número que dice cuánto vale. Una moneda de $5 vale lo mismo que cinco monedas de $1.", example: "🪙 $5 = $1 + $1 + $1 + $1 + $1" },
      { title: "Sumar lo que tengo", text: "Para saber cuánto dinero tienes, suma el valor de todas tus monedas, no cuántas monedas son.", example: "2 monedas de $5 = $5 + $5 = $10" },
      { title: "¿Me alcanza?", text: "Compara tu dinero con el precio. Si tienes lo mismo o más, te alcanza. Si tienes menos, no te alcanza.", example: "Tengo $7 y el lápiz cuesta $8 → me falta $1" },
      { title: "¿Cuánto me sobra?", text: "Si pagas y tenías más dinero que el precio, resta el precio de tu dinero para saber cuánto te sobra.", example: "Tengo $10, compro un dulce de $6 → $10 − $6 = $4" }
    ],
    remember: ["Cada moneda tiene su valor.", "Sumamos para saber cuánto tenemos.", "Restamos para saber cuánto sobra."],
    mistake: "No cuentes cuántas monedas tienes, sino cuánto valen. 3 monedas de $1 ($3) valen menos que 1 moneda de $5.",
    fun: "¿Sabías que hace mucho tiempo la gente usaba sal, conchas o semillas de cacao como dinero?",
    check: [
      ["¿Cuánto valen 2 monedas de $5?", "$10", ["$2", "$7"]],
      ["Tienes $10 y compras algo de $6. ¿Cuánto te sobra?", "$4", ["$16", "$6"]],
      ["¿Qué vale más?", "1 moneda de $5", ["3 monedas de $1", "Valen igual"]]
    ]
  },
  "xmat1b": {
    hook: "¿Cuántas cuartas mide tu mesa? ¿Y cuántos pasos hay de la puerta a tu cama? ¡Midamos!",
    steps: [
      { title: "Medir el largo", text: "Para medir lo largo usamos una regla o una cinta. También podemos usar cuartas, pasos o clips puestos en fila.", example: "La mesa mide 9 cuartas ✋" },
      { title: "Sin espacios", text: "Al medir con clips o cuartas, ponlos uno detrás de otro, sin dejar huecos y sin encimarlos. Luego cuéntalos.", example: "📎📎📎📎📎 → el lápiz mide 5 clips" },
      { title: "Medir el peso", text: "Para saber qué pesa más usamos una balanza. El lado que baja tiene lo más pesado.", example: "⚖️ La manzana baja: pesa más que la uva" },
      { title: "Medir el tiempo", text: "El tiempo se mide con relojes y calendarios. Algunas cosas duran poco, como un aplauso, y otras mucho, como un viaje.", example: "Cepillarse los dientes dura unos 2 minutos 🪥" }
    ],
    remember: ["Lo largo se mide con regla, cuartas o clips.", "Lo pesado se mide con balanza.", "El tiempo se mide con reloj."],
    mistake: "Si mides con tu mano y un adulto mide con la suya, les darán números distintos porque sus manos son de distinto tamaño. Por eso existe la regla.",
    fun: "¿Sabías que en la antigüedad se medía con el 'pie' del rey? ¡Cada vez que cambiaba el rey, cambiaba la medida!",
    check: [
      ["¿Con qué medimos lo pesado?", "Con una balanza", ["Con un reloj", "Con una regla"]],
      ["¿Con qué medimos el tiempo?", "Con un reloj", ["Con una balanza", "Con clips"]],
      ["Al medir con clips debes ponerlos…", "En fila, sin huecos", ["Separados", "Uno encima del otro"]]
    ]
  },
  "xmat1c": {
    hook: "Si hay 7 niños y juegan en parejas, ¿alguno se queda solo? ¡Descubramos los números pares e impares!",
    steps: [
      { title: "Formar parejas", text: "Junta los objetos de dos en dos. Si todos tienen pareja y no sobra ninguno, el número es par.", example: "🧦🧦 🧦🧦 🧦🧦 🧦🧦 → 8 es par" },
      { title: "Si sobra uno", text: "Si al formar parejas sobra un objeto solito, el número es impar.", example: "🧦🧦 🧦🧦 🧦🧦 🧦 → 7 es impar" },
      { title: "Mira la última cifra", text: "Los números pares terminan en 0, 2, 4, 6 u 8. Los impares terminan en 1, 3, 5, 7 o 9.", example: "34 es par (termina en 4) · 51 es impar (termina en 1)" },
      { title: "Salteados", text: "Pares e impares se van turnando: uno par, uno impar, uno par…", example: "1 impar, 2 par, 3 impar, 4 par, 5 impar" }
    ],
    remember: ["Par: todos tienen pareja.", "Impar: sobra uno.", "Los pares terminan en 0, 2, 4, 6 u 8."],
    mistake: "Para saber si un número grande es par, no mires la primera cifra sino la última. 52 es par, aunque empiece con 5.",
    fun: "¿Sabías que tus zapatos, tus ojos y tus orejas vienen en pares? ¡Por eso decimos 'un par de zapatos'!",
    check: [
      ["¿Cuál es par?", "8", ["7", "5"]],
      ["¿Cuál es impar?", "9", ["10", "4"]],
      ["Si al formar parejas sobra uno, el número es…", "Impar", ["Par", "Cero"]]
    ]
  },
  "xmat1d": {
    hook: "En una carrera llegaron los corredores 29, 9, 39 y 19. ¿Cómo los ponemos en orden?",
    steps: [
      { title: "Menor a mayor", text: "Ordenar de menor a mayor es empezar por el número más pequeño y terminar con el más grande.", example: "3, 7, 12, 20" },
      { title: "Mira las decenas", text: "Primero compara las decenas. El número con menos decenas es el menor. Un número de una cifra no tiene decenas.", example: "29 tiene 2 decenas, 39 tiene 3 → 29 < 39" },
      { title: "Si empatan, mira las unidades", text: "Si dos números tienen las mismas decenas, compara las unidades para decidir cuál es menor.", example: "45 y 42 → 2 < 5, entonces 42 < 45" },
      { title: "Los signos < y >", text: "El signo < se lee 'es menor que' y > se lee 'es mayor que'. La boquita abierta mira siempre al número mayor.", example: "9 < 19 · 39 > 29" }
    ],
    remember: ["Primero compara las decenas.", "Si son iguales, compara las unidades.", "La boquita abierta mira al mayor."],
    mistake: "Algunos piensan que 9 es mayor que 19 porque 9 es grande. ¡Pero 19 tiene una decena más! 9 < 19.",
    fun: "¿Sabías que el diccionario también ordena, pero por letras? ¡Ordenar sirve para encontrar cosas rápido!",
    check: [
      ["Ordena de menor a mayor: 39, 9, 29, 19", "9, 19, 29, 39", ["39, 29, 19, 9", "9, 29, 19, 39"]],
      ["¿Cuál es mayor: 42 o 45?", "45", ["42", "Son iguales"]],
      ["¿Qué signo va? 9 __ 19", "<", [">", "="]]
    ]
  },
  "xmat1e": {
    hook: "En un bus van 8 niños y suben 5 más. ¿Cuántos van ahora? ¡Los problemas son cuentos con números!",
    steps: [
      { title: "Lee con calma", text: "Lee el problema despacio, como un cuento. Busca los números y piensa qué está pasando.", example: "'8 niños en el bus y suben 5'" },
      { title: "¿Suman o restan?", text: "Si llegan, suben, ganan o juntamos, sumamos. Si se van, bajan, pierden o regalamos, restamos.", example: "suben → sumar · se van → restar" },
      { title: "Haz la cuenta", text: "Escribe la operación con los números del problema y resuélvela.", example: "8 + 5 = 13" },
      { title: "Responde con palabras", text: "Termina con una frase completa que conteste la pregunta. ¿Tiene sentido tu respuesta?", example: "En el bus van 13 niños 🚌" }
    ],
    remember: ["Lee el problema como un cuento.", "Si llegan o juntamos, sumamos.", "Si se van o quitamos, restamos."],
    mistake: "Algunos niños suman todos los números sin pensar. Antes de calcular, pregúntate si la cantidad aumenta o disminuye.",
    fun: "¿Sabías que los pilotos, cocineros y doctores resuelven problemas de matemáticas todos los días?",
    check: [
      ["Hay 8 niños y suben 5. ¿Cuántos hay?", "13", ["3", "12"]],
      ["Tenía 15 dulces y regalé 6. ¿Cuántos me quedan?", "9", ["21", "11"]],
      ["Si en el problema dice 'se fueron', debes…", "Restar", ["Sumar", "No hacer nada"]]
    ]
  },
  "xmat1f": {
    hook: "¿Qué día es hoy? ¿Y cuántos días faltan para el fin de semana? ¡El calendario nos ayuda!",
    steps: [
      { title: "Los 7 días", text: "La semana tiene 7 días: lunes, martes, miércoles, jueves, viernes, sábado y domingo. Luego empieza otra vez.", example: "lunes → martes → miércoles → jueves → viernes → sábado → domingo" },
      { title: "Ayer, hoy y mañana", text: "Hoy es el día en que estamos. Ayer fue el día anterior y mañana será el día siguiente.", example: "Hoy es lunes, ayer fue domingo, mañana será martes 📅" },
      { title: "Los 12 meses", text: "El año tiene 12 meses: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre y diciembre.", example: "Enero es el primer mes y diciembre el último" },
      { title: "El calendario", text: "El calendario muestra los días de cada mes en filas. Cada fila es una semana. Allí marcamos cumpleaños y fiestas.", example: "🎂 Mi cumpleaños es el 10 de mayo" }
    ],
    remember: ["La semana tiene 7 días.", "El año tiene 12 meses.", "Ayer, hoy y mañana nos ubican en el tiempo."],
    mistake: "Muchos confunden ayer con mañana. Ayer ya pasó; mañana todavía no llega.",
    fun: "¿Sabías que cada 4 años febrero tiene un día extra, el 29? Ese año se llama bisiesto.",
    check: [
      ["¿Cuántos días tiene la semana?", "7", ["5", "12"]],
      ["Si hoy es miércoles, mañana será…", "Jueves", ["Martes", "Viernes"]],
      ["¿Cuántos meses tiene el año?", "12", ["7", "10"]]
    ]
  },
  "m2a": {
    hook: "¿Qué pasa cuando sumas 7 + 5 en las unidades y te da 12? ¡No cabe en una sola casilla! Aprende a 'llevar'.",
    steps: [
      { title: "Ordena en columnas", text: "Escribe un número debajo del otro: unidades bajo unidades y decenas bajo decenas. Así no se mezclan.", example: "  27\n+ 15" },
      { title: "Suma las unidades", text: "Empieza siempre por la derecha, sumando las unidades. Si el resultado es 9 o menos, escríbelo y sigue.", example: "7 + 5 = 12" },
      { title: "Llevar una decena", text: "Si las unidades suman 10 o más, escribe solo la cifra de las unidades y lleva 1 decena arriba de la columna de las decenas.", example: "12 → escribo 2 y llevo 1" },
      { title: "Suma las decenas", text: "Ahora suma las decenas sin olvidar la que llevaste. El resultado completo aparece abajo.", example: "1 + 2 + 1 = 4 → 27 + 15 = 42" },
      { title: "Otro ejemplo", text: "Practica con 38 + 46: unidades 8 + 6 = 14, escribo 4 y llevo 1; decenas 1 + 3 + 4 = 8. Resultado 84.", example: "38 + 46 = 84" }
    ],
    remember: ["Unidades debajo de unidades.", "Empieza por las unidades, a la derecha.", "Si pasas de 9, llevas 1 decena."],
    mistake: "El error más común es olvidar sumar la decena que se lleva. Escríbela pequeñita arriba para no olvidarla.",
    fun: "¿Sabías que el ábaco, una herramienta muy antigua, ya usaba el truco de 'llevar' hace miles de años?",
    check: [
      ["¿Cuánto es 27 + 15?", "42", ["32", "312"]],
      ["¿Cuánto es 38 + 46?", "84", ["74", "714"]],
      ["Si las unidades suman 13, escribes…", "3 y llevas 1", ["13 y no llevas", "1 y llevas 3"]]
    ]
  },
  "m2b": {
    hook: "¿Cómo le quitas 7 a 2? ¡No se puede… a menos que le pidas ayuda a las decenas!",
    steps: [
      { title: "Ordena en columnas", text: "Escribe el número mayor arriba y el menor abajo, con las unidades bien alineadas bajo las unidades.", example: "  52\n− 17" },
      { title: "¿Alcanza?", text: "Mira las unidades: si arriba hay menos que abajo, no puedes restar todavía. En 52 − 17, 2 es menor que 7.", example: "2 − 7 → ¡no alcanza!" },
      { title: "Pide prestado", text: "Toma 1 decena del número de arriba y conviértela en 10 unidades. El 5 baja a 4 y el 2 se convierte en 12.", example: "5 decenas → 4 decenas · 2 unidades → 12 unidades" },
      { title: "Resta las columnas", text: "Ahora resta las unidades y luego las decenas. Recuerda usar el número de decenas que quedó.", example: "12 − 7 = 5 · 4 − 1 = 3 → 52 − 17 = 35" },
      { title: "Comprueba sumando", text: "Suma tu resultado con el número que quitaste. Si da el número de arriba, ¡está bien!", example: "35 + 17 = 52 ✔" }
    ],
    remember: ["El número mayor va arriba.", "Si no alcanza, pide prestada una decena.", "Comprueba con una suma."],
    mistake: "Muchos niños restan al revés el número pequeño menos el grande (7 − 2 = 5). ¡Eso está mal! Siempre se resta el de abajo al de arriba, pidiendo prestado si hace falta.",
    fun: "¿Sabías que en algunos países le dicen 'desagrupar' o 'canjear' a pedir prestado? ¡Es lo mismo!",
    check: [
      ["¿Cuánto es 52 − 17?", "35", ["45", "25"]],
      ["¿Cuánto es 43 − 18?", "25", ["35", "61"]],
      ["Para comprobar 60 − 24 = 36, haces…", "36 + 24", ["36 − 24", "60 + 24"]]
    ]
  },
  "m2c": {
    hook: "Hay 3 platos con 2 galletas cada uno. ¿Cuántas galletas hay? ¡Puedes contarlas o puedes multiplicar!",
    steps: [
      { title: "Grupos iguales", text: "Multiplicar sirve cuando tenemos varios grupos con la misma cantidad de cosas en cada uno.", example: "🍪🍪 🍪🍪 🍪🍪 → 3 grupos de 2" },
      { title: "Es una suma repetida", text: "Multiplicar es sumar el mismo número varias veces. 3 grupos de 2 es 2 + 2 + 2.", example: "2 + 2 + 2 = 6" },
      { title: "El signo ×", text: "Escribimos con el signo ×, que se lee 'por'. El primer número dice cuántos grupos hay y el segundo, cuántos hay en cada grupo.", example: "3 × 2 = 6 (tres por dos es seis)" },
      { title: "Filas y columnas", text: "Podemos dibujar las cosas en filas iguales. Contamos filas por cuántos hay en cada fila.", example: "⭐⭐⭐⭐⭐\n⭐⭐⭐⭐⭐\n⭐⭐⭐⭐⭐\n⭐⭐⭐⭐⭐ → 4 × 5 = 20" }
    ],
    remember: ["Multiplicar es sumar grupos iguales.", "3 × 2 es 3 grupos de 2.", "El signo × se lee 'por'."],
    mistake: "No confundas 3 × 2 con 3 + 2. 3 + 2 = 5, pero 3 × 2 = 6, porque son tres grupos de dos.",
    fun: "¿Sabías que una araña tiene 8 patas? Entonces 2 arañas tienen 2 × 8 = 16 patas 🕷️🕷️.",
    check: [
      ["¿Cuánto es 3 × 2?", "6", ["5", "32"]],
      ["5 grupos de 2 es lo mismo que…", "2 + 2 + 2 + 2 + 2", ["5 + 2", "5 + 5 + 2"]],
      ["4 filas de 5 estrellas son…", "20", ["9", "45"]]
    ]
  },
  "m2d": {
    hook: "Si repartes 14 dulces entre 2 amigos, ¿les toca lo mismo? ¿Y con 7 dulces?",
    steps: [
      { title: "Repartir en dos", text: "Un número es par si se puede repartir en dos grupos iguales sin que sobre nada.", example: "14 → 7 y 7 ✔ es par" },
      { title: "Los impares", text: "Un número es impar si al repartirlo en dos grupos iguales sobra 1.", example: "7 → 3 y 3, sobra 1 → es impar" },
      { title: "La última cifra", text: "Para saber rápido, mira solo la última cifra. Si es 0, 2, 4, 6 u 8, el número es par. Si es 1, 3, 5, 7 o 9, es impar.", example: "96 par · 73 impar · 100 par" },
      { title: "Sumar pares e impares", text: "Par + par da par. Impar + impar también da par. Pero par + impar da impar.", example: "4 + 6 = 10 · 3 + 5 = 8 · 4 + 3 = 7" }
    ],
    remember: ["Par: se reparte en dos grupos iguales.", "Impar: sobra 1.", "Mira la última cifra."],
    mistake: "El 0 también es par: termina en 0 y al repartir 0 en dos grupos no sobra nada.",
    fun: "¿Sabías que en muchas calles las casas de un lado tienen números pares y las del otro lado, impares?",
    check: [
      ["¿Cuál es par?", "96", ["73", "15"]],
      ["¿Cuál es impar?", "73", ["14", "100"]],
      ["3 + 5 da un número…", "Par", ["Impar", "Negativo"]]
    ]
  },
  "m2e": {
    hook: "Tu programa favorito empieza a las 3 y media. ¿Cómo se ve eso en el reloj?",
    steps: [
      { title: "Una vuelta es una hora", text: "La aguja larga da una vuelta completa al reloj en una hora. Cuando vuelve al 12, empieza otra hora.", example: "De 3:00 a 4:00 la aguja larga da 1 vuelta" },
      { title: "Media vuelta", text: "Cuando la aguja larga recorre la mitad del reloj y llega al 6, ha pasado media hora, que son 30 minutos.", example: "Del 12 al 6 = media hora = 30 minutos" },
      { title: "'Y media'", text: "Si la aguja larga está en el 6, decimos 'y media'. La aguja corta queda entre dos números: usa el número menor.", example: "🕞 = 3:30, las tres y media" },
      { title: "Escribirla", text: "En reloj digital, la hora y media se escribe con :30 después de la hora.", example: "Las ocho y media = 8:30" }
    ],
    remember: ["La aguja larga en el 6 es 'y media'.", "Media hora son 30 minutos.", "Se escribe :30."],
    mistake: "A las 3 y media la aguja corta ya no está justo en el 3, sino entre el 3 y el 4. No digas 'las 4': aún no llega al 4.",
    fun: "¿Sabías que 'media hora' es igual a dos 'cuartos de hora'? 15 + 15 = 30 minutos.",
    check: [
      ["La aguja larga en el 6 significa…", "Y media", ["En punto", "Y cuarto"]],
      ["¿Cómo se escriben las ocho y media?", "8:30", ["8:00", "6:08"]],
      ["¿Cuántos minutos tiene media hora?", "30", ["60", "15"]]
    ]
  },
  "xmat2a": {
    hook: "Pagas con $1000 un jugo de $650. ¿Cuánto dinero te tienen que devolver?",
    steps: [
      { title: "Sumar precios", text: "Si compras varias cosas, suma todos los precios para saber cuánto debes pagar en total.", example: "Pan $450 + leche $300 = $750" },
      { title: "¿Qué es el vuelto?", text: "El vuelto es el dinero que te devuelven cuando pagas con más dinero del que cuesta lo que compras.", example: "Pagas $1000 por algo de $650 → te devuelven dinero" },
      { title: "Calcular el vuelto", text: "Resta el precio del dinero que entregaste. El resultado es tu vuelto.", example: "$1000 − $650 = $350" },
      { title: "Varios productos", text: "Si compras varias cosas, primero suma los precios y luego resta ese total del dinero que pagaste.", example: "$450 + $300 = $750 · $1000 − $750 = $250" },
      { title: "Comprueba", text: "Suma el precio y el vuelto: debe darte exactamente el dinero que entregaste.", example: "$650 + $350 = $1000 ✔" }
    ],
    remember: ["Sumamos para saber cuánto pagar.", "Vuelto = dinero entregado − precio.", "Precio + vuelto = dinero entregado."],
    mistake: "A veces se suma en vez de restar para el vuelto. El vuelto siempre es menor que el dinero que entregaste.",
    fun: "¿Sabías que en algunos países al vuelto le dicen 'cambio' o 'vuelta'? ¡Es la misma idea!",
    check: [
      ["Pagas $1000 por un jugo de $650. ¿Vuelto?", "$350", ["$450", "$1650"]],
      ["Pan $450 y leche $300. ¿Total?", "$750", ["$150", "$700"]],
      ["Pagas $500 por algo de $200. ¿Vuelto?", "$300", ["$700", "$200"]]
    ]
  },
  "xmat2b": {
    hook: "¿Medirías la cancha de fútbol con una regla de 30 cm? ¡Te tardarías muchísimo! Para eso existen los metros.",
    steps: [
      { title: "El centímetro", text: "El centímetro (cm) es una medida pequeña. Lo usamos para cosas que caben en la mano, como un lápiz o una goma.", example: "Un borrador mide 5 cm" },
      { title: "Usar la regla", text: "Pon el 0 de la regla justo en la punta del objeto. Mira en qué número termina el objeto: esa es su medida.", example: "📏 El lápiz empieza en 0 y termina en 15 → mide 15 cm" },
      { title: "El metro", text: "El metro (m) es una medida más grande. Lo usamos para cosas largas, como una puerta, una pieza o un patio.", example: "Una puerta mide 2 m" },
      { title: "1 metro = 100 cm", text: "Un metro es igual a 100 centímetros. Para pasar metros a centímetros, piensa: cada metro son 100 cm.", example: "2 m = 200 cm · 1 m y 50 cm = 150 cm" }
    ],
    remember: ["cm para cosas pequeñas.", "m para cosas grandes.", "1 m = 100 cm."],
    mistake: "Muchos empiezan a medir desde el 1 de la regla. ¡Se empieza desde el 0! Si no, la medida sale con 1 cm de más.",
    fun: "¿Sabías que una persona adulta mide más o menos 1 metro y 70 centímetros, es decir, 170 cm?",
    check: [
      ["¿Cuántos centímetros tiene 1 metro?", "100", ["10", "1000"]],
      ["¿Qué unidad usarías para medir una goma?", "Centímetros", ["Metros", "Kilómetros"]],
      ["2 m son…", "200 cm", ["20 cm", "2000 cm"]]
    ]
  },
  "xmat2c": {
    hook: "¿Cuántos caramelos hay en 3 cajas de 100, 2 bolsas de 10 y 7 sueltos? ¡Eso es el número 327!",
    steps: [
      { title: "La centena", text: "Una centena es un grupo de 100. Se forma con 10 decenas, o con 100 unidades.", example: "1 centena = 10 decenas = 100 unidades" },
      { title: "Tres cifras", text: "Un número de tres cifras tiene centenas (C), decenas (D) y unidades (U), de izquierda a derecha.", example: "327 → C = 3, D = 2, U = 7" },
      { title: "Descomponer", text: "Cada cifra vale según su lugar. El 3 de las centenas vale 300 y el 2 de las decenas vale 20.", example: "327 = 300 + 20 + 7" },
      { title: "El cero en el medio", text: "Si no hay decenas, ponemos un 0 en su lugar. El cero guarda el lugar para que el número no cambie.", example: "405 = 400 + 0 + 5 (no hay decenas)" },
      { title: "Comparar", text: "Para comparar números de tres cifras, mira primero las centenas; si son iguales, mira las decenas, y luego las unidades.", example: "512 > 498 porque 5 centenas > 4 centenas" }
    ],
    remember: ["1 centena = 10 decenas = 100 unidades.", "El valor de una cifra depende de su lugar.", "El 0 guarda el lugar vacío."],
    mistake: "Algunos escriben 'cuatrocientos cinco' como 4005. ¡Es 405! Solo hay tres lugares: centenas, decenas y unidades.",
    fun: "¿Sabías que el número 1000, que viene después del 999, se llama 'mil' y tiene 10 centenas?",
    check: [
      ["¿Cuánto vale el 3 en 327?", "300", ["3", "30"]],
      ["¿Cómo se escribe 600 + 40 + 8?", "648", ["6408", "846"]],
      ["¿Cuál es mayor?", "512", ["498", "Son iguales"]]
    ]
  },
  "xmat2d": {
    hook: "Un dado, una pelota y una lata son diferentes, pero los tres ocupan espacio. ¡Son cuerpos geométricos!",
    steps: [
      { title: "Figuras y cuerpos", text: "Las figuras como el cuadrado son planas, como un dibujo. Los cuerpos geométricos ocupan espacio: los puedes tomar con la mano.", example: "⬛ cuadrado (plano) · 🎲 cubo (cuerpo)" },
      { title: "El cubo", text: "El cubo tiene 6 caras y todas son cuadrados iguales. Tiene 8 esquinas, que se llaman vértices.", example: "🎲 un dado, un cubo de hielo 🧊" },
      { title: "La esfera", text: "La esfera es completamente redonda. No tiene caras planas ni esquinas, por eso rueda hacia todos lados.", example: "⚽ una pelota, una canica" },
      { title: "Cilindro y cono", text: "El cilindro parece un tubo: tiene dos caras planas redondas. El cono tiene una cara plana redonda y termina en punta.", example: "🥫 cilindro · 🍦 cono" }
    ],
    remember: ["Los cuerpos ocupan espacio.", "El cubo tiene 6 caras cuadradas.", "La esfera es redonda; el cono termina en punta."],
    mistake: "No confundas el círculo (plano) con la esfera (cuerpo). Una moneda dibujada es un círculo; una pelota es una esfera.",
    fun: "¿Sabías que las pirámides de Egipto son cuerpos geométricos? ¡Se llaman pirámides de base cuadrada!",
    check: [
      ["¿Qué cuerpo es una pelota?", "Esfera", ["Cubo", "Cono"]],
      ["¿Cuántas caras tiene un cubo?", "6", ["4", "8"]],
      ["¿Qué cuerpo parece un tubo?", "Cilindro", ["Esfera", "Cubo"]]
    ]
  },
  "xmat2e": {
    hook: "Un triciclo tiene 3 ruedas y un auto tiene 4. ¿Cuántas ruedas tienen 5 triciclos? ¡Las tablas del 3 y del 4 te ayudan!",
    steps: [
      { title: "Contar de 3 en 3", text: "La tabla del 3 es como saltar de 3 en 3 empezando desde 0. Cada salto suma 3.", example: "3, 6, 9, 12, 15, 18, 21, 24, 27, 30" },
      { title: "Contar de 4 en 4", text: "La tabla del 4 es saltar de 4 en 4. Cada número es 4 más que el anterior.", example: "4, 8, 12, 16, 20, 24, 28, 32, 36, 40" },
      { title: "Suma de grupos iguales", text: "Recuerda que multiplicar es sumar grupos iguales. 4 × 3 son 4 grupos de 3.", example: "4 × 3 = 3 + 3 + 3 + 3 = 12" },
      { title: "El truco del doble", text: "La tabla del 4 es el doble de la tabla del 2. Si sabes 2 × 6 = 12, entonces 4 × 6 es el doble: 24.", example: "2 × 6 = 12 → 4 × 6 = 24" },
      { title: "Resuelve un problema", text: "5 triciclos con 3 ruedas cada uno son 5 grupos de 3. Multiplica 5 × 3.", example: "5 × 3 = 15 ruedas 🚲" }
    ],
    remember: ["Tabla del 3: de 3 en 3.", "Tabla del 4: de 4 en 4.", "La tabla del 4 es el doble de la del 2."],
    mistake: "Al contar de 3 en 3 algunos se saltan un número. Usa los dedos: un dedo por cada salto para saber cuántas veces sumaste.",
    fun: "¿Sabías que en la tabla del 3, si sumas las cifras del resultado, siempre te da 3, 6 o 9? Por ejemplo, 27 → 2 + 7 = 9.",
    check: [
      ["¿Cuánto es 4 × 3?", "12", ["7", "43"]],
      ["¿Cuánto es 4 × 6?", "24", ["20", "10"]],
      ["¿Cuántas ruedas tienen 5 triciclos?", "15", ["8", "20"]]
    ]
  },
