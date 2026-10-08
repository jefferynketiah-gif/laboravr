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
  const [isHolding, setIsHolding] = useState(false);
  const holdRef = useRef(null);

  const add = useCallback((amount) => {
    setDrops((d) => Math.min(MAX_DROPS, d + amount));
  }, []);

  const startHold = () => {
    if (holdRef.current) clearInterval(holdRef.current);
    setIsHolding(true);
    add(1);
    holdRef.current = setInterval(() => add(1), 250);
  };
  const stopHold = () => {
    if (holdRef.current) clearInterval(holdRef.current);
    holdRef.current = null;
    setIsHolding(false);
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
  const liquidTop = 80 - (drops * 1.2); // Liquid level rises
  const solutionPath = `M36 ${liquidTop} L36 130 A 14 14 0 0 0 64 130 L64 ${liquidTop} Z`;

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
        <div className="p-6 flex flex-col items-center justify-center bg-surface/50 rounded-tl-xl md:rounded-l-xl md:rounded-tr-none">
          <svg viewBox="0 0 100 150" className="w-[110px] drop-shadow-xl overflow-visible" role="img" aria-label="Test tube contents">
            <defs>
              <linearGradient id="glass-tube" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="15%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="85%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="glass-specular" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="10%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="16%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="liquid-shadow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#000000" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#000000" stopOpacity="0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Dropper */}
            <path d="M48 5 L52 5 L52 30 L49 35 L48 35 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="47" y="0" width="6" height="5" rx="2" fill="#2563EB" />
            
            {/* Falling drop */}
            {isHolding && (
              <circle cx="50" cy="45" r="2.5" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.5">
                <animate attributeName="cy" from="38" to={liquidTop} dur="0.25s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Test tube back glass */}
            <path d="M35 50 L35 130 A 15 15 0 0 0 65 130 L65 50 Z" fill="#F8FAFC" />

            {/* Solution */}
            <path d={solutionPath} fill={solutionHex} style={{ transition: 'all 300ms linear' }} />
            
            {/* Precipitate (Particles + Overlay) */}
            <g style={{ opacity: precipitateOpacity, transition: 'opacity 300ms linear' }}>
              <path d={solutionPath} fill="#8CC6E8" opacity="0.8" style={{ transition: 'all 300ms linear' }} />
              {/* Speckles to look like precipitate */}
              <circle cx="42" cy="110" r="1.5" fill="#6AADD6" />
              <circle cx="50" cy="120" r="2" fill="#6AADD6" />
              <circle cx="58" cy="105" r="1.5" fill="#6AADD6" />
              <circle cx="45" cy="130" r="2.5" fill="#6AADD6" />
              <circle cx="55" cy="125" r="1" fill="#6AADD6" />
              <circle cx="48" cy="100" r="1.5" fill="#6AADD6" />
            </g>

            {/* Liquid shading overlay */}
            <path d={solutionPath} fill="url(#liquid-shadow)" style={{ transition: 'all 300ms linear', mixBlendMode: 'multiply' }} />

            {/* Test Tube Front Glass & Outline */}
            <path d="M35 50 L35 130 A 15 15 0 0 0 65 130 L65 50" fill="url(#glass-tube)" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M32 50 L68 50" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Specular Highlight */}
            <path d="M35 50 L35 130 A 15 15 0 0 0 65 130 L65 50 Z" fill="url(#glass-specular)" pointerEvents="none" />
          </svg>

          <div className="mt-5 w-full space-y-2">
            <button
              onMouseDown={startHold}
              onMouseUp={stopHold}
              onMouseLeave={stopHold}
              onTouchStart={(e) => { e.preventDefault(); startHold(); }}
              onTouchEnd={stopHold}
              disabled={atMax}
              className="w-full btn-glow bg-uv text-white text-sm font-semibold py-2.5 rounded-lg disabled:opacity-40 disabled:hover:transform-none disabled:hover:box-shadow-none"
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
