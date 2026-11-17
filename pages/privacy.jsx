import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const sent = [
  {
    feature: 'Bring your exam paper',
    what: 'One still picture from the headset’s camera, taken when the student presses “Read my question”.',
    to: 'Meta’s AI model (Muse Wonder)',
    kept: 'Nothing. The question’s words stay in the headset’s memory until the practical ends. They are never saved or logged.',
  },
  {
    feature: 'From your kitchen',
    what: 'One still picture, taken when the student presses “Read my packet”.',
    to: 'Meta’s AI model (Muse Wonder)',
    kept: 'Only which product was chosen (for example “table salt”), on the headset.',
  },
  {
    feature: 'Draw from life',
    what: 'One still picture of the specimen or drawing on the desk.',
    to: 'Meta’s SAM 3.1 model, asked not to store it',
    kept: 'Only the outline (a list of numbers), in the headset’s memory.',
  },
  {
    feature: 'Saying what you saw',
    what: 'A short recording of what the student says about an observation.',
    to: 'Meta’s AI models (speech to text, then the text)',
    kept: 'The words and the mark, in the results file on the headset.',
  },
  {
    feature: 'The Practical Architect',
    what: 'The student’s typed or spoken request for a practical.',
    to: 'Meta’s AI models',
    kept: 'The accepted practical, on the headset.',
  },
];

function Section({ title, children }) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tightest text-chalk mb-5">{title}</h2>
      <div className="space-y-5 text-muted leading-relaxed">{children}</div>
    </section>
  );
}

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy — LaboraVR"
        description="What the LaboraVR app sends, to whom, and what it keeps."
      />
      <Navbar />

      <PageHeader
        eyebrow="PRIVACY"
        title="What the app sends, and what it keeps."
        intro="LaboraVR is a science lab for Meta Quest. Most of it works with no internet and sends nothing."
      />

      <main className="relative bg-void py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-mono text-[10px] tracking-[0.18em] text-muted mb-12">LAST UPDATED 17 NOVEMBER 2026</p>

          <Section title="In short">
            <ul className="list-disc pl-6 space-y-3">
              <li>No sign-in, no account, no name and no face are needed to use LaboraVR.</li>
              <li>
                A few features use Meta&apos;s AI models to see, hear or read. They never give a mark: every mark comes
                from rules written by a teacher.
              </li>
              <li>
                The camera is used only while one of those features is open, and only for the moment the student
                presses the button. It stops when the panel closes. No video is recorded.
              </li>
              <li>
                Results (which test, what the student said, the mark) are kept in a file on the headset only, for the
                student and their teacher. Nothing is uploaded to LaboraVR.
              </li>
            </ul>
          </Section>

          <Section title="What is sent, and to whom">
            <div className="space-y-4">
              {sent.map((row) => (
                <div key={row.feature} className="border border-edge rounded-2xl p-6 bg-panel/40">
                  <h3 className="text-lg font-bold text-chalk mb-3">{row.feature}</h3>
                  <dl className="grid sm:grid-cols-[110px_1fr] gap-x-4 gap-y-2 text-sm md:text-base">
                    <dt className="font-mono text-[10px] tracking-[0.15em] text-uv pt-1">SENT</dt>
                    <dd>{row.what}</dd>
                    <dt className="font-mono text-[10px] tracking-[0.15em] text-uv pt-1">TO</dt>
                    <dd>{row.to}</dd>
                    <dt className="font-mono text-[10px] tracking-[0.15em] text-uv pt-1">KEPT</dt>
                    <dd>{row.kept}</dd>
                  </dl>
                </div>
              ))}
            </div>
          </Section>

          <Section title="The relay">
            <p>
              A headset that belongs to a school or a judge has no key for Meta&apos;s models. Its requests go through
              LaboraVR&apos;s relay (hosted on Vercel), which adds the key and limits how many requests a headset can
              make each day. The relay passes the request on and sends the answer back. It does not keep or log what
              was sent. To count requests it sees a scrambled code made from the headset&apos;s identifier (a one-way
              hash), never the identifier itself.
            </p>
          </Section>

          <Section title="Meta">
            <p>
              Requests to Meta&apos;s models are covered by{' '}
              <a
                href="https://www.meta.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-uv hover:text-uv-bright underline"
              >
                Meta&apos;s own privacy policy
              </a>
              . LaboraVR asks SAM 3.1 not to store pictures, and never uses versions of Meta&apos;s models whose inputs
              are used to train them, because its users are young people.
            </p>
          </Section>

          <Section title="Research data">
            <p>
              A research dataset of students&apos; observations (text and numbers only: no pictures, no audio) is
              designed but switched off. It can only be switched on by a school, with parents&apos; consent for
              students under 15.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about privacy, or a request to delete something:{' '}
              <a href="mailto:hello@laboravr.com" className="text-uv hover:text-uv-bright underline">
                hello@laboravr.com
              </a>
              .
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  );
}
