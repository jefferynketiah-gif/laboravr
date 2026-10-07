/*
  The wordmark. "LABORA" in chalk, "VR" in UV — the split falls exactly where
  the name does, so the accent means something instead of decorating.

  Two carets is one too many: when the mark is shown, the blinking caret is
  suppressed automatically. Use <Wordmark showMark /> in the navbar and
  <Wordmark /> where the wordmark stands alone.

  tone="light" swaps the chalk for void on paper sections.
  tone="mono"  renders single-ink, for stamps and university forms.
*/
export function Mark({ className = '', tone = 'dark' }) {
  const ink = tone === 'light' ? '#0F172A' : tone === 'mono' ? 'currentColor' : '#0F172A';
  const uv = tone === 'mono' ? 'currentColor' : '#2563EB';
  return (
    <svg
      viewBox="0 0 255 231"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width="46" height="231" fill={ink} />
      <rect x="0" y="201" width="143" height="30" fill={ink} />
      <rect x="179" y="14" width="76" height="153" fill={uv} />
    </svg>
  );
}

export default function Wordmark({
  size = 'md',
  showMark = false,
  showCaret = true,
  tone = 'dark',
}) {
  const scale = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
  }[size];

  // Mark height tracks cap height, not line height — 24px beside 20px type.
  const markSize = {
    sm: 'h-[15px]',
    md: 'h-[22px]',
    lg: 'h-[32px]',
  }[size];

  const caret = {
    sm: 'w-[3px] h-3.5',
    md: 'w-1 h-[18px]',
    lg: 'w-1.5 h-7',
  }[size];

  const caretOn = showCaret && !showMark;

  return (
    <span className={`inline-flex items-center gap-2 ${scale}`}>
      {showMark && <Mark tone={tone} className={`${markSize} w-auto`} />}
      <span
        className={`font-extrabold tracking-tightest leading-none ${
          tone === 'light' ? 'text-void' : 'text-chalk'
        }`}
      >
        Labora<span className={tone === 'mono' ? '' : 'text-uv'}>VR</span>
      </span>
      {caretOn && (
        <span
          aria-hidden="true"
          className={`${caret} bg-uv rounded-[1px] animate-caret`}
        />
      )}
    </span>
  );
}
