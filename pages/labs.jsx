import Seo from '../components/Seo';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Zap, Microscope, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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
    colour: '#3B82F6',
    image: '/images/chemistry.jpg',
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
    colour: '#F59E0B',
    image: '/images/physics.jpg',
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
    colour: '#8B5CF6',
    image: '/images/biology.jpg',
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
  { src: '/lab-screens/lab_organic.jpg', title: 'ORGANIC TESTS', subject: 'Chemistry', caption: 'Three unknown liquids, identified with bromine water, sodium carbonate and acidified dichromate.', alt: 'Organic tests bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_flame.jpg', title: 'FLAME TESTS', subject: 'Chemistry', caption: 'The flame tests bench, seen from the starting position.', alt: 'Flame tests bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_skills.jpg', title: 'GRAPH SKILLS', subject: 'Physics', caption: 'Drawing and reading graphs from a set of results.', alt: 'Graph skills practical in the LaboraVR lab' },
  { src: '/lab-screens/lab_planning.jpg', title: 'PLANNING', subject: 'Chemistry', caption: 'Planning an experiment before any apparatus is used.', alt: 'Experiment planning screen in the LaboraVR lab' },
  { src: '/lab-screens/lab_drawing.jpg', title: 'BIOLOGY DRAWING', subject: 'Biology', caption: 'The biology drawing board, for labelled drawings of specimens.', alt: 'Biology drawing board in the LaboraVR lab' },
  { src: '/lab-screens/lab_raytrace.jpg', title: 'RAY TRACE', subject: 'Physics', caption: 'A physics ray trace through a lens or mirror.', alt: 'Physics ray trace practical in the LaboraVR lab' },
  { src: '/lab-screens/lab_titration.jpg', title: 'TITRATION', subject: 'Chemistry', caption: 'The acid–base titration practical.', alt: 'Acid–base titration practical in the LaboraVR lab' },
  { src: '/lab-screens/lab_gases.jpg', title: 'GAS TESTS', subject: 'Chemistry', caption: 'Identifying a gas, seen from the student view of the lab.', alt: 'Gas identification practical in the LaboraVR lab' },
  { src: '/lab-screens/student_start.jpg', title: 'START OF THE LESSON', subject: 'General', caption: 'The qualitative analysis lab, as a student sees it at the start.', alt: 'Start of the qualitative analysis lesson in the LaboraVR lab' },
  { src: '/lab-screens/lab_chempractical_clean.jpg', title: 'PRACTICAL', subject: 'Chemistry', caption: 'Temperature change when a salt dissolves: the reading table in the lab.', alt: 'Chemistry practical table for temperature change when a salt dissolves' },
  { src: '/lab-screens/vr_hands_lesson1.jpg', title: 'THE LESSON', subject: 'Chemistry', caption: 'The qualitative analysis lesson, seen from inside the headset with the controllers.', alt: 'Qualitative analysis lesson in VR with controllers' },
  { src: '/lab-screens/lab_lobby.jpg', title: 'THE LOBBY', subject: 'General', caption: 'The lab lobby, where students choose a lesson.', alt: 'LaboraVR lab lobby' },
  { src: '/lab-screens/lab_cations.jpg', title: 'CATION TESTS', subject: 'Chemistry', caption: 'More cation tests: sodium hydroxide first, then ammonia, with the reagent key.', alt: 'Cation tests bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_anions.jpg', title: 'ANION TESTS', subject: 'Chemistry', caption: 'The anion test bench.', alt: 'Anion tests bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_carbonate.jpg', title: 'CARBONATE TEST', subject: 'Chemistry', caption: 'The carbonate test bench.', alt: 'Carbonate test bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_ammonia.jpg', title: 'AMMONIA TEST', subject: 'Chemistry', caption: 'The ammonia test bench.', alt: 'Ammonia test bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_sulfite.jpg', title: 'SULFITE TEST', subject: 'Chemistry', caption: 'The sulfite test bench.', alt: 'Sulfite test bench in the LaboraVR lab' },
  { src: '/lab-screens/lab_physics_clean.jpg', title: 'PHYSICS', subject: 'Physics', caption: 'The period of a pendulum: timing ten swings and recording the results.', alt: 'Pendulum practical table in the LaboraVR lab' },
  { src: '/lab-screens/lab_biology_clean.jpg', title: 'BIOLOGY', subject: 'Biology', caption: 'Osmosis in potato discs: measuring the lengths of the discs in each salt solution.', alt: 'Osmosis in potato discs practical table in the LaboraVR lab' },
];

