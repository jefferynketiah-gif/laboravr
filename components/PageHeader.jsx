import { motion } from 'framer-motion';

export default function PageHeader({ eyebrow, title, intro, accentWord }) {
  // If accentWord is set, wrap it in gradient-text
  const renderTitle = () => {
    if (!accentWord) {
      return <span className="gradient-text">{title}</span>;
    }
    const idx = title.indexOf(accentWord);
    if (idx === -1) return title;
    return (
      <>
        {title.slice(0, idx)}
        <span className="gradient-text">{accentWord}</span>
        {title.slice(idx + accentWord.length)}
      </>
    );
  };

  return (
    <section className="relative bg-void overflow-hidden">
      <div className="absolute inset-0 bg-uv/5 blur-[120px] pointer-events-none" />
      <div className="aurora-blob aurora-a opacity-30 pointer-events-none mix-blend-multiply" />
      <div className="grid-reticle absolute inset-0 opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6 pt-40 pb-20 md:pt-48 md:pb-28">
        {/* Eyebrow with line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-uv" />
          <p className="font-mono text-[11px] tracking-[0.2em] text-uv">
            {eyebrow}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tightest text-chalk max-w-3xl leading-[1.05]"
        >
          {renderTitle()}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 text-base md:text-lg text-muted max-w-xl leading-relaxed"
          >
            {intro}
          </motion.p>
        )}

        {/* Reveal sweep */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.65, 0, 0.35, 1] }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-uv origin-left"
        />
      </div>

      <div className="horizon pointer-events-none absolute bottom-0 left-0 right-0 h-36" />
    </section>
  );
}