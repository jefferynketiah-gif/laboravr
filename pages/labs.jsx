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
    colour: '#7C5CFF',
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
    colour: '#22D3EE',
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
    colour: '#E879F9',
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

export default function Labs() {
  return (
    <>
      <Seo
        title="The labs — LaboraVR"
        description="Chemistry, physics and biology practicals in virtual reality, built around existing university syllabuses."
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
          <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(124,92,255,0.07),transparent_60%)] blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[radial-gradient(circle,rgba(34,211,238,0.05),transparent_60%)] blur-3xl" />
          <div className="grid-reticle absolute inset-0 opacity-20" />
        </div>
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {labs.map((lab, i) => (
            <ScrollReveal key={lab.name}>
              <GlowCard innerClassName="p-0 overflow-hidden">
                <div className="grid md:grid-cols-[1fr_1fr]">
                  {/* Left: info */}
                  <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-edge">
                    {/* Icon + status */}
                    <div className="flex items-start justify-between mb-8">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                        style={{
                          background: `${lab.colour}18`,
                          borderColor: `${lab.colour}30`,
                        }}
                      >
                        <lab.icon
                          size={24}
                          strokeWidth={1.5}
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
                            color: lab.active ? '#7C5CFF' : '#6B6F80',
                            borderColor: lab.active ? 'rgba(124,92,255,0.35)' : '#1F2230',
                          }}
                        >
                          {lab.status}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk mb-4">
                      {lab.name}
                    </h2>
                    <p className="text-lg text-muted leading-relaxed">
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
                              borderColor: lab.active ? 'rgba(124,92,255,0.4)' : '#1F2230',
                              background:  lab.active ? 'rgba(124,92,255,0.12)' : 'transparent',
                            }}
                          >
                            {lab.active && (
                              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                                <path d="M1 3L3 5L7 1" stroke="#7C5CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk mb-10">
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

      {/* CTA */}
      <ScrollReveal>
        <section className="relative bg-panel py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_60%,rgba(124,92,255,0.1),transparent)]" />
          <div className="relative max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest leading-[1.05]">
              <span className="text-chalk">Something missing </span>
              <span className="gradient-text">from that list?</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
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