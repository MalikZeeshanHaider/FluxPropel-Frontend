'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

const NeuralNode: React.FC<{ position: [number, number, number] }> = ({
  position,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.15, 16, 16]} position={position}>
      <meshStandardMaterial
        color="#6366F1"
        emissive="#6366F1"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
};

const NeuralNetwork: React.FC = () => {
  const nodes = [
    [-2, 0, 0],
    [-1, 1, 0],
    [-1, -1, 0],
    [0, 1.5, 0],
    [0, 0, 0],
    [0, -1.5, 0],
    [1, 1, 0],
    [1, -1, 0],
    [2, 0, 0],
  ] as [number, number, number][];

  const connections = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [2, 5],
    [3, 6],
    [4, 6],
    [4, 7],
    [5, 7],
    [6, 8],
    [7, 8],
  ];

  return (
    <group>
      {connections.map(([start, end], index) => (
        <Line
          key={index}
          points={[nodes[start], nodes[end]]}
          color="#8B5CF6"
          lineWidth={2}
          opacity={0.6}
          transparent
        />
      ))}
      {nodes.map((position, index) => (
        <NeuralNode key={index} position={position} />
      ))}
    </group>
  );
};

const AIMLScene: React.FC = () => {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <NeuralNetwork />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default AIMLScene;
