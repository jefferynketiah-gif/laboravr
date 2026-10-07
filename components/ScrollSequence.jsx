import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';

const STAGES = [
  {
    n: '01',
    title: 'Put on the headset',
    body: 'Standalone hardware. No workstation, no cabling, no dedicated room — the lab goes where the students already are.',
    image: '/lab-screens/vr_hands_lesson1.jpg'
  },
  {
    n: '02',
    title: 'Run the practical',
    body: 'The same procedure your syllabus specifies, with every instrument to hand and no queue for the one working set.',
    image: '/lab-screens/lab_chempractical_clean.jpg'
  },
  {
    n: '03',
    title: 'Review the attempt',
    body: 'Every action is timestamped. Demonstrators see who understood the method and who arrived at the answer by luck.',
    image: '/lab-screens/lab_cations.jpg'
  },
];


export default function ScrollSequence() {
  const sectionRef = useRef(null);
  const progress = useRef(0);
  const [stage, setStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    progress.current = v;
    const next = Math.min(STAGES.length - 1, Math.floor(v * STAGES.length));
    setStage((prev) => (prev === next ? prev : next));
  });

  return (
    <section ref={sectionRef} className="relative bg-void" style={{ height: '320vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="grid-reticle absolute inset-0 opacity-15" />

        {/* Cross-fading Image Sequence Layer */}
        <div className="absolute inset-0 right-0 md:left-[40%] lg:left-[38%] z-0 flex items-center justify-center p-6 md:p-12 lg:p-16">
          <div className="relative w-full h-[50vh] md:h-[65vh] rounded-[2rem] overflow-hidden border border-edge shadow-2xl glow-ring">
            {STAGES.map((s, i) => (
              <motion.div
                key={s.n}
                initial={false}
                animate={{
                  opacity: stage === i ? 1 : 0,
                  scale: stage === i ? 1 : 1.05,
                }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Copy layer */}
        <div className="relative h-full max-w-6xl mx-auto px-6 flex items-end md:items-center pb-20 md:pb-0 pointer-events-none z-10">
          <div className="w-full md:max-w-[300px] lg:max-w-sm pr-4 md:pr-8">
            <p className="font-mono text-[11px] tracking-[0.2em] text-uv mb-8">
              IN THE ROOM
            </p>

            <div className="relative min-h-[190px]">
              {STAGES.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={false}
                  animate={{
                    opacity: stage === i ? 1 : 0,
                    y: stage === i ? 0 : 14,
                  }}
                  transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
                  className="absolute inset-0"
                >
                  <p className="font-mono text-[11px] tracking-[0.2em] text-uv mb-4">
                    {s.n}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tightest text-chalk mb-4 leading-[1.05]">
                    {s.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </div>

            {/* Stage rule */}
            <div className="mt-10 flex gap-2 w-40">
              {STAGES.map((s, i) => (
                <div key={s.n} className="h-px flex-1 bg-edge relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-uv origin-left"
                    initial={false}
                    animate={{ scaleX: stage >= i ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
