import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Lightbulb, Play, Wrench } from 'lucide-react';

import Seo, { SITE } from '../../components/Seo';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import FilmModal from '../../components/FilmModal';
import { PracticalPicture } from '../../components/PracticalDiagram';
import { practicals, getPractical, SUBJECTS } from '../../lib/practicals';

const TONE = {
  Chemistry: { dot: 'bg-uv', text: 'text-uv', soft: 'border-uv/20 bg-uv-dim' },
  Physics: { dot: 'bg-physics', text: 'text-physics', soft: 'border-physics/20 bg-physics/10' },
  Biology: { dot: 'bg-biology', text: 'text-biology', soft: 'border-biology/20 bg-biology/10' },
};

function Eyebrow({ children }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-uv">
      <span className="h-px w-8 bg-uv/50" />
      {children}
    </p>
  );
}

export default function PracticalPage({ slug }) {
  const p = getPractical(slug);
  const [filmOpen, setFilmOpen] = useState(false);
  const subject = SUBJECTS[p.subject];
  const tone = TONE[p.subject];
  // Same science first, then the rest.
  const others = [
    ...practicals.filter((o) => o.slug !== p.slug && o.subject === p.subject),
    ...practicals.filter((o) => o.subject !== p.subject),
  ].slice(0, 3);
  const url = `${SITE}/practicals/${p.slug}`;

  const jsonLd = [
    {
      '@type': 'LearningResource',
      '@id': `${url}#practical`,
      name: p.title,
      description: p.summary,
      url,
      ...(p.image ? { image: `${SITE}${p.image}` } : {}),
      inLanguage: 'en-GB',
      learningResourceType: 'Practical activity',
      educationalLevel: 'IGCSE (ages 14 to 16)',
      about: { '@type': 'Thing', name: p.subject },
      provider: { '@id': `${SITE}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Practicals', item: `${SITE}/practicals` },
        { '@type': 'ListItem', position: 2, name: p.short, item: url },
      ],
    },
  ];

  return (
    <>
      <Seo title={`${p.title} — LaboraVR`} description={p.summary} image={p.image || undefined} jsonLd={jsonLd} />
      <Navbar />

      {/* Header */}
      <section className="relative bg-void pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-6">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <Link href="/practicals" className="inline-flex items-center gap-1.5 hover:text-uv">
              <ArrowLeft size={14} /> All practicals
            </Link>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[6fr_5fr]">
            <div>
              <p className="mb-5 flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-[0.18em]">
                <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 ${tone.soft} ${tone.text}`}>
                  <span className={`h-2 w-2 rounded-full ${tone.dot}`} />
                  {p.subject.toUpperCase()}
                </span>
                <span className="text-muted">{subject.syllabus.toUpperCase()}</span>
              </p>
              <h1 className="text-3xl font-extrabold leading-[1.05] tracking-tightest text-chalk md:text-5xl">{p.title}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-chalk-dim">{p.summary}</p>
            </div>
            <div className="card-shadow relative aspect-video overflow-hidden rounded-3xl border border-edge">
              <PracticalPicture practical={p} priority sizes="(min-width: 1024px) 500px, 100vw" />
              <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-white backdrop-blur-sm">
                IN LABORAVR · {subject.status.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The science */}
      <section className="bg-void py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <Eyebrow>THE PRACTICAL</Eyebrow>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tightest text-chalk md:text-4xl">What you do</h2>
            <p className="text-lg leading-relaxed text-chalk-dim">{p.aim}</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-edge">
              <table className="w-full min-w-[520px] text-left text-sm">
                <caption className="bg-panel px-5 py-3 text-left font-mono text-[10px] tracking-[0.18em] text-muted">
                  {p.tableCaption.toUpperCase()}
                </caption>
                <thead className="bg-panel text-chalk">
                  <tr>
                    {p.table.head.map((h) => (
                      <th key={h} scope="col" className="border-t border-edge px-5 py-3 font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {p.table.rows.map((row) => (
                    <tr key={row[0]} className="border-t border-edge align-top">
                      {row.map((cell, j) =>
                        j === 0 ? (
                          <th key={j} scope="row" className="px-5 py-3 font-semibold text-chalk">
                            {cell}
                          </th>
                        ) : (
                          <td key={j} className="px-5 py-3 leading-relaxed text-chalk-dim">
                            {cell}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 flex gap-4 rounded-2xl border border-warm/20 bg-warm-bg p-6">
              <Lightbulb size={20} className="mt-0.5 flex-shrink-0 text-warm" />
              <div>
                <p className="mb-1 font-mono text-[10px] tracking-[0.18em] text-warm">IN THE EXAM</p>
                <p className="leading-relaxed text-chalk">{p.examTip}</p>
              </div>
            </div>
          </ScrollReveal>

          {p.tools?.length > 0 && (
            <ScrollReveal>
              <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-edge bg-panel p-6">
                <Wrench size={18} className="text-uv" />
                <p className="mr-2 font-semibold text-chalk">Practise it here, free:</p>
                {p.tools.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-uv/30 bg-white px-4 py-2 text-sm font-semibold text-uv transition-colors hover:bg-uv hover:text-white"
                  >
                    {t.label} <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* In LaboraVR */}
      <section className="border-y border-edge bg-panel py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[5fr_6fr]">
            <ScrollReveal>
              <div>
                <Eyebrow>IN LABORAVR</Eyebrow>
                <h2 className="mb-8 text-3xl font-extrabold tracking-tightest text-chalk md:text-4xl">
                  Do it with your own hands.
                </h2>
                <ul>
                  {p.inLab.map((line) => (
                    <li key={line} className="flex items-start gap-3 border-b border-edge py-4 first:border-t">
                      <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border ${tone.soft}`}>
                        <Check size={12} strokeWidth={3} className={tone.text} />
                      </span>
                      <span className="leading-relaxed text-chalk">{line}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setFilmOpen(true)}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
                >
                  <Play size={16} className="fill-current" /> Watch the film · 2:48
                </button>
              </div>
            </ScrollReveal>

            {p.gallery.length > 0 && (
              <div className="grid gap-6">
                {p.gallery.map((g) => (
                  <ScrollReveal key={g.src}>
                    <figure className="card-shadow overflow-hidden rounded-3xl border border-edge bg-white">
                      <div className="relative aspect-video">
                        <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
                      </div>
                      <figcaption className="px-6 py-4 text-sm text-muted">{g.caption}</figcaption>
                    </figure>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* More practicals */}
      <section className="bg-void py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold tracking-tightest text-chalk md:text-3xl">More practicals</h2>
            <Link href="/practicals" className="inline-flex items-center gap-2 text-sm font-semibold text-uv hover:text-uv-bright">
              All practicals <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/practicals/${o.slug}`}
                className="lift-hover group flex flex-col overflow-hidden rounded-2xl border border-edge bg-white shadow-sm"
              >
                <div className="relative aspect-video bg-panel">
                  <PracticalPicture practical={o} sizes="(min-width: 768px) 360px, 100vw" />
                </div>
                <div className="p-5">
                  <p className="mb-1 flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-muted">
                    <span className={`h-2 w-2 rounded-full ${TONE[o.subject].dot}`} />
                    {o.subject.toUpperCase()}
                  </p>
                  <p className="font-bold leading-snug text-chalk group-hover:text-uv">{o.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tightest md:text-4xl">Want this in your school?</h2>
          <p className="mt-5 leading-relaxed text-white/70">
            We are preparing our first school pilot. The first departments decide what gets built next.
          </p>
          <Link
            href="/contact"
            className="btn-glow mt-8 inline-block rounded-full bg-uv px-8 py-4 font-semibold text-white transition-colors hover:bg-uv-bright"
          >
            Join the pilot
          </Link>
          <p className="mt-10 text-xs text-white/50">
            For students preparing for IGCSE practical papers. Not affiliated with or endorsed by Cambridge.
          </p>
        </div>
      </section>

      <FilmModal open={filmOpen} onClose={() => setFilmOpen(false)} />
      <Footer />
    </>
  );
}

export function getStaticPaths() {
  return { paths: practicals.map((p) => ({ params: { slug: p.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
