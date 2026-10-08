import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AtomCluster() {
  const group = useRef();
  
  // Create a pseudo-molecule layout
  const atoms = useMemo(() => {
    return Array.from({ length: 12 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      ],
      scale: 0.2 + Math.random() * 0.3
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.1;
    group.current.rotation.z = Math.sin(t * 0.2) * 0.2;
    group.current.position.y = Math.sin(t * 0.5) * 0.2;
  });

  return (
    <group ref={group}>
      {atoms.map((atom, i) => (
        <Sphere key={i} position={atom.position} scale={atom.scale}>
          <MeshDistortMaterial
            color="#2563EB"
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0.8}
            roughness={0.2}
            distort={0.2}
            speed={2}
          />
        </Sphere>
      ))}
      {/* Connect atoms with lines to look like bonds */}
      {atoms.map((atom, i) => {
        if (i === atoms.length - 1) return null;
        return (
          <Line
            key={`line-${i}`}
            points={[atom.position, atoms[i + 1].position]}
            color="#93C5FD"
            lineWidth={2}
            transparent
            opacity={0.3}
          />
        );
      })}
    </group>
  );
}

export default function Lab3DViewer() {
  return (
    <div className="w-full h-full relative rounded-3xl overflow-hidden bg-gradient-to-b from-void to-panel border border-edge">
      <div className="absolute top-6 left-6 z-10">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-uv bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-uv/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-uv opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-uv" />
          </span>
          LIVE 3D WEBGL ENGINE
        </div>
      </div>
      <p className="absolute bottom-6 left-0 right-0 text-center font-mono text-xs text-muted pointer-events-none z-10">
        Click and drag to rotate molecule
      </p>
      
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#2563EB" />
        
        <AtomCluster />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
