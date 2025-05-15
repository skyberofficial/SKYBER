'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function PageSecurity() {
  const router = useRouter();

  useEffect(() => {
    // Disable right-click
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable DevTools detection
    const detectDevTools = () => {
      const threshold = 160;
      setInterval(() => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
          router.push('/devtools-blocked');
        }
      }, 1000);
    };

    // Disable keyboard shortcuts
    const disableKeys = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableKeys);
    detectDevTools();

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableKeys);
    };
  }, [router]);

  return null;
} 