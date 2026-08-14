import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';

function Headset() {
  const { scene } = useGLTF('/models/headset/scene.gltf');
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.16;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.1;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.04;
  });

  // Scale and camera distance move together — push the scale much past this
  // without moving the camera back and you end up inside the mesh.
  return <primitive ref={ref} object={scene} scale={4.6} />;
}

export default function Scene3D() {
  return (
    <div className="relative w-full h-full min-h-[380px]">
      <Canvas
        camera={{ position: [0, 0, 6.4], fov: 40 }}
        dpr={[1, 1.8]}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.75} />

        <directionalLight position={[4, 5, 4]} intensity={2.2} color="#FFFFFF" />
        <directionalLight position={[-3, 0, 3]} intensity={0.9} color="#B8BCD0" />
        {/* Chromatic rims */}
        <directionalLight position={[-5, 2, -4]} intensity={4.2} color="#7C5CFF" />
        <directionalLight position={[5, 1, -3]} intensity={2.6} color="#22D3EE" />
        <directionalLight position={[0, -4, -2]} intensity={1.8} color="#E879F9" />

        <Suspense fallback={null}>
          <Headset />
          <Environment preset="city" environmentIntensity={0.55} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/headset/scene.gltf');