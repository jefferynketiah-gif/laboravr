import Seo from '../components/Seo';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Mail, MessageCircle } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import GlowCard from '../components/GlowCard';

const labelClass = 'block font-mono text-[10px] tracking-[0.18em] text-uv mb-2.5';

const inputClass =
  'w-full bg-void border border-edge rounded-xl px-4 py-3.5 text-chalk placeholder:text-muted/50 ' +
  'focus:outline-none focus:border-uv focus:ring-1 focus:ring-uv/50 ' +
  'hover:border-edge-bright transition-all duration-200';

const pilotPoints = [
  'No cost, and no commitment to buy afterwards.',
  'We fit the first practicals to your existing syllabus, not a generic one.',
  'In exchange we want honest feedback from demonstrators and students.',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', university: '', department: '', curriculum: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm({ name: '', email: '', university: '', department: '', curriculum: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Seo
        title="Join the pilot — LaboraVR"
        description="Bring LaboraVR's virtual science labs to your department. Tell us what you teach."
      />
      <Navbar />

      <PageHeader
        eyebrow="PILOT PROGRAMME"
        title="Tell us what you teach."
        intro="We're fitting the first labs around real syllabuses. Send us your department and we'll come back within two working days."
      />

      <section className="relative bg-void grain py-20 md:py-28 overflow-hidden">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="aurora-blob aurora-d opacity-20" />
          <div className="absolute top-0 right-0 w-[36rem] h-[36rem] bg-[radial-gradient(circle,rgba(124,92,255,0.09),transparent_60%)] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-[radial-gradient(circle,rgba(34,211,238,0.05),transparent_60%)] blur-3xl" />
          <div className="grid-reticle absolute inset-0 opacity-25" />
        </div>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_320px] gap-10">

          {/* Form */}
          <div>
            {/* Success state */}
            <AnimatePresence>
              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-8 glass border border-uv/30 rounded-xl px-5 py-5 flex gap-4 items-start"
                >
                  <div className="w-8 h-8 rounded-full bg-uv/20 border border-uv/30 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-uv" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-1">RECEIVED</p>
                    <p className="text-chalk">Thanks — we&apos;ll be in touch within two working days.</p>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-8 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-5"
                >
                  <p className="font-mono text-[10px] tracking-[0.18em] text-red-400 mb-1">NOT SENT</p>
                  <p className="text-chalk">
                    The form didn&apos;t go through. Try again, or email{' '}
                    <a href="mailto:hello@laboravr.com" className="text-uv hover:underline">
                      hello@laboravr.com
                    </a>{' '}
                    directly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClass}>YOUR NAME</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    className={inputClass} placeholder="Dr Ama Mensah"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>EMAIL</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    className={inputClass} placeholder="you@school.edu.gh"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="university" className={labelClass}>INSTITUTION</label>
                <input
                  id="university" name="university" type="text" required
                  value={form.university} onChange={handleChange}
                  className={inputClass} placeholder="A school or university"
                />
              </div>

              <div>
                <label htmlFor="department" className={labelClass}>DEPARTMENT</label>
                <select
                  id="department" name="department" required
                  value={form.department} onChange={handleChange}
                  className={inputClass + ' cursor-pointer'}
                >
                  <option value="">Select a department</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Physics">Physics</option>
                  <option value="Biology">Biology</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="curriculum" className={labelClass}>CURRICULUM</label>
                <select
                  id="curriculum" name="curriculum" required
                  value={form.curriculum} onChange={handleChange}
                  className={inputClass + ' cursor-pointer'}
                >
                  <option value="">Select a curriculum</option>
                  <option value="Cambridge IGCSE">Cambridge IGCSE</option>
                  <option value="A Levels">A Levels</option>
                  <option value="WASSCE">WASSCE</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  WHAT PRACTICALS ARE HARDEST TO RUN? (OPTIONAL)
                </label>
                <textarea
                  id="message" name="message" rows={5}
                  value={form.message} onChange={handleChange}
                  className={inputClass + ' resize-none'}
                  placeholder="Class sizes, equipment you're short of, anything that gets cut first."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-glow w-full sm:w-auto bg-uv text-white px-10 py-4 rounded-xl font-semibold hover:bg-uv-bright disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
              >
                {status === 'sending' ? 'Sending…' : 'Join the pilot'}
              </button>
            </form>
          </div>

          {/* Aside */}
          <aside>
            <GlowCard innerClassName="p-7 space-y-8">
              {/* What the pilot involves */}
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-5">
                  WHAT THE PILOT INVOLVES
                </p>
                <ul className="space-y-4">
                  {pilotPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted leading-relaxed">
                      <Check size={13} className="text-uv flex-shrink-0 mt-1" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-edge" />

              {/* Contact methods */}
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-4">
                  DIRECT CONTACT
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/+491623598902"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-chalk-dim hover:text-[#25D366] transition-colors group"
                  >
                    <MessageCircle size={14} className="text-uv/70 group-hover:text-[#25D366] transition-colors" />
                    WhatsApp Us
                  </a>
                  <a
                    href="mailto:hello@laboravr.com"
                    className="flex items-center gap-2.5 text-chalk-dim hover:text-chalk transition-colors group"
                  >
                    <Mail size={14} className="text-uv/70 group-hover:text-uv transition-colors" />
                    hello@laboravr.com
                  </a>
                </div>
              </div>

              {/* Ghana badge */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.15em] text-muted border border-edge rounded-full px-3 py-1.5">
                  🇬🇭 BUILT IN GHANA
                </span>
              </div>
            </GlowCard>
          </aside>

        </div>
      </section>

      <Footer />
    </>
  );
}