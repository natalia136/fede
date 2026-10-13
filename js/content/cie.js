/* Contenido adicional: Ciencias Naturales */
window.CURRICULUM.extend({
  subject: "cie",
  banks: {
    Q: {
      // ---------- Preescolar (5 años)
      cie_g0_cuerpo: [
        ["¿Con qué miras?", "Con los ojos", ["Con las orejas", "Con los pies", "Con la nariz"], "👀"],
        ["¿Con qué escuchas?", "Con las orejas", ["Con las manos", "Con los ojos", "Con las rodillas"], "👂"],
        ["¿Con qué hueles una flor?", "Con la nariz", ["Con el codo", "Con los pies", "Con el pelo"], "👃"],
        ["¿Con qué comes?", "Con la boca", ["Con la oreja", "Con la nariz", "Con la rodilla"], "👄"],
        ["¿Con qué caminas?", "Con los pies", ["Con las manos", "Con la cabeza", "Con las orejas"], "🦶"],
        ["¿Con qué agarras un juguete?", "Con las manos", ["Con las orejas", "Con la nariz", "Con el ombligo"], "✋"],
        ["¿Cuántos dedos tiene una mano?", "5", ["3", "10", "2"], "🖐️"],
        ["¿Cuántos ojos tienes?", "2", ["1", "3", "4"], "👀"],
        ["¿Qué tienes en la boca para morder?", "Dientes", ["Uñas", "Pestañas", "Cejas"], "🦷"],
        ["¿Dónde crece tu pelo?", "En la cabeza", ["En la rodilla", "En la lengua", "En los dientes"], "💇"],
        ["¿Qué parte une la cabeza con el cuerpo?", "El cuello", ["El codo", "El tobillo", "La rodilla"], "🧣"],
        ["¿Qué doblas para sentarte?", "Las rodillas", ["Las orejas", "La nariz", "Las cejas"], "🦵"],
        ["¿Con qué sientes el sabor de la comida?", "Con la lengua", ["Con el pelo", "Con las uñas", "Con los codos"], "👅"]
      ],
      cie_g0_sonidos: [
        ["¿Qué animal dice «guau guau»?", "🐶 El perro", ["🐱 El gato", "🐄 La vaca", "🐑 La oveja"], "🔊"],
        ["¿Qué animal dice «miau»?", "🐱 El gato", ["🐶 El perro", "🐷 El cerdo", "🦆 El pato"], "🔊"],
        ["¿Qué animal dice «muuu»?", "🐄 La vaca", ["🐔 La gallina", "🐸 La rana", "🐱 El gato"], "🔊"],
        ["¿Qué animal dice «beee»?", "🐑 La oveja", ["🐶 El perro", "🦁 El león", "🐝 La abeja"], "🔊"],
        ["¿Qué animal dice «cua cua»?", "🦆 El pato", ["🐄 La vaca", "🐴 El caballo", "🐷 El cerdo"], "🔊"],
        ["¿Qué animal canta «quiquiriquí» al amanecer?", "🐓 El gallo", ["🦉 El búho", "🐸 La rana", "🐑 La oveja"], "🌅"],
        ["¿Qué animal dice «oinc oinc»?", "🐷 El cerdo", ["🐱 El gato", "🐦 El pajarito", "🐄 La vaca"], "🔊"],
        ["¿Qué animal dice «croac» junto al charco?", "🐸 La rana", ["🐶 El perro", "🐔 La gallina", "🐴 El caballo"], "💧"],
        ["¿Quién dice «pío pío»?", "🐥 El pollito", ["🦁 El león", "🐄 La vaca", "🐷 El cerdo"], "🔊"],
        ["¿Qué animal hace «bzzz» al volar?", "🐝 La abeja", ["🐟 El pez", "🐢 La tortuga", "🐑 La oveja"], "🌼"],
        ["¿Qué animal ruge muy fuerte?", "🦁 El león", ["🐰 El conejo", "🐟 El pez", "🐌 El caracol"], "🔊"],
        ["¿Qué animal relincha?", "🐴 El caballo", ["🐱 El gato", "🦆 El pato", "🐝 La abeja"], "🔊"],
        ["¿Qué animal rebuzna «i-aaa»?", "🫏 El burro", ["🐸 La rana", "🐔 La gallina", "🐶 El perro"], "🔊"],
        ["¿Qué ave dice «uu-uu» de noche?", "🦉 El búho", ["🐓 El gallo", "🦆 El pato", "🐥 El pollito"], "🌙"]
      ],
      cie_g0_clima: [
        ["Hace sol y calor. ¿Qué te pones?", "🧢 Gorra y protector solar", ["🧤 Guantes de lana", "🧣 Bufanda gruesa", "🥾 Botas de nieve"], "☀️"],
        ["Está lloviendo. ¿Qué usas?", "☂️ Paraguas", ["🕶️ Solo gafas de sol", "🩴 Chanclas de playa", "🎈 Un globo"], "🌧️"],
        ["¿Qué cae de las nubes cuando llueve?", "💧 Agua", ["🍬 Dulces", "🪨 Piedras grandes", "🧸 Juguetes"], "☁️"],
        ["Hace mucho frío. ¿Qué te pones?", "🧥 Abrigo y bufanda", ["👙 Traje de baño", "🩳 Pantaloneta", "🩴 Chanclas"], "🥶"],
        ["Sale el Sol mientras llueve. ¿Qué puede aparecer?", "🌈 Un arcoíris", ["⛄ Un muñeco de nieve", "🌋 Un volcán", "🌑 La noche"], "🌦️"],
        ["¿Qué mueve las hojas de los árboles y las cometas?", "🌬️ El viento", ["🔥 El fuego", "🧊 El hielo", "🌑 La sombra"], "🪁"],
        ["¿Cómo está el cielo con muchas nubes grises?", "Nublado", ["Despejado", "Estrellado", "Con arcoíris"], "☁️"],
        ["¿Qué cae del cielo cuando hace muchísimo frío?", "❄️ Nieve", ["🌸 Flores", "🍃 Hojas verdes", "🔥 Chispas"], "🏔️"],
        ["En una tormenta, ¿qué ves antes de oír el trueno?", "⚡ Un rayo", ["🌈 Un arcoíris", "⭐ Una estrella fugaz", "🎆 Fuegos artificiales"], "⛈️"],
        ["Hay una tormenta con rayos. ¿Dónde estás más seguro?", "🏠 Dentro de casa", ["🌳 Debajo de un árbol", "🏊 En la piscina", "⛰️ Arriba de una colina"], "⛈️"],
        ["¿Qué nos da el Sol?", "Luz y calor", ["Lluvia", "Nieve", "Frío"], "☀️"],
        ["Hace mucho calor. ¿Qué es bueno tomar?", "💧 Agua", ["🍲 Sopa hirviendo", "🧂 Sal", "🍬 Solo dulces"], "🥵"]
      ],
      cie_g0_higiene: [
        ["¿Cuándo te lavas las manos?", "Antes de comer y después de ir al baño", ["Nunca", "Solo en tu cumpleaños", "Solo cuando están limpias"], "🧼"],
        ["¿Con qué te lavas los dientes?", "🪥 Cepillo y crema dental", ["🧽 Esponja de cocina", "🖍️ Crayones", "🪮 Peine"], "🦷"],
        ["¿Qué usas para limpiarte la nariz?", "🧻 Un pañuelo", ["👕 La camiseta", "📄 Tu cuaderno", "🧸 Tu peluche"], "🤧"],
        ["Al toser, ¿qué haces?", "Me tapo con el codo", ["Toso sobre la comida", "Toso en la cara de un amigo", "Grito muy fuerte"], "😷"],
        ["¿Qué te ayuda a crecer fuerte y con energía?", "Dormir bien", ["No dormir nunca", "Ver pantallas toda la noche", "Comer solo dulces"], "😴"],
        ["¿Qué bebida es mejor cuando tienes sed?", "💧 Agua", ["🥤 Gaseosa", "☕ Café", "🧋 Batido con mucha azúcar"], "🚰"],
        ["¿Para qué nos bañamos?", "Para quitar la suciedad y los gérmenes", ["Para ensuciarnos", "Para tener frío", "Para despeinarnos"], "🛁"],
        ["¿Qué se corta cuando está muy largo?", "💅 Las uñas", ["👀 Las pestañas", "🦷 Los dientes", "👂 Las orejas"], "✂️"],
        ["¿Qué alimento es más sano?", "🍎 Una fruta", ["🍭 Un caramelo", "🍟 Papas fritas", "🍩 Una rosquilla"], "🥗"],
        ["¿Qué es bueno para tu cuerpo?", "🏃 Correr y jugar", ["🛋️ Estar sentado todo el día", "📺 Ver televisión sin parar", "🍬 Comer dulces sin parar"], "⚽"],
        ["¿Con qué te secas después de bañarte?", "Con una toalla", ["Con una almohada", "Con un libro", "Con una cuchara"], "🧺"],
        ["¿Cuándo te cepillas los dientes?", "Después de comer y antes de dormir", ["Solo una vez al año", "Nunca", "Solo cuando duelen"], "🪥"]
      ],

      // ---------- 1.º
      cie_g1_necesidades: [
        ["¿Qué necesitan todos los seres vivos?", "Agua, alimento y aire", ["Juguetes y dulces", "Televisión", "Ropa de colores"], "🌍"],
        ["¿Qué necesitan las plantas para hacer su alimento?", "Luz del Sol, agua y aire", ["Oscuridad total", "Leche", "Música fuerte"], "🌱"],
        ["¿Qué gas del aire necesitamos para respirar?", "Oxígeno", ["Humo", "Gas de cocina", "Helio"], "🫁"],
        ["¿Para qué necesitan refugio los animales?", "Para protegerse del frío, la lluvia y los peligros", ["Para ver televisión", "Para guardar dinero", "Para jugar videojuegos"], "🏠"],
        ["Una planta que no recibe agua…", "Se marchita", ["Crece más rápido", "Da más flores", "Se vuelve azul"], "🥀"],
        ["¿De dónde toman agua los animales salvajes?", "De ríos, lagos y charcos", ["De la llave de la cocina", "De botellas", "De las piedras secas"], "🦌"],
        ["¿Qué hacen todos los seres vivos?", "Nacen, crecen, se reproducen y mueren", ["Nunca cambian", "Solo duermen", "Viven para siempre"], "🔄"],
        ["¿Cuál NO es un ser vivo?", "Una piedra", ["Un árbol", "Una hormiga", "Un hongo"], "🪨"],
        ["¿Cuál es un ser vivo?", "Un caracol", ["Una silla", "Una nube", "Un carro"], "🐌"],
        ["¿Por qué comemos?", "Para tener energía y crecer", ["Para tener sueño siempre", "Para no respirar", "Para dejar de crecer"], "🍽️"],
        ["Un pez necesita vivir…", "En el agua", ["Fuera del agua", "En la arena seca", "En un árbol"], "🐟"],
        ["¿Qué le pasa a un ser vivo si no come por mucho tiempo?", "Se debilita y puede morir", ["Se vuelve más fuerte", "Crece más", "No le pasa nada"], "⚠️"]
      ],
      cie_g1_cuidado: [
        ["¿Cuánto tiempo debes frotar las manos con jabón?", "Unos 20 segundos", ["Un segundo", "Una hora", "No hace falta jabón"], "🧼", "Cantar «Feliz cumpleaños» dos veces dura unos 20 segundos."],
        ["¿Qué te pones para montar en bicicleta?", "Un casco", ["Unas chanclas", "Una corona", "Unas gafas de buceo"], "🚲"],
        ["¿Qué debes hacer antes de comer una fruta?", "Lavarla con agua", ["Tirarla al piso", "Ponerle arena", "Guardarla en el bolsillo"], "🍎"],
        ["¿Qué nos protegen de algunas enfermedades?", "Las vacunas", ["Los dulces", "Los videojuegos", "Las gaseosas"], "💉"],
        ["¿Cuántas horas debe dormir un niño de tu edad cada noche?", "Entre 9 y 12 horas", ["2 horas", "5 horas", "20 horas"], "😴"],
        ["¿Quién te puede dar un medicamento?", "Un adulto responsable o el médico", ["Cualquier amigo", "Nadie, lo tomas solo", "Un desconocido"], "💊"],
        ["Para cruzar la calle debes…", "Mirar a ambos lados y tomar la mano de un adulto", ["Correr sin mirar", "Cruzar con el semáforo en rojo", "Ir jugando con el balón"], "🚦"],
        ["¿Qué ayuda a que tus huesos y músculos estén fuertes?", "Hacer ejercicio y comer bien", ["Estar acostado todo el día", "Comer solo dulces", "No tomar agua"], "💪"],
        ["Si ves la pantalla mucho rato, es bueno…", "Descansar los ojos mirando lejos", ["Acercarte más a la pantalla", "Frotarte los ojos fuerte", "Apagar la luz del cuarto"], "📱"],
        ["¿Qué te proteges con el protector solar?", "La piel", ["El pelo", "Las uñas", "Los dientes"], "🧴"],
        ["¿Cómo debes sentarte para leer y escribir?", "Con la espalda recta", ["Acostado boca abajo", "Doblado hacia un lado", "De cabeza"], "🪑"],
        ["Si te cortas un poco, lo primero es…", "Lavar la herida y avisar a un adulto", ["Ponerle tierra", "Esconderla", "Morderla"], "🩹"]
      ],
      cie_g1_estaciones: [
        ["¿En qué estación se caen las hojas de muchos árboles?", "Otoño", ["Primavera", "Verano", "En ninguna"], "🍂"],
        ["¿En qué estación nacen muchas flores?", "Primavera", ["Otoño", "Invierno", "En ninguna"], "🌸"],
        ["¿Qué estación es la más calurosa?", "Verano", ["Invierno", "Otoño", "Primavera"], "🌞"],
        ["¿Qué estación es la más fría?", "Invierno", ["Verano", "Primavera", "Otoño"], "❄️"],
        ["¿Cuántas estaciones tiene el año en países como España o Argentina?", "Cuatro", ["Dos", "Seis", "Diez"], "🗓️"],
        ["En países cerca del ecuador, como Colombia, hay temporadas…", "De lluvias y secas", ["De nieve todo el año", "Solo de otoño", "Sin clima"], "🌦️"],
        ["Cuando en España es invierno, en Argentina es…", "Verano", ["Invierno", "Otoño", "Primavera"], "🌎", "El norte y el sur del planeta tienen estaciones opuestas."],
        ["¿Cuántos meses tiene un año?", "12", ["10", "7", "24"], "📅"],
        ["¿Qué instrumento nos dice si hace frío o calor?", "El termómetro", ["La regla", "El reloj", "La balanza"], "🌡️"],
        ["En invierno, en lugares muy fríos, el agua de los lagos puede…", "Congelarse", ["Hervir", "Volverse dulce", "Volverse leche"], "🧊"],
        ["En la temporada seca…", "Llueve muy poco", ["Llueve todos los días", "Nieva en la playa", "Los ríos crecen mucho"], "🏜️"],
        ["¿Qué ropa usamos cuando hace calor?", "Ropa ligera y fresca", ["Abrigo grueso", "Guantes de lana", "Gorro de nieve"], "👕"]
      ],

      // ---------- 2.º
      cie_g2_vertebrados: [
        ["¿Qué tienen los mamíferos?", "Pelo, y sus crías toman leche", ["Plumas", "Escamas y aletas", "Branquias"], "🐄"],
        ["¿Qué cubre el cuerpo de las aves?", "Plumas", ["Pelo", "Escamas", "Piel húmeda"], "🐦"],
        ["¿Con qué respiran los peces?", "Con branquias", ["Con pulmones", "Con las aletas", "Con la cola"], "🐟"],
        ["La ballena es un…", "Mamífero", ["Pez", "Anfibio", "Reptil"], "🐋", "Respira con pulmones y alimenta a su cría con leche."],
        ["El murciélago vuela, pero es un…", "Mamífero", ["Ave", "Insecto", "Reptil"], "🦇"],
        ["¿Qué animal es un anfibio?", "La rana", ["La tortuga", "El tiburón", "La gallina"], "🐸"],
        ["¿Qué animal es un reptil?", "El cocodrilo", ["La rana", "El delfín", "La paloma"], "🐊"],
        ["Los anfibios tienen la piel…", "Húmeda y sin escamas", ["Cubierta de plumas", "Cubierta de pelo", "Dura y seca"], "💧"],
        ["La piel de los reptiles está cubierta de…", "Escamas secas", ["Plumas", "Pelo", "Piel húmeda"], "🦎"],
        ["¿Qué ave no puede volar pero corre muy rápido?", "El avestruz", ["El colibrí", "El águila", "La golondrina"], "🪶"],
        ["¿Qué tienen todos los vertebrados?", "Columna vertebral", ["Alas", "Ocho patas", "Concha"], "🦴"],
        ["El ornitorrinco es un mamífero muy raro porque…", "Pone huevos", ["Tiene plumas", "Respira con branquias", "No tiene pelo"], "🦆"],
        ["El pingüino es un…", "Ave", ["Mamífero", "Pez", "Anfibio"], "🐧"]
      ],
      cie_g2_fotosintesis: [
        ["¿Cómo consiguen su alimento las plantas?", "Lo fabrican ellas mismas con la luz", ["Lo compran", "Comen piedras", "Se lo dan los animales"], "🌿"],
        ["¿Cómo se llama el proceso con el que las plantas fabrican su alimento?", "Fotosíntesis", ["Digestión", "Evaporación", "Metamorfosis"], "☀️"],
        ["¿Qué sustancia verde de las hojas atrapa la luz?", "La clorofila", ["La savia", "El polen", "La resina"], "🍃"],
        ["¿Qué gas toman las plantas del aire para la fotosíntesis?", "Dióxido de carbono", ["Oxígeno", "Helio", "Humo de perfume"], "🌬️"],
        ["¿Qué gas sueltan las plantas al hacer la fotosíntesis?", "Oxígeno", ["Dióxido de carbono", "Humo", "Helio"], "🫧"],
        ["¿Por dónde absorben agua las plantas?", "Por las raíces", ["Por las flores", "Por los frutos", "Por las semillas"], "💧"],
        ["¿Qué le pasa a una planta que pasa muchos días en un cuarto oscuro?", "Se pone pálida y débil", ["Se vuelve más verde", "Crece más fuerte", "Da más frutos"], "🌑"],
        ["¿Hacia dónde crecen las plantas que están junto a una ventana?", "Hacia la luz", ["Hacia la pared", "Hacia abajo", "En círculos"], "🪟"],
        ["¿Por qué son importantes las plantas para nosotros?", "Producen oxígeno y alimentos", ["Producen plástico", "Nos quitan el aire", "Apagan el Sol"], "🌳"],
        ["¿Qué parte de la planta hace la mayor parte de la fotosíntesis?", "Las hojas", ["Las raíces", "Las semillas", "Los pétalos"], "🍂"],
        ["¿Qué parte lleva el agua desde la raíz hasta las hojas?", "El tallo", ["La flor", "El fruto", "La semilla"], "🌾"],
        ["El azúcar que fabrica la planta le sirve para…", "Crecer y tener energía", ["Atraer imanes", "Caminar", "Hacer ruido"], "🍬"]
      ],
      cie_g2_luz: [
        ["¿Qué necesitamos para ver los objetos?", "Luz", ["Oscuridad", "Ruido", "Viento"], "💡"],
        ["¿Cuál es la principal fuente de luz natural?", "El Sol", ["La Luna", "Una lámpara", "Un espejo"], "☀️"],
        ["¿Cómo se forma una sombra?", "Un objeto tapa el paso de la luz", ["La luz atraviesa el objeto", "El objeto brilla", "El objeto se moja"], "👤"],
        ["La luz viaja en…", "Línea recta", ["Zigzag", "Círculos", "Espiral"], "➡️"],
        ["Un objeto que deja pasar la luz y se ve claro a través de él, como el vidrio de una ventana, es…", "Transparente", ["Opaco", "Translúcido", "Oscuro"], "🪟"],
        ["Un objeto que no deja pasar la luz, como una puerta de madera, es…", "Opaco", ["Transparente", "Translúcido", "Brillante"], "🚪"],
        ["El papel de seda deja pasar un poco de luz, pero no se ve claro a través de él. Es…", "Translúcido", ["Opaco", "Transparente", "Invisible"], "📃"],
        ["¿A qué hora del día tu sombra es más corta?", "Cerca del mediodía", ["Al amanecer", "Al atardecer", "Justo al salir el Sol"], "🕛"],
        ["Si acercas la linterna al objeto, la sombra se hace…", "Más grande", ["Más pequeña", "De colores", "Invisible"], "🔦"],
        ["¿Qué objeto refleja la luz y te deja ver tu cara?", "Un espejo", ["Una piedra", "Una hoja de papel negro", "Una esponja"], "🪞"],
        ["¿Qué se forma cuando la luz del Sol atraviesa gotas de lluvia?", "Un arcoíris", ["Una sombra", "Un trueno", "Un eclipse"], "🌈"],
        ["¿Por qué no debes mirar el Sol directamente?", "Porque puede dañar tus ojos", ["Porque se apaga", "Porque se enoja", "No pasa nada"], "😎"]
      ],
      cie_g2_sonido: [
        ["¿Cómo se produce el sonido?", "Cuando algo vibra", ["Cuando algo se congela", "Cuando hay luz", "Cuando algo se pinta"], "🎸"],
        ["¿Por dónde viaja el sonido?", "Por el aire, el agua y los sólidos", ["Solo por el aire", "Solo por el agua", "No viaja"], "🌬️"],
        ["¿Hay sonido en el espacio, donde no hay aire?", "No, porque no hay aire que vibre", ["Sí, mucho", "Solo de noche", "Solo cerca del Sol"], "🚀"],
        ["El rugido de un león es un sonido…", "Fuerte", ["Suave", "Silencioso", "Invisible"], "🦁"],
        ["El canto de un pajarito es un sonido…", "Agudo", ["Grave", "Mudo", "Oscuro"], "🐦"],
        ["El sonido de un tambor grande es…", "Grave", ["Agudo", "Mudo", "Brillante"], "🥁"],
        ["¿Qué es el eco?", "Un sonido que rebota y vuelve", ["Un tipo de luz", "Un instrumento", "Un animal"], "🏔️"],
        ["¿Qué animal usa el eco para orientarse en la oscuridad?", "El murciélago", ["La vaca", "La gallina", "El caracol"], "🦇"],
        ["¿Qué protege tus oídos de ruidos muy fuertes?", "Protectores para los oídos", ["Gafas de sol", "Guantes", "Un sombrero"], "🎧"],
        ["Si pones la mano en tu garganta al hablar, sientes…", "Una vibración", ["Frío", "Agua", "Nada"], "🗣️"],
        ["Una cuerda de guitarra más delgada suena más…", "Aguda", ["Grave", "Silenciosa", "Oscura"], "🎸"],
        ["El ruido muy fuerte por mucho tiempo puede…", "Dañar la audición", ["Mejorar la vista", "Hacernos crecer", "Curar un resfriado"], "🔊"]
      ],
      cie_g2_mezclas: [
        ["¿Qué es una mezcla?", "La unión de dos o más materiales", ["Un solo material puro", "Un tipo de animal", "Una planta"], "🥣"],
        ["En una mezcla de agua con arena…", "Se ven los dos materiales", ["La arena desaparece", "Se forma leche", "El agua se vuelve sólida"], "🏖️"],
        ["¿Qué pasa con el azúcar al echarla en agua y revolver?", "Se disuelve", ["Se vuelve piedra", "Se convierte en sal", "Se vuelve gas"], "🍬"],
        ["¿Con qué separas piedritas de la arena?", "Con un colador (tamiz)", ["Con un termómetro", "Con una linterna", "Con un espejo"], "🪨"],
        ["El aceite y el agua…", "No se mezclan: el aceite flota", ["Se mezclan totalmente", "Se vuelven sólidos", "Se vuelven rojos"], "🫗"],
        ["Una ensalada de frutas es una mezcla…", "En la que se ven los ingredientes", ["En la que no se ve nada", "Que es un solo material", "Que es un gas"], "🥗"],
        ["¿Cuál es una mezcla?", "Agua con sal", ["Un trozo de oro puro", "Un cubo de hielo", "Una gota de agua pura"], "🧂"],
        ["Para separar la arena del agua usas…", "Un filtro de papel", ["Un imán", "Una lupa", "Un reloj"], "☕"],
        ["El aire que respiramos es…", "Una mezcla de gases", ["Un solo gas", "Un líquido", "Un sólido"], "🌬️"],
        ["¿Qué pasa si dejas al sol un plato con agua salada?", "El agua se evapora y queda la sal", ["La sal se evapora", "El agua se vuelve dulce", "Se congela"], "☀️"],
        ["¿Qué se disuelve en agua tibia?", "El azúcar", ["La arena", "Las piedras", "Los clavos"], "🫖"],
        ["En un refresco en polvo mezclado con agua…", "No se distinguen las partes", ["Se ven piedras", "El polvo siempre flota", "El agua desaparece"], "🧃"]
      ],

      // ---------- 3.º
      cie_g3_suelo: [
        ["¿Qué capa del suelo es oscura y tiene restos de plantas y animales?", "El humus (capa de arriba)", ["La roca madre", "El núcleo de la Tierra", "La arena del fondo"], "🟫"],
        ["¿Qué animal ayuda a airear el suelo haciendo túneles?", "La lombriz de tierra", ["El águila", "El delfín", "La mariposa"], "🪱"],
        ["¿De qué está formado el suelo?", "De rocas pequeñas, minerales, agua, aire y restos de seres vivos", ["Solo de agua", "Solo de plástico", "Solo de hielo"], "🌍"],
        ["¿Cómo se forman las rocas ígneas?", "Cuando el magma o la lava se enfría", ["Con hojas secas", "Con capas de nieve", "Con huesos de animales"], "🌋"],
        ["Las rocas sedimentarias se forman…", "Con capas de arena y lodo que se compactan", ["Cuando la lava se enfría rápido", "Dentro del Sol", "Con plástico derretido"], "🏜️"],
        ["El mármol es una roca…", "Metamórfica", ["Ígnea", "Sedimentaria", "Lunar"], "🏛️", "Se forma cuando la roca caliza recibe mucho calor y presión."],
        ["La piedra pómez flota en el agua porque…", "Tiene muchos huequitos con aire", ["Es de plástico", "Es un imán", "Está mojada"], "🫧"],
        ["¿Qué es la erosión?", "El desgaste de rocas y suelo por el agua y el viento", ["Un tipo de volcán", "Una lluvia de estrellas", "La siembra de árboles"], "🌬️"],
        ["¿Qué ayuda a evitar la erosión del suelo?", "Las raíces de las plantas y los árboles", ["Talar los bosques", "Quemar el pasto", "Dejar la tierra sin plantas"], "🌳"],
        ["¿Qué tipo de suelo retiene mucha agua y es pegajoso?", "Arcilloso", ["Arenoso", "Pedregoso"], "🏺"],
        ["¿Qué tipo de suelo deja pasar el agua muy rápido?", "Arenoso", ["Arcilloso", "Humífero"], "⏳"],
        ["¿Qué es el compost?", "Abono hecho con restos orgánicos", ["Un tipo de roca", "Basura plástica", "Un metal"], "🍂"],
        ["¿Cuál es el mineral más duro de la naturaleza?", "El diamante", ["La tiza", "El yeso", "El talco"], "💎"]
      ],
      cie_g3_imanes: [
        ["¿Qué metal atrae un imán?", "El hierro", ["El aluminio", "El cobre", "El oro"], "🧲"],
        ["¿Cómo se llaman los extremos de un imán?", "Polos (norte y sur)", ["Esquinas", "Raíces", "Ruedas"], "🧲"],
        ["Si acercas el polo norte de un imán al polo sur de otro…", "Se atraen", ["Se repelen", "Se derriten", "Cambian de color"], "➕"],
        ["Si acercas dos polos norte…", "Se repelen", ["Se atraen", "Se pegan para siempre", "Brillan"], "↔️"],
        ["¿Qué instrumento usa una aguja imantada para orientarse?", "La brújula", ["El termómetro", "El microscopio", "La balanza"], "🧭"],
        ["¿Hacia dónde apunta la aguja de una brújula?", "Hacia el norte", ["Hacia el Sol", "Hacia abajo", "Hacia donde tú quieras"], "🧭"],
        ["La Tierra se comporta como…", "Un imán gigante", ["Una pila", "Un espejo", "Un globo de aire"], "🌍"],
        ["¿Puede un imán atraer un clip a través de una hoja de papel?", "Sí, su fuerza atraviesa el papel", ["No, nunca", "Solo si el papel está mojado", "Solo de noche"], "📄"],
        ["Si partes un imán en dos, cada pedazo…", "Tiene su propio polo norte y polo sur", ["Pierde sus polos", "Tiene un solo polo", "Se vuelve de madera"], "✂️"],
        ["¿Dónde es más fuerte la fuerza de un imán?", "En los polos", ["En el centro", "En ninguna parte", "Igual en todos lados"], "💪"],
        ["¿Para qué se usan imanes en casa?", "Para mantener cerrada la puerta de la nevera", ["Para calentar la sopa", "Para regar plantas", "Para cortar papel"], "🧊"],
        ["Una lata de aluminio frente a un imán…", "No es atraída", ["Es atraída con fuerza", "Se convierte en imán", "Se derrite"], "🥫"]
      ],
      cie_g3_maquinas: [
        ["¿Qué máquina simple es un balancín (sube y baja)?", "Palanca", ["Polea", "Tornillo", "Rueda"], "⚖️"],
        ["Una rampa para subir una silla de ruedas es un…", "Plano inclinado", ["Polea", "Tornillo", "Cuña"], "♿"],
        ["¿Qué máquina simple usas para subir un balde de un pozo con una cuerda?", "Polea", ["Cuña", "Palanca", "Plano inclinado"], "🪣"],
        ["El hacha que parte la madera funciona como una…", "Cuña", ["Polea", "Rueda", "Balanza"], "🪓"],
        ["Las tijeras son dos…", "Palancas unidas", ["Poleas", "Ruedas", "Rampas"], "✂️"],
        ["¿Para qué sirven las máquinas simples?", "Para hacer un trabajo con menos esfuerzo", ["Para hacer más ruido", "Para gastar más fuerza", "Para nada"], "🛠️"],
        ["Tus dientes incisivos cortan la comida como una…", "Cuña", ["Polea", "Rueda", "Tornillo"], "🦷"],
        ["Tu brazo, al levantar algo, funciona como una…", "Palanca", ["Polea", "Cuña", "Rueda"], "💪"],
        ["El pico del pájaro carpintero abre huecos en la madera como una…", "Cuña", ["Polea", "Rueda", "Balanza"], "🐦"],
        ["La tapa de un frasco que gira para cerrar usa un…", "Tornillo (rosca)", ["Polea", "Cuña", "Balancín"], "🫙"],
        ["Una carretilla funciona como…", "Una palanca con una rueda", ["Una polea", "Una cuña", "Un tornillo"], "🛒"],
        ["Un camino en zigzag para subir una montaña es como un…", "Plano inclinado", ["Polea", "Cuña", "Rueda"], "⛰️"]
      ],
      cie_g3_agua: [
        ["¿A qué temperatura se congela el agua pura?", "0 °C", ["10 °C", "50 °C", "100 °C"], "🧊"],
        ["¿A qué temperatura hierve el agua a nivel del mar?", "100 °C", ["0 °C", "37 °C", "50 °C"], "♨️"],
        ["¿Con qué medimos la temperatura?", "Con un termómetro", ["Con una regla", "Con una balanza", "Con un reloj"], "🌡️"],
        ["¿Cuál es la temperatura normal aproximada del cuerpo humano?", "Unos 37 °C", ["0 °C", "60 °C", "100 °C"], "🤒"],
        ["Cuando el hielo se derrite, pasa de…", "Sólido a líquido", ["Líquido a gas", "Gas a sólido", "Líquido a sólido"], "💧"],
        ["Cuando el agua hierve se convierte en…", "Vapor (gas)", ["Hielo", "Arena", "Sal"], "♨️"],
        ["El vapor que toca un espejo frío forma gotitas. Eso es…", "Condensación", ["Fusión", "Solidificación", "Evaporación"], "🪞"],
        ["El agua de un charco desaparece en un día de sol porque…", "Se evapora", ["Se congela", "Se vuelve piedra", "Se la come la tierra de un bocado"], "☀️"],
        ["El hielo flota en el agua porque…", "Es menos denso que el agua líquida", ["Es más pesado", "Tiene aire de colores", "Es un imán"], "🧊"],
        ["¿En qué estado está el agua de la lluvia?", "Líquido", ["Sólido", "Gaseoso"], "🌧️"],
        ["¿Por qué puede romperse una botella llena de agua en el congelador?", "Porque el hielo ocupa más espacio que el agua", ["Porque el hielo se encoge", "Porque el agua se vuelve gas", "Porque el frío la derrite"], "🍾"],
        ["Si calientas agua, sus partículas se mueven…", "Más rápido", ["Más lento", "No se mueven", "Hacia atrás"], "🔥"],
        ["La temperatura indica…", "Qué tan caliente o frío está algo", ["Cuánto pesa algo", "De qué color es algo", "Cuánto mide algo"], "🌡️"]
      ],
      cie_g3_dientes: [
        ["¿Cuántos dientes de leche tienen los niños?", "20", ["32", "10", "50"], "🦷"],
        ["¿Cuántos dientes permanentes tiene un adulto, contando las muelas del juicio?", "32", ["20", "12", "48"], "😁"],
        ["¿Qué dientes cortan los alimentos?", "Los incisivos", ["Los molares", "Los caninos", "Las muelas del juicio"], "🦷"],
        ["¿Qué dientes puntiagudos desgarran los alimentos?", "Los caninos (colmillos)", ["Los incisivos", "Los molares", "Los premolares"], "🐺"],
        ["¿Qué dientes trituran y muelen la comida?", "Los molares", ["Los incisivos", "Los caninos", "Los labios"], "⚙️"],
        ["¿Qué produce caries en los dientes?", "Mucho azúcar y no cepillarse", ["Tomar agua", "Comer zanahoria", "Usar hilo dental"], "🍬"],
        ["¿Qué alimentos nos dan energía, como el arroz y el pan?", "Los carbohidratos", ["Las vitaminas", "Los minerales", "El agua"], "🍞"],
        ["¿Qué alimentos ayudan a formar músculos, como el huevo, los fríjoles y el pescado?", "Las proteínas", ["Los azúcares", "Las grasas", "Los dulces"], "🥚"],
        ["Las frutas y verduras nos dan sobre todo…", "Vitaminas, minerales y fibra", ["Solo grasa", "Cafeína", "Sal"], "🥦"],
        ["¿Qué mineral de la leche y el queso fortalece huesos y dientes?", "El calcio", ["El oro", "La sal", "El plástico"], "🥛"],
        ["¿Qué debemos beber varias veces al día?", "Agua", ["Gaseosa", "Café", "Bebidas energéticas"], "💧"],
        ["¿Cada cuánto conviene visitar al odontólogo?", "Una o dos veces al año", ["Nunca", "Solo cuando ya duele mucho", "Cada diez años"], "🧑‍⚕️"],
        ["El aceite, la mantequilla y el aguacate tienen sobre todo…", "Grasas", ["Solo agua", "Solo proteínas", "Nada de energía"], "🥑"]
      ],

      // ---------- 4.º
      cie_g4_adaptacion: [
        ["¿Para qué sirven las espinas del cactus?", "Para perder menos agua y protegerse", ["Para volar", "Para nadar", "Para atraer imanes"], "🌵", "Las espinas son hojas transformadas."],
        ["¿Qué guarda el camello en su joroba?", "Grasa", ["Agua", "Arena", "Leche"], "🐪", "La grasa le da energía cuando no encuentra comida."],
        ["¿Qué ayuda al oso polar a soportar el frío?", "Una gruesa capa de grasa y pelo denso", ["Una piel muy delgada", "Sus escamas", "Sus alas"], "🐻‍❄️"],
        ["¿Para qué sirven las orejas grandes del zorro del desierto (fénec)?", "Para soltar calor y oír mejor", ["Para volar", "Para guardar agua", "Para nadar"], "🦊"],
        ["¿Qué es la hibernación?", "Un largo descanso para ahorrar energía en invierno", ["Un viaje a otro lugar", "Cambiar de piel", "Comer más en verano"], "🐻"],
        ["¿Qué es la migración?", "Viajar a otro lugar en ciertas épocas del año", ["Dormir todo el invierno", "Cambiar de color", "Comer piedras"], "🦢"],
        ["El camaleón cambia de color para…", "Camuflarse y comunicarse", ["Hacer fotosíntesis", "Volar", "Respirar bajo el agua"], "🦎"],
        ["Las patas palmeadas del pato le sirven para…", "Nadar", ["Trepar árboles", "Cavar túneles", "Cazar de noche"], "🦆"],
        ["Los búhos tienen ojos grandes para…", "Ver en la oscuridad", ["Ver bajo el agua", "Asustar al Sol", "Comer más"], "🦉"],
        ["El cuello largo de la jirafa le permite…", "Comer hojas altas de los árboles", ["Nadar rápido", "Excavar", "Volar"], "🦒"],
        ["Las raíces de los manglares que salen del agua les ayudan a…", "Respirar y sostenerse en el lodo", ["Caminar", "Cazar peces", "Hacer ruido"], "🌿"],
        ["Una adaptación es…", "Una característica que ayuda a sobrevivir en un ambiente", ["Un tipo de roca", "Un planeta", "Una enfermedad"], "🧬"],
        ["El pelaje blanco del zorro ártico en invierno le ayuda a…", "Camuflarse en la nieve", ["Calentarse con el Sol", "Nadar más rápido", "Ver de noche"], "❄️"]
      ],
      cie_g4_redes: [
        ["¿Qué es una red alimentaria?", "Varias cadenas alimenticias conectadas", ["Una sola planta", "Una red de pescar", "Un tipo de suelo"], "🕸️"],
        ["En una red alimentaria, un animal puede…", "Comer y ser comido por varios seres vivos", ["Comer siempre un solo alimento", "No comer nunca", "Fabricar su alimento con luz"], "🔀"],
        ["¿Quiénes inician las redes alimentarias en tierra?", "Los productores (plantas)", ["Los carnívoros", "Los descomponedores", "Los omnívoros"], "🌱"],
        ["¿Qué pasa con la energía al pasar de un nivel a otro?", "Gran parte se pierde como calor", ["Aumenta mucho", "Se queda igual", "Se vuelve agua"], "🔥", "Solo cerca del 10 % pasa al siguiente nivel."],
        ["Un depredador tope es…", "Un animal que no tiene depredadores naturales", ["Una planta", "Un hongo", "Un herbívoro pequeño"], "🦅"],
        ["¿Qué pasaría si desaparecieran los descomponedores?", "Se acumularían restos y el suelo perdería nutrientes", ["Habría más nutrientes", "Las plantas crecerían más", "Nada cambiaría"], "🍄"],
        ["El fitoplancton del océano es…", "Un productor", ["Un carnívoro", "Un descomponedor", "Un depredador tope"], "🌊"],
        ["Si se cazan todos los lobos de un bosque, los ciervos…", "Aumentan y pueden acabar con las plantas", ["Desaparecen", "Se vuelven carnívoros", "No cambian"], "🦌"],
        ["Un ratón come semillas y un búho come ratones. El búho es…", "Consumidor secundario", ["Productor", "Consumidor primario", "Descomponedor"], "🦉"],
        ["¿De dónde viene la energía de casi todas las redes alimentarias?", "Del Sol", ["De la Luna", "Del viento", "De las rocas"], "☀️"],
        ["Los animales que comen animales muertos, como el buitre, se llaman…", "Carroñeros", ["Productores", "Herbívoros", "Polinizadores"], "🦅"],
        ["En un ecosistema, normalmente hay…", "Más productores que carnívoros", ["Más carnívoros que plantas", "El mismo número de todos", "Solo carnívoros"], "🔺"]
      ],
      cie_g4_circuitos: [
        ["¿Qué necesita un circuito eléctrico simple?", "Pila, cables, bombillo e interruptor", ["Solo un cable", "Agua y sal", "Un imán y una piedra"], "🔋"],
        ["Si el circuito está abierto, el bombillo…", "Se apaga", ["Brilla más", "Cambia de color", "Suena"], "💡"],
        ["¿Qué hace el interruptor?", "Abre o cierra el circuito", ["Produce electricidad", "Guarda agua", "Mide la temperatura"], "🎚️"],
        ["¿Qué parte del circuito da la energía?", "La pila o batería", ["El bombillo", "El interruptor", "La cinta"], "🔋"],
        ["¿Por qué los cables tienen una cubierta de plástico?", "Porque el plástico es aislante y nos protege", ["Para que se vean bonitos", "Porque conduce mejor", "Para que pesen más"], "🔌"],
        ["¿Qué material es buen conductor de la electricidad?", "El cobre", ["El caucho", "La madera seca", "El vidrio"], "🪙"],
        ["¿Por qué es peligroso tocar aparatos eléctricos con las manos mojadas?", "Porque el agua con sales conduce la electricidad", ["Porque el agua apaga la electricidad", "Porque el agua es aislante", "No es peligroso"], "⚠️"],
        ["En un circuito en serie, si se daña un bombillo…", "Se apagan todos", ["Los demás brillan más", "No pasa nada", "Se enciende otro"], "🎄"],
        ["En un circuito en paralelo, si se daña un bombillo…", "Los demás siguen encendidos", ["Se apagan todos", "La pila explota", "El cable se derrite"], "🏠"],
        ["¿Qué transformación de energía hace un bombillo?", "Eléctrica en luz y calor", ["Luz en sonido", "Calor en agua", "Sonido en electricidad"], "💡"],
        ["Los rayos de una tormenta son…", "Descargas eléctricas", ["Luz de la Luna", "Fuegos artificiales", "Imanes"], "⚡"],
        ["¿Cómo ahorras electricidad en casa?", "Apagando las luces que no usas", ["Dejando la nevera abierta", "Dejando el televisor siempre encendido", "Encendiendo las luces de día"], "💡"]
      ],
      cie_g4_calor: [
        ["El calor siempre pasa de…", "Lo más caliente a lo más frío", ["Lo más frío a lo más caliente", "Lo pequeño a lo grande", "Lo oscuro a lo claro"], "🔥"],
        ["Una cuchara metálica en la sopa caliente se calienta por…", "Conducción", ["Radiación", "Convección"], "🥄"],
        ["El calor del Sol llega a la Tierra por…", "Radiación", ["Conducción", "Convección"], "☀️", "La radiación puede viajar por el espacio vacío."],
        ["El agua caliente que sube en una olla y la fría que baja forman corrientes de…", "Convección", ["Conducción", "Radiación"], "🍲"],
        ["¿Por qué muchas ollas tienen mangos de plástico o madera?", "Porque son aislantes del calor", ["Porque conducen mejor el calor", "Para que pesen más", "Para que hiervan más rápido"], "🍳"],
        ["¿Qué ropa conserva mejor el calor del cuerpo en invierno?", "La de lana", ["La de papel", "Una camiseta mojada", "Ninguna"], "🧶"],
        ["¿Qué color absorbe más el calor del Sol?", "El negro", ["El blanco", "El plateado", "El amarillo claro"], "🖤"],
        ["Un termo mantiene caliente el chocolate porque…", "Reduce el paso del calor", ["Produce calor", "Tiene fuego dentro", "Es un imán"], "☕"],
        ["Los metales se dilatan con el calor. Eso significa que…", "Aumentan un poco de tamaño", ["Se encogen", "Cambian de color", "Se vuelven gas"], "🛤️"],
        ["El aire caliente de un globo aerostático…", "Sube porque es menos denso", ["Baja porque pesa más", "Se congela", "Se vuelve agua"], "🎈"],
        ["Un metal y una madera están a la misma temperatura, pero el metal se siente más frío porque…", "Conduce el calor más rápido", ["Está más frío de verdad", "Tiene hielo dentro", "La madera produce calor"], "🪵"],
        ["¿Cómo sientes el calor de una fogata sin tocarla?", "Por radiación", ["Por conducción", "Por magnetismo", "Por electricidad"], "🔥"]
      ],
      cie_g4_energia: [
        ["¿Qué es una energía renovable?", "Una que no se agota porque la naturaleza la repone", ["Una que se acaba pronto", "Una que solo existe de noche", "Una que viene del petróleo"], "♻️"],
        ["Los paneles solares transforman la luz del Sol en…", "Electricidad", ["Agua", "Viento", "Petróleo"], "☀️"],
        ["Los aerogeneradores producen electricidad con…", "El viento", ["El carbón", "El petróleo", "El gas"], "🌬️"],
        ["Una central hidroeléctrica usa…", "La fuerza del agua en movimiento", ["El calor de un volcán", "La luz de la Luna", "El petróleo"], "💧"],
        ["El petróleo, el carbón y el gas natural son…", "Combustibles fósiles no renovables", ["Energías renovables", "Recursos infinitos", "Tipos de viento"], "🛢️"],
        ["¿De qué se formaron los combustibles fósiles?", "De restos de seres vivos de hace millones de años", ["De plástico", "De agua de lluvia reciente", "De arena de playa"], "🦕"],
        ["La energía geotérmica aprovecha…", "El calor del interior de la Tierra", ["El frío de los polos", "El viento del mar", "La luz de las estrellas"], "🌋"],
        ["Quemar combustibles fósiles produce…", "Gases que contaminan y calientan el planeta", ["Oxígeno puro", "Agua dulce", "Nada"], "🏭"],
        ["La biomasa es energía que viene de…", "Restos de plantas y residuos orgánicos", ["Rocas", "Imanes", "Metales"], "🌾"],
        ["¿Cuál es una desventaja de la energía solar?", "No produce de noche si no se guarda en baterías", ["Contamina mucho el aire", "Se agota pronto", "Viene del petróleo"], "🌙"],
        ["¿Qué energía tiene un objeto en movimiento?", "Energía cinética", ["Energía química", "Energía nuclear", "Energía luminosa"], "🏃"],
        ["Los alimentos y las pilas guardan energía…", "Química", ["Eólica", "Solar", "Sonora"], "🔋"]
      ],

      // ---------- 5.º
      cie_g5_micro: [
        ["¿Qué es un microorganismo?", "Un ser vivo tan pequeño que solo se ve con microscopio", ["Un animal gigante", "Una piedra pequeña", "Un planeta"], "🔬"],
        ["¿Qué microorganismo hace que el pan sea esponjoso?", "La levadura", ["El virus de la gripe", "La ameba", "El moho negro"], "🍞"],
        ["¿Qué microorganismos se usan para hacer yogur?", "Bacterias", ["Virus", "Amebas", "Algas"], "🥛"],
        ["¿Qué medicamento se descubrió gracias a un hongo?", "La penicilina", ["La aspirina", "La vitamina C", "El jarabe de miel"], "💊"],
        ["¿Los antibióticos sirven contra los virus?", "No, actúan contra bacterias", ["Sí, contra todos los microbios", "Solo contra los resfriados", "Solo de noche"], "🦠"],
        ["¿Qué ayuda a evitar que los microbios nos enfermen?", "Lavarse las manos con jabón", ["No bañarse", "Compartir el cepillo de dientes", "Toser sin taparse"], "🧼"],
        ["¿Cómo nos protegen las vacunas?", "Enseñan al cuerpo a defenderse de un microbio", ["Matan todos los microbios del mundo", "Cambian el color de la piel", "Nos dan energía"], "💉"],
        ["¿Quién observó por primera vez bacterias con un microscopio hecho por él?", "Anton van Leeuwenhoek", ["Isaac Newton", "Neil Armstrong", "Charles Darwin"], "🔭"],
        ["La mancha verde o negra que aparece en el pan viejo es…", "Moho (un hongo)", ["Pintura", "Una planta con flores", "Sal"], "🍞"],
        ["¿Qué microorganismos descomponen los restos en el suelo?", "Bacterias y hongos", ["Virus", "Solo algas", "Ninguno"], "🍂"],
        ["En nuestro intestino viven bacterias que…", "Ayudan a digerir y nos protegen", ["Siempre nos enferman", "No hacen nada", "Fabrican huesos"], "🫃"],
        ["¿Por qué guardamos los alimentos en la nevera?", "El frío hace más lento el crecimiento de microbios", ["El frío mata todos los microbios", "Para que se calienten", "Para que crezca más moho"], "🧊"],
        ["Los virus…", "Solo se multiplican dentro de células vivas", ["Hacen fotosíntesis", "Son animales grandes", "Comen rocas"], "🧫"]
      ],
      cie_g5_repro: [
        ["¿Qué es la reproducción?", "El proceso por el que los seres vivos tienen descendencia", ["Comer alimentos", "Respirar oxígeno", "Dormir"], "👪"],
        ["Los animales que nacen de huevos puestos fuera de la madre son…", "Ovíparos", ["Vivíparos", "Herbívoros", "Productores"], "🥚"],
        ["Los animales que se desarrollan dentro del cuerpo de la madre son…", "Vivíparos", ["Ovíparos", "Productores", "Descomponedores"], "🤰"],
        ["La reproducción sexual necesita…", "Dos células sexuales: una femenina y una masculina", ["Un solo trozo de tallo", "Solo agua", "Una piedra"], "🧬"],
        ["En la reproducción asexual, los hijos son…", "Iguales al progenitor", ["Muy distintos", "De otra especie", "Siempre más grandes"], "👯"],
        ["Una estrella de mar que se parte y cada trozo forma otra estrella se reproduce de forma…", "Asexual (fragmentación)", ["Sexual", "Por semillas", "Ovípara"], "⭐"],
        ["Las bacterias se reproducen dividiéndose en dos. Esto se llama…", "Bipartición", ["Polinización", "Germinación", "Fecundación"], "🦠"],
        ["La unión de un óvulo y un espermatozoide se llama…", "Fecundación", ["Germinación", "Evaporación", "Metamorfosis"], "🔗"],
        ["En muchos peces y en las ranas, la fecundación es…", "Externa (en el agua)", ["Interna", "Por esporas", "Por bipartición"], "🐟"],
        ["Las levaduras se reproducen formando pequeñas yemas. Esto se llama…", "Gemación", ["Polinización", "Fecundación", "Germinación"], "🍞"],
        ["Los helechos y los hongos se reproducen por…", "Esporas", ["Huevos con cáscara", "Leche", "Plumas"], "🍄"],
        ["El tiempo que un mamífero se desarrolla dentro de su madre se llama…", "Gestación", ["Hibernación", "Migración", "Metamorfosis"], "🐘"]
      ],
      cie_g5_ondas: [
        ["¿Aproximadamente a qué velocidad viaja la luz?", "300 000 km por segundo", ["300 km por hora", "1 km por día", "340 metros por segundo"], "💡"],
        ["¿A qué velocidad aproximada viaja el sonido en el aire?", "340 metros por segundo", ["300 000 km por segundo", "1 metro por hora", "10 km por segundo"], "🔊"],
        ["¿Por qué vemos el rayo antes de oír el trueno?", "Porque la luz viaja mucho más rápido que el sonido", ["Porque el trueno ocurre mucho después", "Porque los oídos son lentos", "Porque el sonido viaja más rápido"], "⛈️"],
        ["¿En qué medio viaja más rápido el sonido?", "En los sólidos", ["En el aire", "En el vacío", "No viaja"], "🧱"],
        ["¿Qué es la reflexión de la luz?", "Cuando la luz rebota en una superficie", ["Cuando la luz se apaga", "Cuando la luz se congela", "Cuando la luz suena"], "🪞"],
        ["Un lápiz dentro de un vaso con agua parece quebrado por la…", "Refracción", ["Reflexión", "Evaporación", "Fricción"], "✏️"],
        ["Un prisma separa la luz blanca en…", "Los colores del arcoíris", ["Sombras negras", "Sonidos", "Gotas de agua"], "🌈"],
        ["Vemos roja una manzana porque…", "Refleja la luz roja y absorbe los otros colores", ["Absorbe la luz roja", "Produce su propia luz roja", "Está caliente"], "🍎"],
        ["El tono de un sonido indica si es…", "Agudo o grave", ["Fuerte o suave", "Rápido o lento al viajar", "Caliente o frío"], "🎵"],
        ["La intensidad (volumen) de un sonido se mide en…", "Decibelios", ["Grados", "Kilogramos", "Metros"], "📢"],
        ["¿Qué es la frecuencia de un sonido?", "El número de vibraciones por segundo", ["El color del sonido", "El peso del sonido", "La distancia que recorre"], "〰️"],
        ["Los sonidos tan agudos que los humanos no podemos oír se llaman…", "Ultrasonidos", ["Infrasonidos", "Ecos", "Truenos"], "🐬"]
      ],
      cie_g5_luna: [
        ["¿Cuánto tarda la Luna en completar todas sus fases?", "Unos 29 días y medio", ["Un día", "Un año", "Una semana"], "🌙"],
        ["¿En qué fase casi no vemos la Luna?", "Luna nueva", ["Luna llena", "Cuarto creciente", "Cuarto menguante"], "🌑"],
        ["¿En qué fase vemos toda la cara de la Luna iluminada?", "Luna llena", ["Luna nueva", "Cuarto menguante", "Cuarto creciente"], "🌕"],
        ["Después de la luna nueva, la parte iluminada de la Luna…", "Va creciendo", ["Va disminuyendo", "Desaparece para siempre", "Se vuelve roja"], "🌒"],
        ["¿Por qué brilla la Luna?", "Porque refleja la luz del Sol", ["Porque tiene fuego", "Porque es una estrella", "Porque tiene volcanes encendidos"], "🌕"],
        ["¿Por qué la Luna tiene fases?", "Vemos partes distintas de su lado iluminado mientras gira alrededor de la Tierra", ["La sombra de la Tierra la tapa cada noche", "Las nubes la cubren", "La Luna se apaga"], "🌗", "La sombra de la Tierra solo la cubre durante un eclipse de Luna."],
        ["Un eclipse de Sol ocurre cuando…", "La Luna se pone entre el Sol y la Tierra", ["La Tierra se pone entre el Sol y la Luna", "El Sol se apaga", "Llueve mucho"], "🌘"],
        ["Un eclipse de Luna ocurre cuando…", "La Tierra se pone entre el Sol y la Luna", ["La Luna se pone entre el Sol y la Tierra", "Marte tapa la Luna", "Hay muchas nubes"], "🌑"],
        ["Desde la Tierra siempre vemos…", "La misma cara de la Luna", ["Una cara distinta cada noche", "Solo el lado oscuro", "Los dos lados a la vez"], "🌝"],
        ["¿Qué causa las mareas en el mar?", "La atracción de la Luna (y del Sol)", ["Solo el viento", "Los peces", "Los barcos"], "🌊"],
        ["¿Qué es una galaxia?", "Un enorme grupo de estrellas, gas y polvo", ["Un planeta pequeño", "Una nube de lluvia", "Un cometa"], "🌌"],
        ["¿Cómo se llama nuestra galaxia?", "Vía Láctea", ["Andrómeda", "Osa Mayor", "Orión"], "🌌"],
        ["¿Qué es un satélite natural?", "Un cuerpo que gira alrededor de un planeta, como la Luna", ["Una estrella", "Un cohete", "Un cometa"], "🛰️"]
      ],
      cie_g5_clima: [
        ["¿Qué mide el termómetro?", "La temperatura", ["La lluvia", "El viento", "La presión del aire"], "🌡️"],
        ["¿Qué mide el pluviómetro?", "La cantidad de lluvia", ["La temperatura", "La humedad", "La dirección del viento"], "🌧️"],
        ["¿Qué mide el anemómetro?", "La velocidad del viento", ["La lluvia", "La temperatura", "La presión del aire"], "🌬️"],
        ["¿Qué indica la veleta?", "La dirección del viento", ["La velocidad del viento", "La temperatura", "La lluvia"], "🐓"],
        ["¿Qué mide el barómetro?", "La presión atmosférica", ["La humedad", "La lluvia", "La velocidad del viento"], "📟"],
        ["¿Qué mide el higrómetro?", "La humedad del aire", ["La temperatura del agua", "La presión", "Los sismos"], "💧"],
        ["¿Cuál es la diferencia entre tiempo y clima?", "El tiempo es de un momento; el clima es el promedio de muchos años", ["Son exactamente lo mismo", "El clima cambia cada hora", "El tiempo dura siglos"], "📆"],
        ["¿Qué estudia la meteorología?", "La atmósfera y el tiempo atmosférico", ["Solo los meteoritos", "Las rocas", "Los animales"], "🛰️"],
        ["Mientras más alto subes una montaña, la temperatura…", "Baja", ["Sube", "Siempre es igual"], "🏔️"],
        ["¿Cómo es el clima en las zonas bajas cerca del ecuador?", "Cálido durante todo el año", ["Helado todo el año", "Con nieve en las playas", "Sin luz solar"], "🌴"],
        ["Las nubes se forman cuando el vapor de agua…", "Se enfría y se condensa", ["Se calienta mucho", "Se convierte en arena", "Se congela en el suelo"], "☁️"],
        ["Un huracán es…", "Una tormenta enorme que gira con vientos muy fuertes", ["Un día de mucho sol", "Una lluvia de estrellas", "Un terremoto"], "🌀"],
        ["El fenómeno de El Niño se relaciona con…", "Aguas más cálidas de lo normal en el océano Pacífico", ["Nieve en el desierto del Sahara", "Volcanes en la Luna", "Más días en el año"], "🌊"]
      ],

      // ---------- 6.º
      cie_g6_clasif: [
        ["¿Quién creó el sistema de nombres científicos de dos palabras?", "Carlos Linneo", ["Isaac Newton", "Charles Darwin", "Gregor Mendel"], "📚"],
        ["El nombre científico del ser humano es…", "Homo sapiens", ["Canis lupus", "Felis catus", "Panthera leo"], "🧍"],
        ["¿Cuál es el orden correcto, de la categoría más grande a la más pequeña?", "Reino, filo, clase, orden, familia, género, especie", ["Especie, reino, clase, género", "Clase, reino, especie, filo", "Familia, especie, reino, orden"], "🪜"],
        ["La categoría más pequeña de la clasificación es…", "La especie", ["El reino", "La clase", "El filo"], "🔎"],
        ["Los organismos de una misma especie…", "Pueden reproducirse y tener crías fértiles", ["Son siempre de reinos distintos", "Nunca se parecen", "No pueden tener crías"], "👪"],
        ["Las células con núcleo definido se llaman…", "Eucariotas", ["Procariotas", "Virus", "Átomos"], "🧫"],
        ["Las bacterias son células…", "Procariotas (sin núcleo definido)", ["Eucariotas", "Vegetales", "Animales"], "🦠"],
        ["Los protozoos y muchas algas unicelulares pertenecen al reino…", "Protista", ["Fungi", "Animalia", "Monera"], "🔬"],
        ["Los hongos no son plantas porque…", "No hacen fotosíntesis", ["Tienen huesos", "Caminan", "Tienen plumas"], "🍄"],
        ["¿Qué grupo de animales tiene más especies conocidas?", "Los insectos", ["Los mamíferos", "Las aves", "Los peces"], "🐞"],
        ["El perro, el lobo y el zorro pertenecen a la familia de los…", "Cánidos", ["Félidos", "Úrsidos", "Équidos"], "🐺"],
        ["El león, el tigre y el gato pertenecen a la familia de los…", "Félidos", ["Cánidos", "Équidos", "Bóvidos"], "🐯"],
        ["Las plantas con flores que forman frutos con semillas se llaman…", "Angiospermas", ["Gimnospermas", "Musgos", "Helechos"], "🌺"],
        ["El pino tiene semillas sin fruto, en piñas. Es una…", "Gimnosperma", ["Angiosperma", "Alga", "Hongo"], "🌲"]
      ],
      cie_g6_pubertad: [
        ["¿Qué es la pubertad?", "La etapa en que el cuerpo pasa de niño a adulto", ["Una enfermedad", "Un tipo de vacuna", "Algo que solo viven las niñas"], "🌱"],
        ["¿Qué sustancias del cuerpo provocan los cambios de la pubertad?", "Las hormonas", ["Las vitaminas del jugo", "Los huesos", "El oxígeno"], "🧪"],
        ["¿Cuándo suele empezar la pubertad?", "Entre los 8 y los 14 años, distinto en cada persona", ["A los 2 años", "A los 30 años", "El mismo día para todos"], "📅"],
        ["Un cambio común en la pubertad es…", "El estirón: crecer más rápido", ["Dejar de crecer para siempre", "Perder todos los dientes", "Cambiar el color de los ojos"], "📏"],
        ["En la pubertad aparece vello en…", "Las axilas y el pubis", ["La lengua", "Las uñas", "Los dientes"], "🧴"],
        ["¿Por qué es importante bañarse a diario en la pubertad?", "Porque aumentan el sudor y la grasa de la piel", ["Porque el agua hace crecer", "Porque se deja de sudar", "No es importante"], "🚿"],
        ["En los chicos, durante la pubertad, la voz…", "Se vuelve más grave", ["Desaparece", "Se vuelve más aguda para siempre", "Nunca cambia"], "🗣️"],
        ["En las chicas, la menstruación (regla) es…", "Un sangrado normal que ocurre más o menos cada mes", ["Una herida", "Una enfermedad contagiosa", "Algo que pasa una sola vez"], "📆"],
        ["Los ovarios producen…", "Óvulos", ["Espermatozoides", "Saliva", "Glóbulos rojos"], "🔵"],
        ["Los testículos producen…", "Espermatozoides", ["Óvulos", "Lágrimas", "Saliva"], "🔹"],
        ["¿Dónde se desarrolla el bebé durante el embarazo?", "En el útero", ["En el estómago", "En los pulmones", "En el corazón"], "🤰"],
        ["¿Cuánto dura aproximadamente un embarazo humano?", "Unos 9 meses", ["2 semanas", "3 años", "1 mes"], "👶"],
        ["Si tienes dudas sobre los cambios de tu cuerpo, lo mejor es…", "Hablar con un adulto de confianza o un médico", ["Guardarlas siempre en secreto", "Burlarte de otros", "Creer cualquier rumor"], "💬"],
        ["Durante la pubertad también es normal sentir…", "Cambios de ánimo y emociones nuevas", ["Nada en absoluto", "Que ya no necesitas dormir", "Que ya no necesitas comer"], "💭"]
      ],
      cie_g6_herencia: [
        ["¿Qué es la herencia biológica?", "El paso de características de padres a hijos", ["El dinero que deja la familia", "Una enfermedad", "Un tipo de célula"], "👨‍👩‍👧"],
        ["¿Dónde está la información hereditaria?", "En el ADN, dentro del núcleo de las células", ["Solo en el pelo", "En la ropa", "En los zapatos"], "🧬"],
        ["Un fragmento de ADN con la información para una característica se llama…", "Gen", ["Átomo", "Tejido", "Órgano"], "🧩"],
        ["¿Cuántos cromosomas tienen casi todas las células humanas?", "46 (23 pares)", ["12", "100", "1000"], "🔢"],
        ["¿De quién recibimos nuestros genes?", "La mitad de la madre y la mitad del padre", ["Solo de la madre", "Solo del padre", "De los amigos"], "👪"],
        ["¿Quién es considerado el padre de la genética?", "Gregor Mendel", ["Albert Einstein", "Louis Pasteur", "Isaac Newton"], "🫛"],
        ["¿Con qué plantas hizo Mendel sus experimentos?", "Arvejas (guisantes)", ["Rosas", "Cactus", "Manzanos"], "🌱"],
        ["Un gen que se manifiesta aunque venga solo de uno de los padres es…", "Dominante", ["Recesivo", "Invisible", "Adquirido"], "💪"],
        ["Un rasgo recesivo aparece cuando…", "Se heredan dos copias del gen recesivo", ["Se hereda una sola copia", "Se practica mucho", "Se toma el sol"], "🔍"],
        ["¿Qué característica NO se hereda?", "Una cicatriz por una caída", ["El color natural de los ojos", "El grupo sanguíneo", "El tipo de pelo"], "🩹"],
        ["¿Qué característica sí se hereda?", "El color natural del pelo", ["Hablar un idioma", "Saber montar en bicicleta", "Un corte de pelo"], "🧑‍🦰"],
        ["Los gemelos idénticos se parecen tanto porque…", "Tienen casi el mismo ADN", ["Usan la misma ropa", "Comen lo mismo", "Duermen igual"], "👯"],
        ["La forma del ADN se parece a…", "Una escalera retorcida (doble hélice)", ["Un círculo plano", "Un cubo", "Una estrella"], "🧬"]
      ],
      cie_g6_atomos: [
        ["¿Qué es un átomo?", "La partícula más pequeña de un elemento que conserva sus propiedades", ["Un tipo de célula", "Un planeta diminuto", "Una mezcla"], "⚛️"],
        ["¿Qué partículas del átomo tienen carga positiva?", "Los protones", ["Los electrones", "Los neutrones"], "➕"],
        ["¿Qué partículas del átomo tienen carga negativa?", "Los electrones", ["Los protones", "Los neutrones"], "➖"],
        ["¿Qué partículas del átomo no tienen carga?", "Los neutrones", ["Los protones", "Los electrones"], "⚪"],
        ["¿Dónde están los protones y los neutrones?", "En el núcleo del átomo", ["Girando lejos del núcleo", "Fuera del átomo", "En la membrana celular"], "🎯"],
        ["Un elemento químico está formado por…", "Un solo tipo de átomo", ["Muchos tipos de átomos mezclados", "Células", "Agua y sal"], "🧱"],
        ["Un compuesto se forma cuando…", "Se unen químicamente átomos de elementos distintos", ["Se mezclan arena y piedras", "Se derrite un metal", "Se corta papel"], "🔗"],
        ["¿Cuál es la fórmula del agua?", "H₂O", ["CO₂", "NaCl", "O₂"], "💧"],
        ["La sal de mesa (NaCl) está formada por…", "Sodio y cloro", ["Hidrógeno y oxígeno", "Carbono y oxígeno", "Hierro y cobre"], "🧂"],
        ["¿Cuál es el símbolo químico del oro?", "Au", ["Or", "O", "Ag"], "🥇"],
        ["¿Cuál es el símbolo químico del hierro?", "Fe", ["Hi", "H", "F"], "🔩"],
        ["¿Dónde se organizan todos los elementos químicos?", "En la tabla periódica", ["En un mapa del mundo", "En un calendario", "En la tabla de multiplicar"], "📋"],
        ["Una molécula de dióxido de carbono (CO₂) tiene…", "Un átomo de carbono y dos de oxígeno", ["Dos de carbono y uno de oxígeno", "Solo oxígeno", "Hidrógeno y nitrógeno"], "🌫️"]
      ],
      cie_g6_tectonica: [
        ["La capa externa y rígida de la Tierra está dividida en…", "Placas tectónicas", ["Ladrillos de arcilla", "Islas flotantes de hielo", "Nubes"], "🧩"],
        ["¿Qué tan rápido se mueven las placas tectónicas?", "Unos pocos centímetros por año", ["Varios kilómetros por hora", "No se mueven", "Un metro por segundo"], "🐌", "Más o menos lo que crecen tus uñas en un año."],
        ["¿Quién propuso que los continentes estuvieron unidos en un supercontinente llamado Pangea?", "Alfred Wegener", ["Isaac Newton", "Gregor Mendel", "Nicolás Copérnico"], "🗺️"],
        ["¿Qué causa la mayoría de los sismos?", "El movimiento brusco de las placas tectónicas", ["El viento fuerte", "Las olas del mar", "La Luna llena"], "🌍"],
        ["El punto de la superficie que está justo encima del origen de un sismo se llama…", "Epicentro", ["Hipocentro", "Cráter", "Núcleo"], "🎯"],
        ["¿Qué instrumento registra los sismos?", "El sismógrafo", ["El termómetro", "El barómetro", "El telescopio"], "📈"],
        ["La cordillera de los Andes se formó por…", "El choque de la placa de Nazca con la placa Sudamericana", ["La caída de un meteorito", "La erosión del viento", "Un río muy grande"], "🏔️"],
        ["¿Cómo se llama la zona alrededor del océano Pacífico con muchos volcanes y sismos?", "Cinturón de fuego del Pacífico", ["Triángulo de las Bermudas", "Línea del ecuador", "Círculo polar"], "🔥"],
        ["La roca fundida que sale por un volcán se llama…", "Lava", ["Magma", "Granizo", "Arcilla"], "🌋", "Mientras está bajo tierra se llama magma."],
        ["Una ola gigante causada por un sismo en el mar es un…", "Tsunami", ["Huracán", "Tornado", "Monzón"], "🌊"],
        ["Durante un sismo, lo más seguro es…", "Agacharse, cubrirse y sujetarse lejos de ventanas", ["Correr por las escaleras", "Usar el ascensor", "Pararse junto a los vidrios"], "🛡️"],
        ["¿Qué pasa donde dos placas se separan en el fondo del océano?", "Sube magma y se forma nuevo fondo marino", ["Se forma hielo", "El mar se seca", "Nada"], "↔️"],
        ["La cordillera del Himalaya se formó por el choque de…", "La placa India y la placa Euroasiática", ["La placa de Nazca y la Antártica", "Dos meteoritos", "Dos ríos"], "⛰️"]
      ],
      cie_g6_clima: [
        ["¿Qué es el efecto invernadero?", "Gases de la atmósfera que retienen parte del calor de la Tierra", ["Un vivero de flores", "Un tipo de nube", "El frío de la noche"], "🌡️", "Es natural y necesario, pero su exceso calienta el planeta."],
        ["¿Cuál es un gas de efecto invernadero?", "Dióxido de carbono (CO₂)", ["Oxígeno (O₂)", "Helio (He)", "Nitrógeno (N₂)"], "🏭"],
        ["¿Qué actividad humana aumenta más el CO₂ del aire?", "Quemar combustibles fósiles", ["Sembrar árboles", "Andar en bicicleta", "Reciclar papel"], "🚗"],
        ["El metano, otro gas de efecto invernadero, sale también de…", "La ganadería y los basureros", ["Los paneles solares", "Los molinos de viento", "Las bibliotecas"], "🐄"],
        ["Una consecuencia del calentamiento global es…", "El deshielo de los glaciares", ["Que haya más glaciares", "Que se enfríen los océanos", "Que desaparezcan las tormentas"], "🧊"],
        ["Si se derrite el hielo que está sobre los continentes, el nivel del mar…", "Sube", ["Baja", "No cambia"], "🌊"],
        ["¿Por qué ayudan los bosques contra el cambio climático?", "Absorben CO₂ al hacer fotosíntesis", ["Producen petróleo", "Producen humo", "Calientan el aire"], "🌳"],
        ["¿Qué acción reduce las emisiones de gases?", "Usar transporte público o bicicleta", ["Dejar luces encendidas", "Quemar basura", "Talar bosques"], "🚲"],
        ["El cambio climático es…", "Un cambio del clima a largo plazo", ["El cambio del tiempo de un día a otro", "Lo que pasa en una tormenta", "El cambio de estación"], "📈"],
        ["¿Qué acuerdo internacional busca limitar el calentamiento global?", "El Acuerdo de París", ["El Tratado de Tordesillas", "La Carta Magna", "El Mundial de fútbol"], "🌐"],
        ["Los arrecifes de coral se blanquean y pueden morir cuando…", "El agua del mar se calienta demasiado", ["Llueve en tierra firme", "Hay luna llena", "Los peces duermen"], "🪸"],
        ["La huella de carbono mide…", "Los gases de efecto invernadero que produce una persona o actividad", ["El tamaño de tus zapatos", "Cuánto carbón hay en casa", "La sombra de un árbol"], "👣"]
      ]
    },

    SORT: {
      cie_g0_casa: { bins: ["🌊 Vive en el agua", "🌳 Vive en la tierra"], items: [
        ["🐟 Pez", 0], ["🐙 Pulpo", 0], ["🐋 Ballena", 0], ["🪼 Medusa", 0], ["⭐ Estrella de mar", 0], ["🐬 Delfín", 0], ["🦈 Tiburón", 0],
        ["🐶 Perro", 1], ["🦁 León", 1], ["🐄 Vaca", 1], ["🐘 Elefante", 1], ["🐰 Conejo", 1], ["🦒 Jirafa", 1], ["🐴 Caballo", 1]] },
      cie_g0_dianoche: { bins: ["☀️ Día", "🌙 Noche"], items: [
        ["☀️ Sale el Sol", 0], ["🌙 Brilla la Luna", 1], ["⭐ Se ven muchas estrellas", 1], ["🐓 Canta el gallo al amanecer", 0], ["🦉 El búho sale a cazar", 1], ["🦇 Vuela el murciélago", 1],
        ["🥣 Desayuno", 0], ["😴 Duermo en mi cama", 1], ["🏫 Voy a la escuela", 0], ["🌻 El girasol mira al Sol", 0], ["🌌 El cielo está oscuro", 1], ["🛝 Juego en el parque con sol", 0]] },
      cie_g1_cubierta: { bins: ["🐻 Pelo", "🪶 Plumas", "🐟 Escamas"], items: [
        ["🐶 Perro", 0], ["🐱 Gato", 0], ["🐻 Oso", 0], ["🐰 Conejo", 0], ["🐑 Oveja", 0],
        ["🐔 Gallina", 1], ["🦜 Loro", 1], ["🦆 Pato", 1], ["🦉 Búho", 1],
        ["🐟 Pez", 2], ["🐍 Serpiente", 2], ["🐊 Cocodrilo", 2], ["🦎 Lagartija", 2]] },
      cie_g1_movimiento: { bins: ["🪽 Vuela", "🌊 Nada", "🐍 Se arrastra"], items: [
        ["🦅 Águila", 0], ["🦋 Mariposa", 0], ["🐝 Abeja", 0], ["🐦 Colibrí", 0], ["🦇 Murciélago", 0],
        ["🐟 Pez", 1], ["🐙 Pulpo", 1], ["🐬 Delfín", 1], ["🦈 Tiburón", 1], ["🪼 Medusa", 1],
        ["🐍 Serpiente", 2], ["🪱 Lombriz", 2], ["🐌 Caracol", 2], ["🐛 Oruga", 2]] },
      cie_g1_materiales: { bins: ["🪨 Duro", "🧸 Blando"], items: [
        ["🪨 Piedra", 0], ["🥄 Cuchara de metal", 0], ["🔑 Llave", 0], ["🧱 Ladrillo", 0], ["🪵 Tronco", 0], ["🥥 Coco", 0],
        ["🛏️ Almohada", 1], ["☁️ Algodón", 1], ["🧽 Esponja", 1], ["🧸 Peluche", 1], ["🟣 Plastilina", 1], ["🧶 Lana", 1]] },
      cie_g2_vert: { bins: ["🐄 Mamífero", "🐦 Ave", "🐟 Pez", "🐊 Reptil", "🐸 Anfibio"], items: [
        ["🐶 Perro", 0], ["🐋 Ballena", 0], ["🦇 Murciélago", 0], ["🐬 Delfín", 0],
        ["🐔 Gallina", 1], ["🐧 Pingüino", 1], ["🦩 Flamenco", 1],
        ["🦈 Tiburón", 2], ["🐠 Pez payaso", 2], ["🐟 Salmón", 2],
        ["🐢 Tortuga", 3], ["🐊 Cocodrilo", 3], ["🐍 Serpiente", 3], ["🦎 Iguana", 3],
        ["🐸 Rana", 4], ["🦎 Salamandra", 4], ["🐸 Sapo", 4]] },
      cie_g2_fuentes: { bins: ["🌞 Luz natural", "💡 Luz artificial"], items: [
        ["☀️ Sol", 0], ["⭐ Estrellas", 0], ["⚡ Rayo", 0], ["🪲 Luciérnaga", 0], ["🌋 Lava de un volcán", 0], ["🪼 Medusa luminosa", 0],
        ["💡 Bombillo", 1], ["🔦 Linterna", 1], ["🕯️ Vela", 1], ["📱 Pantalla del celular", 1], ["🚦 Semáforo", 1], ["🚗 Luces del carro", 1]] },
      cie_g2_reciclaje: { bins: ["📦 Papel y cartón", "🧴 Plástico", "🫙 Vidrio", "🍌 Orgánico"], items: [
        ["📰 Periódico", 0], ["📦 Caja de cartón", 0], ["📒 Cuaderno viejo", 0],
        ["🧴 Botella plástica", 1], ["🥤 Vaso plástico", 1], ["🧃 Envase de yogur plástico", 1],
        ["🫙 Frasco de mermelada", 2], ["🍾 Botella de vidrio", 2], ["🥛 Vaso de vidrio roto (envuelto)", 2],
        ["🍌 Cáscara de banano", 3], ["🍎 Corazón de manzana", 3], ["🥚 Cáscaras de huevo", 3], ["🍂 Hojas secas", 3]] },
      cie_g3_atrae: { bins: ["🧲 Lo atrae el imán", "🚫 No lo atrae"], items: [
        ["🔩 Clavo de hierro", 0], ["📎 Clip de acero", 0], ["🪡 Aguja de coser", 0], ["⚙️ Tuerca de hierro", 0], ["📌 Tachuela", 0], ["🥫 Tapa de lata de acero", 0],
        ["🥤 Lata de aluminio", 1], ["✏️ Lápiz de madera", 1], ["📄 Papel", 1], ["🥛 Vaso de vidrio", 1], ["💍 Anillo de oro", 1], ["🔘 Botón de plástico", 1], ["🧽 Borrador", 1]] },
      cie_g3_invert: { bins: ["🐜 Insecto (6 patas)", "🕷️ Arácnido (8 patas)", "🐌 Molusco", "🦀 Crustáceo"], items: [
        ["🐜 Hormiga", 0], ["🦋 Mariposa", 0], ["🪰 Mosca", 0], ["🪲 Escarabajo", 0],
        ["🕷️ Araña", 1], ["🦂 Escorpión", 1], ["🕷️ Garrapata", 1],
        ["🐌 Caracol", 2], ["🐙 Pulpo", 2], ["🦪 Almeja", 2],
        ["🦀 Cangrejo", 3], ["🦐 Camarón", 3], ["🦞 Langosta", 3]] },
      cie_g4_calor: { bins: ["🥄 Conducción", "🍲 Convección", "☀️ Radiación"], items: [
        ["🥄 Cuchara en la sopa caliente", 0], ["🍳 Sartén sobre la estufa", 0], ["🧊 Hielo que se derrite en tu mano", 0], ["👕 Plancha caliente sobre la ropa", 0],
        ["🍲 Agua que circula al hervir", 1], ["🎈 Aire caliente que sube en un globo", 1], ["🌬️ Brisa del mar en la playa", 1], ["❄️ Aire frío que baja del aire acondicionado", 1],
        ["☀️ Calor del Sol en tu piel", 2], ["🔥 Calor de una fogata que sientes de lejos", 2], ["💡 Calor de un bombillo sin tocarlo", 2], ["📡 Horno microondas", 2]] },
      cie_g5_ovi: { bins: ["🥚 Ovíparo", "🤰 Vivíparo"], items: [
        ["🐔 Gallina", 0], ["🐊 Cocodrilo", 0], ["🐢 Tortuga", 0], ["🐸 Rana", 0], ["🦋 Mariposa", 0], ["🐧 Pingüino", 0], ["🦆 Ornitorrinco", 0],
        ["🐶 Perro", 1], ["🐋 Ballena", 1], ["🐴 Caballo", 1], ["🦇 Murciélago", 1], ["🧑 Ser humano", 1], ["🐬 Delfín", 1], ["🦘 Canguro", 1]] },
      cie_g6_elem: { bins: ["⚛️ Elemento", "🔗 Compuesto"], items: [
        ["🥇 Oro (Au)", 0], ["🔩 Hierro (Fe)", 0], ["🫧 Oxígeno (O₂)", 0], ["🎈 Helio (He)", 0], ["✏️ Carbono del grafito (C)", 0], ["🔌 Cobre (Cu)", 0],
        ["💧 Agua (H₂O)", 1], ["🧂 Sal de mesa (NaCl)", 1], ["🌫️ Dióxido de carbono (CO₂)", 1], ["🍬 Azúcar (C₁₂H₂₂O₁₁)", 1], ["🧁 Bicarbonato de sodio (NaHCO₃)", 1], ["🔥 Metano (CH₄)", 1]] },
      cie_g6_cambios: { bins: ["✂️ Cambio físico", "🔥 Cambio químico"], items: [
        ["🧊 Hielo que se derrite", 0], ["✂️ Papel que se corta", 0], ["♨️ Agua que hierve", 0], ["🍬 Azúcar que se disuelve en agua", 0], ["🥛 Vaso de vidrio que se rompe", 0], ["🟣 Plastilina que se moldea", 0],
        ["🪵 Madera que se quema", 1], ["🔩 Clavo que se oxida", 1], ["🍳 Huevo que se fríe", 1], ["🍞 Pan que se hornea", 1], ["🍎 Manzana cortada que se pone café", 1], ["🥛 Leche que se agria", 1], ["🫧 Bicarbonato con vinagre que burbujea", 1], ["🎆 Fuegos artificiales", 1]] }
    },

    ORDER: {
      cie_g4_cuerpo: [
        ["Boca", "Faringe", "Esófago", "Estómago", "Intestino delgado", "Intestino grueso"],
        ["Nariz", "Faringe", "Laringe", "Tráquea", "Bronquios", "Alvéolos de los pulmones"],
        ["Corazón (ventrículo izquierdo)", "Arterias", "Capilares del cuerpo", "Venas", "Corazón (aurícula derecha)"],
        ["Los riñones filtran la sangre", "Uréteres", "Vejiga", "Uretra"],
        ["Masticar en la boca", "Tragar", "Digerir en el estómago", "Absorber nutrientes en el intestino delgado", "Absorber agua en el intestino grueso"]
      ],
      cie_g5_planetas: [
        ["☿️ Mercurio", "♀️ Venus", "🌍 Tierra", "🔴 Marte"],
        ["🌍 Tierra", "🔴 Marte", "🟠 Júpiter", "🪐 Saturno"],
        ["🟠 Júpiter", "🪐 Saturno", "🩵 Urano", "🔵 Neptuno"],
        ["♀️ Venus", "🔴 Marte", "🪐 Saturno", "🔵 Neptuno"],
        ["☿️ Mercurio", "🌍 Tierra", "🟠 Júpiter", "🩵 Urano"],
        ["🌑 Luna nueva", "🌓 Cuarto creciente", "🌕 Luna llena", "🌗 Cuarto menguante"]
      ],
      cie_g6_metodo: [
        ["Observar", "Hacer una pregunta", "Formular una hipótesis", "Experimentar", "Analizar los resultados", "Sacar conclusiones"],
        ["Observo que mi planta está pálida", "Pregunto: ¿le falta luz?", "Hipótesis: con más luz se pondrá verde", "La pongo junto a la ventana dos semanas", "Anoto y comparo los cambios", "Concluyo si la luz la ayudó"],
        ["Veo que el pan viejo se llena de moho", "Pregunto: ¿crece más moho con humedad?", "Hipótesis: el pan húmedo tendrá más moho", "Guardo un pan seco y uno húmedo en bolsas cerradas", "Comparo el moho cada día", "Concluyo y comparto los resultados"],
        ["Noto que el hielo se derrite a distinta velocidad", "Pregunto: ¿la sal lo derrite más rápido?", "Hipótesis: con sal se derrite antes", "Pongo un cubo con sal y otro sin sal", "Mido los tiempos", "Saco una conclusión"],
        ["Formular una hipótesis", "Diseñar un experimento", "Registrar los datos", "Comunicar los resultados"]
      ]
    },

    READ: {
      cie_r3: [
        { title: "Las lombrices, ingenieras del suelo", text: "Debajo de nuestros pies trabajan sin descanso millones de lombrices de tierra. No tienen ojos ni patas, pero sienten la luz y la humedad. Su piel siempre debe estar húmeda, porque respiran a través de ella. Las lombrices comen tierra y restos de hojas. Al cavar sus túneles dejan entrar el aire y el agua, y sus desechos son un abono excelente para las plantas. Por eso los agricultores dicen que un suelo con lombrices es un suelo sano. Si encuentras una lombriz, obsérvala con cuidado y devuélvela a la tierra húmeda.",
          qs: [["¿Por dónde respiran las lombrices?", "Por la piel", ["Por la nariz", "Por branquias", "Por la boca"]],
               ["¿Qué comen las lombrices?", "Tierra y restos de hojas", ["Insectos grandes", "Solo semillas", "Piedras"]],
               ["¿Para qué sirven sus túneles?", "Para que entren aire y agua al suelo", ["Para guardar agua salada", "Para atrapar pájaros", "Para hacer ruido"]],
               ["¿Qué significa que un suelo tenga lombrices?", "Que es un suelo sano", ["Que está contaminado", "Que es un desierto", "Que no sirve para sembrar"]]] },
        { title: "La brújula de los marineros", text: "Hace cientos de años los marineros no tenían mapas en el celular. Para no perderse en el mar usaban una brújula. Una brújula tiene una aguja imantada que puede girar libremente. Como la Tierra se comporta como un imán gigante, la aguja siempre apunta hacia el norte. Así los marineros sabían en qué dirección navegaban, incluso en días nublados, sin sol ni estrellas. Tú puedes hacer tu propia brújula: frota una aguja con un imán, siempre en la misma dirección, y ponla sobre un trozo de corcho que flote en un plato con agua. ¡Verás cómo gira hasta señalar el norte!",
          qs: [["¿Qué tiene una brújula?", "Una aguja imantada que gira", ["Un reloj de arena", "Un termómetro", "Una linterna"]],
               ["¿Por qué la aguja apunta al norte?", "Porque la Tierra se comporta como un imán gigante", ["Porque el viento la empuja", "Porque el Sol la atrae", "Porque el agua la mueve"]],
               ["¿Cuándo les servía la brújula a los marineros?", "Incluso en días nublados, sin sol ni estrellas", ["Solo en días de mucho sol", "Nunca", "Solo en tierra firme"]],
               ["¿Con qué frotas la aguja para hacer tu brújula?", "Con un imán", ["Con un corcho", "Con agua", "Con papel"]]] }
      ],
      cie_r4: [
        { title: "Los manglares, guardianes de la costa", text: "Los manglares son bosques que crecen en las costas tropicales, donde el agua dulce de los ríos se mezcla con el agua salada del mar. Sus árboles tienen raíces largas que salen del agua como zancos. Estas raíces sostienen los árboles en el lodo y les ayudan a respirar. Entre ellas se esconden peces pequeños, cangrejos y camarones, que crecen allí protegidos de los depredadores. Los manglares también frenan la fuerza de las olas y de las tormentas, y así protegen a los pueblos de la costa. Además, guardan mucho carbono en su lodo, lo que ayuda contra el cambio climático. Por eso es tan importante cuidarlos y no talarlos.",
          qs: [["¿Dónde crecen los manglares?", "En costas tropicales donde se mezclan agua dulce y salada", ["En los desiertos", "En la cima de las montañas", "En los polos"]],
               ["¿Para qué sirven sus raíces en forma de zancos?", "Para sostener el árbol en el lodo y ayudarlo a respirar", ["Para caminar", "Para atrapar aves", "Para producir sal"]],
               ["¿Qué animales se protegen entre las raíces?", "Peces pequeños, cangrejos y camarones", ["Leones y cebras", "Osos polares", "Camellos"]],
               ["¿Cómo protegen los manglares a los pueblos de la costa?", "Frenan la fuerza de las olas y las tormentas", ["Producen electricidad", "Atraen la lluvia al desierto", "Enfrían el Sol"]]] },
        { title: "El viaje de una gota de sangre", text: "Imagina que eres una gota de sangre. Sales del lado izquierdo del corazón cargada de oxígeno y viajas por una arteria grande llamada aorta. Las arterias se dividen en tubos cada vez más finos hasta llegar a los capilares, tan delgados que las células de la sangre pasan casi en fila. Allí entregas oxígeno y nutrientes a las células y recoges el dióxido de carbono. Luego regresas por las venas al lado derecho del corazón, que te envía a los pulmones. En los pulmones sueltas el dióxido de carbono y tomas oxígeno fresco. Vuelves al corazón y el viaje comienza otra vez. ¡En reposo, una vuelta completa tarda más o menos un minuto!",
          qs: [["¿Cómo se llama la arteria grande que sale del corazón?", "Aorta", ["Tráquea", "Esófago", "Vena cava"]],
               ["¿Qué entrega la sangre a las células?", "Oxígeno y nutrientes", ["Dióxido de carbono", "Orina", "Saliva"]],
               ["¿Por dónde regresa la sangre al corazón?", "Por las venas", ["Por las arterias", "Por los nervios", "Por el esófago"]],
               ["¿Dónde toma la sangre oxígeno fresco?", "En los pulmones", ["En el estómago", "En los riñones", "En el cerebro"]]] }
      ],
      cie_r6: [
        { title: "El cinturón de fuego del Pacífico", text: "Alrededor del océano Pacífico hay una franja de unos 40 000 kilómetros con forma de herradura donde ocurren muchísimos sismos y erupciones. Se llama cinturón de fuego del Pacífico. Allí las placas tectónicas chocan, se separan o se deslizan unas junto a otras. Cuando una placa oceánica se hunde bajo una placa continental, la roca se funde, se forma magma y nacen volcanes. Así ocurre en la costa de Sudamérica, donde la placa de Nazca se hunde bajo la placa Sudamericana. En este cinturón están cerca de tres de cada cuatro volcanes activos del planeta. Chile, Perú, Ecuador, Colombia, México y Japón forman parte de él. Por eso en esos países se hacen simulacros para saber cómo actuar durante un sismo.",
          qs: [["¿Qué forma tiene el cinturón de fuego?", "De herradura", ["De círculo perfecto", "De estrella", "De línea recta"]],
               ["¿Qué ocurre cuando una placa oceánica se hunde bajo una continental?", "La roca se funde, se forma magma y nacen volcanes", ["Se forma un desierto", "El mar se congela", "Nace un río"]],
               ["¿Qué placa se hunde bajo la placa Sudamericana?", "La placa de Nazca", ["La placa Euroasiática", "La placa Africana", "La placa India"]],
               ["¿Por qué se hacen simulacros en esos países?", "Para saber cómo actuar durante un sismo", ["Para atraer turistas", "Para evitar la lluvia", "Para apagar los volcanes"]]] },
        { title: "Mendel y las arvejas", text: "Gregor Mendel fue un monje que vivió en el siglo XIX en un monasterio de Europa central. En el huerto cultivó miles de plantas de arveja durante unos ocho años. Mendel cruzó plantas de semillas amarillas con plantas de semillas verdes. Para su sorpresa, todas las plantas hijas tuvieron semillas amarillas. Pero cuando cruzó esas hijas entre sí, el color verde reapareció en una de cada cuatro plantas. Mendel concluyó que cada característica depende de «factores» que se heredan en pares, uno de cada progenitor, y que algunos dominan sobre otros. Hoy llamamos genes a esos factores. Su trabajo fue ignorado durante años, pero hoy se le considera el padre de la genética.",
          qs: [["¿Con qué plantas trabajó Mendel?", "Con arvejas", ["Con rosas", "Con trigo", "Con manzanos"]],
               ["¿De qué color fueron las semillas de todas las plantas hijas?", "Amarillas", ["Verdes", "Mitad verdes y mitad amarillas", "Blancas"]],
               ["¿En qué proporción reapareció el color verde en la siguiente generación?", "En una de cada cuatro plantas", ["En todas", "En ninguna", "En la mitad"]],
               ["¿Cómo llamamos hoy a los «factores» de Mendel?", "Genes", ["Células", "Átomos", "Vitaminas"]]] }
      ]
    }
  },

  extendBanks: {
    Q: {
      cie_senses: [
        ["¿Qué parte del cuerpo usamos para el tacto?", "La piel", ["Los dientes", "El pelo"], "🖐️"],
        ["¿Con qué sentido sabemos que el pan huele rico?", "El olfato", ["La vista", "El oído"], "🍞"],
        ["¿Qué órgano usamos para el gusto?", "La lengua", ["La nariz", "Las orejas"], "👅"],
        ["¿Qué sentido nos avisa que suena una sirena?", "El oído", ["El gusto", "El olfato"], "🚨"],
        ["¿Con qué sentido notamos que una toalla es suave?", "El tacto", ["El gusto", "El oído"], "🧺"],
        ["¿Qué debemos hacer para cuidar nuestros ojos?", "No mirar directamente al Sol", ["Frotarlos con arena", "Leer a oscuras"], "😎"]
      ],
      cie_babies: [
        ["¿Cómo se llama la cría del perro?", "Cachorro", ["Ternero", "Pollito"], "🐶"],
        ["¿Cómo se llama la cría de la oveja?", "Cordero", ["Potro", "Renacuajo"], "🐑"],
        ["¿Cómo se llama la cría del gato?", "Gatito", ["Pollito", "Cordero"], "🐱"],
        ["¿Dónde vive el pájaro con sus pichones?", "En un nido", ["En una colmena", "En una pecera"], "🪺"],
        ["¿Qué cría nace de un huevo?", "El pollito", ["El ternero", "El potro"], "🐣"],
        ["¿Dónde vive la hormiga?", "En un hormiguero", ["En un nido de pájaro", "En el mar"], "🐜"]
      ],
      cie_plant: [
        ["¿Qué parte de la planta suele tener colores y atrae a las abejas?", "La flor", ["La raíz", "El tallo"], "🌺"],
        ["¿De qué color son casi siempre las hojas?", "Verdes", ["Moradas", "Negras"], "🍃"],
        ["La zanahoria que comemos es una…", "Raíz", ["Hoja", "Flor"], "🥕"],
        ["La lechuga que comemos son…", "Hojas", ["Raíces", "Semillas"], "🥬"],
        ["El tronco de un árbol es su…", "Tallo", ["Raíz", "Fruto"], "🌳"],
        ["¿Qué sale de una semilla cuando germina?", "Una plantita nueva", ["Una piedra", "Un pollito"], "🌱"]
      ],
      cie_body: [
        ["¿Qué órgano cubre todo nuestro cuerpo?", "La piel", ["El corazón", "El estómago"], "🖐️", "La piel es el órgano más grande del cuerpo."],
        ["¿Qué hueso protege al cerebro?", "El cráneo", ["Las costillas", "La rótula"], "💀"],
        ["¿Qué huesos protegen el corazón y los pulmones?", "Las costillas", ["Los dedos", "El cráneo"], "🦴"],
        ["¿Qué órganos limpian la sangre y forman la orina?", "Los riñones", ["Los pulmones", "Los ojos"], "🫘"],
        ["¿Qué nos permite doblar el codo y la rodilla?", "Las articulaciones", ["Las uñas", "Las pestañas"], "💪"],
        ["¿Qué viaja por las venas y las arterias?", "La sangre", ["El aire", "La comida masticada"], "🩸"]
      ],
      cie_daynight: [
        ["¿Qué animal duerme de día y sale de noche?", "El búho", ["La gallina", "La mariposa"], "🦉"],
        ["¿Por dónde sale el Sol por la mañana?", "Por el este (oriente)", ["Por el oeste", "Por el sur"], "🌅"],
        ["¿Por dónde se oculta el Sol?", "Por el oeste (occidente)", ["Por el este", "Por el norte"], "🌇"],
        ["Cuando en un lado de la Tierra es de día, en el lado opuesto es…", "De noche", ["También de día", "Siempre mediodía"], "🌏"],
        ["¿La Luna tiene luz propia?", "No, refleja la luz del Sol", ["Sí, es una estrella", "Sí, tiene bombillos"], "🌕"],
        ["¿Cuántas horas tiene un día completo?", "24 horas", ["12 horas", "100 horas"], "🕛"]
      ],
      cie_life: [
        ["¿Qué sale del huevo de una gallina?", "Un pollito", ["Un renacuajo", "Una oruga"], "🐣"],
        ["¿Cómo se llama el gran cambio de oruga a mariposa?", "Metamorfosis", ["Evaporación", "Fotosíntesis"], "🦋"],
        ["¿Qué necesita una semilla para germinar?", "Agua, aire y una temperatura adecuada", ["Sal y vinagre", "Solo ruido"], "💧"],
        ["Un ternero crece y se convierte en…", "Vaca o toro", ["Caballo", "Oveja"], "🐄"],
        ["¿Qué etapa viene justo después de nacer?", "Crecer", ["Morir", "Volver a nacer"], "📏"],
        ["Las crías de los mamíferos se alimentan primero de…", "La leche de su mamá", ["Piedras", "Néctar de flores"], "🍼"]
      ],
      cie_habitat: [
        ["¿Dónde vive la rana?", "Cerca de charcas y ríos", ["En el desierto seco", "En la nieve"], "🐸"],
        ["¿Dónde vive el tiburón?", "En el mar", ["En la selva", "En una cueva de montaña"], "🦈"],
        ["¿Dónde vive el cóndor andino?", "En las montañas de los Andes", ["En el fondo del mar", "En el desierto del Sahara"], "🦅"],
        ["¿Dónde vive el jaguar?", "En la selva", ["En el polo", "En el océano"], "🐆"],
        ["¿Qué encuentra un animal en su hábitat?", "Alimento, agua y refugio", ["Juguetes", "Dinero"], "🏞️"],
        ["¿Dónde vive la lombriz?", "Bajo la tierra húmeda", ["En las nubes", "En el mar profundo"], "🪱"]
      ],
      cie_chain: [
        ["¿Qué es un productor?", "Un ser vivo que fabrica su alimento, como una planta", ["Un animal que come carne", "Un hongo"], "🌱"],
        ["Un animal que come plantas y animales es…", "Omnívoro", ["Herbívoro", "Productor"], "🐻"],
        ["Algas → pez pequeño → pez grande → ¿?", "Tiburón", ["Plancton", "Arena"], "🦈"],
        ["Si desaparecen las plantas de una cadena, los herbívoros…", "Se quedan sin alimento", ["Tienen más comida", "No notan nada"], "⚠️"],
        ["La lombriz que se alimenta de hojas secas ayuda como…", "Descomponedor", ["Productor", "Carnívoro"], "🪱"],
        ["Un león que caza cebras es…", "Carnívoro (consumidor secundario)", ["Herbívoro", "Productor"], "🦁"]
      ],
      cie_solar: [
        ["¿Qué planeta es el más lejano del Sol?", "Neptuno", ["Marte", "Mercurio"], "🔵"],
        ["¿En qué planeta sabemos que hay vida?", "La Tierra", ["Marte", "Júpiter"], "🌍"],
        ["¿Cuál es el planeta más caliente?", "Venus", ["Mercurio", "Marte"], "🌡️", "Venus es más caliente que Mercurio porque su atmósfera atrapa el calor."],
        ["¿Qué hay en el centro del sistema solar?", "El Sol", ["La Tierra", "La Luna"], "☀️"]
      ],
      cie_water: [
        ["Cuando el agua de lluvia entra en la tierra se llama…", "Infiltración", ["Evaporación", "Condensación"], "🌱"],
        ["¿Qué pasa con el agua cuando se congela?", "Se vuelve hielo (sólido)", ["Se vuelve vapor", "Desaparece"], "🧊"],
        ["¿Cuánta del agua de la Tierra es salada?", "Casi toda, la de los mares", ["Muy poquita", "Nada"], "🌊", "Cerca del 97 % del agua está en los océanos."],
        ["Cuando la precipitación cae como bolitas de hielo se llama…", "Granizo", ["Rocío", "Niebla"], "🌨️"],
        ["Las gotitas de agua que aparecen fuera de un vaso frío vienen de…", "El vapor del aire que se condensa", ["Un hueco en el vaso", "El vidrio que se derrite"], "🥤"],
        ["¿Cómo podemos ahorrar agua?", "Cerrando la llave al cepillarnos", ["Dejando la llave abierta", "Lavando el patio con manguera cada día"], "🚰"]
      ],
      cie_systems: [
        ["¿Qué órgano forma parte del sistema nervioso?", "El cerebro", ["El estómago", "La vejiga"], "🧠"],
        ["¿Qué sistema forman los huesos?", "Sistema óseo (esqueleto)", ["Sistema digestivo", "Sistema respiratorio"], "🦴"],
        ["¿Por dónde baja el aire hacia los pulmones?", "Por la tráquea", ["Por el esófago", "Por las venas"], "🌬️"],
        ["¿Qué sistema mueve los huesos con los músculos?", "Sistema muscular", ["Sistema excretor", "Sistema digestivo"], "💪"],
        ["¿Qué gas toma el cuerpo al inhalar?", "Oxígeno", ["Dióxido de carbono", "Helio"], "🫁"],
        ["¿Qué gas sale del cuerpo al exhalar?", "Dióxido de carbono", ["Solo oxígeno puro", "Helio"], "💨"]
      ],
      cie_eco: [
        ["¿Cuál es un ecosistema terrestre?", "Un bosque", ["Un arrecife", "Un lago"], "🌲"],
        ["¿Cuál es un factor abiótico?", "La luz del Sol", ["Un hongo", "Una abeja"], "☀️"],
        ["¿Qué ecosistema tiene muchos árboles, mucha lluvia y gran variedad de animales?", "La selva tropical", ["El desierto", "La tundra"], "🌴"],
        ["¿Qué ecosistema es muy seco y con pocas lluvias?", "El desierto", ["La selva", "El manglar"], "🏜️"],
        ["¿Qué podemos hacer para proteger los ecosistemas?", "Reducir la basura y sembrar árboles", ["Cazar animales en peligro", "Botar aceite al río"], "🌳"],
        ["Un manglar crece donde se mezclan…", "El agua dulce y el agua de mar", ["La arena y la nieve", "La lava y el hielo"], "🌿"]
      ],
      cie_cell: [
        ["¿Qué orgánulo hace la fotosíntesis en las células vegetales?", "El cloroplasto", ["El núcleo", "La membrana"], "🌿"],
        ["¿Qué orgánulo obtiene la energía de los alimentos para la célula?", "La mitocondria", ["La pared celular", "La vacuola"], "⚡"],
        ["Un ser vivo formado por una sola célula es…", "Unicelular", ["Pluricelular", "Un tejido"], "🦠"],
        ["Los seres humanos somos…", "Pluricelulares", ["Unicelulares", "Seres sin células"], "🧍"],
        ["Varios tejidos que trabajan juntos forman un…", "Órgano", ["Átomo", "Cromosoma"], "❤️"],
        ["¿Cómo se llama el líquido gelatinoso que hay dentro de la célula?", "Citoplasma", ["Núcleo", "Pared celular"], "🫧"]
      ],
      cie_force: [
        ["¿Por qué es más fácil deslizarse sobre hielo que sobre arena?", "Porque el hielo tiene menos fricción", ["Porque el hielo pesa más", "Porque la arena es magnética"], "⛸️"],
        ["Si empujas una pelota con más fuerza, ella…", "Se mueve más rápido", ["Se queda quieta", "Se vuelve más pequeña"], "⚽"],
        ["¿Con qué instrumento medimos la fuerza?", "Con un dinamómetro", ["Con un termómetro", "Con un barómetro"], "📏"],
        ["El peso de un objeto se debe a…", "La gravedad que lo atrae", ["Su color", "La luz"], "⚖️"],
        ["Los polos iguales de dos imanes…", "Se repelen", ["Se atraen", "Se derriten"], "🧲"],
        ["Un paracaídas cae despacio gracias a la resistencia del…", "Aire", ["Agua", "Imán"], "🪂"]
      ],
      cie_kingdom: [
        ["¿A qué reino pertenece el helecho?", "Plantae", ["Fungi", "Animalia"], "🌿"],
        ["La levadura del pan pertenece al reino…", "Fungi", ["Plantae", "Monera"], "🍞"],
        ["La ameba pertenece al reino…", "Protista", ["Animalia", "Plantae"], "🦠"],
        ["Los hongos se alimentan…", "Absorbiendo nutrientes de restos y de otros seres", ["Haciendo fotosíntesis", "Cazando presas con dientes"], "🍄"],
        ["Los seres del reino Monera no tienen…", "Núcleo definido", ["Células", "Material genético"], "🔬"],
        ["¿Qué tienen en común todos los seres vivos?", "Están formados por células", ["Tienen patas", "Hacen fotosíntesis"], "🧬"]
      ],
      cie_earth: [
        ["¿Cuál es la capa más gruesa de la Tierra?", "El manto", ["La corteza", "La atmósfera"], "🟠"],
        ["¿De qué está hecho principalmente el núcleo terrestre?", "Hierro y níquel", ["Agua y sal", "Hielo"], "🧲"],
        ["¿Cómo se llama la roca fundida dentro de la Tierra?", "Magma", ["Arena", "Granizo"], "🔥"],
        ["¿Qué capa de la atmósfera nos protege de los rayos ultravioleta?", "La capa de ozono", ["El núcleo", "El manto"], "🛡️"],
        ["La parte de la Tierra donde hay vida se llama…", "Biosfera", ["Núcleo", "Manto"], "🌱"],
        ["El núcleo interno es sólido y el núcleo externo es…", "Líquido", ["Gaseoso", "De hielo"], "🌋"]
      ],
      cie_matter: [
        ["¿Cómo se llama el paso de líquido a gas?", "Evaporación", ["Solidificación", "Fusión"], "♨️"],
        ["¿Cómo se llama el paso de líquido a sólido?", "Solidificación", ["Evaporación", "Condensación"], "🧊"],
        ["¿Con qué separas limaduras de hierro de la arena?", "Con un imán", ["Con un filtro de café", "Con agua"], "🧲"],
        ["¿Cómo recuperas la sal disuelta en agua?", "Evaporando el agua", ["Con un imán", "Con un colador"], "🧂"],
        ["Un sólido tiene forma…", "Propia", ["Del recipiente", "Que cambia sola"], "🧱"],
        ["Un líquido toma la forma…", "Del recipiente que lo contiene", ["De una esfera siempre", "Propia y fija"], "🥛"]
      ],
      cie_repro: [
        ["¿Qué parte de la flor produce el polen?", "Los estambres", ["La raíz", "El pétalo"], "🌸"],
        ["Después de la fecundación, el ovario de la flor se convierte en…", "El fruto", ["La raíz", "La hoja"], "🍎"],
        ["Sembrar un trozo de tallo para obtener otra planta es…", "Reproducción asexual (esqueje)", ["Polinización", "Germinación"], "✂️"],
        ["¿Qué parte de la flor recibe el polen?", "El pistilo (estigma)", ["El tallo", "La hoja"], "🌼"],
        ["Además de los insectos, ¿qué animales polinizan flores?", "Colibríes y murciélagos", ["Peces y pulpos", "Lombrices"], "🐦"],
        ["La semilla del diente de león viaja gracias al…", "Viento", ["Fuego", "Imán"], "🌬️"]
      ]
    },
    SORT: {
      alive: { items: [["🐝 Abeja", 0], ["🧱 Ladrillo", 1], ["🌵 Cactus", 0], ["⚽ Balón", 1]] },
      renew: { items: [["🌾 Biomasa", 0], ["⚛️ Uranio (nuclear)", 1], ["⛽ Gasolina", 1]] },
      conduct: { items: [["🔗 Cadena de acero", 0], ["📄 Papel", 1]] },
      vertebr: { items: [["🐊 Cocodrilo", 0], ["🐜 Hormiga", 1], ["🦀 Cangrejo", 1], ["🦇 Murciélago", 0]] }
    },
    ORDER: {
      life: [
        ["🥚 Huevo", "🐣 Pollito", "🐥 Pollo joven", "🐔 Gallina adulta"],
        ["👶 Bebé", "🧒 Niño", "🧑 Adulto", "👴 Anciano"],
        ["🥚 Huevo de mosquito", "🪱 Larva", "⚪ Pupa", "🦟 Mosquito adulto"],
        ["🌸 Flor", "🐝 Polinización", "🍎 Fruto", "🌰 Semilla"]
      ],
      water: [
        ["🌊 Agua del mar", "♨️ Se evapora", "☁️ Forma nubes", "🌧️ Llueve", "🏞️ Corre por los ríos"],
        ["❄️ Nieve en la montaña", "💧 Se derrite", "🏞️ Baja por el río", "🌊 Llega al mar"],
        ["🌧️ Llueve", "🌱 El agua se infiltra en el suelo", "🌳 Las raíces la absorben", "🍃 Las hojas la sueltan como vapor"]
      ],
      chain: [
        ["🌽 Maíz", "🐀 Rata", "🐍 Culebra", "🦅 Águila"],
        ["🍃 Hojas", "🐛 Oruga", "🐸 Rana", "🐍 Serpiente"],
        ["🌿 Hierba", "🦓 Cebra", "🦁 León"],
        ["🌊 Algas", "🦐 Kril", "🐋 Ballena azul"]
      ]
    }
  },

  topics: {
    0: [
      { id: "xcie0a", title: "Partes del cuerpo", gen: "quiz", params: { bank: "cie_g0_cuerpo" }, lesson: "Tu cuerpo tiene cabeza, tronco, brazos y piernas. Con los ojos ves, con las orejas oyes y con las manos agarras.", example: "👀 ojos · 👂 orejas · ✋ manos · 🦶 pies", tip: "Jueguen a «Simón dice»: toca tu nariz, toca tus rodillas…" },
      { id: "xcie0b", title: "Sonidos de los animales", gen: "quiz", params: { bank: "cie_g0_sonidos" }, lesson: "Cada animal hace su propio sonido. ¡Escucha y adivina quién es!", example: "🐄 muuu · 🐶 guau · 🐱 miau", tip: "Imiten sonidos de animales y que el otro adivine cuál es." },
      { id: "xcie0c", title: "¿Agua o tierra?", gen: "sort", params: { bank: "cie_g0_casa" }, lesson: "Algunos animales viven en el agua y otros en la tierra.", example: "🐟 agua · 🐘 tierra", tip: "Hojeen un libro de animales y señalen dónde vive cada uno." },
      { id: "xcie0d", title: "El tiempo hoy", gen: "quiz", params: { bank: "cie_g0_clima" }, lesson: "Puede hacer sol, llover, estar nublado o hacer viento. Según el tiempo nos vestimos distinto.", example: "☀️ gorra · 🌧️ paraguas · 🥶 abrigo", tip: "Cada mañana miren por la ventana y dibujen el tiempo del día." },
      { id: "xcie0e", title: "Limpio y sano", gen: "quiz", params: { bank: "cie_g0_higiene" }, lesson: "Lavarte las manos, cepillarte los dientes, bañarte y dormir bien te mantienen sano.", example: "🧼 manos · 🪥 dientes · 🛁 baño · 😴 dormir", tip: "Pongan un poco de pimienta en un plato con agua y toquen con un dedo con jabón: ¡la pimienta se aleja como los gérmenes!" },
      { id: "xcie0f", title: "¿De día o de noche?", gen: "sort", params: { bank: "cie_g0_dianoche" }, lesson: "De día brilla el Sol y vamos a la escuela. De noche salen la Luna y las estrellas, y dormimos.", example: "☀️ día · 🌙 noche", tip: "Esta noche salgan a mirar la Luna y dibujen su forma." }
    ],
    1: [
      { id: "xcie1a", title: "Lo que necesitan los seres vivos", gen: "quiz", params: { bank: "cie_g1_necesidades" }, lesson: "Todos los seres vivos necesitan agua, alimento, aire y un lugar donde vivir. Las plantas además necesitan luz.", example: "🌱 + 💧 + ☀️ + 🌬️ = planta feliz", tip: "Siembren dos frijoles: rieguen solo uno y comparen después de una semana." },
      { id: "xcie1b", title: "Pelo, plumas o escamas", gen: "sort", params: { bank: "cie_g1_cubierta" }, lesson: "El cuerpo de los animales está cubierto de pelo, plumas o escamas que los protegen.", example: "🐻 pelo · 🦜 plumas · 🐟 escamas", tip: "Busquen una pluma en el parque y obsérvenla con lupa." },
      { id: "xcie1c", title: "¿Cómo se mueven los animales?", gen: "sort", params: { bank: "cie_g1_movimiento" }, lesson: "Los animales se mueven de muchas formas: vuelan, nadan, caminan, saltan o se arrastran.", example: "🦅 vuela · 🐟 nada · 🐍 se arrastra", tip: "Imiten el movimiento de un animal y que el otro adivine cuál es." },
      { id: "xcie1d", title: "Duro o blando", gen: "sort", params: { bank: "cie_g1_materiales" }, lesson: "Los materiales pueden ser duros, como la piedra, o blandos, como el algodón. Por eso los usamos para cosas distintas.", example: "🪨 duro · 🧸 blando", tip: "Busquen en casa tres objetos duros y tres blandos y ordénenlos." },
      { id: "xcie1e", title: "Cuido mi cuerpo", gen: "quiz", params: { bank: "cie_g1_cuidado" }, lesson: "Cuidar el cuerpo es lavarse, comer bien, dormir, hacer ejercicio y protegerse de los accidentes.", example: "🚲 casco · 🧴 protector solar · 😴 dormir bien", tip: "Escriban juntos una lista de hábitos sanos y marquen los que cumplen cada día." },
      { id: "xcie1f", title: "Estaciones y clima", gen: "quiz", params: { bank: "cie_g1_estaciones" }, lesson: "En algunos países hay cuatro estaciones: primavera, verano, otoño e invierno. Cerca del ecuador hay temporadas de lluvias y secas.", example: "🌸 primavera · 🌞 verano · 🍂 otoño · ❄️ invierno", tip: "Pongan un vaso afuera y midan con una regla cuánta lluvia cae en una semana." }
    ],
    2: [
      { id: "xcie2a", title: "Grupos de vertebrados", gen: "sort", params: { bank: "cie_g2_vert" }, lesson: "Los vertebrados tienen columna vertebral. Se dividen en mamíferos, aves, peces, reptiles y anfibios.", example: "🐄 mamífero · 🐦 ave · 🐟 pez · 🐊 reptil · 🐸 anfibio", tip: "Toquen su espalda: esas bolitas en fila son las vértebras." },
      { id: "xcie2b", title: "¿Cómo son los vertebrados?", gen: "quiz", params: { bank: "cie_g2_vertebrados" }, lesson: "Mamíferos: pelo y leche. Aves: plumas y huevos. Peces: escamas y branquias. Reptiles: escamas secas. Anfibios: piel húmeda.", example: "🐋 la ballena es mamífero · 🐧 el pingüino es ave", tip: "Hagan una tabla con un animal de cada grupo y su característica." },
      { id: "xcie2c", title: "Las plantas fabrican su alimento", gen: "quiz", params: { bank: "cie_g2_fotosintesis" }, lesson: "Con la luz del Sol, el agua y el dióxido de carbono, las hojas fabrican su alimento y sueltan oxígeno. Esto es la fotosíntesis.", example: "☀️ + 💧 + CO₂ → 🍬 alimento + 🫧 oxígeno", tip: "Pongan una hoja dentro de un vaso con agua al sol y miren las burbujitas de oxígeno." },
      { id: "xcie2d", title: "Luz y sombra", gen: "quiz", params: { bank: "cie_g2_luz" }, lesson: "La luz viaja en línea recta. Cuando un objeto opaco la tapa, se forma una sombra.", example: "🔦 + 🧸 = sombra en la pared", tip: "Con una linterna hagan sombras chinescas con las manos." },
      { id: "xcie2e", title: "Fuentes de luz", gen: "sort", params: { bank: "cie_g2_fuentes" }, lesson: "Algunas luces vienen de la naturaleza, como el Sol. Otras las fabricamos las personas, como el bombillo.", example: "☀️ natural · 💡 artificial", tip: "Cuenten cuántas fuentes de luz artificial hay en su casa." },
      { id: "xcie2f", title: "El sonido", gen: "quiz", params: { bank: "cie_g2_sonido" }, lesson: "El sonido se produce cuando algo vibra y viaja por el aire, el agua y los sólidos. Puede ser fuerte o suave, agudo o grave.", example: "🥁 grave · 🐦 agudo", tip: "Hagan un teléfono con dos vasos y una cuerda tensa." },
      { id: "xcie2g", title: "Mezclas", gen: "quiz", params: { bank: "cie_g2_mezclas" }, lesson: "Una mezcla une dos o más materiales. A veces se ven sus partes, como agua con arena, y otras no, como agua con azúcar.", example: "🏖️ agua + arena · 🍬 agua + azúcar", tip: "Mezclen agua con aceite en un frasco, agiten y esperen: ¿qué pasa?" },
      { id: "xcie2h", title: "Separo y reciclo", gen: "sort", params: { bank: "cie_g2_reciclaje" }, lesson: "Separar los residuos ayuda a reciclar. Recuerda las 3R: reducir, reutilizar y reciclar.", example: "📦 papel · 🧴 plástico · 🫙 vidrio · 🍌 orgánico", tip: "Armen en casa un rincón con cajas para separar los residuos." }
    ],
    3: [
      { id: "xcie3a", title: "El suelo y las rocas", gen: "quiz", params: { bank: "cie_g3_suelo" }, lesson: "El suelo tiene capas: arriba el humus, más abajo arena y piedras, y al fondo la roca madre. Las rocas pueden ser ígneas, sedimentarias o metamórficas.", example: "🌋 basalto: ígnea · 🏜️ arenisca: sedimentaria · 🏛️ mármol: metamórfica", tip: "Pongan tierra en un frasco con agua, agiten y dejen reposar: verán las capas." },
      { id: "xcie3b", title: "Los imanes", gen: "quiz", params: { bank: "cie_g3_imanes" }, lesson: "Los imanes atraen el hierro. Tienen polo norte y polo sur: polos distintos se atraen y polos iguales se repelen.", example: "🧲 N + S = se atraen · N + N = se repelen", tip: "Con un imán de nevera, prueben qué objetos de la casa atrae." },
      { id: "xcie3c", title: "¿Lo atrae el imán?", gen: "sort", params: { bank: "cie_g3_atrae" }, lesson: "Un imán atrae objetos de hierro y acero, pero no aluminio, oro, madera, plástico ni vidrio.", example: "📎 clip de acero: sí · 🥤 lata de aluminio: no", tip: "Antes de probar con el imán, adivinen y anoten; luego comprueben." },
      { id: "xcie3d", title: "Máquinas simples", gen: "quiz", params: { bank: "cie_g3_maquinas" }, lesson: "Palanca, polea, plano inclinado, rueda, cuña y tornillo nos ayudan a hacer trabajo con menos esfuerzo. ¡Hasta nuestro cuerpo las usa!", example: "⚖️ balancín: palanca · 🪓 hacha: cuña · ♿ rampa: plano inclinado", tip: "Con una regla y un lápiz como apoyo, levanten un libro: ¡una palanca!" },
      { id: "xcie3e", title: "El agua y la temperatura", gen: "quiz", params: { bank: "cie_g3_agua" }, lesson: "El agua se congela a 0 °C y hierve a 100 °C a nivel del mar. Con el calor cambia de sólido a líquido y de líquido a gas.", example: "🧊 0 °C · 💧 líquida · ♨️ 100 °C", tip: "Pongan un cubo de hielo al sol y otro a la sombra y midan cuál se derrite primero." },
      { id: "xcie3f", title: "Dientes y alimentos", gen: "quiz", params: { bank: "cie_g3_dientes" }, lesson: "Incisivos cortan, caninos desgarran y molares trituran. Una dieta variada tiene carbohidratos, proteínas, grasas, vitaminas y minerales.", example: "🦷 incisivo · 🐺 canino · ⚙️ molar", tip: "Mírense los dientes en un espejo y cuenten cuántos de cada tipo tienen." },
      { id: "xcie3g", title: "Los invertebrados", gen: "sort", params: { bank: "cie_g3_invert" }, lesson: "Los invertebrados no tienen columna vertebral. Los insectos tienen 6 patas, los arácnidos 8; los moluscos tienen cuerpo blando y los crustáceos caparazón.", example: "🐜 insecto · 🕷️ arácnido · 🐌 molusco · 🦀 crustáceo", tip: "Con una lupa, busquen bichitos bajo una piedra y cuenten sus patas (¡sin tocarlos!)." },
      { id: "xcie3h", title: "Lecturas científicas", gen: "read", params: { level: "cie_r3" }, lesson: "Leer textos de ciencia nos ayuda a aprender datos y a entender cómo funciona la naturaleza.", example: "Lee con atención y busca las palabras clave.", tip: "Después de leer, cuenten con sus palabras lo que aprendieron." }
    ],
    4: [
      { id: "xcie4a", title: "Adaptaciones", gen: "quiz", params: { bank: "cie_g4_adaptacion" }, lesson: "Las adaptaciones son características que ayudan a los seres vivos a sobrevivir donde viven: espinas, grasa, camuflaje, migración…", example: "🌵 espinas · 🐪 grasa en la joroba · 🦎 camuflaje", tip: "Elijan un animal e inventen cómo sería si viviera en el polo o en el desierto." },
      { id: "xcie4b", title: "Redes alimentarias", gen: "quiz", params: { bank: "cie_g4_redes" }, lesson: "Las cadenas alimenticias se conectan y forman redes. La energía viene del Sol y pasa de productores a consumidores y descomponedores.", example: "🌱 → 🐭 → 🦉 y 🌱 → 🐛 → 🐦 → 🦉", tip: "Dibujen una red con animales de su región y unan con flechas quién come a quién." },
      { id: "xcie4c", title: "Recorridos por el cuerpo", gen: "orderSteps", params: { bank: "cie_g4_cuerpo" }, lesson: "La comida recorre el sistema digestivo, el aire el respiratorio y la sangre el circulatorio. Cada recorrido sigue un orden.", example: "Boca → esófago → estómago → intestinos", tip: "Midan el pulso en la muñeca en reposo y después de saltar un minuto." },
      { id: "xcie4d", title: "Electricidad y circuitos", gen: "quiz", params: { bank: "cie_g4_circuitos" }, lesson: "Un circuito necesita una fuente (pila), cables, un receptor (bombillo) y un interruptor. Si el circuito se abre, la corriente no pasa.", example: "🔋 → 🔌 → 💡 → 🎚️ → 🔋", tip: "Con ayuda de un adulto, enciendan un bombillo de linterna con una pila y papel de aluminio. ¡Nunca con enchufes!" },
      { id: "xcie4e", title: "El calor viaja", gen: "quiz", params: { bank: "cie_g4_calor" }, lesson: "El calor pasa de lo caliente a lo frío por conducción (contacto), convección (en líquidos y gases) o radiación (como la luz del Sol).", example: "🥄 conducción · 🍲 convección · ☀️ radiación", tip: "Pongan al sol una camiseta negra y una blanca y toquen cuál se calienta más." },
      { id: "xcie4f", title: "¿Cómo viaja el calor?", gen: "sort", params: { bank: "cie_g4_calor" }, lesson: "Clasifica cada situación según la forma en que se transmite el calor.", example: "🍳 sartén: conducción · 🎈 globo: convección", tip: "Echen una gota de colorante en agua tibia y observen las corrientes." },
      { id: "xcie4g", title: "Fuentes de energía", gen: "quiz", params: { bank: "cie_g4_energia" }, lesson: "Las energías renovables, como la solar, la eólica o la hidráulica, no se agotan. Los combustibles fósiles sí se acaban y contaminan.", example: "☀️ solar · 🌬️ eólica · 💧 hidráulica · 🛢️ petróleo", tip: "Hagan un molinete de papel y vean cómo el viento lo hace girar." },
      { id: "xcie4h", title: "Lecturas: ecosistemas y cuerpo", gen: "read", params: { level: "cie_r4" }, lesson: "Leer textos informativos te ayuda a encontrar datos, causas y consecuencias.", example: "Subraya las ideas principales mientras lees.", tip: "Hagan un dibujo que resuma cada lectura." }
    ],
    5: [
      { id: "xcie5a", title: "Microorganismos", gen: "quiz", params: { bank: "cie_g5_micro" }, lesson: "Bacterias, hongos microscópicos y protozoos son seres vivos diminutos. Algunos causan enfermedades, pero muchos son útiles: hacen yogur, pan y abono.", example: "🍞 levadura · 🥛 bacterias del yogur · 💊 penicilina", tip: "Dejen un pan húmedo en una bolsa cerrada unos días y observen el moho sin abrirla." },
      { id: "xcie5b", title: "Reproducción de los seres vivos", gen: "quiz", params: { bank: "cie_g5_repro" }, lesson: "La reproducción puede ser sexual (dos progenitores) o asexual (uno solo, como la bipartición, la gemación o los esquejes).", example: "🦠 bipartición · 🍞 gemación · 🐣 fecundación", tip: "Pongan un trozo de tallo de poto o de albahaca en agua y esperen a que salgan raíces." },
      { id: "xcie5c", title: "Ovíparos y vivíparos", gen: "sort", params: { bank: "cie_g5_ovi" }, lesson: "Los ovíparos nacen de huevos puestos fuera de la madre; los vivíparos se desarrollan dentro de ella.", example: "🐔 ovíparo · 🐶 vivíparo · 🦆 el ornitorrinco: ¡mamífero ovíparo!", tip: "Hagan una lista de animales que conocen y clasifíquenlos." },
      { id: "xcie5d", title: "Propiedades de la luz y el sonido", gen: "quiz", params: { bank: "cie_g5_ondas" }, lesson: "La luz se refleja y se refracta y viaja muchísimo más rápido que el sonido. El sonido tiene tono (agudo o grave) e intensidad (fuerte o suave).", example: "🪞 reflexión · ✏️ refracción · 🌈 prisma", tip: "Cuenten los segundos entre el rayo y el trueno y divídanlos entre 3: ¡son los kilómetros a los que está la tormenta!" },
      { id: "xcie5e", title: "Planetas en orden", gen: "orderSteps", params: { bank: "cie_g5_planetas" }, lesson: "Ordena los planetas desde el más cercano al Sol hasta el más lejano. También puedes ordenar las fases de la Luna desde la luna nueva.", example: "Mercurio → Venus → Tierra → Marte → Júpiter → Saturno → Urano → Neptuno", tip: "Hagan un modelo con frutas de distintos tamaños para comparar los planetas." },
      { id: "xcie5f", title: "La Luna y el espacio", gen: "quiz", params: { bank: "cie_g5_luna" }, lesson: "La Luna gira alrededor de la Tierra y refleja la luz del Sol. Por eso vemos fases: nueva, creciente, llena y menguante.", example: "🌑 → 🌓 → 🌕 → 🌗", tip: "Durante un mes dibujen cada noche la forma de la Luna en un calendario." },
      { id: "xcie5g", title: "Tiempo, clima e instrumentos", gen: "quiz", params: { bank: "cie_g5_clima" }, lesson: "El tiempo atmosférico cambia cada día; el clima es el promedio de muchos años. Lo medimos con termómetro, pluviómetro, anemómetro, barómetro y veleta.", example: "🌡️ temperatura · 🌧️ lluvia · 🌬️ viento", tip: "Construyan un pluviómetro con una botella cortada y una regla." }
    ],
    6: [
      { id: "xcie6a", title: "Clasificación de los seres vivos", gen: "quiz", params: { bank: "cie_g6_clasif" }, lesson: "Los científicos clasifican a los seres vivos en categorías: reino, filo, clase, orden, familia, género y especie. Cada especie tiene un nombre científico de dos palabras.", example: "🧍 Homo sapiens · 🐺 familia de los cánidos", tip: "Inventen una clave para clasificar los objetos de su cartuchera." },
      { id: "xcie6b", title: "Pubertad y reproducción humana", gen: "quiz", params: { bank: "cie_g6_pubertad" }, lesson: "En la pubertad las hormonas producen cambios en el cuerpo y las emociones. Cada persona tiene su propio ritmo y todos los cambios son normales.", example: "📏 estirón · 🧴 más sudor · 🗣️ cambio de voz", tip: "Conversen en familia sobre estos cambios y resuelvan las dudas con fuentes confiables." },
      { id: "xcie6c", title: "Herencia y genética", gen: "quiz", params: { bank: "cie_g6_herencia" }, lesson: "Los genes están en el ADN y pasan de padres a hijos: la mitad viene de cada progenitor. Algunos genes son dominantes y otros recesivos.", example: "🧬 ADN → genes → rasgos como el color de ojos", tip: "Hagan un árbol familiar con un rasgo, como el lóbulo de la oreja pegado o suelto." },
      { id: "xcie6d", title: "Átomos, elementos y compuestos", gen: "quiz", params: { bank: "cie_g6_atomos" }, lesson: "La materia está formada por átomos con protones, neutrones y electrones. Un elemento tiene un solo tipo de átomo; un compuesto une elementos distintos.", example: "Fe: elemento · H₂O: compuesto", tip: "Hagan moléculas con plastilina y palillos: dos bolitas de hidrógeno y una de oxígeno forman agua." },
      { id: "xcie6e", title: "¿Elemento o compuesto?", gen: "sort", params: { bank: "cie_g6_elem" }, lesson: "Mira la fórmula: si tiene un solo símbolo químico es un elemento; si combina varios, es un compuesto.", example: "Au: elemento · NaCl: compuesto", tip: "Busquen en las etiquetas de la cocina nombres de compuestos, como el bicarbonato de sodio." },
      { id: "xcie6f", title: "Cambios físicos y químicos", gen: "sort", params: { bank: "cie_g6_cambios" }, lesson: "En un cambio físico la sustancia sigue siendo la misma (derretir, cortar, disolver). En un cambio químico se forma una sustancia nueva (quemar, oxidar, cocinar).", example: "🧊 hielo que se derrite: físico · 🪵 madera que arde: químico", tip: "Mezclen bicarbonato y vinagre en un vaso: las burbujas muestran un cambio químico." },
      { id: "xcie6g", title: "Placas, sismos y volcanes", gen: "quiz", params: { bank: "cie_g6_tectonica" }, lesson: "La corteza está dividida en placas que se mueven unos centímetros al año. Donde chocan o se separan se forman montañas, volcanes y sismos.", example: "🏔️ Andes: placa de Nazca bajo la Sudamericana", tip: "Repasen en familia el plan de emergencia: agacharse, cubrirse y sujetarse." },
      { id: "xcie6h", title: "Cambio climático", gen: "quiz", params: { bank: "cie_g6_clima" }, lesson: "Quemar combustibles fósiles aumenta los gases de efecto invernadero y calienta el planeta. Podemos actuar ahorrando energía, sembrando árboles y usando transporte limpio.", example: "🏭 CO₂ ↑ → 🌡️ temperatura ↑ → 🧊 deshielo", tip: "Pongan dos frascos con termómetro al sol, uno tapado con plástico: el tapado se calienta más, como un invernadero." },
      { id: "xcie6i", title: "El método científico", gen: "orderSteps", params: { bank: "cie_g6_metodo" }, lesson: "Los científicos observan, preguntan, proponen una hipótesis, experimentan, analizan y concluyen.", example: "Observación → pregunta → hipótesis → experimento → análisis → conclusión", tip: "Elijan una pregunta sencilla (¿qué se seca antes, al sol o a la sombra?) y sigan todos los pasos." },
      { id: "xcie6j", title: "Lecturas: la Tierra y la herencia", gen: "read", params: { level: "cie_r6" }, lesson: "Los textos científicos explican causas y consecuencias con datos. Léelos con atención a las cifras y los nombres.", example: "Busca qué pasó, por qué pasó y qué se concluyó.", tip: "Después de leer, escriban una pregunta nueva que les gustaría investigar." }
    ]
  }
});
