declare module 'vanta/dist/vanta.net.min' {
  interface VantaOptions {
    el: HTMLElement;
    THREE: typeof import('three');
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
    mouseEase?: boolean;
    mouseFalloff?: number;
    mouseCoeffX?: number;
    mouseCoeffY?: number;
    onMouseMove?: (e: MouseEvent) => void;
  }

  function NET(options: VantaOptions): any;
  export default NET;
} 