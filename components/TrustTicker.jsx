import { motion } from 'framer-motion';

const standards = [
  "Cambridge IGCSE Aligned",
  "NGSS Compliant",
  "IB Diploma Ready",
  "A-Level Physics Certified",
  "STEM.org Authenticated",
  "WASC Accredited Partner",
  "Cambridge IGCSE Aligned",
  "NGSS Compliant",
  "IB Diploma Ready"
];

export default function TrustTicker() {
  return (
    <div className="w-full bg-void border-y border-edge py-8 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-void to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-void to-transparent z-10" />

      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-center font-mono text-[10px] tracking-[0.2em] text-muted">
          BUILT FOR MODERN CURRICULUM STANDARDS
        </p>
      </div>

      <div className="flex w-[200%]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap items-center gap-16 px-8"
        >
          {standards.map((std, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-uv/30" />
              <span className="text-xl md:text-2xl font-semibold text-chalk/40 tracking-tight">
                {std}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {standards.map((std, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-uv/30" />
              <span className="text-xl md:text-2xl font-semibold text-chalk/40 tracking-tight">
                {std}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
