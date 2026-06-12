// Datos de las disciplinas deportivas del Área de Representación Deportiva (DEFIDER)
// Cada deporte tiene un "slug" único que se usa en la URL: /deportes/:slug

const deportesData = [
  {
    slug: 'atletismo',
    nombre: 'Atletismo',
    categoria: 'Deporte Individual',
    img: '',
    descripcion: `El atletismo es un deporte organizado que abarca numerosas disciplinas agrupadas en carreras, saltos, lanzamientos y pruebas variadas. Entre las carreras se distinguen las carreras de velocidad, medio fondo, fondo, saltos y relevos. Dentro de las otras pruebas, existe la marcha de 20 o 50 km; salto de longitud, triple salto, salto de altura y salto con pértiga; lanzamientos de peso o bala, de disco, de martillo y de jabalina; y pruebas combinadas tales como el pentatlón, heptatlón y decatlón.

La USM cuenta con selecciones de atletismo en Valparaíso, en categorías damas y varones. Éstas compiten en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional, y en campeonatos de la Liga Deportiva de Educación Superior (LDES).`,
    sedes: [
      {
        nombreSede: 'Atletismo - Casa Central',
        profesor: 'Miguel González Vergara',
        recinto: 'Estadio USM',
        horarios: 'Martes y Jueves: 12:30 - 14:00'
      }
    ]
  },
  {
    slug: 'ajedrez',
    nombre: 'Ajedrez',
    categoria: 'Deporte Individual',
    img: '',
    descripcion: `El ajedrez es un juego entre dos contrincantes, donde cada uno dispone de 16 piezas móviles que se colocan sobre un tablero cuadriculado de 8 × 8 casillas o escaques. Se trata de un juego de estrategia en el que el objetivo es «derrocar» al rey del oponente, amenazando la casilla que ocupa el rey con alguna de las piezas propias sin que el otro jugador pueda protegerlo.

La selección de Ajedrez de la USM está ubicada en Valparaíso, y es integrada por damas y varones. Compite en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional.`,
    sedes: [
      {
        nombreSede: 'Ajedrez - Casa Central',
        profesor: 'Raúl Molina Muñoz',
        recinto: 'Sala de Ajedrez',
        horarios: 'Martes: 12:30 - 15:50\nJueves: 14:30 - 16:00'
      }
    ]
  },
  {
    slug: 'balonmano',
    nombre: 'Balonmano',
    categoria: 'Deporte Colectivo',
    img: '',
    descripcion: `El balonmano es un deporte colectivo, donde se enfrentan dos equipos de siete jugadores, con seis personas en cancha más uno portero. Se juega en una cancha de 42 × 20 metros y su objetivo es transportar el balón con las manos, haciendo goles en la portería contraria. El jugador de balonmano destaca por su resistencia, velocidad y habilidad para realizar movimientos con el balón.

La USM cuenta con selecciones de Balonmano en Valparaíso y Santiago, en categorías Damas y Varones. Éstas compiten en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional, y en campeonatos de la Liga Deportiva de Educación Superior (LDES).`,
    sedes: [
      {
        nombreSede: 'Balonmano Mujeres - Casa Central',
        profesor: 'Víctor Valenzuela Sagredo',
        recinto: 'Cancha 7x7\n*Gimnasio UTFSM Sede Viña del Mar',
        horarios: 'Martes y Jueves: 12:30 - 14:00\nViernes 19:30 - 21:00'
      },
      {
        nombreSede: 'Balonmano Mujeres - San Joaquín',
        profesor: 'Carlos Guaquín Barcenas',
        recinto: 'Gimnasio Campus San Joaquín',
        horarios: 'Lun 17:10 a 19:00 hrs.\nJue 18:30 a 20:30 hrs.'
      },
      {
        nombreSede: 'Balonmano Hombres - Casa Central',
        profesor: 'Víctor Valenzuela Sagredo',
        recinto: 'Gimnasio UTFSM Sede Viña del Mar',
        horarios: 'Martes y Jueves: 20:30 - 22:00\nViernes: 18:00 - 19:30'
      },
      {
        nombreSede: 'Balonmano Hombres - San Joaquín',
        profesor: 'José Sánchez Maldonado',
        recinto: 'Gimnasio Campus San Joaquín',
        horarios: 'Mié 18:15 a 20:15 hrs.\nJue 20:30 a 22:15 hrs.'
      }
    ]
  },
  {
    slug: 'basquetbol',
    nombre: 'Básquetbol',
    categoria: 'Deporte Colectivo',
    img: '',
    descripcion: `El básquetbol es un deporte de equipo jugado entre dos conjuntos de cinco jugadores cada uno. Su objetivo es anotar puntos introduciendo el balón por la canasta, un aro a 3,05 metros sobre la pista de juego. El contacto con la pelota se realiza con las manos y se juega en una cancha de 28 × 15 metros.

La USM cuenta con selecciones de Básquetbol en Valparaíso y Santiago, en categorías Damas y Varones. Éstas compiten en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional, y en campeonatos de la Liga Deportiva de Educación Superior (LDES). Además, la Selección de Básquetbol Varones de Casa Central también compite como invitada en la Asociación de Básquetbol de Valparaíso.`,
    sedes: [
      {
        nombreSede: 'Básquetbol Mujeres - Casa Central',
        profesor: 'Camilo Bustamante Guerrero',
        recinto: 'Cancha 5x5\n*Gimnasio 1',
        horarios: '*Lunes: 17:30 - 19:00\nMartes y Jueves: 12:30 - 14:00'
      },
      {
        nombreSede: 'Básquetbol Mujeres - San Joaquín',
        profesor: 'Jaime Castillo Saldias',
        recinto: 'Gimnasio',
        horarios: 'Lun 20:30 a 22:00 hrs.\nMar 19:00 a 20:30 hrs.'
      },
      {
        nombreSede: 'Básquetbol Hombres - Casa Central',
        profesor: 'Mauricio Ramírez Alegría',
        recinto: 'Cancha 5x5\n*Gimnasio 1',
        horarios: '*Miércoles: 17:30 - 19:00\nMartes y Jueves: 18:50 - 20:20'
      },
      {
        nombreSede: 'Básquetbol Hombres - San Joaquín',
        profesor: 'Jaime Castillo Saldias',
        recinto: 'Gimnasio',
        horarios: 'Lun 19:00 a 20:30 hrs.\nMar 20:30 a 22:00 hrs.'
      }
    ]
  },
  {
    slug: 'futbol',
    nombre: 'Fútbol',
    categoria: 'Deporte Colectivo',
    img: '',
    descripcion: `El fútbol es un deporte colectivo jugado entre dos equipos de once jugadores, cuyo objetivo es introducir el balón en el arco contrario utilizando cualquier parte del cuerpo, salvo las manos y los brazos.

La USM cuenta con selecciones de fútbol damas y varones que participan en campeonatos universitarios a nivel regional y nacional.`,
    sedes: [
      {
        nombreSede: 'Fútbol - Casa Central',
        profesor: 'Por confirmar',
        recinto: 'Estadio USM',
        horarios: 'Por confirmar'
      }
    ]
  },
  {
    slug: 'karate',
    nombre: 'Karate',
    categoria: 'Deporte de contacto',
    img: '',
    descripcion: `El karate es un arte marcial de origen japonés que combina técnicas de golpeo, bloqueo y desplazamiento, desarrollando disciplina, condición física y autocontrol.

La USM cuenta con selección de karate que entrena y compite en torneos universitarios, promoviendo valores como el respeto y la perseverancia.`,
    sedes: [
      {
        nombreSede: 'Karate - Casa Central',
        profesor: 'Por confirmar',
        recinto: 'Gimnasio',
        horarios: 'Por confirmar'
      }
    ]
  },
  {
    slug: 'natacion',
    nombre: 'Natación',
    categoria: 'Deporte Individual',
    img: '',
    descripcion: `La natación es un deporte individual que consiste en desplazarse en el agua mediante diferentes estilos (libre, espalda, pecho y mariposa), desarrollando resistencia, fuerza y técnica.

La USM cuenta con selección de natación que entrena en la piscina de Casa Central y compite en torneos universitarios.`,
    sedes: [
      {
        nombreSede: 'Natación - Casa Central',
        profesor: 'Por confirmar',
        recinto: 'Piscina USM',
        horarios: 'Por confirmar'
      }
    ]
  },
  {
    slug: 'rugby',
    nombre: 'Rugby',
    categoria: 'Deporte Colectivo',
    img: '',
    descripcion: `El rugby es un deporte colectivo de contacto jugado entre dos equipos, cuyo objetivo es llevar un balón ovalado hasta la zona de anotación del rival, combinando fuerza, velocidad y trabajo en equipo.

La USM cuenta con selección de rugby que participa en torneos universitarios a nivel nacional.`,
    sedes: [
      {
        nombreSede: 'Rugby - Casa Central',
        profesor: 'Por confirmar',
        recinto: 'Cancha de Rugby',
        horarios: 'Por confirmar'
      }
    ]
  },
  {
    slug: 'taekwondo',
    nombre: 'Taekwondo',
    categoria: 'Deporte de contacto',
    img: '',
    descripcion: `El taekwondo es un arte marcial de origen coreano caracterizado por sus técnicas de patada y golpes, que desarrolla flexibilidad, potencia y disciplina mental.

La USM cuenta con selección de taekwondo que entrena y participa en competencias universitarias.`,
    sedes: [
      {
        nombreSede: 'Taekwondo - Casa Central',
        profesor: 'Por confirmar',
        recinto: 'Gimnasio',
        horarios: 'Por confirmar'
      }
    ]
  },
  {
    slug: 'tenis',
    nombre: 'Tenis',
    categoria: 'Deporte Individual',
    img: '',
    descripcion: `El tenis es un deporte individual (o de dobles) en el que dos jugadores o parejas se enfrentan golpeando una pelota con una raqueta sobre una cancha dividida por una red.

La USM cuenta con selección de tenis que compite en torneos universitarios a nivel regional y nacional.`,
    sedes: [
      {
        nombreSede: 'Tenis - Casa Central',
        profesor: 'Por confirmar',
        recinto: 'Cancha Tenis',
        horarios: 'Por confirmar'
      }
    ]
  },
  {
    slug: 'tenis-de-mesa',
    nombre: 'Tenis de Mesa',
    categoria: 'Deporte Individual',
    img: '',
    descripcion: `El tenis de mesa, también conocido como ping pong, es un deporte individual o de dobles en el que los jugadores golpean una pelota ligera sobre una mesa dividida por una red, utilizando palas pequeñas.

La USM cuenta con selección de tenis de mesa que participa en torneos universitarios.`,
    sedes: [
      {
        nombreSede: 'Tenis de Mesa - Casa Central',
        profesor: 'Por confirmar',
        recinto: 'Gimnasio',
        horarios: 'Por confirmar'
      }
    ]
  },
  {
    slug: 'voleibol',
    nombre: 'Vóleibol',
    categoria: 'Deporte Colectivo',
    img: '',
    descripcion: `El vóleibol es un deporte colectivo jugado entre dos equipos separados por una red, cuyo objetivo es hacer que el balón toque el suelo del campo contrario sin que el rival pueda devolverlo.

La USM cuenta con selecciones de vóleibol damas y varones que compiten en campeonatos universitarios.`,
    sedes: [
      {
        nombreSede: 'Vóleibol - Casa Central',
        profesor: 'Por confirmar',
        recinto: 'Gimnasio',
        horarios: 'Por confirmar'
      }
    ]
  },
  {
    slug: 'futsal',
    nombre: 'Futsal',
    categoria: 'Deporte Colectivo',
    img: '',
    descripcion: `El futsal es una variante del fútbol que se juega en una cancha más pequeña, con equipos de cinco jugadores, lo que exige mayor técnica individual, velocidad de juego y precisión en los pases.

La USM cuenta con selección de futsal que participa en torneos universitarios a nivel regional y nacional.`,
    sedes: [
      {
        nombreSede: 'Futsal - Casa Central',
        profesor: 'Por confirmar',
        recinto: 'Multicancha',
        horarios: 'Por confirmar'
      }
    ]
  }
];

export default deportesData;
