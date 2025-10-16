'use client';

import React from 'react';

interface Fallback3DSceneProps {
  color: string;
  title: string;
}

const Fallback3DScene: React.FC<Fallback3DSceneProps> = ({ color, title }) => {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{
        background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
      }}
    >
      <div className="text-center">
        <div
          className="mx-auto mb-4 h-32 w-32 animate-pulse rounded-full"
          style={{
            background: `linear-gradient(135deg, ${color}40, ${color}20)`,
            boxShadow: `0 0 60px ${color}40`,
          }}
        />
        <p className="text-lg font-medium text-light-text-secondary dark:text-dark-text-secondary">
          {title} Visualization
        </p>
        <p className="mt-2 text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
          Interactive 3D scene
        </p>
      </div>
    </div>
  );
};

export default Fallback3DScene;