export default function Labs() {
  const [activeSubject, setActiveSubject] = useState('All');

  const filteredScreens = activeSubject === 'All' 
    ? labScreens 
    : labScreens.filter(screen => screen.subject === activeSubject || screen.subject === 'General');

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
      <section className="relative bg-void py-12 md:py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {labs.map((lab, i) => (
            <ScrollReveal key={lab.name}>
              <GlowCard className="lift-hover group rounded-3xl" innerClassName="p-0 overflow-hidden">
                <div className="grid md:grid-cols-[1fr_1fr]">
                  {/* Left: info */}
                  <div className="relative p-8 md:p-12 border-b md:border-b-0 md:border-r border-edge overflow-hidden">
                    {/* Hover Background Image */}
                    {lab.image && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none z-0">
                        <Image src={lab.image} alt={lab.name} fill className="object-cover mix-blend-luminosity grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/50 to-transparent" />
                      </div>
                    )}

                    {/* Icon + status */}
                    <div className="relative z-10 flex items-start justify-between mb-8">
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
                          className="font-bold text-[10px] tracking-wide border rounded-full px-3 py-1.5"
                          style={{
                            color: lab.active ? '#3B82F6' : '#64748B',
                            borderColor: lab.active ? 'rgba(59,130,246,0.35)' : '#E2E8F0',
                            backgroundColor: lab.active ? 'rgba(59,130,246,0.05)' : 'transparent',
                          }}
                        >
                          {lab.status}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tightest text-chalk mb-3">
                        {lab.name}
                      </h2>
                      {lab.syllabus && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warm-bg text-warm font-semibold text-[11px] mb-4 border border-warm/20">
                          {lab.syllabus}
                        </div>
                      )}
                      <p className="text-base md:text-lg text-muted leading-relaxed">
                        {lab.thesis}
                      </p>
                    </div>
                  </div>

                  {/* Right: practicals list */}
                  <div className="p-8 md:p-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-uv-dim text-uv font-semibold text-[11px] mb-6 border border-uv/20">
                      FIRST PRACTICALS
                    </div>
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
                            className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border transition-colors"
                            style={{
                              borderColor: lab.active ? 'rgba(59,130,246,0.4)' : '#E2E8F0',
                              background:  lab.active ? 'rgba(59,130,246,0.12)' : 'transparent',
                            }}
                          >
                            {lab.active && (
                              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                                <path d="M1 3L3 5L7 1" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </span>
                          <span className="text-chalk font-medium leading-snug group-hover:text-uv transition-colors">
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
      <section className="relative bg-panel py-12 md:py-20 border-t border-edge">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-uv/10 text-uv font-semibold text-sm mb-4 border border-uv/20 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-uv" />
              SEE THE CHEMISTRY LAB
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk mb-12">
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
      <section className="relative bg-void py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-uv/10 text-uv font-semibold text-sm mb-4 border border-uv/20 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-uv" />
                  INSIDE THE BUILD
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk max-w-2xl">
                  Real screens from the chemistry, physics and biology practicals.
                </h2>
              </div>
              
              {/* Subject Filter Tabs */}
              <div className="flex flex-wrap gap-2 p-1.5 bg-panel rounded-full border border-edge">
                {['All', 'Chemistry', 'Physics', 'Biology'].map(subject => (
                  <button
                    key={subject}
                    onClick={() => setActiveSubject(subject)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                      activeSubject === subject 
                        ? 'bg-white shadow-sm text-uv border border-edge-bright' 
                        : 'text-muted hover:text-chalk hover:bg-white/50 border border-transparent'
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredScreens.map((shot) => (
                <motion.div
                  key={shot.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <figure className="lift-hover h-full flex flex-col shadow-sm hover:shadow-lg overflow-hidden rounded-3xl border border-edge bg-white">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      loading="lazy"
                      width="1600"
                      height="900"
                      className="aspect-video w-full object-cover bg-panel"
                    />
                    <figcaption className="px-6 py-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2 h-2 rounded-full ${shot.subject === 'Chemistry' ? 'bg-blue-500' : shot.subject === 'Physics' ? 'bg-amber-500' : shot.subject === 'Biology' ? 'bg-purple-500' : 'bg-gray-400'}`} />
                        <span className="font-bold text-[10px] tracking-wide text-chalk uppercase">{shot.title}</span>
                      </div>
                      <p className="text-sm text-muted leading-relaxed flex-1">{shot.caption}</p>
                    </figcaption>
                  </figure>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section className="relative bg-panel py-24 md:py-32 overflow-hidden border-t border-edge">
          <div className="relative max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tightest leading-[1.05]">
              <span className="text-chalk">Something missing </span>
              <span className="gradient-text">from that list?</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
              That's the useful conversation. Tell us which practical your
              department can't reliably run, and it goes to the front of
              the queue.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-glow inline-block bg-uv text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl font-semibold hover:bg-uv-bright transition-colors text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
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