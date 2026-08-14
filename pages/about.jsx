import Seo from '../components/Seo';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

const principles = [
  {
    code: 'HONEST',
    title: 'We say what is built and what isn\u2019t',
    body: 'Nothing on this site is described as finished when it is still in development. A department head who finds out later stops trusting everything else we say.',
  },
  {
    code: 'LOCAL',
    title: 'Priced for the institutions we serve',
    body: 'Existing virtual lab software is priced for universities with budgets our institutions do not have. That gap is the reason this exists.',
  },
  {
    code: 'PRACTICAL',
    title: 'A supplement, not a replacement',
    body: 'Nothing replaces a student\u2019s hands on real apparatus. This is for the practicals that currently do not happen at all.',
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About — LaboraVR"
        description="Why LaboraVR exists: closing the practical science gap in African universities."
      />

      <Navbar />

      <PageHeader
        eyebrow="ABOUT"
        title="Bright students, empty benches."
        intro="LaboraVR is being built in Ghana, for Ghanaian universities first."
      />

      {/* Full-bleed band — the people this is for */}
      <ScrollReveal>
        <section className="relative bg-void">
          <div className="relative h-[280px] md:h-[440px] w-full overflow-hidden">
            <Image
              src="/images/students.png"
              alt="Four university students working together over laptops and notes outdoors on campus"
              fill
              priority
              sizes="100vw"
              className="object-cover saturate-[0.75] contrast-[1.05]"
            />
            {/* Tint the photo into the palette instead of letting it sit on top of it */}
            <div className="absolute inset-0 bg-void/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-void/60" />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-void grain py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-7 text-lg text-muted leading-relaxed">
              <p>
                Across African universities, science departments teach practical
                subjects to students who rarely get to practise. Equipment is
                expensive, reagents run out, and one working lab has to serve
                hundreds of people. What gets cut first is the part where a
                student actually handles the apparatus.
              </p>
              <p>
                Virtual reality does not fix an underfunded department. What it
                does is remove the two constraints that make practical work
                ration-able in the first place: cost per attempt, and risk. In a
                headset, an attempt costs nothing and a mistake harms no one, so
                a student can run the same titration until the method is theirs.
              </p>
              <p>
                Software that does this already exists. It is priced for
                institutions with budgets ours do not have, and built around
                syllabuses ours do not follow. LaboraVR is the version built
                here, for here.
              </p>
              <p className="text-chalk">
                It is early. We are looking for the first departments willing to
                shape it.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Founder */}
      <ScrollReveal>
        <section className="bg-panel py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-uv mb-10">
              WHO IS BUILDING THIS
            </p>

            <div className="grid sm:grid-cols-[220px_1fr] gap-10 items-start">
              <div className="relative w-[200px] h-[250px] sm:w-full sm:h-[275px] overflow-hidden rounded-md border border-edge">
                <Image
                  src="/images/Founder.jpg"
                  alt="Portrait of the founder of LaboraVR"
                  fill
                  sizes="(max-width: 640px) 200px, 220px"
                  className="object-cover grayscale contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-uv/10 mix-blend-color" />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tightest text-chalk mb-1">
                  Jeffery Nketiah
                </h2>
                <p className="font-mono text-[10px] tracking-[0.18em] text-uv mb-6">
                  FOUNDER — DEVELOPER
                </p>
                <p className="text-muted leading-relaxed max-w-lg mb-5">
                  LaboraVR is a one-person company right now. I write the code,
                  build the simulations, and sit in the meetings — which means
                  when a department tells me something is wrong, it gets changed
                  by the person who built it.
                </p>
                <p className="text-muted leading-relaxed max-w-lg">
                  If you run a science department in Ghana, I&apos;d rather hear
                  what you actually need than guess at it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-void grain py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-uv mb-5">
              HOW WE WORK
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tightest text-chalk max-w-2xl leading-[1.05] mb-16">
              Three things we hold to.
            </h2>

            <div className="border-t border-edge">
              {principles.map((p) => (
                <div
                  key={p.code}
                  className="grid md:grid-cols-[140px_1fr] gap-3 md:gap-10 py-9 border-b border-edge"
                >
                  <p className="font-mono text-[11px] tracking-[0.18em] text-uv pt-1.5">
                    {p.code}
                  </p>
                  <div>
                    <h3 className="text-xl font-bold text-chalk mb-3">
                      {p.title}
                    </h3>
                    <p className="text-muted leading-relaxed max-w-2xl">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-panel py-24 md:py-32">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-chalk leading-[1.05]">
              Work with us early.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              The first departments get the most say in what gets built.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-uv text-white px-8 py-4 rounded-md font-semibold hover:bg-[#6B4AF0] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv"
              >
                Join the pilot
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </>
  );
}