import Link from 'next/link';
import Image from 'next/image';

import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import YouTubeFilm from '../components/YouTubeFilm';

// Facts come from the competition entry text (IGCSEVRLab docs/COMPETITION_STORY.md), written by the owner.
// Wording rule: "submitted to", never "finalist" or "winner" unless it happens. No Meta logo.
// Do not link the Devpost page before the results: it may show the judges-only build link.

const FILM_ID = 'lS0m0WvklyA';

const entries = [
  {
    status: 'RESULTS ABOUT 11 DECEMBER 2026',
    live: true,
    name: 'Meta VR Start Developer Competition 2026',
    detail: 'Productivity track, Adapted division. Submitted on 18 November 2026 with the film above.',
  },
  {
    status: 'NOVEMBER 2026',
    live: false,
    name: 'Meta Global AI Developer Hackathon',
    detail:
      'Run by Cerebral Valley, 26 October to 4 November 2026. The AI Practical Architect, which designs the next practical around a student’s mistakes, was first built here.',
  },
];

const gallery = [
  { src: '00-pour', subject: 'Chemistry', title: 'Pour with your own hands', caption: 'No controllers: the student pinches the tube and pours the reagent.' },
  { src: '01-say-what-you-saw', subject: 'Chemistry', title: 'Say what you saw', caption: '“It went blue and cloudy” gets 1 mark of 3. The student is told which points are missing, and why.' },
  { src: '05-missed-it', subject: 'Chemistry', title: 'You missed it? Watch it again', caption: 'The headset knows where the student was looking. If they missed the change, it is offered again, slowly.' },
  { src: '04-exam-paper', subject: 'All sciences', title: 'Bring your exam question', caption: 'Hold a practical question up to the headset. The lab opens the practical that answers it.' },
  { src: '10-kitchen-starch', subject: 'Biology', title: 'Food from your kitchen', caption: 'Show the headset some bread, then test it for starch on the bench.' },
  { src: '11-potato-strips', subject: 'Biology', title: 'Potato strips in sugar solution', caption: 'Measure each strip yourself; each length goes into your own table.' },
  { src: '07-pendulum', subject: 'Physics', title: 'Time a pendulum', caption: 'Pull the bob aside and time ten swings on the bench stopwatch.' },
  { src: '08-your-graph', subject: 'Physics', title: 'Your own times, your own graph', caption: 'The student’s own timings, plotted as T² against length.' },
  { src: '09-sight-lines', subject: 'Physics', title: 'Read at eye level', caption: 'A reading taken from above is wrong, as in a real lab. It counts only when the eye is level with the meniscus.' },
  { src: '03-marking-code', subject: 'How it is built', title: 'Models perceive. Rules mark.', caption: 'AI hears and reads. Every mark comes from rules a teacher wrote.' },
];

const numbers = [
  ['656', 'automated tests, all passing'],
  ['72', 'frames a second in the labs'],
  ['25', 'scenes across three sciences'],
  ['432', 'student answers used to test the examiner'],
];

const subjectDot = {
  Chemistry: 'bg-uv',
  Physics: 'bg-[#0D9488]',
  Biology: 'bg-[#7C3AED]',
};

