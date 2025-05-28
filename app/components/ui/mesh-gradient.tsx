'use client';

import { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

export function MeshGradient() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      if (heroSection && vantaEffect) {
        const rect = heroSection.getBoundingClientRect();
        // If scrolled past hero section, disable mouse interaction
        if (rect.bottom < 0) {
          vantaEffect.options.mouseControls = false;
        } else {
          vantaEffect.options.mouseControls = true;
        }
      }
    };

    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x17D492,
          backgroundColor: 0x000000,
          points: 10,
          maxDistance: 20.00,
          spacing: 18.00,
          showDots: false,
          mouseEase: true,
          mouseFalloff: 0.8,
          mouseCoeffX: 0,
          mouseCoeffY: 0,
          onMouseMove: (e: MouseEvent) => {
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
              const rect = heroSection.getBoundingClientRect();
              const isInHeroSection = 
                e.clientY >= rect.top && 
                e.clientY <= rect.bottom && 
                e.clientX >= rect.left && 
                e.clientX <= rect.right;

              if (isInHeroSection) {
                vantaEffect.options.mouseCoeffX = 0.1;
                vantaEffect.options.mouseCoeffY = 0.1;
              } else {
                vantaEffect.options.mouseCoeffX = 0;
                vantaEffect.options.mouseCoeffY = 0;
              }
            }
          }
        })
      );
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0" />;
} 