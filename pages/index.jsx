import Seo from '../components/Seo';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FlaskConical, Zap, Microscope, Download, ChevronRight, Check } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CinematicHero from '../components/CinematicHero';
import ScrollReveal from '../components/ScrollReveal';
import TitrationDemo from '../components/TitrationDemo';
import PrecipitateDemo from '../components/PrecipitateDemo';
import ScrollSequence from '../components/ScrollSequence';
import GlowCard from '../components/GlowCard';

/* ── Data ─────────────────────────────────────────────────────────── */

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
    image: '/lab-screens/vr_hands_lesson1.jpg',
    name: 'Chemistry',
    line: 'Titrations, reaction kinetics and organic synthesis. Get it wrong, see what happens, run it again.',
    status: 'IN DEVELOPMENT',
    active: true,
  },
  {
    image: '/lab-screens/lab_physics_clean.jpg',
    name: 'Physics',
    line: 'Mechanics, optics and circuits on apparatus that never drifts out of calibration.',
    status: 'PLANNED',
    active: false,
  },
  {
    image: '/lab-screens/lab_biology_clean.jpg',
    name: 'Biology',
    line: 'Microscopy, dissection and cell biology without specimen cost or ethical constraints.',
    status: 'PLANNED',
    active: false,
  },
];

const stats = [
  { display: '3',   label: 'Disciplines',     note: 'Chemistry, Physics, Biology' },
  { display: '₵0',  label: 'Cost per attempt', note: 'Zero reagent cost per run' },
  { display: '∞',   label: 'Repeat attempts',  note: 'Per session, per student' },
  { display: '24/7',label: 'Lab access',        note: 'Students practise anytime' },
];

const specs = [
  { k: 'HARDWARE',    v: 'Standalone headsets. No workstation, no cabling, no dedicated room.' },
  { k: 'CONNECTIVITY',v: 'Practicals run offline. Results sync when the network returns.' },
  { k: 'DEPLOYMENT',  v: 'Managed install on department-owned devices. No per-seat licence keys to distribute.' },
  { k: 'ASSESSMENT',  v: 'Every action is timestamped, so a demonstrator sees method, not just the final answer.' },
  { k: 'CURRICULUM',  v: 'Procedures are authored against your existing practical manual, not a generic one.' },
];

const demoFeatures = [
  'Full chemistry lab environment',
  'Acid–base titration practical',
  'Built in Unity 6',
  'No account or login required',
];

const COMING_SOON = true; // set to false when the APK is ready

