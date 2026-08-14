import Link from 'next/link';
import { motion } from 'framer-motion';
import Scene3D from './Scene3D';

const readouts = [
  { label: 'DISCIPLINES', value: 'Chemistry · Physics · Biology' },
  { label: 'REPEATS', value: 'Unlimited' },
  { label: 'CONSUMABLES', value: 'None' },
];

export default function CinematicHero() {
  return (
    <section className="relative overflow-hidden bg-void grain">
      {/* Calibration grid */}
      <div className="grid-reticle absolute inset-0" />
      {/* Vignette so the grid fades at the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0A0B10_85%)]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-0 md:pt-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left — the thesis */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[11px] tracking-[0.2em] text-uv mb-6"
            >
              LABORAVR — VIRTUAL LABORATORY SYSTEM
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl font-extrabold tracking-tightest text-chalk"
            >
              The lab that
              <br />
              never runs out.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-7 text-lg text-muted max-w-md leading-relaxed"
            >
              Practical chemistry, physics and biology in virtual reality — built
              for African universities, where an equipment budget shouldn&apos;t
              decide who gets to do science.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="bg-uv text-white px-7 py-3.5 rounded-md font-semibold hover:bg-[#6B4AF0] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
              >
                Join the pilot
              </Link>
              <Link
                href="/labs"
                className="border border-edge text-chalk px-7 py-3.5 rounded-md font-semibold hover:border-uv hover:text-uv transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
              >
                See the labs
              </Link>
            </motion.div>
          </div>

          {/* Right — the instrument */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Scene3D />
          </motion.div>
        </div>

        {/* Instrument readout strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 md:mt-10 border-t border-edge grid grid-cols-1 sm:grid-cols-3"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
