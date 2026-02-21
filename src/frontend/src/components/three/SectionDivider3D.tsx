import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotionAndPerformance } from '../../hooks/useReducedMotionAndPerformance';

function WaveParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { reducedMotion } = useReducedMotionAndPerformance();

  const particleCount = 100;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (i / particleCount) * 20 - 10;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = 0;
    }
    return pos;
  }, [particleCount]);

  useFrame((state) => {
    if (pointsRef.current && !reducedMotion) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const x = (i / particleCount) * 20 - 10;
        positions[i * 3 + 1] = Math.sin(x + state.clock.elapsedTime * 2) * 0.5;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#10b981" sizeAttenuation />
    </points>
  );
}

export default function SectionDivider3D() {
  const { performanceLevel } = useReducedMotionAndPerformance();

  if (performanceLevel === 'low') {
    return (
      <div className="h-24 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
    );
  }

  return (
    <div className="h-24 relative overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={1}>
        <ambientLight intensity={0.5} />
        <WaveParticles />
      </Canvas>
    </div>
  );
}
