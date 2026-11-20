// One entry per practical page (/practicals/<slug>).
//
// Rules for this file (see DESIGN.md §7):
// - "The science" is standard IGCSE content and must be correct. Check a result against the syllabus before
//   changing it.
// - "In LaboraVR" says only what is built and shown in the competition film or gallery. No AI model names, no
//   outcome claims, no pilot or school that does not exist.
// - Chemistry is "In the headset"; physics and biology are "First practicals built".

export const SUBJECTS = {
  Chemistry: { syllabus: 'Cambridge IGCSE Chemistry (0620)', status: 'In the headset' },
  Physics: { syllabus: 'Cambridge IGCSE Physics (0625)', status: 'First practicals built' },
  Biology: { syllabus: 'Cambridge IGCSE Biology (0610)', status: 'First practicals built' },
};

export const practicals = [
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

export function getPractical(slug) {
  return practicals.find((p) => p.slug === slug);
}
