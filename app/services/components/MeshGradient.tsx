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
            el: vantaRef.current as HTMLElement,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0,
            backgroundColor: 0x0,
            points: 20.00,
            maxDistance: 25.00,
            spacing: 20.00,
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

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
} 