import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/labs', label: 'Labs' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-void/80 backdrop-blur-md border-b border-edge z-50"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-mono text-sm tracking-[0.15em] text-chalk hover:text-uv transition-colors"
        >
          LABORAVR
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-chalk transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-uv text-white text-sm px-5 py-2 rounded-md font-medium hover:bg-[#6B4AF0] transition-colors"
          >
            Join the pilot
          </Link>
        </div>

        <button
          className="md:hidden text-chalk"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-void border-t border-edge"
        >
          <div className="flex flex-col gap-4 px-6 py-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-chalk transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-uv text-white px-5 py-2.5 rounded-md text-center font-medium"
            >
              Join the pilot
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}