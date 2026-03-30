'use strict';

/* ===========================
   CHARACTER DATA
   =========================== */
const CHARACTERS = [
  {
    sign: 'Aries',
    symbol: '♈',
    dateRange: 'Mar 21 – Apr 19',
    startMMDD: [3, 21],
    endMMDD: [4, 19],
    character: 'Eric Cartman',
    emoji: '😤',
    cardColor: '#FF4444',
    tagline: '"Screw you guys, the stars chose ME."',
    traits: [
      'Natural-born leader (in your own mind)',
      'Passionately persuasive — resistance is futile',
      'Will stop at absolutely nothing to get what you want',
      'Surprisingly creative when self-interest is on the line',
    ],
    prophecy: 'The cosmos declare that this week, someone will stand in your way. They will regret it. The universe sides with you — mostly because it\'s afraid not to. A great scheme is forming in your mind. Execute it. No one will see it coming.',
    compatibility: {
      best: { sign: 'Leo', text: 'Leo (Craig Tucker) — Two alphas who respect each other\'s hustle' },
      worst: { sign: 'Cancer', text: 'Cancer (Kyle) — Constant moral lectures drain your cosmic energy' },
    },
    funFact: 'Aries rules the head. You lead with your face — usually into other people\'s business.',
    numerologyBonus: '',
    easterEgg: null,
  },
  {
    sign: 'Taurus',
    symbol: '♉',
    dateRange: 'Apr 20 – May 20',
    startMMDD: [4, 20],
    endMMDD: [5, 20],
    character: 'Randy Marsh',
    emoji: '🥃',
    cardColor: '#8B6914',
    tagline: '"I\'m not impulsive, I\'m just very passionate about things."',
    traits: [
      'Deeply comfort-seeking — you deserve the best',
      'Stubborn as a geologist who knows he is right',
      'Hobbies that start small and spiral magnificently out of control',
      'Fiercely loyal to the people you love (most of the time)',
    ],
    prophecy: 'The stars foresee a great discovery — possibly in your backyard, possibly in the liquor aisle. Follow the signs, but try not to cause a scene. Again. A new passion project will consume you entirely. Your family will be concerned. They\'re probably overreacting.',
    compatibility: {
      best: { sign: 'Virgo', text: 'Virgo (Stan) — You already live together. It\'s literally written in the stars.' },
      worst: { sign: 'Gemini', text: 'Gemini (Tweek) — Their anxiety gives you anxiety.' },
    },
    funFact: 'Taurus rules the throat. You sing, you argue, you give impassioned speeches at school board meetings.',
    numerologyBonus: '',
    easterEgg: {
      mmdd: [4, 20],
      extra: ' Also — April 20th? The cosmos have a very specific sense of humor about you, Randy.',
    },
  },
  {
    sign: 'Gemini',
    symbol: '♊',
    dateRange: 'May 21 – Jun 20',
    startMMDD: [5, 21],
    endMMDD: [6, 20],
    character: 'Tweek Tweak',
    emoji: '😰',
    cardColor: '#6AAFE6',
    tagline: '"What if the stars are wrong?! What if EVERYTHING is wrong?!"',
    traits: [
      'Two completely different personalities, often simultaneously',
      'Highly perceptive — you notice things others miss (and catastrophize them)',
      'Energetic in ways that alarm people around you',
      'Deeply caring underneath the anxious exterior',
    ],
    prophecy: 'The cosmos reveal a fork in the road. Both paths look terrifying. You will overthink this until 3am. Here is the good news: the universe has already decided for you. Try to relax. You can\'t. The stars understand.',
    compatibility: {
      best: { sign: 'Libra', text: 'Libra (Butters) — Their calm patience somehow steadies you' },
      worst: { sign: 'Scorpio', text: 'Scorpio (Kenny) — Their mysterious silences send your mind spiraling' },
    },
    funFact: 'Gemini rules the nervous system. You\'ve known this for a while.',
    numerologyBonus: '',
    easterEgg: null,
  },
  {
    sign: 'Cancer',
    symbol: '♋',
    dateRange: 'Jun 21 – Jul 22',
    startMMDD: [6, 21],
    endMMDD: [7, 22],
    character: 'Kyle Broflovski',
    emoji: '💚',
    cardColor: '#009900',
    tagline: '"You know what? This is wrong. And I\'m going to say something about it."',
    traits: [
      'The moral compass of your entire friend group',
      'Fiercely loyal — you will go to war for the people you love',
      'Deeply emotional but tries very hard not to show it',
      'Cannot stand injustice, even minor injustice, even hypothetical injustice',
    ],
    prophecy: 'The cosmos align in a configuration of righteous frustration. Someone near you will do something maddening. You will deliver a speech. It will be heartfelt. It may or may not change anything. The stars applaud your integrity regardless.',
    compatibility: {
      best: { sign: 'Virgo', text: 'Virgo (Stan) — Your best friend since the beginning of time' },
      worst: { sign: 'Aries', text: 'Aries (Cartman) — An exhausting and endless battle of wills' },
    },
    funFact: 'Cancer rules the chest and stomach. Your feelings live there and they make themselves known.',
    numerologyBonus: '',
    easterEgg: null,
  },
  {
    sign: 'Leo',
    symbol: '♌',
    dateRange: 'Jul 23 – Aug 22',
    startMMDD: [7, 23],
    endMMDD: [8, 22],
    character: 'Craig Tucker',
    emoji: '😑',
    cardColor: '#2255AA',
    tagline: '"Whatever."',
    traits: [
      'Effortlessly cool — you don\'t try, you just are',
      'Natural authority that requires zero effort to project',
      'Deeply loyal to a very small inner circle',
      'Unbothered on the outside; intensely perceptive on the inside',
    ],
    prophecy: 'The stars have big plans for you. You will probably shrug at them. Someone will challenge your authority this week. You will handle it with such minimal effort that they will feel embarrassed. The cosmos find this extremely satisfying.',
    compatibility: {
      best: { sign: 'Scorpio', text: 'Scorpio (Kenny) — Two cool, quiet forces who just get each other' },
      worst: { sign: 'Aries', text: 'Aries (Cartman) — Too loud, too much. You cannot.' },
    },
    funFact: 'Leo rules the heart. Yours is enormous, though you\'d never admit it.',
    numerologyBonus: '',
    easterEgg: null,
  },
  {
    sign: 'Virgo',
    symbol: '♍',
    dateRange: 'Aug 23 – Sep 22',
    startMMDD: [8, 23],
    endMMDD: [9, 22],
    character: 'Stan Marsh',
    emoji: '🤢',
    cardColor: '#CC0000',
    tagline: '"Dude, this is pretty messed up right here."',
    traits: [
      'Analytical to the point of paralysis',
      'A reliable moral barometer, mostly by accident',
      'Overthinks situations until they make you literally sick',
      'Genuinely good person who just wants things to make sense',
    ],
    prophecy: 'The universe is about to confront you with something confusing and mildly disgusting. You will analyze it from every angle. You will arrive at a conclusion that is correct and that no one asked for. Say it anyway. The cosmos respect your commitment to truth.',
    compatibility: {
      best: { sign: 'Cancer', text: 'Cancer (Kyle) — Your lifelong best friend, ordained by the heavens' },
      worst: { sign: 'Capricorn', text: 'Capricorn (Mr. Garrison) — Authority figures who make no sense drain your soul' },
    },
    funFact: 'Virgo rules the digestive system. The world\'s absurdity genuinely upsets your stomach.',
    numerologyBonus: '',
    easterEgg: null,
  },
  {
    sign: 'Libra',
    symbol: '♎',
    dateRange: 'Sep 23 – Oct 22',
    startMMDD: [9, 23],
    endMMDD: [10, 22],
    character: 'Butters Stotch',
    emoji: '🌻',
    cardColor: '#FFB347',
    tagline: '"Oh hamburgers... I just want everyone to be happy."',
    traits: [
      'Sweetness so genuine it confuses people',
      'Desperate to keep the peace, even at great personal cost',
      'Enormous capacity for joy in tiny things',
      'Stronger than you look — you\'ve been through a lot',
    ],
    prophecy: 'The stars see a week of unexpected challenges. Someone will take advantage of your kindness. You will forgive them almost immediately. The cosmos are frustrated on your behalf but also deeply charmed by you. Something genuinely good is coming. You deserve it.',
    compatibility: {
      best: { sign: 'Aquarius', text: 'Aquarius (Jimmy) — Pure wholesome energy that powers a friendship' },
      worst: { sign: 'Aries', text: 'Aries (Cartman) — They will exploit your kindness. They have done so before.' },
    },
    funFact: 'Libra rules the lower back. You\'ve been carrying everyone else\'s weight. Put it down.',
    numerologyBonus: '',
    easterEgg: null,
  },
  {
    sign: 'Scorpio',
    symbol: '♏',
    dateRange: 'Oct 23 – Nov 21',
    startMMDD: [10, 23],
    endMMDD: [11, 21],
    character: 'Kenny McCormick',
    emoji: '🧡',
    cardColor: '#FF6600',
    tagline: '"..."',
    traits: [
      'Deeply mysterious — people think they know you, but they don\'t',
      'Resilient beyond all reason or explanation',
      'Intensely loyal to those you trust (a very short list)',
      'A survivor. Every. Single. Time.',
    ],
    prophecy: 'The cosmos reveal that you have been here before. Whatever is coming — you\'ve handled worse. Your endurance is cosmically ordained. Someone underestimates you this week. That is their problem. You know something they don\'t. You always do.',
    compatibility: {
      best: { sign: 'Leo', text: 'Leo (Craig) — Two quiet forces with mutual unspoken respect' },
      worst: { sign: 'Gemini', text: 'Gemini (Tweek) — Their nervous energy makes your quiet unnerving to them' },
    },
    funFact: 'Scorpio rules transformation and rebirth. You have personal experience with this.',
    numerologyBonus: '',
    easterEgg: null,
  },
  {
    sign: 'Sagittarius',
    symbol: '♐',
    dateRange: 'Nov 22 – Dec 21',
    startMMDD: [11, 22],
    endMMDD: [12, 21],
    character: 'Chef',
    emoji: '🎵',
    cardColor: '#8B4513',
    tagline: '"Children, I\'m going to make love to you... with this prophecy."',
    traits: [
      'Philosophical wisdom delivered at unexpected moments',
      'Free-spirited and adventure-hungry',
      'Genuinely warm and generous to everyone you meet',
      'Life experience that has made you very, very interesting',
    ],
    prophecy: 'The stars are singing something soulful just for you. A journey is coming — physical, spiritual, or both. You will gain wisdom you didn\'t know you needed. Share it freely. The universe appreciates a good teacher. Hello there, beautiful cosmos.',
    compatibility: {
      best: { sign: 'Aquarius', text: 'Aquarius (Jimmy) — You both believe in the beauty of the world' },
      worst: { sign: 'Capricorn', text: 'Capricorn (Mr. Garrison) — Too rigid for your free spirit' },
    },
    funFact: 'Sagittarius rules the hips and thighs. You move through the world with rhythm.',
    numerologyBonus: '',
    easterEgg: null,
  },
  {
    sign: 'Capricorn',
    symbol: '♑',
    dateRange: 'Dec 22 – Jan 19',
    startMMDD: [12, 22],
    endMMDD: [1, 19],
    character: 'Mr. Garrison',
    emoji: '🎓',
    cardColor: '#556B2F',
    tagline: '"Now listen up class, because I\'m only going to say this a hundred more times."',
    traits: [
      'Relentlessly ambitious with shifting definitions of success',
      'Strict sense of how things should be done (your way)',
      'Survived more upheaval than most and kept going',
      'Surprisingly influential despite everyone\'s best intentions',
    ],
    prophecy: 'The cosmos have assigned you a position of authority. Again. This is not always what you asked for. Use it wisely. A confrontation with your own past decisions approaches. The stars suggest honesty. You may or may not take that advice.',
    compatibility: {
      best: { sign: 'Virgo', text: 'Virgo (Stan) — They listen, analyze, and occasionally push back appropriately' },
      worst: { sign: 'Sagittarius', text: 'Sagittarius (Chef) — Their loose-cannon wisdom challenges your rigid structure' },
    },
    funFact: 'Capricorn rules the knees. You\'ve kneeled to no one. Questionable decisions have followed.',
    numerologyBonus: '',
    easterEgg: null,
  },
  {
    sign: 'Aquarius',
    symbol: '♒',
    dateRange: 'Jan 20 – Feb 18',
    startMMDD: [1, 20],
    endMMDD: [2, 18],
    character: 'Jimmy Valmer',
    emoji: '🎤',
    cardColor: '#20B2AA',
    tagline: '"What a great audience. What a wonderful, wonderful audience."',
    traits: [
      'Uniquely yourself in a way that inspires others',
      'Sharp wit that catches people off guard every time',
      'Persistent and determined beyond what most people can imagine',
      'Humanitarian heart — you genuinely root for everyone',
    ],
    prophecy: 'The stars have written you a set. It\'s a good one. An opportunity to shine is coming — take it with both hands. Your perspective on things is rare and valuable. Someone this week will finally understand what you\'ve known all along. It\'ll be a great moment. Just fantastic.',
    compatibility: {
      best: { sign: 'Libra', text: 'Libra (Butters) — Pure wholesome energy and mutual cheerfulness' },
      worst: { sign: 'Capricorn', text: 'Capricorn (Mr. Garrison) — They grade on a cruel curve' },
    },
    funFact: 'Aquarius rules the ankles. You stand on your own two feet, always.',
    numerologyBonus: '',
    easterEgg: null,
  },
  {
    sign: 'Pisces',
    symbol: '♓',
    dateRange: 'Feb 19 – Mar 20',
    startMMDD: [2, 19],
    endMMDD: [3, 20],
    character: 'Timmy',
    emoji: '⚡',
    cardColor: '#9370DB',
    tagline: '"TIMMAH!"',
    traits: [
      'Goes with the flow in ways that confound and inspire',
      'More emotionally connected to the world than anyone realizes',
      'Pure energy — what you lack in words you make up in presence',
      'Genuinely free in a way most people never achieve',
    ],
    prophecy: 'The cosmos speak directly to your soul, bypassing all the noise. You understand something essential about existence that others spend lifetimes searching for. This week, your presence alone will matter more than you know. The universe celebrates you exactly as you are.',
    compatibility: {
      best: { sign: 'Cancer', text: 'Cancer (Kyle) — Deep emotional understanding without needing words' },
      worst: { sign: 'Gemini', text: 'Gemini (Tweek) — Too much noise for your peaceful wavelength' },
    },
    funFact: 'Pisces rules the feet. You are grounded in your own way, moving at your own pace.',
    numerologyBonus: '',
    easterEgg: null,
  },
];

