import Seo from '../components/Seo';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import GlowCard from '../components/GlowCard';

const principles = [
  {
    code: 'HONEST',
    title: 'We say what is built and what isn\u2019t',
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
    body: 'Nothing replaces a student\u2019s hands on real apparatus. This is for the practicals that currently do not happen at all.',
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
  done:     { dot: 'bg-uv', line: 'bg-uv/50', label: 'text-uv', border: 'border-uv/30' },
  active:   { dot: 'bg-[#0D9488]', line: 'bg-[#0D9488]/30', label: 'text-[#0D9488]', border: 'border-[#0D9488]/30' },
  upcoming: { dot: 'bg-edge-bright', line: 'bg-edge', label: 'text-muted', border: 'border-edge' },
};

export default function About() {
  return (
    <>
      <Seo
        title="About — LaboraVR"
        description="Why LaboraVR exists: closing the practical science gap in schools and universities."
      />
      <Navbar />

      <PageHeader
        eyebrow="ABOUT"
        title="Bright students, empty benches."
        intro="Based in France. Built from years of teaching in Accra, and for students in Ghana and beyond."
      />

      {/* Full-bleed students photo */}
      <ScrollReveal>
        <section className="relative bg-void">
          <div className="relative h-[220px] md:h-[460px] w-full overflow-hidden rounded-b-2xl md:rounded-none">
            <video
              src="/lab-screens/hero-loop.webm"
              poster="/lab-screens/hero-loop-poster.jpg"
              aria-label="Hands at the LaboraVR chemistry bench in VR"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover saturate-[0.9] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
            {/* Overlay text */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <p className="font-mono text-[10px] tracking-[0.2em] text-uv/80 mb-2">FROM A CLASSROOM IN ACCRA</p>
              <p className="text-chalk text-xl md:text-3xl font-extrabold tracking-tightest max-w-md leading-tight">
                The students who deserve to do science.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Body copy */}
      <ScrollReveal>
        <section className="relative bg-void py-20 md:py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="grid-reticle absolute inset-0 opacity-20" />
          </div>
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-7 text-lg text-muted leading-relaxed">
              <p>
                Across schools and universities, science departments teach practical
                subjects to students who rarely get to practise. Equipment is
                expensive, reagents run out, and one working lab has to serve
                hundreds of people. What gets cut first is the part where a
                student actually handles the apparatus.
              </p>
              <p>
                Virtual reality does not fix an underfunded department. What it
                does is remove the two constraints that make practical work
                ration-able in the first place: cost per attempt, and risk. In a
                headset, an attempt costs nothing and a mistake harms no one, so
                a student can run the same titration until the method is theirs.
              </p>
              <p>
                Software that does this already exists. It is priced for
                institutions with budgets ours do not have, and built around
                syllabuses ours do not follow. LaboraVR is the version built
                here, for here.
              </p>
              <p className="text-chalk font-medium border-l-2 border-uv pl-6 py-1">
                It is early. We are looking for the first departments willing to
                shape it.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Founder */}
      <ScrollReveal>
        <section className="relative bg-void py-20 md:py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="grid-reticle absolute inset-0 opacity-20" />
          </div>
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-uv/10 text-uv font-semibold text-sm border border-uv/20 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-uv" />
                WHO IS BUILDING THIS
              </div>
            </div>

            <GlowCard innerClassName="p-8 md:p-12">
              <div className="flex flex-col sm:grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-10 items-center sm:items-start">
                {/* Photo */}
                <div className="relative w-[180px] sm:w-[200px] aspect-square flex-shrink-0 mx-auto sm:mx-0 overflow-hidden rounded-full border-4 border-white glow-ring-tight">
                  <Image
                    src="/images/Founder.jpg"
                    alt="Portrait of Jeffery Nketiah, founder of LaboraVR"
                    fill
                    sizes="(max-width: 640px) 180px, 200px"
                    className="object-cover object-[center_15%]"
                  />
                </div>

                {/* Bio */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tightest text-chalk mb-1">
                    Jeffery Nketiah
                  </h2>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-2">
                    FOUNDER
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.15em] text-muted border border-edge rounded-full px-3 py-1 mb-6">
                    BASED IN FRANCE
                  </span>
                  <p className="text-muted leading-relaxed max-w-lg mb-5">
                    I am an energy storage scientist. Before my research years, I
                    taught IGCSE Chemistry and Physics at an international school in
                    Accra, where I helped build the school&apos;s new science lab. Even
                    then, we rarely had the chemicals or the equipment for every
                    practical.
                  </p>
                  <p className="text-muted leading-relaxed max-w-lg mb-8">
                    I design the practicals and write the marking rules myself. If
                    you teach science, in Ghana or anywhere else, I&apos;d rather hear
                    what you actually need than guess at it.
                  </p>
                  {/* Social stubs */}
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/jefferynketiah20"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] tracking-[0.15em] text-muted hover:text-uv border border-edge hover:border-uv/40 px-3 py-2 rounded-lg transition-colors"
                    >
                      LINKEDIN
                    </a>
                    <a
                      href="mailto:hello@laboravr.com"
                      className="font-mono text-[10px] tracking-[0.15em] text-muted hover:text-uv border border-edge hover:border-uv/40 px-3 py-2 rounded-lg transition-colors"
                    >
                      EMAIL
                    </a>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </section>
      </ScrollReveal>

      {/* Roadmap */}
      <ScrollReveal>
        <section className="relative bg-void py-20 md:py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="grid-reticle absolute inset-0 opacity-20" />
          </div>
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-uv/10 text-uv font-semibold text-sm border border-uv/20 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-uv" />
                ROADMAP
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest leading-[1.05] mb-16">
              <span className="text-chalk">What&apos;s built. </span>
              <span className="gradient-text">What&apos;s next.</span>
            </h2>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical connector */}
              <div className="absolute left-[9px] top-5 bottom-5 w-px bg-gradient-to-b from-uv via-edge to-transparent" />

              <div className="space-y-0">
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
                      {/* Dot */}
                      <div className="relative flex-shrink-0 mt-1">
                        <div className={`w-[18px] h-[18px] rounded-full border-2 border-void flex items-center justify-center ${s.dot}`} />
                      </div>

                      {/* Content */}
                      <div className={`flex-1 pb-10 border-b last:border-0 ${
                        item.status === 'upcoming' ? 'border-edge' : 'border-edge'
                      }`}>
                        <div className="flex flex-wrap items-baseline gap-3 mb-2">
                          <span className={`font-mono text-[9px] tracking-[0.18em] ${s.label}`}>
                            {item.period}
                          </span>
                          {item.status === 'done' && (
                            <span className="font-mono text-[9px] tracking-[0.15em] text-uv border border-uv/30 rounded px-2 py-0.5">
                              SUBMITTED BUILD
                            </span>
                          )}
                          {item.status === 'active' && (
                            <span className="font-mono text-[9px] tracking-[0.15em] text-[#0D9488] border border-[#0D9488]/30 rounded px-2 py-0.5 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
                              BEING PREPARED
                            </span>
                          )}
                        </div>
                        <h3 className={`text-xl font-bold tracking-tightest mb-2 ${
                          item.status === 'upcoming' ? 'text-chalk-dim' : 'text-chalk'
                        }`}>
                          {item.title}
                        </h3>
                        <p className="text-muted leading-relaxed max-w-xl">{item.desc}</p>
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
        <section className="bg-panel py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-uv/10 text-uv font-semibold text-sm border border-uv/20 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-uv" />
                HOW WE WORK
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest leading-[1.05] mb-16">
              <span className="gradient-text">Three things</span>
              <span className="text-chalk"> we hold to.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {principles.map((p, i) => (
                <motion.div
                  key={p.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <GlowCard innerClassName="p-8 h-full flex flex-col">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-4">
                      {p.code}
                    </p>
                    <h3 className="text-xl font-bold text-chalk mb-3 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-muted leading-relaxed flex-1">{p.body}</p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="relative bg-void py-24 md:py-32 overflow-hidden">
          <div className="relative max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tightest leading-[1.05]">
              <span className="gradient-text">Work with us </span>
              <span className="text-chalk">early.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
              The first departments get the most say in what gets built.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-glow inline-block bg-uv text-white px-8 py-4 rounded-3xl font-semibold hover:bg-uv-bright transition-colors text-base md:text-lg"
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