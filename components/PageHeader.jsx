import { motion } from 'framer-motion';
import Aurora from './Aurora';

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="relative bg-void grain overflow-hidden">
      <Aurora />
      <div className="grid-reticle absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_75%_at_50%_45%,transparent_25%,#0A0B10_85%)]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-16 md:pt-44 md:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] tracking-[0.2em] text-uv mb-5"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tightest text-chalk max-w-3xl leading-[1.0] [text-shadow:0_2px_40px_rgba(10,11,16,0.9)]"
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-muted max-w-xl leading-relaxed [text-shadow:0_1px_20px_rgba(10,11,16,0.9)]"
          >
            {intro}
          </motion.p>
        )}
      </div>

      <div className="horizon pointer-events-none absolute bottom-0 left-0 right-0 h-32" />
    </section>
  );
}