import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotionAndPerformance } from '../../hooks/useReducedMotionAndPerformance';

interface Particle {
  position: [number, number, number];
}

function CircuitBoard() {
  const groupRef = useRef<THREE.Group>(null);
  const { reducedMotion, performanceLevel } = useReducedMotionAndPerformance();

  useFrame((state) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const particleCount = performanceLevel === 'high' ? 200 : performanceLevel === 'medium' ? 100 : 50;

  const particles = useMemo<Particle[]>(() => {
    const temp: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push({ position: [x, y, z] });
    }
    return temp;
  }, [particleCount]);

  return (
    <group ref={groupRef}>
      {/* Central glowing sphere */}
      <Sphere args={[1.5, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#10b981"
          attach="material"
          distort={reducedMotion ? 0 : 0.3}
          speed={reducedMotion ? 0 : 2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Orbiting particles */}
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Connecting lines */}
      {performanceLevel !== 'low' && (
        <>
          <mesh position={[0, 0, 0]}>
            <torusGeometry args={[3, 0.02, 16, 100]} />
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[3, 0.02, 16, 100]} />
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.3} />
          </mesh>
        </>
      )}
    </group>
  );
}

export default function HeroScene3D() {
  const { performanceLevel } = useReducedMotionAndPerformance();

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      dpr={performanceLevel === 'high' ? [1, 2] : 1}
      className="hero-canvas"
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
      <CircuitBoard />
      {performanceLevel !== 'low' && <OrbitControls enableZoom={false} enablePan={false} />}
    </Canvas>
  );
}
