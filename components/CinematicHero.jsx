import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const readouts = [
  { label: 'DISCIPLINES', value: 'Chemistry · Physics · Biology' },
  { label: 'REPEATS',     value: 'Unlimited'                      },
  { label: 'CONSUMABLES', value: 'None'                           },
];

export default function CinematicHero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <section className="relative overflow-hidden bg-void grain min-h-[96vh] flex flex-col justify-center">
      {/* Hero Video — right side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ y: yBg }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[-5vh] right-0 bottom-[-5vh] w-[100%] md:w-[75%] pointer-events-none z-0"
      >
        <div className="relative w-full h-full">
          {/* Ambient glow behind video */}
          <div className="absolute inset-0 bg-uv/20 blur-[100px] rounded-full scale-100" />
          
          <div className="relative w-full h-full" style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 35%), linear-gradient(to bottom, transparent 5%, black 25%, black 80%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%), linear-gradient(to bottom, transparent 5%, black 25%, black 80%, transparent 100%)',
            WebkitMaskComposite: 'source-in'
          }}>
            <video
              src="/lab-screens/hero-loop.webm"
              poster="/lab-screens/hero-loop-poster.jpg"
              aria-label="A slow view of the LaboraVR chemistry bench"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="hero-drift w-full h-full object-cover object-[center_40%] opacity-85"
            />
          </div>
        </div>
        {/* Text protection gradient over the video */}
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/90 to-transparent w-full md:w-[70%]" />
      </motion.div>

      {/* One soft gradient mesh above the video fade, so there is no seam */}
      <div className="mesh-hero" />

      {/* Copy layer */}
      <motion.div style={{ y: yText }} className="relative max-w-6xl mx-auto px-6 w-full pt-36 pb-12 md:pt-28">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-[11px] tracking-[0.2em] text-uv mb-6 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-uv inline-block" />
            LABORAVR — VIRTUAL LABORATORY SYSTEM
          </motion.p>

          {/* Headline with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.25rem] leading-[0.95] sm:text-5xl md:text-[5rem] font-extrabold tracking-tightest"
          >
            <span className="gradient-text">The lab that</span>
            <br />
            <span className="text-chalk">
              never runs out.
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-7 text-lg text-muted max-w-md leading-relaxed relative z-10"
          >
            Practical chemistry, physics and biology in virtual reality — built
            for schools and universities, where an equipment budget shouldn&apos;t
            decide who gets to do science.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="btn-glow bg-uv text-white px-8 py-4 rounded-xl font-semibold hover:bg-uv-bright transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
            >
              Join the pilot
            </Link>
            <Link
              href="/labs"
              className="glass border border-edge text-chalk px-8 py-4 rounded-xl font-semibold hover:border-uv/50 hover:text-uv-bright transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
            >
              See the labs
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Readout rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="relative max-w-6xl mx-auto px-6 w-full"
      >
        <div className="border-t border-edge grid grid-cols-1 sm:grid-cols-3 glass-subtle">
          {readouts.map((r) => (
            <div
              key={r.label}
              className="px-4 py-5 sm:px-6 sm:first:pl-0 border-b sm:border-b-0 sm:border-r border-edge last:border-none group"
            >
              <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-1.5">
                {r.label}
              </p>
              <p className="text-sm text-chalk-dim group-hover:text-chalk transition-colors">
                {r.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Horizon spill */}
      <div className="horizon pointer-events-none absolute bottom-0 left-0 right-0 h-48" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-uv/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}