'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const GlassPanel: React.FC<{
  position: [number, number, number];
  rotation: [number, number, number];
  delay: number;
}> = ({ position, rotation, delay }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.y =
        position[1] + Math.sin(time * 0.5 + delay) * 0.3;
      meshRef.current.rotation.y = rotation[1] + Math.sin(time * 0.3) * 0.2;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[1.5, 2, 0.1]}
      position={position}
      rotation={rotation}
      radius={0.05}
    >
      <meshPhysicalMaterial
        color="#06B6D4"
        transparent
        opacity={0.3}
        roughness={0.1}
        metalness={0.1}
        transmission={0.9}
        thickness={0.5}
      />
    </RoundedBox>
  );
};

const CodeBlock: React.FC<{ position: [number, number, number] }> = ({
  position,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} args={[0.8, 0.3, 0.1]} position={position}>
      <meshStandardMaterial
        color="#ffffff"
        emissive="#06B6D4"
        emissiveIntensity={0.3}
      />
    </Box>
  );
};

const WebDevScene: React.FC = () => {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
        <GlassPanel position={[-1.5, 0, 0]} rotation={[0, 0.3, 0]} delay={0} />
        <GlassPanel position={[0, 0, -0.5]} rotation={[0, 0, 0]} delay={1} />
        <GlassPanel position={[1.5, 0, 0]} rotation={[0, -0.3, 0]} delay={2} />
        <CodeBlock position={[0, 1.5, 0.5]} />
        <CodeBlock position={[-1, -1.5, 0.5]} />
        <CodeBlock position={[1, -1.5, 0.5]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default WebDevScene;
