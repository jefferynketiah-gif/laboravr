import Seo from '../components/Seo';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Zap, Microscope, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import YouTubeFilm from '../components/YouTubeFilm';
import Lab360 from '../components/Lab360';
import { FILM } from '../components/FilmModal';
import { films } from '../lib/media';

// One colour per science, as Tailwind classes so they stay on the palette tokens.
const SUBJECT = {
  Chemistry: { dot: 'bg-uv', text: 'text-uv', ring: 'border-uv/30 bg-uv-dim' },
  Physics: { dot: 'bg-physics', text: 'text-physics', ring: 'border-physics/30 bg-physics/10' },
  Biology: { dot: 'bg-biology', text: 'text-biology', ring: 'border-biology/30 bg-biology/10' },
  General: { dot: 'bg-muted', text: 'text-muted', ring: 'border-edge bg-panel' },
};

const labs = [
  {
    icon: FlaskConical,
    name: 'Chemistry',
    status: 'IN THE HEADSET',
    image: '/competition/00-pour.jpg',
    alt: 'A gloved hand pouring sodium hydroxide into a test tube at the LaboraVR bench',
    syllabus: 'CAMBRIDGE IGCSE CHEMISTRY 0620',
    thesis:
      'The discipline where the gap between reading a method and running it is widest. After each test, the student says what they saw, and an examiner in the headset marks it.',
    practicals: [
      'Cation tests with aqueous sodium hydroxide and ammonia',
      'Anion, gas and flame tests',
      'Neutralise an acid in a cup, with a thermometer',
      'Follow magnesium in acid with a gas syringe',
      'Unknown of the day: name the cation and the anion',
    ],
  },
  {
    icon: Zap,
    name: 'Physics',
    status: 'FIRST PRACTICALS BUILT',
    image: '/competition/07-pendulum.jpg',
    alt: 'A pendulum on its stand beside a stopwatch on the LaboraVR physics bench',
    thesis:
      'Apparatus that never drifts out of calibration. The headset knows where the student’s eye is, so a reading taken from above is wrong, as it is in a real lab.',
    practicals: [
      'Time a pendulum at five lengths and plot T² against length',
      'Read a measuring cylinder at eye level',
      'Line up pins through a glass block',
    ],
  },
  {
    icon: Microscope,
    name: 'Biology',
    status: 'FIRST PRACTICALS BUILT',
    image: '/competition/11-potato-strips.jpg',
    alt: 'Measuring potato strips in sugar solutions, with the results table',
    thesis:
      'Specimens cost money and run out. Here a student tests food from their own kitchen and judges drawings of a real leaf.',
    practicals: [
      'Test bread, milk, an egg or an apple for starch, sugar and protein',
      'Measure potato strips in sugar solutions',
      'Be the examiner: find the leaf drawing that earns full marks',
    ],
  },
];

// Practicals that have their own page under /practicals (lib/practicals.js).
const PRACTICAL_PAGE = {
  'Cation tests with aqueous sodium hydroxide and ammonia': 'cation-tests',
  'Anion, gas and flame tests': 'flame-tests',
  'Time a pendulum at five lengths and plot T² against length': 'pendulum',
  'Read a measuring cylinder at eye level': 'measuring-cylinder',
  'Test bread, milk, an egg or an apple for starch, sugar and protein': 'food-tests',
  'Measure potato strips in sugar solutions': 'potato-osmosis',
};

