import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { X } from 'lucide-react';
import Wordmark from './Wordmark';

const links = [
  { href: '/',        label: 'Home'  },
  { href: '/labs',    label: 'Labs'  },
  { href: '/about',   label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen]     = useState(false);
  const router = useRouter();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 60));

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-void/85 backdrop-blur-xl border-b border-edge shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" aria-label="LaboraVR home">
            <Wordmark size="md" showMark />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((l) => {
              const active = router.pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative text-sm font-medium transition-colors duration-200 group"
                  style={{ color: active ? '#E8E9F0' : '#6B6F80' }}
                >
                  {l.label}
                  {/* Active/hover underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-uv transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                  {/* Hover text colour */}
                  <style jsx>{`
                    a:hover { color: #E8E9F0 !important; }
                  `}</style>
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn-glow bg-uv text-white text-sm px-5 py-2.5 rounded-lg font-semibold hover:bg-uv-bright transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
            >
              Join the pilot
            </Link>
          </div>

          {/* Mobile hamburger — three lines */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 group"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-5 h-px bg-chalk transition-all group-hover:bg-uv" />
            <span className="w-4 h-px bg-chalk transition-all group-hover:w-5 group-hover:bg-uv" />
            <span className="w-5 h-px bg-chalk transition-all group-hover:bg-uv" />
          </button>
        </nav>

        {/* Scrolled glow line */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-uv/40 to-transparent" />
        )}
      </motion.header>

      {/* Mobile full-screen overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-void/95 backdrop-blur-2xl flex flex-col"
        >
          {/* Aurora accent top-right */}
          <div className="aurora-blob aurora-a opacity-30 pointer-events-none" />
          <div className="grid-reticle absolute inset-0 opacity-40 pointer-events-none" />

          <div className="relative flex justify-between items-center px-6 pt-4 pb-8 border-b border-edge">
            <Wordmark size="md" showMark />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-muted hover:text-chalk transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="relative flex flex-col gap-1 px-6 pt-8 flex-1">
            {links.map((l, i) => {
              const active = router.pathname === l.href;
              return (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-4xl font-extrabold tracking-tightest py-3 transition-colors ${
                      active ? 'text-chalk' : 'text-muted hover:text-chalk'
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="ml-3 inline-block w-2 h-2 rounded-full bg-uv align-middle" />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="relative px-6 pb-10">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-glow block w-full text-center bg-uv text-white py-4 rounded-xl font-semibold text-lg"
            >
              Join the pilot
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}