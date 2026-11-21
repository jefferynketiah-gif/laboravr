import { useState } from 'react';
import { RotateCcw } from 'lucide-react';

import ToolPage, { Chips } from '../../components/ToolPage';
import { IONS, PRECIPITATES, FLAMES, matchIons, describe } from '../../lib/ions';

// Rough on-screen swatches for the colour chips (decoration only; the words carry the meaning).
const PPT = { white: '#FFFFFF', 'light blue': '#A5D8FF', green: '#6B8E23', 'red-brown': '#8B3A1A', none: 'transparent' };
const FLAME = {
  red: '#E11D48',
  yellow: '#FACC15',
  lilac: '#C4B5FD',
  'orange-red': '#F97316',
  'light green': '#86EFAC',
  'blue-green': '#14B8A6',
};

const EMPTY = { naoh: null, naohExcess: null, nh3: null, nh3Excess: null, flame: null, ammonia: null };

export default function IonIdentifier() {
  const [obs, setObs] = useState(EMPTY);
  const set = (k) => (v) =>
    setObs((o) => {
      const next = { ...o, [k]: v };
      // "In excess" only means something when there was a precipitate.
      if (k === 'naoh' && (v === 'none' || !v)) next.naohExcess = null;
      if (k === 'nh3' && (v === 'none' || !v)) next.nh3Excess = null;
      return next;
    });

  const chosen = Object.values(obs).some(Boolean);
  const matches = matchIons(obs);

  return (
    <ToolPage
      slug="ion-identifier"
      title="Ion identifier"
      metaTitle="Ion identifier: name a cation from your observations — LaboraVR"
      description="Pick what you saw with sodium hydroxide, ammonia and in the flame test, and see which metal ion it is. Free, for IGCSE Chemistry."
      intro="Pick what you saw. The list narrows to the ions that fit, with the full observation an examiner wants for each."
      related={[
        { href: '/practicals/cation-tests', label: 'Cation tests with sodium hydroxide and ammonia' },
        { href: '/practicals/flame-tests', label: 'Flame tests for metal ions' },
        { href: '/practicals/unknown-salt', label: 'Identifying an unknown salt' },
      ]}
    >
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="rounded-3xl border border-edge bg-white p-6 shadow-sm md:p-8">
          <Chips
            label="1. A few drops of aqueous sodium hydroxide"
            options={PRECIPITATES}
            value={obs.naoh}
            onChange={set('naoh')}
            swatch={PPT}
            render={(o) => (o === 'none' ? 'No precipitate' : `${o} precipitate`)}
          />
          {obs.naoh && obs.naoh !== 'none' && (
            <Chips
              label="…then sodium hydroxide in excess"
              options={['dissolves', 'stays']}
              value={obs.naohExcess}
              onChange={set('naohExcess')}
              render={(o) => (o === 'dissolves' ? 'Precipitate dissolves' : 'Precipitate stays')}
            />
          )}
          {obs.naoh === 'none' && (
            <Chips
              label="…then warm it. Is ammonia given off (damp red litmus turns blue)?"
              options={['yes', 'no']}
              value={obs.ammonia}
              onChange={set('ammonia')}
              render={(o) => (o === 'yes' ? 'Yes' : 'No')}
            />
          )}
          <Chips
            label="2. A few drops of aqueous ammonia"
            options={PRECIPITATES}
            value={obs.nh3}
            onChange={set('nh3')}
            swatch={PPT}
            render={(o) => (o === 'none' ? 'No precipitate' : `${o} precipitate`)}
          />
          {obs.nh3 && obs.nh3 !== 'none' && (
            <Chips
              label="…then ammonia in excess"
              options={['dissolves', 'stays']}
              value={obs.nh3Excess}
              onChange={set('nh3Excess')}
              render={(o) => (o === 'dissolves' ? 'Precipitate dissolves' : 'Precipitate stays')}
            />
          )}
          <Chips label="3. Flame test colour" options={FLAMES} value={obs.flame} onChange={set('flame')} swatch={FLAME} />

          {chosen && (
            <button
              type="button"
              onClick={() => setObs(EMPTY)}
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-chalk"
            >
              <RotateCcw size={14} /> Start again
            </button>
          )}
        </div>

        <div aria-live="polite">
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-uv">
            {!chosen
              ? `ALL ${IONS.length} IONS`
              : matches.length === 0
                ? 'NO ION FITS'
                : matches.length === 1
                  ? 'IT IS'
                  : `${matches.length} IONS FIT`}
          </p>
          {chosen && matches.length === 0 && (
            <p className="rounded-2xl border border-warm/20 bg-warm-bg p-5 leading-relaxed text-chalk">
              No ion in the syllabus gives that combination. Check one observation at a time, or start again.
            </p>
          )}
          <ul className="space-y-3">
            {(chosen ? matches : IONS).map((ion) => (
              <li
                key={ion.id}
                className={`rounded-2xl border bg-white p-5 ${chosen && matches.length === 1 ? 'border-uv shadow-md' : 'border-edge'}`}
              >
                <p className="mb-2 text-lg font-bold text-chalk">
                  {ion.name} <span className="font-mono text-base text-uv">{ion.formula}</span>
                </p>
                {chosen && (
                  <ul className="space-y-1 text-sm leading-relaxed text-chalk-dim">
                    {describe(ion).map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ToolPage>
  );
}
