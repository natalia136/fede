/* Contenido adicional: Matemáticas */
(function () {
  const Q = {}, SORT = {}, ORDER = {};

  /* ===================== PREESCOLAR (5 años) ===================== */
  Q.mat_g0_tamano = [
    ["¿Cuál es más GRANDE?", "🐘", ["🐭", "🐜"], "🔍", "El elefante es el más grande."],
    ["¿Cuál es más PEQUEÑO?", "🐜", ["🐘", "🐄"], "🔍", "La hormiga es muy pequeñita."],
    ["¿Cuál es más ALTO?", "🦒", ["🐢", "🐇"], "📏", "La jirafa tiene el cuello muy largo: es la más alta."],
    ["¿Cuál es más BAJITO?", "🐢", ["🦒", "🌳"], "📏", "La tortuga es la más bajita."],
    ["¿Cuál PESA más?", "🚚", ["🪶", "🎈"], "⚖️", "Un camión pesa muchísimo."],
    ["¿Cuál pesa MENOS?", "🪶", ["🪨", "🚚"], "⚖️", "La pluma es muy liviana."],
    ["¿Cuál es más LARGO?", "🐍", ["🐜", "🐞"], "📏", "La serpiente es larga."],
    ["¿Cuál es más GRANDE?", "🌳", ["🌱", "🍀"], "🔍", "El árbol es más grande que la plantita."],
    ["¿Cuál es más PEQUEÑO?", "🐁", ["🐴", "🐻"], "🔍", "El ratón es el más pequeño."],
    ["¿Quién es más GRANDE?", "🐋", ["🐟", "🦐"], "🌊", "La ballena es enorme."],
    ["¿Cuál es más ALTO?", "🏢", ["🏠", "⛺"], "📏", "El edificio tiene muchos pisos."],
    ["¿Qué es más PESADO?", "🍉", ["🍒", "🍓"], "⚖️", "La sandía pesa más que una cereza."],
    ["¿Cuál es más PEQUEÑO?", "🐞", ["🐶", "🐄"], "🔍", "La mariquita cabe en tu dedo."],
    ["¿Qué es más LIVIANO?", "🎈", ["🎳", "🧱"], "⚖️", "El globo flota porque es muy liviano."]
  ];
  Q.mat_g0_posicion = [
    ["El sol está en el cielo. ¿Está arriba o abajo?", "Arriba", ["Abajo", "Dentro"], "☀️", "El cielo está arriba."],
    ["El pez nada en el agua. ¿Dónde está?", "Dentro del agua", ["Fuera del agua", "Sobre una nube"], "🐟🌊"],
    ["Las raíces del árbol, ¿dónde están?", "Abajo, en la tierra", ["Arriba, en el cielo", "Encima de las hojas"], "🌳"],
    ["El pájaro está en su nido, en lo alto del árbol. ¿Está arriba o abajo?", "Arriba", ["Abajo", "Dentro de la tierra"], "🐦🌳"],
    ["¿Te pones las medias antes o después de los zapatos?", "Antes", ["Después", "Nunca"], "🧦👟"],
    ["Las galletas están en el frasco cerrado. ¿Están dentro o fuera?", "Dentro", ["Fuera", "Encima del frasco"], "🍪🫙"],
    ["Tú estás en la casa y el carro en la calle. ¿Dónde está el carro?", "Fuera de la casa", ["Dentro de la casa", "Debajo de la cama"], "🚗🏠"],
    ["En la fila 🧒👧👦, ¿quién está en el MEDIO?", "👧", ["🧒", "👦"], "🧒👧👦"],
    ["En la fila 🐶🐱🐰, ¿quién está PRIMERO?", "🐶", ["🐱", "🐰"], "🐶🐱🐰"],
    ["En la fila 🐶🐱🐰, ¿quién está de ÚLTIMO?", "🐰", ["🐶", "🐱"], "🐶🐱🐰"],
    ["La luna está en el cielo y el perro en el suelo. ¿Quién está más ARRIBA?", "🌙", ["🐕", "🌱"], "🌙🐕"],
    ["¿Qué está más CERCA de ti?", "👃 Tu nariz", ["🌙 La luna", "⭐ Una estrella"], "👀"],
    ["Sueltas un globo de helio. ¿Hacia dónde va?", "Hacia arriba", ["Hacia abajo", "Hacia dentro de la caja"], "🎈"],
    ["El gato duerme DEBAJO de la mesa. ¿Dónde está?", "Debajo de la mesa", ["Encima de la mesa", "Dentro de la nevera"], "🐱"]
  ];
  Q.mat_g0_numeros = [
    ["¿Cuántos dedos hay?", "5", ["4", "6"], "🖐️", "Cuenta: 1, 2, 3, 4, 5."],
    ["¿Qué número va después del 3?", "4", ["2", "5"], "1️⃣ 2️⃣ 3️⃣ ❓", "1, 2, 3, 4…"],
    ["¿Qué número va antes del 5?", "4", ["6", "3"], "❓ 5️⃣", "…3, 4, 5."],
    ["¿Cuántas ruedas tiene una bicicleta?", "2", ["3", "4"], "🚲"],
    ["¿Cuántas patas tiene un perro?", "4", ["2", "6"], "🐕"],
    ["¿Qué número es este?", "Siete", ["Uno", "Cuatro"], "7️⃣"],
    ["¿Qué número sigue? 1, 2, 3, 4, …", "5", ["6", "3"], "🔢"],
    ["¿Cuál número es MAYOR: 3, 8 o 5?", "8", ["3", "5"], "🔝", "8 es el más grande."],
    ["¿Cuál número es MENOR: 9, 2 o 6?", "2", ["9", "6"], "🔽", "2 es el más pequeño."],
    ["¿Cuántos ojos tienes?", "2", ["1", "3"], "👀"],
    ["¿Cuántas estrellas hay?", "6", ["5", "7"], "⭐⭐⭐⭐⭐⭐", "Cuenta despacio: 1, 2, 3, 4, 5, 6."],
    ["¿Qué número va entre el 6 y el 8?", "7", ["5", "9"], "6️⃣ ❓ 8️⃣"],
    ["Cuenta hacia atrás: 5, 4, 3, … ¿qué sigue?", "2", ["6", "1"], "🚀"],
    ["¿Cuántas patas tiene una gallina?", "2", ["4", "3"], "🐔"]
  ];
  Q.mat_g0_juntar = [
    ["Tienes 2 manzanas y te dan 1 más. ¿Cuántas tienes?", "3", ["2", "4"], "🍎🍎 ➕ 🍎", "2 y 1 son 3."],
    ["Hay 3 pollitos y llegan 2 más. ¿Cuántos hay?", "5", ["4", "6"], "🐥🐥🐥 ➕ 🐥🐥", "3 y 2 son 5."],
    ["Hay 4 globos y se vuela 1. ¿Cuántos quedan?", "3", ["5", "2"], "🎈🎈🎈🎈 ➖ 🎈", "4 menos 1 son 3."],
    ["Tienes 5 galletas y te comes 2. ¿Cuántas quedan?", "3", ["7", "2"], "🍪🍪🍪🍪🍪 ➖ 🍪🍪", "5 menos 2 son 3."],
    ["Hay 1 pez y llegan 3 más. ¿Cuántos peces hay?", "4", ["3", "5"], "🐟 ➕ 🐟🐟🐟", "1 y 3 son 4."],
    ["Hay 6 flores y cortas 3. ¿Cuántas quedan?", "3", ["9", "4"], "🌸🌸🌸🌸🌸🌸 ➖ 🌸🌸🌸", "6 menos 3 son 3."],
    ["Hay 2 carros y llegan 2 más. ¿Cuántos hay?", "4", ["3", "5"], "🚗🚗 ➕ 🚗🚗", "2 y 2 son 4."],
    ["Tienes 3 estrellas y ganas 3 más. ¿Cuántas tienes?", "6", ["5", "7"], "⭐⭐⭐ ➕ ⭐⭐⭐", "3 y 3 son 6."],
    ["Hay 5 patitos y se van 4. ¿Cuántos quedan?", "1", ["9", "2"], "🦆🦆🦆🦆🦆 ➖ 🦆🦆🦆🦆", "5 menos 4 es 1."],
    ["Hay 4 fresas y te dan 4 más. ¿Cuántas hay?", "8", ["7", "9"], "🍓🍓🍓🍓 ➕ 🍓🍓🍓🍓", "4 y 4 son 8."],
    ["Hay 7 pelotas y se pierden 2. ¿Cuántas quedan?", "5", ["9", "4"], "⚽⚽⚽⚽⚽⚽⚽ ➖ ⚽⚽", "7 menos 2 son 5."],
    ["Tienes 1 helado y te dan 1 más. ¿Cuántos tienes?", "2", ["1", "3"], "🍦 ➕ 🍦", "1 y 1 son 2."],
    ["Hay 3 mariposas y se van las 3. ¿Cuántas quedan?", "0", ["3", "1"], "🦋🦋🦋 ➖ 🦋🦋🦋", "Si se van todas, quedan 0."],
    ["Hay 5 dedos en una mano y 5 en la otra. ¿Cuántos dedos hay?", "10", ["5", "9"], "🖐️ ➕ 🖐️", "5 y 5 son 10."]
  ];
  SORT.mat_g0_clasificar = { bins: ["🐾 Animal", "🍎 Fruta", "🚗 Transporte"], items: [
    ["🐶 perro", 0], ["🐱 gato", 0], ["🐸 rana", 0], ["🐴 caballo", 0], ["🦁 león", 0],
    ["🍌 banano", 1], ["🍇 uvas", 1], ["🍓 fresa", 1], ["🍉 sandía", 1], ["🍐 pera", 1],
    ["🚌 bus", 2], ["🚲 bicicleta", 2], ["✈️ avión", 2], ["🚂 tren", 2], ["⛵ barco", 2]
  ] };
  ORDER.mat_g0_secuencias = [
    ["🥚 Huevo", "🐣 El pollito sale", "🐥 El pollito crece", "🐔 Gallina"],
    ["🌱 Semilla", "🌿 Plantita", "🌷 Botón", "🌻 Flor"],
    ["🌅 Despertar", "🌞 Almorzar", "🌆 Jugar en la tarde", "🌙 Dormir"],
    ["🧼 Lavarse las manos", "🍽️ Comer", "🪥 Cepillarse los dientes"],
    ["1️⃣ Uno", "2️⃣ Dos", "3️⃣ Tres", "4️⃣ Cuatro", "5️⃣ Cinco"],
    ["🐛 Oruga", "🟫 Capullo", "🦋 Mariposa"],
    ["👶 Bebé", "🧒 Niño", "🧑 Adulto", "👴 Abuelo"]
  ];

  /* ===================== 1.º ===================== */
  Q.mat_g1_dinero = [
    ["Tienes 2 monedas de $5. ¿Cuánto dinero tienes?", "$10", ["$7", "$5", "$2"], "🪙🪙", "5 + 5 = 10"],
    ["Tienes 3 monedas de $1 y 1 moneda de $5. ¿Cuánto tienes?", "$8", ["$4", "$6", "$9"], "🪙", "5 + 1 + 1 + 1 = 8"],
    ["Un dulce cuesta $3 y una paleta $4. ¿Cuánto pagas por los dos?", "$7", ["$6", "$1", "$8"], "🍬🍭", "3 + 4 = 7"],
    ["Tienes $10 y compras un lápiz de $6. ¿Cuánto te sobra?", "$4", ["$16", "$5", "$3"], "✏️", "10 − 6 = 4"],
    ["¿Cuántas monedas de $1 necesitas para tener $5?", "5", ["1", "4", "10"], "🪙", "1 + 1 + 1 + 1 + 1 = 5"],
    ["¿Cuántas monedas de $5 hacen $10?", "2", ["5", "3", "10"], "🪙", "5 + 5 = 10"],
    ["Una manzana cuesta $2. ¿Cuánto cuestan 3 manzanas?", "$6", ["$5", "$3", "$8"], "🍎🍎🍎", "2 + 2 + 2 = 6"],
    ["Tienes $15 y compras un cuaderno de $10. ¿Cuánto te queda?", "$5", ["$25", "$4", "$10"], "📓", "15 − 10 = 5"],
    ["¿Qué vale más: una moneda de $10 o una de $5?", "La de $10", ["La de $5", "Valen lo mismo"], "🪙", "10 es mayor que 5."],
    ["Tienes 1 moneda de $10 y 2 de $2. ¿Cuánto tienes?", "$14", ["$12", "$13", "$4"], "🪙", "10 + 2 + 2 = 14"],
    ["Un jugo cuesta $8. Pagas con $10. ¿Cuánto te devuelven?", "$2", ["$18", "$3", "$1"], "🧃", "10 − 8 = 2"],
    ["Tienes 4 monedas de $2. ¿Cuánto tienes?", "$8", ["$6", "$4", "$10"], "🪙", "2 + 2 + 2 + 2 = 8"],
    ["Tú ahorras $7 y tu hermano $9. ¿Cuánto tienen entre los dos?", "$16", ["$15", "$17", "$2"], "🐷", "7 + 9 = 16"],
    ["Un juguete cuesta $20 y tienes $12. ¿Cuánto te falta?", "$8", ["$32", "$7", "$10"], "🧸", "12 + 8 = 20"]
  ];
  Q.mat_g1_medir = [
    ["¿Qué es más LARGO?", "🚌 Un bus", ["🚗 Un carro", "🚲 Una bicicleta"], "📏"],
    ["¿Qué PESA más?", "🐘 Un elefante", ["🐱 Un gato", "🐦 Un pájaro"], "⚖️"],
    ["¿En qué cabe MÁS agua?", "🛁 Una bañera", ["🥛 Un vaso", "🥄 Una cuchara"], "💧"],
    ["¿Con qué medimos cuánto pesa algo?", "⚖️ Una balanza", ["📏 Una regla", "⏰ Un reloj"]],
    ["¿Con qué medimos lo largo de un lápiz?", "📏 Una regla", ["⚖️ Una balanza", "🌡️ Un termómetro"]],
    ["¿Con qué sabemos la hora?", "⏰ Un reloj", ["📏 Una regla", "⚖️ Una balanza"]],
    ["Una mesa mide 6 cuartas y otra 9 cuartas. ¿Cuál es más larga?", "La de 9 cuartas", ["La de 6 cuartas", "Miden igual"], "✋", "9 es más que 6."],
    ["Un lápiz mide 15 clips y una crayola 8 clips. ¿Cuántos clips más mide el lápiz?", "7", ["23", "6", "8"], "📎", "15 − 8 = 7"],
    ["¿Qué es más CORTO?", "🐜 Una hormiga", ["🐍 Una serpiente", "🐊 Un cocodrilo"], "📏"],
    ["¿Qué pesa MENOS?", "🪶 Una pluma", ["📚 Un libro", "🍉 Una sandía"], "⚖️"],
    ["¿En qué cabe MENOS agua?", "🥄 Una cuchara", ["🪣 Un balde", "🫖 Una tetera"], "💧"],
    ["Mides tu cama con tus pasos y con los pasos de papá. ¿Con cuáles necesitas MÁS pasos?", "Con mis pasos (son más cortos)", ["Con los pasos de papá", "Igual cantidad"], "👣", "Si el paso es corto, se necesitan más pasos."],
    ["¿Qué unidad usamos para medir lo largo de un cuaderno?", "Centímetros", ["Litros", "Kilogramos"], "📓"],
    ["¿Qué es más ALTO?", "🦒 Una jirafa", ["🐕 Un perro", "🐈 Un gato"], "📏"]
  ];
  SORT.mat_g1_pares = { bins: ["Par", "Impar"], items: [
    ["2", 0], ["4", 0], ["8", 0], ["10", 0], ["12", 0], ["14", 0], ["16", 0], ["20", 0], ["26", 0],
    ["1", 1], ["3", 1], ["7", 1], ["9", 1], ["11", 1], ["15", 1], ["19", 1], ["23", 1], ["29", 1]
  ] };
  ORDER.mat_g1_ordenar = [
    ["3", "8", "12", "20"],
    ["15", "27", "41", "59"],
    ["9", "19", "29", "39"],
    ["6", "16", "60", "66"],
    ["45", "54", "70", "99"],
    ["11", "13", "31", "33"],
    ["2", "22", "28", "82"]
  ];
  Q.mat_g1_problemas = [
    ["En el bus van 8 niños y suben 5 más. ¿Cuántos van ahora?", "13", ["12", "3", "14"], "🚌", "8 + 5 = 13"],
    ["Ana tenía 14 globos y se reventaron 6. ¿Cuántos le quedan?", "8", ["20", "9", "7"], "🎈", "14 − 6 = 8"],
    ["En un árbol hay 9 pájaros y llegan 7. ¿Cuántos hay?", "16", ["15", "2", "17"], "🐦", "9 + 7 = 16"],
    ["Luis tiene 17 canicas y regala 9. ¿Cuántas le quedan?", "8", ["26", "9", "7"], "🔵", "17 − 9 = 8"],
    ["Hay 6 perros y 6 gatos. ¿Cuántos animales hay?", "12", ["11", "0", "13"], "🐶🐱", "6 + 6 = 12"],
    ["Sofía leyó 7 páginas en la mañana y 8 en la tarde. ¿Cuántas leyó?", "15", ["14", "1", "16"], "📖", "7 + 8 = 15"],
    ["Había 20 galletas y se comieron 10. ¿Cuántas quedan?", "10", ["30", "12", "9"], "🍪", "20 − 10 = 10"],
    ["Tengo 5 lápices. ¿Cuántos me faltan para tener 12?", "7", ["17", "6", "8"], "✏️", "5 + 7 = 12"],
    ["En una caja hay 18 huevos y se rompen 4. ¿Cuántos quedan sanos?", "14", ["22", "13", "15"], "🥚", "18 − 4 = 14"],
    ["Pedro tiene 9 años y su hermana tiene 4 más que él. ¿Cuántos años tiene ella?", "13", ["5", "12", "14"], "🎂", "9 + 4 = 13"],
    ["En el salón hay 11 niñas y 8 niños. ¿Cuántos estudiantes hay?", "19", ["3", "18", "20"], "🏫", "11 + 8 = 19"],
    ["Mamá compró 15 naranjas y usó 7 para jugo. ¿Cuántas quedan?", "8", ["22", "9", "7"], "🍊", "15 − 7 = 8"],
    ["Un gusano tiene 3 hojas y se come las 3. ¿Cuántas le quedan?", "0", ["6", "1", "3"], "🐛", "3 − 3 = 0"],
    ["Hay 10 sillas y 13 niños. ¿Cuántos niños se quedan sin silla?", "3", ["23", "2", "4"], "🪑", "13 − 10 = 3"]
  ];
  Q.mat_g1_calendario = [
    ["¿Cuántos días tiene una semana?", "7", ["5", "10", "12"], "📅"],
    ["¿Qué día va después del lunes?", "Martes", ["Domingo", "Jueves", "Miércoles"], "📅"],
    ["¿Qué día va antes del viernes?", "Jueves", ["Sábado", "Lunes", "Martes"], "📅"],
    ["Si hoy es miércoles, ¿qué día fue ayer?", "Martes", ["Jueves", "Lunes", "Viernes"], "📅"],
    ["Si hoy es sábado, ¿qué día será mañana?", "Domingo", ["Viernes", "Lunes", "Martes"], "📅"],
    ["¿Cuántos meses tiene un año?", "12", ["7", "10", "24"], "🗓️"],
    ["¿Cuál es el primer mes del año?", "Enero", ["Diciembre", "Febrero", "Marzo"], "🗓️"],
    ["¿Cuál es el último mes del año?", "Diciembre", ["Enero", "Noviembre", "Octubre"], "🗓️"],
    ["¿Qué hacemos normalmente en la NOCHE?", "Dormir 😴", ["Desayunar 🥣", "Ir a la escuela 🏫"], "🌙"],
    ["¿Qué dura más: un día o una semana?", "Una semana", ["Un día", "Duran igual"], "⏳", "Una semana tiene 7 días."],
    ["¿Qué mes va después de marzo?", "Abril", ["Febrero", "Mayo", "Junio"], "🗓️"],
    ["Si hoy es domingo, ¿qué día será pasado mañana?", "Martes", ["Lunes", "Miércoles", "Sábado"], "📅", "Domingo → lunes → martes."],
    ["¿Qué dura más: un minuto o una hora?", "Una hora", ["Un minuto", "Duran igual"], "⏰", "Una hora tiene 60 minutos."],
    ["¿Cuántos días tiene el fin de semana (sábado y domingo)?", "2", ["1", "3", "7"], "🎉"]
  ];

  /* ===================== 2.º ===================== */
  Q.mat_g2_dinero = [
    ["Compras un pan de $350 y una leche de $500. ¿Cuánto pagas?", "$850", ["$800", "$750", "$900"], "🍞🥛", "350 + 500 = 850"],
    ["Pagas con $1000 un jugo de $650. ¿Cuánto te devuelven?", "$350", ["$450", "$1650", "$250"], "🧃", "1000 − 650 = 350"],
    ["Tienes 3 monedas de $200 y 1 de $100. ¿Cuánto tienes?", "$700", ["$600", "$500", "$800"], "🪙", "200 + 200 + 200 + 100 = 700"],
    ["¿Cuántas monedas de $100 necesitas para formar $1000?", "10", ["100", "5", "20"], "🪙", "10 × 100 = 1000"],
    ["Un cuaderno cuesta $480. ¿Cuánto cuestan 2 cuadernos?", "$960", ["$880", "$860", "$980"], "📓", "480 + 480 = 960"],
    ["Tienes $500 y quieres un juguete de $800. ¿Cuánto te falta?", "$300", ["$1300", "$200", "$400"], "🧸", "800 − 500 = 300"],
    ["Tienes 2 billetes de $500 y 3 monedas de $50. ¿Cuánto tienes?", "$1150", ["$1050", "$1015", "$1300"], "💵", "1000 + 150 = 1150"],
    ["Un helado cuesta $250. Pagas con $500. ¿Cuánto te devuelven?", "$250", ["$750", "$350", "$150"], "🍦", "500 − 250 = 250"],
    ["Compras 3 dulces de $100 cada uno. ¿Cuánto pagas?", "$300", ["$103", "$200", "$400"], "🍬", "100 + 100 + 100 = 300"],
    ["¿Qué cantidad es mayor: $590 o $950?", "$950", ["$590", "Son iguales"], "💰", "950 tiene 9 centenas; 590 tiene 5."],
    ["Tienes $730 y gastas $200. ¿Cuánto te queda?", "$530", ["$930", "$510", "$520"], "👛", "730 − 200 = 530"],
    ["Una pelota cuesta $1500 y tienes $900. ¿Cuánto te falta?", "$600", ["$2400", "$700", "$500"], "⚽", "1500 − 900 = 600"],
    ["Juntas 4 monedas de $50. ¿Cuánto tienes?", "$200", ["$54", "$150", "$250"], "🪙", "50 + 50 + 50 + 50 = 200"],
    ["Compras una regla de $320 y un borrador de $180. ¿Cuánto gastas?", "$500", ["$400", "$490", "$140"], "📏", "320 + 180 = 500"]
  ];
  Q.mat_g2_longitud = [
    ["¿Cuántos centímetros tiene 1 metro?", "100", ["10", "1000", "50"], "📏", "1 m = 100 cm"],
    ["¿Qué unidad usarías para medir el largo de un borrador?", "Centímetros", ["Metros", "Kilómetros", "Litros"], "🧽"],
    ["¿Qué unidad usarías para medir el largo de un patio?", "Metros", ["Centímetros", "Kilogramos", "Litros"], "🏞️"],
    ["Una cinta mide 25 cm y otra 18 cm. ¿Cuánto miden juntas?", "43 cm", ["33 cm", "7 cm", "42 cm"], "🎀", "25 + 18 = 43"],
    ["Un lápiz mide 17 cm y se gasta 5 cm. ¿Cuánto mide ahora?", "12 cm", ["22 cm", "13 cm", "11 cm"], "✏️", "17 − 5 = 12"],
    ["¿Qué es más largo: 1 metro u 80 centímetros?", "1 metro", ["80 centímetros", "Son iguales"], "📏", "1 m = 100 cm, y 100 > 80."],
    ["Medio metro son…", "50 cm", ["5 cm", "500 cm", "20 cm"], "📏", "La mitad de 100 cm es 50 cm."],
    ["¿Desde qué número empiezas a medir con la regla?", "Desde el 0", ["Desde el 1", "Desde el final", "Desde cualquier número"], "📏"],
    ["Una mesa mide 2 metros. ¿Cuántos centímetros son?", "200 cm", ["20 cm", "2000 cm", "102 cm"], "🪑", "100 + 100 = 200"],
    ["Un clip mide 3 cm. ¿Cuánto miden 4 clips puestos en fila?", "12 cm", ["7 cm", "43 cm", "10 cm"], "📎", "3 + 3 + 3 + 3 = 12"],
    ["Una cuerda de 60 cm se corta en 2 partes iguales. ¿Cuánto mide cada parte?", "30 cm", ["20 cm", "62 cm", "120 cm"], "🪢", "60 ÷ 2 = 30"],
    ["¿Cuál es la medida más adecuada para la altura de una puerta?", "2 metros", ["2 centímetros", "20 metros", "2 kilómetros"], "🚪"],
    ["Ana mide 120 cm y Juan 112 cm. ¿Cuánto más alta es Ana?", "8 cm", ["232 cm", "12 cm", "18 cm"], "🧍", "120 − 112 = 8"],
    ["¿Qué mide más o menos tu cuarta (la mano abierta)?", "Unos 15 cm", ["Unos 15 m", "Unos 1 cm", "Unos 150 cm"], "✋"]
  ];
  Q.mat_g2_centenas = [
    ["¿Cuántas centenas tiene el 456?", "4", ["5", "6", "45"], "💯", "456 = 4 centenas, 5 decenas y 6 unidades."],
    ["¿Qué número es 3 centenas, 2 decenas y 7 unidades?", "327", ["372", "237", "3027"], "💯", "300 + 20 + 7 = 327"],
    ["¿Qué valor tiene el 8 en 582?", "80", ["8", "800", "500"], "🔢", "El 8 está en las decenas: 8 × 10 = 80."],
    ["¿Qué número va después del 699?", "700", ["600", "690", "6100"], "➡️", "699 + 1 = 700"],
    ["¿Qué número va antes del 400?", "399", ["401", "300", "390"], "⬅️", "400 − 1 = 399"],
    ["¿Cuál es mayor: 509 o 590?", "590", ["509", "Son iguales"], "⚖️", "Mismas centenas; 9 decenas > 0 decenas."],
    ["¿Cómo se escribe 'seiscientos cuatro'?", "604", ["640", "6004", "64"], "✍️", "600 + 4 = 604"],
    ["500 + 30 + 9 = ?", "539", ["5309", "593", "359"], "➕", "5 centenas, 3 decenas, 9 unidades."],
    ["¿Cuántas decenas hay en 1 centena?", "10", ["100", "1", "5"], "🔟", "10 × 10 = 100"],
    ["Cuenta de 100 en 100: 200, 300, 400, … ¿qué sigue?", "500", ["410", "401", "600"], "🔢"],
    ["¿Cómo se lee 718?", "Setecientos dieciocho", ["Setenta y dieciocho", "Siete mil dieciocho", "Setecientos ochenta"], "🗣️"],
    ["¿Qué número es 9 centenas y 5 unidades?", "905", ["950", "95", "9005"], "💯", "900 + 0 + 5 = 905"],
    ["Cuenta de 10 en 10: 340, 350, 360, … ¿qué sigue?", "370", ["361", "460", "380"], "🔢"],
    ["¿Cuál es el número más grande de tres cifras?", "999", ["100", "900", "1000"], "🏆", "1000 ya tiene cuatro cifras."]
  ];
  SORT.mat_g2_cuerpos = { bins: ["Cubo", "Esfera", "Cilindro", "Cono"], items: [
    ["🎲 Dado", 0], ["🧊 Cubo de hielo", 0], ["🧩 Cubo de Rubik", 0],
    ["⚽ Pelota", 1], ["🌍 Globo terráqueo", 1], ["🍊 Naranja", 1], ["🔮 Bola de cristal", 1],
    ["🥫 Lata de conservas", 2], ["🧻 Rollo de papel", 2], ["🕯️ Vela", 2], ["🥁 Tambor", 2],
    ["🍦 Cono de helado", 3], ["🥳 Gorro de fiesta", 3], ["Cono de tránsito", 3]
  ] };

  /* ===================== 3.º ===================== */
  Q.mat_g3_masa = [
    ["¿Cuántos gramos tiene 1 kilogramo?", "1000 g", ["100 g", "10 g", "500 g"], "⚖️", "1 kg = 1000 g"],
    ["¿Cuántos mililitros tiene 1 litro?", "1000 mL", ["100 mL", "10 mL", "500 mL"], "🥛", "1 L = 1000 mL"],
    ["¿Qué unidad usarías para pesar una sandía?", "Kilogramos", ["Gramos", "Litros", "Metros"], "🍉"],
    ["¿Qué unidad usarías para medir el agua de una piscina?", "Litros", ["Mililitros", "Kilogramos", "Centímetros"], "🏊"],
    ["¿Qué unidad usarías para pesar una carta?", "Gramos", ["Kilogramos", "Litros", "Metros"], "✉️"],
    ["Medio kilo son…", "500 g", ["50 g", "5000 g", "250 g"], "⚖️", "1000 ÷ 2 = 500"],
    ["Una bolsa de arroz pesa 2 kg. ¿Cuántos gramos son?", "2000 g", ["200 g", "20 g", "2 g"], "🍚", "2 × 1000 = 2000"],
    ["Una botella de 2 litros llena 8 vasos iguales. ¿Cuántos mL tiene cada vaso?", "250 mL", ["200 mL", "500 mL", "125 mL"], "🥤", "2000 mL ÷ 8 = 250 mL"],
    ["Un cuarto de litro son…", "250 mL", ["25 mL", "400 mL", "500 mL"], "🥛", "1000 ÷ 4 = 250"],
    ["Compras 3 kg de papas y 2 kg de tomates. ¿Cuánto pesa todo?", "5 kg", ["6 kg", "1 kg", "32 kg"], "🥔🍅", "3 + 2 = 5"],
    ["¿Qué pesa más: 1 kg de algodón o 1 kg de hierro?", "Pesan lo mismo", ["El hierro", "El algodón"], "⚖️", "Los dos pesan 1 kg."],
    ["Una jarra tiene 1 litro y sirves 300 mL. ¿Cuánto queda?", "700 mL", ["1300 mL", "800 mL", "600 mL"], "🫖", "1000 − 300 = 700"],
    ["¿Cuál es la capacidad más probable de una cuchara?", "5 mL", ["5 L", "500 mL", "50 L"], "🥄"],
    ["Un perro pesa 12 kg y un gato 4 kg. ¿Cuántos kg más pesa el perro?", "8 kg", ["16 kg", "3 kg", "9 kg"], "🐕🐈", "12 − 4 = 8"]
  ];
  Q.mat_g3_tiempo = [
    ["¿Cuántos minutos tiene una hora?", "60", ["100", "30", "24"], "⏰"],
    ["¿Cuántas horas tiene un día?", "24", ["12", "60", "48"], "🌍"],
    ["¿Cuántos minutos son media hora?", "30", ["50", "15", "60"], "🕧", "60 ÷ 2 = 30"],
    ["¿Cuántos minutos son un cuarto de hora?", "15", ["25", "4", "30"], "🕒", "60 ÷ 4 = 15"],
    ["La película empieza a las 3:00 y dura 2 horas. ¿A qué hora termina?", "5:00", ["2:00", "4:00", "6:00"], "🎬", "3 + 2 = 5"],
    ["Salgo a las 7:15 y llego a las 7:45. ¿Cuánto tardo?", "30 minutos", ["15 minutos", "45 minutos", "1 hora"], "🚶", "45 − 15 = 30"],
    ["¿Cuántos días hay en 2 semanas?", "14", ["7", "12", "21"], "📅", "7 + 7 = 14"],
    ["¿Cuántos días tiene el mes de abril?", "30", ["31", "28", "29"], "🗓️"],
    ["¿Qué mes tiene 28 días (o 29 en año bisiesto)?", "Febrero", ["Enero", "Junio", "Diciembre"], "🗓️"],
    ["Si hoy es 30 de junio, ¿qué fecha es mañana?", "1 de julio", ["31 de junio", "1 de junio", "30 de julio"], "📅", "Junio tiene 30 días."],
    ["¿Cuántos días tiene un año normal?", "365", ["360", "366", "300"], "🗓️"],
    ["Las 15:00 en un reloj de 24 horas son las…", "3 de la tarde", ["5 de la tarde", "3 de la mañana", "1 de la tarde"], "🕒", "15 − 12 = 3"],
    ["¿Cuántos meses son un año y medio?", "18", ["15", "6", "12"], "🗓️", "12 + 6 = 18"],
    ["Una clase empieza a las 10:20 y dura 40 minutos. ¿A qué hora termina?", "11:00", ["10:60", "10:40", "11:20"], "🏫", "20 + 40 = 60 minutos = 1 hora"],
    ["¿Cuántos segundos tiene un minuto?", "60", ["100", "10", "30"], "⏱️"]
  ];
  Q.mat_g3_redondeo = [
    ["Redondea 47 a la decena más cercana.", "50", ["40", "45", "47"], "🎯", "47 está más cerca de 50 que de 40."],
    ["Redondea 32 a la decena más cercana.", "30", ["40", "35", "33"], "🎯", "32 está más cerca de 30."],
    ["Redondea 85 a la decena más cercana.", "90", ["80", "85", "100"], "🎯", "Si la unidad es 5 o más, se sube."],
    ["Redondea 342 a la centena más cercana.", "300", ["400", "340", "350"], "🎯", "Mira las decenas: 4 < 5, se baja."],
    ["Redondea 678 a la centena más cercana.", "700", ["600", "680", "670"], "🎯", "Mira las decenas: 7 ≥ 5, se sube."],
    ["Redondea 450 a la centena más cercana.", "500", ["400", "450", "460"], "🎯", "Las decenas son 5: se sube."],
    ["Estima: 48 + 31 es aproximadamente…", "80", ["70", "90", "60"], "🤔", "50 + 30 = 80"],
    ["Estima: 198 + 405 es aproximadamente…", "600", ["500", "700", "800"], "🤔", "200 + 400 = 600"],
    ["Estima: 92 − 29 es aproximadamente…", "60", ["70", "50", "120"], "🤔", "90 − 30 = 60"],
    ["Una camiseta cuesta $1950. ¿Aproximadamente cuánto cuesta?", "Unos $2000", ["Unos $1000", "Unos $3000", "Unos $200"], "👕", "1950 está muy cerca de 2000."],
    ["¿Qué número, redondeado a la decena, da 70?", "68", ["64", "75", "78"], "🎯", "68 → 70; 64 → 60; 75 y 78 → 80"],
    ["Redondea 1234 al millar más cercano.", "1000", ["2000", "1200", "1230"], "🎯", "Mira las centenas: 2 < 5, se baja."],
    ["Estima: 6 × 49 es aproximadamente…", "300", ["240", "350", "200"], "🤔", "6 × 50 = 300"],
    ["¿Cuál es la mejor estimación de 51 + 52 + 49?", "150", ["100", "200", "250"], "🤔", "50 + 50 + 50 = 150"]
  ];
  Q.mat_g3_geometria = [
    ["Dos rectas que nunca se cruzan, como los rieles del tren, son…", "Paralelas", ["Perpendiculares", "Curvas", "Secantes"], "🛤️"],
    ["Dos rectas que se cruzan formando una esquina como la de un cuaderno son…", "Perpendiculares", ["Paralelas", "Curvas", "Iguales"], "📐"],
    ["¿Cuánto mide un ángulo recto?", "90°", ["45°", "180°", "100°"], "📐"],
    ["Un ángulo más pequeño que el recto se llama…", "Agudo", ["Obtuso", "Llano", "Recto"], "📐"],
    ["Un ángulo más grande que el recto (pero menor que 180°) se llama…", "Obtuso", ["Agudo", "Recto", "Nulo"], "📐"],
    ["¿Cuántos ángulos rectos tiene un rectángulo?", "4", ["2", "3", "0"], "▭"],
    ["¿Cuántos lados tiene un hexágono?", "6", ["5", "8", "7"], "⬡"],
    ["¿Cuántos vértices (esquinas) tiene un triángulo?", "3", ["4", "2", "6"], "🔺"],
    ["¿Qué figura tiene 4 lados iguales y 4 ángulos rectos?", "Cuadrado", ["Rombo", "Trapecio", "Triángulo"], "⬛"],
    ["¿Cuántas caras tiene un cubo?", "6", ["4", "8", "12"], "🎲"],
    ["¿Cuántas aristas (bordes) tiene un cubo?", "12", ["6", "8", "10"], "🎲"],
    ["¿Cuántos vértices tiene un cubo?", "8", ["6", "12", "4"], "🎲"],
    ["A las 3:00, las agujas del reloj forman un ángulo…", "Recto", ["Agudo", "Obtuso", "Llano"], "🕒"],
    ["Un segmento es…", "Una parte de recta con dos extremos", ["Una línea curva sin fin", "Un punto solo", "Una figura de tres lados"], "📏"]
  ];
  Q.mat_g3_datos = [
    ["Frutas favoritas: manzana 8, banano 5, uvas 11, fresa 6. ¿Cuál es la más votada?", "Uvas", ["Manzana", "Fresa", "Banano"], "📊", "11 es el mayor número de votos."],
    ["Frutas favoritas: manzana 8, banano 5, uvas 11, fresa 6. ¿Cuántos votaron en total?", "30", ["29", "31", "11"], "📊", "8 + 5 + 11 + 6 = 30"],
    ["Frutas favoritas: manzana 8, banano 5, uvas 11, fresa 6. ¿Cuántos votos más tiene uvas que banano?", "6", ["5", "16", "3"], "📊", "11 − 5 = 6"],
    ["Frutas favoritas: manzana 8, banano 5, uvas 11, fresa 6. ¿Cuál es la menos votada?", "Banano", ["Fresa", "Uvas", "Manzana"], "📊"],
    ["En un pictograma cada ⭐ vale 2 niños. La fila de fútbol tiene ⭐⭐⭐⭐. ¿Cuántos niños eligieron fútbol?", "8", ["4", "6", "2"], "⚽", "4 × 2 = 8"],
    ["En un pictograma cada 🍪 vale 5 galletas. ¿Cuántas galletas son 🍪🍪🍪?", "15", ["3", "8", "10"], "🍪", "3 × 5 = 15"],
    ["En un gráfico de barras, la barra más alta muestra…", "El dato con más cantidad", ["El dato con menos cantidad", "El primer dato", "Un error"], "📊"],
    ["Mascotas del salón: perro 9, gato 7, pez 3. ¿Cuántas mascotas hay?", "19", ["18", "16", "20"], "🐶🐱🐟", "9 + 7 + 3 = 19"],
    ["Mascotas del salón: perro 9, gato 7, pez 3. ¿Cuántos perros más que peces hay?", "6", ["12", "5", "2"], "🐶🐟", "9 − 3 = 6"],
    ["Días de lluvia: enero 4, febrero 7, marzo 2. ¿Qué mes llovió más?", "Febrero", ["Enero", "Marzo", "Igual en todos"], "🌧️"],
    ["Días de lluvia: enero 4, febrero 7, marzo 2. ¿Cuántos días llovió en total?", "13", ["12", "11", "14"], "🌧️", "4 + 7 + 2 = 13"],
    ["En un pictograma cada 🚗 vale 10 carros. ¿Cuántos carros son 🚗🚗🚗🚗🚗?", "50", ["5", "15", "40"], "🚗", "5 × 10 = 50"],
    ["Una tabla de datos sirve para…", "Organizar información", ["Hacer dibujos sin números", "Medir el tiempo", "Sumar fracciones"], "📋"],
    ["Colores favoritos: azul 12, rojo 12, verde 4. ¿Qué podemos decir?", "Azul y rojo empatan", ["Gana el verde", "Gana el rojo", "Nadie votó"], "🎨"]
  ];

  /* ===================== 4.º ===================== */
  Q.mat_g4_multiplos = [
    ["¿Cuál es múltiplo de 3?", "12", ["10", "14", "8"], "✖️", "3 × 4 = 12"],
    ["¿Cuál es múltiplo de 5?", "35", ["32", "41", "53"], "✖️", "5 × 7 = 35"],
    ["¿Cuál es divisor de 20?", "4", ["3", "6", "8"], "➗", "20 ÷ 4 = 5 exacto"],
    ["¿Cuáles son todos los divisores de 12?", "1, 2, 3, 4, 6, 12", ["1, 2, 4, 8, 12", "2, 3, 4, 6", "1, 3, 5, 12"], "➗"],
    ["¿Cuál NO es múltiplo de 4?", "18", ["16", "24", "36"], "✖️", "18 ÷ 4 = 4 y sobran 2."],
    ["Un número es divisible entre 2 si termina en…", "0, 2, 4, 6 u 8", ["1, 3, 5, 7 o 9", "Solo en 0", "5 o 0"], "2️⃣"],
    ["Un número es divisible entre 5 si termina en…", "0 o 5", ["2 o 4", "Solo en 5", "Cualquier cifra"], "5️⃣"],
    ["¿Cuál es divisible entre 10?", "340", ["345", "304", "3041"], "🔟", "Termina en 0."],
    ["Los cinco primeros múltiplos de 6 son…", "6, 12, 18, 24, 30", ["1, 2, 3, 6", "6, 11, 16, 21, 26", "6, 12, 16, 24, 30"], "✖️"],
    ["¿Cuántos divisores tiene el 7?", "2", ["1", "7", "3"], "➗", "Solo 1 y 7."],
    ["¿Cuál es divisible entre 3? (Pista: suma sus cifras)", "123", ["124", "125", "202"], "3️⃣", "1 + 2 + 3 = 6, y 6 es múltiplo de 3."],
    ["¿Cuál es múltiplo de 2 y también de 3?", "18", ["9", "8", "15"], "✖️", "18 = 2 × 9 = 3 × 6"],
    ["¿Es 9 divisor de 54?", "Sí, porque 9 × 6 = 54", ["No, sobran 3", "Sí, porque 9 × 5 = 54", "No, porque 54 es par"], "➗"],
    ["Hay 24 alumnos. ¿En qué grupos iguales se pueden repartir sin que sobre nadie?", "Grupos de 8", ["Grupos de 5", "Grupos de 7", "Grupos de 9"], "👫", "24 ÷ 8 = 3 grupos exactos"]
  ];
  Q.mat_g4_romanos = [
    ["¿Qué número es XII?", "12", ["7", "21", "11"], "🏛️", "X = 10, II = 2"],
    ["¿Qué número es IX?", "9", ["11", "8", "4"], "🏛️", "I antes de X resta: 10 − 1 = 9"],
    ["¿Cómo se escribe 4 en números romanos?", "IV", ["VI", "IIV", "IVI"], "🏛️", "5 − 1 = 4 → IV"],
    ["¿Qué número es XL?", "40", ["60", "45", "14"], "🏛️", "50 − 10 = 40"],
    ["¿Qué número es L?", "50", ["100", "5", "500"], "🏛️"],
    ["¿Qué número es C?", "100", ["50", "1000", "500"], "🏛️"],
    ["¿Cómo se escribe 19 en números romanos?", "XIX", ["XVIIII", "IXX", "XXI"], "🏛️", "10 + 9 = X + IX"],
    ["¿Qué número es XXIV?", "24", ["26", "14", "34"], "🏛️", "10 + 10 + 4 = 24"],
    ["¿Qué número es MMXXV?", "2025", ["2015", "1025", "2205"], "🏛️", "1000 + 1000 + 10 + 10 + 5"],
    ["¿Qué número es D?", "500", ["50", "5000", "100"], "🏛️"],
    ["¿Cómo se escribe 90 en números romanos?", "XC", ["LXXXX", "CX", "IC"], "🏛️", "100 − 10 = 90"],
    ["¿Qué número es LXVII?", "67", ["57", "72", "62"], "🏛️", "50 + 10 + 5 + 2 = 67"],
    ["¿Qué número es CDXL?", "440", ["640", "460", "540"], "🏛️", "CD = 400, XL = 40"],
    ["¿Qué número es M?", "1000", ["100", "500", "10 000"], "🏛️"],
    ["El capítulo XIV de un libro es el capítulo…", "14", ["16", "9", "114"], "📖", "X = 10, IV = 4"]
  ];
  SORT.mat_g4_angulos = { bins: ["Agudo (menos de 90°)", "Recto (90°)", "Obtuso (más de 90°)"], items: [
    ["30°", 0], ["45°", 0], ["60°", 0], ["89°", 0], ["15°", 0], ["Reloj a la 1:00", 0],
    ["90°", 1], ["Esquina de una hoja", 1], ["Reloj a las 3:00", 1], ["Reloj a las 9:00", 1],
    ["120°", 2], ["135°", 2], ["100°", 2], ["170°", 2], ["Reloj a las 4:00", 2], ["Reloj a las 5:00", 2]
  ] };
  Q.mat_g4_unidades = [
    ["¿Cuántos metros tiene 1 kilómetro?", "1000 m", ["100 m", "10 m", "10 000 m"], "🛣️"],
    ["3 m = ? cm", "300 cm", ["30 cm", "3000 cm", "33 cm"], "📏", "3 × 100 = 300"],
    ["5 km = ? m", "5000 m", ["500 m", "50 m", "50 000 m"], "🛣️", "5 × 1000 = 5000"],
    ["2500 g = ? kg", "2,5 kg", ["25 kg", "250 kg", "0,25 kg"], "⚖️", "2500 ÷ 1000 = 2,5"],
    ["4 L = ? mL", "4000 mL", ["400 mL", "40 mL", "40 000 mL"], "🥛", "4 × 1000 = 4000"],
    ["70 mm = ? cm", "7 cm", ["70 cm", "700 cm", "0,7 cm"], "📏", "70 ÷ 10 = 7"],
    ["1 m y 25 cm = ? cm", "125 cm", ["1025 cm", "26 cm", "150 cm"], "📏", "100 + 25 = 125"],
    ["¿Qué es más largo: 1500 m o 2 km?", "2 km", ["1500 m", "Son iguales"], "🛣️", "2 km = 2000 m > 1500 m"],
    ["3 horas = ? minutos", "180 minutos", ["300 minutos", "120 minutos", "90 minutos"], "⏰", "3 × 60 = 180"],
    ["2 minutos = ? segundos", "120 segundos", ["200 segundos", "60 segundos", "100 segundos"], "⏱️", "2 × 60 = 120"],
    ["Corres 3 km y luego 800 m. ¿Cuántos metros recorres en total?", "3800 m", ["3080 m", "1100 m", "38 000 m"], "🏃", "3000 + 800 = 3800"],
    ["750 mL + 250 mL = ?", "1 L", ["1000 L", "10 L", "0,5 L"], "🥤", "750 + 250 = 1000 mL = 1 L"],
    ["1 cm = ? mm", "10 mm", ["100 mm", "1000 mm", "1 mm"], "📏"],
    ["6000 kg = ? toneladas", "6 toneladas", ["60 toneladas", "600 toneladas", "0,6 toneladas"], "🚛", "1 tonelada = 1000 kg"]
  ];
  Q.mat_g4_simetria = [
    ["¿Qué letra tiene un eje de simetría vertical?", "A", ["F", "G", "J"], "🔤"],
    ["Un eje de simetría divide una figura en…", "Dos partes iguales, como en un espejo", ["Tres partes distintas", "Dos partes de distinto tamaño", "Muchos triángulos"], "🪞"],
    ["¿Cuántos ejes de simetría tiene un cuadrado?", "4", ["2", "1", "8"], "⬛", "2 por la mitad de los lados y 2 por las diagonales."],
    ["¿Cuántos ejes de simetría tiene un rectángulo que no es cuadrado?", "2", ["4", "1", "0"], "▭"],
    ["¿Cuántos ejes de simetría tiene un círculo?", "Infinitos", ["1", "4", "0"], "⚪", "Cualquier recta que pase por el centro."],
    ["¿Cuántos ejes de simetría tiene un triángulo equilátero?", "3", ["1", "2", "6"], "🔺"],
    ["En el plano, el punto (3, 5) está 3 unidades a la derecha y…", "5 hacia arriba", ["5 hacia abajo", "3 hacia arriba", "5 a la izquierda"], "🗺️"],
    ["¿En qué punto se cruzan los ejes del plano cartesiano?", "(0, 0), el origen", ["(1, 1)", "(10, 10)", "(0, 1)"], "➕"],
    ["Un robot está en (2, 1) y avanza 3 a la derecha. ¿Dónde queda?", "(5, 1)", ["(2, 4)", "(5, 4)", "(3, 1)"], "🤖", "2 + 3 = 5; la altura no cambia."],
    ["Un robot está en (4, 4) y baja 2. ¿Dónde queda?", "(4, 2)", ["(2, 4)", "(4, 6)", "(2, 2)"], "🤖", "4 − 2 = 2 en la segunda coordenada."],
    ["En un par (x, y), el primer número indica…", "La posición horizontal", ["La posición vertical", "El tamaño del punto", "El color"], "🗺️"],
    ["¿Qué letra NO tiene ningún eje de simetría?", "R", ["H", "O", "X"], "🔤"],
    ["Si reflejas ◀ en un espejo vertical, ves…", "▶", ["▲", "▼", "◀"], "🪞"],
    ["Una mariposa tiene simetría porque…", "Sus dos alas son iguales a cada lado", ["Vuela muy alto", "Tiene muchos colores", "Tiene antenas"], "🦋"]
  ];

  /* ===================== 5.º ===================== */
  SORT.mat_g5_primos = { bins: ["Primo", "Compuesto"], items: [
    ["2", 0], ["7", 0], ["11", 0], ["13", 0], ["17", 0], ["23", 0], ["29", 0], ["31", 0], ["41", 0], ["47", 0],
    ["9", 1], ["15", 1], ["21", 1], ["27", 1], ["33", 1], ["39", 1], ["49", 1], ["51", 1], ["57", 1], ["91", 1]
  ] };
  Q.mat_g5_mcm = [
    ["¿Cuál es el MCM de 4 y 6?", "12", ["24", "2", "10"], "🔁", "Múltiplos de 4: 4, 8, 12… de 6: 6, 12… → 12"],
    ["¿Cuál es el MCD de 12 y 18?", "6", ["3", "36", "2"], "🔍", "Divisores comunes: 1, 2, 3, 6 → 6"],
    ["¿Cuál es el MCM de 3 y 5?", "15", ["8", "1", "30"], "🔁", "3 × 5 = 15"],
    ["¿Cuál es el MCD de 20 y 30?", "10", ["5", "60", "2"], "🔍"],
    ["¿Cuál es el MCM de 6 y 8?", "24", ["48", "2", "14"], "🔁", "6, 12, 18, 24 · 8, 16, 24 → 24"],
    ["¿Cuál es el MCD de 9 y 15?", "3", ["45", "5", "1"], "🔍"],
    ["¿Cuál es el MCM de 2, 3 y 4?", "12", ["24", "9", "6"], "🔁"],
    ["¿Cuál es el MCD de 16 y 24?", "8", ["4", "48", "2"], "🔍"],
    ["Un bus pasa cada 10 minutos y otro cada 15. Si salen juntos, ¿en cuántos minutos vuelven a coincidir?", "30", ["25", "150", "5"], "🚌", "MCM(10, 15) = 30"],
    ["Tienes 24 rosas y 36 claveles. Quieres hacer ramos iguales sin que sobre nada. ¿Cuántos ramos puedes hacer como máximo?", "12", ["6", "72", "4"], "💐", "MCD(24, 36) = 12 ramos de 2 rosas y 3 claveles"],
    ["¿Cuál es el MCD de 7 y 11?", "1", ["77", "7", "18"], "🔍", "Son primos: solo comparten el 1."],
    ["¿Cuál es el MCM de 5 y 10?", "10", ["50", "5", "15"], "🔁", "10 ya es múltiplo de 5."],
    ["Una luz parpadea cada 4 segundos y otra cada 6. Si se encienden juntas, ¿cuándo coinciden de nuevo?", "A los 12 segundos", ["A los 24 segundos", "A los 10 segundos", "A los 2 segundos"], "💡", "MCM(4, 6) = 12"],
    ["Una cinta de 18 m y otra de 27 m se cortan en trozos iguales lo más largos posible. ¿Cuánto mide cada trozo?", "9 m", ["3 m", "54 m", "6 m"], "🎀", "MCD(18, 27) = 9"]
  ];
  Q.mat_g5_fracprob = [
    ["Ana comió 1/4 de una pizza y Luis 2/4. ¿Qué parte comieron entre los dos?", "3/4", ["3/8", "1/4", "2/4"], "🍕", "1/4 + 2/4 = 3/4"],
    ["¿Cuánto es 1/2 de 40?", "20", ["80", "10", "42"], "➗", "40 ÷ 2 = 20"],
    ["¿Cuánto es 3/4 de 20?", "15", ["5", "12", "16"], "➗", "20 ÷ 4 = 5; 5 × 3 = 15"],
    ["Un tanque de 60 L está lleno en sus 2/3. ¿Cuántos litros tiene?", "40 L", ["20 L", "30 L", "45 L"], "🛢️", "60 ÷ 3 = 20; 20 × 2 = 40"],
    ["De 30 estudiantes, 1/5 usa gafas. ¿Cuántos usan gafas?", "6", ["5", "25", "10"], "👓", "30 ÷ 5 = 6"],
    ["Tenía 5/6 de una torta y comí 2/6. ¿Cuánto queda?", "3/6 (la mitad)", ["7/6", "3/12", "2/6"], "🎂", "5/6 − 2/6 = 3/6 = 1/2"],
    ["1/2 + 1/4 = ?", "3/4", ["2/6", "2/4", "1/6"], "➕", "1/2 = 2/4; 2/4 + 1/4 = 3/4"],
    ["¿Qué fracción es mayor: 2/3 o 3/5?", "2/3", ["3/5", "Son iguales"], "⚖️", "2/3 = 10/15 y 3/5 = 9/15"],
    ["Un camino mide 12 km y ya recorrí 3/4. ¿Cuántos km me faltan?", "3 km", ["9 km", "4 km", "6 km"], "🥾", "3/4 de 12 = 9; 12 − 9 = 3"],
    ["Pedro gastó 2/5 de sus $1000. ¿Cuánto gastó?", "$400", ["$200", "$600", "$250"], "💵", "1000 ÷ 5 = 200; 200 × 2 = 400"],
    ["Convierte 7/2 en número mixto.", "3 y 1/2", ["2 y 1/2", "3 y 2/7", "7 y 1/2"], "🔄", "7 ÷ 2 = 3 y sobra 1 → 3 y 1/2"],
    ["¿Cuántos cuartos (1/4) hay en 2 unidades?", "8", ["4", "2", "6"], "🍰", "Cada unidad tiene 4 cuartos: 4 + 4 = 8"],
    ["Una receta usa 3/4 de taza de azúcar. Si haces el doble, ¿cuánto usas?", "1 y 1/2 tazas", ["6/8 de taza", "3/8 de taza", "1 taza"], "🧁", "3/4 + 3/4 = 6/4 = 1 y 1/2"],
    ["2/3 × 3 = ?", "2", ["6/9", "2/9", "5/3"], "✖️", "2/3 + 2/3 + 2/3 = 6/3 = 2"]
  ];
  Q.mat_g5_estadistica = [
    ["Notas: 4, 5, 3, 4, 4. ¿Cuál es la moda?", "4", ["5", "3", "20"], "📊", "El 4 es el que más se repite."],
    ["Notas: 6, 8, 10. ¿Cuál es el promedio?", "8", ["24", "10", "6"], "📊", "(6 + 8 + 10) ÷ 3 = 24 ÷ 3 = 8"],
    ["Edades: 9, 11, 10, 12, 8. ¿Cuál es la mediana?", "10", ["8", "12", "11"], "📊", "Ordenados: 8, 9, 10, 11, 12 → el del medio es 10"],
    ["Goles: 2, 0, 3, 1, 4. ¿Cuál es el promedio?", "2", ["3", "10", "1"], "⚽", "(2 + 0 + 3 + 1 + 4) ÷ 5 = 10 ÷ 5 = 2"],
    ["Temperaturas: 18 °C, 22 °C, 20 °C. ¿Cuál es el promedio?", "20 °C", ["22 °C", "18 °C", "60 °C"], "🌡️", "60 ÷ 3 = 20"],
    ["Datos: 5, 7, 7, 9, 12. ¿Cuál es el rango (mayor − menor)?", "7", ["12", "5", "9"], "📏", "12 − 5 = 7"],
    ["Para mostrar partes de un todo (como porcentajes) es mejor un gráfico…", "Circular (de torta)", ["De líneas", "De puntos sueltos", "Ninguno"], "🥧"],
    ["Para ver cómo cambia la temperatura día a día es mejor un gráfico…", "De líneas", ["Circular", "Pictograma sin escala", "Ninguno"], "📈"],
    ["Ventas: lunes 10, martes 14, miércoles 6, jueves 10. ¿Cuál es la moda?", "10", ["14", "6", "40"], "🛒", "El 10 aparece dos veces."],
    ["Ventas: lunes 10, martes 14, miércoles 6, jueves 10. ¿Cuál es el promedio?", "10", ["14", "40", "8"], "🛒", "(10 + 14 + 6 + 10) ÷ 4 = 40 ÷ 4 = 10"],
    ["Sacaste 7, 8 y 9. ¿Qué nota necesitas en la cuarta prueba para tener promedio 8?", "8", ["9", "7", "10"], "📝", "Promedio 8 con 4 notas suma 32; 32 − 24 = 8"],
    ["En un gráfico circular, la mitad del círculo representa el…", "50 %", ["25 %", "100 %", "10 %"], "🥧"],
    ["En un gráfico circular, un cuarto del círculo representa el…", "25 %", ["50 %", "40 %", "75 %"], "🥧"],
    ["Datos: 3, 3, 4, 8, 8, 8, 10. ¿Cuál es la moda?", "8", ["3", "10", "4"], "📊", "El 8 aparece tres veces."]
  ];
  Q.mat_g5_volumen = [
    ["¿Cuál es el volumen de una caja de 2 × 3 × 4 cubitos?", "24 cubitos", ["9 cubitos", "12 cubitos", "20 cubitos"], "📦", "2 × 3 × 4 = 24"],
    ["¿Cuántos cubitos de 1 cm³ caben en un cubo de 3 cm de lado?", "27", ["9", "12", "18"], "🧊", "3 × 3 × 3 = 27"],
    ["¿Cuál es el volumen de una caja de 5 cm × 4 cm × 2 cm?", "40 cm³", ["11 cm³", "20 cm³", "80 cm³"], "📦", "5 × 4 × 2 = 40"],
    ["¿Cuántas caras tiene un prisma rectangular (como una caja)?", "6", ["4", "8", "12"], "📦"],
    ["¿Cuántas caras tiene una pirámide de base cuadrada?", "5", ["4", "6", "8"], "🔺", "1 base cuadrada + 4 triángulos"],
    ["¿Cuántos vértices tiene una pirámide de base cuadrada?", "5", ["4", "8", "6"], "🔺", "4 en la base + 1 arriba"],
    ["¿Cuántas caras tiene un prisma triangular?", "5", ["3", "6", "9"], "⛺", "2 triángulos + 3 rectángulos"],
    ["¿Cuántas aristas tiene un prisma triangular?", "9", ["6", "5", "12"], "⛺", "3 + 3 en las bases y 3 laterales"],
    ["1 dm³ equivale a…", "1 litro", ["1 mililitro", "10 litros", "100 litros"], "🥛"],
    ["Una pecera mide 50 cm × 20 cm × 30 cm. ¿Cuál es su volumen?", "30 000 cm³", ["100 cm³", "3000 cm³", "300 000 cm³"], "🐠", "50 × 20 × 30 = 30 000 cm³ (30 litros)"],
    ["¿Qué cuerpo NO tiene vértices?", "Esfera", ["Cubo", "Pirámide", "Prisma"], "⚽"],
    ["Un cubo tiene 2 cm de arista. ¿Cuál es su volumen?", "8 cm³", ["6 cm³", "4 cm³", "12 cm³"], "🧊", "2 × 2 × 2 = 8"],
    ["Si duplicas solo el largo de una caja, su volumen…", "Se duplica", ["Se triplica", "No cambia", "Se reduce a la mitad"], "📦"],
    ["¿Qué unidad mide volumen?", "Centímetro cúbico (cm³)", ["Centímetro (cm)", "Centímetro cuadrado (cm²)", "Gramo (g)"], "📐"]
  ];

  /* ===================== 6.º ===================== */
  Q.mat_g6_proporcion = [
    ["Si 3 cuadernos cuestan $900, ¿cuánto cuestan 5?", "$1500", ["$1200", "$1800", "$1000"], "📓", "900 ÷ 3 = 300; 300 × 5 = 1500"],
    ["En un salón hay 12 niñas y 18 niños. ¿Cuál es la razón niñas : niños simplificada?", "2 : 3", ["3 : 2", "12 : 30", "1 : 3"], "👧👦", "12 : 18, dividiendo entre 6 → 2 : 3"],
    ["Una receta para 4 personas usa 200 g de arroz. ¿Cuánto se necesita para 6 personas?", "300 g", ["250 g", "400 g", "350 g"], "🍚", "200 ÷ 4 = 50 g por persona; 50 × 6 = 300"],
    ["Un carro recorre 60 km en 1 hora. A la misma velocidad, ¿cuánto recorre en 3 horas?", "180 km", ["63 km", "120 km", "200 km"], "🚗", "60 × 3 = 180"],
    ["4 obreros hacen un muro en 6 días. ¿Cuántos días tardan 8 obreros? (proporción inversa)", "3 días", ["12 días", "6 días", "4 días"], "🧱", "El doble de obreros tarda la mitad: 6 ÷ 2 = 3"],
    ["¿Cuál es una proporción verdadera?", "2/5 = 6/15", ["2/5 = 4/12", "3/4 = 6/9", "1/2 = 3/5"], "⚖️", "2 × 15 = 30 y 5 × 6 = 30"],
    ["En un mapa 1 cm representa 5 km. Dos ciudades están a 7 cm. ¿Cuál es la distancia real?", "35 km", ["12 km", "7 km", "50 km"], "🗺️", "7 × 5 = 35"],
    ["Resuelve: 3/x = 9/12", "4", ["3", "36", "6"], "❓", "x = 3 × 12 ÷ 9 = 4"],
    ["Por cada 2 limones se usan 5 vasos de agua. Con 8 limones, ¿cuántos vasos?", "20", ["15", "40", "11"], "🍋", "8 ÷ 2 = 4; 4 × 5 = 20"],
    ["Una impresora imprime 30 páginas en 2 minutos. ¿Cuántas imprime en 7 minutos?", "105", ["60", "210", "90"], "🖨️", "15 por minuto × 7 = 105"],
    ["Si 5 kg de naranjas cuestan $4000, ¿cuánto cuesta 1 kg?", "$800", ["$2000", "$400", "$1000"], "🍊", "4000 ÷ 5 = 800"],
    ["La razón de perros a gatos es 3 : 1. Si hay 12 perros, ¿cuántos gatos hay?", "4", ["36", "3", "9"], "🐶🐱", "12 ÷ 3 = 4"],
    ["Con 6 litros de pintura se pintan 24 m². ¿Cuántos m² se pintan con 10 litros?", "40 m²", ["28 m²", "60 m²", "30 m²"], "🎨", "24 ÷ 6 = 4 m² por litro; 4 × 10 = 40"]
  ];
  Q.mat_g6_probabilidad = [
    ["Lanzas un dado normal. ¿Cuál es la probabilidad de sacar un 4?", "1/6", ["4/6", "1/4", "1/2"], "🎲", "1 caso favorable de 6 posibles"],
    ["Lanzas una moneda. ¿Cuál es la probabilidad de que salga cara?", "1/2", ["1/3", "1", "0"], "🪙"],
    ["En una bolsa hay 3 bolas rojas y 1 azul. ¿Probabilidad de sacar roja?", "3/4", ["1/4", "3/1", "1/3"], "🔴", "3 rojas de 4 bolas"],
    ["Que mañana salga el sol por el este es un suceso…", "Seguro", ["Imposible", "Poco probable"], "🌅"],
    ["Sacar un 7 con un dado normal de 6 caras es un suceso…", "Imposible", ["Seguro", "Muy probable"], "🎲"],
    ["Lanzas un dado normal. ¿Probabilidad de sacar un número par?", "1/2", ["1/6", "2/6", "1/3"], "🎲", "Pares: 2, 4, 6 → 3/6 = 1/2"],
    ["En una caja hay 5 lápices verdes y 5 amarillos. Sacar uno verde es…", "Igual de probable que amarillo", ["Más probable que amarillo", "Imposible", "Seguro"], "✏️"],
    ["Bolsa con 2 bolas rojas, 3 azules y 5 verdes. ¿Qué color es más probable?", "Verde", ["Rojo", "Azul", "Todos igual"], "🟢", "Hay más verdes (5 de 10)."],
    ["Bolsa con 2 bolas rojas, 3 azules y 5 verdes. ¿Probabilidad de sacar azul?", "3/10", ["3/5", "1/3", "3/7"], "🔵", "3 azules de 10 bolas"],
    ["Lanzas un dado normal. ¿Probabilidad de sacar un número mayor que 4?", "2/6 (1/3)", ["4/6", "1/6", "1/2"], "🎲", "Solo 5 y 6: 2 de 6"],
    ["Una ruleta tiene 8 partes iguales y 2 son amarillas. ¿Probabilidad de amarillo?", "1/4", ["2/6", "1/2", "1/8"], "🎡", "2/8 = 1/4"],
    ["La probabilidad de un suceso seguro es…", "1", ["0", "1/2", "10"], "✅"],
    ["Lanzas dos monedas. ¿Cuántos resultados posibles hay?", "4", ["2", "3", "6"], "🪙🪙", "CC, CS, SC, SS"],
    ["Lanzas dos monedas. ¿Probabilidad de que salgan dos caras?", "1/4", ["1/2", "1/3", "2/4"], "🪙🪙", "Solo CC de 4 resultados"]
  ];
  Q.mat_g6_circulo = [
    ["La distancia del centro a cualquier punto de la circunferencia se llama…", "Radio", ["Diámetro", "Cuerda", "Perímetro"], "⭕"],
    ["Si el radio mide 5 cm, el diámetro mide…", "10 cm", ["2,5 cm", "25 cm", "15 cm"], "⭕", "d = 2 × r = 10"],
    ["Si el diámetro mide 18 cm, el radio mide…", "9 cm", ["36 cm", "18 cm", "6 cm"], "⭕", "r = d ÷ 2 = 9"],
    ["Longitud de una circunferencia de diámetro 10 cm (π ≈ 3,14)", "31,4 cm", ["314 cm", "13,14 cm", "62,8 cm"], "⭕", "L = π × d = 3,14 × 10 = 31,4"],
    ["Longitud de una circunferencia de radio 2 cm (π ≈ 3,14)", "12,56 cm", ["6,28 cm", "4 cm", "25,12 cm"], "⭕", "L = 2 × π × r = 2 × 3,14 × 2 = 12,56"],
    ["Área de un círculo de radio 10 cm (π ≈ 3,14)", "314 cm²", ["31,4 cm²", "62,8 cm²", "100 cm²"], "🔵", "A = π × r² = 3,14 × 100 = 314"],
    ["Área de un círculo de radio 3 cm (π ≈ 3,14)", "28,26 cm²", ["18,84 cm²", "9,42 cm²", "36 cm²"], "🔵", "A = 3,14 × 9 = 28,26"],
    ["El número π vale aproximadamente…", "3,14", ["2,14", "3,41", "31,4"], "π"],
    ["La cuerda más larga de una circunferencia es el…", "Diámetro", ["Radio", "Arco", "Centro"], "⭕"],
    ["Una rueda tiene 50 cm de diámetro. ¿Cuánto avanza en una vuelta? (π ≈ 3,14)", "157 cm", ["150 cm", "78,5 cm", "314 cm"], "🛞", "3,14 × 50 = 157"],
    ["¿Cuál es la fórmula de la longitud de la circunferencia?", "L = π × d", ["L = π × r × r", "L = d ÷ π", "L = 2 × d"], "📐"],
    ["¿Cuál es la fórmula del área del círculo?", "A = π × r²", ["A = 2 × π × r", "A = π × d", "A = r × r"], "📐"],
    ["Un ángulo central que da la vuelta completa mide…", "360°", ["180°", "90°", "100°"], "🔄"],
    ["Medio círculo tiene un ángulo central de…", "180°", ["90°", "360°", "120°"], "◐"]
  ];
  Q.mat_g6_potencias = [
    ["2³ = ?", "8", ["6", "9", "5"], "⚡", "2 × 2 × 2 = 8"],
    ["5² = ?", "25", ["10", "7", "52"], "⚡", "5 × 5 = 25"],
    ["10³ = ?", "1000", ["30", "100", "10 000"], "⚡", "10 × 10 × 10 = 1000"],
    ["√49 = ?", "7", ["24,5", "9", "8"], "√", "7 × 7 = 49"],
    ["√81 = ?", "9", ["8", "40,5", "18"], "√", "9 × 9 = 81"],
    ["3⁴ = ?", "81", ["12", "64", "27"], "⚡", "3 × 3 × 3 × 3 = 81"],
    ["¿Cuál es un cuadrado perfecto?", "36", ["24", "50", "18"], "⬛", "6 × 6 = 36"],
    ["Un cuadrado tiene un área de 64 cm². ¿Cuánto mide su lado?", "8 cm", ["16 cm", "32 cm", "6 cm"], "⬛", "√64 = 8"],
    ["4² + 3² = ?", "25", ["49", "14", "12"], "⚡", "16 + 9 = 25"],
    ["Cualquier número (distinto de 0) elevado a 0 es…", "1", ["0", "El mismo número", "10"], "⚡"],
    ["10⁵ se escribe…", "100 000", ["50", "10 000", "1 000 000"], "⚡", "Un 1 seguido de 5 ceros"],
    ["2⁵ = ?", "32", ["10", "25", "16"], "⚡", "2 × 2 × 2 × 2 × 2 = 32"],
    ["√100 + √25 = ?", "15", ["125", "11", "50"], "√", "10 + 5 = 15"],
    ["En 7², el 7 es la base y el 2 es el…", "Exponente", ["Factor", "Resultado", "Divisor"], "⚡"],
    ["1⁸ = ?", "1", ["8", "9", "0"], "⚡", "1 multiplicado por sí mismo siempre da 1."]
  ];
  Q.mat_g6_ecuaciones = [
    ["x + 7 = 15. ¿Cuánto vale x?", "8", ["22", "7", "9"], "🔍", "15 − 7 = 8"],
    ["x − 4 = 10. ¿Cuánto vale x?", "14", ["6", "4", "40"], "🔍", "10 + 4 = 14"],
    ["3x = 21. ¿Cuánto vale x?", "7", ["18", "24", "63"], "🔍", "21 ÷ 3 = 7"],
    ["x ÷ 5 = 6. ¿Cuánto vale x?", "30", ["11", "1", "56"], "🔍", "6 × 5 = 30"],
    ["2x + 3 = 11. ¿Cuánto vale x?", "4", ["7", "5", "16"], "🔍", "11 − 3 = 8; 8 ÷ 2 = 4"],
    ["5x − 5 = 20. ¿Cuánto vale x?", "5", ["3", "4", "25"], "🔍", "20 + 5 = 25; 25 ÷ 5 = 5"],
    ["Pienso un número, le sumo 9 y obtengo 25. ¿Qué número pensé?", "16", ["34", "15", "17"], "🤔", "25 − 9 = 16"],
    ["El doble de un número es 46. ¿Cuál es el número?", "23", ["92", "44", "48"], "🤔", "46 ÷ 2 = 23"],
    ["Si a + a + a = 27, ¿cuánto vale a?", "9", ["24", "3", "81"], "🔍", "3a = 27 → a = 9"],
    ["Un lápiz y un borrador cuestan $700. El borrador cuesta $250. ¿Cuánto cuesta el lápiz?", "$450", ["$950", "$550", "$350"], "✏️", "x + 250 = 700 → x = 450"],
    ["x + x + 10 = 30. ¿Cuánto vale x?", "10", ["20", "15", "5"], "🔍", "2x = 20 → x = 10"],
    ["4x = 2. ¿Cuánto vale x?", "0,5", ["2", "8", "0,2"], "🔍", "2 ÷ 4 = 0,5"],
    ["Si y = 3, ¿cuánto vale 4y − 2?", "10", ["14", "12", "8"], "🔍", "4 × 3 − 2 = 12 − 2 = 10"],
    ["Un rectángulo tiene perímetro 30 cm y base 9 cm. ¿Cuánto mide la altura?", "6 cm", ["21 cm", "12 cm", "3 cm"], "▭", "2 × (9 + h) = 30 → 9 + h = 15 → h = 6"]
  ];
  ORDER.mat_g6_pasos = [
    ["Leer el problema con calma", "Identificar los datos y la pregunta", "Elegir la operación", "Resolver la operación", "Comprobar y escribir la respuesta"],
    ["Precio $5000 con 20 % de descuento", "1 % de 5000 es 5000 ÷ 100 = 50", "20 % es 50 × 20 = 1000", "Restar: 5000 − 1000", "Precio final: $4000"],
    ["Sumar 2/3 + 1/4", "Buscar un denominador común: 12", "Convertir: 8/12 + 3/12", "Sumar: 11/12"],
    ["Operación (6 + 4) × 3 − 5", "Resolver el paréntesis: 6 + 4 = 10", "Multiplicar: 10 × 3 = 30", "Restar: 30 − 5 = 25"],
    ["Ecuación 3x + 5 = 20", "Restar 5 a ambos lados: 3x = 15", "Dividir entre 3: x = 5", "Comprobar: 3 × 5 + 5 = 20 ✔"],
    ["Área de un círculo de radio 4 cm", "Elevar el radio al cuadrado: 4² = 16", "Multiplicar por π: 16 × 3,14", "Resultado: 50,24 cm²"],
    ["Hallar el MCD de 12 y 18", "Divisores de 12: 1, 2, 3, 4, 6, 12", "Divisores de 18: 1, 2, 3, 6, 9, 18", "El mayor divisor común es 6"]
  ];

  /* ===================== TEMAS ===================== */
  const topics = {
    0: [
      { id: "xmat0a", title: "Grande y pequeño", gen: "quiz", params: { bank: "mat_g0_tamano" }, lesson: "Comparamos cosas: unas son grandes y otras pequeñas, unas altas y otras bajitas, unas pesan mucho y otras poco.", example: "🐘 es más grande que 🐭", tip: "Pongan juguetes en fila del más pequeño al más grande y digan cuál es cuál." },
      { id: "xmat0b", title: "Arriba, abajo, dentro y fuera", gen: "quiz", params: { bank: "mat_g0_posicion" }, lesson: "Las palabras arriba, abajo, dentro, fuera, primero y último nos dicen dónde está cada cosa.", example: "El pájaro está ARRIBA del árbol 🐦🌳", tip: "Jueguen a esconder un peluche y den pistas: está debajo de la mesa, dentro de la caja…" },
      { id: "xmat0c", title: "Números del 1 al 10", gen: "quiz", params: { bank: "mat_g0_numeros" }, lesson: "Cada número tiene su lugar: el 4 va después del 3 y antes del 5. Contamos cosas de nuestro cuerpo y de lo que vemos.", example: "1, 2, 3, 4, 5 🖐️", tip: "Cuenten escalones al subir y bajen contando hacia atrás." },
      { id: "xmat0d", title: "Juntar y quitar", gen: "quiz", params: { bank: "mat_g0_juntar" }, lesson: "Si juntamos cosas, tenemos más. Si quitamos cosas, nos quedan menos. Contamos para saber cuántas hay.", example: "🍎🍎 ➕ 🍎 = 3 manzanas", tip: "Usen botones o piedritas: pongan 3, agreguen 2 y cuenten juntos cuántos hay." },
      { id: "xmat0e", title: "Clasificar", gen: "sort", params: { bank: "mat_g0_clasificar" }, lesson: "Clasificar es poner juntas las cosas que se parecen: los animales con los animales y las frutas con las frutas.", example: "🐶 y 🐱 son animales · 🍌 y 🍇 son frutas", tip: "Ordenen la ropa limpia: medias en un lado, camisetas en otro." },
      { id: "xmat0f", title: "¿Qué pasa primero?", gen: "orderSteps", params: { bank: "mat_g0_secuencias" }, lesson: "Las cosas pasan en orden: primero, después y al final. Ordenar nos ayuda a pensar.", example: "🥚 → 🐣 → 🐔", tip: "Cuenten lo que hicieron hoy usando primero, después y al final." }
    ],
    1: [
      { id: "xmat1a", title: "Monedas y compras", gen: "quiz", params: { bank: "mat_g1_dinero" }, lesson: "Con las monedas pagamos lo que compramos. Sumamos para saber cuánto tenemos y restamos para saber cuánto nos sobra.", example: "2 monedas de $5 = $10", tip: "Jueguen a la tienda con monedas reales o de cartón y etiquetas de precios." },
      { id: "xmat1b", title: "Medir y comparar", gen: "quiz", params: { bank: "mat_g1_medir" }, lesson: "Medimos lo largo con una regla, lo pesado con una balanza y el tiempo con un reloj. También podemos medir con cuartas, pasos o clips.", example: "La mesa mide 9 cuartas ✋", tip: "Midan la cama o la mesa con pasos y con cuartas, y comparen los números." },
      { id: "xmat1c", title: "¿Par o impar?", gen: "sort", params: { bank: "mat_g1_pares" }, lesson: "Un número es par si sus objetos se pueden formar en parejas sin que sobre ninguno. Los pares terminan en 0, 2, 4, 6 u 8.", example: "8 es par · 7 es impar", tip: "Formen parejas con medias o cucharas: ¿sobra alguna?" },
      { id: "xmat1d", title: "Ordenar números", gen: "orderSteps", params: { bank: "mat_g1_ordenar", prompt: "Ordena los números de menor a mayor 🔢" }, lesson: "Ordena los números de MENOR a MAYOR. Primero mira las decenas; si son iguales, mira las unidades.", example: "9, 19, 29, 39", tip: "Escriban números en tarjetas y pídele que las ordene en la mesa." },
      { id: "xmat1e", title: "Problemas de sumar y restar", gen: "quiz", params: { bank: "mat_g1_problemas" }, lesson: "Leemos el problema y pensamos: si llegan o juntamos, sumamos; si se van o quitamos, restamos.", example: "8 niños y suben 5 → 8 + 5 = 13", tip: "Inventen problemas con cosas de la casa: tengo 12 uvas y me como 4…" },
      { id: "xmat1f", title: "Días, semanas y meses", gen: "quiz", params: { bank: "mat_g1_calendario" }, lesson: "La semana tiene 7 días y el año tiene 12 meses. Ayer, hoy y mañana nos ayudan a ubicarnos en el tiempo.", example: "Hoy es lunes, mañana será martes 📅", tip: "Pongan un calendario en la nevera y marquen cada día que pasa." }
    ],
    2: [
      { id: "xmat2a", title: "Dinero y vuelto", gen: "quiz", params: { bank: "mat_g2_dinero" }, lesson: "Para saber cuánto pagamos, sumamos los precios. Para saber el vuelto, restamos el precio del dinero que entregamos.", example: "Pago $1000 por un jugo de $650 → vuelto $350", tip: "En una compra real, pídele que calcule el vuelto antes de que lo entreguen." },
      { id: "xmat2b", title: "Centímetros y metros", gen: "quiz", params: { bank: "mat_g2_longitud" }, lesson: "Usamos centímetros (cm) para cosas pequeñas y metros (m) para cosas grandes. 1 metro = 100 centímetros.", example: "Un borrador mide 5 cm · una puerta mide 2 m", tip: "Con una cinta métrica midan juguetes, la mesa y la altura de cada uno." },
      { id: "xmat2c", title: "Números hasta 1000", gen: "quiz", params: { bank: "mat_g2_centenas" }, lesson: "Los números de tres cifras tienen centenas, decenas y unidades. 1 centena = 10 decenas = 100 unidades.", example: "327 = 300 + 20 + 7", tip: "Usen billetes de juguete de 100, 10 y 1 para formar números." },
      { id: "xmat2d", title: "Cuerpos geométricos", gen: "sort", params: { bank: "mat_g2_cuerpos" }, lesson: "Los cuerpos ocupan espacio. El cubo tiene caras cuadradas, la esfera es redonda, el cilindro parece un tubo y el cono termina en punta.", example: "🎲 cubo · ⚽ esfera · 🥫 cilindro · 🍦 cono", tip: "Busquen en la cocina objetos con forma de cubo, esfera, cilindro y cono." },
      { id: "xmat2e", title: "Tablas del 3 y del 4", gen: "mul", params: { tables: [3, 4] }, lesson: "La tabla del 3 va de 3 en 3 y la del 4 de 4 en 4. Multiplicar es sumar grupos iguales.", example: "4 × 3 = 3 + 3 + 3 + 3 = 12", tip: "Cuenten patas de sillas (de 4 en 4) y hojas de trébol (de 3 en 3)." }
    ],
    3: [
      { id: "xmat3a", title: "Masa y capacidad", gen: "quiz", params: { bank: "mat_g3_masa" }, lesson: "La masa se mide en kilogramos (kg) y gramos (g); la capacidad en litros (L) y mililitros (mL). 1 kg = 1000 g y 1 L = 1000 mL.", example: "Medio kilo = 500 g · un cuarto de litro = 250 mL", tip: "Lean las etiquetas de los productos de la cocina y comparen pesos y capacidades." },
      { id: "xmat3b", title: "Horas, minutos y fechas", gen: "quiz", params: { bank: "mat_g3_tiempo" }, lesson: "Una hora tiene 60 minutos y un día 24 horas. Media hora son 30 minutos y un cuarto de hora, 15.", example: "Empiezo 7:15, termino 7:45 → 30 minutos", tip: "Cronometren cuánto tardan en tareas diarias: bañarse, comer, ir a la escuela." },
      { id: "xmat3c", title: "Redondear y estimar", gen: "quiz", params: { bank: "mat_g3_redondeo" }, lesson: "Redondear es buscar el número 'redondo' más cercano. Si la cifra que miramos es 5 o más, subimos; si es menor, bajamos. Estimar es calcular aproximado.", example: "47 → 50 · 48 + 31 ≈ 50 + 30 = 80", tip: "En el supermercado, estimen el total redondeando precios antes de pagar." },
      { id: "xmat3d", title: "Rectas, ángulos y figuras", gen: "quiz", params: { bank: "mat_g3_geometria" }, lesson: "Las rectas paralelas nunca se cruzan; las perpendiculares forman ángulos rectos (90°). Un ángulo agudo es menor que 90° y uno obtuso, mayor.", example: "Los rieles del tren son paralelos 🛤️", tip: "Busquen ángulos rectos en la casa: esquinas de puertas, libros y ventanas." },
      { id: "xmat3e", title: "Tablas y gráficos", gen: "quiz", params: { bank: "mat_g3_datos" }, lesson: "Los datos se organizan en tablas, pictogramas y gráficos de barras. Así vemos rápido qué hay más y qué hay menos.", example: "Si cada ⭐ vale 2, ⭐⭐⭐ = 6", tip: "Hagan una encuesta familiar (fruta favorita) y dibujen un gráfico de barras." },
      { id: "xmat3f", title: "Números hasta 10 000", gen: "place", params: { max: 9999 }, lesson: "En números de cuatro cifras aparecen las unidades de mil. El valor de cada cifra depende de su posición.", example: "En 4528, el 4 vale 4000", tip: "Lean números grandes en recibos o placas de carros y digan cuánto vale cada cifra." }
    ],
    4: [
      { id: "xmat4a", title: "Múltiplos y divisores", gen: "quiz", params: { bank: "mat_g4_multiplos" }, lesson: "Los múltiplos de un número salen de multiplicarlo (3, 6, 9…). Un divisor reparte un número en partes exactas, sin que sobre nada.", example: "12 es múltiplo de 3 · 4 es divisor de 20", tip: "Repartan 24 objetos en grupos iguales de distintas formas: ¿cuáles funcionan?" },
      { id: "xmat4b", title: "Números romanos", gen: "quiz", params: { bank: "mat_g4_romanos" }, lesson: "Los romanos usaban letras: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Si una letra menor va antes de una mayor, se resta.", example: "XIV = 10 + 4 = 14 · IX = 9", tip: "Busquen números romanos en relojes, libros o nombres de reyes y papas." },
      { id: "xmat4c", title: "Clases de ángulos", gen: "sort", params: { bank: "mat_g4_angulos" }, lesson: "Los ángulos se miden en grados (°). Agudo: menos de 90°. Recto: exactamente 90°. Obtuso: más de 90° y menos de 180°.", example: "45° agudo · 90° recto · 120° obtuso", tip: "Abran y cierren un libro o unas tijeras y formen ángulos de cada tipo." },
      { id: "xmat4d", title: "Conversión de unidades", gen: "quiz", params: { bank: "mat_g4_unidades" }, lesson: "Para pasar de una unidad grande a una pequeña multiplicamos; de una pequeña a una grande, dividimos. 1 km = 1000 m, 1 m = 100 cm, 1 kg = 1000 g.", example: "3 m = 300 cm · 2500 g = 2,5 kg", tip: "Con un mapa o app, conviertan distancias de km a metros." },
      { id: "xmat4e", title: "Simetría y coordenadas", gen: "quiz", params: { bank: "mat_g4_simetria" }, lesson: "Una figura es simétrica si un eje la divide en dos mitades iguales como un espejo. En el plano, (x, y) indica cuánto avanzar a la derecha y cuánto subir.", example: "El cuadrado tiene 4 ejes · (3, 5): 3 a la derecha, 5 arriba", tip: "Doblen papel, recorten una figura y ábranla para ver su simetría." }
    ],
    5: [
      { id: "xmat5a", title: "Primos y compuestos", gen: "sort", params: { bank: "mat_g5_primos" }, lesson: "Un número primo solo se divide exactamente entre 1 y sí mismo. Un número compuesto tiene más divisores.", example: "13 es primo · 21 = 3 × 7 es compuesto", tip: "Hagan la criba de Eratóstenes en una tabla del 1 al 100 tachando múltiplos." },
      { id: "xmat5b", title: "MCM y MCD", gen: "quiz", params: { bank: "mat_g5_mcm" }, lesson: "El mínimo común múltiplo (MCM) es el menor múltiplo que comparten dos números. El máximo común divisor (MCD) es el mayor divisor que comparten.", example: "MCM(4, 6) = 12 · MCD(12, 18) = 6", tip: "Usen semáforos o buses que pasan cada cierto tiempo para preguntar cuándo coinciden." },
      { id: "xmat5c", title: "Problemas con fracciones", gen: "quiz", params: { bank: "mat_g5_fracprob" }, lesson: "Para hallar una fracción de un número, dividimos entre el denominador y multiplicamos por el numerador.", example: "3/4 de 20 → 20 ÷ 4 = 5 → 5 × 3 = 15", tip: "Al cocinar, dupliquen o reduzcan a la mitad una receta con fracciones." },
      { id: "xmat5d", title: "Promedio, moda y gráficos", gen: "quiz", params: { bank: "mat_g5_estadistica" }, lesson: "El promedio se obtiene sumando los datos y dividiendo entre cuántos son. La moda es el dato que más se repite y la mediana es el del medio.", example: "6, 8, 10 → promedio 24 ÷ 3 = 8", tip: "Anoten la temperatura o los minutos de lectura de una semana y calculen el promedio." },
      { id: "xmat5e", title: "Volumen y cuerpos", gen: "quiz", params: { bank: "mat_g5_volumen" }, lesson: "El volumen es el espacio que ocupa un cuerpo. En una caja: largo × ancho × alto. Se mide en cm³; 1 dm³ = 1 litro.", example: "Caja 5 × 4 × 2 = 40 cm³", tip: "Midan una caja de cereal o de zapatos y calculen su volumen." }
    ],
    6: [
      { id: "xmat6a", title: "Razones y proporciones", gen: "quiz", params: { bank: "mat_g6_proporcion" }, lesson: "Una razón compara dos cantidades. En una proporción directa, si una cantidad se duplica la otra también; en una inversa, si una se duplica la otra se reduce a la mitad.", example: "3 cuadernos $900 → 1 cuesta $300 → 5 cuestan $1500", tip: "Comparen precios por kilo o por litro en el supermercado para ver cuál conviene." },
      { id: "xmat6b", title: "Probabilidad", gen: "quiz", params: { bank: "mat_g6_probabilidad" }, lesson: "La probabilidad es casos favorables ÷ casos posibles. Va de 0 (imposible) a 1 (seguro).", example: "Sacar un 4 con un dado: 1/6", tip: "Lancen un dado 30 veces, anoten los resultados y comparen con lo esperado." },
      { id: "xmat6c", title: "El círculo y π", gen: "quiz", params: { bank: "mat_g6_circulo" }, lesson: "El diámetro es el doble del radio. La longitud de la circunferencia es π × d y el área del círculo es π × r², con π ≈ 3,14.", example: "Radio 10 cm → área 3,14 × 100 = 314 cm²", tip: "Midan con un hilo el contorno de un plato y divídanlo entre su diámetro: ¡sale cerca de 3,14!" },
      { id: "xmat6d", title: "Potencias y raíces", gen: "quiz", params: { bank: "mat_g6_potencias" }, lesson: "Una potencia multiplica la base por sí misma tantas veces como dice el exponente. La raíz cuadrada es lo contrario de elevar al cuadrado.", example: "2³ = 2 × 2 × 2 = 8 · √49 = 7", tip: "Armen cuadrados con fichas o baldosas: 3 × 3, 4 × 4… y cuenten las piezas." },
      { id: "xmat6e", title: "Ecuaciones sencillas", gen: "quiz", params: { bank: "mat_g6_ecuaciones" }, lesson: "Una ecuación es una igualdad con un número desconocido (x). Para hallarlo hacemos la operación contraria en ambos lados.", example: "2x + 3 = 11 → 2x = 8 → x = 4", tip: "Jueguen a 'adivina mi número': pienso un número, lo multiplico por 3 y le sumo 2…" },
      { id: "xmat6f", title: "Resolver paso a paso", gen: "orderSteps", params: { bank: "mat_g6_pasos" }, lesson: "Los problemas largos se resuelven en pasos ordenados. Cada paso usa el resultado del anterior y al final comprobamos.", example: "(6 + 4) × 3 − 5 → 10 → 30 → 25", tip: "Que explique en voz alta cada paso de un problema de su cuaderno." }
    ]
  };

  window.CURRICULUM.extend({ subject: "mat", banks: { Q, SORT, ORDER }, topics });
})();
