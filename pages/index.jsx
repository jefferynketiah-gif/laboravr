import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FlaskConical, Zap, Microscope } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CinematicHero from '../components/CinematicHero';
import ScrollReveal from '../components/ScrollReveal';

const constraints = [
  {
    code: 'COST',
    text: 'A single working teaching lab runs into tens of thousands a year once equipment, reagents and maintenance are counted.',
  },
  {
    code: 'ACCESS',
    text: 'One lab, hundreds of students. Practical time gets rationed, and most of it is spent watching.',
  },
  {
    code: 'RISK',
    text: 'Reactive chemicals and mains-voltage apparatus mean supervision limits how much students are allowed to touch.',
  },
  {
    code: 'SUPPLY',
    text: 'Consumables run out mid-semester and imported replacements arrive late, if at all.',
  },
];

const labs = [
  {
    icon: FlaskConical,
    name: 'Chemistry',
    line: 'Titrations, reaction kinetics and organic synthesis. Get it wrong, see what happens, run it again.',
    status: 'IN DEVELOPMENT',
  },
  {
    icon: Zap,
    name: 'Physics',
    line: 'Mechanics, optics and circuits on apparatus that never drifts out of calibration.',
    status: 'PLANNED',
  },
  {
    icon: Microscope,
    name: 'Biology',
    line: 'Microscopy, dissection and cell biology without specimen cost or ethical constraints.',
    status: 'PLANNED',
  },
];

const steps = [
  {
    n: '01',
    title: 'Put on the headset',
    body: 'Standalone hardware. No workstation, no cabling, no dedicated room.',
  },
  {
    n: '02',
    title: 'Run the practical',
    body: 'The same procedure your syllabus already specifies, with every instrument to hand.',
  },
  {
    n: '03',
    title: 'Review the attempt',
    body: 'Every step is logged, so demonstrators see who understood the method and who guessed.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>LaboraVR — Virtual reality science labs for African universities</title>
        <meta
          name="description"
          content="Practical chemistry, physics and biology in virtual reality, built for African universities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <CinematicHero />

      {/* ── The gap ─────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative bg-void grain py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-uv mb-5">
              THE PROBLEM
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tightest text-chalk max-w-2xl leading-[1.05]">
              Practical science is the first thing a tight budget cuts.
            </h2>

            <div className="mt-16 border-t border-edge">
              {constraints.map((c, i) => (
                <motion.div
                  key={c.code}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="grid md:grid-cols-[140px_1fr] gap-2 md:gap-10 py-7 border-b border-edge"
                >
                  <p className="font-mono text-[11px] tracking-[0.18em] text-uv pt-1">
                    {c.code}
                  </p>
                  <p className="text-lg text-muted leading-relaxed max-w-2xl">
                    {c.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── The labs ────────────────────────────────────────── */}
      <ScrollReveal>
        <section id="labs" className="relative bg-panel py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-uv mb-5">
              THE LABS
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tightest text-chalk max-w-2xl leading-[1.05]">
              Three disciplines. One headset.
            </h2>

            <div className="mt-16 grid md:grid-cols-3 gap-px bg-edge border border-edge">
              {labs.map((lab, i) => (
                <motion.div
                  key={lab.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-void p-8 md:p-10 hover:bg-[#15171F] transition-colors"
                >
                  <lab.icon
                    size={26}
                    strokeWidth={1.5}
                    className="text-uv mb-8"
                  />
                  <h3 className="text-2xl font-bold text-chalk mb-3">
                    {lab.name}
                  </h3>
                  <p className="text-muted leading-relaxed mb-8">{lab.line}</p>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-muted group-hover:text-uv transition-colors">
                    {lab.status}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── How it works — a genuine sequence, so numbered ───── */}
      <ScrollReveal>
        <section className="relative bg-void grain py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-uv mb-5">
              IN THE ROOM
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tightest text-chalk max-w-2xl leading-[1.05]">
              A practical, start to finish.
            </h2>

            <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-14">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="border-t border-edge pt-6"
                >
                  <p className="font-mono text-[11px] tracking-[0.2em] text-uv mb-5">
                    {s.n}
                  </p>
                  <h3 className="text-xl font-bold text-chalk mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Close ───────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative bg-panel py-24 md:py-36">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tightest text-chalk leading-[1.05]">
              We&apos;re looking for the first three departments.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              The pilot is free. You get the labs and your students&apos;
              practical time back; we get the feedback that decides what gets
              built next.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-uv text-white px-8 py-4 rounded-md font-semibold hover:bg-[#6B4AF0] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
              >
                Join the pilot
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </>
  );
}