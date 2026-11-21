// One entry per practical page (/practicals/<slug>).
//
// Rules for this file (see DESIGN.md §7):
// - "The science" is standard IGCSE content and must be correct. Check a result against the syllabus before
//   changing it.
// - "In LaboraVR" says only what is built and shown in the competition film or gallery. No AI model names, no
//   outcome claims, no pilot or school that does not exist.
// - Chemistry is "In the headset"; physics and biology are "First practicals built".
// - A practical with no headset screenshot yet has `diagram` instead of `image`: a plain apparatus drawing
//   (components/PracticalDiagram.jsx), always labelled as a diagram. Swap in a real screenshot when there is one.
// - `tools`: links to the free web tools under /tools that practise this practical.

export const SUBJECTS = {
  Chemistry: { syllabus: 'Cambridge IGCSE Chemistry (0620)', status: 'In the headset' },
  Physics: { syllabus: 'Cambridge IGCSE Physics (0625)', status: 'First practicals built' },
  Biology: { syllabus: 'Cambridge IGCSE Biology (0610)', status: 'First practicals built' },
};

const FIRST_SIX = [
  {
    slug: 'cation-tests',
    subject: 'Chemistry',
    title: 'Cation tests with sodium hydroxide and ammonia',
    short: 'Cation tests',
    summary:
      'Identify a metal ion by the colour of the precipitate it forms with aqueous sodium hydroxide and aqueous ammonia, and by what happens in excess.',
    image: '/competition/00-pour.jpg',
    imageAlt: 'A gloved hand pouring sodium hydroxide into a test tube at the LaboraVR bench',
    aim: 'Add a few drops of aqueous sodium hydroxide, then an excess. Repeat with aqueous ammonia. Record the colour of any precipitate and whether it dissolves in excess.',
    tableCaption: 'Expected observations',
    table: {
      head: ['Cation', 'Aqueous sodium hydroxide', 'Aqueous ammonia'],
      rows: [
        ['Aluminium, Al³⁺', 'White precipitate, soluble in excess, giving a colourless solution', 'White precipitate, insoluble in excess'],
        ['Calcium, Ca²⁺', 'White precipitate, insoluble in excess', 'No precipitate, or a very slight white precipitate'],
        ['Copper(II), Cu²⁺', 'Light blue precipitate, insoluble in excess', 'Light blue precipitate, soluble in excess, giving a dark blue solution'],
        ['Iron(II), Fe²⁺', 'Green precipitate, insoluble in excess', 'Green precipitate, insoluble in excess'],
        ['Iron(III), Fe³⁺', 'Red-brown precipitate, insoluble in excess', 'Red-brown precipitate, insoluble in excess'],
        ['Zinc, Zn²⁺', 'White precipitate, soluble in excess, giving a colourless solution', 'White precipitate, soluble in excess, giving a colourless solution'],
      ],
    },
    examTip:
      'Marks go to the full description: the colour, the word “precipitate”, and what happens in excess. “Blue” alone is not the same as “light blue precipitate, insoluble in excess”.',
    inLab: [
      'Pour the reagent with your own hands, drop by drop, then in excess.',
      'Say aloud what you saw. The examiner marks it point by point against the wording a mark scheme accepts, and says what was missing.',
      'Looking away when the precipitate formed? The lab offers to show the change again, slowly.',
      'Unknown of the day: a new unknown salt every day. Test it, then name its cation and anion.',
    ],
    gallery: [
      { src: '/competition/01-say-what-you-saw.jpg', alt: 'The examiner panel marking a spoken observation', caption: 'Say what you saw, and get marked like an examiner.' },
      { src: '/competition/05-missed-it.jpg', alt: 'The You missed it panel, offering to show a reaction again slowly', caption: 'Missed it? Watch the change again, slowly.' },
    ],
  },
  {
    slug: 'flame-tests',
    subject: 'Chemistry',
    title: 'Flame tests for metal ions',
    short: 'Flame tests',
    summary:
      'Identify a metal ion from the colour it gives to a flame: lithium, sodium, potassium, calcium and copper.',
    image: '/lab-screens/s_flame_bunsen.jpg',
    imageAlt: 'The flame tests bench with the Bunsen burner and sample dishes',
    aim: 'Dip a clean wire into the sample and hold it in a hot, non-luminous Bunsen flame. Record the colour of the flame.',
    tableCaption: 'Expected flame colours',
    table: {
      head: ['Ion', 'Flame colour'],
      rows: [
        ['Lithium, Li⁺', 'Red'],
        ['Sodium, Na⁺', 'Yellow'],
        ['Potassium, K⁺', 'Lilac'],
        ['Calcium, Ca²⁺', 'Orange-red'],
        ['Barium, Ba²⁺', 'Light green'],
        ['Copper(II), Cu²⁺', 'Blue-green'],
      ],
    },
    examTip:
      'Clean the wire between samples, or the colour of the last one carries over. Sodium’s yellow is strong enough to hide others.',
    inLab: [
      'A Bunsen burner, a wire, and sample dishes for lithium, sodium, potassium, calcium and copper.',
      'Carry each sample to the flame with the wire yourself.',
      'Pick the wrong step and the lesson says so, and what to do next.',
    ],
    gallery: [
      { src: '/lab-screens/n_flame.jpg', alt: 'The flame tests bench with sample dishes and a wire', caption: 'The sample dishes and the wire.' },
      { src: '/lab-screens/s_hint.jpg', alt: 'A hint shown on a wrong step', caption: 'A hint when a step is wrong.' },
    ],
  },
  {
    slug: 'pendulum',
    subject: 'Physics',
    title: 'The period of a pendulum',
    short: 'Period of a pendulum',
    summary:
      'Time a pendulum at different lengths and plot the period squared against length to get a straight line.',
    image: '/competition/07-pendulum.jpg',
    imageAlt: 'A pendulum on its stand beside a stopwatch on the LaboraVR physics bench',
    aim: 'Pull the bob aside a small distance and release it. Time ten complete swings and divide by ten to get the period, T. Repeat for five lengths, L, and plot T² against L.',
    tableCaption: 'What to expect',
    table: {
      head: ['Point', 'Why it matters'],
      rows: [
        ['Time ten swings, not one', 'Your reaction time is a large part of a single swing; over ten swings its effect is ten times smaller.'],
        ['Small swings only', 'The period stays nearly the same only for small swings.'],
        ['Plot T² against L', 'The points lie close to a straight line through the origin: T² is proportional to L.'],
        ['Measure L to the centre of the bob', 'The length is from the point of suspension to the centre of mass of the bob.'],
      ],
    },
    examTip:
      'Record every reading, including repeats, with units in the table heading, and the period to the same number of decimal places throughout.',
    inLab: [
      'Pull the bob aside with your hand and time ten swings on the bench stopwatch.',
      'Each reading goes into your own table.',
      'Your own timings are plotted as T² against length on your own graph.',
    ],
    gallery: [
      { src: '/competition/08-your-graph.jpg', alt: 'A graph of the period squared against pendulum length from a student’s results', caption: 'Your own times, your own graph.' },
      { src: '/lab-screens/s_phys_stand.jpg', alt: 'A pendulum on its stand beside the timing dial', caption: 'The pendulum and the timing dial.' },
    ],
  },
  {
    slug: 'measuring-cylinder',
    subject: 'Physics',
    title: 'Reading a measuring cylinder at eye level',
    short: 'Reading at eye level',
    summary:
      'Read the volume from the bottom of the meniscus with your eye level with it, and avoid parallax error.',
    image: '/competition/09-sight-lines.jpg',
    imageAlt: 'A magnified measuring cylinder reading taken at eye level',
    aim: 'Stand the cylinder on a level surface. Bring your eye level with the liquid surface and read the scale at the bottom of the meniscus.',
    tableCaption: 'What to expect',
    table: {
      head: ['Point', 'Why it matters'],
      rows: [
        ['Eye level with the meniscus', 'Looking from above or below makes the reading too high or too low: parallax error.'],
        ['Bottom of the meniscus', 'For water and most solutions the surface curves down in the middle; read the bottom of the curve.'],
        ['Note the scale interval', 'Work out what one small division is worth before reading.'],
      ],
    },
    examTip:
      'Say how you avoided parallax error: “eye level with the bottom of the meniscus” is the phrase examiners look for.',
    inLab: [
      'The headset knows where your eye is, so a reading taken from above is wrong, as it is in a real lab.',
      'The reading only counts when your eye is level with the liquid.',
      'The same idea is used to line up pins through a glass block.',
    ],
    gallery: [],
  },
  {
    slug: 'food-tests',
    subject: 'Biology',
    title: 'Food tests: starch, sugar and protein',
    short: 'Food tests',
    summary:
      'Test a food for starch with iodine solution, for reducing sugar with Benedict’s solution, and for protein with biuret solution.',
    image: '/competition/10-kitchen-starch.jpg',
    imageAlt: 'A gloved hand holding a test tube during a starch test on bread',
    aim: 'Prepare a sample of the food. Test separate portions for starch, reducing sugar and protein, and record the colour at the end of each test.',
    tableCaption: 'Expected results',
    table: {
      head: ['Test for', 'Reagent', 'Positive result'],
      rows: [
        ['Starch', 'Iodine solution', 'Orange-brown to blue-black'],
        ['Reducing sugar', 'Benedict’s solution, heated in a hot water bath', 'Blue to green, yellow, orange or brick-red, depending on how much sugar'],
        ['Protein', 'Biuret solution', 'Blue to purple'],
      ],
    },
    examTip:
      'Give the colour at the start and at the end. Benedict’s needs heating; iodine and biuret do not.',
    inLab: [
      'Show the headset bread, milk, an egg or an apple from your own kitchen.',
      'The lab recognises it, and you test it at the bench for starch, sugar and protein.',
    ],
    gallery: [],
  },
  {
    slug: 'potato-osmosis',
    subject: 'Biology',
    title: 'Potato strips in sugar solutions (osmosis)',
    short: 'Potato strips and osmosis',
    summary:
      'Measure potato strips before and after they sit in sugar solutions of different concentrations, and plot the change in length.',
    image: '/competition/11-potato-strips.jpg',
    imageAlt: 'Measuring potato strips in sugar solutions, with the results table',
    aim: 'Cut strips of the same length. Measure each one, leave it in a sugar solution of known concentration, then measure it again. Plot the change in length against concentration.',
    tableCaption: 'What to expect',
    table: {
      head: ['Solution', 'What happens', 'Why'],
      rows: [
        ['Water or a dilute solution', 'Strip gets longer', 'Water enters the cells by osmosis'],
        ['A concentrated solution', 'Strip gets shorter', 'Water leaves the cells by osmosis'],
        ['Where the line crosses zero', 'No change in length', 'The solution has about the same water potential as the potato cells'],
      ],
    },
    examTip:
      'Osmosis is the movement of water through a partially permeable membrane, from a dilute solution to a more concentrated one. Use the word “water”, not “solution” or “sugar”.',
    inLab: [
      'Measure each strip yourself, before and after.',
      'Each length goes into your own table, and the change in length is plotted.',
    ],
    gallery: [],
  },
];