/* ===========================
   NUMEROLOGY MESSAGES
   =========================== */
const NUMEROLOGY_MESSAGES = [
  '',
  'Energy Number 1: You are the beginning of something. The cosmos are watching.',
  'Energy Number 2: Balance defines your path. Two forces pull at you — choose neither, let them guide you.',
  'Energy Number 3: Creativity crackles around you. The universe wants you to make something.',
  'Energy Number 4: Stability is your foundation. The stars have built you a fortress. Use it.',
  'Energy Number 5: Change is your oxygen. The cosmos have a surprising twist in store.',
  'Energy Number 6: Harmony calls to you. A relationship — old or new — needs your attention.',
  'Energy Number 7: Seek truth. The answers you want are hidden one layer deeper than you looked.',
  'Energy Number 8: Power and abundance flow toward you. The universe is balancing a cosmic ledger.',
  'Energy Number 9: Completion. Something ends so something better can begin. The stars approve.',
];

/* ===========================
   ZODIAC CALCULATION
   =========================== */
function getZodiacSign(dateString) {
  // Add T12:00:00 to avoid UTC midnight timezone shift issues
  const date = new Date(dateString + 'T12:00:00');
  const month = date.getMonth() + 1; // 1-based
  const day = date.getDate();

  for (const entry of CHARACTERS) {
    const [sm, sd] = entry.startMMDD;
    const [em, ed] = entry.endMMDD;

    if (sm <= em) {
      // Normal: sign stays within one year boundary
      if (
        (month === sm && day >= sd) ||
        (month > sm && month < em) ||
        (month === em && day <= ed)
      ) {
        return { entry, month, day };
      }
    } else {
      // Capricorn: Dec 22 – Jan 19 crosses year boundary
      if (
        (month === sm && day >= sd) ||
        month > sm ||
        month < em ||
        (month === em && day <= ed)
      ) {
        return { entry, month, day };
      }
    }
  }
  return null;
}

