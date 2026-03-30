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
    // Cartman: fat round face, red/blue hat with pompom, red jacket, hands on hips — smug as ever
    svg: '<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="5" width="52" height="17" rx="3" fill="#8B0000" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="21" rx="30" ry="6" fill="#8B0000" stroke="#111" stroke-width="2"/><rect x="24" y="15" width="52" height="7" fill="#3355CC"/><circle cx="50" cy="4" r="6" fill="white" stroke="#111" stroke-width="1.5"/><ellipse cx="50" cy="47" rx="30" ry="27" fill="#FFCC99" stroke="#111" stroke-width="2.5"/><ellipse cx="27" cy="53" rx="7" ry="5" fill="#FFB380" opacity="0.6"/><ellipse cx="73" cy="53" rx="7" ry="5" fill="#FFB380" opacity="0.6"/><ellipse cx="40" cy="42" rx="6" ry="5" fill="white" stroke="#111" stroke-width="1.5"/><ellipse cx="60" cy="42" rx="6" ry="5" fill="white" stroke="#111" stroke-width="1.5"/><circle cx="41" cy="43" r="2.5" fill="#111"/><circle cx="61" cy="43" r="2.5" fill="#111"/><path d="M34 37 L46 40" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><path d="M54 40 L66 37" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><path d="M40 57 Q50 64 60 57" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/><rect x="44" y="72" width="12" height="7" fill="#FFCC99"/><path d="M18 76 L82 76 L87 115 L13 115 Z" fill="#CC0000" stroke="#111" stroke-width="2.5"/><path d="M18 85 Q5 94 9 107" stroke="#CC0000" stroke-width="12" stroke-linecap="round" fill="none"/><ellipse cx="8" cy="108" rx="6" ry="5" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><path d="M82 85 Q95 94 91 107" stroke="#CC0000" stroke-width="12" stroke-linecap="round" fill="none"/><ellipse cx="92" cy="108" rx="6" ry="5" fill="#FFCC99" stroke="#111" stroke-width="1.5"/></svg>',
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
    // Randy: brown hair, plaid shirt, beer bottle in right hand, excited wide-open mouth
    svg: '<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="36" rx="27" ry="26" fill="#5C3D11" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="42" rx="24" ry="23" fill="#FFCC99" stroke="#111" stroke-width="2.5"/><path d="M26 36 Q30 15 50 14 Q70 15 74 36" fill="#5C3D11" stroke="#111" stroke-width="2"/><ellipse cx="40" cy="37" rx="6" ry="6" fill="white" stroke="#111" stroke-width="1.5"/><ellipse cx="60" cy="37" rx="6" ry="6" fill="white" stroke="#111" stroke-width="1.5"/><circle cx="40" cy="38" r="3" fill="#111"/><circle cx="60" cy="38" r="3" fill="#111"/><path d="M34 29 Q40 26 46 29" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/><path d="M54 29 Q60 26 66 29" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/><path d="M38 52 Q50 61 62 52" fill="#CC5555" stroke="#111" stroke-width="2"/><rect x="42" y="52" width="16" height="6" fill="white" stroke="#111" stroke-width="0.5"/><rect x="44" y="63" width="12" height="7" fill="#FFCC99"/><path d="M18 68 L82 68 L85 115 L15 115 Z" fill="#CC4444" stroke="#111" stroke-width="2.5"/><line x1="30" y1="68" x2="28" y2="115" stroke="#AA2222" stroke-width="5" opacity="0.4"/><line x1="50" y1="68" x2="50" y2="115" stroke="#AA2222" stroke-width="5" opacity="0.4"/><line x1="70" y1="68" x2="72" y2="115" stroke="#AA2222" stroke-width="5" opacity="0.4"/><path d="M82 78 Q97 80 97 95" stroke="#CC4444" stroke-width="11" stroke-linecap="round" fill="none"/><rect x="91" y="88" width="10" height="18" rx="3" fill="#BB9900" stroke="#111" stroke-width="1.5"/><rect x="93" y="84" width="6" height="7" rx="2" fill="#887700" stroke="#111" stroke-width="1.5"/><path d="M18 78 Q3 73 5 60" stroke="#CC4444" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="5" cy="59" rx="5" ry="5" fill="#FFCC99" stroke="#111" stroke-width="1.5"/></svg>',
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
    // Tweek: wild spiky blonde hair shooting in all directions, massive terrified eyes, teal shirt, hands clutching sides of head
    svg: '<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg"><path d="M23 40 Q18 20 28 12 Q35 4 45 8 Q50 2 55 8 Q65 4 72 12 Q82 20 77 40" fill="#FFD700" stroke="#111" stroke-width="2"/><path d="M24 36 L15 24 L22 34" fill="#FFD700" stroke="#111" stroke-width="1.5"/><path d="M34 14 L30 4 L38 12" fill="#FFD700" stroke="#111" stroke-width="1.5"/><path d="M56 7 L57 -2 L63 8" fill="#FFD700" stroke="#111" stroke-width="1.5"/><path d="M70 14 L77 6 L78 18" fill="#FFD700" stroke="#111" stroke-width="1.5"/><path d="M76 34 L86 25 L79 38" fill="#FFD700" stroke="#111" stroke-width="1.5"/><ellipse cx="50" cy="45" rx="26" ry="25" fill="#FFCC99" stroke="#111" stroke-width="2.5"/><ellipse cx="38" cy="40" rx="8" ry="9" fill="white" stroke="#111" stroke-width="2"/><ellipse cx="62" cy="40" rx="8" ry="9" fill="white" stroke="#111" stroke-width="2"/><circle cx="38" cy="41" r="4" fill="#111"/><circle cx="62" cy="41" r="4" fill="#111"/><path d="M30 30 Q35 27 40 30" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/><path d="M60 30 Q65 27 70 30" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/><path d="M39 57 Q50 65 61 57" fill="#CC5555" stroke="#111" stroke-width="2" stroke-linecap="round"/><rect x="44" y="68" width="12" height="7" fill="#FFCC99"/><path d="M20 73 L80 73 L84 115 L16 115 Z" fill="#006666" stroke="#111" stroke-width="2.5"/><path d="M42 73 L50 83 L58 73" fill="white" stroke="#111" stroke-width="1.5"/><path d="M20 81 Q8 70 14 54" stroke="#006666" stroke-width="10" stroke-linecap="round" fill="none"/><ellipse cx="14" cy="53" rx="7" ry="6" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><path d="M80 81 Q92 70 86 54" stroke="#006666" stroke-width="10" stroke-linecap="round" fill="none"/><ellipse cx="86" cy="53" rx="7" ry="6" fill="#FFCC99" stroke="#111" stroke-width="1.5"/></svg>',
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
    // Kyle: green ushanka with pompom, red hair peeking out, orange jacket, right arm pointing indignantly
    svg: '<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="20" rx="30" ry="10" fill="#005500" stroke="#111" stroke-width="2"/><rect x="22" y="11" width="56" height="15" rx="6" fill="#007700" stroke="#111" stroke-width="2"/><ellipse cx="22" cy="26" rx="8" ry="10" fill="#007700" stroke="#111" stroke-width="2"/><ellipse cx="78" cy="26" rx="8" ry="10" fill="#007700" stroke="#111" stroke-width="2"/><circle cx="50" cy="8" r="7" fill="white" stroke="#111" stroke-width="1.5"/><ellipse cx="50" cy="47" rx="25" ry="24" fill="#FFCC99" stroke="#111" stroke-width="2.5"/><path d="M26 47 Q24 55 28 64" fill="#8B0000" stroke="#111" stroke-width="2.5"/><path d="M74 47 Q76 55 72 64" fill="#8B0000" stroke="#111" stroke-width="2.5"/><ellipse cx="40" cy="43" rx="6" ry="5" fill="white" stroke="#111" stroke-width="1.5"/><ellipse cx="60" cy="43" rx="6" ry="5" fill="white" stroke="#111" stroke-width="1.5"/><circle cx="40" cy="44" r="2.5" fill="#111"/><circle cx="60" cy="44" r="2.5" fill="#111"/><path d="M34 37 Q40 34 46 37" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><path d="M54 37 Q60 34 66 37" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><path d="M39 56 Q50 63 61 56" fill="#CC5555" stroke="#111" stroke-width="2"/><rect x="42" y="56" width="16" height="5" fill="white" stroke="#111" stroke-width="0.5"/><rect x="44" y="69" width="12" height="7" fill="#FFCC99"/><path d="M18 74 L82 74 L86 115 L14 115 Z" fill="#FF6600" stroke="#111" stroke-width="2.5"/><path d="M18 83 Q6 90 10 105" stroke="#FF6600" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="10" cy="106" rx="5" ry="5" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><path d="M82 83 Q97 76 104 63" stroke="#FF6600" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="102" cy="61" rx="6" ry="5" fill="#FFCC99" stroke="#111" stroke-width="1.5" transform="rotate(-30,102,61)"/></svg>',
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
    // Craig: blue chullo hat, black jacket, total deadpan face, left hand raised giving the middle finger
    svg: '<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="7" width="56" height="23" rx="6" fill="#3355CC" stroke="#111" stroke-width="2"/><rect x="14" y="20" width="14" height="18" rx="4" fill="#3355CC" stroke="#111" stroke-width="2"/><rect x="72" y="20" width="14" height="18" rx="4" fill="#3355CC" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="9" rx="27" ry="8" fill="#2244BB" stroke="#111" stroke-width="2"/><circle cx="50" cy="3" r="5" fill="white" stroke="#111" stroke-width="1.5"/><ellipse cx="50" cy="48" rx="26" ry="25" fill="#FFCC99" stroke="#111" stroke-width="2.5"/><ellipse cx="39" cy="44" rx="6" ry="4" fill="white" stroke="#111" stroke-width="1.5"/><ellipse cx="61" cy="44" rx="6" ry="4" fill="white" stroke="#111" stroke-width="1.5"/><path d="M33 42 Q39 39 45 42" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><path d="M55 42 Q61 39 67 42" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><circle cx="39" cy="44" r="2.5" fill="#111"/><circle cx="61" cy="44" r="2.5" fill="#111"/><line x1="33" y1="38" x2="45" y2="38" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><line x1="55" y1="38" x2="67" y2="38" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><line x1="41" y1="59" x2="59" y2="59" stroke="#111" stroke-width="2" stroke-linecap="round"/><rect x="44" y="71" width="12" height="7" fill="#FFCC99"/><path d="M18 76 L82 76 L85 115 L15 115 Z" fill="#222222" stroke="#111" stroke-width="2.5"/><path d="M18 85 Q6 79 5 64" stroke="#222222" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="5" cy="63" rx="7" ry="6" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><rect x="2" y="50" width="6" height="14" rx="3" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><path d="M3 53 L8 50" stroke="#FFCC99" stroke-width="3" stroke-linecap="round"/><path d="M3 58 L8 55" stroke="#FFCC99" stroke-width="3" stroke-linecap="round"/><path d="M82 85 Q94 90 90 105" stroke="#222222" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="90" cy="106" rx="5" ry="5" fill="#FFCC99" stroke="#111" stroke-width="1.5"/></svg>',
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
    // Stan: red/blue beanie with pompom, dark maroon jacket, wavy queasy mouth, slight green tinge on cheeks
    svg: '<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="7" width="52" height="19" rx="6" fill="#3355CC" stroke="#111" stroke-width="2"/><rect x="22" y="20" width="56" height="8" rx="3" fill="#CC0000" stroke="#111" stroke-width="2"/><circle cx="50" cy="5" r="7" fill="#CC0000" stroke="#111" stroke-width="1.5"/><ellipse cx="50" cy="48" rx="26" ry="25" fill="#FFCC99" stroke="#111" stroke-width="2.5"/><path d="M25 46 Q23 56 27 64" fill="#2B1A10" stroke="#111" stroke-width="2"/><path d="M75 46 Q77 56 73 64" fill="#2B1A10" stroke="#111" stroke-width="2"/><ellipse cx="39" cy="43" rx="6" ry="5.5" fill="white" stroke="#111" stroke-width="1.5"/><ellipse cx="61" cy="43" rx="6" ry="5.5" fill="white" stroke="#111" stroke-width="1.5"/><circle cx="39" cy="44" r="2.5" fill="#111"/><circle cx="61" cy="44" r="2.5" fill="#111"/><path d="M33 36 Q39 33 45 36" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><path d="M55 36 Q61 33 67 36" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><path d="M38 57 Q44 62 50 57 Q56 52 62 57" fill="none" stroke="#111" stroke-width="2.2" stroke-linecap="round"/><ellipse cx="30" cy="53" rx="6" ry="4" fill="#88CC66" opacity="0.4"/><ellipse cx="70" cy="53" rx="6" ry="4" fill="#88CC66" opacity="0.4"/><rect x="44" y="71" width="12" height="7" fill="#FFCC99"/><path d="M18 76 L82 76 L86 115 L14 115 Z" fill="#8B0000" stroke="#111" stroke-width="2.5"/><path d="M18 84 Q6 92 9 107" stroke="#8B0000" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="9" cy="108" rx="5" ry="5" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><path d="M82 84 Q94 92 91 107" stroke="#8B0000" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="91" cy="108" rx="5" ry="5" fill="#FFCC99" stroke="#111" stroke-width="1.5"/></svg>',
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
    // Butters: short neat blonde hair, light blue jacket, huge grin with teeth, rosy cheeks, right arm waving enthusiastically
    svg: '<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="36" rx="27" ry="24" fill="#FFD700" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="43" rx="24" ry="22" fill="#FFCC99" stroke="#111" stroke-width="2.5"/><path d="M27 37 Q35 25 50 24 Q65 25 73 37" fill="#FFD700" stroke="#111" stroke-width="1.5"/><ellipse cx="39" cy="39" rx="6" ry="6" fill="white" stroke="#111" stroke-width="1.5"/><ellipse cx="61" cy="39" rx="6" ry="6" fill="white" stroke="#111" stroke-width="1.5"/><circle cx="40" cy="40" r="3" fill="#111"/><circle cx="62" cy="40" r="3" fill="#111"/><circle cx="42" cy="38" r="1.5" fill="white"/><circle cx="64" cy="38" r="1.5" fill="white"/><path d="M33 32 Q39 28 45 32" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/><path d="M55 32 Q61 28 67 32" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/><path d="M37 53 Q50 63 63 53" fill="#CC3333" stroke="#111" stroke-width="2"/><rect x="41" y="53" width="18" height="7" fill="white" stroke="#111" stroke-width="0.5"/><ellipse cx="30" cy="47" rx="6" ry="4" fill="#FF9999" opacity="0.5"/><ellipse cx="70" cy="47" rx="6" ry="4" fill="#FF9999" opacity="0.5"/><rect x="44" y="64" width="12" height="7" fill="#FFCC99"/><path d="M18 69 L82 69 L86 115 L14 115 Z" fill="#87CEEB" stroke="#111" stroke-width="2.5"/><path d="M18 79 Q6 87 9 102" stroke="#87CEEB" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="9" cy="103" rx="5" ry="5" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><path d="M82 79 Q97 70 97 54" stroke="#87CEEB" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="97" cy="52" rx="6" ry="6" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><line x1="94" y1="46" x2="92" y2="41" stroke="#FFCC99" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="47" x2="100" y2="42" stroke="#FFCC99" stroke-width="4" stroke-linecap="round"/><line x1="97" y1="47" x2="98" y2="41" stroke="#FFCC99" stroke-width="4" stroke-linecap="round"/></svg>',
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
    // Kenny: entirely encased in orange parka, only two small eyes visible, left arm giving thumbs up
    svg: '<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="43" rx="36" ry="38" fill="#FF6600" stroke="#111" stroke-width="3"/><ellipse cx="50" cy="43" rx="22" ry="28" fill="#CC4400" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="45" rx="16" ry="14" fill="#1A0A00"/><ellipse cx="43" cy="43" rx="5" ry="4.5" fill="white" stroke="#111" stroke-width="1"/><ellipse cx="57" cy="43" rx="5" ry="4.5" fill="white" stroke="#111" stroke-width="1"/><circle cx="43" cy="44" r="2.5" fill="#111"/><circle cx="57" cy="44" r="2.5" fill="#111"/><circle cx="44" cy="42" r="1" fill="white"/><circle cx="58" cy="42" r="1" fill="white"/><path d="M14 76 L86 76 L90 115 L10 115 Z" fill="#FF6600" stroke="#111" stroke-width="2.5"/><circle cx="44" cy="76" r="4" fill="#CC4400" stroke="#111" stroke-width="1.5"/><circle cx="56" cy="76" r="4" fill="#CC4400" stroke="#111" stroke-width="1.5"/><path d="M14 84 Q2 79 4 66" stroke="#FF6600" stroke-width="12" stroke-linecap="round" fill="none"/><ellipse cx="4" cy="65" rx="7" ry="6" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><rect x="1" y="52" width="6" height="14" rx="3" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><path d="M86 84 Q97 90 94 106" stroke="#FF6600" stroke-width="12" stroke-linecap="round" fill="none"/><ellipse cx="94" cy="107" rx="5" ry="5" fill="#FFCC99" stroke="#111" stroke-width="1.5"/></svg>',
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
    // Chef: tall white chef hat, dark brown skin, white apron, broad warm smile with mustache, arms spread wide
    svg: '<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg"><rect x="34" y="2" width="32" height="26" rx="4" fill="white" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="28" rx="22" ry="8" fill="white" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="9" rx="16" ry="10" fill="white" stroke="#111" stroke-width="1.5"/><ellipse cx="50" cy="51" rx="25" ry="24" fill="#5C3317" stroke="#111" stroke-width="2.5"/><ellipse cx="39" cy="47" rx="5" ry="5" fill="white" stroke="#111" stroke-width="1.5"/><ellipse cx="61" cy="47" rx="5" ry="5" fill="white" stroke="#111" stroke-width="1.5"/><circle cx="39" cy="48" r="2.5" fill="#111"/><circle cx="61" cy="48" r="2.5" fill="#111"/><path d="M33 40 Q39 37 45 40" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/><path d="M55 40 Q61 37 67 40" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/><path d="M40 57 Q50 61 60 57 Q55 65 50 62 Q45 65 40 57 Z" fill="#111"/><path d="M38 62 Q50 71 62 62" fill="#CC5544" stroke="#111" stroke-width="1.5"/><rect x="43" y="62" width="14" height="6" fill="white" stroke="#111" stroke-width="0.5"/><rect x="44" y="73" width="12" height="7" fill="#5C3317"/><path d="M18 78 L82 78 L86 115 L14 115 Z" fill="#CC0000" stroke="#111" stroke-width="2.5"/><path d="M35 78 L65 78 L68 115 L32 115 Z" fill="white" stroke="#111" stroke-width="2"/><path d="M18 87 Q2 81 -2 69" stroke="#CC0000" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="-2" cy="68" rx="6" ry="5" fill="#5C3317" stroke="#111" stroke-width="1.5"/><path d="M82 87 Q98 81 102 69" stroke="#CC0000" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="102" cy="68" rx="6" ry="5" fill="#5C3317" stroke="#111" stroke-width="1.5"/></svg>',
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
    // Mr. Garrison: bald on top with blonde sides, thick glasses, pink-purple sweater, left arm raised holding Mr. Hat puppet
    svg: '<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="35" rx="26" ry="22" fill="#E8C840" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="15" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><ellipse cx="50" cy="46" rx="24" ry="23" fill="#FFCC99" stroke="#111" stroke-width="2.5"/><ellipse cx="38" cy="42" rx="8" ry="7" fill="none" stroke="#111" stroke-width="2.5"/><ellipse cx="62" cy="42" rx="8" ry="7" fill="none" stroke="#111" stroke-width="2.5"/><ellipse cx="38" cy="42" rx="6" ry="5.5" fill="white"/><ellipse cx="62" cy="42" rx="6" ry="5.5" fill="white"/><line x1="46" y1="42" x2="54" y2="42" stroke="#111" stroke-width="2"/><circle cx="38" cy="43" r="2.5" fill="#111"/><circle cx="62" cy="43" r="2.5" fill="#111"/><path d="M30 34 Q38 31 46 34" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/><path d="M54 34 Q62 31 70 34" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/><line x1="41" y1="56" x2="59" y2="56" stroke="#111" stroke-width="2" stroke-linecap="round"/><rect x="44" y="67" width="12" height="7" fill="#FFCC99"/><path d="M18 72 L82 72 L86 115 L14 115 Z" fill="#CC66AA" stroke="#111" stroke-width="2.5"/><path d="M18 81 Q10 71 12 56" stroke="#CC66AA" stroke-width="11" stroke-linecap="round" fill="none"/><rect x="0" y="28" width="22" height="22" rx="2" fill="#111" stroke="#111" stroke-width="1.5"/><rect x="-3" y="48" width="28" height="5" rx="2" fill="#111" stroke="#111" stroke-width="1.5"/><circle cx="7" cy="36" r="3" fill="white"/><circle cx="15" cy="36" r="3" fill="white"/><circle cx="7" cy="37" r="1.5" fill="#111"/><circle cx="15" cy="37" r="1.5" fill="#111"/><path d="M6 44 Q11 48 16 44" fill="none" stroke="white" stroke-width="1.5"/><path d="M82 81 Q95 77 101 63" stroke="#CC66AA" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="100" cy="61" rx="6" ry="5" fill="#FFCC99" stroke="#111" stroke-width="1.5" transform="rotate(-30,100,61)"/></svg>',
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
    // Jimmy: blonde hair, blue jacket, enormous ear-to-ear grin showing all teeth, wooden crutches on both sides
    svg: '<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="36" rx="26" ry="23" fill="#E8C840" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="43" rx="24" ry="23" fill="#FFCC99" stroke="#111" stroke-width="2.5"/><path d="M27 38 Q35 26 50 24 Q65 26 73 38" fill="#E8C840" stroke="#111" stroke-width="1.5"/><ellipse cx="38" cy="38" rx="6" ry="5.5" fill="white" stroke="#111" stroke-width="1.5"/><ellipse cx="62" cy="38" rx="6" ry="5.5" fill="white" stroke="#111" stroke-width="1.5"/><circle cx="39" cy="39" r="3" fill="#111"/><circle cx="63" cy="39" r="3" fill="#111"/><circle cx="41" cy="37" r="1.5" fill="white"/><circle cx="65" cy="37" r="1.5" fill="white"/><path d="M32 31 Q38 27 44 31" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><path d="M56 31 Q62 27 68 31" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><path d="M33 53 Q50 69 67 53" fill="#CC3333" stroke="#111" stroke-width="2.5"/><rect x="38" y="53" width="24" height="11" fill="white" stroke="#111" stroke-width="0.5"/><line x1="50" y1="53" x2="50" y2="64" stroke="#CC3333" stroke-width="2"/><rect x="44" y="65" width="12" height="7" fill="#FFCC99"/><path d="M20 70 L80 70 L84 115 L16 115 Z" fill="#3355CC" stroke="#111" stroke-width="2.5"/><line x1="22" y1="80" x2="8" y2="113" stroke="#8B6914" stroke-width="5" stroke-linecap="round"/><line x1="8" y1="86" x2="22" y2="89" stroke="#8B6914" stroke-width="4" stroke-linecap="round"/><line x1="78" y1="80" x2="92" y2="113" stroke="#8B6914" stroke-width="5" stroke-linecap="round"/><line x1="92" y1="86" x2="78" y2="89" stroke="#8B6914" stroke-width="4" stroke-linecap="round"/><path d="M20 79 Q12 83 10 93" stroke="#3355CC" stroke-width="10" stroke-linecap="round" fill="none"/><path d="M80 79 Q88 83 90 93" stroke="#3355CC" stroke-width="10" stroke-linecap="round" fill="none"/></svg>',
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
    // Timmy: dark hair, blue shirt, visible wheelchair wheels, both arms raised ecstatically, huge open "TIMMAH!" mouth
    svg: '<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="30" rx="26" ry="22" fill="#2B1A10" stroke="#111" stroke-width="2"/><ellipse cx="50" cy="36" rx="24" ry="22" fill="#FFCC99" stroke="#111" stroke-width="2.5"/><ellipse cx="38" cy="32" rx="7" ry="7" fill="white" stroke="#111" stroke-width="2"/><ellipse cx="62" cy="32" rx="7" ry="7" fill="white" stroke="#111" stroke-width="2"/><circle cx="38" cy="33" r="3.5" fill="#111"/><circle cx="62" cy="33" r="3.5" fill="#111"/><circle cx="40" cy="31" r="1.5" fill="white"/><circle cx="64" cy="31" r="1.5" fill="white"/><path d="M32 48 Q50 63 68 48" fill="#CC3333" stroke="#111" stroke-width="2.5"/><rect x="37" y="48" width="26" height="11" fill="white" stroke="#111" stroke-width="0.5"/><ellipse cx="50" cy="58" rx="8" ry="4" fill="#FF6677"/><rect x="44" y="58" width="12" height="7" fill="#FFCC99"/><path d="M25 63 L75 63 L73 90 L27 90 Z" fill="#4477CC" stroke="#111" stroke-width="2.5"/><rect x="26" y="63" width="6" height="29" rx="2" fill="#888" stroke="#111" stroke-width="2"/><rect x="68" y="63" width="6" height="29" rx="2" fill="#888" stroke="#111" stroke-width="2"/><rect x="25" y="88" width="50" height="6" rx="2" fill="#666" stroke="#111" stroke-width="2"/><circle cx="28" cy="104" r="12" fill="none" stroke="#555" stroke-width="4"/><circle cx="28" cy="104" r="4" fill="#555"/><line x1="28" y1="92" x2="28" y2="116" stroke="#555" stroke-width="2"/><line x1="16" y1="104" x2="40" y2="104" stroke="#555" stroke-width="2"/><circle cx="72" cy="104" r="12" fill="none" stroke="#555" stroke-width="4"/><circle cx="72" cy="104" r="4" fill="#555"/><line x1="72" y1="92" x2="72" y2="116" stroke="#555" stroke-width="2"/><line x1="60" y1="104" x2="84" y2="104" stroke="#555" stroke-width="2"/><path d="M25 69 Q12 60 8 46" stroke="#4477CC" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="8" cy="44" rx="6" ry="6" fill="#FFCC99" stroke="#111" stroke-width="1.5"/><path d="M75 69 Q88 60 92 46" stroke="#4477CC" stroke-width="11" stroke-linecap="round" fill="none"/><ellipse cx="92" cy="44" rx="6" ry="6" fill="#FFCC99" stroke="#111" stroke-width="1.5"/></svg>',
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
  artEl.innerHTML = char.svg;
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
