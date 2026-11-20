import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, FileText, ShoppingBasket, RotateCcw, Eye, Table2, Sparkles } from 'lucide-react';

import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import TitrationDemo from '../components/TitrationDemo';
import PrecipitateDemo from '../components/PrecipitateDemo';
import FilmModal from '../components/FilmModal';

/*
  Home page. Every claim here comes from the owner's competition entry (IGCSEVRLab docs/COMPETITION_STORY.md)
  or from the build itself. See DESIGN.md §7 before changing any wording.
*/

const steps = [
  {
    key: 'see',
    word: 'See it.',
    title: 'Do the practical with your own hands.',
    body:
      'No controllers. Pinch a tube, grip a bottle, pour the reagent. Looked away at the wrong moment? The headset knows where you were looking, and offers the change again, slowly.',
    image: '/home/hero-pour.jpg',
    alt: 'Gloved hands in the headset pouring sodium hydroxide into a test tube of copper(II) ions',
  },
  {
    key: 'say',
    word: 'Say it.',
    title: 'Describe what you saw, out loud.',
    body:
      'After each test the student says what they saw, in their own words, the way they would write it in the exam. The headset writes it down and turns it into claims.',
    image: '/home/examiner.jpg',
    alt: 'The examiner panel in the LaboraVR lab, asking the student to speak their observation',
  },
  {
    key: 'score',
    word: 'Score it.',
    title: 'Get marked like an examiner.',
    body:
      '“White precipitate” scores. “It went cloudy” does not, and the student is told why. Every mark comes from rules a teacher wrote, point by point.',
    image: '/competition/01-say-what-you-saw.jpg',
    alt: 'A marked observation: what you saw got, colour nearly, in excess missing',
  },
];

const sciences = [
  {
    name: 'Chemistry',
    tag: 'CAMBRIDGE IGCSE CHEMISTRY 0620',
    dot: 'bg-uv',
    image: '/competition/00-pour.jpg',
    alt: 'A cation test at the LaboraVR chemistry bench',
    line: 'Qualitative analysis with a spoken examiner, an unknown salt every day, and reactions followed with a thermometer and a gas syringe.',
    facts: [['12', 'cation tests'], ['8', 'anion tests'], ['6', 'gas tests'], ['5', 'flame tests']],
  },
  {
    name: 'Physics',
    tag: 'FIRST PRACTICALS BUILT',
    dot: 'bg-physics',
    image: '/home/pendulum-stopwatch.jpg',
    alt: 'Timing a pendulum on the bench stopwatch, with the results table',
    line: 'Time a pendulum at five lengths, read a measuring cylinder at eye level, line up pins through a glass block.',
  },
  {
    name: 'Biology',
    tag: 'FIRST PRACTICALS BUILT',
    dot: 'bg-biology',
    image: '/competition/10-kitchen-starch.jpg',
    alt: 'Testing bread from the kitchen for starch at the biology bench',
    line: 'Test food from your kitchen for starch, sugar and protein, and measure potato strips in sugar solutions.',
  },
];

const features = [
  {
    icon: FileText,
    title: 'Bring the question you are stuck on',
    body: 'Hold a practical question from a worksheet or past paper up to the headset. The lab opens the practical that answers it.',
    image: '/competition/04-exam-paper.jpg',
    alt: 'The Bring your question panel, with a worksheet held up to the headset camera',
  },
  {
    icon: ShoppingBasket,
    title: 'From your kitchen',
    body: 'Show the headset a packet of table salt, or some bread. The lab reads it and builds the test around it.',
    image: '/competition/10-kitchen-starch.jpg',
    alt: 'A starch test on bread, started from a packet shown to the headset',
  },
  {
    icon: RotateCcw,
    title: 'You missed it? Rewind',
    body: 'Looking at the board when the precipitate formed? The change is offered to you again, slowly.',
    image: '/competition/05-missed-it.jpg',
    alt: 'The You missed it panel, offering to show the change again slowly',
  },
  {
    icon: Eye,
    title: 'Read at eye level',
    body: 'The headset knows where your eye is, so a measuring cylinder read from above is wrong, as in a real lab.',
    image: '/home/eye-level.jpg',
    alt: 'A measuring cylinder magnified, telling the student their eye is too high',
  },
];

