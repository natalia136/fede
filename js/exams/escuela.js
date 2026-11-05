/* Exámenes de repaso que vienen del colegio (formato de los exámenes reales). */
EXAMS.add([
  {
    id: "lapaz-p4-len", subject: "len", grade: 3, title: "La función de las palabras", tag: "Periodo 4 · Institución Educativa La Paz",
    items: [
      { t: "read", intro: "Lee el texto con atención y responde las preguntas 1 a 6.", title: "La función de las palabras", poemAfter: 0,
        text: ["En la escuela de Luna se preparaba una función para celebrar el cuidado de la naturaleza. Luna escribió un poema para el árbol del patio:",
          "Su amigo Tomás propuso representar una pequeña obra de teatro. Él sería el árbol y Luna, una niña que quería cortarlo para hacer una mesa. Durante los ensayos, Tomás dijo con voz firme: —¡No me cortes! También soy hogar de los pájaros. Luna respondió: —No lo había pensado. Podemos buscar madera caída y dejarte vivir.",
          "La profesora sonrió y les recordó que los poemas expresan sentimientos mediante versos, mientras que las obras dramáticas cuentan una historia a través de los diálogos y las acciones de los personajes. Antes de presentar la función, los niños revisaron la ortografía y colocaron los signos de puntuación para que todos comprendieran el mensaje: cuidar la naturaleza es responsabilidad de todos."],
        poem: ["«Árbol de hojas brillantes,", "das sombra al caminante;", "con tus ramas hacia el cielo,", "nos regalas aire y consuelo»."] },
      { t: "mc", q: "¿Para qué preparaban una función en la escuela?", o: ["Para vender mesas.", "Para celebrar el cuidado de la naturaleza.", "Para elegir un nuevo profesor.", "Para jugar en el patio."], a: 1, hint: "Vuelve a leer la primera oración del texto.", why: "El texto dice que la función era para celebrar el cuidado de la naturaleza." },
      { t: "mc", q: "¿Qué escribió Luna para el árbol?", o: ["Una noticia.", "Una receta.", "Un poema.", "Una carta de permiso."], a: 2, hint: "Mira el texto que está entre comillas « ». ¿Está escrito en versos?", why: "Luna escribió un poema: un texto en versos que expresa sentimientos." },
      { t: "mc", q: "¿A qué género pertenece el poema de Luna?", o: ["Lírico.", "Dramático.", "Informativo.", "Narrativo teatral."], a: 0, hint: "Los poemas expresan sentimientos con versos. ¿Cómo se llama ese género literario?", why: "Los poemas pertenecen al género lírico porque expresan sentimientos mediante versos." },
      { t: "mc", q: "¿Qué característica del género dramático aparece en la historia?", o: ["Una lista de compras.", "Diálogos entre personajes.", "Instrucciones para sembrar.", "Una noticia del periódico."], a: 1, hint: "En las obras de teatro la historia se cuenta con lo que dicen los personajes.", why: "En el género dramático (teatro) los personajes conversan: son los diálogos, como cuando Tomás dice «¡No me cortes!»." },
      { t: "mc", q: "¿Qué comprendió Luna al hablar con Tomás?", o: ["Que debía cortar el árbol pronto.", "Que los árboles no sirven para nada.", "Que podía buscar madera caída y cuidar el árbol.", "Que los pájaros debían irse."], a: 2, hint: "Lee lo que Luna le respondió a Tomás.", why: "Luna dijo: «Podemos buscar madera caída y dejarte vivir»." },
      { t: "mc", q: "¿Cuál es el mensaje principal de la lectura?", o: ["Es mejor no hacer funciones.", "La naturaleza debe ser cuidada por todos.", "Los poemas siempre son largos.", "Los árboles solo dan sombra."], a: 1, hint: "Lee la última oración del texto.", why: "El texto termina diciendo que cuidar la naturaleza es responsabilidad de todos." },
      { t: "h", text: "Ortografía y signos de puntuación" },
      { t: "mc", q: "¿Cuál palabra está escrita correctamente?", o: ["Naturalesa", "Naturaleza", "Naturalezaa", "Natturaleza"], a: 1, hint: "Lleva una sola «t», se escribe con «z» y termina en una sola «a».", why: "Se escribe na-tu-ra-le-za, con «z»." },
      { t: "mc", q: "¿Cuál palabra lleva **m** antes de **p** o **b**?", o: ["Canbio", "Enpate", "Campo", "Tenprano"], a: 2, hint: "La regla dice: antes de «p» y de «b» siempre se escribe «m». ¿Cuál palabra cumple la regla?", why: "«Campo» está bien escrita. Las otras se escriben cambio, empate y temprano." },
      { t: "mc", q: "¿Cuál oración está escrita correctamente?", o: ["Los niños cuidan el arbol", "Los niños cuidan el árbol.", "los niños cuidan el árbol", "Los niños cuidan el árbol?"], a: 1, hint: "Revisa tres cosas: mayúscula al inicio, tilde en «árbol» y punto al final.", why: "Empieza con mayúscula, «árbol» lleva tilde y termina con punto." },
      { t: "mc", q: "¿Qué signo se usa para expresar emoción o una exclamación?", o: ["La coma ( , )", "El punto ( . )", "Los dos puntos ( : )", "Los signos de exclamación ( ¡! )"], a: 3, hint: "Piensa cómo se escribe «¡Qué alegría!».", why: "Los signos de exclamación ¡! muestran emoción, como en «¡No me cortes!»." },
      { t: "mc", q: "¿Qué signo debe ir al final de esta pregunta: «Cómo te llamas ___»?", o: ["Punto ( . )", "Signos de interrogación ( ¿? )", "Coma ( , )", "Dos puntos ( : )"], a: 1, hint: "Es una pregunta. ¿Qué signos usamos para preguntar?", why: "Las preguntas llevan signos de interrogación, que en español se abren y se cierran: «¿Cómo te llamas?»." }
    ]
  },
  {
    id: "lapaz-p4-mat", subject: "mat", grade: 3, title: "Las fracciones", tag: "Periodo 4 · Institución Educativa La Paz",
    items: [
      { t: "note", text: "Toca las partes de las figuras para colorearlas (vuelve a tocar para borrar). Cuando termines, presiona **Revisar**." },
      { t: "color", q: "Representa gráficamente las siguientes fracciones.", parts: [{ fig: { k: "bar", d: 7 }, n: 3 }, { fig: { k: "pie", d: 2 }, n: 7, wholes: 4 }, { fig: { k: "pie", d: 3 }, n: 8, wholes: 3 }] },
      { t: "color", q: "Pinta las partes de cada figura que representen las fracciones dadas.", parts: [{ fig: { k: "pie", d: 5 }, n: 3 }, { fig: { k: "pie", d: 6 }, n: 5 }, { fig: { k: "diamond" }, n: 3 }, { fig: { k: "pie", d: 3 }, n: 3 }] },
      { t: "table", q: "Escribe la fracción que corresponde. Luego escribe si es propia o impropia.", cols: ["Se lee", "Fracción", "¿Propia o impropia?"],
        rows: [["Cinco décimos", { frac: [5, 10] }, { sel: ["Propia", "Impropia"], a: "Propia" }], ["Dos quinceavos", { frac: [2, 15] }, { sel: ["Propia", "Impropia"], a: "Propia" }], ["Dos tercios", { frac: [2, 3] }, { sel: ["Propia", "Impropia"], a: "Propia" }], ["Tres quintos", { frac: [3, 5] }, { sel: ["Propia", "Impropia"], a: "Propia" }]],
        hint: "Recuerda: es **propia** cuando el número de arriba es menor que el de abajo; si es mayor, es **impropia**." },
      { t: "mc", q: "Ana coloreó algunos cuadros de la figura. ¿Qué fracción representa la parte que coloreó?", fig: { k: "grid", r: 3, c: 8, shaded: 8 }, o: ["[[3/24]]", "[[3/1]]", "[[1/8]]", "[[8/24]]"], a: 3, hint: "Cuenta cuántos cuadros hay en total (denominador) y cuántos están coloreados (numerador).", why: "Hay 24 cuadros en total y 8 están coloreados: [[8/24]]." },
      { t: "mc", q: "¿Cómo se lee la fracción [[5/10]]?", o: ["diez quintos", "cinco décimos", "cinco diez", "diez cinco"], a: 1, hint: "Primero se lee el número de arriba y después el de abajo. Cuando abajo hay un 10 se dice «décimos».", why: "Se lee «cinco décimos»." },
      { t: "mc", q: "¿En cuántas partes dividió la pizza Juan?", fig: { k: "pizza", d: 8 }, o: ["quintos", "sextos", "cuartos", "octavos"], a: 3, hint: "Cuenta los pedazos de la pizza uno por uno.", why: "La pizza tiene 8 pedazos iguales: está dividida en octavos." },
      { t: "table", q: "Completa el siguiente cuadro.", cols: ["Gráfico", "Fracción", "Numerador", "Denominador", "Se lee"],
        rows: [[{ fig: { k: "bar", d: 10, shaded: 4 } }, { frac: [4, 10] }, { num: 4 }, { num: 10 }, { sel: ["dos quintos", "tres octavos", "cuatro décimos", "cinco sextos", "ocho tercios", "diez cuartos"], a: "cuatro décimos" }],
          [{ fig: { k: "pie", d: 8, shaded: 3 } }, { frac: [3, 8] }, { num: 3 }, { num: 8 }, { sel: ["dos quintos", "tres octavos", "cuatro décimos", "cinco sextos", "ocho tercios", "diez cuartos"], a: "tres octavos" }],
          [{ fig: { k: "grid", r: 2, c: 3, shaded: 5 } }, { frac: [5, 6] }, { num: 5 }, { num: 6 }, { sel: ["dos quintos", "tres octavos", "cuatro décimos", "cinco sextos", "ocho tercios", "diez cuartos"], a: "cinco sextos" }],
          [{ fig: { k: "dots", d: 5, shaded: 2 } }, { frac: [2, 5] }, { num: 2 }, { num: 5 }, { sel: ["dos quintos", "tres octavos", "cuatro décimos", "cinco sextos", "ocho tercios", "diez cuartos"], a: "dos quintos" }]],
        hint: "Pista: cuenta todas las partes (denominador) y las coloreadas (numerador)." },
      { t: "mc", q: "Andrea dobló un cuadrado en cuatro partes iguales. Después coloreó 3 de las partes del cuadrado. ¿Qué fracción representa lo que coloreó Andrea?", fig: { k: "grid", r: 2, c: 2, shaded: 3 }, o: ["[[1/3]]", "[[3/1]]", "[[3/4]]", "[[1/4]]"], a: 2, hint: "El cuadrado tiene 4 partes en total (abajo) y 3 coloreadas (arriba).", why: "Coloreó 3 de 4 partes: [[3/4]]." },
      { t: "fracop", q: "Realiza las sumas de las fracciones. Escribe el resultado y colorea la última figura.", rows: [{ k: "pie", d: 8, a: 2, b: 3, op: "+" }, { k: "pie", d: 4, a: 1, b: 1, op: "+" }, { k: "bar", d: 6, a: 4, b: 1, op: "+" }] },
      { t: "fracop", q: "Realiza las restas de las fracciones. Escribe el resultado y colorea la última figura.", rows: [{ k: "squareX", d: 4, a: 2, b: 1, op: "-" }, { k: "hexa", d: 6, a: 3, b: 2, op: "-" }, { k: "square8", d: 8, a: 2, b: 1, op: "-" }] }
    ]
  }
]);