// Current build first, then the earlier screens that still show the lab accurately.
const labScreens = [
  { src: '/competition/01-say-what-you-saw.jpg', title: 'SAY WHAT YOU SAW', subject: 'Chemistry', caption: 'The examiner marks a spoken observation point by point and says what was missing.', alt: 'The examiner panel marking a spoken observation in the LaboraVR lab' },
  { src: '/competition/05-missed-it.jpg', title: 'YOU MISSED IT', subject: 'Chemistry', caption: 'The student was looking away when the precipitate formed, so the change is offered again, slowly.', alt: 'The You missed it panel, offering to show a reaction again slowly' },
  { src: '/competition/04-exam-paper.jpg', title: 'BRING YOUR EXAM QUESTION', subject: 'General', caption: 'Hold a practical question up to the headset. The lab opens the practical that answers it.', alt: 'The Bring your question panel, with a worksheet held up to the headset camera' },
  { src: '/competition/09-sight-lines.jpg', title: 'READING AT EYE LEVEL', subject: 'Physics', caption: 'A measuring cylinder reads correctly only when the eye is level with the bottom of the meniscus.', alt: 'A magnified measuring cylinder reading taken at eye level' },
  { src: '/competition/08-your-graph.jpg', title: 'YOUR OWN GRAPH', subject: 'Physics', caption: 'The student’s own pendulum timings, plotted as T² against length.', alt: 'A graph of the period squared against pendulum length from a student’s results' },
  { src: '/competition/10-kitchen-starch.jpg', title: 'FROM YOUR KITCHEN', subject: 'Biology', caption: 'Bread shown to the headset, then tested for starch at the bench.', alt: 'A gloved hand holding a test tube during a starch test on bread' },
  { src: '/competition/11-potato-strips.jpg', title: 'POTATO STRIPS', subject: 'Biology', caption: 'Each strip is measured before and after, and each length goes into the student’s table.', alt: 'Measuring potato strips in sugar solutions, with the results table' },
  { src: '/lab-screens/s_flame_bunsen.jpg', title: 'FLAME TESTS', subject: 'Chemistry', caption: 'The Bunsen burner, the wire, and sample dishes for calcium, copper and potassium.', alt: 'The flame tests bench with the Bunsen burner and sample dishes' },
  { src: '/lab-screens/n_cation_bench.jpg', title: 'THE CATION BENCH', subject: 'Chemistry', caption: 'A rack of test tubes, the labelled cations, and the reagent bottles.', alt: 'The cation tests bench in the LaboraVR lab' },
  { src: '/lab-screens/n_litmus.jpg', title: 'BLUE LITMUS', subject: 'Chemistry', caption: 'Blue litmus held over the carbonate test, with the reminder to dip it in water first.', alt: 'A gloved hand holding a blue litmus strip in the LaboraVR lab' },
  { src: '/lab-screens/s_hint.jpg', title: 'A HINT ON A WRONG STEP', subject: 'Chemistry', caption: 'Pick the wrong reagent and the lesson says so, and what to do next.', alt: 'A hint shown in the ammonium and nitrate lesson' },
  { src: '/lab-screens/s_phys_stand.jpg', title: 'RECORDING A READING', subject: 'Physics', caption: 'The pendulum on its stand, with the timing dial and the button to record each reading.', alt: 'A pendulum on its stand beside the timing dial in the LaboraVR physics lab' },
  { src: '/lab-screens/s_lobby_welcome.jpg', title: 'THE LOBBY', subject: 'General', caption: 'The guide, and the subject boards: Exam skills, Biology, Physics and Chemistry.', alt: 'The LaboraVR lobby with the guide and the subject boards' },
  { src: '/lab-screens/v2_lobby_front.jpg', title: 'THE ENTRANCE', subject: 'General', caption: 'The LaboraVR building, seen from the entrance path.', alt: 'The entrance to the LaboraVR building in VR' },
];

function Eyebrow({ children }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-uv">
      <span className="h-px w-8 bg-uv/50" />
      {children}
    </p>
  );
}

