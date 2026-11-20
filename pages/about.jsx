import Seo from '../components/Seo';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, BatteryCharging, FlaskConical } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import GlowCard from '../components/GlowCard';

// The founder's path, in the order it happened. Facts only; no dates we haven't confirmed.
const path = [
  {
    icon: GraduationCap,
    label: 'THE CLASSROOM',
    title: 'Teaching in Accra',
    body: 'Taught IGCSE Chemistry and Physics at an international school, and helped build its new science lab. Even then, there were rarely the chemicals or the equipment for every practical.',
  },
  {
    icon: BatteryCharging,
    label: 'THE RESEARCH',
    title: 'Energy storage science',
    body: 'Years of laboratory research as an energy storage scientist: careful method, honest measurement, and results that have to hold up.',
  },
  {
    icon: FlaskConical,
    label: 'THE LAB',
    title: 'LaboraVR',
    body: 'Designs every practical and writes the marking rules himself, so the lab marks the way a careful examiner would.',
  },
];

const principles = [
  {
    code: 'HONEST',
    title: 'We say what is built and what isn’t',
    body: 'Nothing on this site is described as finished when it is still in development. A department head who finds out later stops trusting everything else we say.',
  },
  {
    code: 'LOCAL',
    title: 'Priced for the institutions we serve',
    body: 'Existing virtual lab software is priced for universities with budgets our institutions do not have. That gap is the reason this exists.',
  },
  {
    code: 'PRACTICAL',
    title: 'A supplement, not a replacement',
    body: 'Nothing replaces a student’s hands on real apparatus. This is for the practicals that currently do not happen at all.',
  },
];

const roadmap = [
  {
    status: 'done',
    period: 'NOVEMBER 2026',
    title: 'The lab, in the headset',
    desc: 'Chemistry, physics and biology practicals on Meta Quest, used with bare hands, with a spoken examiner for chemistry observations. Submitted to the Meta VR Start Developer Competition 2026.',
  },
  {
    status: 'active',
    period: 'EARLY 2027',
    title: 'A pilot with a school',
    desc: 'The first classes use LaboraVR, and their teachers decide what gets built next.',
  },
  {
    status: 'upcoming',
    period: '2027',
    title: 'Physics and biology in depth',
    desc: 'Working with physics and biology teachers to bring those two sciences to the depth the chemistry has now.',
  },
  {
    status: 'upcoming',
    period: 'MID-2027 · TARGET',
    title: 'Release to schools',
    desc: 'Through the Meta Horizon Store, for schools that already have headsets.',
  },
  {
    status: 'upcoming',
    period: 'AFTER THAT',
    title: 'Phones and ordinary computers',
    desc: 'The same practicals, examiner and rules, for the students who will never hold a headset.',
  },
];

const statusStyles = {
  done: { dot: 'bg-uv', label: 'text-uv' },
  active: { dot: 'bg-physics', label: 'text-physics' },
  upcoming: { dot: 'bg-edge-bright', label: 'text-muted' },
};

function Eyebrow({ children }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-uv">
      <span className="h-px w-8 bg-uv/50" />
      {children}
    </p>
  );
}