function getNumerologyNumber(month, day) {
  const sum = month + day;
  const n = sum % 9;
  return n === 0 ? 9 : n;
}

/* ===========================
   MAP — FALLBACK LOCATIONS
   =========================== */
const FALLBACK_LOCATIONS = [
  { lat: 39.4749, lng: -106.0698, label: 'South Park, Colorado' },
  { lat: 27.1751,  lng: 78.0421,   label: 'Agra, India' },
  { lat: -33.8688, lng: 151.2093,  label: 'Sydney, Australia' },
  { lat: 64.1466,  lng: -21.9426,  label: 'Reykjavík, Iceland' },
  { lat: -13.1631, lng: -72.5450,  label: 'Machu Picchu, Peru' },
  { lat: 40.4319,  lng: 116.5704,  label: 'Great Wall of China' },
  { lat: -4.3236,  lng: 15.3224,   label: 'Kinshasa, Congo' },
  { lat: 78.2232,  lng: 15.6267,   label: 'Longyearbyen, Svalbard' },
];

let mapInstance = null;

async function geocodeBirthplace(place) {
  if (!place) return null;
  try {
    const url = 'https://nominatim.openstreetmap.org/search?q=' +
      encodeURIComponent(place) + '&format=json&limit=1&accept-language=en';
    const resp = await fetch(url);
    if (!resp.ok) return null;
    const data = await resp.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
        label: data[0].display_name.split(',').slice(0, 2).join(','),
        found: true,
      };
    }
  } catch (_) { /* network error */ }
  return null;
}

