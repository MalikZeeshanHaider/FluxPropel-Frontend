'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

const MorphingWireframe: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const lowFiPoints = useMemo(() => {
    const points: [number, number, number][] = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      points.push([Math.cos(angle) * 2, Math.sin(angle) * 2, 0]);
    }
    return points;
  }, []);

  const hiFiPoints = useMemo(() => {
    const points: [number, number, number][] = [];
    for (let i = 0; i < 32; i++) {
      const angle = (i / 32) * Math.PI * 2;
      const radius = 1.5 + Math.sin(angle * 4) * 0.3;
      points.push([Math.cos(angle) * radius, Math.sin(angle) * radius, 0]);
    }
    return points;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = (Math.sin(clock.getElapsedTime() * 0.5) + 1) / 2;
      groupRef.current.rotation.z = t * Math.PI * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {lowFiPoints.map((point, i) => {
        const nextPoint = lowFiPoints[(i + 1) % lowFiPoints.length];
        return (
          <Line
            key={`low-${i}`}
            points={[point, nextPoint]}
            color="#EC4899"
            lineWidth={2}
            opacity={0.4}
            transparent
          />
        );
      })}
      {hiFiPoints.map((point, i) => {
        const nextPoint = hiFiPoints[(i + 1) % hiFiPoints.length];
        return (
          <Line
            key={`hi-${i}`}
            points={[point, nextPoint]}
            color="#8B5CF6"
            lineWidth={1.5}
            opacity={0.7}
            transparent
          />
        );
      })}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const start: [number, number, number] = [0, 0, 0];
        const end: [number, number, number] = [
          Math.cos(angle) * 2,
          Math.sin(angle) * 2,
          0,
        ];
        return (
          <Line
            key={`spoke-${i}`}
            points={[start, end]}
            color="#EC4899"
            lineWidth={1}
            opacity={0.3}
            transparent
          />
        );
      })}
    </group>
  );
};

const UIUXScene: React.FC = () => {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#EC4899" />
        <MorphingWireframe />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default UIUXScene;
