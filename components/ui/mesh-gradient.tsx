'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function MeshGradient() {
  const [vantaEffect, setVantaEffect] = useState<{ destroy: () => void } | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (!vantaEffect && vantaRef.current) {
        const VANTA = (await import('vanta/dist/vanta.net.min')).default;
        setVantaEffect(
          VANTA({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x17D492,
            backgroundColor: 0x111111,
            points: 15.00,
            maxDistance: 25.00,
            spacing: 17.00,
            showDots: false
          })
        );
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div ref={vantaRef} className="absolute inset-0 z-0" />
      {/* Frosted glass overlay */}
      <div className="absolute inset-0 backdrop-blur-[8px] bg-background/30 z-10" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background/80 z-20" />
      {/* Glass reflections */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(23,212,146,0.1),transparent_45%)] z-30" />
    </>
  );
} 