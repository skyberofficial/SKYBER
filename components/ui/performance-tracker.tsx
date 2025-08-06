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
    // Add WDYR tracking in development
    if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
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

// HOC for wrapping components with performance tracking
export function withPerformanceTracking<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string,
  options: {
    trackProps?: boolean;
    trackState?: boolean;
  } = {}
) {
  const WithPerformanceTracking = React.memo<P>((props) => {
    // Add WDYR tracking in development
    if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
      (WithPerformanceTracking as any).whyDidYouRender = {
        customName: componentName,
        trackHooks: true,
        trackProps: options.trackProps ?? true,
        trackState: options.trackState ?? true,
        logOnDifferentValues: true,
      };
    }

    return <WrappedComponent {...props} />;
  });

  WithPerformanceTracking.displayName = `withPerformanceTracking(${componentName})`;
  return WithPerformanceTracking;
}

// Hook for tracking component performance
export function usePerformanceTracking(componentName: string) {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
      console.log(`🔍 [WDYR] ${componentName} mounted`);
    }
    
    return () => {
      if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
        console.log(`🔍 [WDYR] ${componentName} unmounted`);
      }
    };
  }, [componentName]);
} 