function initMap(lat, lng, label) {
  // Destroy previous instance if any
  if (mapInstance) {
    mapInstance.remove();
    mapInstance = null;
  }

  mapInstance = L.map('birth-map', {
    center: [lat, lng],
    zoom: 10,
    zoomControl: false,
    attributionControl: true,
    scrollWheelZoom: false,
    dragging: false,
    doubleClickZoom: false,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a> © <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(mapInstance);

  const pinIcon = L.divIcon({
    html: '<div class="sp-map-pin"></div>',
    className: '',
    iconSize: [28, 28],
    iconAnchor: [10, 28],
  });

  L.marker([lat, lng], { icon: pinIcon }).addTo(mapInstance);

  document.getElementById('map-label').textContent = label;

  // Force Leaflet to recalculate size after any CSS transitions
  setTimeout(() => mapInstance && mapInstance.invalidateSize(), 100);
}

async function geocodeAndShowMap(birthplace) {
  let location = await geocodeBirthplace(birthplace);

  if (!location) {
    const fallback = FALLBACK_LOCATIONS[Math.floor(Math.random() * FALLBACK_LOCATIONS.length)];
    location = { ...fallback, found: false };
  }

  const label = location.found
    ? location.label
    : 'The stars chose ' + location.label + ' for you';

  initMap(location.lat, location.lng, label);
}

/* ===========================
   STAR FIELD
   =========================== */
function generateStars(count) {
  const field = document.getElementById('star-field');
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    const size = Math.random() * 3 + 1;
    star.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `top:${Math.random() * 100}%`,
      `left:${Math.random() * 100}%`,
      `animation-delay:${(Math.random() * 4).toFixed(2)}s`,
      `animation-duration:${(1.5 + Math.random() * 2.5).toFixed(2)}s`,
    ].join(';');
    frag.appendChild(star);
  }
  field.appendChild(frag);
}

