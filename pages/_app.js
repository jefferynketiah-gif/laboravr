import '../styles/globals.css';
import { Sora, JetBrains_Mono } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import SmoothScroll from '../components/SmoothScroll';
import Preloader from '../components/Preloader';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <main className={`${sora.variable} ${mono.variable} font-sans`}>
      <Preloader />
      <SmoothScroll>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </SmoothScroll>
    </main>
  );
}