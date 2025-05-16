'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function PageSecurity() {
  const router = useRouter();

  useEffect(() => {
    // Check if DevTools are temporarily disabled
    const checkDevToolsDisabled = () => {
      const disabledUntil = localStorage.getItem('devtools_disabled_until');
      if (disabledUntil) {
        const disabledUntilTime = parseInt(disabledUntil);
        if (Date.now() < disabledUntilTime) {
          return true;
        } else {
          localStorage.removeItem('devtools_disabled_until');
        }
      }
      return false;
    };

    // Disable right-click
    const disableRightClick = (e: MouseEvent) => {
      if (!checkDevToolsDisabled()) {
      e.preventDefault();
      return false;
      }
    };

    // Disable DevTools detection
    const detectDevTools = () => {
      const threshold = 160;
      const interval = setInterval(() => {
        // Always check the current time against the disabled until time
        if (checkDevToolsDisabled()) return;
        
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
          router.replace('/devtools-blocked');
        }
      }, 1000);

      return () => clearInterval(interval);
    };

    // Disable keyboard shortcuts
    const disableKeys = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        if (!checkDevToolsDisabled()) {
        e.preventDefault();
          router.replace('/devtools-blocked');
        return false;
        }
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableKeys);
    const cleanupDevTools = detectDevTools();

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableKeys);
      cleanupDevTools();
    };
  }, [router]);

  return null;
} 