import Seo from '../components/Seo';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FlaskConical, Zap, Microscope, ChevronRight } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import GlowCard from '../components/GlowCard';
import LabFilm from '../components/LabFilm';
import Lab360 from '../components/Lab360';
import { films } from '../lib/media';

const labs = [
  {
    icon: FlaskConical,
    name: 'Chemistry',
    status: 'IN DEVELOPMENT',
    active: true,
    colour: '#2563EB',
    syllabus: 'CAMBRIDGE IGCSE CHEMISTRY 0620',
    thesis:
      'The discipline where the gap between reading a method and running it is widest — and where a mistake in the real lab is expensive or dangerous.',
    practicals: [
      'Acid–base titration to endpoint',
      'Rates of reaction under varied concentration and temperature',
      'Qualitative analysis of unknown salts',
      'Simple organic synthesis and purification',
    ],
  },
  {
    icon: Zap,
    name: 'Physics',
    status: 'PLANNED — 2027',
    active: false,
    colour: '#0D9488',
    thesis:
      'Apparatus that never drifts out of calibration, never goes missing, and lets a student repeat a measurement until the method makes sense.',
    practicals: [
      'Simple pendulum and determination of g',
      'Forces on an inclined plane',
      'Series and parallel circuits, Ohm\'s law',
      'Refraction and lens focal length',
    ],
  },
  {
    icon: Microscope,
    name: 'Biology',
    status: 'PLANNED — 2028',
    active: false,
    colour: '#7C3AED',
    thesis:
      'Specimens and prepared slides cost money and run out. Here they don\'t, and dissection carries no ethical cost.',
    practicals: [
      'Light microscopy and slide preparation',
      'Cell structure and osmosis',
      'Comparative dissection',
      'Enzyme activity under varied pH',
    ],
  },
];

const labScreens = [
  { src: '/lab-screens/lab_organic.jpg', title: 'ORGANIC TESTS', caption: 'Three unknown liquids, identified with bromine water, sodium carbonate and acidified dichromate.', alt: 'Organic tests bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_flame.jpg', title: 'FLAME TESTS', caption: 'The flame tests bench, seen from the starting position.', alt: 'Flame tests bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_skills.jpg', title: 'GRAPH SKILLS', caption: 'Drawing and reading graphs from a set of results.', alt: 'Graph skills practical in the LaboraVR lab' },
  { src: '/lab-screens/lab_planning.jpg', title: 'PLANNING', caption: 'Planning an experiment before any apparatus is used.', alt: 'Experiment planning screen in the LaboraVR lab' },
  { src: '/lab-screens/lab_drawing.jpg', title: 'BIOLOGY DRAWING', caption: 'The biology drawing board, for labelled drawings of specimens.', alt: 'Biology drawing board in the LaboraVR lab' },
  { src: '/lab-screens/lab_raytrace.jpg', title: 'RAY TRACE', caption: 'A physics ray trace through a lens or mirror.', alt: 'Physics ray trace practical in the LaboraVR lab' },
  { src: '/lab-screens/lab_titration.jpg', title: 'TITRATION', caption: 'The acid–base titration practical.', alt: 'Acid–base titration practical in the LaboraVR lab' },
  { src: '/lab-screens/lab_gases.jpg', title: 'GAS TESTS', caption: 'Identifying a gas, seen from the student view of the lab.', alt: 'Gas identification practical in the LaboraVR lab' },
  { src: '/lab-screens/student_start.jpg', title: 'START OF THE LESSON', caption: 'The qualitative analysis lab, as a student sees it at the start.', alt: 'Start of the qualitative analysis lesson in the LaboraVR lab' },
  { src: '/lab-screens/lab_chempractical_clean.jpg', title: 'PRACTICAL', caption: 'Temperature change when a salt dissolves: the reading table in the lab.', alt: 'Chemistry practical table for temperature change when a salt dissolves' },
  { src: '/lab-screens/vr_hands_lesson1.jpg', title: 'THE LESSON', caption: 'The qualitative analysis lesson, seen from inside the headset with the controllers.', alt: 'Qualitative analysis lesson in VR with controllers' },
  { src: '/lab-screens/lab_lobby.jpg', title: 'THE LOBBY', caption: 'The lab lobby, where students choose a lesson.', alt: 'LaboraVR lab lobby' },
  { src: '/lab-screens/lab_cations.jpg', title: 'CATION TESTS', caption: 'More cation tests: sodium hydroxide first, then ammonia, with the reagent key.', alt: 'Cation tests bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_anions.jpg', title: 'ANION TESTS', caption: 'The anion test bench.', alt: 'Anion tests bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_carbonate.jpg', title: 'CARBONATE TEST', caption: 'The carbonate test bench.', alt: 'Carbonate test bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_ammonia.jpg', title: 'AMMONIA TEST', caption: 'The ammonia test bench.', alt: 'Ammonia test bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_sulfite.jpg', title: 'SULFITE TEST', caption: 'The sulfite test bench.', alt: 'Sulfite test bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_physics_clean.jpg', title: 'PHYSICS', caption: 'The period of a pendulum: timing ten swings and recording the results.', alt: 'Pendulum practical table in the LaboraVR lab' },
  { src: '/lab-screens/lab_biology_clean.jpg', title: 'BIOLOGY', caption: 'Osmosis in potato discs: measuring the lengths of the discs in each salt solution.', alt: 'Osmosis in potato discs practical table in the LaboraVR lab' },
];

