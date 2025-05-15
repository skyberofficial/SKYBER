"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Add loading class to body when preloader is active
    if (isLoading) {
      document.body.classList.add('loading', 'preloader-active');
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100vh';
      document.documentElement.style.touchAction = 'none';
    }

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 5000ms total / 100 steps = 50ms per step

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Remove loading class and restore scrolling when preloader is done
      document.body.classList.remove('loading', 'preloader-active');
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.documentElement.style.touchAction = '';
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      // Cleanup in case component unmounts before timer
      document.body.classList.remove('loading', 'preloader-active');
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.documentElement.style.touchAction = '';
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div 
      className="preloader"
      onContextMenu={(e) => e.preventDefault()}
      onTouchMove={(e) => e.preventDefault()}
      onWheel={(e) => e.preventDefault()}
      onClick={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
      onKeyDown={(e) => e.preventDefault()}
      tabIndex={-1}
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          className="preloader-logo text-[#17D492] w-20 h-20 md:w-24 md:h-24"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0.5, 1],
            scale: [1, 1.1, 1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 375 375"
            className="text-[#17D492]"
          >
            <path
              fill="currentColor"
              d="M328.512 185.605h-54.512c-10.031 0-18.168 8.141-18.168 18.172v54.512c0 .324.07.629.094.945l-47.399 47.399h-26.312l-33.18-33.18c.535-1.984.899-4.031.899-6.188v-72.683c0-2.157-.376-4.204-.899-6.192l18.122-18.121c.316.012.62.098.945.098h54.512c10.03 0 18.172-8.14 18.172-18.172V97.684c0-10.028-8.141-18.169-18.172-18.169h-54.512c-.324 0-.629.07-.945.094l-28.551-28.551V19.723c0-6.688-5.426-12.117-12.114-12.117H90.152c-6.687 0-12.113 5.43-12.113 12.117v36.34c0 6.687 5.426 12.113 12.113 12.113h31.325l28.55 28.55c-.011.317-.093.633-.093.946v54.511c0 .328.07.63.094.946l-18.121 18.121c-1.985-.532-4.047-.895-6.203-.895H53.035c-13.387 0-24.226 10.84-24.226 24.227v72.684c0 13.383 10.84 24.226 24.226 24.226h72.684c2.156 0 4.203-.375 6.199-.898l33.168 33.168v31.328c0 6.684 5.426 12.114 12.114 12.114h36.344c6.683 0 12.113-5.43 12.113-12.114v-31.328l47.41-47.414c.316.015.621.097.945.097h54.512c10.031 0 18.172-8.14 18.172-18.168v-54.512c0-10.031-8.141-18.172-18.172-18.172z"
            />
          </svg>
        </motion.div>

        <div className="w-32 md:w-40">
          <div className="h-0.5 bg-[#17D492]/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#17D492] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}