export default function Competition() {
  return (
    <>
      <Seo
        title="Competitions — LaboraVR"
        description="LaboraVR, a science lab for Meta Quest used with bare hands, was submitted to the Meta VR Start Developer Competition 2026. Watch the film."
        image="/competition/youtube-thumbnail.jpg"
        jsonLd={[
          {
            '@type': 'VideoObject',
            name: 'LaboraVR: a science lab in your hands',
            description:
              'LaboraVR is a science lab for Meta Quest, used with bare hands: students do the practical, say what they saw, and are marked like an examiner.',
            thumbnailUrl: 'https://www.laboravr.com/competition/youtube-thumbnail.jpg',
            // Google needs a full date-time with a time zone here, not just a date.
            uploadDate: '2026-11-18T00:00:00+01:00',
            duration: 'PT2M48S',
            embedUrl: `https://www.youtube-nocookie.com/embed/${FILM_ID}`,
            url: `https://youtu.be/${FILM_ID}`,
            publisher: { '@id': 'https://www.laboravr.com/#organization' },
          },
          {
            '@type': 'SoftwareApplication',
            name: 'LaboraVR',
            applicationCategory: 'EducationalApplication',
            operatingSystem: 'Meta Quest (Horizon OS)',
            description:
              'Chemistry, physics and biology practicals in virtual and mixed reality for students aged 14 to 16, used with bare hands, with a spoken examiner that marks observations by rules a teacher wrote.',
            publisher: { '@id': 'https://www.laboravr.com/#organization' },
          },
        ]}
      />
      <Navbar />

      <PageHeader
        eyebrow="COMPETITIONS · NOVEMBER 2026"
        title="A science lab in your hands."
        accentWord="in your hands."
        intro="LaboraVR was submitted to the Meta VR Start Developer Competition 2026. This is the film and the work behind the entry: chemistry, physics and biology practicals, done with bare hands and marked like an examiner."
      />

      {/* Film */}
      <section className="relative bg-void pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <YouTubeFilm
              id={FILM_ID}
              title="LaboraVR: a science lab in your hands"
              poster="/competition/youtube-thumbnail.jpg"
              caption="The competition film, recorded in the headset. Nothing in it is a mock-up."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Entries */}
      <section className="relative border-y border-edge bg-panel py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 font-mono text-[11px] tracking-[0.2em] text-uv">WHERE LABORAVR HAS BEEN ENTERED</p>
          <div className="grid gap-5 md:grid-cols-2">
            {entries.map((e) => (
              <div key={e.name} className="card-shadow rounded-2xl border border-edge bg-void p-7 md:p-8">
                <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-muted">
                  {e.live && (
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-uv opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-uv" />
                    </span>
                  )}
                  {e.status}
                </p>
                <h2 className="mt-4 text-xl font-bold leading-snug text-chalk md:text-2xl">{e.name}</h2>
                <p className="mt-3 leading-relaxed text-muted">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <ScrollReveal>
        <section className="relative bg-void py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-5 font-mono text-[11px] tracking-[0.2em] text-uv">WHY IT EXISTS</p>
              <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tightest text-chalk md:text-4xl">
                Every year, students describe a colour they have never seen.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Thousands of students sit a written exam on practicals they have never done. They are asked what
                  they would see when two solutions are mixed.
                </p>
                <p>
                  LaboraVR gives them the lab: the bench on their own desk, the apparatus in their own hands, and an
                  examiner in the headset that listens to what they saw.
                </p>
              </div>
              <p className="mt-8 border-l-2 border-uv pl-4 text-sm leading-relaxed text-chalk-dim">
                Built by Jeffery Nketiah, an energy storage scientist who taught IGCSE Chemistry and Physics in Accra,
                where he helped build a school’s new science lab.
              </p>
            </div>
            <figure className="card-shadow overflow-hidden rounded-2xl border border-edge">
              <Image
                src="/competition/01-say-what-you-saw.jpg"
                alt="The examiner panel in the LaboraVR lab, marking a spoken observation of copper ions with sodium hydroxide"
                width={1600}
                height={1067}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full"
              />
            </figure>
          </div>
        </section>
      </ScrollReveal>

      {/* Gallery */}
      <section className="relative bg-panel py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-5 font-mono text-[11px] tracking-[0.2em] text-uv">INSIDE THE ENTRY</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-extrabold leading-[1.05] tracking-tightest text-chalk md:text-4xl">
              Three sciences. Real readings. Real marks.
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {gallery.map((g, i) => (
              <ScrollReveal key={g.src} className={i === 0 ? 'sm:col-span-2' : ''}>
                <figure className="lift-hover card-shadow flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-void">
                  <Image
                    src={`/competition/${g.src}.jpg`}
                    alt={`${g.title}: ${g.caption}`}
                    width={1600}
                    height={1067}
                    sizes={i === 0 ? '(min-width: 1152px) 1104px, 100vw' : '(min-width: 640px) 50vw, 100vw'}
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <figcaption className="flex-1 px-6 py-5">
                    <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-muted">
                      <span className={`h-2 w-2 rounded-full ${subjectDot[g.subject] || 'bg-edge-bright'}`} />
                      {g.subject.toUpperCase()}
                    </p>
                    <p className="mt-2 text-lg font-bold text-chalk">{g.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{g.caption}</p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <ScrollReveal>
        <section className="relative bg-chalk py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-10 font-mono text-[11px] tracking-[0.2em] text-uv-dim">THE PROJECT · COUNTED 17 NOVEMBER 2026</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {numbers.map(([n, label]) => (
                <div key={label}>
                  <p className="font-mono text-4xl font-bold tabular-nums leading-none text-white md:text-5xl">{n}</p>
                  <span className="mt-4 block h-0.5 w-8 bg-uv" />
                  <p className="mt-3 text-sm leading-snug text-white/70">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 max-w-2xl text-sm leading-relaxed text-white/60">
              On those 432 realistic answers, the examiner gave full marks to 192 of 193 complete answers and marked 71
              of 72 wrong answers wrong.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Next */}
      <section className="relative bg-void py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-5 font-mono text-[11px] tracking-[0.2em] text-uv">WHAT COMES NEXT</p>
          <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tightest text-chalk md:text-4xl">
            A school pilot is planned for early 2027.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            If you teach science and want your students to be among the first to use it, tell us which practicals
            matter most to you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-glow inline-block rounded-3xl bg-uv px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-uv-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uv md:text-lg"
            >
              Get in touch
            </Link>
            <Link
              href="/labs"
              className="inline-block rounded-3xl border border-edge px-8 py-4 text-base font-semibold text-chalk transition-all hover:border-uv/50 md:text-lg"
            >
              See the labs
            </Link>
          </div>
          <p className="mx-auto mt-14 max-w-xl text-xs leading-relaxed text-muted">
            LaboraVR is independent. It is not made, endorsed or approved by Meta or by Cambridge. Meta Quest is a
            trademark of Meta. IGCSE is named only to say who the practicals are for.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
