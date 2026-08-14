import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection({ title, subtitle, primaryCTA, secondaryCTA, bgColor = 'from-blue-600 to-blue-800' }) {
  return (
    <section className={`pt-32 pb-16 bg-gradient-to-r ${bgColor} text-white text-center`}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl mb-10 opacity-95"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          {primaryCTA && (
            <Link
              href={primaryCTA.href}
              className="bg-amber-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-500 transition transform hover:scale-105"
            >
              {primaryCTA.text}
            </Link>
          )}

          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition"
            >
              {secondaryCTA.text}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
