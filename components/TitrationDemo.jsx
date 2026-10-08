import { useState, useRef, useEffect, useCallback } from 'react';
import { RotateCcw } from 'lucide-react';

/* ------------------------------------------------------------------
   Strong acid / strong base titration
   25.00 mL of 0.100 M HCl titrated with 0.100 M NaOH
   Equivalence point at 25.00 mL, pH 7.00
   Indicator: phenolphthalein (transition ~8.2 to ~10.0)
------------------------------------------------------------------- */

const Ca = 0.1; // acid concentration, M
const Va = 25.0; // acid volume, mL
const Cb = 0.1; // base concentration, M
const V_EQ = (Ca * Va) / Cb; // 25.00 mL
const V_MAX = 40.0;

function pHat(Vb) {
  const molA = Ca * Va;
  const molB = Cb * Vb;
  const total = Va + Vb;

  if (Math.abs(molA - molB) < 1e-9) return 7.0;

  if (molB < molA) {
    const H = (molA - molB) / total;
    return Math.max(0, -Math.log10(H));
  }
  const OH = (molB - molA) / total;
  return Math.min(14, 14 + Math.log10(OH));
}

// Phenolphthalein: colourless below 8.2, magenta above 10
function indicatorAlpha(pH) {
  if (pH <= 8.2) return 0;
  if (pH >= 10.0) return 1;
  return (pH - 8.2) / 1.8;
}

const CHART_W = 300;
const CHART_H = 190;
const PAD_L = 34;
const PAD_B = 26;
const PAD_T = 10;
const PAD_R = 8;

const curve = (() => {
  const pts = [];
  for (let v = 0; v <= V_MAX; v += 0.05) pts.push([v, pHat(v)]);
  return pts;
})();

const toX = (v) => PAD_L + (v / V_MAX) * (CHART_W - PAD_L - PAD_R);
const toY = (p) => PAD_T + (1 - p / 14) * (CHART_H - PAD_T - PAD_B);

const curvePath = curve
  .map(([v, p], i) => `${i === 0 ? 'M' : 'L'}${toX(v).toFixed(2)},${toY(p).toFixed(2)}`)
  .join(' ');

