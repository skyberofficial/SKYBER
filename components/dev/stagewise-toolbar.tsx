'use client';

import { useEffect } from 'react';

const stagewiseConfig = {
  plugins: []
};

export function StagewiseDevTools() {
  useEffect(() => {
    let isInitialized = false;

    async function initializeToolbar() {
      if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined' && !isInitialized) {
        try {
          const { initToolbar } = await import('@stagewise/toolbar');
          await initToolbar(stagewiseConfig);
          isInitialized = true;
        } catch (error) {
          console.error('Failed to initialize Stagewise toolbar:', error);
        }
      }
    }

    initializeToolbar();

    return () => {
      isInitialized = false;
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    __STAGEWISE_INITIALIZED__?: boolean;
  }
}