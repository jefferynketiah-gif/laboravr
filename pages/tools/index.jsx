import Link from 'next/link';
import { ArrowRight, FlaskConical, CheckCheck, LineChart } from 'lucide-react';

import Seo, { SITE } from '../../components/Seo';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import ScrollReveal from '../../components/ScrollReveal';

const TOOLS = [
  {
    href: '/tools/ion-identifier',
    icon: FlaskConical,
    subject: 'Chemistry',
    title: 'Ion identifier',
    body: 'Pick what you saw with sodium hydroxide, ammonia and the flame. The list narrows to the ions that fit, with the full observation for each.',
  },
  {
    href: '/tools/mark-my-observation',
    icon: CheckCheck,
    subject: 'Chemistry and biology',
    title: 'Mark my observation',
    body: 'Write what you would see in a test, and mark-scheme rules tick each point and say what is missing.',
  },
  {
    href: '/tools/pendulum-graph',
    icon: LineChart,
    subject: 'Physics',
    title: 'Pendulum graph',
    body: 'Enter five lengths and times. Get the period, T², the graph of T² against length, and its gradient.',
  },
];

export default function Tools() {
  const list = {
    '@type': 'ItemList',
    name: 'LaboraVR free tools',
    itemListElement: TOOLS.map((t, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}${t.href}`, name: t.title })),
  };

  return (
    <>
      <Seo
        title="Free IGCSE practical tools — LaboraVR"
        description="Free browser tools for IGCSE practicals: an ion identifier, an observation marker and a pendulum graph. No sign-up; nothing is sent anywhere."
        jsonLd={[list]}
      />
      <Navbar />
      <PageHeader
        eyebrow="FREE TOOLS"
        title="Practise without a headset."
        intro="Small tools for the practical papers, built on the same rules as the lab. Free, no sign-up, and they run in your browser."
      />
      <section className="bg-void pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {TOOLS.map((t) => (
            <ScrollReveal key={t.href}>
              <Link
                href={t.href}
                className="lift-hover group flex h-full flex-col rounded-3xl border border-edge bg-white p-8 shadow-sm hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-uv/20 bg-uv-dim">
                  <t.icon size={22} className="text-uv" />
                </span>
                <p className="mb-2 font-mono text-[10px] tracking-[0.18em] text-muted">{t.subject.toUpperCase()}</p>
                <h2 className="mb-3 text-xl font-bold text-chalk group-hover:text-uv">{t.title}</h2>
                <p className="flex-1 leading-relaxed text-muted">{t.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-uv">
                  Open the tool <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <p className="mx-auto mt-16 max-w-6xl px-6 text-sm text-muted">
          For students preparing for IGCSE practical papers. Not affiliated with or endorsed by Cambridge.
        </p>
      </section>
      <Footer />
    </>
  );
}
