// ==========================================
// 1. NAVEGACIÓN ENTRE PANTALLAS
// ==========================================

function changeScreen(screenId) {
  const screens = document.querySelectorAll('.screen');

  screens.forEach(screen => {
    screen.classList.remove('active');
  });

  const nextScreen = document.getElementById(screenId);

  if (nextScreen) {
    nextScreen.classList.add('active');
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.openGift = function() {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const storyIntro = document.getElementById('story-intro');
  if (storyIntro) {
    storyIntro.classList.add('active');
  }
  window.scrollTo(0, 0);
};

function openStory() {
  changeScreen('story');
}

function openChildhood() {
  changeScreen('childhood');
}

function openChapterThree() {
  changeScreen('chapter-three');
}

function openMarioWorld() {
  changeScreen('mario-world');
}

function openMarioCategory(category) {
  if (category === 'music') {
    changeScreen('music');
  }
}
// ==========================================
// 2. NARIZ DEL PAYASO
// ==========================================

function moveClownNose(event) {
  if (event) event.stopPropagation();

  const clown = document.getElementById('clownCharacter');
  const message = document.getElementById('clownMessage');

  if (!clown || !message) return;

  clown.classList.remove('nose-moved');
  void clown.offsetWidth;
  clown.classList.add('nose-moved');

  message.textContent =
    '¡HONK HONK! 🤡 No puede parar de hacer el payaso.';
}


// ==========================================
// 3. OBJETOS DE CINE
// ==========================================

function cinemaAction(object, element) {
  const message = document.getElementById('cinemaMessage');

  if (!message || !element) return;

  const messages = {
    claqueta: '¡ACCIÓN! Mario, preparado para tu primer plano.',
    pelicula: 'Una historia, mil posibilidades y muchas películas por ver.',
    foco: '¡Todos los focos apuntan a nuestro protagonista!'
  };

  message.textContent = messages[object] || '';

  element.classList.remove('clicked');
  void element.offsetWidth;
  element.classList.add('clicked');
}

function moveCinemaObject(element) {
  if (!element) return;

  element.classList.add('disappearing');

  setTimeout(() => {
    element.remove();
  }, 450);
}


// ==========================================
// 4. CANCIONES
// ==========================================

const marioSongs = {
  quevedo: [
    'Columbia',
    'Punto G',
    'Vista al Mar',
    'Playa del Inglés',
    'Quédate',
    'Gran Vía',
    'Buenas',
    'Ahora Qué',
    'Soleao',
    'Ni Borracho',
    'TUCHAT',
    'AL GOLPITO',
    'EL BAIFO',
    'Algo Va a Pasar'
  ],

  luchork: [
    'RETRICA',
    'AIRE',
    'LOLA',
    'CONTIGO',
    'SUMISA',
    'RIGHT NOW',
    'SINTIGO',
    'TOCO TOCA',
    'FACE ID',
    'PINKY PROMISE 2',
    'BANE',
    'TOCATE SOLA',
    'SOÑASTE CON UN DRACO',
    'GUAYA',
    'CUPIDOxX',
    'AIAIAI'
  ],

  lapantera: [
    'Cayó La Noche',
    'Piel de Cordero',
    'HALO',
    'Quiero Más',
    'PINKY PROMISE 2',
    'CUPIDOxX',
    'BANE',
    'TOCATE SOLA',
    'TOO',
    'TOTY',
    'DOGGY',
    'NO ME GUILLO v2',
    'QUE HAGO',
    'SHARINGAN',
    'MI CARRERA ES MÍA'
  ],

  zakyo: [
    'VERSACHI',
    'CUEVITA',
    'SANTORINI',
    'CUANDO ME DUERMA',
    'DAIQUIRI',
    'AGUA DE MAR',
    'REACTION',
    'MADRUGADA',
    'ATLANTIS',
    'AURA',
    'Síndrome de abstinencia',
    'Sábado Rebelde',
    'ESPIRAL',
    'Gorila Blu',
    'perfecto',
    'La Forma De Antes'
  ]
};

function showRandomSong(artist, element) {
  const songs = marioSongs[artist];

  if (!songs || !element) return;

  const currentSong = element.dataset.currentSong;
  const availableSongs = songs.filter(song => song !== currentSong);

  const randomSong = availableSongs[
    Math.floor(Math.random() * availableSongs.length)
  ];

  element.dataset.currentSong = randomSong;

  const result = element.querySelector('.song-result');

  if (!result) return;

  result.textContent = '♫ ' + randomSong;
  result.classList.remove('song-visible');

  void result.offsetWidth;

  result.classList.add('song-visible');
}


// ==========================================
// 5. COLLAGE: ABRIR Y CERRAR VENTANAS
// ==========================================

function openCollageItem(item) {
  const modal = document.getElementById('collageModal');
  const content = document.getElementById('collageModalContent');

  if (!modal || !content) return;

  const messages = {

    onepiece: `
      <div style="font-size:55px;">☠️</div>
      <h2>WELCOME TO THE GRAND LINE</h2>
      <p>Bienvenido al universo de One Piece.</p>
      <p>¿Qué aventura quieres descubrir?</p>

      <div class="onepiece-menu">
        <button class="onepiece-button" onclick="showRandomOnePieceCharacter()">☠ PERSONAJE ALEATORIO</button>
        <button class="onepiece-button" onclick="showRandomOnePieceClip()">▶ CLIPS ALEATORIOS</button>
        <button class="onepiece-button" onclick="showRandomOnePieceFact()">✦ DATOS CURIOSOS</button>
        <button class="onepiece-button" onclick="showOnePieceWorld()">🌊 EL MUNDO DE ONE PIECE</button>
      </div>
    `,

    capi: `
      <div style="font-size:60px;">🐶</div>
      <h2>¡EL MUNDO DE CAPI!</h2>
      <p>Porque los perros también tienen sus secretos...</p>

      <button class="capi-button" onclick="showDogFact()">
        🐾 CURIOSIDADES PERRUNAS
      </button>
    `,

    lqsa: `
      <div style="font-size:55px;">📺</div>
      <h2>¡QUÉ COMUNIDAD!</h2>
      <p>Vecinos, líos y situaciones que no tienen ningún sentido.</p>
      <p><strong>Bienvenido a Montepinar.</strong></p>

      <button class="lqsa-clip-button" onclick="showRandomLqsaClip()">
        ▶ VER CLIP ALEATORIO
      </button>
    `,

    madrid: `
      <div style="font-size:60px;">⚽</div>
      <h2>HALA MADRID</h2>
      <p>Historia, leyendas y noches inolvidables.</p>
      <p><strong>¿Qué quieres descubrir?</strong></p>

      <div class="madrid-menu">
        <button class="madrid-button" onclick="showRandomMadridMatch()">⚽ PARTIDO ALEATORIO</button>
        <button class="madrid-button" onclick="showRandomMadridPlayer()">⭐ JUGADOR ALEATORIO</button>
        <button class="madrid-button" onclick="showRandomMadridAward()">🏆 PREMIO ALEATORIO</button>
      </div>
    `,

    marvel: `
      <div style="font-size:55px;">🦸‍♂️</div>
      <h2>MARVEL UNIVERSE</h2>
      <p>Héroes, villanos, multiversos y aventuras.</p>
      <p><strong>¿Qué quieres descubrir?</strong></p>

      <div class="marvel-menu">
        <button class="marvel-button" onclick="showRandomMarvelMovie()">🎬 PELÍCULA ALEATORIA</button>
        <button class="marvel-button" onclick="showRandomMarvelCharacter()">🦸 PERSONAJE ALEATORIO</button>
        <button class="marvel-button" onclick="showRandomMarvelFact()">✦ CURIOSIDADES</button>
        <button class="marvel-button" onclick="startMarvelQuiz()">🧠 MARVEL QUIZ</button>
      </div>
    `
  };

  content.innerHTML = messages[item] || '';
  modal.classList.add('show');
}

function closeCollageItem() {
  const modal = document.getElementById('collageModal');

  if (modal) {
    modal.classList.remove('show');
  }
}


// Cerrar al pulsar fuera de la ventana

function setupCollageModal() {
  const modal = document.getElementById('collageModal');

  if (!modal) return;

  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeCollageItem();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupCollageModal);
} else {
  setupCollageModal();
}


// ==========================================
// 6. LA QUE SE AVECINA
// ==========================================

function showRandomLqsaClip() {
  const clips = [
    'La que se avecina Antonio Recio mejores momentos',
    'La que se avecina Amador Rivas mejores momentos',
    'La que se avecina Enrique Pastor escenas divertidas',
    'La que se avecina Estela Reynolds mejores momentos',
    'La que se avecina Coque escenas divertidas',
    'La que se avecina momentos míticos Montepinar',
    'La que se avecina Recio pescadero escenas',
    'La que se avecina mejores frases y momentos'
  ];

  const randomClip = clips[
    Math.floor(Math.random() * clips.length)
  ];

  window.open(
    'https://www.youtube.com/results?search_query=' +
    encodeURIComponent(randomClip),
    '_blank'
  );
}


// ==========================================
// 7. UNIVERSO ONE PIECE
// ==========================================

function showOnePieceMenu() {
  openCollageItem('onepiece');
}

function showRandomOnePieceCharacter() {
  const characters = [
    {
      name: 'MONKEY D. LUFFY',
      description: 'El capitán de los Sombrero de Paja. Su sueño es convertirse en el Rey de los Piratas.'
    },
    {
      name: 'RORONOA ZORO',
      description: 'El espadachín de la tripulación. Sueña con convertirse en el mejor espadachín del mundo.'
    },
    {
      name: 'NAMI',
      description: 'La navegante de la tripulación. Su sueño es dibujar un mapa del mundo entero.'
    },
    {
      name: 'SANJI',
      description: 'El cocinero de los Sombrero de Paja. Busca el legendario All Blue.'
    },
    {
      name: 'TONY TONY CHOPPER',
      description: 'Un reno que se convirtió en médico gracias a una Fruta del Diablo.'
    },
    {
      name: 'NICO ROBIN',
      description: 'La arqueóloga de la tripulación. Le apasiona descubrir la historia del mundo.'
    },
    {
      name: 'USOPP',
      description: 'El francotirador de la tripulación. Sueña con convertirse en un valiente guerrero del mar.'
    },
    {
      name: 'FRANKY',
      description: 'El carpintero de la tripulación. Es un cíborg apasionado de los barcos.'
    },
    {
      name: 'BROOK',
      description: 'El músico de la tripulación. Es un esqueleto viviente y un gran espadachín.'
    },
    {
      name: 'JINBE',
      description: 'El timonel de los Sombrero de Paja y un poderoso hombre pez.'
    }
  ];

  const character = characters[
    Math.floor(Math.random() * characters.length)
  ];

  const content = document.getElementById('collageModalContent');

  if (!content) return;

  content.innerHTML = `
    <div style="font-size:50px;">☠️</div>
    <p>YOUR RANDOM CHARACTER IS...</p>
    <h2>${character.name}</h2>
    <p>${character.description}</p>

    <button class="onepiece-button" onclick="showRandomOnePieceCharacter()">
      ↻ OTRO PERSONAJE
    </button>

    <button class="onepiece-back" onclick="showOnePieceMenu()">
      ← VOLVER
    </button>
  `;
}

function showRandomOnePieceClip() {
  const clips = [
    'One Piece mejores momentos Luffy',
    'One Piece mejores peleas',
    'One Piece momentos épicos Zoro',
    'One Piece momentos divertidos',
    'One Piece escenas emocionantes',
    'One Piece mejores momentos de la tripulación',
    'One Piece escenas míticas'
  ];

  const clip = clips[
    Math.floor(Math.random() * clips.length)
  ];

  window.open(
    'https://www.youtube.com/results?search_query=' +
    encodeURIComponent(clip),
    '_blank'
  );
}

function showRandomOnePieceFact() {
  const facts = [
    'El sombrero de paja de Luffy se lo entregó Shanks cuando era pequeño.',
    'Chopper es un reno que comió la Fruta Hito Hito no Mi.',
    'Nami es la navegante de los Sombrero de Paja.',
    'Sanji es el cocinero de la tripulación.',
    'Brook tiene 90 años al comienzo de su aventura con los Sombrero de Paja.',
    'El sueño de Zoro es convertirse en el mejor espadachín del mundo.',
    'Usopp es el francotirador de la tripulación.',
    'El Thousand Sunny es el barco que sucede al Going Merry.'
  ];

  const fact = facts[Math.floor(Math.random() * facts.length)];
  const content = document.getElementById('collageModalContent');

  if (!content) return;

  content.innerHTML = `
    <div style="font-size:55px;">💡</div>
    <p>DID YOU KNOW?</p>
    <h2>DATO CURIOSO</h2>
    <p class="onepiece-fact">${fact}</p>

    <button class="onepiece-button" onclick="showRandomOnePieceFact()">
      ✦ OTRO DATO
    </button>

    <button class="onepiece-back" onclick="showOnePieceMenu()">
      ← VOLVER
    </button>
  `;
}

function showOnePieceWorld() {
  const content = document.getElementById('collageModalContent');

  if (!content) return;

  content.innerHTML = `
    <div style="font-size:55px;">🌊</div>
    <h2>THE WORLD OF ONE PIECE</h2>
    <p>Un mundo de piratas, tesoros, islas misteriosas y poderes increíbles.</p>

    <button class="onepiece-button"
      onclick="window.open('https://www.google.com/search?q=One+Piece+Devil+Fruits', '_blank')">
      🍎 FRUTAS DEL DIABLO
    </button>

    <button class="onepiece-button"
      onclick="window.open('https://www.google.com/search?q=One+Piece+pirate+crews', '_blank')">
      ☠ TRIPULACIONES PIRATAS
    </button>

    <button class="onepiece-button"
      onclick="window.open('https://www.google.com/search?q=One+Piece+islands', '_blank')">
      🏝 ISLAS Y LUGARES
    </button>

    <button class="onepiece-back" onclick="showOnePieceMenu()">
      ← VOLVER
    </button>
  `;
}


// ==========================================
// 8. UNIVERSO REAL MADRID
// ==========================================

function showMadridMenu() {
  openCollageItem('madrid');
}

function showRandomMadridMatch() {
  const matches = [
    'Real Madrid 4-0 Bayern Munich 2014',
    'Real Madrid 2-1 Bayern Munich 2024',
    'Real Madrid 3-1 Liverpool 2022',
    'Real Madrid 4-2 Bayern Munich 2017',
    'Real Madrid 3-1 Manchester City 2022',
    'Real Madrid 2-0 Borussia Dortmund 2024',
    'Real Madrid 4-1 Juventus 2017',
    'Real Madrid 5-0 Barcelona 1995',
    'Real Madrid 2-1 Atlético de Madrid final Champions 2014',
    'Real Madrid 3-2 Manchester City 2025'
  ];

  const match = matches[
    Math.floor(Math.random() * matches.length)
  ];

  const content = document.getElementById('collageModalContent');

  if (!content) return;

  content.innerHTML = `
    <div style="font-size:55px;">⚽</div>
    <p>TONIGHT'S MATCH</p>
    <h2>PARTIDO ALEATORIO</h2>
    <p class="madrid-result">${match}</p>

    <button class="madrid-button" onclick="searchMadridMatch('${match}')">
      ▶ VER PARTIDO
    </button>

    <button class="madrid-button" onclick="showRandomMadridMatch()">
      ↻ OTRO PARTIDO
    </button>

    <button class="madrid-back" onclick="showMadridMenu()">
      ← VOLVER
    </button>
  `;
}

function searchMadridMatch(match) {
  window.open(
    'https://www.youtube.com/results?search_query=' +
    encodeURIComponent(match + ' full match'),
    '_blank'
  );
}

function showRandomMadridPlayer() {
  const players = [
    ['CRISTIANO RONALDO', 'Una de las mayores leyendas del club y máximo goleador histórico del Real Madrid.'],
    ['ZINEDINE ZIDANE', 'Elegancia, talento y una volea inolvidable en la final de Glasgow.'],
    ['SERGIO RAMOS', 'Capitán histórico y autor del famoso gol de Lisboa.'],
    ['IKER CASILLAS', 'El Santo. Uno de los porteros más importantes de la historia del club.'],
    ['RAÚL GONZÁLEZ', 'Una leyenda blanca que llevó el brazalete durante años.'],
    ['KARIM BENZEMA', 'Balón de Oro en 2022 y pieza fundamental de una época histórica.'],
    ['LUKA MODRIĆ', 'Balón de Oro en 2018 y maestro del centro del campo.'],
    ['TONI KROOS', 'Precisión, visión y una zurda espectacular.'],
    ['VINÍCIUS JR.', 'Velocidad, regate y protagonista de grandes noches europeas.'],
    ['JUDE BELLINGHAM', 'Un centrocampista con llegada, talento y personalidad.'],
    ['ROBERTO CARLOS', 'Un lateral legendario con una zurda potentísima.'],
    ['FERNANDO HIERRO', 'Defensa histórico y uno de los grandes capitanes del Madrid.'],
    ['GARETH BALE', 'Autor de uno de los goles más espectaculares de las finales de Champions.'],
    ['KAKÁ', 'Talento brasileño y ganador del Balón de Oro en 2007.']
  ];

  const player = players[
    Math.floor(Math.random() * players.length)
  ];

  const content = document.getElementById('collageModalContent');

  if (!content) return;

  content.innerHTML = `
    <div style="font-size:55px;">⭐</div>
    <p>WHITE LEGEND</p>
    <h2>${player[0]}</h2>
    <p class="madrid-result">${player[1]}</p>

    <button class="madrid-button" onclick="showRandomMadridPlayer()">
      ↻ OTRO JUGADOR
    </button>

    <button class="madrid-back" onclick="showMadridMenu()">
      ← VOLVER
    </button>
  `;
}

function showRandomMadridAward() {
  const awards = [
    ['CHAMPIONS LEAGUE', 'El Real Madrid ha conquistado 15 Copas de Europa.'],
    ['LIGA', 'El club ha ganado 36 títulos de Liga española.'],
    ['COPA DEL REY', 'Uno de los grandes títulos nacionales del fútbol español.'],
    ['SUPERCOPA DE EUROPA', 'El Madrid ha conquistado 6 Supercopas de Europa.'],
    ['MUNDIAL DE CLUBES', 'El club ha ganado 5 Mundiales de Clubes de la FIFA en el formato anterior.'],
    ['COPA INTERCONTINENTAL', 'El Real Madrid también ha levantado este título internacional.'],
    ['BALÓN DE ORO', 'Numerosos jugadores madridistas han recibido este prestigioso galardón.']
  ];

  const award = awards[
    Math.floor(Math.random() * awards.length)
  ];

  const content = document.getElementById('collageModalContent');

  if (!content) return;

  content.innerHTML = `
    <div style="font-size:60px;">🏆</div>
    <p>HISTORY OF CHAMPIONS</p>
    <h2>${award[0]}</h2>
    <p class="madrid-result">${award[1]}</p>

    <button class="madrid-button" onclick="showRandomMadridAward()">
      ↻ OTRO PREMIO
    </button>

    <button class="madrid-back" onclick="showMadridMenu()">
      ← VOLVER
    </button>
  `;
}


// ==========================================
// 9. UNIVERSO MARVEL
// ==========================================

function showMarvelMenu() {
  openCollageItem('marvel');
}


// PELÍCULAS

const marvelMovies = [
  'Iron Man',
  'The Avengers',
  'Capitán América: El Soldado de Invierno',
  'Guardianes de la Galaxia',
  'Vengadores: La era de Ultrón',
  'Doctor Strange',
  'Thor: Ragnarok',
  'Black Panther',
  'Vengadores: Infinity War',
  'Vengadores: Endgame',
  'Spider-Man: No Way Home',
  'Shang-Chi',
  'Deadpool y Lobezno',
  'Capitán América: Civil War',
  'Iron Man 3',
  'Ant-Man'
];

function showRandomMarvelMovie() {
  const movie = marvelMovies[
    Math.floor(Math.random() * marvelMovies.length)
  ];

  const content = document.getElementById('collageModalContent');

  if (!content) return;

  content.innerHTML = `
    <div style="font-size:55px;">🎬</div>
    <p>TONIGHT'S MOVIE</p>
    <h2>${movie}</h2>
    <p>¡Esta es tu película Marvel aleatoria!</p>

    <button class="marvel-button" onclick="searchMarvelMovie('${movie}')">
      ▶ VER TRÁILER
    </button>

    <button class="marvel-button" onclick="showRandomMarvelMovie()">
      ↻ OTRA PELÍCULA
    </button>

    <button class="marvel-back" onclick="showMarvelMenu()">
      ← VOLVER
    </button>
  `;
}

function searchMarvelMovie(movie) {
  window.open(
    'https://www.youtube.com/results?search_query=' +
    encodeURIComponent(movie + ' official trailer'),
    '_blank'
  );
}


// PERSONAJES

const marvelCharacters = [
  ['IRON MAN', 'Tony Stark: un genio, multimillonario y creador de una armadura extraordinaria.'],
  ['SPIDER-MAN', 'Peter Parker: un joven con reflejos increíbles, sentido arácnido y mucha responsabilidad.'],
  ['THOR', 'El Dios del Trueno de Asgard, portador del poderoso Mjolnir.'],
  ['LOKI', 'El Dios del Engaño, conocido por sus trucos, magia y cambios de bando.'],
  ['DOCTOR STRANGE', 'Stephen Strange: un antiguo cirujano que se convierte en Maestro de las Artes Místicas.'],
  ['BLACK PANTHER', 'T’Challa: rey de Wakanda y protector de su pueblo.'],
  ['WANDA MAXIMOFF', 'La Bruja Escarlata, capaz de manipular la magia y la realidad.'],
  ['DEADPOOL', 'Un antihéroe impredecible con un humor muy particular y poderes regenerativos.'],
  ['THANOS', 'Un poderoso titán obsesionado con conseguir las Gemas del Infinito.'],
  ['CAPITÁN AMÉRICA', 'Steve Rogers: un supersoldado que representa el valor y la justicia.'],
  ['BLACK WIDOW', 'Natasha Romanoff: una espía y experta combatiente.'],
  ['HULK', 'Bruce Banner: un científico que se transforma en una criatura de fuerza extraordinaria.'],
  ['STAR-LORD', 'Peter Quill: el líder de los Guardianes de la Galaxia.'],
  ['GROOT', 'Un miembro de los Guardianes de la Galaxia que se comunica con una frase muy especial.']
];

function showRandomMarvelCharacter() {
  const character = marvelCharacters[
    Math.floor(Math.random() * marvelCharacters.length)
  ];

  const content = document.getElementById('collageModalContent');

  if (!content) return;

  content.innerHTML = `
    <div style="font-size:55px;">🦸</div>
    <p>CHARACTER FILE</p>
    <h2>${character[0]}</h2>
    <p class="marvel-result">${character[1]}</p>

    <button class="marvel-button" onclick="showRandomMarvelCharacter()">
      ↻ OTRO PERSONAJE
    </button>

    <button class="marvel-back" onclick="showMarvelMenu()">
      ← VOLVER
    </button>
  `;
}


// CURIOSIDADES MARVEL

const marvelFacts = [
  'La primera película del Universo Cinematográfico Marvel fue Iron Man, estrenada en 2008.',
  'Wakanda es un país ficticio de África conocido por sus enormes avances tecnológicos.',
  'El nombre de nacimiento de Spider-Man es Peter Parker.',
  'Mjolnir es el famoso martillo de Thor.',
  'Las Gemas del Infinito son seis: Espacio, Mente, Realidad, Poder, Tiempo y Alma.',
  'Stan Lee realizó numerosos cameos en películas de Marvel.',
  'Los Guardianes de la Galaxia están formados por personajes de diferentes especies y mundos.',
  'Tony Stark es el nombre real de Iron Man.',
  'El escudo del Capitán América está hecho principalmente de vibranium en el universo cinematográfico.'
];

function showRandomMarvelFact() {
  const fact = marvelFacts[
    Math.floor(Math.random() * marvelFacts.length)
  ];

  const content = document.getElementById('collageModalContent');

  if (!content) return;

  content.innerHTML = `
    <div style="font-size:55px;">💡</div>
    <p>MARVEL KNOWLEDGE</p>
    <h2>¿SABÍAS QUE...?</h2>
    <p class="marvel-result">${fact}</p>

    <button class="marvel-button" onclick="showRandomMarvelFact()">
      ✦ OTRA CURIOSIDAD
    </button>

    <button class="marvel-back" onclick="showMarvelMenu()">
      ← VOLVER
    </button>
  `;
}


// ==========================================
// 10. MARVEL QUIZ
// ==========================================

const marvelQuestions = [
  {
    question: '¿Cómo se llama realmente Iron Man?',
    answers: ['Steve Rogers', 'Tony Stark', 'Bruce Banner', 'Peter Parker'],
    correct: 1
  },
  {
    question: '¿Cómo se llama el martillo de Thor?',
    answers: ['Stormbreaker', 'Excalibur', 'Mjolnir', 'Gungnir'],
    correct: 2
  },
  {
    question: '¿Qué personaje es el rey de Wakanda?',
    answers: ['T’Challa', 'M’Baku', 'Sam Wilson', 'Nick Fury'],
    correct: 0
  },
  {
    question: '¿Qué busca conseguir Thanos?',
    answers: ['Las Gemas del Infinito', 'El escudo del Capitán América', 'El reactor de Tony Stark', 'El Ojo de Agamotto'],
    correct: 0
  },
  {
    question: '¿Cuál es la identidad secreta de Spider-Man?',
    answers: ['Miles Morales', 'Peter Parker', 'Eddie Brock', 'Harry Osborn'],
    correct: 1
  },
  {
    question: '¿Qué frase dice habitualmente Groot?',
    answers: ['I am Groot', 'Avengers assemble', 'Wakanda forever', 'I can do this all day'],
    correct: 0
  },
  {
    question: '¿Quién es conocido como el Dios del Engaño?',
    answers: ['Thor', 'Odin', 'Loki', 'Thanos'],
    correct: 2
  },
  {
    question: '¿Cómo se llama el mejor amigo de Tony Stark que también lleva una armadura?',
    answers: ['James Rhodes', 'Clint Barton', 'Scott Lang', 'Bucky Barnes'],
    correct: 0
  }
];

let marvelQuizIndex = 0;
let marvelQuizScore = 0;
let marvelQuizAnswered = false;

function startMarvelQuiz() {
  marvelQuizIndex = 0;
  marvelQuizScore = 0;
  marvelQuizAnswered = false;

  renderMarvelQuestion();
}

function renderMarvelQuestion() {
  const content = document.getElementById('collageModalContent');
  const question = marvelQuestions[marvelQuizIndex];

  if (!content || !question) return;

  content.innerHTML = `
    <div style="font-size:45px;">🧠</div>
    <p>MARVEL KNOWLEDGE TEST</p>
    <h2>MARVEL QUIZ</h2>

    <p class="marvel-progress">
      PREGUNTA ${marvelQuizIndex + 1} DE ${marvelQuestions.length}
    </p>

    <div class="marvel-progress-bar">
      <div style="width:${((marvelQuizIndex + 1) / marvelQuestions.length) * 100}%"></div>
    </div>

    <p class="marvel-question">${question.question}</p>

    <div class="marvel-answers">
      ${question.answers.map((answer, index) => `
        <button class="marvel-answer"
          id="marvelAnswer${index}"
          onclick="answerMarvelQuiz(${index})">
          ${String.fromCharCode(65 + index)}. ${answer}
        </button>
      `).join('')}
    </div>

    <p id="marvelQuizFeedback" class="marvel-feedback"></p>

    <button id="marvelNextButton"
      class="marvel-button"
      style="display:none;"
      onclick="nextMarvelQuestion()">
      SIGUIENTE PREGUNTA →
    </button>

    <button class="marvel-back" onclick="showMarvelMenu()">
      ← SALIR DEL QUIZ
    </button>
  `;
}

function answerMarvelQuiz(selected) {
  if (marvelQuizAnswered) return;

  marvelQuizAnswered = true;

  const question = marvelQuestions[marvelQuizIndex];
  const feedback = document.getElementById('marvelQuizFeedback');

  if (!question || !feedback) return;

  question.answers.forEach((answer, index) => {
    const button = document.getElementById('marvelAnswer' + index);

    if (!button) return;

    button.disabled = true;

    if (index === question.correct) {
      button.classList.add('marvel-correct');
    } else if (index === selected) {
      button.classList.add('marvel-incorrect');
    }
  });

  if (selected === question.correct) {
    marvelQuizScore++;
    feedback.textContent = '¡CORRECTO! 🔥 Muy bien, conoces Marvel.';
  } else {
    feedback.textContent =
      '¡UPS! La respuesta correcta era: ' +
      question.answers[question.correct] + '.';
  }

  const nextButton = document.getElementById('marvelNextButton');

  if (!nextButton) return;

  nextButton.style.display = 'block';

  if (marvelQuizIndex === marvelQuestions.length - 1) {
    nextButton.textContent = 'VER RESULTADO →';
  }
}

function nextMarvelQuestion() {
  if (!marvelQuizAnswered) return;

  marvelQuizIndex++;

  if (marvelQuizIndex < marvelQuestions.length) {
    marvelQuizAnswered = false;
    renderMarvelQuestion();
  } else {
    showMarvelQuizResult();
  }
}

function showMarvelQuizResult() {
  const content = document.getElementById('collageModalContent');

  if (!content) return;

  let title = '';
  let message = '';

  if (marvelQuizScore === 8) {
    title = 'MARVEL LEGEND';
    message = '¡PERFECTO! Eres todo un experto del universo Marvel.';
  } else if (marvelQuizScore >= 6) {
    title = 'SUPERHÉROE';
    message = '¡Muy buen resultado! Se nota que conoces Marvel.';
  } else if (marvelQuizScore >= 4) {
    title = 'AVENGER IN TRAINING';
    message = 'Vas por buen camino, pero todavía tienes cosas que descubrir.';
  } else {
    title = 'ORIGIN STORY';
    message = '¡Toca un maratón de películas Marvel!';
  }

  content.innerHTML = `
    <div style="font-size:60px;">🏆</div>
    <p>YOUR FINAL SCORE</p>
    <h2>${title}</h2>

    <div class="marvel-score">
      ${marvelQuizScore} / ${marvelQuestions.length}
    </div>

    <p class="marvel-result">${message}</p>

    <button class="marvel-button" onclick="startMarvelQuiz()">
      ↻ VOLVER A JUGAR
    </button>

    <button class="marvel-back" onclick="showMarvelMenu()">
      ← VOLVER AL MENÚ
    </button>
  `;
}


// ==========================================
// 11. CURIOSIDADES DE CAPI
// ==========================================

const dogFacts = [
  'Los perros pueden reconocer emociones humanas a través de nuestras expresiones faciales y nuestra voz.',
  'El olfato de un perro es muchísimo más sensible que el nuestro.',
  'Los perros sueñan mientras duermen, igual que las personas.',
  'Cada nariz de perro tiene un patrón único, como nuestras huellas dactilares.',
  'Algunos perros pueden aprender a reconocer cientos de palabras.',
  'Los perros pueden mover la cola hacia diferentes lados según cómo se sienten.',
  'Los perros sudan principalmente a través de las almohadillas de sus patas.',
  'El oído de los perros es mucho más sensible que el nuestro.',
  'Los perros tienen tres párpados.',
  'Los cachorros nacen con los ojos y los oídos cerrados.',
  'Los perros también pueden tener una pata favorita.',
  'El olfato permite a los perros explorar el mundo de una forma muy diferente a la nuestra.'
];

function showDogFact() {
  const randomFact = dogFacts[
    Math.floor(Math.random() * dogFacts.length)
  ];

  const content = document.getElementById('collageModalContent');

  if (!content) return;

  content.innerHTML = `
    <div style="font-size:60px;">🐾</div>
    <h2>¿SABÍAS QUE...?</h2>

    <div class="capi-fact">
      ${randomFact}
    </div>

    <button class="capi-button" onclick="showDogFact()">
      🐶 OTRO DATO
    </button>

    <button class="capi-back" onclick="openCollageItem('capi')">
      ← VOLVER A CAPI
    </button>
  `;
}
// ==========================================
// 12. EXPEDIENTE UNIVERSITARIO
// ==========================================

function openUniversityFile() {
  const file = document.getElementById('uniFile');

  if (!file) return;

  file.classList.toggle('visible');

  if (file.classList.contains('visible')) {
    setTimeout(() => {
      file.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }, 100);
  }
}
// ==========================================
// 13. FUNCIONES GLOBALES PARA LOS BOTONES
// ==========================================

Object.assign(window, {
  changeScreen,
  openGift,
  openStory,
  openChildhood,
  openChapterThree,
  openMarioWorld,
  openMarioCategory,
  moveClownNose,
  cinemaAction,
  moveCinemaObject,
  showRandomSong,
  openCollageItem,
  closeCollageItem,
  showRandomLqsaClip,
  showOnePieceMenu,
  showRandomOnePieceCharacter,
  showRandomOnePieceClip,
  showRandomOnePieceFact,
  showOnePieceWorld,
  showMadridMenu,
  showRandomMadridMatch,
  searchMadridMatch,
  showRandomMadridPlayer,
  showRandomMadridAward,
  showMarvelMenu,
  showRandomMarvelMovie,
  searchMarvelMovie,
  showRandomMarvelCharacter,
  showRandomMarvelFact,
  startMarvelQuiz,
  answerMarvelQuiz,
  nextMarvelQuestion,
  showDogFact,
  openUniversityFile
});

console.log('Web de Mario: JavaScript cargado correctamente');
console.log("PRUEBA 2: EL JAVASCRIPT HA TERMINADO");
console.log("openGift es:", typeof window.openGift);
console.log("openGift:", typeof window.openGift);
function conectarBotones() {
  const botonRegalo = document.querySelector('.gift-button');
  if (botonRegalo) {
    botonRegalo.addEventListener('click', openGift);
  }

  const botonM = document.querySelector('.m-button');
  if (botonM) {
    botonM.addEventListener('click', openStory);
  }

  const botonCapitulo = document.querySelector('.next-chapter-button');
  if (botonCapitulo) {
    botonCapitulo.addEventListener('click', openChildhood);
  }

  const botonCap3 = document.querySelector('.chapter-stamp');
  if (botonCap3) {
    botonCap3.addEventListener('click', openChapterThree);
  }

  const botonFinal = document.querySelector('.mario-final-photo');
  if (botonFinal) {
    botonFinal.addEventListener('click', openMarioWorld);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', conectarBotones);
} else {
  conectarBotones();
}
console.log("COMPROBACIÓN:", typeof window.openGift);

