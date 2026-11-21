import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Seo, { SITE } from './Seo';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHeader from './PageHeader';

// The frame every free tool under /tools shares: header, the tool, related practicals, a short line about the
// headset, and the not-affiliated line. Tools run entirely in the visitor's browser and send nothing anywhere.
export default function ToolPage({ slug, title, metaTitle, description, eyebrow = 'FREE TOOL', intro, related = [], children }) {
  const app = {
    '@type': 'WebApplication',
    name: title,
    description,
    url: `${SITE}/tools/${slug}`,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any (runs in the browser)',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    provider: { '@id': `${SITE}/#organization` },
  };

  return (
    <>
      <Seo title={metaTitle || `${title} — LaboraVR`} description={description} jsonLd={[app]} />
      <Navbar />
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} />

      <section className="bg-void pb-20">
        <div className="mx-auto max-w-5xl px-6">{children}</div>
      </section>

      <section className="border-t border-edge bg-panel py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
          {related.length > 0 && (
            <div>
              <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-uv">THE PRACTICALS BEHIND IT</p>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="inline-flex items-center gap-2 font-semibold text-chalk hover:text-uv">
                      {r.label} <ArrowRight size={14} className="text-uv" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-uv">IN THE HEADSET</p>
            <p className="leading-relaxed text-chalk-dim">
              In LaboraVR the student does the practical with their own hands, says what they saw, and is marked like an
              examiner.{' '}
              <Link href="/labs" className="font-semibold text-uv hover:text-uv-bright">
                See the labs
              </Link>{' '}
              or{' '}
              <Link href="/contact" className="font-semibold text-uv hover:text-uv-bright">
                join the pilot
              </Link>
              .
            </p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-5xl px-6 text-xs text-muted">
          Runs in your browser; nothing you type is sent anywhere. For students preparing for IGCSE practical papers. Not
          affiliated with or endorsed by Cambridge.
        </p>
      </section>

      <Footer />
    </>
  );
}

// A row of choice chips (one choice, or none). Used by the tools for picking observations.
export function Chips({ label, options, value, onChange, render = (o) => o, swatch }) {
  return (
    <fieldset className="mb-6">
      <legend className="mb-3 font-semibold text-chalk">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o;
          return (
            <button
              key={o}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(on ? null : o)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv ${
                on ? 'border-uv bg-uv text-white' : 'border-edge bg-white text-chalk hover:border-uv/40'
              }`}
            >
              {swatch && swatch[o] && (
                <span className="h-3 w-3 rounded-full border border-black/10" style={{ background: swatch[o] }} />
              )}
              {render(o)}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
