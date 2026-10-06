import Link from 'next/link';
import Wordmark from './Wordmark';

const PRODUCT_LINKS = [
  { href: '/labs',    label: 'Labs'          },
  { href: '/contact', label: 'Join the pilot' },
];

const COMPANY_LINKS = [
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jefferynketiah20',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-void overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-uv/50 to-transparent" />

      {/* Subtle aurora */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-48 bg-gradient-radial-uv opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <Wordmark size="lg" showCaret={false} />
            </div>
            <p className="text-muted max-w-xs leading-relaxed mb-6">
              Virtual reality science labs for schools and universities on Cambridge IGCSE and A Levels, with WASSCE coming next. Built in Ghana,
              for the students who deserve to do science.
            </p>
            {/* Ghana badge */}
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-uv border border-uv/30 rounded-full px-3 py-1.5">
              🇬🇭 BUILT IN GHANA
            </span>
          </div>

          {/* Product */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-5">
              PRODUCT
            </p>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-muted hover:text-chalk transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-5">
              COMPANY
            </p>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-muted hover:text-chalk transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-5">
              FOLLOW
            </p>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-muted hover:text-chalk transition-colors duration-200 group"
                  >
                    <span className="text-uv/70 group-hover:text-uv transition-colors">
                      {s.icon}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-edge flex flex-col sm:flex-row justify-between gap-4 items-center">
          <p className="font-mono text-[10px] tracking-[0.15em] text-muted">
            © 2026 LABORAVR — ALL RIGHTS RESERVED
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