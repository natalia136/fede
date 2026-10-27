/* Currículo por grado (0 = preescolar, 1..6 = primaria) y materia,
   bancos de preguntas y biblioteca de cursos listos.
   Los temas siguen los contenidos comunes de los marcos oficiales de cada país
   (ver COUNTRIES[x].framework). Cada tema usa un "generador" de actividades. */
(function () {
  const t = (id, title, gen, params, lesson, example, tip) => ({ id, title, gen, params: params || {}, lesson, example, tip });

  const SUBJECTS = {
    mat: { name: "Matemáticas", icon: "🔢", color: "var(--c-mat)", world: "Isla de los Números" },
    ing: { name: "Inglés", icon: "🗽", color: "var(--c-ing)", world: "Puerto Hello" },
    len: { name: "Lengua", icon: "📖", color: "var(--c-len)", world: "Bosque de las Palabras" },
    cie: { name: "Ciencias Naturales", icon: "🔬", color: "var(--c-cie)", world: "Selva Científica" },
    soc: { name: "Ciencias Sociales", icon: "🌎", color: "var(--c-soc)", world: "Valle de los Pueblos" },
    tec: { name: "Tecnología", icon: "🤖", color: "var(--c-tec)", world: "Ciudad Robot" }
  };

  /* ---------------- BANCOS ---------------- */
  // Vocabulario inglés: [emoji, inglés, español]
  const VOCAB = {
    colors: [["🔴", "red", "rojo"], ["🔵", "blue", "azul"], ["🟢", "green", "verde"], ["🟡", "yellow", "amarillo"], ["🟠", "orange", "naranja"], ["🟣", "purple", "morado"], ["⚫", "black", "negro"], ["⚪", "white", "blanco"], ["🟤", "brown", "café / marrón"]],
    animals: [["🐶", "dog", "perro"], ["🐱", "cat", "gato"], ["🐟", "fish", "pez"], ["🐦", "bird", "pájaro"], ["🐴", "horse", "caballo"], ["🐮", "cow", "vaca"], ["🐷", "pig", "cerdo"], ["🦁", "lion", "león"], ["🐘", "elephant", "elefante"], ["🐵", "monkey", "mono"], ["🐰", "rabbit", "conejo"], ["🐸", "frog", "rana"]],
    numbers: [["1️⃣", "one", "uno"], ["2️⃣", "two", "dos"], ["3️⃣", "three", "tres"], ["4️⃣", "four", "cuatro"], ["5️⃣", "five", "cinco"], ["6️⃣", "six", "seis"], ["7️⃣", "seven", "siete"], ["8️⃣", "eight", "ocho"], ["9️⃣", "nine", "nueve"], ["🔟", "ten", "diez"]],
    family: [["👩", "mother", "mamá"], ["👨", "father", "papá"], ["👧", "sister", "hermana"], ["👦", "brother", "hermano"], ["👵", "grandmother", "abuela"], ["👴", "grandfather", "abuelo"], ["👶", "baby", "bebé"], ["👪", "family", "familia"]],
    body: [["👀", "eyes", "ojos"], ["👃", "nose", "nariz"], ["👄", "mouth", "boca"], ["👂", "ear", "oreja"], ["✋", "hand", "mano"], ["🦶", "foot", "pie"], ["🦵", "leg", "pierna"], ["💪", "arm", "brazo"], ["🦷", "tooth", "diente"]],
    school: [["✏️", "pencil", "lápiz"], ["📕", "book", "libro"], ["🎒", "backpack", "mochila"], ["✂️", "scissors", "tijeras"], ["📏", "ruler", "regla"], ["🖍️", "crayon", "crayón"], ["🪑", "chair", "silla"], ["🧑‍🏫", "teacher", "profesor/a"], ["📓", "notebook", "cuaderno"]],
    food: [["🍎", "apple", "manzana"], ["🍌", "banana", "banano / plátano"], ["🍞", "bread", "pan"], ["🥛", "milk", "leche"], ["🧀", "cheese", "queso"], ["🥚", "egg", "huevo"], ["🍕", "pizza", "pizza"], ["🍗", "chicken", "pollo"], ["💧", "water", "agua"], ["🍚", "rice", "arroz"], ["🥕", "carrot", "zanahoria"], ["🍓", "strawberry", "fresa"]],
    clothes: [["👕", "T-shirt", "camiseta"], ["👖", "pants", "pantalón"], ["👗", "dress", "vestido"], ["👟", "shoes", "zapatos"], ["🧢", "cap", "gorra"], ["🧦", "socks", "medias / calcetines"], ["🧥", "jacket", "chaqueta"], ["👓", "glasses", "gafas"]],
    feelings: [["😀", "happy", "feliz"], ["😢", "sad", "triste"], ["😠", "angry", "enojado"], ["😨", "scared", "asustado"], ["😴", "tired", "cansado"], ["😲", "surprised", "sorprendido"], ["🤒", "sick", "enfermo"], ["😋", "hungry", "con hambre"]],
    weather: [["☀️", "sunny", "soleado"], ["🌧️", "rainy", "lluvioso"], ["☁️", "cloudy", "nublado"], ["💨", "windy", "ventoso"], ["❄️", "snowy", "nevado"], ["🔥", "hot", "caluroso"], ["🥶", "cold", "frío"], ["⛈️", "stormy", "tormentoso"]],
    days: [["1️⃣", "Monday", "lunes"], ["2️⃣", "Tuesday", "martes"], ["3️⃣", "Wednesday", "miércoles"], ["4️⃣", "Thursday", "jueves"], ["5️⃣", "Friday", "viernes"], ["6️⃣", "Saturday", "sábado"], ["7️⃣", "Sunday", "domingo"]],
    verbs: [["🏃", "run", "correr"], ["🏊", "swim", "nadar"], ["🍽️", "eat", "comer"], ["😴", "sleep", "dormir"], ["📖", "read", "leer"], ["✍️", "write", "escribir"], ["🎤", "sing", "cantar"], ["💃", "dance", "bailar"], ["🦘", "jump", "saltar"], ["🎨", "paint", "pintar"], ["🧑‍🍳", "cook", "cocinar"], ["🚲", "ride", "montar"]],
    jobs: [["🧑‍⚕️", "doctor", "médico"], ["🧑‍🚒", "firefighter", "bombero"], ["🧑‍🏫", "teacher", "profesor"], ["👮", "police officer", "policía"], ["🧑‍🍳", "chef", "cocinero"], ["🧑‍🌾", "farmer", "granjero"], ["🧑‍✈️", "pilot", "piloto"], ["🧑‍🔬", "scientist", "científico"], ["🧑‍🎨", "artist", "artista"]],
    places: [["🏫", "school", "escuela"], ["🏥", "hospital", "hospital"], ["🏞️", "park", "parque"], ["🏪", "store", "tienda"], ["🏠", "house", "casa"], ["📚", "library", "biblioteca"], ["🏖️", "beach", "playa"], ["🍽️", "restaurant", "restaurante"]]
  };

  // Preguntas: [pregunta, correcta, [incorrectas], emoji?, explicación?]
  const Q = {
    ing_greet: [
      ["¿Cómo se dice 'Hola' en inglés?", "Hello", ["Bye", "Thanks"], "👋"],
      ["¿Cómo se dice 'Adiós'?", "Goodbye", ["Hello", "Please"], "👋"],
      ["¿Qué significa 'Good morning'?", "Buenos días", ["Buenas noches", "Gracias"], "🌅"],
      ["¿Cómo se dice 'Gracias'?", "Thank you", ["Sorry", "Please"], "🙏"],
      ["Responde: 'What's your name?'", "My name is Ana", ["I am fine", "I am six"], "🙋"],
      ["Responde: 'How are you?'", "I'm fine, thank you", ["My name is Leo", "Goodbye"], "😊"],
      ["¿Qué significa 'Please'?", "Por favor", ["Perdón", "Hola"], "🥺"]
    ],
    ing_be: [
      ["I ___ a student.", "am", ["is", "are"], "🧑‍🎓", "Con I siempre usamos am."],
      ["She ___ my sister.", "is", ["am", "are"], "👧", "Con he, she, it usamos is."],
      ["They ___ friends.", "are", ["is", "am"], "👫", "Con we, you, they usamos are."],
      ["The cat ___ black.", "is", ["are", "am"], "🐈‍⬛"],
      ["We ___ happy.", "are", ["is", "am"], "😀"],
      ["It ___ sunny today.", "is", ["are", "am"], "☀️"],
      ["You ___ my best friend.", "are", ["is", "am"], "🤝"]
    ],
    ing_can: [
      ["Fish ___ swim.", "can", ["can't", "is"], "🐟", "Los peces sí pueden nadar."],
      ["A dog ___ fly.", "can't", ["can", "are"], "🐶", "Los perros no pueden volar."],
      ["Birds ___ fly.", "can", ["can't", "am"], "🐦"],
      ["Elephants ___ jump very high.", "can't", ["can", "is"], "🐘"],
      ["I ___ read. I'm a good reader!", "can", ["can't", "are"], "📖"],
      ["¿Qué significa 'I can't swim'?", "No puedo nadar", ["Puedo nadar", "Me gusta nadar"], "🏊"]
    ],
    ing_prep: [
      ["The cat is ___ the box. (dentro)", "in", ["on", "under"], "📦"],
      ["The book is ___ the table. (encima)", "on", ["in", "under"], "📕"],
      ["The ball is ___ the chair. (debajo)", "under", ["on", "in"], "⚽"],
      ["The dog is ___ the house. (al lado)", "next to", ["under", "in"], "🏠"],
      ["The bird is ___ the tree. (en / sobre)", "in", ["under", "behind"], "🌳"],
      ["¿Qué significa 'behind'?", "Detrás", ["Delante", "Encima"], "🙈"]
    ],
    ing_ps: [
      ["She ___ to school every day.", "goes", ["go", "going"], "🏫", "Con he/she/it el verbo lleva -s o -es."],
      ["I ___ breakfast at 7.", "eat", ["eats", "eating"], "🍳"],
      ["He ___ football on Saturdays.", "plays", ["play", "playing"], "⚽"],
      ["They ___ in a big house.", "live", ["lives", "living"], "🏠"],
      ["My dad ___ coffee.", "drinks", ["drink", "drinking"], "☕"],
      ["We ___ TV at night.", "watch", ["watches", "watching"], "📺"],
      ["Does she like pizza? Yes, she ___.", "does", ["do", "is"], "🍕"]
    ],
    ing_past: [
      ["Yesterday I ___ football.", "played", ["play", "plays"], "⚽", "Los verbos regulares en pasado terminan en -ed."],
      ["Last night she ___ a movie.", "watched", ["watch", "watches"], "🎬"],
      ["We ___ to the beach last summer.", "went", ["go", "goed"], "🏖️", "Go es irregular: go → went."],
      ["He ___ a pizza yesterday.", "ate", ["eat", "eated"], "🍕", "Eat es irregular: eat → ate."],
      ["I ___ my homework.", "did", ["do", "doed"], "📝"],
      ["They ___ very happy.", "were", ["was", "are"], "😀"],
      ["She ___ tired after school.", "was", ["were", "is"], "😴"]
    ],
    ing_comp: [
      ["An elephant is ___ than a mouse.", "bigger", ["big", "biggest"], "🐘"],
      ["A cheetah is the ___ animal.", "fastest", ["faster", "fast"], "🐆"],
      ["Summer is ___ than winter.", "hotter", ["hot", "hottest"], "☀️"],
      ["This book is ___ than that one.", "more interesting", ["interestinger", "most interesting"], "📚"],
      ["Mount Everest is the ___ mountain.", "highest", ["higher", "high"], "🏔️"],
      ["¿Qué significa 'smaller than'?", "Más pequeño que", ["El más pequeño", "Tan pequeño como"], "🐭"]
    ],
    ing_opp: [
      ["The opposite of 'big' is…", "small", ["tall", "long"], "🐘"],
      ["The opposite of 'hot' is…", "cold", ["warm", "wet"], "🔥"],
      ["The opposite of 'happy' is…", "sad", ["angry", "funny"], "😀"],
      ["The opposite of 'fast' is…", "slow", ["quick", "short"], "🐢"],
      ["The opposite of 'old' is…", "new", ["big", "nice"], "📦"],
      ["The opposite of 'day' is…", "night", ["sun", "morning"], "🌙"],
      ["The opposite of 'up' is…", "down", ["in", "on"], "⬆️"]
    ],
    // ---- Lengua
    len_rhyme: [
      ["¿Qué palabra rima con GATO?", "pato", ["perro", "sol"], "🐱"],
      ["¿Qué palabra rima con LUNA?", "cuna", ["sol", "mesa"], "🌙"],
      ["¿Qué palabra rima con RATÓN?", "botón", ["casa", "flor"], "🐭"],
      ["¿Qué palabra rima con FLOR?", "sol", ["árbol", "pato"], "🌸"],
      ["¿Qué palabra rima con MESA?", "fresa", ["silla", "taza"], "🍓"],
      ["¿Qué palabra rima con CAMIÓN?", "león", ["carro", "mapa"], "🚚"]
    ],
    len_gen: [
      ["¿Cuál es el femenino de 'niño'?", "niña", ["niños", "niñito"], "👧"],
      ["¿Cuál es el plural de 'flor'?", "flores", ["flors", "flor"], "💐"],
      ["¿Cuál es el plural de 'lápiz'?", "lápices", ["lápizs", "lápiz"], "✏️", "La z cambia a c: lápiz → lápices."],
      ["¿Cuál es el femenino de 'león'?", "leona", ["leones", "leoncito"], "🦁"],
      ["¿Qué palabra está en plural?", "casas", ["casa", "casita"], "🏠"],
      ["¿Cuál es el masculino de 'gallina'?", "gallo", ["gallino", "pollito"], "🐓"],
      ["¿Qué artículo va con 'mesa'?", "la", ["el", "los"], "🪑"]
    ],
    len_caps: [
      ["¿Cuál está bien escrito?", "María vive en Lima.", ["maría vive en lima.", "María vive en lima."], "✍️", "Los nombres de personas y lugares llevan mayúscula."],
      ["¿Cuándo usamos mayúscula?", "Al empezar una oración", ["En la mitad de una palabra", "Al final de la oración"], "🔠"],
      ["¿Cuál necesita mayúscula?", "pedro", ["perro", "mesa"], "🧒"],
      ["¿Cuál está bien escrito?", "Mi perro se llama Toby.", ["mi perro se llama toby.", "Mi Perro Se Llama Toby."], "🐶"],
      ["¿Qué ponemos al final de una oración?", "Un punto (.)", ["Una coma (,)", "Nada"], "⏺️"]
    ],
    len_punct: [
      ["¿Qué signos usamos para preguntar?", "¿ ?", ["¡ !", "( )"], "❓"],
      ["¿Qué signos usamos para exclamar?", "¡ !", ["¿ ?", ". ."], "❗"],
      ["¿Para qué sirve la coma en 'Compré pan, leche y huevos'?", "Para separar elementos de una lista", ["Para terminar", "Para preguntar"], "🛒"],
      ["¿Cuál está bien escrito?", "¿Cómo te llamas?", ["Cómo te llamas?", "¿Cómo te llamas."], "🙋"],
      ["¿Cuál está bien escrito?", "¡Qué bonito día!", ["Qué bonito día!", "¡Qué bonito día?"], "☀️"],
      ["¿Qué signo indica una pausa corta?", "La coma", ["El punto final", "El signo de pregunta"], "⏸️"]
    ],
    len_text: [
      ["Un texto que cuenta una historia con personajes es…", "Narrativo", ["Instructivo", "Informativo"], "📖"],
      ["Una receta de cocina es un texto…", "Instructivo", ["Narrativo", "Poético"], "🧑‍🍳"],
      ["Una noticia del periódico es un texto…", "Informativo", ["Poético", "Instructivo"], "📰"],
      ["Un texto con versos y rimas es…", "Un poema", ["Una receta", "Una carta"], "🎶"],
      ["¿Qué partes tiene un cuento?", "Inicio, nudo y desenlace", ["Título y precio", "Ingredientes y pasos"], "📚"],
      ["Una carta empieza normalmente con…", "Un saludo", ["El final", "Una receta"], "✉️"]
    ],
    len_subj: [
      ["En 'El perro ladra fuerte', ¿cuál es el sujeto?", "El perro", ["ladra fuerte", "fuerte"], "🐶", "El sujeto es de quién se habla."],
      ["En 'Mi mamá cocina arroz', ¿cuál es el predicado?", "cocina arroz", ["Mi mamá", "Mi"], "🍚", "El predicado es lo que se dice del sujeto."],
      ["En 'Los niños juegan en el parque', ¿cuál es el sujeto?", "Los niños", ["juegan", "en el parque"], "🧒"],
      ["¿Cuál es el núcleo del predicado en 'Ana canta una canción'?", "canta", ["Ana", "canción"], "🎤", "El núcleo del predicado es el verbo."],
      ["En 'Llueve mucho', el sujeto es…", "No tiene sujeto expreso (impersonal)", ["mucho", "Llueve"], "🌧️"]
    ],
    len_tense: [
      ["'Ayer comí pizza'. El verbo está en…", "Pasado", ["Presente", "Futuro"], "🍕"],
      ["'Mañana iré al cine'. El verbo está en…", "Futuro", ["Pasado", "Presente"], "🎬"],
      ["'Ahora leo un libro'. El verbo está en…", "Presente", ["Pasado", "Futuro"], "📖"],
      ["¿Cuál es el infinitivo de 'corrimos'?", "correr", ["corriendo", "corrido"], "🏃"],
      ["¿Cuál está en futuro?", "jugaremos", ["jugamos", "jugábamos"], "⚽"],
      ["¿Qué terminaciones tienen los infinitivos?", "-ar, -er, -ir", ["-ado, -ido", "-ando, -iendo"], "🔤"]
    ],
    len_fig: [
      ["'Sus dientes son perlas' es una…", "Metáfora", ["Comparación", "Onomatopeya"], "🦪"],
      ["'Rápido como un rayo' es una…", "Comparación (símil)", ["Metáfora", "Hipérbole"], "⚡"],
      ["'¡Te lo dije un millón de veces!' es una…", "Hipérbole (exageración)", ["Metáfora", "Personificación"], "🔁"],
      ["'El sol sonríe' es una…", "Personificación", ["Comparación", "Rima"], "🌞"],
      ["'¡Pum! ¡Crash!' son…", "Onomatopeyas", ["Metáforas", "Sinónimos"], "💥"]
    ],
    len_hiato: [
      ["¿Qué palabra tiene diptongo?", "ciudad", ["país", "leer"], "🏙️", "Diptongo: dos vocales en la misma sílaba (ciu-dad)."],
      ["¿Qué palabra tiene hiato?", "día", ["cielo", "puerta"], "📅", "Hiato: dos vocales en sílabas distintas (dí-a)."],
      ["¿Cómo se separa 'poeta'?", "po-e-ta", ["poe-ta", "p-oeta"], "✒️"],
      ["¿Cómo se separa 'nuevo'?", "nue-vo", ["nu-e-vo", "n-uevo"], "🆕"],
      ["¿Qué palabra tiene diptongo?", "aire", ["maíz", "baúl"], "💨"]
    ],
    len_gj: [
      ["¿Cuál está bien escrita?", "jirafa", ["girafa", "hirafa"], "🦒"],
      ["¿Cuál está bien escrita?", "gente", ["jente", "hente"], "👥"],
      ["¿Cuál está bien escrita?", "huevo", ["uevo", "güevo"], "🥚", "Las palabras que empiezan por hue- llevan h."],
      ["¿Cuál está bien escrita?", "hormiga", ["ormiga", "jormiga"], "🐜"],
      ["¿Cuál está bien escrita?", "mensaje", ["mensage", "menzaje"], "✉️", "Terminan en -aje con j: mensaje, viaje."],
      ["¿Cuál está bien escrita?", "biología", ["biolojía", "viología"], "🔬", "-logía se escribe con g."]
    ],
    // ---- Ciencias
    cie_senses: [
      ["¿Con qué sentido vemos los colores?", "La vista", ["El olfato", "El tacto"], "👀"],
      ["¿Con qué sentido olemos las flores?", "El olfato", ["El oído", "El gusto"], "👃"],
      ["¿Con qué sentido escuchamos música?", "El oído", ["La vista", "El tacto"], "👂"],
      ["¿Con qué sentido sentimos si algo está caliente?", "El tacto", ["El oído", "La vista"], "✋"],
      ["¿Con qué sentido sabemos si algo es dulce?", "El gusto", ["El olfato", "El oído"], "👅"],
      ["¿Cuántos sentidos tenemos?", "Cinco", ["Tres", "Diez"], "🖐️"]
    ],
    cie_babies: [
      ["¿Cómo se llama la cría de la vaca?", "Ternero", ["Potro", "Cachorro"], "🐄"],
      ["¿Cómo se llama la cría del caballo?", "Potro", ["Pollito", "Gatito"], "🐴"],
      ["¿Cómo se llama la cría de la gallina?", "Pollito", ["Cordero", "Renacuajo"], "🐔"],
      ["¿Cómo se llama la cría de la rana?", "Renacuajo", ["Pollito", "Cachorro"], "🐸"],
      ["¿Dónde vive el pez?", "En el agua", ["En un árbol", "En el desierto"], "🐟"],
      ["¿Dónde vive la abeja?", "En una colmena", ["En un nido", "En una cueva"], "🐝"]
    ],
    cie_plant: [
      ["¿Qué parte de la planta absorbe el agua del suelo?", "La raíz", ["La flor", "La hoja"], "🌱"],
      ["¿Qué parte de la planta sostiene las hojas?", "El tallo", ["La raíz", "La semilla"], "🌿"],
      ["¿Dónde hace la planta su alimento con la luz del sol?", "En las hojas", ["En la raíz", "En la semilla"], "🍃"],
      ["¿De qué parte nacen los frutos?", "De la flor", ["De la raíz", "Del tallo"], "🌸"],
      ["¿Qué necesita una planta para vivir?", "Agua, luz, aire y tierra", ["Solo oscuridad", "Solo dulces"], "☀️"],
      ["¿Qué hay dentro de un fruto?", "Semillas", ["Raíces", "Piedras"], "🍉"]
    ],
    cie_body: [
      ["¿Qué órgano bombea la sangre?", "El corazón", ["El estómago", "El pulmón"], "❤️"],
      ["¿Con qué órgano respiramos?", "Los pulmones", ["El corazón", "Los riñones"], "🫁"],
      ["¿Qué órgano controla todo el cuerpo?", "El cerebro", ["El hígado", "El estómago"], "🧠"],
      ["¿Qué nos sostiene y da forma al cuerpo?", "El esqueleto (huesos)", ["La piel", "La sangre"], "🦴"],
      ["¿Qué nos ayuda a movernos junto con los huesos?", "Los músculos", ["El pelo", "Las uñas"], "💪"],
      ["¿Dónde se digiere la comida?", "En el estómago y los intestinos", ["En los pulmones", "En el cerebro"], "🍽️"]
    ],
    cie_daynight: [
      ["¿Por qué hay día y noche?", "Porque la Tierra gira sobre sí misma", ["Porque el Sol se apaga", "Porque la Luna tapa al Sol"], "🌍"],
      ["¿Cuánto tarda la Tierra en dar una vuelta sobre sí misma?", "Un día (24 horas)", ["Un año", "Una semana"], "⏰"],
      ["¿Qué vemos en el cielo de noche?", "La Luna y las estrellas", ["El arcoíris", "El Sol"], "🌙"],
      ["¿Cuánto tarda la Tierra en dar la vuelta al Sol?", "Un año", ["Un día", "Un mes"], "☀️"],
      ["¿Qué es el Sol?", "Una estrella", ["Un planeta", "Una luna"], "⭐"]
    ],
    cie_life: [
      ["¿Cuál es el orden del ciclo de vida?", "Nacer, crecer, reproducirse y morir", ["Morir, nacer, crecer", "Crecer, nacer, morir"], "🔄"],
      ["¿Qué sale del huevo de una mariposa?", "Una oruga", ["Una mariposa", "Un pollito"], "🐛"],
      ["¿En qué se convierte una oruga?", "Primero en crisálida y luego en mariposa", ["En un pájaro", "En una rana"], "🦋"],
      ["¿En qué se convierte un renacuajo?", "En una rana", ["En un pez", "En una tortuga"], "🐸"],
      ["¿De dónde nace una planta?", "De una semilla", ["De una piedra", "De una hoja seca"], "🌱"]
    ],
    cie_habitat: [
      ["¿Dónde vive el camello?", "En el desierto", ["En el polo", "En el mar"], "🐪"],
      ["¿Dónde vive el pingüino?", "En zonas muy frías", ["En la selva", "En el desierto"], "🐧"],
      ["¿Dónde vive el mono?", "En la selva", ["En el océano", "En el polo"], "🐒"],
      ["¿Dónde vive la ballena?", "En el océano", ["En un río pequeño", "En la montaña"], "🐋"],
      ["¿Qué es un hábitat?", "El lugar donde vive un ser vivo", ["Un tipo de comida", "Un animal"], "🏡"],
      ["¿Dónde vive el oso polar?", "En el Ártico", ["En la selva", "En el desierto"], "🐻‍❄️"]
    ],
    cie_chain: [
      ["En una cadena alimenticia, ¿quién va primero?", "Las plantas (productores)", ["Los leones", "Los hongos"], "🌿"],
      ["El conejo come pasto. El conejo es…", "Consumidor primario (herbívoro)", ["Productor", "Descomponedor"], "🐰"],
      ["El zorro come conejos. El zorro es…", "Consumidor secundario (carnívoro)", ["Productor", "Herbívoro"], "🦊"],
      ["¿Quiénes descomponen los restos de seres vivos?", "Hongos y bacterias", ["Las vacas", "Los pájaros"], "🍄"],
      ["¿De dónde obtienen la energía las plantas?", "Del Sol", ["De la carne", "De la Luna"], "☀️"],
      ["Pasto → saltamontes → rana → ¿?", "Serpiente", ["Lechuga", "Piedra"], "🐍"]
    ],
    cie_solar: [
      ["¿Qué planeta es el más cercano al Sol?", "Mercurio", ["Tierra", "Neptuno"], "🪐"],
      ["¿Cuál es el planeta más grande?", "Júpiter", ["Marte", "Venus"], "🟠"],
      ["¿Qué planeta es llamado 'el planeta rojo'?", "Marte", ["Saturno", "Urano"], "🔴"],
      ["¿Qué planeta tiene anillos muy visibles?", "Saturno", ["Mercurio", "Tierra"], "🪐"],
      ["¿Cuántos planetas tiene el sistema solar?", "Ocho", ["Nueve", "Cinco"], "🔭"],
      ["¿Qué es la Luna?", "El satélite natural de la Tierra", ["Una estrella", "Un planeta"], "🌕"],
      ["¿En qué lugar está la Tierra desde el Sol?", "Tercero", ["Primero", "Quinto"], "🌍"]
    ],
    cie_water: [
      ["Cuando el agua se calienta y sube al cielo se llama…", "Evaporación", ["Precipitación", "Congelación"], "♨️"],
      ["Cuando el vapor forma nubes se llama…", "Condensación", ["Evaporación", "Infiltración"], "☁️"],
      ["Cuando cae la lluvia se llama…", "Precipitación", ["Condensación", "Evaporación"], "🌧️"],
      ["¿Qué hace que el agua se evapore?", "El calor del Sol", ["El frío", "La Luna"], "☀️"],
      ["¿Por qué debemos cuidar el agua?", "Porque es esencial para la vida", ["Porque es de colores", "No hay que cuidarla"], "💧"]
    ],
    cie_systems: [
      ["¿Qué sistema transporta la sangre?", "Sistema circulatorio", ["Sistema digestivo", "Sistema óseo"], "❤️"],
      ["¿Qué sistema toma el oxígeno del aire?", "Sistema respiratorio", ["Sistema nervioso", "Sistema digestivo"], "🫁"],
      ["¿Qué sistema transforma los alimentos?", "Sistema digestivo", ["Sistema respiratorio", "Sistema muscular"], "🍎"],
      ["¿Qué sistema envía mensajes por el cuerpo?", "Sistema nervioso", ["Sistema circulatorio", "Sistema óseo"], "🧠"],
      ["¿Qué sistema elimina la orina?", "Sistema excretor (urinario)", ["Sistema nervioso", "Sistema respiratorio"], "🚽"],
      ["¿Qué órgano filtra la sangre y forma la orina?", "Los riñones", ["El corazón", "Los pulmones"], "🫘"]
    ],
    cie_eco: [
      ["¿Qué es un ecosistema?", "Seres vivos y el lugar donde viven, relacionados", ["Solo las plantas", "Un tipo de roca"], "🏞️"],
      ["¿Qué es un factor abiótico?", "Algo sin vida como el agua o la luz", ["Un animal", "Una planta"], "💧"],
      ["¿Qué es un factor biótico?", "Un ser vivo", ["La temperatura", "El suelo"], "🐞"],
      ["¿Qué daña a los ecosistemas?", "La contaminación y la tala", ["Reciclar", "Plantar árboles"], "🏭"],
      ["Un arrecife de coral es un ecosistema…", "Acuático", ["Terrestre", "Aéreo"], "🪸"]
    ],
    cie_cell: [
      ["¿Cuál es la unidad más pequeña de los seres vivos?", "La célula", ["El átomo", "El órgano"], "🦠"],
      ["¿Qué parte de la célula guarda la información genética?", "El núcleo", ["La membrana", "El citoplasma"], "🧬"],
      ["¿Qué parte rodea y protege la célula?", "La membrana celular", ["El núcleo", "El cloroplasto"], "🫧"],
      ["¿Qué tienen las células vegetales que no tienen las animales?", "Pared celular y cloroplastos", ["Núcleo", "Membrana"], "🌿"],
      ["¿Con qué instrumento observamos células?", "El microscopio", ["El telescopio", "La lupa de sol"], "🔬"],
      ["Un conjunto de células iguales forma un…", "Tejido", ["Planeta", "Átomo"], "🧩"]
    ],
    cie_force: [
      ["¿Qué fuerza hace que las cosas caigan al suelo?", "La gravedad", ["El magnetismo", "El viento"], "🍎"],
      ["¿Qué fuerza frena una pelota que rueda?", "El rozamiento (fricción)", ["La gravedad lunar", "La electricidad"], "⚽"],
      ["Un imán atrae objetos de…", "Hierro", ["Madera", "Plástico"], "🧲"],
      ["Empujar o halar algo es aplicar una…", "Fuerza", ["Masa", "Temperatura"], "💪"],
      ["La velocidad nos dice…", "Qué tan rápido se mueve algo", ["Cuánto pesa algo", "De qué color es algo"], "🏎️"]
    ],
    cie_kingdom: [
      ["¿A qué reino pertenece el hongo?", "Fungi", ["Plantae", "Animalia"], "🍄"],
      ["¿A qué reino pertenece el perro?", "Animalia", ["Fungi", "Monera"], "🐕"],
      ["Las bacterias pertenecen al reino…", "Monera", ["Plantae", "Animalia"], "🦠"],
      ["¿Qué seres hacen fotosíntesis?", "Las plantas", ["Los hongos", "Los animales"], "🌿"],
      ["Animales con columna vertebral son…", "Vertebrados", ["Invertebrados", "Hongos"], "🐟"],
      ["La araña es un animal…", "Invertebrado", ["Vertebrado", "Mamífero"], "🕷️"]
    ],
    cie_earth: [
      ["¿Cuál es la capa externa de la Tierra?", "La corteza", ["El núcleo", "El manto"], "🌍"],
      ["¿Qué capa está en el centro de la Tierra?", "El núcleo", ["La corteza", "La atmósfera"], "🔥"],
      ["¿Qué es la atmósfera?", "La capa de aire que rodea la Tierra", ["Un océano", "Una montaña"], "🌬️"],
      ["¿Qué es la hidrosfera?", "Toda el agua del planeta", ["Las rocas", "El aire"], "🌊"],
      ["¿Qué sale de un volcán?", "Lava, gases y cenizas", ["Agua dulce", "Nieve"], "🌋"]
    ],
    cie_matter: [
      ["Todo lo que tiene masa y ocupa espacio es…", "Materia", ["Energía", "Luz"], "🧱"],
      ["¿Qué pasa con el hielo al calentarse?", "Se derrite (fusión)", ["Se evapora directo", "Se vuelve más duro"], "🧊"],
      ["Mezcla donde se ven las partes: agua con piedras es…", "Heterogénea", ["Homogénea", "Pura"], "🪨"],
      ["Agua con sal disuelta es una mezcla…", "Homogénea", ["Heterogénea", "Sólida"], "🧂"],
      ["¿Con qué separamos arena del agua?", "Con un filtro", ["Con un imán", "Con una cuchara"], "⏳"],
      ["Las partículas muy pequeñas que forman la materia son…", "Átomos", ["Planetas", "Células gigantes"], "⚛️"]
    ],
    cie_repro: [
      ["¿Qué insectos ayudan a polinizar las flores?", "Las abejas", ["Las cucarachas", "Las hormigas soldado"], "🐝"],
      ["¿Qué es la polinización?", "Llevar polen de una flor a otra", ["Regar la planta", "Cortar las hojas"], "🌼"],
      ["Una papa que brota es reproducción…", "Asexual", ["Sexual", "Por semillas"], "🥔"],
      ["¿Cómo se dispersan algunas semillas?", "Con el viento, el agua o los animales", ["Solo caminando", "No se dispersan"], "🌬️"],
      ["¿Qué es la germinación?", "Cuando la semilla empieza a crecer", ["Cuando la flor muere", "Cuando cae la hoja"], "🌱"]
    ],
    // ---- Sociales
    soc_family: [
      ["¿Quién es la mamá de tu mamá?", "Tu abuela", ["Tu tía", "Tu prima"], "👵"],
      ["¿Quién es el hermano de tu papá?", "Tu tío", ["Tu abuelo", "Tu primo"], "👨"],
      ["¿Qué es una familia?", "Personas que se quieren y se cuidan", ["Un grupo de juguetes", "Una escuela"], "👪"],
      ["¿Cómo ayudamos en casa?", "Ordenando nuestros juguetes", ["Gritando", "Rompiendo cosas"], "🧹"],
      ["El hijo de tu tío es tu…", "Primo", ["Hermano", "Abuelo"], "🧒"]
    ],
    soc_jobs: [
      ["¿Quién cuida nuestra salud?", "El médico", ["El panadero", "El piloto"], "🧑‍⚕️"],
      ["¿Quién apaga incendios?", "El bombero", ["El cartero", "El pintor"], "🧑‍🚒"],
      ["¿Quién siembra los alimentos?", "El agricultor", ["El policía", "El dentista"], "🧑‍🌾"],
      ["¿Quién nos enseña en la escuela?", "El profesor", ["El chef", "El mecánico"], "🧑‍🏫"],
      ["¿Quién arregla los carros?", "El mecánico", ["El médico", "El maestro"], "🔧"],
      ["¿Quién hace el pan?", "El panadero", ["El bombero", "El piloto"], "🥖"]
    ],
    soc_community: [
      ["¿Qué lugar de la comunidad presta libros?", "La biblioteca", ["El hospital", "La estación de bomberos"], "📚"],
      ["¿A dónde vamos cuando estamos enfermos?", "Al hospital o centro de salud", ["Al parque", "Al supermercado"], "🏥"],
      ["¿Qué es una norma de convivencia?", "Un acuerdo para vivir en armonía", ["Un juego", "Una comida"], "🤝"],
      ["¿Qué debemos hacer con la basura?", "Ponerla en la caneca / papelera", ["Tirarla a la calle", "Dejarla en el parque"], "🗑️"],
      ["¿Por dónde cruzamos la calle?", "Por la cebra / paso peatonal", ["Por cualquier lado", "Corriendo entre carros"], "🚸"],
      ["El semáforo en rojo para los carros significa…", "Detenerse", ["Avanzar rápido", "Pitar"], "🚦"]
    ],
    soc_cardinal: [
      ["¿Por dónde sale el Sol?", "Por el oriente (este)", ["Por el occidente (oeste)", "Por el sur"], "🌅"],
      ["¿Por dónde se oculta el Sol?", "Por el occidente (oeste)", ["Por el oriente (este)", "Por el norte"], "🌇"],
      ["¿Cuántos puntos cardinales hay?", "Cuatro", ["Dos", "Seis"], "🧭"],
      ["¿Qué instrumento señala el norte?", "La brújula", ["El reloj", "El termómetro"], "🧭"],
      ["Lo contrario del norte es…", "El sur", ["El este", "El oeste"], "⬇️"],
      ["En un mapa, el norte suele estar…", "Arriba", ["Abajo", "A la izquierda"], "🗺️"]
    ],
    soc_rights: [
      ["Ir a la escuela es un…", "Derecho de los niños", ["Castigo", "Juego"], "🏫"],
      ["Respetar a los demás es un…", "Deber", ["Derecho", "Premio"], "🤝"],
      ["Tener un nombre y nacionalidad es un…", "Derecho", ["Deber", "Regalo"], "🪪"],
      ["Cuidar los útiles escolares es un…", "Deber", ["Derecho", "Juego"], "✏️"],
      ["Jugar y descansar es un…", "Derecho", ["Deber", "Castigo"], "🎈"],
      ["¿Qué organismo internacional protege a la niñez?", "UNICEF", ["La FIFA", "La NASA"], "🌐"]
    ],
    soc_maps: [
      ["¿Qué es un plano?", "Un dibujo de un lugar visto desde arriba", ["Una foto de lado", "Un cuento"], "📐"],
      ["¿Para qué sirve la leyenda o convenciones de un mapa?", "Para explicar qué significa cada símbolo", ["Para decorar", "Para contar un cuento"], "🗺️"],
      ["¿Qué es un globo terráqueo?", "Un modelo redondo de la Tierra", ["Un balón", "Un planeta de verdad"], "🌐"],
      ["La línea imaginaria que divide la Tierra en norte y sur es…", "El ecuador", ["El meridiano de Greenwich", "El trópico"], "🌍"],
      ["¿Qué representan las zonas azules en un mapa?", "Agua: mares, ríos y lagos", ["Montañas", "Ciudades"], "💧"]
    ],
    soc_relief: [
      ["Una gran elevación de terreno es una…", "Montaña", ["Llanura", "Bahía"], "⛰️"],
      ["Un terreno plano y extenso es una…", "Llanura", ["Cordillera", "Volcán"], "🌾"],
      ["Una porción de tierra rodeada de agua es una…", "Isla", ["Península", "Montaña"], "🏝️"],
      ["Tierra rodeada de agua por casi todos los lados es una…", "Península", ["Isla", "Meseta"], "🗺️"],
      ["Una cadena de montañas se llama…", "Cordillera", ["Valle", "Golfo"], "🏔️"],
      ["Terreno bajo entre montañas es un…", "Valle", ["Pico", "Cabo"], "🏞️"]
    ],
    soc_natives: [
      ["¿Qué pueblo construyó Machu Picchu?", "Los incas", ["Los mayas", "Los aztecas"], "🏛️"],
      ["¿Qué pueblo creó un calendario muy preciso en Centroamérica?", "Los mayas", ["Los incas", "Los vikingos"], "📅"],
      ["¿Qué ciudad era la capital de los aztecas/mexicas?", "Tenochtitlan", ["Cusco", "Bogotá"], "🏙️"],
      ["¿Qué es un pueblo originario?", "Un pueblo que vivía en América antes de 1492", ["Un pueblo nuevo", "Un barrio moderno"], "🪶"],
      ["¿Qué alimento cultivaban muchos pueblos originarios?", "El maíz", ["El trigo europeo", "El café africano"], "🌽"],
      ["¿Qué hacían los incas con los quipus?", "Registrar números con nudos", ["Pescar", "Cocinar"], "🧶"]
    ],
    soc_world: [
      ["¿Cuántos continentes hay?", "Cinco (o siete según el modelo)", ["Dos", "Doce"], "🌍"],
      ["¿Cuál es el océano más grande?", "El Pacífico", ["El Atlántico", "El Índico"], "🌊"],
      ["¿En qué continente está Egipto?", "África", ["Asia", "Europa"], "🐫"],
      ["¿En qué continente está Japón?", "Asia", ["Europa", "Oceanía"], "🗾"],
      ["¿En qué continente está Australia?", "Oceanía", ["América", "África"], "🦘"],
      ["¿Qué continente está cubierto de hielo?", "La Antártida", ["Europa", "Asia"], "🧊"]
    ],
    soc_gov: [
      ["¿Qué es la democracia?", "El pueblo elige a sus gobernantes", ["Un rey decide todo", "No hay leyes"], "🗳️"],
      ["¿Qué es la Constitución?", "La ley más importante de un país", ["Un cuento", "Un himno"], "📜"],
      ["¿Qué poder hace las leyes?", "El poder legislativo", ["El poder judicial", "El poder ejecutivo"], "🏛️"],
      ["¿Qué poder aplica justicia?", "El poder judicial", ["El poder legislativo", "El poder ejecutivo"], "⚖️"],
      ["¿Qué poder gobierna y ejecuta las leyes?", "El poder ejecutivo", ["El poder judicial", "Ninguno"], "🏢"],
      ["¿Para qué sirven los impuestos?", "Para pagar escuelas, hospitales y vías", ["Para nada", "Para comprar juguetes"], "💰"]
    ],
    soc_ancient: [
      ["¿Qué civilización construyó las pirámides de Guiza?", "Los egipcios", ["Los romanos", "Los chinos"], "🔺"],
      ["¿Qué civilización inventó los Juegos Olímpicos?", "Los griegos", ["Los egipcios", "Los mayas"], "🏅"],
      ["¿Qué civilización construyó el Coliseo?", "Los romanos", ["Los griegos", "Los incas"], "🏟️"],
      ["¿Qué escritura usaban los egipcios?", "Jeroglíficos", ["Letras latinas", "Quipus"], "𓂀"],
      ["¿Qué río fue clave para Egipto?", "El Nilo", ["El Amazonas", "El Danubio"], "🌊"],
      ["¿Qué gran muralla se construyó en Asia?", "La Gran Muralla China", ["El Muro de Berlín", "La muralla de Ávila"], "🧱"]
    ],
    soc_latam: [
      ["¿Cuál es el río más caudaloso del mundo?", "El Amazonas", ["El Nilo", "El Misisipi"], "🌊"],
      ["¿Qué cordillera recorre Sudamérica?", "Los Andes", ["Los Alpes", "Los Pirineos"], "⛰️"],
      ["¿Qué canal une el Atlántico y el Pacífico?", "El canal de Panamá", ["El canal de Suez", "El canal de la Mancha"], "🚢"],
      ["¿Qué idioma se habla en Brasil?", "Portugués", ["Español", "Francés"], "🇧🇷"],
      ["¿Cuál es el desierto más árido del mundo?", "Atacama", ["Sahara", "Gobi"], "🏜️"],
      ["¿Qué lago navegable está entre Perú y Bolivia?", "Titicaca", ["Maracaibo", "Nicaragua"], "⛵"]
    ],
    // ---- Tecnología
    tec_tools: [
      ["¿Qué herramienta usamos para clavar un clavo?", "El martillo", ["La tijera", "El serrucho"], "🔨"],
      ["¿Qué usamos para cortar papel?", "Las tijeras", ["El martillo", "La escoba"], "✂️"],
      ["¿Qué usamos para medir una mesa?", "Un metro o regla", ["Una cuchara", "Un lápiz"], "📏"],
      ["¿Qué usamos para apretar un tornillo?", "Un destornillador", ["Un peine", "Un martillo"], "🪛"],
      ["¿Qué usamos para barrer?", "La escoba", ["La tijera", "La regla"], "🧹"]
    ],
    tec_pc: [
      ["¿Qué parte del computador muestra las imágenes?", "La pantalla (monitor)", ["El teclado", "El ratón"], "🖥️"],
      ["¿Con qué escribimos letras en el computador?", "El teclado", ["El parlante", "La pantalla"], "⌨️"],
      ["¿Con qué movemos la flecha en la pantalla?", "El ratón (mouse)", ["El micrófono", "La impresora"], "🖱️"],
      ["¿Qué aparato pone en papel lo que hay en el computador?", "La impresora", ["El teclado", "La cámara"], "🖨️"],
      ["¿Por dónde sale el sonido del computador?", "Por los parlantes / altavoces", ["Por el teclado", "Por el ratón"], "🔊"],
      ["¿Qué es el 'cerebro' del computador?", "El procesador (CPU)", ["El ratón", "La pantalla"], "🧠"]
    ],
    tec_inventions: [
      ["¿Qué invento nos permite ver de noche en casa?", "La bombilla", ["La rueda", "El papel"], "💡"],
      ["¿Qué invento muy antiguo ayudó a transportar cosas?", "La rueda", ["El celular", "El televisor"], "🛞"],
      ["¿Qué invento permite hablar a distancia?", "El teléfono", ["La brújula", "El reloj"], "📞"],
      ["¿Qué invento permitió imprimir muchos libros?", "La imprenta", ["El avión", "La radio"], "📚"],
      ["¿Qué invento nos permite volar?", "El avión", ["El barco", "La bicicleta"], "✈️"],
      ["¿Quién inventó la bombilla práctica?", "Thomas Edison", ["Albert Einstein", "Leonardo da Vinci"], "💡"]
    ],
    tec_simple: [
      ["Un sube y baja es una…", "Palanca", ["Polea", "Rueda"], "⚖️"],
      ["¿Qué máquina simple usamos para subir agua de un pozo?", "La polea", ["La cuña", "El tornillo"], "🪣"],
      ["Una rampa es un…", "Plano inclinado", ["Polea", "Engranaje"], "📐"],
      ["Un hacha que parte madera funciona como una…", "Cuña", ["Polea", "Rueda"], "🪓"],
      ["¿Para qué sirven las máquinas simples?", "Para hacer el trabajo más fácil", ["Para hacer ruido", "Para nada"], "⚙️"],
      ["Unas tijeras combinan palancas y…", "Cuñas (filos)", ["Poleas", "Ruedas"], "✂️"]
    ],
    tec_energy: [
      ["¿Qué energía viene del Sol?", "Energía solar", ["Energía eólica", "Energía nuclear"], "☀️"],
      ["¿Qué energía viene del viento?", "Energía eólica", ["Energía solar", "Energía química"], "🌬️"],
      ["¿Qué energía viene del agua de los ríos?", "Energía hidráulica", ["Energía eólica", "Energía solar"], "💧"],
      ["¿Qué aparato transforma electricidad en luz?", "La bombilla", ["La licuadora", "El ventilador"], "💡"],
      ["¿Cómo ahorramos energía?", "Apagando luces que no usamos", ["Dejando la TV prendida", "Abriendo la nevera mucho rato"], "🔌"]
    ],
    tec_digital: [
      ["¿Qué es la ciudadanía digital?", "Usar internet con respeto y responsabilidad", ["Tener muchos seguidores", "Jugar todo el día"], "🌐"],
      ["Si alguien te molesta en internet, ¿qué haces?", "Le cuento a un adulto de confianza", ["Le respondo con insultos", "No le digo a nadie"], "🧑‍🤝‍🧑"],
      ["¿Qué es una contraseña segura?", "Una larga, con letras, números y símbolos", ["Mi nombre", "123456"], "🔐"],
      ["¿Todo lo que aparece en internet es verdad?", "No, hay que verificar las fuentes", ["Sí, siempre", "Solo los videos"], "🕵️"],
      ["¿Qué es el ciberacoso?", "Molestar a alguien por medios digitales", ["Un juego", "Un antivirus"], "🚫"],
      ["¿Cuánto tiempo de pantalla es mejor?", "Un tiempo equilibrado con pausas", ["Todo el día", "Toda la noche"], "⏳"]
    ],
    tec_code: [
      ["¿Qué es un algoritmo?", "Una serie de pasos ordenados para resolver algo", ["Un tipo de robot", "Un virus"], "📋"],
      ["Un 'bucle' en programación sirve para…", "Repetir instrucciones", ["Borrar el programa", "Apagar el PC"], "🔁"],
      ["'SI llueve ENTONCES llevo paraguas' es un…", "Condicional", ["Bucle", "Error"], "☔"],
      ["Un error en un programa se llama…", "Bug", ["Bit", "App"], "🐞"],
      ["¿Qué lenguaje visual con bloques usan los niños para programar?", "Scratch", ["Excel", "Word"], "🧩"],
      ["Una variable sirve para…", "Guardar un dato que puede cambiar", ["Pintar la pantalla", "Apagar el robot"], "📦"]
    ],
    tec_ai: [
      ["¿Qué es la inteligencia artificial?", "Programas que aprenden de datos para resolver tareas", ["Robots con sentimientos", "Magia"], "🤖"],
      ["¿La IA siempre tiene la razón?", "No, puede equivocarse y hay que revisar", ["Sí, siempre", "Solo los lunes"], "🤔"],
      ["¿Qué ejemplo usa IA?", "Un asistente que reconoce tu voz", ["Un lápiz", "Una pelota"], "🎙️"],
      ["¿Qué necesita una IA para aprender?", "Muchos datos y ejemplos", ["Comida", "Dormir"], "📊"],
      ["¿Debemos compartir datos personales con cualquier app?", "No, solo con permiso de un adulto", ["Sí, siempre", "Solo la dirección"], "🔒"]
    ],
    tec_circuit: [
      ["¿Qué necesita un circuito para que la bombilla prenda?", "Estar cerrado", ["Estar abierto", "Estar mojado"], "💡"],
      ["¿Qué componente da energía al circuito?", "La pila o batería", ["El cable", "El interruptor"], "🔋"],
      ["¿Para qué sirve un interruptor?", "Para abrir o cerrar el circuito", ["Para dar energía", "Para hacer ruido"], "🎚️"],
      ["¿Por dónde viaja la electricidad?", "Por los cables (conductores)", ["Por el aire", "Por el plástico"], "🔌"],
      ["¿Es seguro meter objetos en un enchufe?", "No, es muy peligroso", ["Sí", "Solo con las manos mojadas"], "⚠️"]
    ]
  };

  // Clasificar: {bins:[...], items:[[texto, índiceBin], ...]}
  const SORT = {
    alive: { bins: ["🌱 Ser vivo", "🪨 No vivo"], items: [["🐶 Perro", 0], ["🪨 Piedra", 1], ["🌳 Árbol", 0], ["🚗 Carro", 1], ["🐦 Pájaro", 0], ["💧 Agua", 1], ["🌻 Girasol", 0], ["🧸 Oso de peluche", 1], ["🐟 Pez", 0], ["🍄 Hongo", 0], ["☀️ Sol", 1], ["👧 Niña", 0]] },
    natural: { bins: ["🌿 Natural", "🏭 Hecho por personas"], items: [["🪵 Madera", 0], ["🪑 Silla", 1], ["🐚 Concha", 0], ["📱 Celular", 1], ["🌸 Flor", 0], ["🚲 Bicicleta", 1], ["🪨 Roca", 0], ["✏️ Lápiz", 1], ["🍎 Manzana", 0], ["🖥️ Computador", 1]] },
    pets: { bins: ["🏠 Doméstico", "🌳 Salvaje"], items: [["🐶 Perro", 0], ["🦁 León", 1], ["🐱 Gato", 0], ["🐯 Tigre", 1], ["🐹 Hámster", 0], ["🦒 Jirafa", 1], ["🐔 Gallina", 0], ["🐊 Cocodrilo", 1], ["🐄 Vaca", 0], ["🐺 Lobo", 1]] },
    states: { bins: ["🧊 Sólido", "💧 Líquido", "💨 Gaseoso"], items: [["🧊 Hielo", 0], ["🥛 Leche", 1], ["💨 Vapor", 2], ["🪨 Piedra", 0], ["🧃 Jugo", 1], ["🎈 Aire del globo", 2], ["🪑 Mesa", 0], ["🌊 Agua de mar", 1], ["🌫️ Humo", 2], ["🍯 Miel", 1]] },
    healthy: { bins: ["🥦 Comer seguido", "🍭 Comer poquito"], items: [["🍎 Manzana", 0], ["🍬 Dulces", 1], ["🥦 Brócoli", 0], ["🍟 Papas fritas", 1], ["🥛 Leche", 0], ["🥤 Gaseosa", 1], ["🍌 Banano", 0], ["🍩 Rosquilla", 1], ["🥕 Zanahoria", 0], ["🍫 Chocolate", 1], ["💧 Agua", 0]] },
    diet: { bins: ["🌿 Herbívoro", "🥩 Carnívoro", "🍽️ Omnívoro"], items: [["🐄 Vaca", 0], ["🦁 León", 1], ["🐻 Oso", 2], ["🐰 Conejo", 0], ["🦈 Tiburón", 1], ["🐷 Cerdo", 2], ["🦒 Jirafa", 0], ["🐯 Tigre", 1], ["🧑 Persona", 2], ["🐴 Caballo", 0], ["🦅 Águila", 1]] },
    renew: { bins: ["♻️ Renovable", "⛽ No renovable"], items: [["☀️ Solar", 0], ["🛢️ Petróleo", 1], ["🌬️ Eólica", 0], ["⚫ Carbón", 1], ["💧 Hidráulica", 0], ["🔥 Gas natural", 1], ["🌋 Geotérmica", 0], ["🌊 Mareas", 0]] },
    conduct: { bins: ["⚡ Conductor", "🛡️ Aislante"], items: [["🔩 Clavo de hierro", 0], ["🪵 Madera", 1], ["🥄 Cuchara metálica", 0], ["🧱 Plástico", 1], ["🪙 Moneda", 0], ["🧶 Lana", 1], ["🔌 Cable de cobre", 0], ["🥛 Vidrio", 1], ["🧽 Caucho", 1]] },
    transport: { bins: ["🛣️ Terrestre", "🌊 Acuático", "☁️ Aéreo"], items: [["🚗 Carro", 0], ["⛵ Velero", 1], ["✈️ Avión", 2], ["🚌 Bus", 0], ["🚢 Barco", 1], ["🚁 Helicóptero", 2], ["🚲 Bicicleta", 0], ["🛶 Canoa", 1], ["🎈 Globo aerostático", 2], ["🚆 Tren", 0]] },
    landscape: { bins: ["🏞️ Natural", "🏙️ Cultural (modificado)"], items: [["🏔️ Montaña nevada", 0], ["🏙️ Ciudad", 1], ["🏝️ Isla desierta", 0], ["🌉 Puente", 1], ["🌋 Volcán", 0], ["🌾 Cultivo", 1], ["🏜️ Desierto", 0], ["🛣️ Carretera", 1]] },
    rightsduties: { bins: ["🎁 Derecho", "🧹 Deber"], items: [["🏫 Estudiar en una escuela", 0], ["🤝 Respetar a los demás", 1], ["🏥 Recibir atención médica", 0], ["🧹 Ayudar en casa", 1], ["🎈 Jugar", 0], ["📚 Hacer las tareas", 1], ["🍲 Alimentarse bien", 0], ["🌳 Cuidar la naturaleza", 1]] },
    goodbad: { bins: ["😊 Buena convivencia", "😟 Mala convivencia"], items: [["🤝 Compartir juguetes", 0], ["😡 Gritar a un amigo", 1], ["🙋 Pedir la palabra", 0], ["🗑️ Tirar basura al piso", 1], ["🙏 Dar las gracias", 0], ["🤥 Decir mentiras", 1], ["🫂 Ayudar a otro", 0], ["😈 Burlarse de alguien", 1]] },
    sectors: { bins: ["🌾 Primario", "🏭 Secundario", "🛎️ Terciario"], items: [["🌽 Agricultura", 0], ["🏭 Fábrica de carros", 1], ["🏥 Hospital", 2], ["🐟 Pesca", 0], ["🧱 Construcción", 1], ["🏦 Banco", 2], ["⛏️ Minería", 0], ["🥫 Fábrica de alimentos", 1], ["🏫 Educación", 2], ["🚌 Transporte", 2]] },
    materials: { bins: ["🪵 Madera", "🔩 Metal", "🧴 Plástico"], items: [["🪑 Silla de madera", 0], ["🥄 Cuchara de acero", 1], ["🪣 Balde plástico", 2], ["✏️ Lápiz", 0], ["🔑 Llave", 1], ["🧴 Botella", 2], ["🚪 Puerta de madera", 0], ["🪙 Moneda", 1], ["🧸 Juguete de plástico", 2]] },
    safe: { bins: ["✅ Seguro", "⛔ No seguro"], items: [["🔐 Usar contraseñas difíciles", 0], ["📍 Publicar mi dirección", 1], ["🧑‍🤝‍🧑 Contarle a un adulto si algo me incomoda", 0], ["🤝 Aceptar a desconocidos", 1], ["🔑 Compartir mi contraseña", 1], ["🛑 No abrir enlaces raros", 0], ["📸 Enviar fotos a desconocidos", 1], ["⏰ Usar la pantalla con horario", 0]] },
    hwsw: { bins: ["🖥️ Hardware", "💾 Software"], items: [["⌨️ Teclado", 0], ["🎮 Videojuego", 1], ["🖱️ Ratón", 0], ["🌐 Navegador web", 1], ["🖨️ Impresora", 0], ["📝 Procesador de texto", 1], ["💽 Disco duro", 0], ["📱 App de mensajes", 1]] },
    wordclass: { bins: ["🏷️ Sustantivo", "🎨 Adjetivo", "🏃 Verbo"], items: [["perro", 0], ["bonito", 1], ["correr", 2], ["casa", 0], ["grande", 1], ["comer", 2], ["Lucía", 0], ["rojo", 1], ["saltar", 2], ["árbol", 0], ["feliz", 1], ["leer", 2]] },
    accent: { bins: ["Aguda", "Llana (grave)", "Esdrújula"], items: [["camión", 0], ["árbol", 1], ["música", 2], ["café", 0], ["lápiz", 1], ["pájaro", 2], ["reloj", 0], ["mesa", 1], ["teléfono", 2], ["canción", 0], ["fácil", 1], ["murciélago", 2]] },
    vertebr: { bins: ["🦴 Vertebrado", "🪱 Invertebrado"], items: [["🐟 Pez", 0], ["🕷️ Araña", 1], ["🐦 Pájaro", 0], ["🐌 Caracol", 1], ["🐍 Serpiente", 0], ["🦋 Mariposa", 1], ["🐸 Rana", 0], ["🐙 Pulpo", 1], ["🐕 Perro", 0], ["🪱 Lombriz", 1]] },
    evenodd: null
  };

  // Ordenar: oraciones (se separan por espacios) o pasos (arreglos)
  const ORDER = {
    es1: ["El perro come", "Mi mamá canta", "La niña salta", "El sol brilla", "Yo leo un libro", "El gato duerme"],
    es2: ["Mi hermano juega fútbol en el parque", "La abeja hace miel dulce", "Hoy vamos a la escuela", "El pájaro canta en el árbol", "Me gusta pintar con colores"],
    es4: ["Los niños visitaron el museo de ciencias ayer", "El río atraviesa la ciudad de norte a sur", "Mañana estudiaremos las fracciones con mi papá", "La tortuga camina despacio por la arena"],
    en1: ["I like apples", "The dog is big", "I am happy", "She is my friend", "It is a cat"],
    en2: ["I can swim very fast", "My mother likes pizza", "We go to school by bus", "The cat is under the table", "He has a red ball"],
    en3: ["Yesterday I played with my friends", "She watched a movie last night", "We went to the beach in summer", "My brother is taller than me"],
    steps_tooth: [["Poner crema en el cepillo", "Cepillar los dientes", "Enjuagar la boca", "Guardar el cepillo"]],
    steps: [
      ["Poner crema en el cepillo", "Cepillar los dientes", "Enjuagar la boca", "Guardar el cepillo"],
      ["Sacar el pan", "Untar mantequilla", "Poner el queso", "Cerrar el sándwich"],
      ["Abrir la llave", "Mojar las manos", "Echar jabón y frotar", "Enjuagar y secar"],
      ["Encender el computador", "Abrir el programa", "Escribir el trabajo", "Guardar el archivo"],
      ["Poner la semilla en la tierra", "Regar con agua", "Esperar que germine", "Ver crecer la planta"]
    ],
    life: [
      ["🥚 Huevo", "🐛 Oruga", "🫘 Crisálida", "🦋 Mariposa"],
      ["🌰 Semilla", "🌱 Brote", "🌿 Planta joven", "🌳 Árbol con frutos"],
      ["🥚 Huevos de rana", "🐟 Renacuajo", "🦵 Renacuajo con patas", "🐸 Rana"]
    ],
    water: [["☀️ El Sol calienta el agua", "♨️ Evaporación", "☁️ Condensación (nubes)", "🌧️ Precipitación (lluvia)"]],
    chain: [["🌿 Pasto", "🐛 Oruga", "🐦 Pájaro", "🦅 Halcón"], ["🌾 Trigo", "🐭 Ratón", "🐍 Serpiente", "🦉 Búho"], ["🦠 Plancton", "🐟 Pez pequeño", "🐠 Pez grande", "🦈 Tiburón"]],
    history: [["⛵ Llegada de Colón (1492)", "🏰 Época colonial", "🎉 Independencias (1810–1825)", "🗳️ Repúblicas actuales"]]
  };

  // Lecturas: texto + preguntas
  const READ = {
    r1: [
      { title: "El gato Tito", text: "Tito es un gato gris. Le gusta dormir al sol. Un día vio una mariposa amarilla y saltó para atraparla. ¡La mariposa voló muy alto! Tito volvió a dormir.", qs: [["¿De qué color es Tito?", "Gris", ["Negro", "Blanco"]], ["¿Qué le gusta hacer a Tito?", "Dormir al sol", ["Nadar", "Cantar"]], ["¿De qué color era la mariposa?", "Amarilla", ["Azul", "Roja"]], ["¿Qué hizo Tito al final?", "Volvió a dormir", ["Atrapó la mariposa", "Se fue a la escuela"]]] },
      { title: "La lluvia", text: "Hoy llueve mucho. Sara se pone sus botas rojas y su chaqueta. Salta en los charcos con su hermano Leo. Después toman chocolate caliente en casa.", qs: [["¿Qué se pone Sara?", "Botas rojas y chaqueta", ["Sandalias", "Un vestido de baño"]], ["¿Con quién salta en los charcos?", "Con su hermano Leo", ["Con su gato", "Con su abuela"]], ["¿Qué toman después?", "Chocolate caliente", ["Helado", "Jugo frío"]], ["¿Cómo está el día?", "Lluvioso", ["Soleado", "Nevado"]]] }
    ],
    r2: [
      { title: "La semilla de Martina", text: "Martina sembró una semilla en una maceta. Todos los días la regaba y la ponía junto a la ventana para que recibiera sol. Después de una semana salió un brote verde. Martina estaba tan feliz que le puso nombre: Pepita. Hoy Pepita es una planta de tomate.", qs: [["¿Dónde sembró Martina la semilla?", "En una maceta", ["En el parque", "En un vaso de leche"]], ["¿Por qué la ponía junto a la ventana?", "Para que recibiera sol", ["Para que no se mojara", "Para esconderla"]], ["¿Cuánto tardó en salir el brote?", "Una semana", ["Un año", "Una hora"]], ["¿Qué planta es Pepita?", "Una planta de tomate", ["Un girasol", "Un árbol de manzana"]]] },
      { title: "El dragón que tenía frío", text: "En una montaña vivía Fuego, un dragón que no podía echar llamas. Sentía frío todas las noches. Sus amigos, una ardilla y un búho, le tejieron una bufanda enorme de lana. Desde entonces Fuego duerme calentito y feliz.", qs: [["¿Cómo se llama el dragón?", "Fuego", ["Hielo", "Rayo"]], ["¿Cuál era el problema del dragón?", "No podía echar llamas y tenía frío", ["No podía volar", "Estaba perdido"]], ["¿Quiénes lo ayudaron?", "Una ardilla y un búho", ["Un león y un tigre", "Un niño y su perro"]], ["¿Qué le regalaron?", "Una bufanda de lana", ["Una cobija eléctrica", "Una chimenea"]]] }
    ],
    r3: [
      { title: "Las abejas trabajadoras", text: "Las abejas viven en colmenas donde cada una tiene una tarea. La reina pone los huevos. Las obreras buscan néctar en las flores, limpian la colmena y cuidan a las crías. Mientras vuelan de flor en flor, llevan polen y ayudan a que nazcan frutos. Sin abejas tendríamos muchos menos alimentos.", qs: [["¿Dónde viven las abejas?", "En colmenas", ["En nidos", "En cuevas"]], ["¿Qué hace la abeja reina?", "Pone los huevos", ["Busca néctar", "Limpia la colmena"]], ["¿Por qué son importantes las abejas?", "Ayudan a que nazcan frutos al llevar polen", ["Porque pican", "Porque hacen ruido"]], ["¿Qué buscan las obreras en las flores?", "Néctar", ["Agua salada", "Hojas secas"]]] },
      { title: "Un viaje a la Luna", text: "En 1969 tres astronautas viajaron a la Luna en la misión Apolo 11. Neil Armstrong fue el primero en caminar sobre ella y dijo: 'Es un pequeño paso para el hombre, pero un gran salto para la humanidad'. En la Luna no hay aire ni viento, por eso sus huellas siguen allí.", qs: [["¿En qué año llegaron a la Luna?", "1969", ["1492", "2001"]], ["¿Quién caminó primero en la Luna?", "Neil Armstrong", ["Cristóbal Colón", "Albert Einstein"]], ["¿Cómo se llamó la misión?", "Apolo 11", ["Titanic", "Luna Feliz"]], ["¿Por qué siguen las huellas en la Luna?", "No hay aire ni viento que las borre", ["Porque están pintadas", "Porque llueve mucho"]]] }
    ],
    r4: [
      { title: "El reciclaje en mi barrio", text: "En el barrio de Tomás decidieron separar la basura. Pusieron canecas de colores: blanca para plásticos y vidrio, negra para residuos que no se aprovechan y verde para restos de comida. En un mes, la cantidad de basura que iba al relleno sanitario bajó a la mitad. Los vecinos usaron los restos de comida para hacer abono para el jardín comunitario.", qs: [["¿Qué decidieron hacer en el barrio?", "Separar la basura", ["Quemar la basura", "Comprar más cosas"]], ["¿Para qué usaron los restos de comida?", "Para hacer abono", ["Para alimentar perros", "Para tirarlos al río"]], ["¿Qué pasó en un mes?", "La basura al relleno bajó a la mitad", ["La basura aumentó", "No pasó nada"]], ["¿Cuál es la idea principal?", "Separar la basura ayuda al ambiente", ["Los colores son bonitos", "Tomás tiene un jardín"]]] }
    ],
    r5: [
      { title: "¿Deberían los niños tener tareas?", text: "Algunas personas piensan que las tareas ayudan a practicar lo aprendido y a crear hábitos de estudio. Otras creen que los niños necesitan más tiempo para jugar, descansar y compartir en familia. Muchos expertos proponen tareas cortas y significativas, que se puedan hacer en poco tiempo y que conecten con la vida diaria.", qs: [["¿Cuál es el tema del texto?", "Si los niños deberían tener tareas", ["Cómo jugar fútbol", "La historia de la escuela"]], ["Un argumento a favor de las tareas es…", "Ayudan a practicar y crear hábitos", ["Quitan tiempo de juego", "Son aburridas"]], ["¿Qué proponen muchos expertos?", "Tareas cortas y significativas", ["Eliminar la escuela", "Tareas de 5 horas"]], ["Este texto es…", "Argumentativo", ["Una receta", "Un poema"]]] }
    ]
  };

  const SYLL = [["🐱", "gato", 2], ["☀️", "sol", 1], ["🦋", "mariposa", 4], ["🏠", "casa", 2], ["🍌", "banano", 3], ["🐘", "elefante", 4], ["🌙", "luna", 2], ["🍎", "manzana", 3], ["🐟", "pez", 1], ["🐢", "tortuga", 3], ["🪑", "silla", 2], ["🦒", "jirafa", 3], ["🍞", "pan", 1], ["🚲", "bicicleta", 4], ["🌸", "flor", 1], ["🐰", "conejo", 3]];
  const VOWELS = [["🐝", "abeja"], ["⭐", "estrella"], ["🏝️", "isla"], ["🐻", "oso"], ["🍇", "uvas"], ["✈️", "avión"], ["🐘", "elefante"], ["⛪", "iglesia"], ["👁️", "ojo"], ["🦄", "unicornio"], ["🐿️", "ardilla"], ["🪜", "escalera"], ["🧲", "imán"], ["🐛", "oruga"], ["1️⃣", "uno"]];
  const INITIAL = [["🐱", "gato", "G"], ["🐶", "perro", "P"], ["🏠", "casa", "C"], ["🌙", "luna", "L"], ["🐭", "ratón", "R"], ["🍎", "manzana", "M"], ["☀️", "sol", "S"], ["🐢", "tortuga", "T"], ["🦊", "zorro", "Z"], ["🎈", "globo", "G"], ["🍌", "banano", "B"], ["🐸", "rana", "R"], ["🦆", "pato", "P"], ["🧀", "queso", "Q"], ["🌹", "flor", "F"], ["🦦", "nutria", "N"]];
  const SYNANT = {
    syn: [["feliz", "contento", ["triste", "cansado"]], ["rápido", "veloz", ["lento", "alto"]], ["bonito", "hermoso", ["feo", "pequeño"]], ["empezar", "comenzar", ["terminar", "dormir"]], ["grande", "enorme", ["diminuto", "corto"]], ["hablar", "conversar", ["callar", "correr"]], ["miedo", "temor", ["valor", "alegría"]], ["casa", "hogar", ["calle", "escuela"]]],
    ant: [["alto", "bajo", ["grande", "largo"]], ["día", "noche", ["mañana", "sol"]], ["frío", "caliente", ["helado", "fresco"]], ["abrir", "cerrar", ["empujar", "subir"]], ["lleno", "vacío", ["completo", "pesado"]], ["rápido", "lento", ["veloz", "ligero"]], ["alegre", "triste", ["feliz", "contento"]], ["subir", "bajar", ["saltar", "correr"]]]
  };
  const SPELL = {
    bv: [["vaca", ["baca", "vaka"], "🐄"], ["bombero", ["vonvero", "bonbero"], "🧑‍🚒"], ["ventana", ["bentana", "ventanna"], "🪟"], ["campo", ["canpo", "kampo"], "🌾", "Antes de p y b se escribe m."], ["sombrero", ["sonbrero", "zombrero"], "👒", "Antes de b se escribe m."], ["burro", ["vurro", "buro"], "🫏"], ["nube", ["nuve", "nuuve"], "☁️"], ["volcán", ["bolcán", "volkán"], "🌋"]],
    csz: [["zapato", ["sapato", "capato"], "👞"], ["cielo", ["sielo", "zielo"], "🌤️"], ["cereza", ["sereza", "zeresa"], "🍒"], ["pez", ["pes", "pec"], "🐟"], ["peces", ["pezes", "peses"], "🐠", "Plural de palabras con z: z → c."], ["sopa", ["zopa", "copa de sopa"], "🍲"], ["corazón", ["corasón", "korazón"], "❤️"], ["casa", ["kasa", "caza de vivir"], "🏠"]]
  };

  /* ---------------- TEMAS POR GRADO ---------------- */
  const TOPICS = {
    mat: [
      [t("m0a", "Contar hasta 10", "count", { max: 10 }, "Contamos señalando cada objeto una sola vez. El último número que decimos es cuántos hay.", "🍎🍎🍎 → 1, 2, 3. ¡Hay 3 manzanas!", "Cuenten juntos objetos de la casa: cucharas, zapatos, juguetes."),
       t("m0b", "Más y menos", "compare", { max: 10, visual: true }, "Comparar es ver qué grupo tiene más cosas y cuál tiene menos.", "🐟🐟🐟🐟 tiene más que 🐟🐟", "Pregunten: ¿quién tiene más galletas? Usen comida real."),
       t("m0c", "Figuras geométricas", "shapes", { level: 0 }, "Las figuras tienen formas: el círculo es redondo, el cuadrado tiene 4 lados iguales y el triángulo 3 lados.", "🔺 triángulo · ⬛ cuadrado · ⚪ círculo", "Busquen figuras en la casa: ventanas, platos, señales."),
       t("m0d", "Patrones", "pattern", { level: 0 }, "Un patrón es algo que se repite siempre en el mismo orden.", "🍎🍌🍎🍌🍎 … ¿qué sigue? 🍌", "Hagan collares con patrones de colores.")],
      [t("m1a", "Números hasta 100", "place", { max: 99 }, "Los números de dos cifras tienen decenas y unidades. 47 = 4 decenas y 7 unidades.", "35 = 30 + 5", "Agrupen palitos o fideos de 10 en 10."),
       t("m1b", "Sumas hasta 20", "add", { max: 20 }, "Sumar es juntar. Podemos contar hacia adelante desde el número mayor.", "8 + 5 → 9, 10, 11, 12, 13", "Usen los dedos de los dos: papá pone unos, el niño otros."),
       t("m1c", "Restas hasta 20", "sub", { max: 20 }, "Restar es quitar. Contamos hacia atrás o pensamos qué falta.", "12 − 4 = 8", "Jueguen a la tienda: tengo 10 dulces y vendo 3."),
       t("m1d", "La hora en punto", "clock", { level: 0 }, "La aguja corta marca la hora. Cuando la larga señala el 12, es 'en punto'.", "🕒 = Son las 3:00", "Pregunten la hora en momentos del día: comida, baño, dormir.")],
      [t("m2a", "Sumas hasta 100 (llevando)", "add", { max: 100 }, "Sumamos primero las unidades. Si pasan de 9, llevamos una decena.", "27 + 15 → 7+5=12, llevo 1 → 42", "Usen billetes de juguete de 10 y monedas de 1."),
       t("m2b", "Restas hasta 100", "sub", { max: 100 }, "Si arriba hay menos unidades, pedimos prestada una decena.", "52 − 17 = 35", "Cuenten el vuelto en una compra imaginaria."),
       t("m2c", "Empezar a multiplicar", "mul", { tables: [2, 5, 10] }, "Multiplicar es sumar grupos iguales. 3 × 2 es 3 grupos de 2.", "🍪🍪 🍪🍪 🍪🍪 = 3 × 2 = 6", "Cuenten zapatos de la familia de 2 en 2."),
       t("m2d", "Pares e impares", "parity", { max: 50 }, "Los pares se pueden repartir en dos grupos iguales; terminan en 0, 2, 4, 6 u 8.", "14 es par · 7 es impar", "Repartan objetos en parejas: ¿sobra alguno?"),
       t("m2e", "Media hora", "clock", { level: 1 }, "Cuando la aguja larga señala el 6, ha pasado media hora: 'y media'.", "🕞 = 3:30, las tres y media", "Usen un reloj de verdad en casa.")],
      [t("m3a", "Tablas de multiplicar", "mul", { tables: [2, 3, 4, 5, 6, 7, 8, 9, 10] }, "Las tablas nos ayudan a multiplicar rápido. El orden no cambia el resultado: 3 × 7 = 7 × 3.", "6 × 7 = 42", "Practiquen una tabla por día cantando o en el carro."),
       t("m3b", "Divisiones sencillas", "div", { max: 10 }, "Dividir es repartir en partes iguales. Es lo contrario de multiplicar.", "12 ÷ 3 = 4 porque 3 × 4 = 12", "Repartan frutas o dulces en partes iguales."),
       t("m3c", "Fracciones", "frac", { level: 0 }, "Una fracción dice en cuántas partes iguales dividimos algo y cuántas tomamos.", "🍕 dividida en 4, comí 1 → 1/4", "Corten una pizza o una arepa en partes iguales."),
       t("m3d", "Problemas", "word", { level: 3 }, "Leemos con calma, buscamos los datos y decidimos: ¿junto, quito, reparto o repito?", "Tengo 4 bolsas con 6 dulces → 4 × 6 = 24", "Que el niño explique en voz alta cómo lo resolvió.")],
      [t("m4a", "Multiplicar por 2 cifras", "mul2", {}, "Multiplicamos por partes: primero las unidades y luego las decenas, y sumamos.", "23 × 4 = 80 + 12 = 92", "Calculen precios: 4 cuadernos de 23."),
       t("m4b", "Divisiones con residuo", "divr", {}, "A veces la repartición no es exacta: lo que sobra se llama residuo.", "17 ÷ 5 = 3, sobran 2", "Repartan 17 galletas entre 5 personas."),
       t("m4c", "Fracciones equivalentes", "frac", { level: 1 }, "Fracciones distintas pueden valer lo mismo: 1/2 = 2/4 = 4/8.", "Media pizza = 2 trozos de 4", "Doblen una hoja por la mitad y otra vez."),
       t("m4d", "Perímetro", "perim", {}, "El perímetro es el contorno de una figura: sumamos todos sus lados.", "Rectángulo 5 y 3 → 5+3+5+3 = 16", "Midan el borde de una mesa con pasos o con cinta."),
       t("m4e", "Decimales", "dec", { level: 0 }, "Los decimales son partes de la unidad. 0,5 es la mitad.", "0,7 > 0,45", "Miren precios con centavos en el supermercado.")],
      [t("m5a", "Operaciones con decimales", "dec", { level: 1 }, "Para sumar decimales alineamos las comas.", "2,5 + 1,25 = 3,75", "Sumen precios de una lista de mercado."),
       t("m5b", "Suma de fracciones", "frac", { level: 2 }, "Si el denominador es igual, sumamos los numeradores y dejamos el denominador.", "2/7 + 3/7 = 5/7", "Usen recetas: 1/4 taza + 2/4 taza."),
       t("m5c", "Área", "area", {}, "El área es lo que ocupa una superficie. En el rectángulo: base × altura.", "6 × 4 = 24 cuadritos", "Cuenten baldosas del piso."),
       t("m5d", "Divisiones de 2 cifras", "div2", {}, "Dividimos entre un número de dos cifras estimando cuántas veces cabe.", "96 ÷ 12 = 8", "Estimen primero: ¿cuántas veces cabe 12 en 96?"),
       t("m5e", "Problemas de varios pasos", "word", { level: 5 }, "Separamos el problema en pasos pequeños y resolvemos uno a uno.", "3 cajas de 12 y regalo 5 → 36 − 5 = 31", "Pídanle que dibuje el problema antes de calcular.")],
      [t("m6a", "Porcentajes", "pct", {}, "Un porcentaje es una parte de 100. El 50 % es la mitad, el 25 % la cuarta parte.", "25 % de 80 = 20", "Calculen descuentos de una tienda."),
       t("m6b", "Números negativos", "neg", {}, "Los negativos están por debajo de cero, como las temperaturas bajo cero.", "−3 + 5 = 2", "Miren el termómetro o el ascensor con sótanos."),
       t("m6c", "Jerarquía de operaciones", "ops", {}, "Primero paréntesis, luego multiplicaciones y divisiones, al final sumas y restas.", "3 + 4 × 2 = 11", "Que el niño invente operaciones para retarte."),
       t("m6d", "Simplificar fracciones", "frac", { level: 3 }, "Dividimos numerador y denominador por el mismo número.", "6/8 = 3/4", "Busquen el número más grande que divida a ambos.")]
    ],
    ing: [
      [t("i0a", "Colors", "vocab", { bank: "colors" }, "Aprendemos los colores en inglés. Escucha y repite cada palabra.", "🔴 red · 🔵 blue · 🟢 green", "Jueguen 'I spy' con colores de la casa."),
       t("i0b", "Animals", "vocab", { bank: "animals" }, "Los animales en inglés. ¡Imita el sonido de cada uno!", "🐶 dog · 🐱 cat", "Hagan los sonidos de los animales mientras dicen el nombre."),
       t("i0c", "Numbers 1–10", "vocab", { bank: "numbers" }, "Contamos en inglés del uno al diez.", "one, two, three…", "Cuenten escalones en inglés.")],
      [t("i1a", "Family", "vocab", { bank: "family" }, "Los miembros de la familia en inglés.", "👩 mother · 👨 father", "Señalen fotos familiares y digan quién es."),
       t("i1b", "My body", "vocab", { bank: "body" }, "Las partes del cuerpo en inglés.", "👀 eyes · 👃 nose", "Canten 'Head, shoulders, knees and toes'."),
       t("i1c", "Greetings", "quiz", { bank: "ing_greet" }, "Saludar y despedirse en inglés.", "Hello! · Goodbye! · Thank you!", "Salúdense en inglés toda la semana."),
       t("i1d", "Classroom", "vocab", { bank: "school" }, "Los objetos del salón de clase.", "✏️ pencil · 📕 book", "Pongan etiquetas en inglés a los útiles.")],
      [t("i2a", "Food", "vocab", { bank: "food" }, "Las comidas en inglés.", "🍎 apple · 🍞 bread", "Digan en inglés lo que comen en cada comida."),
       t("i2b", "Clothes", "vocab", { bank: "clothes" }, "La ropa en inglés.", "👕 T-shirt · 👟 shoes", "Al vestirse, nombren cada prenda."),
       t("i2c", "Feelings", "vocab", { bank: "feelings" }, "Las emociones en inglés.", "😀 happy · 😢 sad", "Pregunten cada día: How do you feel?"),
       t("i2d", "My first sentences", "order", { bank: "en1" }, "Formamos oraciones cortas en inglés poniendo las palabras en orden.", "I + like + apples", "Lean las oraciones en voz alta.")],
      [t("i3a", "Verb to be", "quiz", { bank: "ing_be" }, "Am, is, are: I am, he/she/it is, we/you/they are.", "I am happy · She is tall", "Describan a la familia: Mom is…"),
       t("i3b", "Weather", "vocab", { bank: "weather" }, "El clima en inglés.", "☀️ sunny · 🌧️ rainy", "Cada mañana: What's the weather like?"),
       t("i3c", "Days of the week", "vocab", { bank: "days" }, "Los días de la semana en inglés.", "Monday, Tuesday…", "Digan el día en inglés al desayunar."),
       t("i3d", "Places in town", "vocab", { bank: "places" }, "Lugares de la ciudad.", "🏫 school · 🏞️ park", "Al salir, nombren los lugares que ven.")],
      [t("i4a", "Action verbs", "vocab", { bank: "verbs" }, "Verbos de acción en inglés.", "🏃 run · 🏊 swim", "Jueguen a hacer mímica de verbos."),
       t("i4b", "Can / can't", "quiz", { bank: "ing_can" }, "Can = puedo; can't = no puedo.", "Birds can fly. Dogs can't fly.", "Digan cosas que pueden y no pueden hacer."),
       t("i4c", "Prepositions", "quiz", { bank: "ing_prep" }, "In, on, under, next to, behind: dónde está algo.", "The cat is under the table.", "Escondan un juguete y describan dónde está."),
       t("i4d", "Building sentences", "order", { bank: "en2" }, "Ordenamos oraciones más largas.", "I can swim very fast", "Inventen sus propias oraciones.")],
      [t("i5a", "Present simple", "quiz", { bank: "ing_ps" }, "Rutinas: con he/she/it el verbo lleva -s.", "She plays · I play", "Describan la rutina diaria en inglés."),
       t("i5b", "Jobs", "vocab", { bank: "jobs" }, "Profesiones en inglés.", "🧑‍⚕️ doctor · 🧑‍🚒 firefighter", "What do you want to be?"),
       t("i5c", "Opposites", "quiz", { bank: "ing_opp" }, "Adjetivos opuestos.", "big ↔ small · hot ↔ cold", "Jueguen a decir el opuesto rápido.")],
      [t("i6a", "Past simple", "quiz", { bank: "ing_past" }, "Hablamos del pasado: regulares con -ed e irregulares que se aprenden.", "play → played · go → went", "Cuenten lo que hicieron ayer en inglés."),
       t("i6b", "Comparatives", "quiz", { bank: "ing_comp" }, "Comparar: bigger than, the biggest.", "An elephant is bigger than a cat.", "Comparen objetos de la casa."),
       t("i6c", "Longer sentences", "order", { bank: "en3" }, "Oraciones en pasado y comparativas.", "Yesterday I played with my friends", "Escriban un diario corto en inglés.")]
    ],
    len: [
      [t("l0a", "Las vocales", "vowel", {}, "Las vocales son A, E, I, O, U. Están en todas las palabras.", "🐝 Abeja empieza con A", "Busquen palabras que empiecen por cada vocal."),
       t("l0b", "¿Con qué letra empieza?", "initial", {}, "Escuchamos el primer sonido de la palabra.", "🐱 Gato empieza con G", "Jueguen 'veo veo' con letras."),
       t("l0c", "Rimas", "quiz", { bank: "len_rhyme" }, "Dos palabras riman cuando terminan con el mismo sonido.", "gato – pato", "Inventen rimas divertidas juntos.")],
      [t("l1a", "Sílabas", "syll", {}, "Las palabras se dividen en sílabas. ¡Aplaudimos cada una!", "ma-ri-po-sa = 4 sílabas", "Aplaudan los nombres de la familia."),
       t("l1b", "Ordenar oraciones", "order", { bank: "es1" }, "Una oración tiene sentido cuando las palabras van en orden.", "El + perro + come", "Lean la oración completa en voz alta."),
       t("l1c", "Mayúsculas y punto", "quiz", { bank: "len_caps" }, "Empezamos con mayúscula y terminamos con punto. Los nombres propios van con mayúscula.", "Ana vive en Quito.", "Escriban juntos una lista de nombres."),
       t("l1d", "Leo y comprendo", "read", { level: "r1" }, "Leemos despacio y pensamos en lo que pasa en la historia.", "¿Quién? ¿Qué pasó? ¿Cómo terminó?", "Lean por turnos: una oración cada uno.")],
      [t("l2a", "Género y número", "quiz", { bank: "len_gen" }, "Las palabras pueden ser masculinas o femeninas, singulares o plurales.", "niño → niña → niños", "Jueguen a cambiar palabras al plural."),
       t("l2b", "Sinónimos y antónimos", "synant", {}, "Sinónimos significan lo mismo; antónimos, lo contrario.", "feliz = contento · alto ≠ bajo", "Busquen opuestos en un cuento."),
       t("l2c", "Ordenar oraciones largas", "order", { bank: "es2" }, "Organizamos oraciones con más palabras.", "La abeja hace miel dulce", "Inventen oraciones con 5 palabras."),
       t("l2d", "Comprensión lectora", "read", { level: "r2" }, "Leemos un cuento y respondemos preguntas.", "Personajes, problema y solución", "Pregunten: ¿qué hubieras hecho tú?")],
      [t("l3a", "Sustantivo, adjetivo y verbo", "sort", { bank: "wordclass" }, "Sustantivo nombra, adjetivo describe y verbo es una acción.", "El perro (sust.) grande (adj.) corre (verbo)", "Busquen ejemplos en una revista."),
       t("l3b", "Ortografía: b, v, mb", "spell", { bank: "bv" }, "Antes de b y p siempre va m. Muchas palabras con b/v se aprenden leyendo.", "campo · sombrero · vaca", "Hagan un dictado corto de 5 palabras."),
       t("l3c", "Signos de puntuación", "quiz", { bank: "len_punct" }, "En español usamos signos de apertura y cierre: ¿? ¡!", "¿Cómo estás? ¡Qué alegría!", "Lean con entonación de pregunta y exclamación."),
       t("l3d", "Lectura informativa", "read", { level: "r3" }, "Los textos informativos nos enseñan datos reales.", "Tema, datos y conclusión", "Busquen la idea principal juntos.")],
      [t("l4a", "Acentuación", "sort", { bank: "accent" }, "Agudas: fuerza en la última sílaba. Llanas: en la penúltima. Esdrújulas: antepenúltima (siempre con tilde).", "ca-MIÓN · ÁR-bol · MÚ-si-ca", "Digan palabras exagerando la sílaba fuerte."),
       t("l4b", "Ortografía: c, s, z", "spell", { bank: "csz" }, "Ze y zi casi no se usan: escribimos ce, ci. Plural de z → ces.", "pez → peces · lápiz → lápices", "Busquen palabras con z en un libro."),
       t("l4c", "Tipos de texto", "quiz", { bank: "len_text" }, "Narrativo, instructivo, informativo y poético.", "Receta = instructivo", "Clasifiquen textos que haya en casa."),
       t("l4d", "Sujeto y predicado", "quiz", { bank: "len_subj" }, "El sujeto es de quién se habla; el predicado, lo que se dice de él.", "[Los niños] [juegan en el parque]", "Pregunten ¿quién? para hallar el sujeto.")],
      [t("l5a", "Tiempos verbales", "quiz", { bank: "len_tense" }, "Pasado, presente y futuro.", "comí · como · comeré", "Cuenten el día en los tres tiempos."),
       t("l5b", "Figuras literarias", "quiz", { bank: "len_fig" }, "Metáfora, comparación, hipérbole y personificación hacen los textos más bellos.", "Tus ojos son estrellas", "Inventen una metáfora sobre la familia."),
       t("l5c", "Lectura crítica", "read", { level: "r4" }, "Identificamos la idea principal y la intención del texto.", "¿Qué quiere lograr el autor?", "Hablen de qué harían en su barrio."),
       t("l5d", "Oraciones complejas", "order", { bank: "es4" }, "Ordenamos oraciones con más información.", "¿Quién? ¿Qué hizo? ¿Dónde? ¿Cuándo?", "Escriban un mini cuento juntos.")],
      [t("l6a", "Diptongo e hiato", "quiz", { bank: "len_hiato" }, "Diptongo: dos vocales en una sílaba. Hiato: en sílabas separadas.", "ciu-dad · dí-a", "Separen en sílabas nombres de ciudades."),
       t("l6b", "Ortografía: g, j, h", "quiz", { bank: "len_gj" }, "Reglas útiles: -aje con j, -logía con g, hue- con h.", "viaje · biología · huevo", "Hagan tarjetas de palabras difíciles."),
       t("l6c", "Textos argumentativos", "read", { level: "r5" }, "Un texto argumentativo defiende una opinión con razones.", "Opinión + argumentos + conclusión", "Debatan un tema con argumentos.")]
    ],
    cie: [
      [t("c0a", "Seres vivos", "sort", { bank: "alive" }, "Los seres vivos nacen, crecen, se alimentan y respiran.", "🐶 vive · 🪨 no vive", "Salgan al patio a buscar seres vivos."),
       t("c0b", "Los cinco sentidos", "quiz", { bank: "cie_senses" }, "Vista, oído, olfato, gusto y tacto nos ayudan a conocer el mundo.", "👀 ver · 👂 oír · 👃 oler", "Jueguen a adivinar objetos con los ojos cerrados."),
       t("c0c", "Animales y sus crías", "quiz", { bank: "cie_babies" }, "Cada animal tiene crías y vive en un lugar.", "Vaca → ternero", "Vean videos de animales con sus crías.")],
      [t("c1a", "Partes de la planta", "quiz", { bank: "cie_plant" }, "Raíz, tallo, hojas, flor, fruto y semilla.", "🌱 raíz → tallo → hojas → flor → fruto", "Siembren un fríjol en un algodón."),
       t("c1b", "Domésticos y salvajes", "sort", { bank: "pets" }, "Los domésticos viven con las personas; los salvajes, en la naturaleza.", "🐶 doméstico · 🦁 salvaje", "Hablen de cómo cuidar a una mascota."),
       t("c1c", "Mi cuerpo", "quiz", { bank: "cie_body" }, "Nuestro cuerpo tiene órganos con funciones importantes.", "❤️ corazón bombea · 🫁 pulmones respiran", "Escuchen el corazón después de saltar."),
       t("c1d", "El día y la noche", "quiz", { bank: "cie_daynight" }, "La Tierra gira y por eso tenemos día y noche.", "🌍 + ☀️ = día de un lado, noche del otro", "Usen una linterna y una pelota.")],
      [t("c2a", "Estados de la materia", "sort", { bank: "states" }, "La materia puede ser sólida, líquida o gaseosa.", "🧊 sólido · 💧 líquido · 💨 gas", "Congelen agua y obsérvenla derretirse."),
       t("c2b", "Ciclo de vida", "orderSteps", { bank: "life" }, "Los seres vivos nacen, crecen, se reproducen y mueren.", "Huevo → oruga → crisálida → mariposa", "Observen una planta crecer cada semana."),
       t("c2c", "Alimentación saludable", "sort", { bank: "healthy" }, "Frutas, verduras, agua y proteínas nos dan energía y salud.", "🍎 diario · 🍭 de vez en cuando", "Armen juntos un plato saludable."),
       t("c2d", "Hábitats", "quiz", { bank: "cie_habitat" }, "Cada animal vive donde encuentra alimento y refugio.", "🐪 desierto · 🐧 polo", "Dibujen un hábitat con sus animales.")],
      [t("c3a", "Cadenas alimenticias", "orderSteps", { bank: "chain" }, "La energía pasa de las plantas a los animales que se las comen.", "Pasto → oruga → pájaro → halcón", "Inventen una cadena con animales locales."),
       t("c3b", "¿Qué comen los animales?", "sort", { bank: "diet" }, "Herbívoros comen plantas, carnívoros carne, omnívoros de todo.", "🐄 herbívoro · 🦁 carnívoro", "Clasifiquen animales de un libro."),
       t("c3c", "El sistema solar", "quiz", { bank: "cie_solar" }, "Ocho planetas giran alrededor del Sol.", "Mercurio, Venus, Tierra, Marte…", "Aprendan una frase para recordar los planetas."),
       t("c3d", "El ciclo del agua", "quiz", { bank: "cie_water" }, "El agua se evapora, forma nubes y cae como lluvia.", "Evaporación → condensación → precipitación", "Hiervan agua y miren el vapor en una tapa.")],
      [t("c4a", "Sistemas del cuerpo", "quiz", { bank: "cie_systems" }, "Circulatorio, respiratorio, digestivo, nervioso y excretor trabajan en equipo.", "❤️ circulatorio · 🫁 respiratorio", "Midan el pulso antes y después de correr."),
       t("c4b", "Ecosistemas", "quiz", { bank: "cie_eco" }, "Seres vivos y el ambiente se relacionan y dependen unos de otros.", "Bióticos 🐞 + abióticos 💧", "Visiten un parque y anoten lo que ven."),
       t("c4c", "Energías renovables", "sort", { bank: "renew" }, "Algunas energías se renuevan (sol, viento) y otras se agotan (petróleo).", "☀️ renovable · 🛢️ no renovable", "Revisen qué aparatos usan más energía."),
       t("c4d", "Mezclas y materia", "quiz", { bank: "cie_matter" }, "Las mezclas pueden ser homogéneas o heterogéneas y se pueden separar.", "Agua + sal = homogénea", "Separen arena y agua con un filtro de café.")],
      [t("c5a", "La célula", "quiz", { bank: "cie_cell" }, "Todos los seres vivos están formados por células.", "Núcleo, membrana y citoplasma", "Hagan un modelo de célula con gelatina."),
       t("c5b", "Fuerzas y movimiento", "quiz", { bank: "cie_force" }, "Las fuerzas empujan, halan, frenan o atraen.", "Gravedad 🍎 · fricción ⚽ · magnetismo 🧲", "Prueben qué objetos atrae un imán."),
       t("c5c", "Conductores y aislantes", "sort", { bank: "conduct" }, "Los metales conducen la electricidad; el plástico y la madera la aíslan.", "🔩 conductor · 🪵 aislante", "Hablen de seguridad con enchufes."),
       t("c5d", "Vertebrados e invertebrados", "sort", { bank: "vertebr" }, "Los vertebrados tienen columna vertebral.", "🐟 vertebrado · 🕷️ invertebrado", "Busquen insectos en el jardín.")],
      [t("c6a", "Reinos de la naturaleza", "quiz", { bank: "cie_kingdom" }, "Los seres vivos se clasifican en reinos: animal, vegetal, hongos, protista y monera.", "🍄 Fungi · 🌿 Plantae", "Hagan un cuadro con ejemplos de cada reino."),
       t("c6b", "Reproducción de las plantas", "quiz", { bank: "cie_repro" }, "Las plantas se reproducen por semillas o de forma asexual.", "Polinización 🐝 → fruto → semilla", "Observen una flor con lupa."),
       t("c6c", "Capas de la Tierra", "quiz", { bank: "cie_earth" }, "Corteza, manto y núcleo; además atmósfera e hidrosfera.", "🌍 como un durazno: piel, pulpa y semilla", "Corten un durazno o aguacate como modelo.")]
    ],
    soc: [
      [t("s0a", "Mi familia", "quiz", { bank: "soc_family" }, "La familia nos cuida y nos quiere. Cada familia es diferente.", "Mamá, papá, abuelos, hermanos…", "Hagan un árbol genealógico con fotos."),
       t("s0b", "Buena convivencia", "sort", { bank: "goodbad" }, "Convivir bien es respetar, compartir y ayudar.", "🤝 compartir · 😡 gritar", "Hagan juntos las reglas de la casa."),
       t("s0c", "Los oficios", "quiz", { bank: "soc_jobs" }, "Las personas trabajan en distintos oficios que ayudan a la comunidad.", "🧑‍⚕️ médico · 🧑‍🚒 bombero", "Pregunten a familiares en qué trabajan.")],
      [t("s1a", "Mi comunidad", "quiz", { bank: "soc_community" }, "La comunidad tiene lugares y normas que nos ayudan a vivir juntos.", "📚 biblioteca · 🏥 hospital", "Den un paseo por el barrio y nombren lugares."),
       t("s1b", "Medios de transporte", "sort", { bank: "transport" }, "Nos movemos por tierra, agua y aire.", "🚗 terrestre · ⛵ acuático · ✈️ aéreo", "Cuenten los transportes que ven en la calle."),
       t("s1c", "Símbolos de mi país", "country", { set: "symbols" }, "Los símbolos patrios representan a nuestro país: bandera, escudo e himno.", "La bandera tiene colores con significado", "Dibujen y coloreen la bandera juntos.")],
      [t("s2a", "Puntos cardinales", "quiz", { bank: "soc_cardinal" }, "Norte, sur, oriente (este) y occidente (oeste) nos orientan.", "☀️ sale por el oriente", "Ubiquen por dónde sale el sol desde la casa."),
       t("s2b", "Paisajes", "sort", { bank: "landscape" }, "El paisaje natural no ha sido cambiado por las personas; el cultural sí.", "🏔️ natural · 🏙️ cultural", "Miren fotos de viajes y clasifíquenlas."),
       t("s2c", "Mi país: capital y moneda", "country", { set: "capital" }, "Cada país tiene una capital, una moneda y una forma de organizar su territorio.", "Capital = donde está el gobierno", "Miren juntos billetes y monedas.")],
      [t("s3a", "Regiones de mi país", "country", { set: "regions" }, "Las regiones tienen clima, paisaje y costumbres diferentes.", "Montaña, costa, selva, llanura…", "Busquen en un mapa dónde viven familiares."),
       t("s3b", "Derechos y deberes", "sort", { bank: "rightsduties" }, "Los niños tienen derechos y también deberes.", "🏫 derecho · 🧹 deber", "Hablen de qué derechos ven cumplidos."),
       t("s3c", "Mapas y planos", "quiz", { bank: "soc_maps" }, "Los mapas representan lugares vistos desde arriba con símbolos.", "Leyenda, escala, rosa de los vientos", "Dibujen el plano de la habitación.")],
      [t("s4a", "Pueblos originarios", "quiz", { bank: "soc_natives" }, "Antes de 1492 en América vivían pueblos con grandes culturas.", "Mayas, aztecas, incas, muiscas, mapuches…", "Busquen palabras de origen indígena: chocolate, papa…"),
       t("s4b", "El relieve", "quiz", { bank: "soc_relief" }, "La superficie de la Tierra tiene montañas, llanuras, valles e islas.", "⛰️ montaña · 🌾 llanura", "Modelen relieves con plastilina."),
       t("s4c", "Historia de mi país", "country", { set: "history" }, "Conocemos fechas y personajes importantes de nuestra historia.", "Independencia, héroes, culturas antiguas", "Pregunten a los abuelos qué recuerdan."),
       t("s4d", "Línea del tiempo", "orderSteps", { bank: "history" }, "Ordenamos los hechos del más antiguo al más reciente.", "1492 → colonia → independencia → hoy", "Hagan una línea del tiempo de la familia.")],
      [t("s5a", "Continentes y océanos", "quiz", { bank: "soc_world" }, "La Tierra tiene continentes y océanos.", "🌍 África · 🌏 Asia · 🌊 Pacífico", "Jueguen con un globo terráqueo o mapa."),
       t("s5b", "Gobierno y democracia", "quiz", { bank: "soc_gov" }, "En democracia elegimos gobernantes y hay poderes separados.", "Ejecutivo, legislativo y judicial", "Hagan una votación familiar."),
       t("s5c", "Sectores económicos", "sort", { bank: "sectors" }, "Primario saca recursos, secundario transforma y terciario da servicios.", "🌽 primario · 🏭 secundario · 🏥 terciario", "Sigan el camino del pan: trigo → harina → panadería.")],
      [t("s6a", "Civilizaciones antiguas", "quiz", { bank: "soc_ancient" }, "Egipto, Grecia, Roma y China dejaron grandes aportes.", "🔺 Egipto · 🏅 Grecia · 🏟️ Roma", "Vean un documental corto juntos."),
       t("s6b", "Geografía de América Latina", "quiz", { bank: "soc_latam" }, "Ríos, montañas y desiertos únicos en el mundo.", "Amazonas, Andes, Atacama", "Ubiquen países vecinos en el mapa."),
       t("s6c", "Historia de mi país II", "country", { set: "history" }, "Profundizamos en los hechos que formaron nuestro país.", "Causas y consecuencias", "Debatan: ¿por qué fue importante la independencia?")]
    ],
    tec: [
      [t("t0a", "Natural o artificial", "sort", { bank: "natural" }, "Hay objetos de la naturaleza y otros hechos por las personas.", "🪵 natural · 🪑 artificial", "Busquen 5 de cada uno en casa."),
       t("t0b", "Robot: primeros pasos", "robot", { level: 0 }, "Damos instrucciones con flechas para que el robot llegue a la estrella.", "→ → ↓ = derecha, derecha, abajo", "Jueguen a ser robots: uno da instrucciones al otro.")],
      [t("t1a", "Herramientas", "quiz", { bank: "tec_tools" }, "Las herramientas nos ayudan a hacer trabajos.", "🔨 martillo · ✂️ tijeras", "Conozcan la caja de herramientas (con cuidado)."),
       t("t1b", "Partes del computador", "quiz", { bank: "tec_pc" }, "El computador tiene partes para entrar y mostrar información.", "⌨️ teclado · 🖥️ pantalla", "Nombren las partes del computador de la casa."),
       t("t1c", "Robot: caminos", "robot", { level: 1 }, "Planeamos el camino completo antes de ejecutarlo.", "Cuenta las casillas antes de mover", "Que el niño explique su plan antes de ejecutar.")],
      [t("t2a", "Grandes inventos", "quiz", { bank: "tec_inventions" }, "Los inventos cambiaron la forma de vivir.", "🛞 rueda · 💡 bombilla", "Imaginen un invento propio y dibújenlo."),
       t("t2b", "Materiales", "sort", { bank: "materials" }, "Los objetos se fabrican con distintos materiales.", "🪵 madera · 🔩 metal · 🧴 plástico", "Clasifiquen objetos de la cocina."),
       t("t2c", "Robot: obstáculos", "robot", { level: 2 }, "Esquivamos las rocas para llegar a la meta.", "Si hay roca, busca otro camino", "Construyan un laberinto con cojines.")],
      [t("t3a", "Internet seguro", "sort", { bank: "safe" }, "En internet cuidamos nuestros datos y pedimos ayuda a un adulto.", "🔐 contraseña segura · 📍 no publicar dirección", "Acuerden reglas familiares de internet."),
       t("t3b", "Algoritmos", "orderSteps", { bank: "steps" }, "Un algoritmo es una lista de pasos en orden.", "Lavar manos: abrir, mojar, jabón, enjuagar", "Escriban el algoritmo de preparar el desayuno."),
       t("t3c", "Robot: misiones", "robot", { level: 3 }, "Programas más largos con varios obstáculos.", "Planea, ejecuta y corrige (depurar)", "Celebren los errores: ¡así se aprende a programar!")],
      [t("t4a", "Máquinas simples", "quiz", { bank: "tec_simple" }, "Palanca, polea, rueda, plano inclinado y cuña facilitan el trabajo.", "⚖️ sube y baja = palanca", "Busquen máquinas simples en el parque."),
       t("t4b", "Energía y artefactos", "quiz", { bank: "tec_energy" }, "Los artefactos transforman la energía.", "💡 electricidad → luz", "Hagan un recorrido de ahorro de energía."),
       t("t4c", "Robot experto", "robot", { level: 4 }, "Caminos largos y laberintos.", "Divide el camino en partes", "Cronometren quién lo resuelve con menos pasos.")],
      [t("t5a", "Ciudadanía digital", "quiz", { bank: "tec_digital" }, "Usamos la tecnología con respeto y responsabilidad.", "Verifica fuentes · cuida tus datos", "Revisen juntos la privacidad de una app."),
       t("t5b", "Hardware y software", "sort", { bank: "hwsw" }, "Hardware se puede tocar; software son los programas.", "⌨️ hardware · 🎮 software", "Abran un programa y nombren su hardware."),
       t("t5c", "Programación", "quiz", { bank: "tec_code" }, "Bucles, condicionales y variables son ideas clave de programar.", "SI… ENTONCES… · REPETIR…", "Prueben Scratch juntos (scratch.mit.edu).")],
      [t("t6a", "Inteligencia artificial", "quiz", { bank: "tec_ai" }, "La IA aprende de datos, pero puede equivocarse.", "Asistentes de voz, traductores…", "Conversen sobre usos buenos y riesgos de la IA."),
       t("t6b", "Circuitos eléctricos", "quiz", { bank: "tec_circuit" }, "Un circuito cerrado deja pasar la corriente.", "🔋 pila → cable → 💡 bombilla", "Armen un circuito con pila y bombillo (con supervisión)."),
       t("t6c", "Robot maestro", "robot", { level: 5 }, "Los retos más difíciles del robot.", "Busca el camino más corto", "Reta al adulto: ¿quién usa menos pasos?")]
    ]
  };

  /* ---------------- CURSOS LISTOS ---------------- */
  // Cada lección referencia un generador (como los temas). minGrade orienta la búsqueda.
  const L = (title, gen, params, lesson, example, tip) => ({ title, gen, params: params || {}, lesson, example, tip });
  const COURSES = [
    { id: "pc_div2", title: "Divisiones de 2 cifras", subject: "mat", emoji: "➗", grades: [4, 6],
      summary: "De repartir en grupos a dividir entre números de dos cifras, paso a paso.",
      keywords: "division dividir divisiones dos cifras divisor repartir",
      lessons: [
        L("Repaso: dividir es repartir", "div", { max: 10 }, "Dividir es repartir en partes iguales. Usamos las tablas al revés.", "36 ÷ 4 = 9 porque 4 × 9 = 36", "Repartan objetos reales antes de calcular."),
        L("Divisiones con residuo", "divr", {}, "Si no se puede repartir exacto, lo que sobra es el residuo y siempre es menor que el divisor.", "29 ÷ 6 = 4, sobran 5", "Verifiquen: divisor × cociente + residuo = dividendo."),
        L("Multiplicar por 2 cifras (base)", "mul2", {}, "Para dividir entre 2 cifras ayuda mucho multiplicar rápido.", "12 × 7 = 84", "Hagan la tabla del 12 y del 15 juntos."),
        L("Dividir entre 2 cifras", "div2", {}, "Estimamos cuántas veces cabe el divisor: redondeamos (23 ≈ 20) y probamos.", "92 ÷ 23 → 20 cabe 4 veces en 90 → 23 × 4 = 92 ✓", "Que el niño diga su estimación antes de calcular."),
        L("Dividendos grandes", "div2", { big: true }, "Con dividendos de 3 cifras tomamos las primeras cifras, bajamos la siguiente y repetimos.", "384 ÷ 12 = 32", "Escriban la división en papel y comparen."),
        L("Problemas de división", "word", { level: 6 }, "Leemos el problema: si hay que repartir en grupos iguales, dividimos.", "144 lápices en cajas de 12 → 12 cajas", "Inventen problemas con cosas de la casa.")
      ] },
    { id: "pc_tablas", title: "Domina las tablas", subject: "mat", emoji: "✖️", grades: [2, 4],
      summary: "Las tablas del 2 al 10, una misión a la vez.",
      keywords: "tablas multiplicar multiplicacion",
      lessons: [
        L("Tablas del 2, 5 y 10", "mul", { tables: [2, 5, 10] }, "Son las más fáciles: el 2 es el doble, el 5 termina en 0 o 5, el 10 agrega un 0.", "7 × 10 = 70", "Cuenten de 5 en 5 con monedas."),
        L("Tablas del 3 y 4", "mul", { tables: [3, 4] }, "El 4 es el doble del doble.", "6 × 4 = 12 + 12 = 24", "Aplaudan contando de 3 en 3."),
        L("Tablas del 6 y 7", "mul", { tables: [6, 7] }, "El 6 es el doble del 3. Para el 7, usa lo que ya sabes: 7 × 6 = 6 × 7.", "7 × 8 = 56 (5, 6, 7, 8)", "Usen trucos y canciones."),
        L("Tablas del 8 y 9", "mul", { tables: [8, 9] }, "Truco del 9: las cifras del resultado suman 9.", "9 × 6 = 54 → 5 + 4 = 9", "Muestren el truco de los dedos del 9."),
        L("Gran repaso", "mul", { tables: [2, 3, 4, 5, 6, 7, 8, 9, 10] }, "¡Todas mezcladas!", "8 × 7 = 56", "Hagan un reto: quién responde más rápido.")
      ] },
    { id: "pc_frac", title: "Fracciones desde cero", subject: "mat", emoji: "🍕", grades: [3, 6],
      summary: "Partes de un entero, equivalencias, sumas y simplificación.",
      keywords: "fracciones fraccion mitad cuarto numerador denominador",
      lessons: [
        L("¿Qué es una fracción?", "frac", { level: 0 }, "El denominador dice en cuántas partes dividimos; el numerador cuántas tomamos.", "3/8 = 3 de 8 partes", "Corten frutas en partes iguales."),
        L("Fracciones equivalentes", "frac", { level: 1 }, "Multiplicando arriba y abajo por el mismo número obtenemos fracciones iguales.", "1/2 = 2/4 = 3/6", "Doblen papel para verlo."),
        L("Sumar fracciones", "frac", { level: 2 }, "Con igual denominador sumamos los numeradores.", "1/5 + 2/5 = 3/5", "Usen una receta para practicar."),
        L("Simplificar", "frac", { level: 3 }, "Dividimos arriba y abajo por el mismo número hasta que no se pueda más.", "8/12 = 2/3", "Busquen el máximo común divisor juntos.")
      ] },
    { id: "pc_suma", title: "Sumas y restas campeonas", subject: "mat", emoji: "➕", grades: [1, 3],
      summary: "Del conteo a sumar y restar llevando y prestando.",
      keywords: "sumas restas sumar restar llevar prestar",
      lessons: [
        L("Contar y comparar", "compare", { max: 20 }, "Comparamos números: ¿cuál es mayor?", "15 > 9", "Usen tarjetas con números."),
        L("Sumas hasta 20", "add", { max: 20 }, "Juntamos cantidades.", "9 + 6 = 15", "Cuenten con los dedos."),
        L("Restas hasta 20", "sub", { max: 20 }, "Quitamos cantidades.", "15 − 7 = 8", "Jueguen a la tienda."),
        L("Sumas llevando", "add", { max: 100 }, "Si las unidades pasan de 9, llevamos una decena.", "38 + 25 = 63", "Usen billetes de juguete."),
        L("Restas prestando", "sub", { max: 100 }, "Si no alcanza, pedimos prestada una decena.", "61 − 28 = 33", "Expliquen en voz alta cada paso.")
      ] },
    { id: "pc_reloj", title: "Aprendo la hora", subject: "mat", emoji: "⏰", grades: [1, 3],
      summary: "Leer el reloj de agujas: en punto, y media y cuartos.",
      keywords: "reloj hora horas tiempo minutos",
      lessons: [
        L("En punto", "clock", { level: 0 }, "Aguja larga en el 12 = en punto.", "4:00", "Pongan la hora de rutinas."),
        L("Y media", "clock", { level: 1 }, "Aguja larga en el 6 = y media.", "4:30", "Pregunten la hora cada rato."),
        L("Y cuarto, menos cuarto", "clock", { level: 2 }, "Aguja larga en el 3 = y cuarto; en el 9 = menos cuarto.", "4:15 · 4:45", "Hagan un reloj de cartón.")
      ] },
    { id: "pc_eng", title: "Mi primer inglés", subject: "ing", emoji: "🗽", grades: [0, 3],
      summary: "Colores, animales, números, familia y comida con pronunciación.",
      keywords: "ingles english vocabulario colores animales numeros",
      lessons: [
        L("Colors", "vocab", { bank: "colors" }, "Los colores en inglés.", "red, blue, green", "I spy with my little eye…"),
        L("Animals", "vocab", { bank: "animals" }, "Los animales en inglés.", "dog, cat, bird", "Imiten a los animales."),
        L("Numbers", "vocab", { bank: "numbers" }, "Los números del 1 al 10.", "one, two, three", "Cuenten escalones."),
        L("Family", "vocab", { bank: "family" }, "La familia.", "mother, father", "Miren fotos familiares."),
        L("Food", "vocab", { bank: "food" }, "La comida.", "apple, bread, milk", "Nombren el desayuno en inglés.")
      ] },
    { id: "pc_eng2", title: "Inglés: gramática básica", subject: "ing", emoji: "💬", grades: [3, 6],
      summary: "To be, can, presente simple, pasado y comparativos.",
      keywords: "ingles gramatica verb to be present simple past",
      lessons: [
        L("Verb to be", "quiz", { bank: "ing_be" }, "am, is, are", "She is happy", "Describan a la familia."),
        L("Can / can't", "quiz", { bank: "ing_can" }, "Habilidades.", "I can swim", "Digan qué pueden hacer."),
        L("Present simple", "quiz", { bank: "ing_ps" }, "Rutinas.", "He plays football", "Describan su día."),
        L("Past simple", "quiz", { bank: "ing_past" }, "El pasado.", "I played", "Cuenten lo que hicieron ayer."),
        L("Comparatives", "quiz", { bank: "ing_comp" }, "Comparar.", "bigger than", "Comparen objetos.")
      ] },
    { id: "pc_lectores", title: "Lectores en acción", subject: "len", emoji: "📚", grades: [1, 5],
      summary: "Comprensión lectora con cuentos y textos informativos.",
      keywords: "lectura leer comprension lectora cuentos",
      lessons: [
        L("Cuentos cortos", "read", { level: "r1" }, "Leemos y recordamos detalles.", "¿Quién? ¿Qué? ¿Dónde?", "Lean por turnos."),
        L("Cuentos con problema", "read", { level: "r2" }, "Todo cuento tiene un problema y una solución.", "Inicio, nudo y desenlace", "Cambien el final del cuento."),
        L("Textos informativos", "read", { level: "r3" }, "Aprendemos datos reales.", "Idea principal", "Subrayen lo importante."),
        L("Leer con opinión", "read", { level: "r4" }, "Pensamos en la intención del autor.", "¿Para qué fue escrito?", "Den su opinión con razones.")
      ] },
    { id: "pc_orto", title: "Ortografía divertida", subject: "len", emoji: "✍️", grades: [2, 6],
      summary: "Mayúsculas, b/v, c/s/z, g/j/h y tildes.",
      keywords: "ortografia escribir bien tildes acentos b v",
      lessons: [
        L("Mayúsculas y punto", "quiz", { bank: "len_caps" }, "Mayúscula al inicio y en nombres propios.", "Ana vive en Lima.", "Corrijan un texto juntos."),
        L("b, v y mb", "spell", { bank: "bv" }, "Antes de b y p, m.", "campo, sombrero", "Dictado de 5 palabras."),
        L("c, s y z", "spell", { bank: "csz" }, "z → ces en plural.", "lápiz → lápices", "Busquen palabras en un libro."),
        L("Agudas, llanas y esdrújulas", "sort", { bank: "accent" }, "Encuentra la sílaba fuerte.", "ca-MIÓN, ÁR-bol, MÚ-si-ca", "Exageren la sílaba fuerte."),
        L("g, j y h", "quiz", { bank: "len_gj" }, "Reglas útiles de g, j y h.", "viaje, biología, huevo", "Hagan tarjetas de memoria.")
      ] },
    { id: "pc_cuerpo", title: "Mi cuerpo por dentro", subject: "cie", emoji: "🫀", grades: [1, 5],
      summary: "Sentidos, órganos, sistemas y alimentación saludable.",
      keywords: "cuerpo humano organos sistemas sentidos salud",
      lessons: [
        L("Los sentidos", "quiz", { bank: "cie_senses" }, "Cinco sentidos.", "vista, oído, olfato, gusto, tacto", "Juego de adivinar con ojos cerrados."),
        L("Órganos", "quiz", { bank: "cie_body" }, "Cada órgano tiene una función.", "corazón, pulmones, cerebro", "Escuchen el corazón."),
        L("Comer sano", "sort", { bank: "healthy" }, "Alimentos para todos los días y para de vez en cuando.", "🍎 vs 🍭", "Armen un menú."),
        L("Sistemas del cuerpo", "quiz", { bank: "cie_systems" }, "Los sistemas trabajan en equipo.", "circulatorio, respiratorio…", "Midan el pulso.")
      ] },
    { id: "pc_espacio", title: "Viaje al espacio", subject: "cie", emoji: "🚀", grades: [1, 6],
      summary: "Día y noche, el sistema solar y la Tierra por dentro.",
      keywords: "espacio planetas sistema solar luna sol estrellas tierra",
      lessons: [
        L("Día y noche", "quiz", { bank: "cie_daynight" }, "La Tierra gira.", "24 horas", "Linterna y pelota."),
        L("Los planetas", "quiz", { bank: "cie_solar" }, "Ocho planetas.", "Mercurio a Neptuno", "Hagan un móvil de planetas."),
        L("Lectura: viaje a la Luna", "read", { level: "r3" }, "La llegada a la Luna.", "Apolo 11", "Miren la Luna esta noche."),
        L("Capas de la Tierra", "quiz", { bank: "cie_earth" }, "Corteza, manto y núcleo.", "Como un durazno", "Corten una fruta como modelo.")
      ] },
    { id: "pc_robot", title: "Pequeños programadores", subject: "tec", emoji: "🤖", grades: [0, 6],
      summary: "Pensamiento computacional: secuencias, algoritmos y retos de robot.",
      keywords: "programacion programar robot codigo algoritmos computacional",
      lessons: [
        L("Primeros pasos", "robot", { level: 0 }, "Flechas para mover al robot.", "→ → ↓", "Sean robots humanos."),
        L("Algoritmos de la vida", "orderSteps", { bank: "steps" }, "Pasos en orden.", "Lavarse las manos", "Escriban un algoritmo."),
        L("Obstáculos", "robot", { level: 2 }, "Esquiva las rocas.", "Planea antes", "Laberinto de cojines."),
        L("Ideas de programación", "quiz", { bank: "tec_code" }, "Bucles y condicionales.", "SI… ENTONCES…", "Prueben Scratch."),
        L("Gran misión", "robot", { level: 4 }, "El reto final.", "Divide el camino", "¡Celebren!")
      ] },
    { id: "pc_pais", title: "Conozco mi país", subject: "soc", emoji: "🗺️", grades: [1, 6],
      summary: "Símbolos, capital, regiones e historia según el país elegido.",
      keywords: "pais patria simbolos capital regiones historia independencia",
      lessons: [
        L("Símbolos patrios", "country", { set: "symbols" }, "Bandera, escudo e himno.", "Colores y significado", "Dibujen la bandera."),
        L("Capital y moneda", "country", { set: "capital" }, "Datos básicos del país.", "Capital, moneda, territorio", "Miren monedas y billetes."),
        L("Regiones", "country", { set: "regions" }, "Paisajes y climas.", "Montaña, costa, selva", "Busquen en el mapa."),
        L("Historia", "country", { set: "history" }, "Fechas y personajes.", "Independencia", "Pregunten a los abuelos.")
      ] }
  ];

  /* Paquetes de contenido adicional (js/content/*.js) llaman a CURRICULUM.extend({...}):
     { subject, banks: { Q, SORT, ORDER, READ, VOCAB }, extendBanks: { Q, SORT, ORDER, VOCAB }, topics: { 0: [...], ..., 6: [...] } } */
  const STORES = { Q, SORT, ORDER, READ, VOCAB, SYNANT, SPELL };
  const LISTS = { SYLL, VOWELS, INITIAL }; // listas simples: se amplían con extendBanks: { SYLL: [...] }
  function extend(pack) {
    const where = `contenido de ${pack.subject || "?"}`;
    Object.entries(pack.banks || {}).forEach(([kind, banks]) => Object.entries(banks).forEach(([k, v]) => {
      if (!STORES[kind]) throw new Error(`${where}: tipo de banco desconocido ${kind}`);
      if (STORES[kind][k]) throw new Error(`${where}: el banco ${kind}.${k} ya existe`);
      STORES[kind][k] = v;
    }));
    Object.entries(pack.extendBanks || {}).forEach(([kind, banks]) => LISTS[kind] ? LISTS[kind].push(...banks) : Object.entries(banks).forEach(([k, v]) => {
      const cur = STORES[kind] && STORES[kind][k];
      if (!cur) throw new Error(`${where}: no existe el banco ${kind}.${k} para ampliar`);
      if (kind === "SORT") cur.items.push(...v.items); else cur.push(...v);
    }));
    (pack.courses || []).forEach((c) => {
      if (COURSES.some((x) => x.id === c.id)) throw new Error(`${where}: el curso ${c.id} ya existe`);
      COURSES.push(c);
    });
    Object.entries(pack.topics || {}).forEach(([g, list]) => {
      const grade = TOPICS[pack.subject] && TOPICS[pack.subject][+g];
      if (!grade) throw new Error(`${where}: grado ${g} no válido`);
      list.forEach((tp) => grade.push(t(tp.id, tp.title, tp.gen, tp.params, tp.lesson, tp.example, tp.tip)));
    });
  }

  window.CURRICULUM = { SUBJECTS, TOPICS, COURSES, VOCAB, Q, SORT, ORDER, READ, SYLL, VOWELS, INITIAL, SYNANT, SPELL, extend };
})();
