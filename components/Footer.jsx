import Link from 'next/link';

const columns = [
  {
    heading: 'PRODUCT',
    links: [
      { href: '/labs', label: 'Labs' },
      { href: '/contact', label: 'Join the pilot' },
    ],
  },
  {
    heading: 'COMPANY',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-void border-t border-edge">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <p className="font-mono text-sm tracking-[0.15em] text-chalk mb-4">
              LABORAVR
            </p>
            <p className="text-muted max-w-xs leading-relaxed">
              Virtual reality science labs for African universities.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-5">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-muted hover:text-chalk transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-edge flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.15em] text-muted">
            © 2026 LABORAVR
          </p>
          <a
            href="mailto:hello@laboravr.com"
            className="font-mono text-[10px] tracking-[0.15em] text-muted hover:text-uv transition-colors"
          >
            HELLO@LABORAVR.COM
          </a>
        </div>
      </div>
    </footer>
  );
}