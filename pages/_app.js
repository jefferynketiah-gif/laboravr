import '../styles/globals.css';
import { Sora } from 'next/font/google';
import SmoothScroll from '../components/SmoothScroll';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={sora.variable}>
      <SmoothScroll>
        <Component {...pageProps} />
      </SmoothScroll>
    </main>
  );
}