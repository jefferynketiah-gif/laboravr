import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  'INITIALISING LABORATORY SYSTEM',
  'LOADING REACTION MODELS',
  'CALIBRATING INSTRUMENTS',
  'READY',
];

export default function Preloader() {
  const [done, setDone] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Only run the sequence on the first visit of a session
    const seen =
      typeof window !== 'undefined' &&
      window.sessionStorage.getItem('lv_booted');

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seen || reduced) return;

    setDone(false);
    document.body.style.overflow = 'hidden';

    const start = performance.now();
    const DURATION = 1900;

    let frame;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      // ease-out so it decelerates into 100
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        window.sessionStorage.setItem('lv_booted', '1');
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = '';
        }, 380);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = '';
    };
  }, []);

  const lineIndex = Math.min(
    BOOT_LINES.length - 1,
    Math.floor((count / 100) * BOOT_LINES.length)
  );

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[999] bg-void flex flex-col justify-between p-6 md:p-10"
        >
          <div className="grid-reticle absolute inset-0 opacity-60" />

          <p className="relative font-mono text-[11px] tracking-[0.2em] text-uv">
            LABORAVR
          </p>

          <div className="relative">
            <motion.p
              key={lineIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-[10px] tracking-[0.2em] text-muted mb-5"
            >
              {BOOT_LINES[lineIndex]}
            </motion.p>

            <p className="font-mono text-6xl md:text-8xl text-chalk tabular-nums leading-none">
              {String(count).padStart(3, '0')}
            </p>

            {/* Progress rule */}
            <div className="mt-6 h-px w-full bg-edge relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-uv"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
