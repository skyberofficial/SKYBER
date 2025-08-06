import { useCallback, useRef, useEffect, useMemo } from 'react';

interface PerformanceMetrics {
  renderCount: number;
  lastRenderTime: number;
  averageRenderTime: number;
  totalRenderTime: number;
}

interface UsePerformanceOptions {
  componentName: string;
  trackRenders?: boolean;
  trackProps?: boolean;
  trackState?: boolean;
  logToConsole?: boolean;
}

export function usePerformance(options: UsePerformanceOptions) {
  const {
    componentName,
    trackRenders = true,
    trackProps = true,
    trackState = true,
    logToConsole = true
  } = options;

  const renderCountRef = useRef(0);
  const lastRenderTimeRef = useRef(0);
  const totalRenderTimeRef = useRef(0);
  const mountTimeRef = useRef(Date.now());

  // Track render performance
  useEffect(() => {
    if (trackRenders && process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
      const renderStartTime = performance.now();
      renderCountRef.current += 1;
      
      return () => {
        const renderEndTime = performance.now();
        const renderTime = renderEndTime - renderStartTime;
        lastRenderTimeRef.current = renderTime;
        totalRenderTimeRef.current += renderTime;
        
        if (logToConsole) {
          console.log(`🔍 [WDYR] ${componentName} rendered in ${renderTime.toFixed(2)}ms (render #${renderCountRef.current})`);
        }
      };
    }
  });

  // Performance metrics
  const metrics = useMemo<PerformanceMetrics>(() => ({
    renderCount: renderCountRef.current,
    lastRenderTime: lastRenderTimeRef.current,
    averageRenderTime: renderCountRef.current > 0 
      ? totalRenderTimeRef.current / renderCountRef.current 
      : 0,
    totalRenderTime: totalRenderTimeRef.current
  }), []);

  // Optimized callback wrapper
  const createOptimizedCallback = useCallback(<T extends (...args: any[]) => any>(
    callback: T,
    deps: React.DependencyList = []
  ): T => {
    return useCallback(callback, deps) as T;
  }, []);

  // Memoization helper
  const createMemoizedValue = useCallback(<T>(
    factory: () => T,
    deps: React.DependencyList = []
  ): T => {
    return useMemo(factory, deps);
  }, []);

  // Performance warning
  const warnIfSlow = useCallback((threshold: number = 16) => {
    if (lastRenderTimeRef.current > threshold && logToConsole) {
      console.warn(`⚠️ [Performance] ${componentName} render took ${lastRenderTimeRef.current.toFixed(2)}ms (threshold: ${threshold}ms)`);
    }
  }, [componentName, logToConsole]);

  // Component lifecycle tracking
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
      console.log(`🔍 [WDYR] ${componentName} mounted`);
      
      return () => {
        const totalTime = Date.now() - mountTimeRef.current;
        console.log(`🔍 [WDYR] ${componentName} unmounted after ${totalTime}ms (${renderCountRef.current} renders)`);
      };
    }
  }, [componentName]);

  return {
    metrics,
    createOptimizedCallback,
    createMemoizedValue,
    warnIfSlow,
    renderCount: renderCountRef.current,
    lastRenderTime: lastRenderTimeRef.current,
    averageRenderTime: metrics.averageRenderTime
  };
}

// Hook for tracking specific props changes
export function usePropsTracking<T extends Record<string, any>>(
  props: T,
  componentName: string
) {
  const prevPropsRef = useRef<T>(props);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
      const changedProps: string[] = [];
      
      Object.keys(props).forEach(key => {
        if (prevPropsRef.current[key] !== props[key]) {
          changedProps.push(key);
        }
      });

      if (changedProps.length > 0) {
        console.log(`🔍 [WDYR] ${componentName} props changed:`, changedProps);
      }
    }
    
    prevPropsRef.current = props;
  }, [props, componentName]);
}

// Hook for tracking state changes
export function useStateTracking<T>(
  state: T,
  componentName: string
) {
  const prevStateRef = useRef<T>(state);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
      if (prevStateRef.current !== state) {
        console.log(`🔍 [WDYR] ${componentName} state changed:`, {
          from: prevStateRef.current,
          to: state
        });
      }
    }
    
    prevStateRef.current = state;
  }, [state, componentName]);
}

// Hook for measuring function performance
export function useFunctionPerformance<T extends (...args: any[]) => any>(
  fn: T,
  functionName: string
): T {
  return useCallback((...args: Parameters<T>) => {
    if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
      const startTime = performance.now();
      const result = fn(...args);
      const endTime = performance.now();
      
      console.log(`🔍 [WDYR] ${functionName} executed in ${(endTime - startTime).toFixed(2)}ms`);
      
      return result;
    }
    
    return fn(...args);
  }, [fn, functionName]) as T;
} 