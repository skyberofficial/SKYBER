// Client-side only Vanta effect loader
export const loadVantaEffect = async (element: HTMLElement) => {
  if (typeof window === 'undefined') return null;

  try {
    // @ts-ignore - Suppress TypeScript checking for these modules
    const NET = await import('vanta/dist/vanta.net.min').then((mod: any) => mod.default);
    // @ts-ignore - Suppress TypeScript checking for these modules
    const THREE = await import('three').then((mod: any) => mod);

    return NET({
      el: element,
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
            // @ts-ignore
            NET.options.mouseCoeffX = 0.1;
            // @ts-ignore
            NET.options.mouseCoeffY = 0.1;
          } else {
            // @ts-ignore
            NET.options.mouseCoeffX = 0;
            // @ts-ignore
            NET.options.mouseCoeffY = 0;
          }
        }
      }
    });
  } catch (error) {
    console.warn('Failed to load Vanta effect:', error);
    return null;
  }
};
