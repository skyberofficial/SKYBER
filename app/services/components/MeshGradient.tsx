'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function MeshGradient() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
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
      <div ref={vantaRef} className="fixed inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-background z-10" />
    </>
  );
} 