const moreFeatures = [
  { icon: Table2, title: 'Your own table, your own graph', body: 'Thermometers, stopwatches, rulers and a gas syringe are read from the apparatus. Each reading goes into the student’s own table and graph.' },
  { icon: Sparkles, title: 'The next practical comes from your mistakes', body: 'The AI Practical Architect designs the next practical around the marks you lost. A checker tests every design against the teacher’s specification first.' },
  { icon: Eye, title: 'On your own desk', body: 'In mixed reality the bench stands on the student’s real desk, found by the headset. With no desk marked, it stands at desk height in any room.' },
];

const proof = [
  ['656', 'automated tests, all passing'],
  ['192 / 193', 'complete answers given full marks'],
  ['71 / 72', 'wrong answers marked wrong'],
  ['72', 'frames a second in the labs'],
];

const specs = [
  { k: 'HARDWARE', v: 'A standalone headset. No PC, no cabling, no dedicated room. Tested on Meta Quest 3S.' },
  { k: 'CONNECTIVITY', v: 'Most practicals work with no internet. The features that see, hear or read need a connection. Results stay on the headset.' },
  { k: 'ACCOUNTS', v: 'No sign-in, no account, no name and no face. A student puts on the headset and starts.' },
  { k: 'CURRICULUM', v: 'Every reaction, observation and mark comes from a specification written by a teacher, so new practicals can be added without a developer.' },
];

function Eyebrow({ children, dark = false }) {
  return (
    <p className={`mb-5 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] ${dark ? 'text-uv-dim' : 'text-uv'}`}>
      <span className={`h-px w-8 ${dark ? 'bg-uv-dim' : 'bg-uv'}`} />
      {children}
    </p>
  );
}

