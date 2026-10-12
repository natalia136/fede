/* Países: nombres de grados, nombres de materias, marco curricular oficial
   y preguntas propias de Ciencias Sociales para cada país. */
window.COUNTRIES = {
  co: {
    name: "Colombia",
    flag: "linear-gradient(#fcd116 0 50%, #003893 50% 75%, #ce1126 75%)",
    grades: ["Transición", "Primero", "Segundo", "Tercero", "Cuarto", "Quinto", "Sexto"],
    gradeSuffix: ["(preescolar)", "de primaria", "de primaria", "de primaria", "de primaria", "de primaria", "de bachillerato"],
    framework: "Estándares Básicos de Competencias y Derechos Básicos de Aprendizaje (DBA) del Ministerio de Educación Nacional",
    subjects: { mat: "Matemáticas", ing: "Inglés", len: "Lengua Castellana", cie: "Ciencias Naturales", soc: "Ciencias Sociales", tec: "Tecnología e Informática" },
    quiz: {
      symbols: [
        ["¿Cuáles son los colores de la bandera de Colombia?", "Amarillo, azul y rojo", ["Verde, blanco y rojo", "Celeste y blanco"], "🏳️"],
        ["¿Cuál es el ave nacional de Colombia?", "El cóndor andino", ["El águila real", "El hornero"], "🦅"],
        ["¿Cuál es el árbol nacional de Colombia?", "La palma de cera", ["El roble", "El ceibo"], "🌴"],
        ["¿Cuál es la flor nacional de Colombia?", "La orquídea", ["La rosa", "El girasol"], "🌸"],
        ["¿Qué color ocupa la mitad de la bandera?", "El amarillo", ["El azul", "El rojo"], "🟨"]
      ],
      capital: [
        ["¿Cuál es la capital de Colombia?", "Bogotá", ["Medellín", "Cali"], "🏙️"],
        ["¿Cómo se llama la moneda de Colombia?", "Peso colombiano", ["Dólar", "Sol"], "💰"],
        ["¿Qué océanos tocan las costas de Colombia?", "El Pacífico y el Atlántico (mar Caribe)", ["Solo el Pacífico", "El Índico"], "🌊"],
        ["¿Cómo se organiza el territorio de Colombia?", "En departamentos", ["En estados", "En provincias"], "🗺️"]
      ],
      regions: [
        ["¿Cuántas regiones naturales tiene Colombia?", "Seis", ["Tres", "Diez"], "🧭"],
        ["¿Qué región tiene montañas y la cordillera de los Andes?", "Región Andina", ["Región Caribe", "Orinoquía"], "⛰️"],
        ["¿En qué región están las islas de San Andrés y Providencia?", "Región Insular", ["Región Pacífica", "Amazonía"], "🏝️"],
        ["¿Qué región tiene la selva más grande?", "Amazonía", ["Región Caribe", "Región Andina"], "🌳"],
        ["¿Qué región tiene grandes llanuras y ganadería?", "Orinoquía (Llanos Orientales)", ["Región Insular", "Región Pacífica"], "🐄"]
      ],
      history: [
        ["¿Qué día se celebra la independencia de Colombia?", "20 de julio (1810)", ["16 de septiembre", "9 de julio"], "🎉"],
        ["¿Qué pasó con el Florero de Llorente?", "Inició la revuelta del 20 de julio de 1810", ["Se firmó la Constitución", "Llegó Colón"], "🏺"],
        ["¿En qué batalla se consolidó la independencia en 1819?", "Batalla de Boyacá", ["Batalla de Maipú", "Batalla de Ayacucho"], "⚔️"],
        ["¿Qué pueblo indígena vivió en el altiplano de Bogotá?", "Los muiscas", ["Los mayas", "Los aztecas"], "🪶"],
        ["¿Quién es llamado 'El Libertador'?", "Simón Bolívar", ["Miguel Hidalgo", "Bernardo O'Higgins"], "🎖️"]
      ]
    }
  },
  mx: {
    name: "México",
    flag: "linear-gradient(90deg, #006847 0 33.3%, #ffffff 33.3% 66.6%, #ce1126 66.6%)",
    grades: ["Preescolar", "1.º", "2.º", "3.º", "4.º", "5.º", "6.º"],
    gradeSuffix: ["(3.er grado)", "de primaria", "de primaria", "de primaria", "de primaria", "de primaria", "de primaria"],
    framework: "Plan de Estudio 2022 de la SEP (Nueva Escuela Mexicana)",
    subjects: { mat: "Matemáticas", ing: "Inglés", len: "Español (Lenguajes)", cie: "Ciencias Naturales", soc: "Historia y Geografía", tec: "Tecnología" },
    quiz: {
      symbols: [
        ["¿Cuáles son los colores de la bandera de México?", "Verde, blanco y rojo", ["Amarillo, azul y rojo", "Rojo y blanco"], "🏳️"],
        ["¿Qué animal aparece en el escudo de México?", "Un águila devorando una serpiente", ["Un cóndor", "Un jaguar"], "🦅"],
        ["¿Sobre qué planta está parada el águila del escudo?", "Un nopal", ["Un maguey", "Una palmera"], "🌵"],
        ["¿Cuál es la flor nacional de México?", "La dalia", ["La orquídea", "El copihue"], "🌸"],
        ["¿Qué día se celebra el Día de la Bandera?", "24 de febrero", ["20 de julio", "18 de septiembre"], "📅"]
      ],
      capital: [
        ["¿Cuál es la capital de México?", "Ciudad de México", ["Guadalajara", "Monterrey"], "🏙️"],
        ["¿Cómo se llama la moneda de México?", "Peso mexicano", ["Euro", "Sol"], "💰"],
        ["¿Cuántas entidades federativas tiene México?", "32", ["10", "50"], "🗺️"],
        ["¿Qué país está al norte de México?", "Estados Unidos", ["Guatemala", "Canadá"], "🧭"]
      ],
      regions: [
        ["¿Qué península está en el sureste de México?", "Península de Yucatán", ["Península Ibérica", "Península de Paria"], "🏝️"],
        ["¿Qué península está en el noroeste de México?", "Baja California", ["Yucatán", "La Guajira"], "🏜️"],
        ["¿Cómo se llama la gran cadena de montañas del occidente?", "Sierra Madre Occidental", ["Los Andes", "Los Pirineos"], "⛰️"],
        ["¿Qué tipo de paisaje predomina en el norte de México?", "Desiertos y zonas áridas", ["Selvas tropicales", "Glaciares"], "🌵"],
        ["¿Qué volcán famoso está cerca de la Ciudad de México?", "El Popocatépetl", ["El Teide", "El Cotopaxi"], "🌋"]
      ],
      history: [
        ["¿Qué día se celebra la Independencia de México?", "16 de septiembre (1810)", ["20 de julio", "5 de mayo"], "🎉"],
        ["¿Quién dio el Grito de Dolores?", "Miguel Hidalgo", ["Simón Bolívar", "José de San Martín"], "🔔"],
        ["¿Qué gran ciudad fundaron los mexicas?", "Tenochtitlan", ["Machu Picchu", "Cuzco"], "🏛️"],
        ["¿Qué pueblo construyó Chichén Itzá?", "Los mayas", ["Los incas", "Los muiscas"], "🛕"],
        ["¿Qué se celebra el 20 de noviembre?", "El inicio de la Revolución Mexicana", ["La Independencia", "El Día de Muertos"], "📜"]
      ]
    }
  },
  ar: {
    name: "Argentina",
    flag: "radial-gradient(circle at 50% 50%, #f6b40e 0 9%, transparent 10%), linear-gradient(#74acdf 0 33.3%, #ffffff 33.3% 66.6%, #74acdf 66.6%)",
    grades: ["Sala de 5", "1.er grado", "2.º grado", "3.er grado", "4.º grado", "5.º grado", "6.º grado"],
    gradeSuffix: ["(nivel inicial)", "", "", "", "", "", ""],
    framework: "Núcleos de Aprendizajes Prioritarios (NAP) del Ministerio de Educación",
    subjects: { mat: "Matemática", ing: "Inglés", len: "Prácticas del Lenguaje", cie: "Ciencias Naturales", soc: "Ciencias Sociales", tec: "Educación Tecnológica" },
    quiz: {
      symbols: [
        ["¿Cuáles son los colores de la bandera argentina?", "Celeste y blanco", ["Rojo y blanco", "Verde, blanco y rojo"], "🏳️"],
        ["¿Quién creó la bandera argentina?", "Manuel Belgrano", ["José de San Martín", "Domingo F. Sarmiento"], "🎖️"],
        ["¿Qué hay en el centro de la bandera oficial?", "El Sol de Mayo", ["Una estrella", "Un escudo con águila"], "☀️"],
        ["¿Cuál es la flor nacional argentina?", "El ceibo", ["La dalia", "La orquídea"], "🌺"],
        ["¿Cuál es el ave nacional argentina?", "El hornero", ["El cóndor", "El colibrí"], "🐦"]
      ],
      capital: [
        ["¿Cuál es la capital de Argentina?", "Buenos Aires (CABA)", ["Córdoba", "Rosario"], "🏙️"],
        ["¿Cómo se llama la moneda argentina?", "Peso argentino", ["Real", "Dólar"], "💰"],
        ["¿Cuántas provincias tiene Argentina?", "23 provincias y la Ciudad Autónoma", ["10 provincias", "50 estados"], "🗺️"],
        ["¿Qué cordillera separa Argentina de Chile?", "La cordillera de los Andes", ["Los Alpes", "La Sierra Madre"], "⛰️"]
      ],
      regions: [
        ["¿En qué región están los glaciares y los pingüinos?", "Patagonia", ["Noreste", "Cuyo"], "🐧"],
        ["¿Qué región es famosa por sus llanuras y el trigo?", "Región Pampeana", ["Patagonia", "Noroeste"], "🌾"],
        ["¿En qué región están las Cataratas del Iguazú?", "Noreste (NEA)", ["Cuyo", "Patagonia"], "💦"],
        ["¿Qué región es famosa por sus viñedos?", "Cuyo", ["Pampeana", "Noreste"], "🍇"],
        ["¿Cuál es la montaña más alta de América?", "El Aconcagua", ["El Everest", "El Chimborazo"], "🏔️"]
      ],
      history: [
        ["¿Qué día se declaró la Independencia argentina?", "9 de julio de 1816", ["25 de mayo de 1810", "20 de julio de 1810"], "🎉"],
        ["¿Qué ocurrió el 25 de mayo de 1810?", "La Revolución de Mayo y el Primer Gobierno Patrio", ["La Independencia", "La llegada de Colón"], "📜"],
        ["¿En qué ciudad se declaró la Independencia?", "San Miguel de Tucumán", ["Buenos Aires", "Mendoza"], "🏠"],
        ["¿Quién cruzó los Andes para liberar Chile y Perú?", "José de San Martín", ["Simón Bolívar", "Miguel Hidalgo"], "🐴"],
        ["¿Quién es el 'Padre del Aula'?", "Domingo Faustino Sarmiento", ["Manuel Belgrano", "Juan Perón"], "📚"]
      ]
    }
  },
  cl: {
    name: "Chile",
    flag: "radial-gradient(circle at 16.6% 25%, #ffffff 0 7%, transparent 8%), linear-gradient(90deg, #0039a6 0 33.3%, transparent 33.3%) top / 100% 50% no-repeat, linear-gradient(#ffffff 0 50%, #d52b1e 50%)",
    grades: ["Kínder", "1.º básico", "2.º básico", "3.º básico", "4.º básico", "5.º básico", "6.º básico"],
    gradeSuffix: ["(educación parvularia)", "", "", "", "", "", ""],
    framework: "Bases Curriculares del Ministerio de Educación (MINEDUC)",
    subjects: { mat: "Matemática", ing: "Inglés", len: "Lenguaje y Comunicación", cie: "Ciencias Naturales", soc: "Historia, Geografía y Cs. Sociales", tec: "Tecnología" },
    quiz: {
      symbols: [
        ["¿Cuáles son los colores de la bandera de Chile?", "Rojo, blanco y azul", ["Celeste y blanco", "Amarillo, azul y rojo"], "🏳️"],
        ["¿Qué tiene la bandera chilena en el cuadro azul?", "Una estrella blanca", ["Un sol", "Un escudo"], "⭐"],
        ["¿Cuál es la flor nacional de Chile?", "El copihue", ["La dalia", "El ceibo"], "🌺"],
        ["¿Qué animales aparecen en el escudo de Chile?", "El cóndor y el huemul", ["El águila y la serpiente", "La vicuña y el puma"], "🦌"],
        ["¿Qué danza es la danza nacional de Chile?", "La cueca", ["El tango", "La cumbia"], "💃"]
      ],
      capital: [
        ["¿Cuál es la capital de Chile?", "Santiago", ["Valparaíso", "Concepción"], "🏙️"],
        ["¿Cómo se llama la moneda de Chile?", "Peso chileno", ["Sol", "Euro"], "💰"],
        ["¿Qué océano baña toda la costa de Chile?", "El océano Pacífico", ["El Atlántico", "El Índico"], "🌊"],
        ["¿Cómo se divide el territorio chileno?", "En regiones", ["En estados", "En departamentos"], "🗺️"]
      ],
      regions: [
        ["¿En qué zona está el desierto de Atacama?", "Norte Grande", ["Zona Sur", "Zona Austral"], "🏜️"],
        ["¿Qué zona tiene glaciares y fiordos?", "Zona Austral", ["Norte Chico", "Zona Central"], "🧊"],
        ["¿Qué isla chilena es famosa por los moáis?", "Isla de Pascua (Rapa Nui)", ["Chiloé", "Juan Fernández"], "🗿"],
        ["¿Qué zona tiene bosques, lagos y volcanes?", "Zona Sur", ["Norte Grande", "Norte Chico"], "🌲"],
        ["¿Cómo es la forma del territorio de Chile?", "Larga y angosta", ["Redonda", "Cuadrada"], "📏"]
      ],
      history: [
        ["¿Qué se celebra el 18 de septiembre?", "La Primera Junta Nacional de Gobierno (1810)", ["La llegada de Colón", "El Día del Trabajo"], "🎉"],
        ["¿Quién es considerado Padre de la Patria?", "Bernardo O'Higgins", ["Simón Bolívar", "Manuel Belgrano"], "🎖️"],
        ["¿Qué pueblo originario vive en el sur de Chile?", "El pueblo mapuche", ["Los mayas", "Los aztecas"], "🪶"],
        ["¿En qué batalla de 1818 se aseguró la independencia?", "Batalla de Maipú", ["Batalla de Boyacá", "Batalla de Pichincha"], "⚔️"],
        ["¿Qué pueblo creó los moáis?", "El pueblo rapanui", ["El pueblo aymara", "El pueblo inca"], "🗿"]
      ]
    }
  },
  pe: {
    name: "Perú",
    flag: "linear-gradient(90deg, #d91023 0 33.3%, #ffffff 33.3% 66.6%, #d91023 66.6%)",
    grades: ["Inicial 5 años", "1.er grado", "2.º grado", "3.er grado", "4.º grado", "5.º grado", "6.º grado"],
    gradeSuffix: ["", "de primaria", "de primaria", "de primaria", "de primaria", "de primaria", "de primaria"],
    framework: "Currículo Nacional de la Educación Básica (CNEB) del MINEDU",
    subjects: { mat: "Matemática", ing: "Inglés", len: "Comunicación", cie: "Ciencia y Tecnología", soc: "Personal Social", tec: "Educación para el Trabajo y TIC" },
    quiz: {
      symbols: [
        ["¿Cuáles son los colores de la bandera del Perú?", "Rojo y blanco", ["Celeste y blanco", "Verde, blanco y rojo"], "🏳️"],
        ["¿Qué animal aparece en el escudo del Perú?", "La vicuña", ["El cóndor", "El jaguar"], "🦙"],
        ["¿Cuál es la flor nacional del Perú?", "La cantuta", ["La dalia", "La orquídea"], "🌺"],
        ["¿Cuál es el ave nacional del Perú?", "El gallito de las rocas", ["El hornero", "El águila real"], "🐦"],
        ["¿Qué árbol aparece en el escudo peruano?", "El árbol de la quina", ["La palma de cera", "El roble"], "🌳"]
      ],
      capital: [
        ["¿Cuál es la capital del Perú?", "Lima", ["Cusco", "Arequipa"], "🏙️"],
        ["¿Cómo se llama la moneda del Perú?", "Sol", ["Peso", "Bolívar"], "💰"],
        ["¿Qué lago navegable comparte Perú con Bolivia?", "El lago Titicaca", ["El lago Maracaibo", "El lago Ness"], "⛵"],
        ["¿Qué río muy largo nace en el Perú?", "El río Amazonas", ["El río Nilo", "El río Paraná"], "🌊"]
      ],
      regions: [
        ["¿Cuáles son las tres regiones naturales tradicionales del Perú?", "Costa, Sierra y Selva", ["Norte, Centro y Sur", "Llanos, Islas y Desierto"], "🧭"],
        ["¿En qué región están los Andes y Machu Picchu?", "Sierra", ["Costa", "Selva"], "⛰️"],
        ["¿Qué región tiene la mayor parte de la Amazonía?", "Selva", ["Costa", "Sierra"], "🌳"],
        ["¿Qué región tiene desiertos junto al mar?", "Costa", ["Selva", "Sierra"], "🏖️"],
        ["¿Qué animal andino da lana y vive en la Sierra?", "La alpaca", ["El pingüino", "El delfín rosado"], "🦙"]
      ],
      history: [
        ["¿Qué día se celebra la independencia del Perú?", "28 de julio (1821)", ["20 de julio", "9 de julio"], "🎉"],
        ["¿Quién proclamó la independencia del Perú?", "José de San Martín", ["Simón Bolívar", "Túpac Amaru II"], "📜"],
        ["¿Qué ciudadela inca está en Cusco?", "Machu Picchu", ["Chichén Itzá", "Tenochtitlan"], "🏛️"],
        ["¿Cómo se llamaba el imperio de los incas?", "Tahuantinsuyo", ["Anáhuac", "Tenochtitlan"], "👑"],
        ["¿En qué batalla de 1824 se selló la independencia?", "Batalla de Ayacucho", ["Batalla de Boyacá", "Batalla de Maipú"], "⚔️"]
      ]
    }
  },
  ec: {
    name: "Ecuador",
    flag: "linear-gradient(#ffdd00 0 50%, #034ea2 50% 75%, #ed1c24 75%)",
    grades: ["1.º EGB", "2.º EGB", "3.º EGB", "4.º EGB", "5.º EGB", "6.º EGB", "7.º EGB"],
    gradeSuffix: ["(preparatoria)", "", "", "", "", "", ""],
    framework: "Currículo de los Niveles de Educación Obligatoria del Ministerio de Educación",
    subjects: { mat: "Matemática", ing: "Inglés", len: "Lengua y Literatura", cie: "Ciencias Naturales", soc: "Estudios Sociales", tec: "Tecnología" },
    quiz: {
      symbols: [
        ["¿Cuáles son los colores de la bandera de Ecuador?", "Amarillo, azul y rojo", ["Rojo y blanco", "Celeste y blanco"], "🏳️"],
        ["¿Qué ave aparece en el escudo de Ecuador?", "El cóndor andino", ["El colibrí", "El águila real"], "🦅"],
        ["¿Qué volcán aparece en el escudo de Ecuador?", "El Chimborazo", ["El Popocatépetl", "El Teide"], "🌋"],
        ["¿Cuál es la flor nacional de Ecuador?", "La chuquiragua", ["El ceibo", "La dalia"], "🌼"],
        ["¿Qué diferencia la bandera de Ecuador de la de Colombia?", "Ecuador lleva el escudo en el centro", ["Ecuador no tiene azul", "Tienen colores distintos"], "🛡️"]
      ],
      capital: [
        ["¿Cuál es la capital de Ecuador?", "Quito", ["Guayaquil", "Cuenca"], "🏙️"],
        ["¿Qué moneda se usa en Ecuador?", "El dólar estadounidense", ["El sucre", "El peso"], "💵"],
        ["¿Qué línea imaginaria pasa por Ecuador y le da su nombre?", "La línea ecuatorial", ["El trópico de Cáncer", "El meridiano de Greenwich"], "🌐"],
        ["¿Cómo se divide el territorio de Ecuador?", "En provincias", ["En estados", "En departamentos"], "🗺️"]
      ],
      regions: [
        ["¿Cuáles son las cuatro regiones de Ecuador?", "Costa, Sierra, Amazonía e Insular", ["Norte, Sur, Este y Oeste", "Llanos, Andes, Islas y Desierto"], "🧭"],
        ["¿Qué islas famosas pertenecen a Ecuador?", "Las islas Galápagos", ["Las islas Canarias", "La isla de Pascua"], "🐢"],
        ["¿Qué científico estudió la evolución en Galápagos?", "Charles Darwin", ["Isaac Newton", "Albert Einstein"], "🔬"],
        ["¿En qué región está Quito?", "Sierra", ["Costa", "Amazonía"], "⛰️"],
        ["¿En qué región está Guayaquil?", "Costa", ["Sierra", "Insular"], "🌴"]
      ],
      history: [
        ["¿Qué se celebra el 10 de agosto?", "El Primer Grito de Independencia (1809)", ["La llegada de Colón", "El Día de la Bandera"], "🎉"],
        ["¿En qué batalla de 1822 se liberó Quito?", "Batalla de Pichincha", ["Batalla de Boyacá", "Batalla de Maipú"], "⚔️"],
        ["¿Quién comandó la batalla de Pichincha?", "Antonio José de Sucre", ["Miguel Hidalgo", "Bernardo O'Higgins"], "🎖️"],
        ["¿Qué cultura antigua del Ecuador trabajaba el oro y la cerámica?", "La cultura Valdivia y otras culturas costeras", ["Los aztecas", "Los vikingos"], "🏺"],
        ["¿Qué imperio llegó a Quito antes de los españoles?", "El imperio inca", ["El imperio romano", "El imperio mexica"], "👑"]
      ]
    }
  },
  es: {
    name: "España",
    flag: "linear-gradient(#aa151b 0 25%, #f1bf00 25% 75%, #aa151b 75%)",
    grades: ["Infantil 5 años", "1.º", "2.º", "3.º", "4.º", "5.º", "6.º"],
    gradeSuffix: ["", "de Primaria", "de Primaria", "de Primaria", "de Primaria", "de Primaria", "de Primaria"],
    framework: "LOMLOE — Real Decreto 157/2022 (enseñanzas mínimas de Educación Primaria)",
    subjects: { mat: "Matemáticas", ing: "Inglés", len: "Lengua Castellana y Literatura", cie: "Conocimiento del Medio (Natural)", soc: "Conocimiento del Medio (Social)", tec: "Competencia Digital" },
    quiz: {
      symbols: [
        ["¿Cuáles son los colores de la bandera de España?", "Rojo y amarillo", ["Rojo y blanco", "Azul y blanco"], "🏳️"],
        ["¿Qué franja de la bandera es más ancha?", "La amarilla", ["La roja de arriba", "Todas son iguales"], "🟨"],
        ["¿Qué columnas aparecen en el escudo de España?", "Las columnas de Hércules", ["Las columnas de Roma", "Las torres de Babel"], "🏛️"],
        ["¿Qué lema llevan las columnas del escudo?", "Plus Ultra", ["Libertad y Orden", "Unión y Fuerza"], "📜"],
        ["¿Cuándo es la Fiesta Nacional de España?", "12 de octubre", ["6 de diciembre", "1 de mayo"], "📅"]
      ],
      capital: [
        ["¿Cuál es la capital de España?", "Madrid", ["Barcelona", "Sevilla"], "🏙️"],
        ["¿Qué moneda se usa en España?", "El euro", ["La peseta", "El peso"], "💶"],
        ["¿Cuántas comunidades autónomas tiene España?", "17 (y 2 ciudades autónomas)", ["10", "50"], "🗺️"],
        ["¿En qué continente está España?", "Europa", ["América", "Asia"], "🌍"]
      ],
      regions: [
        ["¿Qué archipiélagos pertenecen a España?", "Baleares y Canarias", ["Galápagos y Malvinas", "Azores y Madeira"], "🏝️"],
        ["¿Cuál es la montaña más alta de España?", "El Teide (Tenerife)", ["El Mulhacén", "El Aneto"], "🌋"],
        ["¿Cuál es el río más largo que nace en España?", "El Tajo", ["El Ebro", "El Duero"], "🌊"],
        ["¿Qué cordillera separa España de Francia?", "Los Pirineos", ["Los Andes", "Los Alpes"], "⛰️"],
        ["¿Qué meseta ocupa el centro de la península?", "La Meseta Central", ["La Pampa", "El Altiplano"], "🧭"]
      ],
      history: [
        ["¿En qué año se aprobó la Constitución española vigente?", "1978", ["1810", "1492"], "📜"],
        ["¿Qué día se celebra el Día de la Constitución?", "6 de diciembre", ["12 de octubre", "2 de mayo"], "📅"],
        ["¿Qué pueblo dejó acueductos como el de Segovia?", "Los romanos", ["Los mayas", "Los vikingos"], "🏛️"],
        ["¿Qué monumento andalusí está en Granada?", "La Alhambra", ["La Sagrada Familia", "El Escorial"], "🕌"],
        ["¿Qué pintor pintó 'Las Meninas'?", "Diego Velázquez", ["Pablo Picasso", "Salvador Dalí"], "🎨"]
      ]
    }
  },
  xx: {
    name: "Otro país",
    flag: "conic-gradient(#ff6b4a 0 25%, #f9b700 0 50%, #2bb673 0 75%, #2d7ff9 0)",
    grades: ["Preescolar", "1.º", "2.º", "3.º", "4.º", "5.º", "6.º"],
    gradeSuffix: ["", "de primaria", "de primaria", "de primaria", "de primaria", "de primaria", "de primaria"],
    framework: "Contenidos comunes de los currículos de primaria de Iberoamérica",
    subjects: { mat: "Matemáticas", ing: "Inglés", len: "Lengua", cie: "Ciencias Naturales", soc: "Ciencias Sociales", tec: "Tecnología" },
    quiz: {
      symbols: [
        ["¿Para qué sirve la bandera de un país?", "Para representar e identificar al país", ["Para decorar las casas", "Para jugar fútbol"], "🏳️"],
        ["¿Qué es un himno nacional?", "Una canción que representa al país", ["Un baile típico", "Una comida"], "🎵"],
        ["¿Qué es un escudo nacional?", "Un emblema con símbolos del país", ["Una armadura", "Un juguete"], "🛡️"],
        ["¿Cómo debemos tratar los símbolos patrios?", "Con respeto", ["Con burlas", "Da igual"], "🤝"]
      ],
      capital: [
        ["¿Qué es la capital de un país?", "La ciudad donde está el gobierno nacional", ["La ciudad más pequeña", "Un pueblo de la playa"], "🏙️"],
        ["¿Cuál es la capital de Brasil?", "Brasilia", ["Río de Janeiro", "São Paulo"], "🇧🇷"],
        ["¿Cuál es la capital de Venezuela?", "Caracas", ["Maracaibo", "Valencia"], "🏙️"],
        ["¿Para qué sirve la moneda de un país?", "Para comprar y vender cosas", ["Para decorar", "Para jugar"], "💰"]
      ],
      regions: [
        ["¿Qué es una región natural?", "Una zona con clima y paisaje parecidos", ["Una ciudad grande", "Un parque de juegos"], "🧭"],
        ["¿Qué cordillera recorre Sudamérica de norte a sur?", "Los Andes", ["Los Alpes", "El Himalaya"], "⛰️"],
        ["¿Cuál es la selva tropical más grande del mundo?", "La Amazonía", ["La selva Negra", "El Sahara"], "🌳"],
        ["¿Qué es una costa?", "La zona de tierra junto al mar", ["La cima de una montaña", "El centro de un desierto"], "🏖️"]
      ],
      history: [
        ["¿Quién llegó a América en 1492?", "Cristóbal Colón", ["Simón Bolívar", "Marco Polo"], "⛵"],
        ["¿Qué pueblo construyó Machu Picchu?", "Los incas", ["Los aztecas", "Los romanos"], "🏛️"],
        ["¿Quién es llamado 'El Libertador' en Sudamérica?", "Simón Bolívar", ["Napoleón", "Cristóbal Colón"], "🎖️"],
        ["¿Qué significa independencia?", "Que un país se gobierna a sí mismo", ["Que un país no tiene leyes", "Que un país es muy grande"], "🎉"]
      ]
    }
  }
};
