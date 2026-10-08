import { motion } from 'framer-motion';
import GlowCard from './GlowCard';

export default function TeacherAnalytics() {
  return (
    <section className="py-24 md:py-32 relative bg-void overflow-hidden border-t border-edge">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial-uv opacity-20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-center">
          
          {/* Left: UI Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-uv/20 to-cyan/20 blur-2xl rounded-full opacity-50 pointer-events-none" />
            
            <GlowCard innerClassName="p-0 overflow-hidden bg-white">
              {/* Fake dashboard header */}
              <div className="border-b border-edge bg-panel px-6 py-4 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="font-mono text-[10px] tracking-widest text-muted">EDUCATOR PORTAL</div>
              </div>
              
              {/* Dashboard body */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-chalk mb-4">Class Performance: Chemistry 101</h4>
                
                {/* Fake graph */}
                <div className="flex items-end gap-2 h-32 mb-6 border-b border-edge/50 pb-2">
                  {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="flex-1 bg-uv/20 rounded-t-sm relative group cursor-crosshair"
                    >
                      <div className="absolute bottom-0 left-0 right-0 bg-uv rounded-t-sm transition-all duration-300 group-hover:opacity-80" style={{ height: '100%' }} />
                    </motion.div>
                  ))}
                </div>

                {/* Fake student list */}
                <div className="space-y-3">
                  {[
                    { name: 'Sarah J.', status: 'Completed', score: '92%' },
                    { name: 'Michael T.', status: 'Struggling (Titration)', score: '45%' },
                    { name: 'Aisha K.', status: 'In Progress', score: '--' }
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between items-center text-sm py-2 border-b border-edge/30 last:border-0">
                      <span className="font-medium text-chalk">{s.name}</span>
                      <span className={`text-[11px] px-2 py-1 rounded-full ${
                        s.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        s.status.includes('Struggling') ? 'bg-red-100 text-red-700' :
                        'bg-panel text-muted'
                      }`}>
                        {s.status}
                      </span>
                      <span className="font-mono text-muted">{s.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-warm" />
              <p className="font-mono text-[11px] tracking-[0.2em] text-warm">ACTIONABLE INSIGHTS</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tightest text-chalk leading-[1.05] mb-6">
              Track progress, not <br />
              <span className="gradient-text-warm">just participation.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Because it's digital, every action is logged. See exactly where students hesitate, what concepts they struggle to apply, and who needs intervention before the summative assessment.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Identify skill gaps instantly',
                'Export detailed completion reports',
                'Monitor live safety adherence in VR'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-chalk font-medium">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-warm-bg text-warm flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