export default function Home() {
  const [filmOpen, setFilmOpen] = useState(false);
  const [step, setStep] = useState(0);
  const current = steps[step];

  return (
    <>
      <Seo
        title="LaboraVR — See it, say it, score it"
        description="A science lab for Meta Quest. Students do chemistry, physics and biology practicals with their own hands, say what they saw, and are marked like an examiner."
      />
      <Navbar dark />
      <FilmModal open={filmOpen} onClose={() => setFilmOpen(false)} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/home/hero-pour.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[70%_center] opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

        <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 pb-16 pt-32 md:pt-36">
          <div className="max-w-2xl">
            <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-white/80 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ochre opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ochre" />
              </span>
              SUBMITTED TO THE META VR START DEVELOPER COMPETITION 2026
            </p>

            <h1 className="text-[2.75rem] font-extrabold leading-[0.98] tracking-tightest sm:text-6xl md:text-[5.5rem]">
              See it.
              <br />
              Say it.
              <br />
              <span className="text-uv-dim">Score it.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
              A science lab for Meta Quest. Students do the practical with their own hands, say what they saw, and are
              marked like an examiner.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setFilmOpen(true)}
                className="group inline-flex items-center gap-3 rounded-full bg-uv py-2 pl-2 pr-6 text-base font-semibold text-white shadow-lg transition-colors hover:bg-uv-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-uv transition-transform group-hover:scale-105">
                  <Play size={16} className="ml-0.5 fill-current" />
                </span>
                Watch the film · 2:48
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Join the pilot <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <dl className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              ['SCIENCES', 'Chemistry · Physics · Biology'],
              ['HANDS', 'Bare hands, no controllers'],
              ['MARKS', 'From rules a teacher wrote'],
            ].map(([k, v]) => (
              <div key={k} className="bg-ink/80 px-5 py-4 backdrop-blur">
                <dt className="font-mono text-[10px] tracking-[0.18em] text-white/50">{k}</dt>
                <dd className="mt-1 text-sm font-medium text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── The problem ──────────────────────────────────────── */}
      <section className="bg-void py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <Eyebrow>THE PROBLEM</Eyebrow>
            <h2 className="max-w-4xl text-3xl font-extrabold leading-[1.05] tracking-tightest text-chalk md:text-6xl">
              Every year, students describe a colour <span className="gradient-text">they have never seen.</span>
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              ['The exam', 'Thousands of students sit a written exam on practicals they have never done. They are asked what they would see when two solutions are mixed.'],
              ['The lab', 'Chemicals and equipment cost money and run out. One working lab serves hundreds of students, so practical time is rationed, and most of it is spent watching.'],
              ['The marks', 'Students lose marks not because they do not know the chemistry, but because they have never seen it, and never had to put it into an examiner’s words.'],
            ].map(([title, text], i) => (
              <ScrollReveal key={title}>
                <p className="font-mono text-sm tabular-nums text-warm">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-bold text-chalk">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works: See / Say / Score ─────────────────── */}
      <section className="border-y border-edge bg-panel py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <Eyebrow>HOW IT WORKS</Eyebrow>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.05] tracking-tightest text-chalk md:text-5xl">
              The headset fixes the seeing. <span className="gradient-text">The examiner fixes the words.</span>
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.9fr_1.4fr]">
            <div role="tablist" aria-label="How LaboraVR works" className="flex flex-col gap-3">
              {steps.map((s, i) => {
                const active = i === step;
                return (
                  <button
                    key={s.key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls="how-panel"
                    onClick={() => setStep(i)}
                    className={`rounded-2xl border p-6 text-left transition-all ${
                      active ? 'border-uv bg-void shadow-glow-md' : 'border-edge bg-transparent hover:border-edge-bright hover:bg-void/60'
                    }`}
                  >
                    <p className={`text-2xl font-extrabold tracking-tightest md:text-3xl ${active ? 'text-uv' : 'text-chalk'}`}>{s.word}</p>
                    <p className="mt-1 font-semibold text-chalk">{s.title}</p>
                    {active && <p className="mt-3 leading-relaxed text-muted">{s.body}</p>}
                  </button>
                );
              })}
            </div>

            <figure id="how-panel" role="tabpanel" className="card-shadow overflow-hidden rounded-3xl border border-edge bg-ink lg:sticky lg:top-28">
              <Image
                key={current.image}
                src={current.image}
                alt={current.alt}
                width={1920}
                height={1080}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="aspect-video w-full object-cover"
              />
              <figcaption className="flex items-center justify-between px-5 py-3 font-mono text-[10px] tracking-[0.16em] text-white/60">
                <span>IN THE HEADSET · NOT A MOCK-UP</span>
                <span>{step + 1} / {steps.length}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Models perceive. Rules mark. ────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <ScrollReveal>
            <Eyebrow dark>TRUST</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tightest md:text-5xl">
              Models perceive. <span className="text-uv-dim">Rules mark.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              AI hears what the student says and reads what they show the camera. It never decides the science. Every
              reaction, observation and mark comes from rules written by a teacher, so a wrong picture of a reaction
              can never teach a wrong answer.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-white/50">
              Speech recognition writes “access” for “excess” and “president” for “precipitate”. The examiner was tested
              on 432 realistic student answers before the competition entry.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
            {proof.map(([n, label]) => (
              <div key={label} className="bg-ink-2 p-6 md:p-8">
                <p className="font-mono text-3xl font-bold tabular-nums leading-none text-ochre md:text-4xl">{n}</p>
                <p className="mt-3 text-sm leading-snug text-white/70">{label}</p>
              </div>
            ))}
            <p className="col-span-2 bg-ink-2 px-6 py-4 font-mono text-[10px] tracking-[0.16em] text-white/40 md:px-8">
              COUNTED 17 NOVEMBER 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── Three sciences ──────────────────────────────────── */}
      <section className="bg-void py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Eyebrow>THE LABS</Eyebrow>
                <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.05] tracking-tightest text-chalk md:text-5xl">
                  Three sciences. <span className="gradient-text">One headset.</span>
                </h2>
              </div>
              <Link href="/labs" className="inline-flex items-center gap-2 font-semibold text-uv hover:text-uv-bright">
                Every practical <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {sciences.map((s, i) => (
              <ScrollReveal key={s.name} className={i === 0 ? 'lg:row-span-2' : ''}>
                <Link
                  href="/labs"
                  className="lift-hover card-shadow group flex h-full flex-col overflow-hidden rounded-3xl border border-edge bg-void"
                >
                  <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[4/3] lg:aspect-auto lg:flex-1' : 'aspect-[16/8]'}`}>
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-7">
                    <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-muted">
                      <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                      {s.tag}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-chalk">{s.name}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{s.line}</p>
                    {s.facts && (
                      <dl className="mt-6 grid grid-cols-4 gap-3 border-t border-edge pt-5">
                        {s.facts.map(([n, label]) => (
                          <div key={label}>
                            <dt className="font-mono text-2xl font-bold tabular-nums leading-none text-warm">{n}</dt>
                            <dd className="mt-1 text-[11px] leading-tight text-muted">{label}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What only a headset can do ─────────────────────── */}
      <section className="border-t border-edge bg-panel py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <Eyebrow>WHAT ONLY A HEADSET CAN DO</Eyebrow>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.05] tracking-tightest text-chalk md:text-5xl">
              Not a video of a lab. <span className="gradient-text">A lab that watches you work.</span>
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <ScrollReveal key={f.title}>
                <figure className="card-shadow flex h-full flex-col overflow-hidden rounded-3xl border border-edge bg-void">
                  <Image
                    src={f.image}
                    alt={f.alt}
                    width={1600}
                    height={1067}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <figcaption className="flex flex-1 gap-4 p-6 md:p-7">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-uv-dim text-uv">
                      <f.icon size={18} />
                    </span>
                    <span>
                      <span className="block text-lg font-bold text-chalk">{f.title}</span>
                      <span className="mt-1 block leading-relaxed text-muted">{f.body}</span>
                    </span>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {moreFeatures.map((f) => (
              <ScrollReveal key={f.title}>
                <div className="h-full rounded-3xl border border-edge bg-void p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-uv-dim text-uv">
                    <f.icon size={18} />
                  </span>
                  <p className="mt-5 text-lg font-bold text-chalk">{f.title}</p>
                  <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Live demos ──────────────────────────────────────── */}
      <section className="bg-void py-24 md:py-32">
        <div className="mx-auto max-w-[85rem] px-6">
          <ScrollReveal>
            <Eyebrow>TRY IT HERE</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.05] tracking-tightest text-chalk md:text-5xl">
              This is the chemistry, <span className="gradient-text">not a video of it.</span>
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col">
              <p className="mb-8 text-lg leading-relaxed text-muted lg:min-h-[90px]">
                A strong acid–strong base titration, solved live from the same equations the headset uses. Overshoot it
                and see what a spoiled titration costs.
              </p>
              <TitrationDemo />
            </div>
            <div className="flex flex-col">
              <p className="mb-8 text-lg leading-relaxed text-muted lg:min-h-[90px]">
                A cation test. Add the drops, watch the precipitate, and compare it with the wording the mark scheme
                expects.
              </p>
              <PrecipitateDemo />
            </div>
          </div>
          <p className="mt-8 text-center font-mono text-[10px] tracking-[0.15em] text-muted lg:text-left">
            BROWSER PREVIEWS · THE HEADSET VERSION ADDS THE GLASSWARE, THE HANDS AND THE EXAMINER
          </p>
        </div>
      </section>

      {/* ── Founder ─────────────────────────────────────────── */}
      <section className="border-y border-edge bg-panel py-24 md:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[220px_1fr] md:gap-14">
          <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full border-4 border-void shadow-glow-lg md:w-full">
            <Image
              src="/images/Founder.jpg"
              alt="Portrait of Jeffery Nketiah, founder of LaboraVR"
              fill
              sizes="220px"
              className="object-cover object-[center_15%]"
            />
          </div>
          <ScrollReveal>
            <blockquote className="text-2xl font-bold leading-snug tracking-tightest text-chalk md:text-3xl">
              “My students in Accra sat exams on experiments they had never done. No student should have to describe a
              colour they have never seen.”
            </blockquote>
            <p className="mt-6 font-semibold text-chalk">Jeffery Nketiah, founder</p>
            <p className="mt-1 text-muted">
              Energy storage scientist and former IGCSE Chemistry and Physics teacher. Based in France.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-uv hover:text-uv-bright">
              Why LaboraVR exists <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Specification ───────────────────────────────────── */}
      <section className="bg-void py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <Eyebrow>FOR YOUR IT DEPARTMENT</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.05] tracking-tightest text-chalk md:text-5xl">
              What you will be asked.
            </h2>
          </ScrollReveal>
          <dl className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-edge bg-edge md:grid-cols-2">
            {specs.map((s) => (
              <div key={s.k} className="bg-void p-7 md:p-9">
                <dt className="font-mono text-[11px] tracking-[0.18em] text-uv">{s.k}</dt>
                <dd className="mt-3 text-lg leading-relaxed text-chalk-dim">{s.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted">
            What the app sends and keeps is set out on the{' '}
            <Link href="/privacy" className="text-uv underline hover:text-uv-bright">privacy page</Link>.
          </p>
        </div>
      </section>

      {/* ── Pilot CTA ───────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-36">
        <Image src="/competition/07-pendulum.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-mono text-[11px] tracking-[0.2em] text-uv-dim">PILOT · EARLY 2027</p>
          <h2 className="mt-6 text-3xl font-extrabold leading-[1.05] tracking-tightest md:text-6xl">
            Be one of the first schools.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            A pilot with a school is planned for early 2027. Tell us which practicals your students never get to do, and
            they go to the front of the queue.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-uv px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-uv-bright md:text-lg"
            >
              Join the pilot <ArrowRight size={18} />
            </Link>
            <button
              type="button"
              onClick={() => setFilmOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 md:text-lg"
            >
              <Play size={16} className="fill-current" /> Watch the film
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
