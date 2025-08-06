'use client';

import { useEffect, useRef, useState } from 'react';
import { loadVantaEffect } from './vanta-effect';

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

    const initVanta = async () => {
      if (!vantaEffect && vantaRef.current) {
        const effect = await loadVantaEffect(vantaRef.current);
        if (effect) {
          setVantaEffect(effect);
        }
      }
    };

    initVanta();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
} 