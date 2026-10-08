import { useState, useRef, useEffect, useCallback } from 'react';
import { RotateCcw } from 'lucide-react';

/* ------------------------------------------------------------------
   Precipitate Test (Cation Qualitative Analysis)
   Based on Unity spec: CAT-CU-NAOH
   Substance: Cu2+ (Copper(II))
   Reagent: NaOH
   Initial: light blue precipitate (#8CC6E8)
   Excess: unchanged
------------------------------------------------------------------- */

const MAX_DROPS = 20;
const EXCESS_THRESHOLD = 8; // Drops needed to be considered "excess"

export default function PrecipitateDemo() {
  const [drops, setDrops] = useState(0);
  const holdRef = useRef(null);

  const add = useCallback((amount) => {
    setDrops((d) => Math.min(MAX_DROPS, d + amount));
  }, []);

  const startHold = () => {
    add(1);
    holdRef.current = setInterval(() => add(1), 250);
  };
  const stopHold = () => {
    if (holdRef.current) clearInterval(holdRef.current);
    holdRef.current = null;
  };

  useEffect(() => () => stopHold(), []);

  // Determine state
  let stateLabel = 'INITIAL SOLUTION';
  let desc = 'A colourless or pale blue solution of Copper(II) ions. Add drops of aqueous sodium hydroxide.';
  let solutionHex = '#E6F0FA'; // Very pale blue for initial aqueous Cu2+
  let precipitateOpacity = 0;
  
  if (drops > 0 && drops < EXCESS_THRESHOLD) {
    stateLabel = 'PRECIPITATE FORMING';
    desc = 'A light blue precipitate forms as sodium hydroxide is added dropwise.';
    precipitateOpacity = drops / EXCESS_THRESHOLD;
  } else if (drops >= EXCESS_THRESHOLD) {
    stateLabel = 'EXCESS ADDED';
    desc = 'The light blue precipitate is insoluble in excess sodium hydroxide. It remains suspended.';
    precipitateOpacity = 1;
  }

  const atMax = drops >= MAX_DROPS;

  return (
    <div className="border border-edge bg-void">
      {/* Header strip */}
      <div className="border-b border-edge px-5 py-3 flex items-center justify-between gap-4 flex-wrap">
        <p className="font-mono text-[10px] tracking-[0.18em] text-uv">
          CATION TEST · COPPER(II) + NaOH(aq)
        </p>
        <button
          onClick={() => setDrops(0)}
          className="font-mono text-[10px] tracking-[0.18em] text-muted hover:text-chalk transition-colors flex items-center gap-1.5"
        >
          <RotateCcw size={12} /> RESET
        </button>
      </div>

      <div className="grid md:grid-cols-[200px_1fr] divide-y md:divide-y-0 md:divide-x divide-edge">
        {/* Apparatus */}
        <div className="p-6 flex flex-col items-center justify-center">
          <svg viewBox="0 0 100 150" className="w-[110px]" role="img" aria-label="Test tube contents">
            {/* Dropper */}
            <path d="M48 5 L52 5 L52 30 L49 35 L48 35 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="47" y="0" width="6" height="5" rx="2" fill="#2563EB" />
            
            {/* Falling drop */}
            {holdRef.current && (
              <circle cx="50" cy="45" r="2.5" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.5">
                <animate attributeName="cy" from="38" to="80" dur="0.25s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Test Tube */}
            <path d="M35 50 L35 130 A 15 15 0 0 0 65 130 L65 50" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M32 50 L68 50" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />

            {/* Solution */}
            <path d="M36 80 L36 130 A 14 14 0 0 0 64 130 L64 80 Z" fill={solutionHex} style={{ transition: 'fill 300ms linear' }} />
            
            {/* Precipitate (Particles) */}
            <g style={{ opacity: precipitateOpacity, transition: 'opacity 300ms linear' }}>
              <path d="M36 95 L36 130 A 14 14 0 0 0 64 130 L64 95 Z" fill="#8CC6E8" opacity="0.8" />
              {/* Speckles to look like precipitate */}
              <circle cx="42" cy="110" r="1.5" fill="#6AADD6" />
              <circle cx="50" cy="120" r="2" fill="#6AADD6" />
              <circle cx="58" cy="105" r="1.5" fill="#6AADD6" />
              <circle cx="45" cy="130" r="2.5" fill="#6AADD6" />
              <circle cx="55" cy="125" r="1" fill="#6AADD6" />
              <circle cx="48" cy="100" r="1.5" fill="#6AADD6" />
            </g>
          </svg>

          <div className="mt-5 w-full space-y-2">
            <button
              onMouseDown={startHold}
              onMouseUp={stopHold}
              onMouseLeave={stopHold}
              onTouchStart={(e) => { e.preventDefault(); startHold(); }}
              onTouchEnd={stopHold}
              disabled={atMax}
              className="w-full bg-uv text-white text-sm font-semibold py-2.5 rounded-md hover:bg-uv-bright disabled:opacity-40 transition-colors"
            >
              Add NaOH
            </button>
            <p className="font-mono text-[9px] tracking-[0.15em] text-muted text-center pt-1">
              HOLD TO ADD DROPS
            </p>
          </div>
        </div>

        {/* Readout */}
        <div className="p-6 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <p className="font-mono text-[9px] tracking-[0.15em] text-uv mb-1">NaOH ADDED</p>
              <p className="font-mono text-xl text-chalk tabular-nums">
                {drops}<span className="text-xs text-muted"> drops</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-[0.15em] text-uv mb-1">OBSERVATION</p>
              <p className="font-mono text-xs text-chalk pt-1.5 uppercase">
                {stateLabel}
              </p>
            </div>
          </div>

          <div className="bg-surface border border-edge p-5 rounded-lg mb-4">
            <p className="text-sm text-chalk-dim leading-relaxed">
              {desc}
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex items-start gap-3 border-l-2 border-uv pl-4 py-1">
              <div>
                <p className="font-mono text-[10px] tracking-[0.15em] text-muted mb-1">MARK SCHEME</p>
                <p className="text-sm font-semibold text-chalk">
                  light blue precipitate, insoluble in excess
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
