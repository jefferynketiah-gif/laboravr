import Link from 'next/link';
import { useState } from 'react';
import { Check, X, Info, ArrowRight } from 'lucide-react';

import ToolPage from '../../components/ToolPage';
import { TESTS, mark } from '../../lib/observations';

export default function MarkMyObservation() {
  const [testId, setTestId] = useState(TESTS[0].id);
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const test = TESTS.find((t) => t.id === testId);

  const choose = (id) => {
    setTestId(id);
    setResult(null);
    setShowModel(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) setResult(mark(test, text));
  };

  return (
    <ToolPage
      slug="mark-my-observation"
      title="Mark my observation"
      metaTitle="Mark my observation: check an IGCSE practical observation — LaboraVR"
      description="Write what you would see in a chemistry or biology test, and fixed mark-scheme rules tick each point and say what is missing. Free, for IGCSE students."
      intro="Choose a test, write what you would see, and get it marked point by point. Fixed rules, the way a mark scheme works, not a guess."
      related={[
        { href: '/practicals/cation-tests', label: 'Cation tests' },
        { href: '/practicals/anion-tests', label: 'Anion tests' },
        { href: '/practicals/gas-tests', label: 'Gas tests' },
        { href: '/practicals/food-tests', label: 'Food tests' },
      ]}
    >
      <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
        <fieldset>
          <legend className="mb-3 font-semibold text-chalk">1. Choose a test</legend>
          <div className="space-y-2">
            {TESTS.map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={t.id === testId}
                onClick={() => choose(t.id)}
                className={`block w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv ${
                  t.id === testId ? 'border-uv bg-uv-dim text-chalk' : 'border-edge bg-white text-chalk-dim hover:border-uv/40'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </fieldset>

        <div>
          <form onSubmit={onSubmit} className="rounded-3xl border border-edge bg-white p-6 shadow-sm md:p-8">
            <label htmlFor="obs" className="mb-1 block font-semibold text-chalk">
              2. What would you see?
            </label>
            <p className="mb-4 text-sm text-muted">{test.label}</p>
            <textarea
              id="obs"
              rows={4}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setResult(null);
              }}
              placeholder="Write your observation, as you would in the exam"
              className="w-full rounded-2xl border border-edge bg-panel p-4 text-chalk placeholder:text-muted focus:border-uv focus:outline-none focus:ring-2 focus:ring-uv/20"
            />
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={!text.trim()}
                className="btn-glow rounded-full bg-uv px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-uv-bright disabled:cursor-not-allowed disabled:opacity-40"
              >
                Mark it
              </button>
              <button
                type="button"
                onClick={() => setShowModel((s) => !s)}
                className="text-sm font-semibold text-muted hover:text-chalk"
              >
                {showModel ? 'Hide' : 'Show'} a full-mark answer
              </button>
            </div>
            {showModel && (
              <p className="mt-4 rounded-2xl bg-panel p-4 text-sm text-chalk">
                <span className="font-mono text-[10px] tracking-[0.18em] text-uv">FULL MARKS · </span>
                {test.model}
              </p>
            )}
          </form>

          {result && (
            <div aria-live="polite" className="mt-6 rounded-3xl border border-edge bg-white p-6 md:p-8">
              <p className="mb-5 flex items-baseline gap-3">
                <span className="text-4xl font-extrabold tracking-tightest text-warm">
                  {result.score}/{result.out}
                </span>
                <span className="text-chalk-dim">
                  {result.score === result.out ? 'Every point the mark scheme needs.' : 'Points the mark scheme needs:'}
                </span>
              </p>
              <ul className="space-y-2">
                {result.points.map((p) => (
                  <li key={p.label} className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        p.got ? 'bg-physics/15 text-physics' : 'bg-warm-bg text-warm'
                      }`}
                    >
                      {p.got ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
                    </span>
                    <span className={p.got ? 'text-chalk' : 'font-semibold text-chalk'}>
                      {p.label}
                      {!p.got && <span className="font-normal text-muted"> (missing)</span>}
                    </span>
                  </li>
                ))}
              </ul>
              {result.notes.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {result.notes.map((n) => (
                    <li key={n} className="flex gap-3 rounded-2xl border border-warm/20 bg-warm-bg p-4 text-sm text-chalk">
                      <Info size={16} className="mt-0.5 flex-shrink-0 text-warm" /> {n}
                    </li>
                  ))}
                </ul>
              )}
              <Link href={test.practical} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-uv hover:text-uv-bright">
                Read the practical <ArrowRight size={14} />
              </Link>
            </div>
          )}

          <p className="mt-6 text-xs leading-relaxed text-muted">
            These are simplified rules for practice, written from the syllabus. A real mark scheme may accept other
            wording. In the headset, the student says the observation aloud and the examiner marks it the same way:
            point by point, by rules.
          </p>
        </div>
      </div>
    </ToolPage>
  );
}
