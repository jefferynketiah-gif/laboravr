import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';

function Headset() {
  const { scene } = useGLTF('/models/headset/scene.gltf');
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.18;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
  });

  return <primitive ref={ref} object={scene} scale={4.2} position={[0, 0, 0]} />;
}

export default function Scene3D() {
  return (
    <div className="relative w-full h-[340px] md:h-[460px]">
      <div className="uv-bloom absolute inset-0" />

      <Canvas
        className="relative"
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.9} />

        {/* Key — cool white, upper right */}
        <directionalLight position={[4, 5, 4]} intensity={2.4} color="#FFFFFF" />
        {/* Fill — keeps the dark side from going solid black */}
        <directionalLight position={[-3, 0, 3]} intensity={1.1} color="#B8BCD0" />
        {/* Rim — UV violet from behind, the signature edge light */}
        <directionalLight position={[-5, 2, -4]} intensity={4} color="#7C5CFF" />
        {/* Second rim, opposite side */}
        <directionalLight position={[5, -1, -3]} intensity={2} color="#7C5CFF" />

        <Suspense fallback={null}>
          <Headset />
          {/* 'city' gives dark plastic something to reflect; 'night' left it invisible */}
          <Environment preset="city" environmentIntensity={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/headset/scene.gltf');