export default function TitrationDemo() {
  const [volume, setVolume] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const holdRef = useRef(null);

  const pH = pHat(volume);
  const alpha = indicatorAlpha(pH);
  const past = volume > V_EQ + 0.05;
  const atEndpoint = alpha > 0.05 && alpha < 0.95;

  const add = useCallback((amount) => {
    setVolume((v) => Math.min(V_MAX, +(v + amount).toFixed(2)));
  }, []);

  const startHold = (amount) => {
    if (holdRef.current) clearInterval(holdRef.current);
    setIsHolding(true);
    add(amount);
    holdRef.current = setInterval(() => add(amount), 90);
  };
  const stopHold = () => {
    if (holdRef.current) clearInterval(holdRef.current);
    holdRef.current = null;
    setIsHolding(false);
  };

  useEffect(() => () => stopHold(), []);

  const fillHeight = 46 * (1 - Math.min(volume / V_MAX, 1));

  return (
    <div className="border border-edge bg-void">
      {/* Header strip */}
      <div className="border-b border-edge px-5 py-3 flex items-center justify-between gap-4 flex-wrap">
        <p className="font-mono text-[10px] tracking-[0.18em] text-uv">
          ACID–BASE TITRATION · 0.100 M HCl / 0.100 M NaOH
        </p>
        <button
          onClick={() => setVolume(0)}
          className="font-mono text-[10px] tracking-[0.18em] text-muted hover:text-chalk transition-colors flex items-center gap-1.5"
        >
          <RotateCcw size={12} /> RESET
        </button>
      </div>

      <div className="grid md:grid-cols-[200px_1fr] divide-y md:divide-y-0 md:divide-x divide-edge">
        {/* Apparatus */}
        <div className="p-6 flex flex-col items-center justify-center bg-surface/50 rounded-tl-xl md:rounded-l-xl md:rounded-tr-none">
          <svg viewBox="0 0 100 150" className="w-[130px] drop-shadow-xl overflow-visible" role="img"
               aria-label={`Flask contents, pH ${pH.toFixed(2)}`}>
            <defs>
              <linearGradient id="glass-flask" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="15%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="85%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="glass-flask-specular" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="10%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="16%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="flask-shadow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#000000" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#000000" stopOpacity="0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Burette Background */}
            <rect x="45" y="4" width="10" height="52" rx="1"
                  fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
            {/* Burette Liquid */}
            <rect x="46" y={5 + (52 - fillHeight)} width="8" height={fillHeight}
                  fill="#2563EB" opacity="0.55" />
            {/* Burette Overlay Specular */}
            <rect x="45" y="4" width="10" height="52" rx="1"
                  fill="url(#glass-flask)" pointerEvents="none" />
            
            <rect x="47.5" y="56" width="5" height="8" fill="#CBD5E1" />
            
            {/* Falling drop */}
            {isHolding && (
              <circle cx="50" cy="70" r="1.6" fill="#2563EB">
                <animate attributeName="cy" from="66" to="120"
                         dur="0.35s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Conical flask back */}
            <path d="M42 96 L42 104 L26 138 Q24 144 31 144 L69 144 Q76 144 74 138 L58 104 L58 96 Z"
                  fill="#F8FAFC" />
                  
            {/* Solution */}
            <path d="M33.5 126 L29 138 Q28 141.5 31.5 141.5 L68.5 141.5 Q72 141.5 71 138 L66.5 126 Z"
                  fill={`rgb(${Math.round(226 - 7 * alpha)}, ${Math.round(232 - 193 * alpha)}, ${Math.round(240 - 121 * alpha)})`}
                  style={{ transition: 'fill 220ms linear' }} />
                  
            {/* Solution Shadow Overlay */}
            <path d="M33.5 126 L29 138 Q28 141.5 31.5 141.5 L68.5 141.5 Q72 141.5 71 138 L66.5 126 Z"
                  fill="url(#flask-shadow)" style={{ mixBlendMode: 'multiply' }} pointerEvents="none" />
                  
            {/* Conical flask front glass & stroke */}
            <path d="M42 96 L42 104 L26 138 Q24 144 31 144 L69 144 Q76 144 74 138 L58 104 L58 96"
                  fill="url(#glass-flask)" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Specular highlight */}
            <path d="M42 96 L42 104 L26 138 Q24 144 31 144 L69 144 Q76 144 74 138 L58 104 L58 96 Z"
                  fill="url(#glass-flask-specular)" pointerEvents="none" />
          </svg>

          <div className="mt-5 w-full space-y-2">
            <button
              onMouseDown={() => startHold(0.1)}
              onMouseUp={stopHold}
              onMouseLeave={stopHold}
              onTouchStart={(e) => { e.preventDefault(); startHold(0.1); }}
              onTouchEnd={stopHold}
              disabled={volume >= V_MAX}
              className="w-full btn-glow bg-uv text-white text-sm font-semibold py-2.5 rounded-lg disabled:opacity-40 disabled:hover:transform-none disabled:hover:box-shadow-none"
            >
              Add titrant
            </button>
            <button
              onClick={() => add(1)}
              disabled={volume >= V_MAX}
              className="w-full border border-edge text-chalk text-sm py-2 rounded-lg hover:border-uv hover:text-uv disabled:opacity-40 transition-colors"
            >
              +1.00 mL
            </button>
            <p className="font-mono text-[9px] tracking-[0.15em] text-muted text-center pt-1">
              HOLD TO ADD DROPWISE
            </p>
          </div>
        </div>

        {/* Readout + curve */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-5">
            <div>
              <p className="font-mono text-[9px] tracking-[0.15em] text-uv mb-1">ADDED</p>
              <p className="font-mono text-xl text-chalk tabular-nums">
                {volume.toFixed(2)}<span className="text-xs text-muted"> mL</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-[0.15em] text-uv mb-1">pH</p>
              <p className="font-mono text-xl text-chalk tabular-nums">{pH.toFixed(2)}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-[0.15em] text-uv mb-1">STATE</p>
              <p className="font-mono text-xs text-chalk pt-1.5">
                {atEndpoint ? 'ENDPOINT' : past ? 'OVERSHOT' : 'ACIDIC'}
              </p>
            </div>
          </div>

          <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} className="w-full"
               role="img" aria-label="Titration curve, pH against volume of titrant added">
            {[0, 7, 14].map((p) => (
              <g key={p}>
                <line x1={PAD_L} y1={toY(p)} x2={CHART_W - PAD_R} y2={toY(p)}
                      stroke="#E2E8F0" strokeWidth="1" />
                <text x={PAD_L - 6} y={toY(p) + 3} textAnchor="end"
                      fill="#64748B" fontSize="8" fontFamily="monospace">{p}</text>
              </g>
            ))}
            {[0, 10, 20, 30, 40].map((v) => (
              <text key={v} x={toX(v)} y={CHART_H - PAD_B + 14} textAnchor="middle"
                    fill="#64748B" fontSize="8" fontFamily="monospace">{v}</text>
            ))}

            {/* Equivalence marker */}
            <line x1={toX(V_EQ)} y1={PAD_T} x2={toX(V_EQ)} y2={CHART_H - PAD_B}
                  stroke="#2563EB" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />

            <path d={curvePath} fill="none" stroke="#CBD5E1" strokeWidth="1.5" />

            {/* Traced portion */}
            <path
              d={curve.filter(([v]) => v <= volume)
                .map(([v, p], i) => `${i === 0 ? 'M' : 'L'}${toX(v).toFixed(2)},${toY(p).toFixed(2)}`)
                .join(' ')}
              fill="none" stroke="#2563EB" strokeWidth="2"
            />

            <circle cx={toX(volume)} cy={toY(pH)} r="3.5" fill="#2563EB" />
            <circle cx={toX(volume)} cy={toY(pH)} r="7" fill="#2563EB" opacity="0.2" />

            <text x={CHART_W - PAD_R} y={CHART_H - 2} textAnchor="end"
                  fill="#64748B" fontSize="8" fontFamily="monospace">
              mL NaOH
            </text>
          </svg>

          <p className="text-sm text-muted leading-relaxed mt-4">
            {past
              ? 'Past the endpoint. In a real lab that titration is spoiled and you start again with fresh reagents.'
              : atEndpoint
              ? 'The indicator has turned. Read the burette — this is the volume that matters.'
              : volume > 22
              ? 'Close now. The curve is about to go near-vertical, so a single drop moves the pH by several units.'
              : 'pH barely moves at first. Add titrant and watch where the curve turns.'}
          </p>
        </div>
      </div>
    </div>
  );
}
