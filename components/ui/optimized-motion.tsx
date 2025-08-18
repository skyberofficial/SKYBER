'use client';

import React, { Suspense, lazy, ComponentType } from 'react';

// Lazy load Framer Motion components
const MotionDiv = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.div })));
const MotionSpan = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.span })));
const MotionButton = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.button })));
const MotionSection = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.section })));
const MotionArticle = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.article })));
const MotionNav = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.nav })));
const MotionUl = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.ul })));
const MotionLi = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.li })));
const MotionH1 = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.h1 })));
const MotionH2 = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.h2 })));
const MotionH3 = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.h3 })));
const MotionP = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.p })));
const MotionImg = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.img })));

// Helper function to filter out props that conflict with Framer Motion
const filterMotionProps = (props: any) => {
  const { 
    onDrag, onDragStart, onDragEnd, onDragEnter, onDragLeave, onDragOver,
    onAnimationStart, onAnimationEnd, onAnimationIteration,
    onTransitionEnd, onTransitionRun, onTransitionStart,
    ...safeProps 
  } = props;
  return safeProps;
};

// Loading fallback
const MotionFallback: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="animate-pulse">{children}</div>
);

// Optimized motion components
export const OptimizedMotion = {
  div: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><div {...props} ref={ref} /></MotionFallback>}>
      <MotionDiv {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
  
  span: React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><span {...props} ref={ref} /></MotionFallback>}>
      <MotionSpan {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
  
  button: React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><button {...props} ref={ref} /></MotionFallback>}>
      <MotionButton {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
  
  section: React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><section {...props} ref={ref} /></MotionFallback>}>
      <MotionSection {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
  
  article: React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><article {...props} ref={ref} /></MotionFallback>}>
      <MotionArticle {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
  
  nav: React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><nav {...props} ref={ref} /></MotionFallback>}>
      <MotionNav {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
  
  ul: React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><ul {...props} ref={ref} /></MotionFallback>}>
      <MotionUl {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
  
  li: React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><li {...props} ref={ref} /></MotionFallback>}>
      <MotionLi {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
  
  h1: React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><h1 {...props} ref={ref} /></MotionFallback>}>
      <MotionH1 {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
  
  h2: React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><h2 {...props} ref={ref} /></MotionFallback>}>
      <MotionH2 {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
  
  h3: React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><h3 {...props} ref={ref} /></MotionFallback>}>
      <MotionH3 {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
  
  p: React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><p {...props} ref={ref} /></MotionFallback>}>
      <MotionP {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
  
  img: React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <Suspense fallback={<MotionFallback><img {...props} ref={ref} /></MotionFallback>}>
      <MotionImg {...filterMotionProps(props)} ref={ref} />
    </Suspense>
  )),
};

// Add display names to components
OptimizedMotion.div.displayName = 'OptimizedMotion.div';
OptimizedMotion.span.displayName = 'OptimizedMotion.span';
OptimizedMotion.button.displayName = 'OptimizedMotion.button';
OptimizedMotion.section.displayName = 'OptimizedMotion.section';
OptimizedMotion.article.displayName = 'OptimizedMotion.article';
OptimizedMotion.nav.displayName = 'OptimizedMotion.nav';
OptimizedMotion.ul.displayName = 'OptimizedMotion.ul';
OptimizedMotion.li.displayName = 'OptimizedMotion.li';
OptimizedMotion.h1.displayName = 'OptimizedMotion.h1';
OptimizedMotion.h2.displayName = 'OptimizedMotion.h2';
OptimizedMotion.h3.displayName = 'OptimizedMotion.h3';
OptimizedMotion.p.displayName = 'OptimizedMotion.p';
OptimizedMotion.img.displayName = 'OptimizedMotion.img';

// Hook for lazy loading Framer Motion hooks
export const useOptimizedMotion = () => {
  const [motionHooks, setMotionHooks] = React.useState<{
    useAnimation: typeof import('framer-motion').useAnimation;
    useMotionValue: typeof import('framer-motion').useMotionValue;
    useTransform: typeof import('framer-motion').useTransform;
    useSpring: typeof import('framer-motion').useSpring;
    AnimatePresence: typeof import('framer-motion').AnimatePresence;
  } | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadMotionHooks = async () => {
      try {
        const { useAnimation, useMotionValue, useTransform, useSpring, AnimatePresence } = await import('framer-motion');
        setMotionHooks({
          useAnimation,
          useMotionValue,
          useTransform,
          useSpring,
          AnimatePresence,
        });
      } catch (error) {
        console.warn('Failed to load Framer Motion hooks:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMotionHooks();
  }, []);

  return { motionHooks, loading };
};

// Preload Framer Motion on user interaction
export const preloadFramerMotion = () => {
  if (typeof window !== 'undefined') {
    const preload = () => {
      import('framer-motion');
    };

    const events = ['mousedown', 'touchstart', 'keydown'];
    const preloadOnce = () => {
      preload();
      events.forEach(event => document.removeEventListener(event, preloadOnce));
    };
    
    events.forEach(event => document.addEventListener(event, preloadOnce, { once: true }));
  }
};
