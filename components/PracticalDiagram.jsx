import Image from 'next/image';

// Plain apparatus drawings for practicals that have no headset screenshot yet (see lib/practicals.js).
// They are always shown with a "DIAGRAM" tag so nobody mistakes them for a picture of the lab.
// Lines use the ink colour; the liquid or ray uses the subject colour passed in as `accent`.

const INK = '#0F172A';
const MUTED = '#94A3B8';

function Neutralisation({ accent }) {
  return (
    <>
      {/* burette */}
      <rect x="196" y="12" width="14" height="78" rx="2" fill="none" stroke={INK} strokeWidth="2" />
      <rect x="198" y="40" width="10" height="48" fill={accent} opacity="0.25" />
      <path d="M203 90 v10" stroke={INK} strokeWidth="2" />
      <path d="M196 94 h-8" stroke={INK} strokeWidth="2" />
      <circle cx="203" cy="106" r="1.8" fill={accent} />
      {/* cup */}
      <path d="M120 112 L130 170 H190 L200 112 Z" fill="#FFFFFF" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <path d="M124 132 L131 168 H189 L196 132 Z" fill={accent} opacity="0.2" />
      <rect x="114" y="106" width="92" height="7" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
      {/* thermometer */}
      <rect x="146" y="40" width="8" height="122" rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
      <circle cx="150" cy="160" r="6" fill={accent} stroke={INK} strokeWidth="2" />
      <rect x="148.5" y="92" width="3" height="66" fill={accent} />
      {[60, 75, 90, 105, 120].map((y) => (
        <path key={y} d={`M154 ${y} h4`} stroke={INK} strokeWidth="1.2" />
      ))}
      <text x="82" y="66" fontSize="9" fill={INK} fontFamily="monospace">thermometer</text>
      <path d="M128 64 L145 64" stroke={MUTED} strokeWidth="1" />
      <text x="218" y="56" fontSize="9" fill={INK} fontFamily="monospace">acid</text>
      <text x="40" y="150" fontSize="9" fill={INK} fontFamily="monospace">polystyrene cup</text>
      <path d="M116 147 L124 147" stroke={MUTED} strokeWidth="1" />
      <text x="214" y="150" fontSize="9" fill={INK} fontFamily="monospace">alkali</text>
      <path d="M212 147 L192 147" stroke={MUTED} strokeWidth="1" />
    </>
  );
}

function GasSyringe({ accent }) {
  return (
    <>
      {/* flask */}
      <path d="M70 70 V90 L40 160 H130 L100 90 V70" fill="#FFFFFF" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <path d="M52 132 L44 158 H126 L118 132 Z" fill={accent} opacity="0.2" />
      <path d="M70 154 l14 -4 l14 3" stroke={INK} strokeWidth="2.5" fill="none" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={80 + i * 6} cy={142 - i * 7} r="2" fill="none" stroke={INK} strokeWidth="1" />
      ))}
      {/* bung and tube */}
      <rect x="66" y="62" width="38" height="10" rx="2" fill={INK} />
      <path d="M85 62 V44 H180" fill="none" stroke={INK} strokeWidth="2.5" />
      {/* syringe */}
      <rect x="180" y="34" width="110" height="20" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
      <rect x="182" y="36" width="46" height="16" fill={accent} opacity="0.15" />
      <path d="M230 30 V58" stroke={INK} strokeWidth="2.5" />
      <path d="M230 44 H306" stroke={INK} strokeWidth="2" />
      <path d="M306 34 V54" stroke={INK} strokeWidth="2.5" />
      {[195, 210, 225, 240, 255, 270].map((x) => (
        <path key={x} d={`M${x} 54 v5`} stroke={INK} strokeWidth="1" />
      ))}
      <text x="190" y="80" fontSize="9" fill={INK} fontFamily="monospace">gas syringe</text>
      <text x="140" y="120" fontSize="9" fill={INK} fontFamily="monospace">dilute acid</text>
      <path d="M138 117 L118 130" stroke={MUTED} strokeWidth="1" />
      <text x="140" y="160" fontSize="9" fill={INK} fontFamily="monospace">magnesium</text>
      <path d="M138 157 L100 153" stroke={MUTED} strokeWidth="1" />
    </>
  );
}

