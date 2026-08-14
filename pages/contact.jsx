import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

// Replace with your own form ID from formspree.io
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const fieldClass =
  'w-full bg-panel border border-edge rounded-md px-4 py-3 text-chalk placeholder:text-muted/60 focus:outline-none focus:border-uv focus:ring-1 focus:ring-uv transition-colors';

const labelClass =
  'block font-mono text-[10px] tracking-[0.18em] text-uv mb-2.5';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    university: '',
    department: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('sent');
      setForm({
        name: '',
        email: '',
        university: '',
        department: '',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Join the pilot — LaboraVR</title>
        <meta
          name="description"
          content="Bring LaboraVR's virtual science labs to your department. Tell us what you teach and we'll be in touch."
        />
      </Head>

      <Navbar />

      <PageHeader
        eyebrow="PILOT PROGRAMME"
        title="Tell us what you teach."
        intro="We're fitting the first labs around real syllabuses. Send us your department and we'll come back within two working days."
      />

      <section className="bg-panel py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_340px] gap-14">
          {/* Form */}
          <div>
            {status === 'sent' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 border border-uv/40 bg-uv/10 rounded-md px-5 py-4"
              >
                <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-1.5">
                  RECEIVED
                </p>
                <p className="text-chalk">
                  Thanks — we&apos;ll be in touch within two working days.
                </p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 border border-red-500/40 bg-red-500/10 rounded-md px-5 py-4"
              >
                <p className="font-mono text-[10px] tracking-[0.18em] text-red-400 mb-1.5">
                  NOT SENT
                </p>
                <p className="text-chalk">
                  The form didn&apos;t go through. Try again, or email{' '}
                  <a
                    href="mailto:hello@laboravr.com"
                    className="text-uv hover:underline"
                  >
                    hello@laboravr.com
                  </a>{' '}
                  directly.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label htmlFor="name" className={labelClass}>
                  YOUR NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Dr Ama Mensah"
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="you@university.edu.gh"
                />
              </div>

              <div>
                <label htmlFor="university" className={labelClass}>
                  INSTITUTION
                </label>
                <input
                  id="university"
                  name="university"
                  type="text"
                  required
                  value={form.university}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="University of Ghana"
                />
              </div>

              <div>
                <label htmlFor="department" className={labelClass}>
                  DEPARTMENT
                </label>
                <select
                  id="department"
                  name="department"
                  required
                  value={form.department}
                  onChange={handleChange}
                  className={fieldClass}
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
                <label htmlFor="message" className={labelClass}>
                  WHAT PRACTICALS ARE HARDEST TO RUN? (OPTIONAL)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Class sizes, equipment you're short of, anything that gets cut first."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-uv text-white px-8 py-4 rounded-md font-semibold hover:bg-[#6B4AF0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
              >
                {status === 'sending' ? 'Sending…' : 'Join the pilot'}
              </button>
            </form>
          </div>

          {/* Aside */}
          <aside className="border-t md:border-t-0 md:border-l border-edge pt-10 md:pt-0 md:pl-10">
            <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-4">
              WHAT THE PILOT INVOLVES
            </p>
            <ul className="space-y-4 text-muted leading-relaxed mb-10">
              <li>No cost, and no commitment to buy afterwards.</li>
              <li>
                We fit the first practicals to your existing syllabus, not a
                generic one.
              </li>
              <li>
                In exchange we want honest feedback from demonstrators and
                students.
              </li>
            </ul>

            <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-4">
              PREFER EMAIL
            </p>
            <a
              href="mailto:hello@laboravr.com"
              className="text-chalk hover:text-uv transition-colors"
            >
              hello@laboravr.com
            </a>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}