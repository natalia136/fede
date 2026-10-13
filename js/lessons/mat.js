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
  "m3a": {
    hook: "¿Sabes cuánto es 6 × 7 sin contar con los dedos? Con las tablas, ¡lo sabrás en un segundo!",
    steps: [
      { title: "Para qué sirven las tablas", text: "Las tablas de multiplicar son resultados que aprendemos de memoria para no tener que sumar grupos cada vez.", example: "6 × 7 = 7 + 7 + 7 + 7 + 7 + 7 = 42" },
      { title: "El orden no importa", text: "Si cambias el orden de los números, el resultado es el mismo. Así, si sabes 3 × 7, también sabes 7 × 3.", example: "3 × 7 = 21 y 7 × 3 = 21" },
      { title: "Tablas fáciles", text: "Por 1 el número queda igual. Por 10 se le agrega un 0. Por 5 los resultados terminan en 0 o en 5.", example: "8 × 1 = 8 · 8 × 10 = 80 · 8 × 5 = 40" },
      { title: "Usa lo que sabes", text: "Si olvidas un resultado, parte de uno que conozcas y suma o resta un grupo más.", example: "8 × 7: sé 8 × 5 = 40, más 8 × 2 = 16 → 56" },
      { title: "El truco del 9", text: "En la tabla del 9, las cifras del resultado suman 9, y la cifra de las decenas es uno menos que el número por el que multiplicas.", example: "9 × 6 = 54 (5 + 4 = 9) · 9 × 8 = 72" }
    ],
    remember: ["Las tablas se aprenden de memoria.", "El orden no cambia el resultado.", "Puedes partir de una tabla que sabes."],
    mistake: "Muchos confunden 6 × 8 = 48 con 7 × 7 = 49 o 6 × 7 = 42. Practica un poquito cada día las tablas difíciles: 6, 7 y 8.",
    fun: "¿Sabías que con las tablas que conoces puedes saber cuántos días hay en 7 semanas? 7 × 7 = 49 días.",
    check: [
      ["¿Cuánto es 6 × 7?", "42", ["48", "36"]],
      ["Si 3 × 7 = 21, ¿cuánto es 7 × 3?", "21", ["10", "37"]],
      ["¿Cuánto es 9 × 8?", "72", ["81", "64"]]
    ]
  },
  "m3b": {
    hook: "Tienes 12 caramelos para 3 amigos. ¿Cuántos le tocan a cada uno si todos reciben igual?",
    steps: [
      { title: "Dividir es repartir", text: "Dividir es repartir una cantidad en grupos iguales. Usamos el signo ÷, que se lee 'dividido entre'.", example: "12 ÷ 3 → reparto 12 en 3 grupos" },
      { title: "Reparte de uno en uno", text: "Puedes dar un caramelo a cada amigo, luego otro, y así hasta que no queden. Cuenta cuántos tiene cada uno.", example: "🍬🍬🍬🍬 | 🍬🍬🍬🍬 | 🍬🍬🍬🍬 → 4 cada uno" },
      { title: "Piensa en la tabla", text: "Dividir es lo contrario de multiplicar. Pregúntate: ¿qué número por 3 da 12?", example: "3 × 4 = 12, entonces 12 ÷ 3 = 4" },
      { title: "Comprueba", text: "Multiplica tu resultado por el número entre el que dividiste. Si da el número inicial, está correcto.", example: "35 ÷ 5 = 7, porque 5 × 7 = 35 ✔" },
      { title: "Un problema", text: "En una caja hay 20 lápices para 4 mesas. Repartimos en partes iguales: 20 ÷ 4. Como 4 × 5 = 20, a cada mesa le tocan 5.", example: "20 ÷ 4 = 5 lápices ✏️" }
    ],
    remember: ["Dividir es repartir en partes iguales.", "Es lo contrario de multiplicar.", "Comprueba con una multiplicación."],
    mistake: "No es lo mismo 12 ÷ 3 que 3 ÷ 12. El número que se reparte va primero.",
    fun: "¿Sabías que no se puede dividir entre 0? Si no hay grupos, ¡no hay a quién repartirle!",
    check: [
      ["¿Cuánto es 12 ÷ 3?", "4", ["9", "36"]],
      ["¿Cuánto es 20 ÷ 4?", "5", ["16", "6"]],
      ["¿Cómo compruebas 35 ÷ 5 = 7?", "5 × 7 = 35", ["35 + 5 = 40", "7 − 5 = 2"]]
    ]
  },
  "m3c": {
    hook: "Cortas una pizza en 4 trozos iguales y te comes 1. ¿Cómo se escribe la parte que comiste?",
    steps: [
      { title: "Partes iguales", text: "Una fracción representa una parte de algo que dividimos en partes iguales. Si las partes no son iguales, no es una fracción.", example: "🍕 en 4 partes iguales" },
      { title: "El denominador", text: "El número de abajo se llama denominador. Dice en cuántas partes iguales dividimos el entero.", example: "1/4 → el 4 dice que hay 4 partes" },
      { title: "El numerador", text: "El número de arriba se llama numerador. Dice cuántas partes tomamos.", example: "Comí 1 trozo → 1/4 · Comí 3 trozos → 3/4" },
      { title: "Cómo se leen", text: "1/2 es un medio, 1/3 un tercio, 1/4 un cuarto, 1/5 un quinto. Desde el 11 decimos onceavos, doceavos…", example: "2/3 = dos tercios · 3/4 = tres cuartos" },
      { title: "Comparar", text: "Si dos fracciones tienen el mismo denominador, es mayor la que tiene el numerador más grande, porque tomas más partes.", example: "3/5 > 2/5" }
    ],
    remember: ["Las partes deben ser iguales.", "Denominador: en cuántas partes divido.", "Numerador: cuántas partes tomo."],
    mistake: "Algunos creen que 1/8 es más que 1/4 porque 8 es mayor. ¡Al revés! Si cortas en 8 trozos, cada trozo es más pequeño. 1/4 > 1/8.",
    fun: "¿Sabías que en la música también hay fracciones? Hay notas que duran 1/2, 1/4 y 1/8 de tiempo.",
    check: [
      ["Una pizza en 4 trozos, comes 1. ¿Qué fracción comiste?", "1/4", ["4/1", "1/3"]],
      ["En 3/5, ¿qué número es el denominador?", "5", ["3", "8"]],
      ["¿Qué es mayor?", "1/4", ["1/8", "Son iguales"]]
    ]
  },
  "m3d": {
    hook: "Tienes 4 bolsas con 6 dulces cada una. ¿Sumas, restas, multiplicas o divides? ¡Aprende a decidir!",
    steps: [
      { title: "Lee y entiende", text: "Lee el problema con calma, dos veces si hace falta. Cuéntalo con tus palabras: ¿qué está pasando?", example: "'4 bolsas, cada una con 6 dulces. ¿Cuántos dulces hay?'" },
      { title: "Busca los datos", text: "Subraya los números importantes y la pregunta. La pregunta te dice qué tienes que encontrar.", example: "Datos: 4 bolsas, 6 dulces · Pregunta: ¿cuántos en total?" },
      { title: "Elige la operación", text: "Junto → sumo. Quito → resto. Grupos iguales que se repiten → multiplico. Reparto en partes iguales → divido.", example: "Se repite 6 cuatro veces → multiplico" },
      { title: "Calcula", text: "Escribe la operación y resuélvela con cuidado.", example: "4 × 6 = 24" },
      { title: "Responde y revisa", text: "Escribe la respuesta con una frase completa y piensa si tiene sentido.", example: "Hay 24 dulces en total 🍬 (tiene sentido: más que 6)" }
    ],
    remember: ["Lee, busca datos y la pregunta.", "Junto, quito, repito o reparto.", "Responde con una frase y revisa."],
    mistake: "No elijas la operación por las palabras sueltas, sino por lo que pasa. Imagina la situación o haz un dibujo.",
    fun: "¿Sabías que el famoso matemático George Pólya escribió un libro entero sobre cómo resolver problemas? ¡Sus pasos se parecen mucho a estos!",
    check: [
      ["4 bolsas con 6 dulces. ¿Cuántos dulces?", "24", ["10", "2"]],
      ["24 dulces repartidos entre 3 niños. ¿Cuántos a cada uno?", "8", ["21", "27"]],
      ["Si hay que repartir en partes iguales, se…", "Divide", ["Suma", "Multiplica"]]
    ]
  },
  "xmat3a": {
    hook: "¿Qué pesa más, un kilo de algodón o un kilo de piedras? ¡Pesan lo mismo! Aprendamos a medir masa y capacidad.",
    steps: [
      { title: "La masa", text: "La masa nos dice cuánto 'pesa' algo. Se mide en kilogramos (kg) para cosas pesadas y en gramos (g) para cosas livianas.", example: "Una sandía: 3 kg · Una galleta: 10 g" },
      { title: "1 kg = 1000 g", text: "Un kilogramo es igual a 1000 gramos. Medio kilo es la mitad: 500 g, y un cuarto de kilo es 250 g.", example: "Medio kilo = 500 g · 2 kg = 2000 g" },
      { title: "La capacidad", text: "La capacidad es cuánto líquido cabe en un recipiente. Se mide en litros (L) y mililitros (mL).", example: "Una botella grande: 2 L · Una cucharadita: 5 mL" },
      { title: "1 L = 1000 mL", text: "Un litro es igual a 1000 mililitros. Medio litro son 500 mL y un cuarto de litro, 250 mL.", example: "Un cuarto de litro = 250 mL · 4 vasos de 250 mL = 1 L" }
    ],
    remember: ["La masa se mide en kg y g.", "La capacidad se mide en L y mL.", "1 kg = 1000 g y 1 L = 1000 mL."],
    mistake: "No mezcles las unidades: el litro es para líquidos que caben en un recipiente y el kilogramo es para lo que pesa algo.",
    fun: "¿Sabías que un litro de agua tiene una masa de casi exactamente 1 kilogramo?",
    check: [
      ["¿Cuántos gramos tiene 1 kg?", "1000", ["100", "10"]],
      ["Medio litro son…", "500 mL", ["50 mL", "250 mL"]],
      ["¿Con qué medimos cuánta agua cabe en una botella?", "Litros", ["Kilogramos", "Metros"]]
    ]
  },
  "xmat3b": {
    hook: "Si empiezas la tarea a las 7:15 y terminas a las 7:45, ¿cuánto tiempo estudiaste?",
    steps: [
      { title: "Minutos y horas", text: "Una hora tiene 60 minutos. En el reloj, la aguja larga avanza 5 minutos de un número al siguiente.", example: "Aguja larga en el 3 → 15 minutos · en el 9 → 45 minutos" },
      { title: "Cuarto y media", text: "Un cuarto de hora son 15 minutos y media hora son 30 minutos. Tres cuartos de hora son 45 minutos.", example: "7:15 = siete y cuarto · 7:30 = siete y media" },
      { title: "Calcular cuánto dura", text: "Para saber cuánto dura algo, resta la hora de inicio de la hora de término, o cuenta los minutos desde el inicio.", example: "De 7:15 a 7:45 → 45 − 15 = 30 minutos" },
      { title: "Pasar a la hora siguiente", text: "Si al sumar minutos pasas de 60, avanza una hora y sigue contando desde 0.", example: "8:40 + 30 minutos → 8:60 = 9:00, más 10 → 9:10" },
      { title: "El día y las fechas", text: "Un día tiene 24 horas. Las fechas se escriben con día, mes y año.", example: "13 de octubre de 2026 = 13/10/2026" }
    ],
    remember: ["1 hora = 60 minutos.", "1 día = 24 horas.", "Cuarto = 15 min, media = 30 min."],
    mistake: "Los minutos no funcionan como las decenas: después de 59 no viene 60 en la misma hora, sino que empieza una hora nueva.",
    fun: "¿Sabías que dividimos la hora en 60 minutos por una costumbre de los antiguos babilonios, que contaban de 60 en 60?",
    check: [
      ["De 7:15 a 7:45, ¿cuántos minutos pasan?", "30", ["45", "15"]],
      ["¿Cuántas horas tiene un día?", "24", ["12", "60"]],
      ["Son las 8:40. ¿Qué hora será en 30 minutos?", "9:10", ["8:70", "9:00"]]
    ]
  },
  "xmat3c": {
    hook: "En la tienda no necesitas saber el precio exacto para saber si te alcanza: ¡basta con estimar!",
    steps: [
      { title: "¿Qué es redondear?", text: "Redondear es cambiar un número por el número 'redondo' (terminado en 0) más cercano. Así es más fácil calcular.", example: "47 está más cerca de 50 que de 40" },
      { title: "La regla del 5", text: "Para redondear a la decena, mira la cifra de las unidades. Si es 5 o más, subes; si es menor que 5, bajas.", example: "47 → 50 · 43 → 40 · 65 → 70" },
      { title: "Redondear a la centena", text: "Para redondear a la centena, mira la cifra de las decenas y usa la misma regla del 5.", example: "342 → 300 · 368 → 400" },
      { title: "Estimar", text: "Estimar es calcular de forma aproximada con números redondeados. El resultado está cerca del exacto.", example: "48 + 31 ≈ 50 + 30 = 80 (el exacto es 79)" }
    ],
    remember: ["Mira la cifra de la derecha del lugar que redondeas.", "5 o más, sube; menos de 5, baja.", "Estimar es calcular aproximado."],
    mistake: "Al redondear 342 a la centena, algunos miran el 2 de las unidades. ¡Debes mirar las decenas, el 4! Por eso queda 300.",
    fun: "¿Sabías que el signo ≈ significa 'aproximadamente igual'? Lo usan los científicos todo el tiempo.",
    check: [
      ["Redondea 47 a la decena.", "50", ["40", "45"]],
      ["Redondea 368 a la centena.", "400", ["300", "370"]],
      ["Estima 48 + 31 redondeando.", "80", ["70", "90"]]
    ]
  },
  "xmat3d": {
    hook: "Mira los rieles del tren y las esquinas de tu cuaderno. ¡Están llenos de rectas y ángulos!",
    steps: [
      { title: "Rectas paralelas", text: "Dos rectas son paralelas cuando van siempre a la misma distancia y nunca se cruzan, aunque las alargues mucho.", example: "Los rieles del tren son paralelos 🛤️" },
      { title: "Rectas perpendiculares", text: "Dos rectas son perpendiculares cuando se cruzan formando cuatro esquinas iguales, como el signo +.", example: "Las esquinas de una hoja ➕" },
      { title: "El ángulo recto", text: "Un ángulo recto mide 90° y parece la esquina de un cuadrado. Puedes comprobarlo con la esquina de una hoja.", example: "La esquina de una puerta = 90°" },
      { title: "Agudo y obtuso", text: "Un ángulo agudo es más cerrado que el recto: mide menos de 90°. Un ángulo obtuso es más abierto: mide más de 90°.", example: "Tijeras poco abiertas = agudo · Un abanico muy abierto = obtuso" }
    ],
    remember: ["Paralelas: nunca se cruzan.", "Perpendiculares: se cruzan en ángulo recto.", "Agudo < 90° < obtuso."],
    mistake: "No toda recta que se cruza es perpendicular. Solo lo es si forma ángulos rectos de 90°.",
    fun: "¿Sabías que el símbolo ° de los grados se usa tanto para los ángulos como para la temperatura?",
    check: [
      ["Las rectas que nunca se cruzan son…", "Paralelas", ["Perpendiculares", "Curvas"]],
      ["Un ángulo recto mide…", "90°", ["45°", "180°"]],
      ["Un ángulo de 30° es…", "Agudo", ["Obtuso", "Recto"]]
    ]
  },
  "xmat3e": {
    hook: "¿Cuál es la fruta favorita de tu curso? Para saberlo rápido, organizamos los datos en tablas y gráficos.",
    steps: [
      { title: "Recoger datos", text: "Primero preguntamos y anotamos las respuestas. Una forma fácil es hacer una raya por cada respuesta.", example: "Manzana: ||||| · Plátano: ||| · Uva: ||||" },
      { title: "La tabla", text: "En una tabla escribimos cada opción y al lado cuántas veces aparece. Así los datos quedan ordenados.", example: "Manzana 5 · Plátano 3 · Uva 4" },
      { title: "El pictograma", text: "En un pictograma usamos dibujos. Fíjate en cuánto vale cada dibujo: a veces un dibujo vale más de 1.", example: "Si cada ⭐ vale 2, ⭐⭐⭐ = 6" },
      { title: "El gráfico de barras", text: "En un gráfico de barras, cada opción tiene una barra. La barra más alta es la que tiene más y la más baja, la que tiene menos.", example: "La barra de la manzana llega a 5: es la favorita 🍎" }
    ],
    remember: ["Las tablas ordenan los datos.", "En el pictograma, mira cuánto vale cada dibujo.", "La barra más alta es la que tiene más."],
    mistake: "En un pictograma, no cuentes solo los dibujos: multiplica por lo que vale cada uno. 3 estrellas que valen 2 son 6, no 3.",
    fun: "¿Sabías que los gráficos de barras los inventó William Playfair hace más de 200 años?",
    check: [
      ["Si cada ⭐ vale 2, ¿cuánto vale ⭐⭐⭐?", "6", ["3", "5"]],
      ["En un gráfico de barras, ¿qué barra muestra lo que más hay?", "La más alta", ["La más baja", "La primera"]],
      ["Manzana 5, plátano 3, uva 4. ¿Cuál tiene menos?", "Plátano", ["Manzana", "Uva"]]
    ]
  },
  "xmat3f": {
    hook: "Un estadio tiene 4528 asientos. ¿Cómo se lee ese número tan grande? ¡Conozcamos las unidades de mil!",
    steps: [
      { title: "La unidad de mil", text: "Cuando juntamos 10 centenas, formamos 1 unidad de mil, que vale 1000.", example: "10 centenas = 1000 = 1 unidad de mil" },
      { title: "Cuatro cifras", text: "Un número de cuatro cifras tiene unidades de mil (UM), centenas (C), decenas (D) y unidades (U).", example: "4528 → UM 4, C 5, D 2, U 8" },
      { title: "Valor posicional", text: "El valor de una cifra depende de su posición. El mismo 4 puede valer 4, 40, 400 o 4000.", example: "En 4528, el 4 vale 4000" },
      { title: "Descomponer y leer", text: "Descomponemos sumando el valor de cada cifra. Se lee empezando por los miles.", example: "4528 = 4000 + 500 + 20 + 8 → cuatro mil quinientos veintiocho" },
      { title: "Comparar", text: "Compara de izquierda a derecha: primero las unidades de mil, luego las centenas, y así sucesivamente.", example: "3999 < 4001 porque 3 UM < 4 UM" }
    ],
    remember: ["1 unidad de mil = 10 centenas = 1000.", "El valor de una cifra depende de su posición.", "Compara empezando por la izquierda."],
    mistake: "Cuidado con los ceros: 'tres mil cinco' se escribe 3005, no 305. Cada lugar vacío lleva un 0.",
    fun: "¿Sabías que si cuentas un número por segundo, tardarías casi 3 horas en llegar a 10 000?",
    check: [
      ["En 4528, ¿cuánto vale el 4?", "4000", ["4", "400"]],
      ["¿Cómo se escribe tres mil cinco?", "3005", ["305", "30005"]],
      ["¿Cuál es mayor?", "4001", ["3999", "Son iguales"]]
    ]
  },
  "m4a": {
    hook: "Una caja trae 23 lápices. ¿Cuántos lápices hay en 14 cajas? ¡Multiplicar por partes lo hace fácil!",
    steps: [
      { title: "Separa en decenas y unidades", text: "Para multiplicar un número grande, sepáralo en decenas y unidades. Es más fácil multiplicar cada parte por separado.", example: "23 = 20 + 3" },
      { title: "Multiplica cada parte", text: "Multiplica las decenas y las unidades por el otro número, y al final suma los dos resultados.", example: "23 × 4 = 20 × 4 + 3 × 4 = 80 + 12 = 92" },
      { title: "Ahora por 2 cifras", text: "Si el otro número también tiene dos cifras, sepáralo igual. Primero multiplica por las unidades y luego por las decenas.", example: "23 × 14 = 23 × 4 + 23 × 10" },
      { title: "Suma los resultados parciales", text: "Calcula cada parte y súmalas. Multiplicar por 10 es fácil: agrega un 0 al final.", example: "23 × 4 = 92 · 23 × 10 = 230 · 92 + 230 = 322" },
      { title: "En columna", text: "En el cuaderno: escribe 34 × 12. Primera fila 34 × 2 = 68. Segunda fila 34 × 10 = 340 (deja un 0 a la derecha). Suma: 68 + 340 = 408.", example: "34 × 12 = 408" }
    ],
    remember: ["Separa en decenas y unidades.", "Multiplica cada parte y suma.", "En la segunda fila deja un 0 porque multiplicas por decenas."],
    mistake: "El error más común es olvidar el 0 en la segunda fila. Al multiplicar por la cifra de las decenas, estás multiplicando por 10, 20, 30…",
    fun: "¿Sabías que hay un método antiguo llamado 'multiplicación en celosía' que usaban en la India y Arabia hace siglos?",
    check: [
      ["¿Cuánto es 23 × 4?", "92", ["82", "812"]],
      ["¿Cuánto es 23 × 14?", "322", ["92", "312"]],
      ["¿Cuánto es 34 × 12?", "408", ["68", "348"]]
    ]
  },
  "m4b": {
    hook: "Tienes 17 galletas para 5 amigos. ¿Les toca igual a todos? ¿Qué pasa con las que sobran?",
    steps: [
      { title: "Repartos no exactos", text: "A veces al repartir en partes iguales sobra algo que no alcanza para dar uno más a cada uno. Eso que sobra se llama residuo.", example: "17 galletas para 5 → 3 a cada uno, sobran 2" },
      { title: "Las partes de la división", text: "El número que se reparte es el dividendo, el número de partes es el divisor, lo que le toca a cada uno es el cociente y lo que sobra, el residuo.", example: "17 ÷ 5 → dividendo 17, divisor 5, cociente 3, residuo 2" },
      { title: "Cómo calcular", text: "Busca en la tabla del divisor el número más grande que no se pase del dividendo. Luego resta para hallar el residuo.", example: "Tabla del 5: 15 cabe en 17, 20 no → 3 × 5 = 15 · 17 − 15 = 2" },
      { title: "El residuo es pequeño", text: "El residuo siempre debe ser menor que el divisor. Si es igual o mayor, todavía alcanza para dar uno más a cada uno.", example: "23 ÷ 4 = 5, residuo 3 (3 es menor que 4 ✔)" },
      { title: "Comprueba", text: "Multiplica el cociente por el divisor y súmale el residuo. Debe darte el dividendo.", example: "5 × 3 + 2 = 17 ✔" }
    ],
    remember: ["Lo que sobra se llama residuo.", "El residuo es menor que el divisor.", "Cociente × divisor + residuo = dividendo."],
    mistake: "Si el residuo te sale mayor que el divisor, te equivocaste: le puedes dar uno más a cada uno. Revisa el cociente.",
    fun: "¿Sabías que el residuo te ayuda a saber qué día de la semana será? Dentro de 10 días: 10 ÷ 7 deja residuo 3, ¡así que será 3 días después de hoy!",
    check: [
      ["¿Cuál es el residuo de 17 ÷ 5?", "2", ["3", "5"]],
      ["¿Cuánto es 23 ÷ 4?", "5, residuo 3", ["6, residuo 1", "5, residuo 4"]],
      ["26 niños en grupos de 4. ¿Cuántos grupos completos hay?", "6", ["7", "5"]]
    ]
  },
  "m4c": {
    hook: "¿Es lo mismo comerte la mitad de una pizza que 2 de sus 4 trozos? ¡Sí! Esas son fracciones equivalentes.",
    steps: [
      { title: "Valen lo mismo", text: "Las fracciones equivalentes se escriben distinto pero representan la misma cantidad del entero.", example: "1/2 = 2/4 = 4/8 🍕" },
      { title: "Amplificar", text: "Para obtener una fracción equivalente, multiplica el numerador y el denominador por el mismo número.", example: "1/2 → (1 × 2)/(2 × 2) = 2/4" },
      { title: "Simplificar", text: "También puedes dividir numerador y denominador por el mismo número. La fracción queda más pequeña de escribir, pero vale lo mismo.", example: "4/8 → (4 ÷ 4)/(8 ÷ 4) = 1/2" },
      { title: "Más ejemplos", text: "Con 2/3 puedes multiplicar por 2 y por 3 y obtener una familia de fracciones equivalentes.", example: "2/3 = 4/6 = 6/9" },
      { title: "Cómo comprobar", text: "Multiplica en cruz: el numerador de una por el denominador de la otra. Si los dos productos son iguales, son equivalentes.", example: "1/2 y 2/4 → 1 × 4 = 4 y 2 × 2 = 4 ✔" }
    ],
    remember: ["Equivalentes valen lo mismo.", "Multiplica o divide arriba y abajo por el mismo número.", "Comprueba multiplicando en cruz."],
    mistake: "No sirve sumar el mismo número arriba y abajo: 1/2 no es igual a 2/3. Solo se vale multiplicar o dividir.",
    fun: "¿Sabías que cada fracción tiene infinitas fracciones equivalentes? 1/2 = 2/4 = 3/6 = 50/100 = …",
    check: [
      ["¿Qué fracción es equivalente a 1/2?", "2/4", ["2/3", "1/4"]],
      ["2/3 es equivalente a…", "4/6", ["3/4", "2/6"]],
      ["Para obtener una fracción equivalente debes…", "Multiplicar arriba y abajo por el mismo número", ["Sumar 1 arriba y abajo", "Cambiar solo el numerador"]]
    ]
  },
  "m4d": {
    hook: "Quieres poner una cinta alrededor de tu cuaderno. ¿Cuánta cinta necesitas? ¡Debes calcular el perímetro!",
    steps: [
      { title: "¿Qué es el perímetro?", text: "El perímetro es la medida del borde o contorno de una figura. Es lo que recorrerías si caminaras por todo su borde.", example: "La cerca alrededor de un jardín 🌻" },
      { title: "Suma todos los lados", text: "Para calcularlo, suma la medida de todos los lados de la figura, sin olvidar ninguno.", example: "Triángulo de 3, 4 y 5 cm → 3 + 4 + 5 = 12 cm" },
      { title: "El rectángulo", text: "El rectángulo tiene dos lados largos iguales y dos lados cortos iguales. Suma los cuatro.", example: "Rectángulo 5 y 3 → 5 + 3 + 5 + 3 = 16" },
      { title: "El cuadrado", text: "El cuadrado tiene 4 lados iguales, así que puedes multiplicar un lado por 4.", example: "Cuadrado de lado 6 cm → 6 × 4 = 24 cm" },
      { title: "Con unidades", text: "El perímetro es una longitud, así que se escribe con la misma unidad que los lados: cm, m o km.", example: "Una cancha de 20 m y 10 m → 20 + 10 + 20 + 10 = 60 m" }
    ],
    remember: ["Perímetro = suma de todos los lados.", "Cuadrado: lado × 4.", "Se mide en cm, m o km."],
    mistake: "En el rectángulo, muchos suman solo dos lados (5 + 3 = 8). ¡Son cuatro lados! El perímetro es 16.",
    fun: "¿Sabías que la palabra perímetro viene del griego: 'peri' significa alrededor y 'metro', medida?",
    check: [
      ["Perímetro de un rectángulo de 5 y 3:", "16", ["8", "15"]],
      ["Perímetro de un cuadrado de lado 6 cm:", "24 cm", ["12 cm", "36 cm"]],
      ["Perímetro de un triángulo de lados 3, 4 y 5:", "12", ["60", "9"]]
    ]
  },
  "m4e": {
    hook: "Si una pelota cuesta $2,50, ¿qué significa ese ',50'? ¡Son los decimales, partes más pequeñas que la unidad!",
    steps: [
      { title: "Partes de la unidad", text: "Los números decimales sirven para expresar partes de un entero. Se escriben con una coma que separa la parte entera de la parte decimal.", example: "2,5 → 2 enteros y 5 décimos" },
      { title: "Décimos", text: "Si divides un entero en 10 partes iguales, cada parte es un décimo: 0,1. La mitad de un entero son 5 décimos: 0,5.", example: "0,5 = 5/10 = la mitad" },
      { title: "Centésimos", text: "Si divides el entero en 100 partes, cada una es un centésimo: 0,01. La segunda cifra después de la coma son los centésimos.", example: "0,45 = 45/100 → 4 décimos y 5 centésimos" },
      { title: "Comparar decimales", text: "Para comparar, iguala la cantidad de cifras decimales agregando ceros a la derecha. Luego compara como números normales.", example: "0,7 y 0,45 → 0,70 y 0,45 → 70 > 45, así que 0,7 > 0,45" }
    ],
    remember: ["La coma separa enteros de decimales.", "0,5 es la mitad.", "Agrega ceros a la derecha para comparar."],
    mistake: "Muchos creen que 0,45 es mayor que 0,7 porque 45 es más que 7. ¡No! 0,7 = 0,70, que es mayor que 0,45.",
    fun: "¿Sabías que en algunos países usan punto en vez de coma para los decimales? En EE. UU. escriben 2.5 en lugar de 2,5.",
    check: [
      ["¿Qué número es la mitad de 1?", "0,5", ["0,05", "5"]],
      ["¿Cuál es mayor?", "0,7", ["0,45", "Son iguales"]],
      ["En 0,45, ¿cuántos centésimos hay en total?", "45", ["4", "5"]]
    ]
  },
  "xmat4a": {
    hook: "¿Podrías repartir 12 dulces en 5 bolsas iguales? ¿Y en 4? ¡Los múltiplos y divisores te lo dicen!",
    steps: [
      { title: "Múltiplos", text: "Los múltiplos de un número se obtienen al multiplicarlo por 1, 2, 3, 4… Es como recitar su tabla.", example: "Múltiplos de 3: 3, 6, 9, 12, 15…" },
      { title: "¿Es múltiplo?", text: "Un número es múltiplo de otro si aparece en su tabla. 12 es múltiplo de 3 porque 3 × 4 = 12.", example: "12 es múltiplo de 3 ✔ · 14 no es múltiplo de 3 ✘" },
      { title: "Divisores", text: "Un divisor de un número lo divide exactamente, sin que sobre nada. 4 es divisor de 20 porque 20 ÷ 4 = 5 sin residuo.", example: "4 es divisor de 20 ✔" },
      { title: "Buscar todos los divisores", text: "Busca parejas de números que multiplicados den el número. Todos los números de las parejas son divisores.", example: "12 = 1 × 12 = 2 × 6 = 3 × 4 → divisores: 1, 2, 3, 4, 6, 12" },
      { title: "La relación", text: "Si a es divisor de b, entonces b es múltiplo de a. Son dos maneras de decir lo mismo.", example: "5 es divisor de 20 ↔ 20 es múltiplo de 5" }
    ],
    remember: ["Múltiplos: resultados de la tabla.", "Divisor: divide sin que sobre nada.", "Todo número es múltiplo y divisor de sí mismo."],
    mistake: "Los múltiplos de un número son infinitos y cada vez más grandes; los divisores son pocos y nunca mayores que el número. No los confundas.",
    fun: "¿Sabías que el 1 es divisor de todos los números? ¡Y el 0 es múltiplo de todos!",
    check: [
      ["¿Cuál es múltiplo de 3?", "12", ["14", "10"]],
      ["¿Cuál es divisor de 20?", "4", ["3", "40"]],
      ["¿Cuáles son los divisores de 12?", "1, 2, 3, 4, 6, 12", ["12, 24, 36", "2, 4, 6, 8"]]
    ]
  },
  "xmat4b": {
    hook: "En los relojes antiguos y en los capítulos de los libros a veces ves letras como XII. ¡Son números romanos!",
    steps: [
      { title: "Las siete letras", text: "Los romanos escribían los números con siete letras, cada una con un valor fijo.", example: "I=1 · V=5 · X=10 · L=50 · C=100 · D=500 · M=1000" },
      { title: "Sumar", text: "Si una letra igual o menor va después de otra mayor, se suman sus valores.", example: "VI = 5 + 1 = 6 · XV = 10 + 5 = 15 · CL = 150" },
      { title: "Restar", text: "Si una letra menor va antes de una mayor, se resta. Solo se usan así I antes de V o X, X antes de L o C, y C antes de D o M.", example: "IV = 4 · IX = 9 · XL = 40 · XC = 90" },
      { title: "Repetir hasta 3 veces", text: "I, X, C y M pueden repetirse hasta tres veces seguidas. V, L y D nunca se repiten.", example: "III = 3 · XXX = 30 · pero 4 es IV, no IIII" },
      { title: "Números largos", text: "Separa el número en miles, centenas, decenas y unidades, y escribe cada parte.", example: "2026 = MM + XX + VI = MMXXVI · XIV = 10 + 4 = 14" }
    ],
    remember: ["Menor después de mayor: suma.", "Menor antes de mayor: resta.", "Máximo tres letras iguales seguidas."],
    mistake: "Es común escribir 9 como VIIII. Lo correcto es IX: un 1 antes del 10 significa 10 − 1.",
    fun: "¿Sabías que los romanos no tenían un símbolo para el cero?",
    check: [
      ["¿Cuánto vale XIV?", "14", ["16", "9"]],
      ["¿Cómo se escribe 9 en números romanos?", "IX", ["VIIII", "XI"]],
      ["¿Cuánto vale XL?", "40", ["60", "15"]]
    ]
  },
  "xmat4c": {
    hook: "¿Cuánto se abre una puerta, un libro o las tijeras? Esa abertura es un ángulo y se mide en grados.",
    steps: [
      { title: "¿Qué es un ángulo?", text: "Un ángulo es la abertura entre dos semirrectas que salen del mismo punto, llamado vértice. Se mide en grados (°).", example: "Las agujas del reloj forman un ángulo 🕒" },
      { title: "El transportador", text: "Para medir un ángulo usamos el transportador. Pon su centro en el vértice y el 0 sobre un lado; lee el número donde pasa el otro lado.", example: "📐 El lado pasa por el 45 → mide 45°" },
      { title: "Agudo y recto", text: "Un ángulo agudo mide menos de 90°. Un ángulo recto mide exactamente 90°, como la esquina de un cuaderno.", example: "45° agudo · 90° recto" },
      { title: "Obtuso y llano", text: "Un ángulo obtuso mide más de 90° y menos de 180°. Si mide exactamente 180°, es un ángulo llano: parece una línea recta.", example: "120° obtuso · 180° llano" }
    ],
    remember: ["Agudo: menos de 90°.", "Recto: 90°.", "Obtuso: entre 90° y 180°."],
    mistake: "El tamaño de un ángulo no depende de lo largos que dibujes sus lados, sino de cuánto se abren.",
    fun: "¿Sabías que una vuelta completa mide 360°? Por eso los patinadores dicen que dieron 'un 360'.",
    check: [
      ["Un ángulo de 45° es…", "Agudo", ["Obtuso", "Recto"]],
      ["Un ángulo de 120° es…", "Obtuso", ["Agudo", "Recto"]],
      ["¿Cuánto mide un ángulo recto?", "90°", ["180°", "100°"]]
    ]
  },
  "xmat4d": {
    hook: "Un camino mide 3 km. ¿Cuántos metros son? Saber convertir unidades es como traducir entre idiomas.",
    steps: [
      { title: "Las equivalencias", text: "Primero aprende cuánto vale cada unidad en la otra. Estas son las más usadas en longitud y masa.", example: "1 km = 1000 m · 1 m = 100 cm · 1 kg = 1000 g" },
      { title: "De grande a pequeña: multiplica", text: "Si pasas de una unidad grande a una pequeña, el número se hace más grande. Por eso multiplicas.", example: "3 m = 3 × 100 = 300 cm · 4 km = 4000 m" },
      { title: "De pequeña a grande: divide", text: "Si pasas de una unidad pequeña a una grande, el número se hace más pequeño. Por eso divides.", example: "2500 g = 2500 ÷ 1000 = 2,5 kg" },
      { title: "Con decimales", text: "Al dividir por 10, 100 o 1000, la coma se corre a la izquierda tantos lugares como ceros tenga el número.", example: "750 cm ÷ 100 = 7,5 m" }
    ],
    remember: ["Grande a pequeña: multiplica.", "Pequeña a grande: divide.", "1 km = 1000 m, 1 m = 100 cm, 1 kg = 1000 g."],
    mistake: "Si conviertes 3 m a cm y te da 0,03, piensa: ¿puede caber menos de 1 cm en 3 metros? ¡No! Debías multiplicar: 300 cm.",
    fun: "¿Sabías que el metro se definió al principio como una diezmillonésima parte de la distancia del Polo Norte al ecuador?",
    check: [
      ["¿Cuántos centímetros son 3 m?", "300 cm", ["30 cm", "3000 cm"]],
      ["¿Cuántos kilogramos son 2500 g?", "2,5 kg", ["25 kg", "250 kg"]],
      ["Para pasar de km a m, debes…", "Multiplicar por 1000", ["Dividir por 1000", "Multiplicar por 100"]]
    ]
  },
  "xmat4e": {
    hook: "Si doblas por la mitad una mariposa de papel, ¿coinciden las dos alas? ¡Eso es simetría!",
    steps: [
      { title: "El eje de simetría", text: "Una figura es simétrica si una línea, llamada eje, la divide en dos mitades iguales, como si una fuera el reflejo de la otra en un espejo.", example: "🦋 una mariposa tiene un eje vertical" },
      { title: "Cuántos ejes", text: "Algunas figuras tienen varios ejes de simetría y otras ninguno. Prueba doblando la figura de distintas maneras.", example: "El cuadrado tiene 4 ejes · el rectángulo 2 · el círculo infinitos" },
      { title: "El plano cartesiano", text: "Es una cuadrícula con dos rectas numeradas: el eje x (horizontal) y el eje y (vertical). Se cruzan en el punto (0, 0).", example: "Eje x → · Eje y ↑" },
      { title: "Leer coordenadas", text: "Un punto se escribe (x, y). El primer número dice cuántos pasos avanzar a la derecha y el segundo, cuántos subir.", example: "(3, 5): 3 a la derecha, 5 arriba" }
    ],
    remember: ["El eje de simetría divide en dos mitades iguales.", "(x, y): primero derecha, luego arriba.", "Todo empieza en (0, 0)."],
    mistake: "No es lo mismo (3, 5) que (5, 3). El orden importa: primero siempre el movimiento horizontal.",
    fun: "¿Sabías que el plano cartesiano se llama así por René Descartes, un matemático francés?",
    check: [
      ["¿Cuántos ejes de simetría tiene un cuadrado?", "4", ["2", "1"]],
      ["En (3, 5), ¿cuántos pasos subes?", "5", ["3", "8"]],
      ["¿Cuántos ejes de simetría tiene un rectángulo (no cuadrado)?", "2", ["4", "0"]]
    ]
  },
