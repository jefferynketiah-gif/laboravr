/*
  The wordmark. "LABORA" in chalk, "VR" in UV — the split falls exactly where
  the name does, so the accent means something instead of decorating.
  The caret is the same mark as the favicon, tying tab to page.
*/
export default function Wordmark({ size = 'md', showCaret = true }) {
  const scale = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
  }[size];

  const caret = {
    sm: 'w-[3px] h-3.5',
    md: 'w-1 h-[18px]',
    lg: 'w-1.5 h-7',
  }[size];

  return (
    <span className={`inline-flex items-center gap-1.5 ${scale}`}>
      <span className="font-extrabold tracking-tightest leading-none text-chalk">
        Labora<span className="text-uv">VR</span>
      </span>
      {showCaret && (
        <span
          aria-hidden="true"
          className={`${caret} bg-uv rounded-[1px] animate-caret`}
        />
      )}
    </span>
  );
}
