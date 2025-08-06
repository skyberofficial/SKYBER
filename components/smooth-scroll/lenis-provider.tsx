"use client";

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimal settings for smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
      autoRaf: true,
      lerp: 0.1,
      overscroll: true,
      anchors: true,
      autoToggle: true,
      allowNestedScroll: false,
    });

    // Expose Lenis instance globally for other components to use
    (window as any).lenis = lenisRef.current;

    // Handle scroll events for debugging and potential integrations
    lenisRef.current.on('scroll', (e) => {
      // Optional: Add any scroll-based animations or effects here
      // console.log('Lenis scroll:', e);
    });

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        // Remove global reference
        delete (window as any).lenis;
      }
    };
  }, []);

  return <>{children}</>;
} 