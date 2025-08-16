"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSidebar } from './floating-widget';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { isSidebarOpen } = useSidebar();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const doc = document.documentElement;
      const scrollHeight = doc.scrollHeight;
      const viewportHeight = window.innerHeight || doc.clientHeight || 0;
      const maxScrollable = Math.max(scrollHeight - viewportHeight, 1);
      const scrolledRatio = scrollTop / maxScrollable; // 0..1
      setIsVisible(scrolledRatio > 0.05);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true } as any);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll as any);
      window.removeEventListener('resize', handleScroll as any);
    };
  }, []);

  const scrollToTop = () => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, opts?: Record<string, unknown>) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Don't show back to top button when sidebar is open
  if (isSidebarOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-[9999]"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className={cn(
              'h-12 w-12 rounded-full bg-[#17D492] hover:bg-[#14c082] text-white shadow-lg',
              'backdrop-blur-md border border-border/20',
              'transition-all duration-300 hover:scale-110',
              'focus:outline-none focus:ring-2 focus:ring-[#17D492] focus:ring-offset-2'
            )}
            aria-label="Back to top"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


