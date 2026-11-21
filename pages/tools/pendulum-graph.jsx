import { useMemo, useState } from 'react';
import { RotateCcw } from 'lucide-react';

import ToolPage from '../../components/ToolPage';

// Lengths in cm, time for ten swings in s. The example is close to real readings (g ≈ 9.8 m/s²).
const EXAMPLE = [
  ['20', '9.0'],
  ['40', '12.6'],
  ['60', '15.6'],
  ['80', '17.9'],
  ['100', '20.1'],
];
const BLANK = Array.from({ length: 5 }, () => ['', '']);

const fmt = (n, d) => (Number.isFinite(n) ? n.toFixed(d) : '—');

export default function PendulumGraph() {
  const [rows, setRows] = useState(BLANK);

  const setCell = (i, j) => (e) =>
    setRows((r) => r.map((row, k) => (k === i ? row.map((c, m) => (m === j ? e.target.value : c)) : row)));

  // Each valid row: L in m, T = t / 10, T².
  const points = useMemo(
    () =>
      rows
        .map(([l, t]) => {
          const L = parseFloat(l) / 100;
          const T = parseFloat(t) / 10;
          return L > 0 && T > 0 ? { L, T, T2: T * T } : null;
        })
        .filter(Boolean),
    [rows],
  );

  // Best-fit line through the origin, T² = k L (least squares): k = Σ(L·T²) / Σ(L²).
  const k = points.length >= 2 ? points.reduce((s, p) => s + p.L * p.T2, 0) / points.reduce((s, p) => s + p.L * p.L, 0) : NaN;
  const g = (4 * Math.PI * Math.PI) / k;

  // Graph scales, rounded up to tidy numbers.
  const maxL = Math.max(1, ...points.map((p) => p.L));
  const maxT2 = Math.max(1, ...points.map((p) => p.T2));
  const xMax = Math.ceil(maxL * 5) / 5;
  const yMax = Math.ceil(maxT2);
  const W = 520;
  const H = 340;
  const pad = { l: 56, r: 16, t: 16, b: 48 };
  const x = (v) => pad.l + (v / xMax) * (W - pad.l - pad.r);
  const y = (v) => H - pad.b - (v / yMax) * (H - pad.t - pad.b);
  const xTicks = Array.from({ length: Math.round(xMax / 0.2) + 1 }, (_, i) => +(i * 0.2).toFixed(1));
  const yStep = yMax <= 5 ? 1 : 2;
  const yTicks = Array.from({ length: Math.floor(yMax / yStep) + 1 }, (_, i) => i * yStep);

  return (
    <ToolPage
      slug="pendulum-graph"
      title="Pendulum graph"
      metaTitle="Pendulum graph: plot T² against length from your readings — LaboraVR"
      description="Enter five pendulum lengths and the time for ten swings. It works out the period and T², draws the graph of T² against length, and gives the gradient. Free, for IGCSE Physics."
      intro="Type your five lengths and the time for ten swings. You get the period, T², the graph and its gradient: the same graph the headset plots from your own timings."
      related={[{ href: '/practicals/pendulum', label: 'The period of a pendulum' }]}
    >
      <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
        <div className="rounded-3xl border border-edge bg-white p-6 shadow-sm md:p-8">
          <table className="w-full text-sm">
            <caption className="mb-4 text-left font-semibold text-chalk">Your readings</caption>
            <thead>
              <tr className="text-left text-chalk">
                <th scope="col" className="pb-2 pr-2 font-semibold">L / cm</th>
                <th scope="col" className="pb-2 pr-2 font-semibold">10 swings / s</th>
                <th scope="col" className="pb-2 pr-2 font-semibold">T / s</th>
                <th scope="col" className="pb-2 font-semibold">T² / s²</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([l, t], i) => {
                const L = parseFloat(l);
                const T = parseFloat(t) / 10;
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <tr key={i}>
                    <td className="py-1 pr-2">
                      <input
                        inputMode="decimal"
                        aria-label={`Length ${i + 1} in centimetres`}
                        value={l}
                        onChange={setCell(i, 0)}
                        className="w-full rounded-lg border border-edge bg-panel px-2 py-2 text-chalk focus:border-uv focus:outline-none"
                      />
                    </td>
                    <td className="py-1 pr-2">
                      <input
                        inputMode="decimal"
                        aria-label={`Time for ten swings ${i + 1} in seconds`}
                        value={t}
                        onChange={setCell(i, 1)}
                        className="w-full rounded-lg border border-edge bg-panel px-2 py-2 text-chalk focus:border-uv focus:outline-none"
                      />
                    </td>
                    <td className="py-1 pr-2 font-mono text-chalk-dim">{L > 0 && T > 0 ? fmt(T, 2) : ''}</td>
                    <td className="py-1 font-mono text-chalk-dim">{L > 0 && T > 0 ? fmt(T * T, 2) : ''}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
            <button type="button" onClick={() => setRows(EXAMPLE)} className="text-uv hover:text-uv-bright">
              Fill example readings
            </button>
            <button type="button" onClick={() => setRows(BLANK)} className="inline-flex items-center gap-1.5 text-muted hover:text-chalk">
              <RotateCcw size={14} /> Clear
            </button>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted">
            T is the time for ten swings divided by ten. Each row needs a length and a time.
          </p>
        </div>

        <div>
          <figure className="rounded-3xl border border-edge bg-white p-4 shadow-sm">
            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Graph of T squared against length" className="w-full">
              {xTicks.map((v) => (
                <g key={`x${v}`}>
                  <path d={`M${x(v)} ${pad.t} V${H - pad.b}`} stroke="#E2E8F0" />
                  <text x={x(v)} y={H - pad.b + 18} textAnchor="middle" fontSize="11" fill="#64748B">
                    {v.toFixed(1)}
                  </text>
                </g>
              ))}
              {yTicks.map((v) => (
                <g key={`y${v}`}>
                  <path d={`M${pad.l} ${y(v)} H${W - pad.r}`} stroke="#E2E8F0" />
                  <text x={pad.l - 10} y={y(v) + 4} textAnchor="end" fontSize="11" fill="#64748B">
                    {v}
                  </text>
                </g>
              ))}
              <path d={`M${pad.l} ${pad.t} V${H - pad.b} H${W - pad.r}`} stroke="#0F172A" strokeWidth="1.5" fill="none" />
              <text x={(W + pad.l) / 2} y={H - 8} textAnchor="middle" fontSize="12" fill="#0F172A">
                L / m
              </text>
              <text x={16} y={(H - pad.b) / 2} textAnchor="middle" fontSize="12" fill="#0F172A" transform={`rotate(-90 16 ${(H - pad.b) / 2})`}>
                T² / s²
              </text>
              {Number.isFinite(k) && (
                <path
                  d={`M${x(0)} ${y(0)} L${x(Math.min(xMax, yMax / k))} ${y(Math.min(yMax, k * xMax))}`}
                  stroke="#0D9488"
                  strokeWidth="2"
                />
              )}
              {points.map((p) => (
                <g key={`${p.L}-${p.T2}`} stroke="#0F172A" strokeWidth="1.8">
                  <path d={`M${x(p.L) - 5} ${y(p.T2) - 5} l10 10 M${x(p.L) - 5} ${y(p.T2) + 5} l10 -10`} />
                </g>
              ))}
            </svg>
            {points.length < 2 && (
              <figcaption className="px-2 pb-2 text-sm text-muted">Enter at least two rows to draw the line.</figcaption>
            )}
          </figure>

          <dl className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-edge bg-white p-5">
              <dt className="font-mono text-[10px] tracking-[0.18em] text-muted">GRADIENT</dt>
              <dd className="mt-1 text-2xl font-extrabold tracking-tightest text-warm">
                {fmt(k, 2)} <span className="text-sm font-semibold text-chalk-dim">s²/m</span>
              </dd>
            </div>
            <div className="rounded-2xl border border-edge bg-white p-5">
              <dt className="font-mono text-[10px] tracking-[0.18em] text-muted">g = 4π² ÷ GRADIENT</dt>
              <dd className="mt-1 text-2xl font-extrabold tracking-tightest text-warm">
                {fmt(g, 1)} <span className="text-sm font-semibold text-chalk-dim">m/s²</span>
              </dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-chalk-dim">
            The points should lie close to a straight line through the origin: T² is proportional to L. The line here is
            the best fit through the origin. Working out g is an extension; most IGCSE questions ask only for the
            graph and what it shows.
          </p>
        </div>
      </div>
    </ToolPage>
  );
}
