// Optimized imports for better performance
// This file contains lazy-loaded imports for large libraries

// Framer Motion - Lazy load only what's needed
export const motion = {
  div: () => import('framer-motion').then(mod => ({ default: mod.motion.div })),
  span: () => import('framer-motion').then(mod => ({ default: mod.motion.span })),
  button: () => import('framer-motion').then(mod => ({ default: mod.motion.button })),
  section: () => import('framer-motion').then(mod => ({ default: mod.motion.section })),
  article: () => import('framer-motion').then(mod => ({ default: mod.motion.article })),
  nav: () => import('framer-motion').then(mod => ({ default: mod.motion.nav })),
  ul: () => import('framer-motion').then(mod => ({ default: mod.motion.ul })),
  li: () => import('framer-motion').then(mod => ({ default: mod.motion.li })),
  h1: () => import('framer-motion').then(mod => ({ default: mod.motion.h1 })),
  h2: () => import('framer-motion').then(mod => ({ default: mod.motion.h2 })),
  h3: () => import('framer-motion').then(mod => ({ default: mod.motion.h3 })),
  p: () => import('framer-motion').then(mod => ({ default: mod.motion.p })),
  img: () => import('framer-motion').then(mod => ({ default: mod.motion.img })),
};

// Framer Motion hooks - Lazy load
export const framerHooks = {
  useAnimation: () => import('framer-motion').then(mod => ({ default: mod.useAnimation })),
  useMotionValue: () => import('framer-motion').then(mod => ({ default: mod.useMotionValue })),
  useTransform: () => import('framer-motion').then(mod => ({ default: mod.useTransform })),
  useSpring: () => import('framer-motion').then(mod => ({ default: mod.useSpring })),
  AnimatePresence: () => import('framer-motion').then(mod => ({ default: mod.AnimatePresence })),
};

// Three.js - Lazy load for 3D components
export const three = {
  Canvas: () => import('@react-three/fiber').then(mod => ({ default: mod.Canvas })),
  useGLTF: () => import('@react-three/drei').then(mod => ({ default: mod.useGLTF })),
  OrbitControls: () => import('@react-three/drei').then(mod => ({ default: mod.OrbitControls })),
  Environment: () => import('@react-three/drei').then(mod => ({ default: mod.Environment })),
  Stage: () => import('@react-three/drei').then(mod => ({ default: mod.Stage })),
};

// GSAP - Lazy load for animations
export const gsap = {
  gsap: () => import('gsap').then(mod => ({ default: mod.gsap })),
  ScrollTrigger: () => import('gsap/ScrollTrigger').then(mod => ({ default: mod.ScrollTrigger })),
  TextPlugin: () => import('gsap/TextPlugin').then(mod => ({ default: mod.TextPlugin })),
};

// Vanta.js - Lazy load for background effects
export const vanta = {
  VANTA: () => import('vanta/dist/vanta.net.min').then(mod => ({ default: mod.default })),
};

// Lottie - Lazy load for animations
export const lottie = {
  default: () => import('lottie-react').then(mod => ({ default: mod.default })),
};

// Recharts - Lazy load for charts
export const recharts = {
  LineChart: () => import('recharts').then(mod => ({ default: mod.LineChart })),
  BarChart: () => import('recharts').then(mod => ({ default: mod.BarChart })),
  PieChart: () => import('recharts').then(mod => ({ default: mod.PieChart })),
  Line: () => import('recharts').then(mod => ({ default: mod.Line })),
  Bar: () => import('recharts').then(mod => ({ default: mod.Bar })),
  Pie: () => import('recharts').then(mod => ({ default: mod.Pie })),
  XAxis: () => import('recharts').then(mod => ({ default: mod.XAxis })),
  YAxis: () => import('recharts').then(mod => ({ default: mod.YAxis })),
  CartesianGrid: () => import('recharts').then(mod => ({ default: mod.CartesianGrid })),
  Tooltip: () => import('recharts').then(mod => ({ default: mod.Tooltip })),
  ResponsiveContainer: () => import('recharts').then(mod => ({ default: mod.ResponsiveContainer })),
};

// Utility function for dynamic imports
export const dynamicImport = <T>(importFn: () => Promise<{ default: T }>): Promise<T> => {
  return importFn().then(mod => mod.default);
};

// Preload critical components
export const preloadCritical = () => {
  // Preload critical components on user interaction
  if (typeof window !== 'undefined') {
    const preload = () => {
      // Preload Framer Motion
      import('framer-motion');
      // Preload Three.js if needed
      if (window.location.pathname.includes('/3d') || window.location.pathname.includes('/services')) {
        import('@react-three/fiber');
        import('@react-three/drei');
      }
    };

    // Preload on first user interaction
    const events = ['mousedown', 'touchstart', 'keydown'];
    const preloadOnce = () => {
      preload();
      events.forEach(event => document.removeEventListener(event, preloadOnce));
    };
    
    events.forEach(event => document.addEventListener(event, preloadOnce, { once: true }));
  }
};
