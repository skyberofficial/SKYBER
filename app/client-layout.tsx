'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Smooth scroll to top on every page load
    const scrollToTop = () => {
      const lenis = (window as any).lenis;
      if (lenis) {
        // Use Lenis for smooth scrolling if available
        lenis.scrollTo(0, {
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        // Fallback to native smooth scrolling
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    // Small delay to ensure page content is loaded
    const timer = setTimeout(scrollToTop, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]); // Trigger on every route change

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