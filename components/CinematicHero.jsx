import Link from 'next/link';
import { motion } from 'framer-motion';
import Aurora from './Aurora';
import Scene3D from './Scene3D';

const readouts = [
  { label: 'DISCIPLINES', value: 'Chemistry · Physics · Biology' },
  { label: 'REPEATS', value: 'Unlimited' },
  { label: 'CONSUMABLES', value: 'None' },
];

export default function CinematicHero() {
  return (
    <section className="relative overflow-hidden bg-void grain min-h-[92vh] flex flex-col justify-center">
      {/* Light bed, behind everything */}
      <Aurora />
      {/* Grid reads through the light */}
      <div className="grid-reticle absolute inset-0 opacity-70" />
      {/* Pull the edges back to black so the light feels contained */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_30%,#0A0B10_88%)]" />

      {/* 3D layer — oversized and bled off the right edge */}
      <div
        className="absolute inset-y-0 right-[-20%] w-[110%] md:right-[-6%] md:w-[58%] opacity-80 md:opacity-100"
        aria-hidden="true"
      >
        <Scene3D />
      </div>

      {/* Copy layer */}
      <div className="relative max-w-6xl mx-auto px-6 w-full pt-32 pb-10 md:pt-24">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-[11px] tracking-[0.2em] text-uv mb-6"
          >
            LABORAVR — VIRTUAL LABORATORY SYSTEM
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl font-extrabold tracking-tightest text-chalk [text-shadow:0_2px_40px_rgba(10,11,16,0.9)]"
          >
            The lab that
            <br />
            never runs out.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 text-lg text-muted max-w-md leading-relaxed [text-shadow:0_1px_20px_rgba(10,11,16,0.9)]"
          >
            Practical chemistry, physics and biology in virtual reality — built
            for African universities, where an equipment budget shouldn&apos;t
            decide who gets to do science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="bg-uv text-white px-7 py-3.5 rounded-md font-semibold shadow-[0_8px_40px_-8px_rgba(124,92,255,0.7)] hover:bg-[#6B4AF0] hover:shadow-[0_10px_50px_-6px_rgba(124,92,255,0.9)] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
            >
              Join the pilot
            </Link>
            <Link
              href="/labs"
              className="border border-edge bg-void/40 backdrop-blur-sm text-chalk px-7 py-3.5 rounded-md font-semibold hover:border-uv hover:text-uv transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
            >
              See the labs
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Readout rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.55 }}
        className="relative max-w-6xl mx-auto px-6 w-full"
      >
        <div className="border-t border-edge grid grid-cols-1 sm:grid-cols-3 backdrop-blur-sm">
          {readouts.map((r) => (
            <div
              key={r.label}
              className="py-5 sm:px-6 sm:first:pl-0 border-b sm:border-b-0 sm:border-r border-edge last:border-none"
            >
              <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-1.5">
                {r.label}
              </p>
              <p className="text-sm text-chalk">{r.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Horizon spill into the next section */}
      <div className="horizon pointer-events-none absolute bottom-0 left-0 right-0 h-40" />
    </section>
  );
}