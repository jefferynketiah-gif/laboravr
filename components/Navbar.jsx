import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          LaboraVR
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/labs" className="text-gray-700 hover:text-blue-600 transition">
            Labs
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="flex flex-col gap-4 px-6 py-4">
            <Link href="/" className="text-gray-700">Home</Link>
            <Link href="/labs" className="text-gray-700">Labs</Link>
            <Link href="/about" className="text-gray-700">About</Link>
            <Link href="/blog" className="text-gray-700">Blog</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded text-center">Contact</Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
