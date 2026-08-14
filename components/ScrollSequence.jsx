import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const STAGES = [
  {
    n: '01',
    title: 'Put on the headset',
    body: 'Standalone hardware. No workstation, no cabling, no dedicated room — the lab goes where the students already are.',
  },
  {
    n: '02',
    title: 'Run the practical',
    body: 'The same procedure your syllabus specifies, with every instrument to hand and no queue for the one working set.',
  },
  {
    n: '03',
    title: 'Review the attempt',
    body: 'Every action is timestamped. Demonstrators see who understood the method and who arrived at the answer by luck.',
  },
];

function Model({ progress }) {
  const { scene } = useGLTF('/models/headset/scene.gltf');
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;
    const p = progress.current;

    // One full turn across the whole section, eased by scroll position
    const targetRotY = p * Math.PI * 2;
    ref.current.rotation.y += (targetRotY - ref.current.rotation.y) * Math.min(1, delta * 4);

    // Tilt forward slightly as you descend
    const targetRotX = p * 0.5 - 0.15;
    ref.current.rotation.x += (targetRotX - ref.current.rotation.x) * Math.min(1, delta * 4);

    // Push in, then settle back
    const targetScale = 3.6 + Math.sin(p * Math.PI) * 1.1;
    const s = ref.current.scale.x;
    const next = s + (targetScale - s) * Math.min(1, delta * 4);
    ref.current.scale.setScalar(next);

    // Ambient float
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.06;
  });

  return <primitive ref={ref} object={scene} scale={3.6} />;
}

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

  const bloom = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 1, 0.35]);

  return (
    <section ref={sectionRef} className="relative bg-void" style={{ height: '320vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden grain">
        <div className="grid-reticle absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#0A0B10_80%)]" />

        {/* 3D layer */}
        <motion.div className="absolute inset-0" style={{ opacity: bloom }}>
          <div className="uv-bloom absolute inset-0" />
        </motion.div>

        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 2]}>
            <ambientLight intensity={0.85} />
            <directionalLight position={[4, 5, 4]} intensity={2.2} color="#FFFFFF" />
            <directionalLight position={[-3, 0, 3]} intensity={1} color="#B8BCD0" />
            <directionalLight position={[-5, 2, -4]} intensity={4} color="#7C5CFF" />
            <directionalLight position={[5, -1, -3]} intensity={2} color="#7C5CFF" />
            <Suspense fallback={null}>
              <Model progress={progress} />
              <Environment preset="city" environmentIntensity={0.6} />
            </Suspense>
          </Canvas>
        </div>

        {/* Copy layer */}
        <div className="relative h-full max-w-6xl mx-auto px-6 flex items-end md:items-center pb-20 md:pb-0 pointer-events-none">
          <div className="w-full md:max-w-sm">
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
