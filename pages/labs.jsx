import Seo from '../components/Seo';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FlaskConical, Zap, Microscope } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

const labs = [
  {
    icon: FlaskConical,
    name: 'Chemistry',
    status: 'IN DEVELOPMENT',
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
    status: 'PLANNED',
    thesis:
      'Apparatus that never drifts out of calibration, never goes missing, and lets a student repeat a measurement until the method makes sense.',
    practicals: [
      'Simple pendulum and determination of g',
      'Forces on an inclined plane',
      'Series and parallel circuits, Ohm\u2019s law',
      'Refraction and lens focal length',
    ],
  },
  {
    icon: Microscope,
    name: 'Biology',
    status: 'PLANNED',
    thesis:
      'Specimens and prepared slides cost money and run out. Here they don\u2019t, and dissection carries no ethical cost.',
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

      <section className="bg-void grain py-4 md:py-8">
        <div className="max-w-6xl mx-auto px-6">
          {labs.map((lab, i) => (
            <ScrollReveal key={lab.name}>
              <div className="border-t border-edge py-14 md:py-20 grid md:grid-cols-[1fr_1fr] gap-10 md:gap-16">
                <div>
                  <lab.icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-uv mb-7"
                  />
                  <div className="flex items-baseline gap-4 mb-5 flex-wrap">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk">
                      {lab.name}
                    </h2>
                    <span className="font-mono text-[10px] tracking-[0.18em] text-uv border border-uv/30 rounded px-2 py-1">
                      {lab.status}
                    </span>
                  </div>
                  <p className="text-lg text-muted leading-relaxed max-w-md">
                    {lab.thesis}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-6">
                    FIRST PRACTICALS
                  </p>
                  <ul className="space-y-0">
                    {lab.practicals.map((p, j) => (
                      <motion.li
                        key={p}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: j * 0.06 }}
                        className="text-chalk py-4 border-b border-edge first:border-t"
                      >
                        {p}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal>
        <section className="bg-panel py-24 md:py-32">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk leading-[1.05]">
              Something missing from that list?
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              That&apos;s the useful conversation. Tell us which practical your
              department can&apos;t reliably run, and it goes to the front of
              the queue.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-uv text-white px-8 py-4 rounded-md font-semibold hover:bg-[#6B4AF0] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
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