/* ── Static stat tile ────────────────────────────────────────────── */
function StatTile({ display, label, note, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-void p-8 md:p-10 flex flex-col gap-2 group hover:bg-surface transition-colors"
    >
      <p className="font-mono text-4xl md:text-5xl font-extrabold text-uv leading-none tabular-nums">
        {display}
      </p>
      <p className="font-semibold text-chalk mt-1">{label}</p>
      <p className="font-mono text-[10px] tracking-[0.15em] text-muted leading-snug">{note}</p>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Seo
        title="LaboraVR — The lab that never runs out"
        description="Practical chemistry, physics and biology in virtual reality, for schools and universities on Cambridge IGCSE and A Levels, with WASSCE coming next."
      />
      <Navbar />
      <CinematicHero />

      {/* ── Stats counter ──────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative bg-panel py-20 md:py-24 overflow-hidden">
          {/* Background glow */}
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-edge border border-edge overflow-hidden rounded-xl">
              {stats.map((s, i) => (
                <StatTile key={s.label} index={i} {...s} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── The problem ────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative bg-void grain py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-uv" />
              <p className="font-mono text-[11px] tracking-[0.2em] text-uv">THE PROBLEM</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk max-w-2xl leading-[1.05]">
              Practical science is the first thing a{' '}
              <span className="gradient-text">tight budget cuts.</span>
            </h2>

            <div className="mt-16 border-t border-edge">
              {constraints.map((c, i) => (
                <motion.div
                  key={c.code}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="grid md:grid-cols-[140px_1fr] gap-2 md:gap-10 py-7 border-b border-edge group hover:bg-surface/30 -mx-6 px-6 transition-colors rounded"
                >
                  <p className="font-mono text-[11px] tracking-[0.18em] text-uv pt-1">
                    {c.code}
                  </p>
                  <p className="text-lg text-muted leading-relaxed max-w-2xl group-hover:text-chalk-dim transition-colors">
                    {c.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── The labs ───────────────────────────────────────────── */}
      <ScrollReveal>
        <section id="labs" className="relative bg-panel py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-uv" />
              <p className="font-mono text-[11px] tracking-[0.2em] text-uv">THE LABS</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk max-w-2xl leading-[1.05]">
              Three disciplines.{' '}
              <span className="gradient-text">One headset.</span>
            </h2>

            <div className="mt-16 grid md:grid-cols-2 gap-5">
              {/* Featured — Chemistry, the one that's active */}
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <GlowCard innerClassName="p-0 overflow-hidden">
                  <div className="grid md:grid-cols-[1.1fr_1fr]">
                    <div className="relative h-56 md:h-auto min-h-[16rem]">
                      <Image
                        src={labs[0].image}
                        alt="Chemistry virtual lab"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-void/70 md:from-void/10 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 font-mono text-[9px] tracking-[0.18em] text-uv bg-void/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-uv/30">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-uv opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-uv" />
                        </span>
                        LIVE
                      </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col">
                      <h3 className="text-3xl font-bold text-chalk mb-3">{labs[0].name}</h3>
                      <p className="text-muted leading-relaxed">{labs[0].line}</p>

                      {/* Real numbers from the build */}
                      <div className="mt-7 grid grid-cols-4 gap-3">
                        {[
                          ['12', 'Cation tests'],
                          ['8',  'Anion tests'],
                          ['6',  'Gas tests'],
                          ['5',  'Flame tests'],
                        ].map(([n, label]) => (
                          <div key={label}>
                            <p className="font-mono text-xl md:text-2xl font-bold text-warm tabular-nums leading-none">{n}</p>
                            <p className="mt-1 text-[11px] text-muted leading-tight">{label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-8 flex items-center justify-between">
                        <p className="font-mono text-[10px] tracking-[0.18em] text-uv">{labs[0].status}</p>
                        <Link
                          href="/labs"
                          className="text-muted hover:text-uv transition-colors"
                          aria-label="Learn more about Chemistry lab"
                        >
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>

              {/* Planned — Physics & Biology, smaller */}
              {labs.slice(1).map((lab, i) => (
                <motion.div
                  key={lab.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <GlowCard className="h-full" innerClassName="p-6 md:p-8 flex flex-col h-full">
                    <div className="mb-5 relative w-full h-32 rounded-xl overflow-hidden border border-edge">
                      <Image
                        src={lab.image}
                        alt={`${lab.name} virtual lab`}
                        fill
                        className="object-cover opacity-65 grayscale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
                    </div>

                    <h3 className="text-xl font-bold text-chalk mb-2">{lab.name}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-auto">{lab.line}</p>

                    <div className="mt-6 flex items-center justify-between">
                      <p className="font-mono text-[10px] tracking-[0.18em] text-muted">{lab.status}</p>
                      <Link
                        href="/labs"
                        className="text-muted hover:text-uv transition-colors"
                        aria-label={`Learn more about ${lab.name} lab`}
                      >
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── In the room — scroll-driven ────────────────────────── */}
      <ScrollSequence />

      {/* ── Try it ─────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative bg-panel py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-uv" />
              <p className="font-mono text-[11px] tracking-[0.2em] text-uv">RUN ONE NOW</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk max-w-2xl leading-[1.05]">
              This is the chemistry,{' '}
              <span className="gradient-text">not a video of it.</span>
            </h2>
            <div className="mt-12 grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  A strong acid–strong base titration, solved live from the same
                  equations the headset uses. Overshoot it and see what a spoiled
                  titration costs.
                </p>
                <TitrationDemo />
              </div>
              <div>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  A qualitative analysis cation test. Add sodium hydroxide to a
                  copper(II) solution and observe the precipitate, exactly as
                  specified in the marking scheme.
                </p>
                <PrecipitateDemo />
              </div>
            </div>
            <p className="mt-8 font-mono text-[10px] tracking-[0.15em] text-muted text-center lg:text-left">
              BROWSER PREVIEWS · THE HEADSET VERSION ADDS THE GLASSWARE AND THE HANDS
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Download / Demo ────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative bg-void grain py-24 md:py-32 overflow-hidden">
          {/* Big glow */}

          <div className="relative max-w-5xl mx-auto px-6">
            <GlowCard innerClassName="p-8 md:p-14">
              <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-6 h-px bg-uv" />
                    <p className="font-mono text-[11px] tracking-[0.2em] text-uv">DEMO BUILD</p>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk leading-[1.05] mb-4">
                    {COMING_SOON ? 'Building this now.' : 'Try it in the headset.'}{' '}
                    <span className="gradient-text">
                      {COMING_SOON ? 'Be the first to try it.' : 'No cost, no account.'}
                    </span>
                  </h2>
                  <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
                    {COMING_SOON
                      ? 'We\'re building a full VR chemistry lab. The titration practical you can run above will be the first experiment — with real glassware in your hands. Join the pilot to be notified the moment it\'s ready.'
                      : 'The chemistry lab is in active development. Run the titration practical yourself, exactly as your students will.'}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {demoFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-chalk-dim">
                        <Check size={14} className="text-uv flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {COMING_SOON ? (
                      <Link
                        href="/contact"
                        className="btn-glow inline-flex items-center gap-2 bg-uv text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-uv-bright transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
                      >
                        Join the pilot — get early access
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="btn-glow inline-flex items-center gap-2 bg-uv text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-uv-bright transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
                      >
                        <Download size={16} />
                        Download demo
                      </a>
                    )}
                    <Link
                      href="/contact"
                      className="glass inline-flex items-center gap-2 border border-edge text-chalk px-7 py-3.5 rounded-xl font-semibold hover:border-uv/50 transition-all"
                    >
                      Request access
                    </Link>
                  </div>
                  <p className="mt-4 font-mono text-[9px] tracking-[0.15em] text-muted">
                    {COMING_SOON ? 'VR BUILD IN PROGRESS · CONTACT US FOR EARLY ACCESS' : 'DOWNLOAD LINK COMING SOON · CONTACT US FOR EARLY ACCESS'}
                  </p>
                </div>

                {/* Visual — lab screenshot */}
                <div className="hidden md:block relative w-52 h-36 rounded-2xl overflow-hidden border border-uv/20 glow-ring flex-shrink-0">
                  <Image
                    src="/lab-screens/lab_lobby.jpg"
                    alt="The LaboraVR lab lobby seen in VR"
                    fill
                    sizes="208px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chalk/75 to-transparent" />
                  <p className="absolute bottom-2 left-0 right-0 text-center font-mono text-[9px] tracking-[0.15em] text-white">
                    BUILT IN UNITY 6
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Specification ──────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative bg-panel py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-uv" />
              <p className="font-mono text-[11px] tracking-[0.2em] text-uv">SPECIFICATION</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk max-w-2xl leading-[1.05] mb-16">
              What your IT department will ask.
            </h2>

            <div className="border-t border-edge">
              {specs.map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-7 border-b border-edge group hover:bg-surface/30 -mx-6 px-6 transition-colors rounded"
                >
                  <p className="font-mono text-[11px] tracking-[0.18em] text-uv pt-1">{s.k}</p>
                  <p className="text-lg text-muted leading-relaxed max-w-2xl group-hover:text-chalk-dim transition-colors">
                    {s.v}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Close CTA ──────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative bg-void grain py-24 md:py-36 overflow-hidden">
          {/* Full-bleed real photo, faded under the page so it reads as texture, not a photo */}
          <div className="absolute inset-0">
            <Image src="/lab-screens/student_start.jpg" alt="" fill className="object-cover opacity-[0.32]" />
            <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_68%_88%_at_50%_50%,rgba(255,255,255,0.96),rgba(255,255,255,0.7)_45%,transparent_78%)]" />
          </div>

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <p className="font-mono text-[11px] tracking-[0.2em] text-uv mb-6">
              PILOT PROGRAMME
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest leading-[1.05]">
              <span className="gradient-text">We&apos;re looking for</span>
              <br />
              <span className="text-chalk">the first three departments.</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl mx-auto">
              The pilot is free. You get the labs and your students&apos;
              practical time back; we get the feedback that decides what gets
              built next.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-glow inline-block bg-uv text-white px-10 py-4 rounded-xl font-semibold hover:bg-uv-bright transition-colors text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
              >
                Join the pilot
              </Link>
              <Link
                href="/labs"
                className="glass inline-block border border-edge text-chalk px-10 py-4 rounded-xl font-semibold hover:border-uv/50 transition-all text-lg"
              >
                Explore the labs
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </>
  );
}