export default function Labs() {
  return (
    <>
      <Seo
        title="The labs — LaboraVR"
        description="Chemistry practicals in virtual reality, built around Cambridge IGCSE Chemistry (0620). Physics and biology are in development."
      />
      <Navbar />

      <PageHeader
        eyebrow="THE LABS"
        title="Built around your syllabus, not ours."
        intro="Below is what we're building first. The order and the detail are still open — the first departments we work with will decide both."
      />

      {/* Lab showcase cards */}
      <section className="relative bg-void grain py-12 md:py-16 overflow-hidden">
        {/* Ambient depth */}
        <div className="pointer-events-none absolute inset-0">
          <div className="grid-reticle absolute inset-0 opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {labs.map((lab, i) => (
            <ScrollReveal key={lab.name}>
              <GlowCard className="lift-hover group" innerClassName="p-0 overflow-hidden">
                <div className="grid md:grid-cols-[1fr_1fr]">
                  {/* Left: info */}
                  <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-edge">
                    {/* Icon + status */}
                    <div className="flex items-start justify-between mb-8">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 group-hover:scale-105"
                        style={{
                          borderColor: `${lab.colour}40`,
                          boxShadow: `0 8px 24px -6px ${lab.colour}40`,
                        }}
                      >
                        <lab.icon
                          size={24}
                          strokeWidth={2}
                          style={{ color: lab.colour }}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        {lab.active && (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-uv opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-uv" />
                          </span>
                        )}
                        <span
                          className="font-mono text-[9px] tracking-[0.18em] border rounded px-2.5 py-1"
                          style={{
                            color: lab.active ? '#2563EB' : '#64748B',
                            borderColor: lab.active ? 'rgba(37,99,235,0.35)' : '#E2E8F0',
                          }}
                        >
                          {lab.status}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tightest text-chalk mb-3">
                      {lab.name}
                    </h2>
                    {lab.syllabus && (
                      <p className="font-mono text-[10px] tracking-[0.15em] text-warm mb-4">
                        {lab.syllabus}
                      </p>
                    )}
                    <p className="text-base md:text-lg text-muted leading-relaxed">
                      {lab.thesis}
                    </p>
                  </div>

                  {/* Right: practicals list */}
                  <div className="p-8 md:p-12">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-6">
                      FIRST PRACTICALS
                    </p>
                    <ul className="space-y-0 mb-8">
                      {lab.practicals.map((p, j) => (
                        <motion.li
                          key={p}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: j * 0.07 }}
                          className="group flex items-start gap-3 py-4 border-b border-edge first:border-t"
                        >
                          {/* Tick */}
                          <span
                            className="mt-0.5 flex-shrink-0 w-4 h-4 rounded flex items-center justify-center border transition-colors"
                            style={{
                              borderColor: lab.active ? 'rgba(37,99,235,0.4)' : '#E2E8F0',
                              background:  lab.active ? 'rgba(37,99,235,0.12)' : 'transparent',
                            }}
                          >
                            {lab.active && (
                              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                                <path d="M1 3L3 5L7 1" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </span>
                          <span className="text-chalk leading-snug group-hover:text-chalk transition-colors">
                            {p}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Films of the chemistry lab */}
      <section className="relative bg-void py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-4">SEE THE CHEMISTRY LAB</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk mb-8">
              From the bench to the mark scheme.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <LabFilm {...films.lab} />
            </ScrollReveal>
            <ScrollReveal>
              <LabFilm {...films.student} />
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="mt-6">
              <Lab360 {...films.lab360} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Screens from the lab build */}
      <section className="relative bg-void py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-4">INSIDE THE BUILD</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk mb-8">
              Real screens from the chemistry, physics and biology practicals.
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {labScreens.map((shot) => (
              <ScrollReveal key={shot.src}>
                <figure className="lift-hover card-shadow overflow-hidden rounded-2xl border border-edge/50 bg-white/60 backdrop-blur-md">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    width="1600"
                    height="900"
                    className="aspect-video w-full object-cover bg-void"
                  />
                  <figcaption className="px-5 py-4">
                    <p className="font-mono text-[11px] tracking-[0.2em] text-uv">{shot.title}</p>
                    <p className="mt-2 text-sm text-chalk-dim">{shot.caption}</p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section className="relative bg-panel py-24 md:py-32 overflow-hidden">
          <div className="relative max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tightest leading-[1.05]">
              <span className="text-chalk">Something missing </span>
              <span className="gradient-text">from that list?</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
              That&apos;s the useful conversation. Tell us which practical your
              department can&apos;t reliably run, and it goes to the front of
              the queue.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-glow inline-block bg-uv text-white px-10 py-4 rounded-xl font-semibold hover:bg-uv-bright transition-colors text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
              >
                Tell us what you need
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </>
  );
}