/* ===========================
   ZODIAC WHEEL
   =========================== */
function buildZodiacWheel() {
  const wheel = document.getElementById('zodiac-wheel');
  const symbols = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
  const cx = 160; // wheel is 320px; center at 160
  const cy = 160;
  const radius = 136;

  symbols.forEach((sym, i) => {
    const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
    const x = cx + Math.cos(angle) * radius - 12;
    const y = cy + Math.sin(angle) * radius - 12;
    const tick = document.createElement('span');
    tick.className = 'zodiac-tick';
    tick.textContent = sym;
    tick.title = CHARACTERS[i].sign;
    tick.style.left = x + 'px';
    tick.style.top = y + 'px';
    wheel.appendChild(tick);
  });
}

/* ===========================
   CONSULTING OVERLAY
   =========================== */
function showConsultingOverlay() {
  const overlay = document.getElementById('consulting-overlay');
  overlay.classList.remove('hidden', 'fade-out');
}

function hideConsultingOverlay(callback) {
  const overlay = document.getElementById('consulting-overlay');
  overlay.classList.add('fade-out');
  setTimeout(() => {
    overlay.classList.add('hidden');
    overlay.classList.remove('fade-out');
    if (callback) callback();
  }, 500);
}

/* ===========================
   RENDER RESULT
   =========================== */
