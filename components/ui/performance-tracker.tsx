"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface PerformanceTrackerProps {
  children: React.ReactNode;
  componentName: string;
  trackProps?: boolean;
  trackState?: boolean;
  className?: string;
}

export const PerformanceTracker = React.memo<PerformanceTrackerProps>(
  ({ children, componentName, trackProps = true, trackState = true, className = "" }) => {
    if (process.env.NODE_ENV === 'development' && (process.env as any).WDYR === 'true') {
      (PerformanceTracker as any).whyDidYouRender = {
        customName: componentName,
        trackHooks: true,
        trackProps,
        trackState,
        logOnDifferentValues: true,
      };
    }

    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }
);

PerformanceTracker.displayName = 'PerformanceTracker';


