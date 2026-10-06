import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  'INITIALISING LABORATORY SYSTEM',
  'LOADING REACTION MODELS',
  'CALIBRATING INSTRUMENTS',
  'READY',
];

export default function Preloader() {
  const [done, setDone]   = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const seen = typeof window !== 'undefined' && window.sessionStorage.getItem('lv_booted');
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seen || reduced) return;

    setDone(false);
    document.body.style.overflow = 'hidden';

    const start    = performance.now();
    const DURATION = 2000;

    let frame;
    const tick = (now) => {
      const t      = Math.min(1, (now - start) / DURATION);
      const eased  = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        window.sessionStorage.setItem('lv_booted', '1');
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = '';
        }, 420);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); document.body.style.overflow = ''; };
  }, []);

  const lineIndex = Math.min(BOOT_LINES.length - 1, Math.floor((count / 100) * BOOT_LINES.length));

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.65, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[999] bg-void flex flex-col justify-between p-6 md:p-10 overflow-hidden"
        >
          {/* Background grid */}
          <div className="grid-reticle absolute inset-0 opacity-50" />

          {/* Scanning line */}
          <div className="scan-line" />

          {/* UV glow bloom */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, rgba(124,92,255,${count / 400}) 0%, transparent 70%)`,
              transition: 'background 0.1s linear',
            }}
          />

          {/* Top wordmark */}
          <p className="relative font-mono text-[11px] tracking-[0.22em] text-uv">
            LABORAVR
          </p>

          {/* Bottom counter */}
          <div className="relative">
            {/* Boot message */}
            <AnimatePresence mode="wait">
              <motion.p
                key={lineIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-[10px] tracking-[0.22em] text-muted mb-5"
              >
                {BOOT_LINES[lineIndex]}
              </motion.p>
            </AnimatePresence>

            {/* Big counter */}
            <p className="font-mono text-[5rem] md:text-[8rem] text-chalk tabular-nums leading-none [text-shadow:0_0_60px_rgba(124,92,255,0.5)]">
              {String(count).padStart(3, '0')}
            </p>

            {/* Progress bar */}
            <div className="relative mt-6 h-px w-full bg-edge overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 transition-all duration-75"
                style={{
                  width: `${count}%`,
                  background: `linear-gradient(90deg, #4A3A99, #7C5CFF ${count}%, #9B80FF)`,
                  boxShadow: '0 0 12px rgba(124,92,255,0.8)',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
