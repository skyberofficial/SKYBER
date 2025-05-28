'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stage } from '@react-three/drei';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export function Model3DViewer({ modelPath }: { modelPath: string }) {
  return (
    <div className="h-full w-full min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Model url={modelPath} />
          </Stage>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
} 