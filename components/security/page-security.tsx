'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function PageSecurity() {
  const router = useRouter();

  useEffect(() => {
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

    const disableRightClick = (e: MouseEvent) => {
      if (!checkDevToolsDisabled()) {
        e.preventDefault();
        return false;
      }
    };

    const detectDevTools = () => {
      const threshold = 160;
      const interval = setInterval(() => {
        if (checkDevToolsDisabled()) return;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
          router.replace('/devtools-blocked');
        }
      }, 1000);
      return () => clearInterval(interval);
    };

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

    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableKeys);
    const cleanupDevTools = detectDevTools();

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableKeys);
      cleanupDevTools();
    };
  }, [router]);

  return null;
}


