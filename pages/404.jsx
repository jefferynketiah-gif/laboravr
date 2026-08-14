import Link from 'next/link';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Aurora from '../components/Aurora';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found — LaboraVR"
        description="That page doesn't exist."
      />
      <Navbar />

      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-void grain">
        <Aurora />
        <div className="grid-reticle absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_25%,#0A0B10_85%)]" />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <p className="font-mono text-[11px] tracking-[0.2em] text-uv mb-6">
            ERROR 404 — NO SUCH PAGE
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tightest text-chalk leading-[0.95] mb-7">
            This one doesn&apos;t
            <br />
            exist yet.
          </h1>
          <p className="text-lg text-muted max-w-md leading-relaxed mb-10">
            The address is wrong, or the page has moved. Everything that does
            exist is one click away.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="bg-uv text-white px-7 py-3.5 rounded-md font-semibold hover:bg-[#6B4AF0] transition-colors"
            >
              Back to the homepage
            </Link>
            <Link
              href="/contact"
              className="border border-edge text-chalk px-7 py-3.5 rounded-md font-semibold hover:border-uv hover:text-uv transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
