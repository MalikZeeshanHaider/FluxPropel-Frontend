'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

const OrbitingNode: React.FC<{
  radius: number;
  speed: number;
  color: string;
  offset: number;
}> = ({ radius, speed, color, offset }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() * speed + offset;
      meshRef.current.position.x = Math.cos(time) * radius;
      meshRef.current.position.z = Math.sin(time) * radius;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.2, 16, 16]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
};

const Pipeline: React.FC = () => {
  return (
    <group>
      <Torus args={[1.5, 0.03, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#10B981" opacity={0.5} transparent />
      </Torus>
      <Torus args={[2.5, 0.03, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#14B8A6" opacity={0.5} transparent />
      </Torus>
      <Torus args={[3.5, 0.03, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#10B981" opacity={0.3} transparent />
      </Torus>
    </group>
  );
};

function DevOpsScene() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 3, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Pipeline />
        <OrbitingNode radius={1.5} speed={0.8} color="#10B981" offset={0} />
        <OrbitingNode
          radius={1.5}
          speed={0.8}
          color="#14B8A6"
          offset={Math.PI}
        />
        <OrbitingNode
          radius={2.5}
          speed={0.6}
          color="#10B981"
          offset={Math.PI / 2}
        />
        <OrbitingNode
          radius={2.5}
          speed={0.6}
          color="#14B8A6"
          offset={(3 * Math.PI) / 2}
        />
        <OrbitingNode
          radius={3.5}
          speed={0.4}
          color="#10B981"
          offset={Math.PI / 4}
        />
        <OrbitingNode
          radius={3.5}
          speed={0.4}
          color="#14B8A6"
          offset={(5 * Math.PI) / 4}
        />
        <Sphere args={[0.3, 16, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#10B981"
            emissive="#10B981"
            emissiveIntensity={0.8}
          />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}

export default DevOpsScene;
