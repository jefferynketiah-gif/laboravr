import { useEffect, useState } from 'react';

/*
  Volumetric light bed. Decorative only, so it mounts client-side —
  nothing here needs to exist in the server-rendered HTML.
*/
export default function Aurora({ className = '' }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="aurora-blob aurora-a" />
      <div className="aurora-blob aurora-b" />
      <div className="aurora-blob aurora-c" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_45%,rgba(30,27,75,0.55),transparent_70%)]" />
    </div>
  );
}