export default function Labs() {
  const [activeSubject, setActiveSubject] = useState('All');

  const filteredScreens =
    activeSubject === 'All'
      ? labScreens
      : labScreens.filter((s) => s.subject === activeSubject || s.subject === 'General');

  return (
    <>
      <Seo
        title="The labs — LaboraVR"
        description="Chemistry, physics and biology practicals for Meta Quest, done with bare hands. Chemistry follows Cambridge IGCSE Chemistry (0620); the first physics and biology practicals are built."
      />
      <Navbar />

      <PageHeader
        eyebrow="THE LABS"
        title="Three sciences. Real practicals."
        intro="Chemistry, physics and biology, done with bare hands in a Meta Quest headset. Chemistry goes deepest today; the first physics and biology practicals are built. The schools we work with decide what comes next."
      />

      {/* One panel per science: the picture at full strength, then what is built */}
      <section className="relative bg-void py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          {labs.map((lab, i) => {
            const c = SUBJECT[lab.name];
            return (
              <ScrollReveal key={lab.name}>
                <article className="card-shadow grid overflow-hidden rounded-3xl border border-edge bg-white md:grid-cols-2">
                  <div className={`relative aspect-[16/10] md:aspect-auto md:min-h-[460px] ${i % 2 ? 'md:order-2' : ''}`}>
                    <Image
                      src={lab.image}
                      alt={lab.alt}
                      fill
                      sizes="(min-width: 768px) 576px, 100vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-ink/80 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-white backdrop-blur-sm">
                      <span className={`h-2 w-2 rounded-full ${c.dot}`} />
                      {lab.status}
                    </span>
                  </div>

                  <div className="flex flex-col p-8 md:p-12">
                    <div className="mb-6 flex items-center gap-4">
                      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${c.ring}`}>
                        <lab.icon size={22} className={c.text} />
                      </span>
                      <h2 className="text-3xl font-extrabold tracking-tightest text-chalk md:text-4xl">{lab.name}</h2>
                    </div>
                    {lab.syllabus && (
                      <p className="mb-4 inline-flex w-fit rounded-full border border-warm/20 bg-warm-bg px-3 py-1.5 text-[11px] font-semibold text-warm">
                        {lab.syllabus}
                      </p>
                    )}
                    <p className="mb-8 leading-relaxed text-chalk-dim md:text-lg">{lab.thesis}</p>

                    <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-muted">FIRST PRACTICALS</p>
                    <ul>
                      {lab.practicals.map((p) => (
                        <li key={p} className="flex items-start gap-3 border-b border-edge py-3 first:border-t">
                          <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border ${c.ring}`}>
                            <Check size={12} strokeWidth={3} className={c.text} />
                          </span>
                          {PRACTICAL_PAGE[p] ? (
                            <Link
                              href={`/practicals/${PRACTICAL_PAGE[p]}`}
                              className="group/link inline-flex items-start gap-1.5 font-medium leading-snug text-chalk hover:text-uv"
                            >
                              {p}
                              <ArrowRight size={14} className="mt-1 flex-shrink-0 text-uv transition-transform group-hover/link:translate-x-0.5" />
                            </Link>
                          ) : (
                            <span className="font-medium leading-snug text-chalk">{p}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* The film and the 360 view */}
      <section className="relative border-t border-edge bg-panel py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <Eyebrow>SEE IT RUNNING</Eyebrow>
            <h2 className="mb-12 max-w-2xl text-3xl font-extrabold tracking-tightest text-chalk md:text-4xl">
              Watch the film, then stand at the bench yourself.
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <figure>
                <YouTubeFilm id={FILM.id} title={FILM.title} poster={FILM.poster} />
                <figcaption className="px-1 pt-4">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-uv">THE COMPETITION FILM · 2:48</p>
                  <p className="mt-2 text-sm text-chalk-dim">
                    All three sciences, recorded in the headset for the Meta VR Start Developer Competition 2026.
                  </p>
                </figcaption>
              </figure>
            </ScrollReveal>
            {films.lab360.enabled && (
              <ScrollReveal>
                <Lab360 {...films.lab360} />
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative bg-void py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <Eyebrow>INSIDE THE LAB</Eyebrow>
                <h2 className="max-w-2xl text-3xl font-extrabold tracking-tightest text-chalk md:text-4xl">
                  Real screens, captured in the headset.
                </h2>
              </div>

              <div className="flex w-fit flex-shrink-0 flex-wrap gap-2 rounded-full border border-edge bg-panel p-1.5" role="group" aria-label="Filter by science">
                {['All', 'Chemistry', 'Physics', 'Biology'].map((subject) => (
                  <button
                    key={subject}
                    type="button"
                    aria-pressed={activeSubject === subject}
                    onClick={() => setActiveSubject(subject)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                      activeSubject === subject
                        ? 'border-edge-bright bg-white text-uv shadow-sm'
                        : 'border-transparent text-muted hover:bg-white/50 hover:text-chalk'
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredScreens.map((shot) => (
                <motion.div
                  key={shot.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <figure className="lift-hover flex h-full flex-col overflow-hidden rounded-3xl border border-edge bg-white shadow-sm hover:shadow-lg">
                    <div className="relative aspect-video bg-panel">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="flex flex-1 flex-col px-6 py-5">
                      <div className="mb-2 flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${SUBJECT[shot.subject].dot}`} />
                        <span className="text-[10px] font-bold uppercase tracking-wide text-chalk">{shot.title}</span>
                      </div>
                      <p className="flex-1 text-sm leading-relaxed text-muted">{shot.caption}</p>
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
        <section className="relative overflow-hidden border-t border-edge bg-panel py-24 md:py-32">
          <div className="relative mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tightest md:text-4xl">
              <span className="text-chalk">Something missing </span>
              <span className="gradient-text">from that list?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              That&apos;s the useful conversation. Tell us which practical your department can&apos;t reliably run,
              and it goes to the front of the queue.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-glow inline-block rounded-full bg-uv px-10 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-uv-bright hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
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
