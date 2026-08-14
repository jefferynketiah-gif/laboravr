import '../styles/globals.css';
import { Sora, JetBrains_Mono } from 'next/font/google';
import SmoothScroll from '../components/SmoothScroll';

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
  return (
    <main className={`${sora.variable} ${mono.variable} font-sans`}>
      <SmoothScroll>
        <Component {...pageProps} />
      </SmoothScroll>
    </main>
  );
}