// Rules for the "Mark my observation" tool (/tools/mark-my-observation).
//
// Each test lists the points a mark scheme needs in a written observation. A point is awarded when the text
// matches its rule; `notes` catch common wrong answers. Fixed rules only, no AI: the same idea as the headset,
// where models hear the student but rules award every mark. Keep the science in step with lib/practicals.js.

const NOT_DISSOLVE = /(insoluble|not (re)?dissolv|doesnt (re)?dissolv|didnt (re)?dissolv|remains|stays|no change|persists)/;
const DISSOLVE = /(\bsoluble|\bdissolv|redissolv)/;
const PPT = /(precipitate|\bppt\b)/;
const EXCESS = /excess/;

const dissolves = (t) => DISSOLVE.test(t) && !NOT_DISSOLVE.test(t);
const staysInExcess = (t) => NOT_DISSOLVE.test(t) && EXCESS.test(t);
const dissolvesInExcess = (t) => dissolves(t) && EXCESS.test(t);

export const TESTS = [
  {
    id: 'cu-naoh',
    label: 'Copper(II) ions + aqueous sodium hydroxide, then excess',
    practical: '/practicals/cation-tests',
    points: [
      { label: 'Colour: light blue', test: (t) => /(light|pale) blue/.test(t) },
      { label: 'Says it is a precipitate', test: (t) => PPT.test(t) },
      { label: 'Insoluble in excess', test: staysInExcess },
    ],
    notes: [
      { when: (t) => /\bblue\b/.test(t) && !/(light|pale) blue/.test(t), say: '“Blue” on its own is not enough: the mark needs “light blue”.' },
      { when: dissolves, say: 'Copper(II) hydroxide does not dissolve in excess sodium hydroxide. (It does in excess ammonia.)' },
    ],
    model: 'Light blue precipitate, insoluble in excess.',
  },
  {
    id: 'fe3-naoh',
    label: 'Iron(III) ions + aqueous sodium hydroxide, then excess',
    practical: '/practicals/cation-tests',
    points: [
      { label: 'Colour: red-brown', test: (t) => /red ?brown/.test(t) },
      { label: 'Says it is a precipitate', test: (t) => PPT.test(t) },
      { label: 'Insoluble in excess', test: staysInExcess },
    ],
    notes: [
      { when: (t) => /(orange|\bbrown\b)/.test(t) && !/red ?brown/.test(t), say: 'Use the syllabus colour: “red-brown”.' },
      { when: (t) => /\bgreen\b/.test(t), say: 'A green precipitate is iron(II), not iron(III).' },
    ],
    model: 'Red-brown precipitate, insoluble in excess.',
  },
  {
    id: 'zn-naoh',
    label: 'Zinc ions + aqueous sodium hydroxide, then excess',
    practical: '/practicals/cation-tests',
    points: [
      { label: 'Colour: white', test: (t) => /\bwhite\b/.test(t) },
      { label: 'Says it is a precipitate', test: (t) => PPT.test(t) },
      { label: 'Dissolves in excess', test: dissolvesInExcess },
      { label: 'Gives a colourless solution', test: (t) => /colou?rless/.test(t) },
    ],
    notes: [
      { when: (t) => NOT_DISSOLVE.test(t), say: 'Zinc hydroxide does dissolve in excess sodium hydroxide.' },
      { when: (t) => /\bclear\b/.test(t) && !/colou?rless/.test(t), say: '“Clear” is not the same as “colourless”: a blue solution can be clear.' },
    ],
    model: 'White precipitate, soluble in excess, giving a colourless solution.',
  },
  {
    id: 'carbonate-acid',
    label: 'A carbonate + dilute acid, gas bubbled through limewater',
    practical: '/practicals/anion-tests',
    points: [
      { label: 'Effervescence (bubbles)', test: (t) => /(effervesc|fizz|bubbl)/.test(t) },
      { label: 'Names limewater', test: (t) => /lime ?water/.test(t) },
      { label: 'Limewater turns milky', test: (t) => /(milky|cloudy|white precipitate)/.test(t) },
    ],
    notes: [{ when: (t) => /\bclear\b/.test(t) && !/(milky|cloudy)/.test(t), say: 'Carbon dioxide turns limewater milky, not clear.' }],
    model: 'Effervescence; the gas turns limewater milky (carbon dioxide).',
  },
  {
    id: 'ammonia-litmus',
    label: 'Ammonia gas held at the mouth of the tube, with litmus paper',
    practical: '/practicals/gas-tests',
    points: [
      { label: 'The litmus paper is damp', test: (t) => /(damp|moist|wet)/.test(t) },
      { label: 'Uses red litmus', test: (t) => /red litmus/.test(t) },
      { label: 'Turns blue', test: (t) => /(turns|turned|goes|went|becomes|became|changes to|changed to) blue/.test(t) },
    ],
    notes: [
      { when: (t) => /blue litmus/.test(t) && !/red litmus/.test(t), say: 'Ammonia is alkaline: it turns red litmus blue, so use red litmus.' },
    ],
    model: 'Damp red litmus paper turns blue (ammonia).',
  },
  {
    id: 'chloride-silver',
    label: 'A chloride, acidified with dilute nitric acid, + aqueous silver nitrate',
    practical: '/practicals/anion-tests',
    points: [
      { label: 'Colour: white', test: (t) => /\bwhite\b/.test(t) },
      { label: 'Says it is a precipitate', test: (t) => PPT.test(t) },
    ],
    notes: [
      { when: (t) => /\bcream\b/.test(t), say: 'A cream precipitate is bromide, not chloride.' },
      { when: (t) => /\byellow\b/.test(t), say: 'A yellow precipitate is iodide, not chloride.' },
    ],
    model: 'White precipitate.',
  },
  {
    id: 'starch-iodine',
    label: 'A food containing starch + iodine solution',
    practical: '/practicals/food-tests',
    points: [
      { label: 'Starting colour: orange-brown', test: (t) => /(orange|brown|yellow)/.test(t) },
      { label: 'Turns blue-black', test: (t) => /blue ?black/.test(t) },
    ],
    notes: [
      { when: (t) => /(purple|violet|lilac)/.test(t), say: 'Purple is the biuret test for protein, not starch.' },
      { when: (t) => /brick ?red/.test(t), say: 'Brick-red is the Benedict’s test for reducing sugar.' },
    ],
    model: 'Orange-brown to blue-black.',
  },
];

// Lower case, hyphens to spaces, apostrophes out, so "Light-blue" and "doesn't" match the rules.
export function normalise(text) {
  return text.toLowerCase().replace(/[-–]/g, ' ').replace(/[’']/g, '').replace(/\s+/g, ' ');
}

export function mark(test, text) {
  const t = normalise(text);
  const points = test.points.map((p) => ({ label: p.label, got: p.test(t) }));
  const notes = test.notes.filter((n) => n.when(t)).map((n) => n.say);
  return { points, notes, score: points.filter((p) => p.got).length, out: points.length };
}