function GlassBlock({ accent }) {
  // Block from x 110 to 230, y 50 to 140. Ray enters top face at (140,50), leaves bottom at (176,140).
  // Scaled down and moved down so the page's status badge (top left) never covers the incident ray.
  return (
    <g transform="translate(40 34) scale(0.8)">
      <rect x="110" y="50" width="120" height="90" fill={accent} opacity="0.08" stroke={INK} strokeWidth="2" />
      <path d="M140 20 V80" stroke={MUTED} strokeWidth="1" strokeDasharray="3 3" />
      <path d="M176 110 V170" stroke={MUTED} strokeWidth="1" strokeDasharray="3 3" />
      <path d="M95 5 L140 50" stroke={accent} strokeWidth="2.5" />
      <path d="M140 50 L176 140" stroke={accent} strokeWidth="2.5" />
      <path d="M176 140 L210 174" stroke={accent} strokeWidth="2.5" />
      {[
        [104, 14],
        [124, 34],
        [188, 152],
        [202, 166],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="4" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
          <circle cx={x} cy={y} r="1.3" fill={INK} />
        </g>
      ))}
      <text x="238" y="98" fontSize="9" fill={INK} fontFamily="monospace">glass block</text>
      <text x="146" y="26" fontSize="9" fill={INK} fontFamily="monospace">normal</text>
      <text x="30" y="40" fontSize="9" fill={INK} fontFamily="monospace">pins</text>
      <path d="M52 38 L100 16" stroke={MUTED} strokeWidth="1" />
      <path d="M52 40 L120 34" stroke={MUTED} strokeWidth="1" />
      <text x="130" y="72" fontSize="9" fill={INK} fontFamily="monospace">r</text>
      <text x="128" y="40" fontSize="9" fill={INK} fontFamily="monospace">i</text>
    </g>
  );
}

function Leaf({ accent }) {
  return (
    <>
      <path
        d="M70 150 C 70 90, 130 40, 230 30 C 220 120, 160 160, 70 150 Z"
        fill="none"
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M50 165 L70 150 C 120 110, 170 70, 230 30" fill="none" stroke={INK} strokeWidth="1.6" />
      {[
        'M105 125 C 110 105, 112 95, 110 80',
        'M135 100 C 145 85, 148 75, 146 60',
        'M165 78 C 178 66, 182 58, 182 46',
        'M115 118 C 135 122, 150 124, 165 122',
        'M150 90 C 168 94, 182 94, 196 90',
      ].map((d) => (
        <path key={d} d={d} fill="none" stroke={INK} strokeWidth="1.2" />
      ))}
      <path d="M200 60 L262 60" stroke={accent} strokeWidth="1.4" />
      <text x="266" y="63" fontSize="9" fill={INK} fontFamily="monospace">vein</text>
      <path d="M56 160 L22 160" stroke={accent} strokeWidth="1.4" />
      <text x="2" y="150" fontSize="9" fill={INK} fontFamily="monospace">stalk</text>
    </>
  );
}

const DRAWINGS = {
  neutralisation: Neutralisation,
  'gas-syringe': GasSyringe,
  'glass-block': GlassBlock,
  leaf: Leaf,
};

export const ACCENT = { Chemistry: '#2563EB', Physics: '#0D9488', Biology: '#7C3AED' };

// The picture for a practical: its screenshot if it has one, otherwise its diagram. Fills its (relative) parent.
export function PracticalPicture({ practical, sizes, priority = false }) {
  if (practical.image) {
    return <Image src={practical.image} alt={practical.imageAlt} fill sizes={sizes} priority={priority} className="object-cover" />;
  }
  return (
    <div className="absolute inset-0">
      <PracticalDiagram kind={practical.diagram} accent={ACCENT[practical.subject]} label={practical.imageAlt} />
    </div>
  );
}

export default function PracticalDiagram({ kind, accent = '#2563EB', label, className = '' }) {
  const Drawing = DRAWINGS[kind];
  if (!Drawing) return null;
  return (
    <div className={`relative h-full w-full bg-panel ${className}`}>
      <svg viewBox="0 0 320 180" role="img" aria-label={label} className="absolute inset-0 h-full w-full p-4">
        <Drawing accent={accent} />
      </svg>
      <span className="absolute bottom-3 right-3 rounded-full border border-edge bg-white px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] text-muted">
        DIAGRAM
      </span>
    </div>
  );
}