function renderResult(char, month, day, birthplace) {
  // Character art
  const artEl = document.getElementById('character-art');
  artEl.textContent = char.emoji;
  artEl.style.backgroundColor = char.cardColor;

  // Sign
  document.getElementById('result-symbol').textContent = char.symbol;
  document.getElementById('result-sign').textContent = char.sign;
  document.getElementById('result-date-range').textContent = char.dateRange;

  // Character
  document.getElementById('result-character').textContent = char.character;

  // Tagline (with optional easter egg)
  let tagline = char.tagline;
  if (char.easterEgg && char.easterEgg.mmdd[0] === month && char.easterEgg.mmdd[1] === day) {
    tagline += char.easterEgg.extra;
  }
  document.getElementById('result-tagline').textContent = tagline;

  // Traits
  const traitsList = document.getElementById('traits-list');
  traitsList.innerHTML = '';
  char.traits.forEach((trait, i) => {
    const li = document.createElement('li');
    li.textContent = trait;
    li.style.animationDelay = (0.6 + i * 0.15) + 's'; // delay after card drop
    traitsList.appendChild(li);
  });

  // Fun fact
  document.getElementById('result-funfact').textContent = char.funFact;

  // Numerology
  const num = getNumerologyNumber(month, day);
  const numEl = document.getElementById('result-numerology');
  numEl.innerHTML = '';
  const h4 = document.createElement('h4');
  h4.textContent = '✨ Cosmic Energy Number';
  h4.style.fontFamily = "'Bangers', cursive";
  h4.style.letterSpacing = '2px';
  h4.style.textTransform = 'uppercase';
  h4.style.color = 'var(--sp-purple)';
  h4.style.marginBottom = '0.4rem';
  numEl.appendChild(h4);
  const numP = document.createElement('p');
  numP.textContent = NUMEROLOGY_MESSAGES[num];
  numEl.appendChild(numP);

  // Prophecy
  let prophecyText = char.prophecy;
  document.getElementById('prophecy-text').textContent = prophecyText;

  // Compatibility — look up emoji from character array
  const bestSign = CHARACTERS.find(c => c.sign === char.compatibility.best.sign);
  const worstSign = CHARACTERS.find(c => c.sign === char.compatibility.worst.sign);
  const bestEmoji = bestSign ? bestSign.emoji + ' ' : '';
  const worstEmoji = worstSign ? worstSign.emoji + ' ' : '';

  document.getElementById('compat-best').innerHTML =
    `<span class="compat-label compat-best">💚 Best:</span> ${bestEmoji}${char.compatibility.best.text}`;
  document.getElementById('compat-worst').innerHTML =
    `<span class="compat-label compat-worst">💔 Avoid:</span> ${worstEmoji}${char.compatibility.worst.text}`;

  // Birth flavor
  const place = birthplace || 'the cosmos';
  document.getElementById('birth-flavor').textContent =
    `The stars above ${place} were aligned just so when you arrived.`;

  // Show result section
  document.getElementById('form-section').classList.add('hidden');
  const resultSection = document.getElementById('result-section');
  resultSection.classList.remove('hidden');
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ===========================
   FORM HANDLING
   =========================== */
function handleFormSubmit(e) {
  e.preventDefault();

  const dateVal = document.getElementById('birthdate').value;
  const birthplace = document.getElementById('birthplace').value.trim();
  const errorEl = document.getElementById('form-error');

  if (!dateVal) {
    errorEl.classList.remove('hidden');
    return;
  }
  errorEl.classList.add('hidden');

  const result = getZodiacSign(dateVal);
  if (!result) return;

  showConsultingOverlay();

  setTimeout(() => {
    hideConsultingOverlay(() => {
      renderResult(result.entry, result.month, result.day, birthplace);
      geocodeAndShowMap(birthplace);
    });
  }, 2200);
}

function handleTryAgain() {
  if (mapInstance) {
    mapInstance.remove();
    mapInstance = null;
  }
  document.getElementById('oracle-form').reset();
  document.getElementById('form-error').classList.add('hidden');
  document.getElementById('result-section').classList.add('hidden');
  document.getElementById('form-section').classList.remove('hidden');
  document.getElementById('form-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ===========================
   INIT
   =========================== */
document.addEventListener('DOMContentLoaded', () => {
  generateStars(110);
  buildZodiacWheel();
  document.getElementById('oracle-form').addEventListener('submit', handleFormSubmit);
  document.getElementById('try-again').addEventListener('click', handleTryAgain);
  // Hide error on input change
  document.getElementById('birthdate').addEventListener('change', () => {
    document.getElementById('form-error').classList.add('hidden');
  });
});
