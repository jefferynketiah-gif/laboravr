import { motion } from 'framer-motion';
import GlowCard from './GlowCard';

const lmsList = [
  { name: 'Canvas LMS', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z' },
  { name: 'Google Classroom', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm4 5H8v-1.27c0-2.67 5.33-2.67 8 0V17z' },
  { name: 'Blackboard', icon: 'M3 5v14h18V5H3zm16 12H5V7h14v10zM7 9h10v2H7V9zm0 4h7v2H7v-2z' },
  { name: 'Moodle', icon: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z' }
];

export default function Integrations() {
  return (
    <section className="py-24 md:py-32 relative bg-panel overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-center">
          
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-uv" />
              <p className="font-mono text-[11px] tracking-[0.2em] text-uv">LMS INTEGRATION</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tightest text-chalk leading-[1.05] mb-6">
              Plugs right into your <br />
              <span className="gradient-text">existing ecosystem.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              LaboraVR connects directly via LTI 1.3 to your school's LMS. Automatically sync student rosters, export graded lab reports, and manage assignments without leaving your dashboard.
            </p>
            <button className="btn-glow bg-chalk text-void px-6 py-3 rounded-lg font-semibold text-sm hover:bg-chalk-dim transition-colors">
              View Documentation
            </button>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {lmsList.map((lms, i) => (
              <GlowCard key={lms.name} className="flex flex-col items-center justify-center p-8 text-center group">
                <svg className="w-12 h-12 text-muted mb-4 group-hover:text-uv transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d={lms.icon} />
                </svg>
                <h3 className="font-semibold text-chalk">{lms.name}</h3>
              </GlowCard>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
