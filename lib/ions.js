// Cation data for the Ion identifier tool (/tools/ion-identifier). The same results as the tables on
// /practicals/cation-tests and /practicals/flame-tests (Cambridge IGCSE Chemistry 0620); keep them in step.
//
// naoh / nh3: the precipitate with a few drops ('none' = no precipitate).
// naohExcess / nh3Excess: 'dissolves' or 'stays' in excess; null when there is no precipitate.
// flame: the flame colour, or null when the ion has no flame test in the syllabus.
// warmNaoh: true when warming with sodium hydroxide gives ammonia (ammonium only).

export const IONS = [
  { id: 'Al', name: 'Aluminium', formula: 'Al³⁺', naoh: 'white', naohExcess: 'dissolves', nh3: 'white', nh3Excess: 'stays', flame: null },
  { id: 'NH4', name: 'Ammonium', formula: 'NH₄⁺', naoh: 'none', naohExcess: null, nh3: null, nh3Excess: null, flame: null, warmNaoh: true },
  { id: 'Ba', name: 'Barium', formula: 'Ba²⁺', naoh: null, naohExcess: null, nh3: null, nh3Excess: null, flame: 'light green' },
  { id: 'Ca', name: 'Calcium', formula: 'Ca²⁺', naoh: 'white', naohExcess: 'stays', nh3: 'none', nh3Excess: null, flame: 'orange-red' },
  { id: 'Cu', name: 'Copper(II)', formula: 'Cu²⁺', naoh: 'light blue', naohExcess: 'stays', nh3: 'light blue', nh3Excess: 'dissolves', flame: 'blue-green' },
  { id: 'Fe2', name: 'Iron(II)', formula: 'Fe²⁺', naoh: 'green', naohExcess: 'stays', nh3: 'green', nh3Excess: 'stays', flame: null },
  { id: 'Fe3', name: 'Iron(III)', formula: 'Fe³⁺', naoh: 'red-brown', naohExcess: 'stays', nh3: 'red-brown', nh3Excess: 'stays', flame: null },
  { id: 'Li', name: 'Lithium', formula: 'Li⁺', naoh: 'none', naohExcess: null, nh3: 'none', nh3Excess: null, flame: 'red' },
  { id: 'K', name: 'Potassium', formula: 'K⁺', naoh: 'none', naohExcess: null, nh3: 'none', nh3Excess: null, flame: 'lilac' },
  { id: 'Na', name: 'Sodium', formula: 'Na⁺', naoh: 'none', naohExcess: null, nh3: 'none', nh3Excess: null, flame: 'yellow' },
  { id: 'Zn', name: 'Zinc', formula: 'Zn²⁺', naoh: 'white', naohExcess: 'dissolves', nh3: 'white', nh3Excess: 'dissolves', flame: null },
];

export const PRECIPITATES = ['white', 'light blue', 'green', 'red-brown', 'none'];
export const FLAMES = ['red', 'yellow', 'lilac', 'orange-red', 'light green', 'blue-green'];

// An ion matches when every observation the student chose agrees with it. An ion with no data for a test
// (null) cannot be confirmed by that test, so it drops out once that test is chosen.
export function matchIons(obs) {
  return IONS.filter((ion) => {
    if (obs.naoh && ion.naoh !== obs.naoh) return false;
    if (obs.naohExcess && ion.naohExcess !== obs.naohExcess) return false;
    if (obs.nh3 && ion.nh3 !== obs.nh3) return false;
    if (obs.nh3Excess && ion.nh3Excess !== obs.nh3Excess) return false;
    if (obs.flame && ion.flame !== obs.flame) return false;
    if (obs.ammonia === 'yes' && !ion.warmNaoh) return false;
    if (obs.ammonia === 'no' && ion.warmNaoh) return false;
    return true;
  });
}

export function describe(ion) {
  const parts = [];
  if (ion.naoh === 'none') parts.push('No precipitate with aqueous sodium hydroxide');
  else if (ion.naoh)
    parts.push(
      `Sodium hydroxide: ${ion.naoh} precipitate, ${ion.naohExcess === 'dissolves' ? 'soluble in excess, giving a colourless solution' : 'insoluble in excess'}`,
    );
  if (ion.warmNaoh) parts.push('Warm with sodium hydroxide: ammonia is given off (damp red litmus turns blue)');
  if (ion.nh3 === 'none') parts.push(ion.id === 'Ca' ? 'Ammonia: no precipitate, or a very slight white one' : 'No precipitate with aqueous ammonia');
  else if (ion.nh3)
    parts.push(
      `Ammonia: ${ion.nh3} precipitate, ${
        ion.nh3Excess === 'dissolves'
          ? ion.id === 'Cu'
            ? 'soluble in excess, giving a dark blue solution'
            : 'soluble in excess, giving a colourless solution'
          : 'insoluble in excess'
      }`,
    );
  if (ion.flame) parts.push(`Flame test: ${ion.flame}`);
  return parts;
}