export default function About() {
  return (
    <>
      <Seo
        title="About — LaboraVR"
        description="Who builds LaboraVR and why: Jeffery Nketiah, energy storage scientist and former IGCSE Chemistry and Physics teacher in Accra. Based in France, for students in Ghana and beyond."
      />
      <Navbar />

      <PageHeader
        eyebrow="ABOUT"
        title="Bright students, empty benches."
        intro="Based in France. Built from years of teaching in Accra, and for students in Ghana and beyond."
      />

      {/* Founder: the main story of this page */}
      <section className="relative bg-void pb-20 pt-4 md:pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[5fr_7fr] md:gap-16">
          <ScrollReveal>
            <div className="card-shadow relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-edge md:max-w-none">
              <Image
                src="/images/Founder.jpg"
                alt="Portrait of Jeffery Nketiah, founder of LaboraVR"
                fill
                priority
                sizes="(min-width: 768px) 440px, 384px"
                className="object-cover object-[center_15%]"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <Eyebrow>WHO IS BUILDING THIS</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-tightest text-chalk md:text-5xl">Jeffery Nketiah</h2>
              <p className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-[0.18em]">
                <span className="text-uv">FOUNDER</span>
                <span className="text-edge-bright">/</span>
                <span className="text-muted">BASED IN FRANCE</span>
              </p>

              <blockquote className="mt-8 border-l-2 border-uv pl-6 text-xl font-bold leading-snug tracking-tightest text-chalk md:text-2xl">
                “My students in Accra sat exams on experiments they had never done. No student should have to describe a
                colour they have never seen.”
              </blockquote>

              <div className="mt-8 space-y-5 leading-relaxed text-chalk-dim">
                <p>
                  I am an energy storage scientist. Before my research years, I taught IGCSE Chemistry and Physics at an
                  international school in Accra, where I helped build the school&apos;s new science lab. Even then, we
                  rarely had the chemicals or the equipment for every practical.
                </p>
                <p>
                  I design the practicals and write the marking rules myself. If you teach science, in Ghana or anywhere
                  else, I&apos;d rather hear what you actually need than guess at it.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-glow inline-flex items-center rounded-full bg-uv px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-uv-bright"
                >
                  Get in touch
                </Link>
                <a
                  href="https://www.linkedin.com/in/jefferynketiah20"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-edge px-6 py-3 text-sm font-semibold text-chalk transition-colors hover:border-uv/40 hover:text-uv"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The path that led here */}
      <section className="border-y border-edge bg-panel py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <Eyebrow>HOW IT STARTED</Eyebrow>
            <h2 className="mb-12 max-w-2xl text-3xl font-extrabold tracking-tightest text-chalk md:text-4xl">
              A teacher&apos;s problem, a scientist&apos;s method.
            </h2>
          </ScrollReveal>
          <ol className="grid gap-4 md:grid-cols-3">
            {path.map((step, i) => (
              <motion.li
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <GlowCard className="h-full" innerClassName="p-8 h-full flex flex-col">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-uv/20 bg-uv-dim">
                      <step.icon size={20} className="text-uv" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-muted">0{i + 1}</span>
                  </div>
                  <p className="mb-2 font-mono text-[10px] tracking-[0.2em] text-uv">{step.label}</p>
                  <h3 className="mb-3 text-xl font-bold text-chalk">{step.title}</h3>
                  <p className="flex-1 leading-relaxed text-muted">{step.body}</p>
                </GlowCard>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why it exists */}
      <ScrollReveal>
        <section className="relative bg-void py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Eyebrow>WHY IT EXISTS</Eyebrow>
            <h2 className="mb-10 text-3xl font-extrabold tracking-tightest text-chalk md:text-4xl">
              The practical is the part that gets cut.
            </h2>
            <div className="space-y-7 text-lg leading-relaxed text-muted">
              <p>
                Across schools and universities, science departments teach practical subjects to students who rarely get
                to practise. Equipment is expensive, reagents run out, and one working lab has to serve hundreds of
                people. What gets cut first is the part where a student actually handles the apparatus.
              </p>
              <p>
                Virtual reality does not fix an underfunded department. What it does is remove the two constraints that
                make practical work rationed in the first place: cost per attempt, and risk. In a headset, an attempt
                costs nothing and a mistake harms no one, so a student can run the same test until the method is theirs.
              </p>
              <p>
                Software that does this already exists. It is priced for institutions with budgets ours do not have, and
                built around syllabuses our students do not sit. LaboraVR is built around the syllabus they do sit, by
                someone who has taught it.
              </p>
              <p className="border-l-2 border-uv py-1 pl-6 font-medium text-chalk">
                It is early. We are looking for the first departments willing to shape it.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Roadmap */}
      <ScrollReveal>
        <section className="relative border-t border-edge bg-panel py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <Eyebrow>ROADMAP</Eyebrow>
            <h2 className="mb-16 text-3xl font-extrabold leading-[1.05] tracking-tightest md:text-4xl">
              <span className="text-chalk">What&apos;s built. </span>
              <span className="gradient-text">What&apos;s next.</span>
            </h2>

            <div className="relative">
              <div className="absolute bottom-5 left-[9px] top-5 w-px bg-gradient-to-b from-uv via-edge to-transparent" />
              <div>
                {roadmap.map((item, i) => {
                  const s = statusStyles[item.status];
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="relative flex gap-8 pb-10 last:pb-0"
                    >
                      <div className="relative mt-1 flex-shrink-0">
                        <div className={`h-[18px] w-[18px] rounded-full border-2 border-panel ${s.dot}`} />
                      </div>
                      <div className="flex-1 border-b border-edge pb-10 last:border-0">
                        <div className="mb-2 flex flex-wrap items-baseline gap-3">
                          <span className={`font-mono text-[9px] tracking-[0.18em] ${s.label}`}>{item.period}</span>
                          {item.status === 'done' && (
                            <span className="rounded border border-uv/30 px-2 py-0.5 font-mono text-[9px] tracking-[0.15em] text-uv">
                              SUBMITTED BUILD
                            </span>
                          )}
                          {item.status === 'active' && (
                            <span className="flex items-center gap-1.5 rounded border border-physics/30 px-2 py-0.5 font-mono text-[9px] tracking-[0.15em] text-physics">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-physics" />
                              BEING PREPARED
                            </span>
                          )}
                        </div>
                        <h3
                          className={`mb-2 text-xl font-bold tracking-tightest ${
                            item.status === 'upcoming' ? 'text-chalk-dim' : 'text-chalk'
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="max-w-xl leading-relaxed text-muted">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Principles */}
      <ScrollReveal>
        <section className="bg-void py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Eyebrow>HOW WE WORK</Eyebrow>
            <h2 className="mb-16 text-3xl font-extrabold leading-[1.05] tracking-tightest md:text-4xl">
              <span className="gradient-text">Three things</span>
              <span className="text-chalk"> we hold to.</span>
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {principles.map((p, i) => (
                <motion.div
                  key={p.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <GlowCard innerClassName="p-8 h-full flex flex-col">
                    <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-uv">{p.code}</p>
                    <h3 className="mb-3 text-xl font-bold leading-snug text-chalk">{p.title}</h3>
                    <p className="flex-1 leading-relaxed text-muted">{p.body}</p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tightest md:text-4xl">
            Work with us early.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            The first departments get the most say in what gets built.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="btn-glow inline-block rounded-full bg-uv px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-uv-bright md:text-lg"
            >
              Join the pilot
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
