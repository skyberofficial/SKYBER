# WDYR (Why Did You Render) Integration Guide

## Overview

This project has been optimized with WDYR (Why Did You Render) to help identify and fix unnecessary re-renders in React components. WDYR is a development tool that helps you understand why your components are re-rendering.

## Features Added

### 1. Performance Tracking Components
- **PerformanceTracker**: Wraps components to track render performance
- **PerformanceDashboard**: Real-time performance monitoring UI
- **Custom Hooks**: Performance optimization utilities

### 2. Optimized Components
- **Hero Component**: Memoized with WDYR tracking
- **Services Component**: Optimized with React.memo and performance tracking
- **ServiceCard**: Individual service cards with performance monitoring

### 3. Development Tools
- **Performance Dashboard**: Shows real-time metrics and WDYR logs
- **Console Logging**: Detailed performance information in browser console
- **Visual Indicators**: Performance status and warnings

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run with WDYR Enabled

```bash
npm run dev:wdyr
```

This will start the development server with WDYR enabled and the performance dashboard visible.

### 3. Regular Development Mode

```bash
npm run dev
```

This runs without WDYR for normal development.

## Performance Dashboard

The performance dashboard appears in the top-right corner when WDYR is enabled and shows:

- **Performance Metrics**: Render count, average render time, memory usage
- **WDYR Logs**: Recent component re-renders with reasons
- **System Status**: Overall performance health indicators
- **Real-time Updates**: Live performance monitoring

## Using Performance Tools

### 1. PerformanceTracker Component

Wrap any component to track its performance:

```tsx
import { PerformanceTracker } from '@/components/ui/performance-tracker';

export const MyComponent = () => {
  return (
    <PerformanceTracker componentName="MyComponent">
      {/* Your component content */}
    </PerformanceTracker>
  );
};
```

### 2. Custom Performance Hook

Use the performance hook for detailed tracking:

```tsx
import { usePerformance } from '@/hooks/use-performance';

export const MyComponent = () => {
  const { metrics, warnIfSlow } = usePerformance({
    componentName: 'MyComponent',
    trackRenders: true,
    trackProps: true,
    trackState: true
  });

  // Check for slow renders
  warnIfSlow(16); // Warn if render takes > 16ms

  return <div>Component content</div>;
};
```

### 3. Props and State Tracking

Track specific prop and state changes:

```tsx
import { usePropsTracking, useStateTracking } from '@/hooks/use-performance';

export const MyComponent = ({ data, config }) => {
  const [state, setState] = useState({});

  // Track prop changes
  usePropsTracking({ data, config }, 'MyComponent');
  
  // Track state changes
  useStateTracking(state, 'MyComponent');

  return <div>Component content</div>;
};
```

### 4. Function Performance

Measure function execution time:

```tsx
import { useFunctionPerformance } from '@/hooks/use-performance';

export const MyComponent = () => {
  const expensiveFunction = useFunctionPerformance(
    (data) => {
      // Expensive operation
      return processedData;
    },
    'expensiveFunction'
  );

  return <div>Component content</div>;
};
```

## WDYR Configuration

The WDYR configuration is in `wdyr.ts` and includes:

- **Track All Pure Components**: Automatically tracks React.memo components
- **Track Hooks**: Monitors hook usage and changes
- **Custom Colors**: SKYBER brand colors for console output
- **Extra Hooks**: Tracks Framer Motion, React Query, and other libraries

## Performance Best Practices

### 1. Use React.memo

Wrap components that don't need frequent updates:

```tsx
export const MyComponent = React.memo(() => {
  return <div>Optimized component</div>;
});
```

### 2. Optimize Props

Avoid passing new objects/arrays on every render:

```tsx
// ❌ Bad - creates new object every render
<Component style={{ color: 'red' }} />

// ✅ Good - memoized object
const style = useMemo(() => ({ color: 'red' }), []);
<Component style={style} />
```

### 3. Use useCallback for Event Handlers

```tsx
const handleClick = useCallback(() => {
  // Handle click
}, [dependencies]);
```

### 4. Optimize Lists

Use proper keys and consider virtualization for large lists:

```tsx
{items.map((item) => (
  <ListItem key={item.id} item={item} />
))}
```

## Console Output

WDYR provides detailed console output including:

- 🔍 Component render reasons
- ⚠️ Performance warnings
- 📊 Render timing information
- 🔄 Re-render causes

## Troubleshooting

### Common Issues

1. **Too Many Re-renders**: Check for infinite loops in useEffect
2. **Slow Components**: Use React.memo and optimize expensive operations
3. **Props Changes**: Ensure stable references for objects and functions

### Performance Tips

1. **Use React DevTools Profiler** alongside WDYR
2. **Monitor the Performance Dashboard** for real-time insights
3. **Check console logs** for detailed render information
4. **Optimize images and assets** for better loading performance

## Environment Variables

- `NODE_ENV=development`: Enables development features
- `WDYR=true`: Enables WDYR tracking and performance dashboard

## Production Build

For production builds, WDYR is automatically disabled:

```bash
npm run build
npm start
```

## Contributing

When adding new components:

1. Use `React.memo` for pure components
2. Add WDYR tracking for complex components
3. Use the performance hooks for detailed monitoring
4. Test performance with the dashboard

## Support

For performance issues or WDYR questions:

1. Check the browser console for detailed logs
2. Use the Performance Dashboard for real-time monitoring
3. Review the component optimization examples in this guide
4. Consult React performance documentation

---

**Note**: WDYR is a development tool and should not be used in production builds. The performance optimizations (React.memo, useCallback, etc.) will still work in production for better performance. 