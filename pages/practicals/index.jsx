import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import Seo, { SITE } from '../../components/Seo';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import ScrollReveal from '../../components/ScrollReveal';
import { practicals, SUBJECTS } from '../../lib/practicals';

const DOT = { Chemistry: 'bg-uv', Physics: 'bg-physics', Biology: 'bg-biology' };

export default function Practicals() {
  const list = {
    '@type': 'ItemList',
    name: 'LaboraVR practicals',
    itemListElement: practicals.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE}/practicals/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <>
      <Seo
        title="IGCSE practicals in VR — LaboraVR"
        description="Cation tests, flame tests, the pendulum, reading at eye level, food tests and osmosis: what each IGCSE practical expects, and how it runs in the LaboraVR headset."
        jsonLd={[list]}
      />
      <Navbar />

      <PageHeader
        eyebrow="PRACTICALS"
        title="One practical at a time."
        intro="What each practical asks of a student, what an examiner expects to read, and how it runs in the headset. For students preparing for IGCSE practical papers."
      />

      <section className="bg-void pb-24">
        <div className="mx-auto max-w-6xl px-6">
          {Object.keys(SUBJECTS).map((subject) => (
            <div key={subject} className="mb-14 last:mb-0">
              <ScrollReveal>
                <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h2 className="flex items-center gap-3 text-2xl font-extrabold tracking-tightest text-chalk md:text-3xl">
                    <span className={`h-2.5 w-2.5 rounded-full ${DOT[subject]}`} />
                    {subject}
                  </h2>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-muted">
                    {SUBJECTS[subject].syllabus.toUpperCase()} · {SUBJECTS[subject].status.toUpperCase()}
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid gap-6 sm:grid-cols-2">
                {practicals
                  .filter((p) => p.subject === subject)
                  .map((p) => (
                    <ScrollReveal key={p.slug}>
                      <Link
                        href={`/practicals/${p.slug}`}
                        className="lift-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-edge bg-white shadow-sm hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
                      >
                        <div className="relative aspect-video bg-panel">
                          <Image
                            src={p.image}
                            alt={p.imageAlt}
                            fill
                            sizes="(min-width: 640px) 560px, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6 md:p-8">
                          <h3 className="mb-2 text-xl font-bold leading-snug text-chalk group-hover:text-uv">{p.title}</h3>
                          <p className="flex-1 leading-relaxed text-muted">{p.summary}</p>
                          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-uv">
                            Read the practical <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
              </div>
            </div>
          ))}

          <p className="mt-16 text-sm text-muted">
            For students preparing for IGCSE practical papers. Not affiliated with or endorsed by Cambridge.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
