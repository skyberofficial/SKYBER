'use client';

import { useEffect } from 'react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Smooth scroll function with easing
    const smoothScroll = () => {
      const currentScroll = window.pageYOffset;
      let isScrolling: NodeJS.Timeout;
      
      const scroll = (e: WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY;
        const targetScroll = currentScroll + delta;
        
        window.clearTimeout(isScrolling);
        
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
        
        isScrolling = setTimeout(() => {
          window.removeEventListener('wheel', scroll);
        }, 66);
      };
      
      window.addEventListener('wheel', scroll, { passive: false });
    };

    // Initialize smooth scroll
    smoothScroll();

    // Cleanup
    return () => {
      window.removeEventListener('wheel', () => {});
    };
  }, []);

  return <>{children}</>;
} 