const ADDED = [
  {
    slug: 'anion-tests',
    subject: 'Chemistry',
    title: 'Anion tests: carbonate, halides, sulfate, sulfite and nitrate',
    short: 'Anion tests',
    summary:
      'Identify a negative ion with the right reagent: acid and limewater for carbonate, silver nitrate for halides, barium nitrate for sulfate.',
    image: '/lab-screens/s_carbonate_tube.jpg',
    imageAlt: 'A gloved hand with a delivery tube beside the limewater label',
    aim: 'For each anion, add the reagent in the table to a solution of the sample, in the order given, and record what you see.',
    tableCaption: 'Tests and expected observations',
    table: {
      head: ['Anion', 'Test', 'Positive result'],
      rows: [
        ['Carbonate, CO₃²⁻', 'Add dilute acid, then test the gas with limewater', 'Effervescence; carbon dioxide turns limewater milky'],
        ['Chloride, Cl⁻', 'Acidify with dilute nitric acid, then add aqueous silver nitrate', 'White precipitate'],
        ['Bromide, Br⁻', 'Acidify with dilute nitric acid, then add aqueous silver nitrate', 'Cream precipitate'],
        ['Iodide, I⁻', 'Acidify with dilute nitric acid, then add aqueous silver nitrate', 'Yellow precipitate'],
        ['Sulfate, SO₄²⁻', 'Acidify with dilute nitric acid, then add aqueous barium nitrate', 'White precipitate'],
        ['Sulfite, SO₃²⁻', 'Add dilute hydrochloric acid, warm gently, and test the gas with acidified aqueous potassium manganate(VII)', 'Sulfur dioxide turns the manganate(VII) from purple to colourless'],
        ['Nitrate, NO₃⁻', 'Add aqueous sodium hydroxide, then aluminium foil, and warm carefully', 'Ammonia is given off; it turns damp red litmus paper blue'],
      ],
    },
    examTip:
      'Name the gas and its test, not just the bubbles: “effervescence; the gas turns limewater milky, so carbon dioxide”. Acidify with nitric acid before silver nitrate or barium nitrate, never with hydrochloric acid, which adds chloride ions.',
    inLab: [
      'The carbonate test: acid on the sample, a bung and delivery tube, and the gas bubbled through limewater.',
      'Separate lessons on the board for the halide and sulfate anions, sulfite and sulfur dioxide, and ammonium and nitrate.',
      'Pick the wrong reagent and the lesson says so, and what to do next.',
    ],
    gallery: [
      { src: '/lab-screens/n_limewater.jpg', alt: 'A delivery tube and limewater at the bench', caption: 'The delivery tube and the limewater.' },
      { src: '/lab-screens/n_bung.jpg', alt: 'A gloved hand fitting a bung and delivery tube to a test tube', caption: 'Fitting the bung and delivery tube.' },
    ],
    tools: [{ href: '/tools/mark-my-observation', label: 'Mark my observation' }],
  },
  {
    slug: 'gas-tests',
    subject: 'Chemistry',
    title: 'Tests for gases',
    short: 'Gas tests',
    summary:
      'Identify hydrogen, oxygen, carbon dioxide, ammonia, chlorine and sulfur dioxide with a splint, limewater, litmus or manganate(VII).',
    image: '/lab-screens/n_litmus.jpg',
    imageAlt: 'A gloved hand holding a blue litmus strip in the LaboraVR lab',
    aim: 'Collect or hold the test near the mouth of the tube where the gas is given off, and record the result.',
    tableCaption: 'Tests and expected results',
    table: {
      head: ['Gas', 'Test', 'Positive result'],
      rows: [
        ['Hydrogen, H₂', 'A lighted splint', '“Pops”'],
        ['Oxygen, O₂', 'A glowing splint', 'Relights'],
        ['Carbon dioxide, CO₂', 'Bubble through limewater', 'Limewater turns milky'],
        ['Ammonia, NH₃', 'Damp red litmus paper', 'Turns blue'],
        ['Chlorine, Cl₂', 'Damp litmus paper', 'Bleached'],
        ['Sulfur dioxide, SO₂', 'Acidified aqueous potassium manganate(VII)', 'Purple to colourless'],
      ],
    },
    examTip:
      'Litmus paper must be damp: a gas only changes its colour once it dissolves. Say “lighted” for hydrogen and “glowing” for oxygen; swapping them loses the mark.',
    inLab: [
      'Red and blue litmus at the bench, with the reminder to dip it in water first.',
      'Limewater and a delivery tube for carbon dioxide.',
      'A lesson on the board for naming the gas: hydrogen, oxygen, carbon dioxide and chlorine.',
    ],
    gallery: [
      { src: '/lab-screens/s_red_litmus.jpg', alt: 'A gloved hand with red litmus and a test tube at the Bunsen burner', caption: 'Red litmus, for ammonia.' },
      { src: '/lab-screens/n_gas_delivery.jpg', alt: 'A gloved hand with a gas delivery tube at the bench', caption: 'Collecting a gas.' },
    ],
    tools: [{ href: '/tools/mark-my-observation', label: 'Mark my observation' }],
  },
  {
    slug: 'unknown-salt',
    subject: 'Chemistry',
    title: 'Identifying an unknown salt',
    short: 'Unknown salt',
    summary:
      'Put the cation, anion and flame tests together to name an unknown salt from your own observations.',
    image: '/lab-screens/n_cation_bench.jpg',
    imageAlt: 'The cation tests bench in the LaboraVR lab',
    aim: 'Make a solution of the salt. Test portions of it for the cation and for the anion, and do a flame test on the solid. Record every observation, then write the name of the salt.',
    tableCaption: 'A sensible order',
    table: {
      head: ['Step', 'What it tells you'],
      rows: [
        ['Look at it', 'A coloured solid or solution narrows the cation down (copper(II) compounds are often blue or green)'],
        ['Flame test', 'Lithium, sodium, potassium, calcium, barium or copper(II)'],
        ['Aqueous sodium hydroxide, then excess', 'The cation, from the precipitate and whether it dissolves; warm it to test for ammonium'],
        ['Aqueous ammonia, then excess', 'Separates ions that look alike with sodium hydroxide, such as zinc and aluminium'],
        ['Anion tests', 'Carbonate, a halide, sulfate, sulfite or nitrate'],
      ],
    },
    examTip:
      'Write the observation and the conclusion separately. “White precipitate, soluble in excess” is the observation; “zinc or aluminium” is the conclusion, until ammonia decides between them.',
    inLab: [
      'Unknown of the day: a new unknown salt every day, the same for every student.',
      'Test it on the bench, then name its cation and its anion.',
      'Keep a streak of days.',
      'Show the headset a packet of table salt or washing soda from your kitchen, and test for the ions in it.',
    ],
    gallery: [
      { src: '/lab-screens/s_cation_pour2.jpg', alt: 'A gloved hand adding sodium hydroxide to a test tube', caption: 'Sodium hydroxide, drop by drop.' },
    ],
    tools: [
      { href: '/tools/ion-identifier', label: 'Ion identifier' },
      { href: '/tools/mark-my-observation', label: 'Mark my observation' },
    ],
  },
  {
    slug: 'neutralisation-temperature',
    subject: 'Chemistry',
    title: 'Temperature change when an acid is neutralised',
    short: 'Neutralisation and temperature',
    summary:
      'Add acid to an alkali in a polystyrene cup, record the temperature after each portion, and find the volume that neutralises it from the graph.',
    diagram: 'neutralisation',
    imageAlt: 'Diagram: a polystyrene cup of alkali with a thermometer, and acid added from a burette',
    aim: 'Measure a volume of alkali into a polystyrene cup and record its temperature. Add the acid in equal portions, stirring, and record the highest temperature after each one. Plot temperature against volume of acid added.',
    tableCaption: 'What to expect',
    table: {
      head: ['Point', 'Why'],
      rows: [
        ['The temperature rises', 'Neutralisation is exothermic: it gives out heat'],
        ['It reaches a maximum', 'At the point where the acid has just neutralised the alkali'],
        ['Then it falls slowly', 'No more heat is given out; the cooler acid added, and heat lost to the air, cool the mixture'],
        ['Draw two straight lines', 'Where they cross gives the volume of acid needed and the maximum temperature'],
        ['A polystyrene cup, with a lid', 'It is a poor conductor, so less heat is lost to the air'],
      ],
    },
    examTip:
      'Draw two separate best-fit lines, one for the rising points and one for the falling points, and read the volume where they cross. Do not join the points dot to dot.',
    inLab: [
      'Neutralise an acid in a cup, with a thermometer.',
      'The thermometer is read from the apparatus itself, and each reading goes into your own table.',
      'Your own readings are plotted on your own graph.',
    ],
    gallery: [],
    tools: [],
  },
  {
    slug: 'rate-gas-syringe',
    subject: 'Chemistry',
    title: 'Rate of reaction: magnesium and acid with a gas syringe',
    short: 'Rate with a gas syringe',
    summary:
      'Collect the hydrogen from magnesium and dilute acid in a gas syringe, record the volume at regular times, and read the rate from the graph.',
    diagram: 'gas-syringe',
    imageAlt: 'Diagram: a conical flask of magnesium and acid connected to a gas syringe',
    aim: 'Add magnesium ribbon to dilute hydrochloric acid in a flask connected to a gas syringe, and start the clock. Record the volume of gas at regular intervals until it stops changing. Plot volume against time.',
    tableCaption: 'What to expect',
    table: {
      head: ['Point', 'Why'],
      rows: [
        ['The curve is steepest at the start', 'The reactants are most concentrated, so the rate is highest'],
        ['It gets less steep', 'The acid is used up and particles collide less often'],
        ['It levels off', 'One reactant has run out, so no more gas is made'],
        ['More concentrated acid: steeper start', 'More frequent collisions between particles'],
        ['The rate at any time', 'The gradient of the curve at that time'],
      ],
    },
    examTip:
      'If the magnesium runs out first, changing only the acid’s concentration changes how fast the gas comes, not how much: the final volume stays the same.',
    inLab: [
      'Follow magnesium in acid with a gas syringe.',
      'The syringe is read from the apparatus itself, and each reading goes into your own table.',
      'Your own readings are plotted on your own graph.',
    ],
    gallery: [],
    tools: [],
  },
  {
    slug: 'glass-block',
    subject: 'Physics',
    title: 'Refraction: pins through a glass block',
    short: 'Pins through a glass block',
    summary:
      'Trace a ray through a rectangular glass block with pins, measure the angles of incidence and refraction, and see the ray bend towards the normal.',
    diagram: 'glass-block',
    imageAlt: 'Diagram: a ray passing through a rectangular glass block, marked by four pins',
    aim: 'Draw round the block on paper. Push two pins in along a line that meets the block at an angle. Look through the block from the other side and push in two more pins so all four appear in a line. Join the pins, draw the normal, and measure the angles.',
    tableCaption: 'What to expect',
    table: {
      head: ['Point', 'Why'],
      rows: [
        ['The ray bends towards the normal as it enters the glass', 'Light slows down in glass'],
        ['It bends away from the normal as it leaves', 'Light speeds up again in air'],
        ['The ray that leaves is parallel to the ray that entered', 'The two faces of the block are parallel'],
        ['Pins far apart', 'Lines up the ray more precisely'],
        ['Refractive index, n = sin i ÷ sin r', 'From the angles of incidence, i, and refraction, r'],
      ],
    },
    examTip:
      'Measure angles from the normal, not from the surface of the block. Line the pins up by their bases, low down, where they meet the paper.',
    inLab: [
      'The headset knows where your eye is, so you line up pins through the block by looking, as on paper.',
      'The same idea makes a measuring cylinder read wrongly from above.',
    ],
    gallery: [],
    tools: [],
  },
  {
    slug: 'biological-drawing',
    subject: 'Biology',
    title: 'Biological drawing: be the examiner',
    short: 'Biological drawing',
    summary:
      'What a full-mark biological drawing looks like: clear single lines, no shading, the right proportions, and ruled labels.',
    diagram: 'leaf',
    imageAlt: 'Diagram: a leaf outline drawn with clear single lines and two ruled label lines',
    aim: 'Draw the specimen in pencil, large enough to fill most of the space, with its proportions right. Add ruled label lines and a title, and work out the magnification if asked.',
    tableCaption: 'What earns the marks',
    table: {
      head: ['Rule', 'What it means'],
      rows: [
        ['Clear, continuous lines', 'One sharp pencil line for each edge: no sketching, no gaps'],
        ['No shading', 'Show structures with outlines only'],
        ['Large', 'Fill most of the space given'],
        ['Correct proportions', 'Parts the right size compared with each other'],
        ['Label lines with a ruler', 'Touching the part, not crossing each other, no arrowheads'],
        ['Magnification = drawing size ÷ actual size', 'Measure both in the same units'],
      ],
    },
    examTip:
      'A drawing that looks “artistic” often loses marks: shading, broken lines and arrows on label lines are the usual reasons.',
    inLab: [
      'Show the headset a real leaf.',
      'Four drawings of that leaf appear. Find the one that earns full marks, and name what is wrong with the others.',
    ],
    gallery: [],
    tools: [],
  },
];

// Tools for the first six practicals (added after they were written).
const FIRST_SIX_TOOLS = {
  'cation-tests': [
    { href: '/tools/ion-identifier', label: 'Ion identifier' },
    { href: '/tools/mark-my-observation', label: 'Mark my observation' },
  ],
  'flame-tests': [{ href: '/tools/ion-identifier', label: 'Ion identifier' }],
  pendulum: [{ href: '/tools/pendulum-graph', label: 'Pendulum graph' }],
  'food-tests': [{ href: '/tools/mark-my-observation', label: 'Mark my observation' }],
};

// Page order: by science, then roughly the order a course meets them.
const ORDER = [
  'cation-tests', 'anion-tests', 'gas-tests', 'flame-tests', 'unknown-salt', 'neutralisation-temperature', 'rate-gas-syringe',
  'pendulum', 'measuring-cylinder', 'glass-block',
  'food-tests', 'potato-osmosis', 'biological-drawing',
];

const ALL = [...FIRST_SIX.map((p) => ({ tools: FIRST_SIX_TOOLS[p.slug] || [], ...p })), ...ADDED];

export const practicals = ORDER.map((slug) => ALL.find((p) => p.slug === slug));

export function getPractical(slug) {
  return practicals.find((p) => p.slug === slug);
}
