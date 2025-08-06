#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Analyzing bundle size and performance...\n');

// Check if webpack-bundle-analyzer is installed
try {
  require.resolve('webpack-bundle-analyzer');
} catch (e) {
  console.log('📦 Installing webpack-bundle-analyzer...');
  execSync('pnpm add -D webpack-bundle-analyzer', { stdio: 'inherit' });
}

// Analyze bundle
console.log('📊 Running bundle analysis...');
try {
  execSync('ANALYZE=true pnpm run build', { stdio: 'inherit' });
} catch (error) {
  console.log('❌ Bundle analysis failed. Running regular build...');
  execSync('pnpm run build', { stdio: 'inherit' });
}

// Check for large dependencies
console.log('\n📋 Checking for large dependencies...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

const largeDeps = [
  'framer-motion',
  'three',
  '@react-three/fiber',
  '@react-three/drei',
  'gsap',
  'animejs',
  'vanta',
  'recharts',
  'maplibre-gl',
  'lottie-react',
  'react-redux',
  '@tanstack/react-query',
];

console.log('\n📦 Large dependencies found:');
largeDeps.forEach(dep => {
  if (dependencies[dep]) {
    console.log(`  - ${dep}: ${dependencies[dep]}`);
  }
});

// Performance recommendations
console.log('\n🚀 Performance Optimization Recommendations:\n');

const recommendations = [
  {
    category: 'Bundle Size',
    items: [
      '✅ Use dynamic imports for large libraries (framer-motion, three.js)',
      '✅ Implement code splitting for routes',
      '✅ Optimize images with next/image',
      '✅ Remove unused dependencies',
      '✅ Use tree shaking for better optimization',
    ]
  },
  {
    category: 'Loading Performance',
    items: [
      '✅ Implement lazy loading for components',
      '✅ Use Suspense boundaries',
      '✅ Preload critical resources',
      '✅ Optimize font loading',
      '✅ Implement service worker for caching',
    ]
  },
  {
    category: 'Runtime Performance',
    items: [
      '✅ Use React.memo for expensive components',
      '✅ Implement useCallback and useMemo',
      '✅ Optimize re-renders with WDYR',
      '✅ Use virtual scrolling for large lists',
      '✅ Implement proper error boundaries',
    ]
  },
  {
    category: 'Caching Strategy',
    items: [
      '✅ Implement proper cache headers',
      '✅ Use CDN for static assets',
      '✅ Implement service worker caching',
      '✅ Optimize API responses',
      '✅ Use incremental static regeneration',
    ]
  }
];

recommendations.forEach(rec => {
  console.log(`📁 ${rec.category}:`);
  rec.items.forEach(item => {
    console.log(`  ${item}`);
  });
  console.log('');
});

// Check for optimization opportunities
console.log('🔍 Checking for optimization opportunities...\n');

const optimizationChecks = [
  {
    name: 'Dynamic Imports',
    check: () => {
      const files = fs.readdirSync('components').filter(f => f.endsWith('.tsx'));
      const hasDynamicImports = files.some(file => {
        const content = fs.readFileSync(`components/${file}`, 'utf8');
        return content.includes('dynamic(') || content.includes('lazy(');
      });
      return hasDynamicImports ? '✅ Implemented' : '❌ Not implemented';
    }
  },
  {
    name: 'Image Optimization',
    check: () => {
      const files = fs.readdirSync('app').filter(f => f.endsWith('.tsx'));
      const hasOptimizedImages = files.some(file => {
        const content = fs.readFileSync(`app/${file}`, 'utf8');
        return content.includes('next/image');
      });
      return hasOptimizedImages ? '✅ Implemented' : '❌ Not implemented';
    }
  },
  {
    name: 'Code Splitting',
    check: () => {
      const nextConfig = fs.readFileSync('next.config.js', 'utf8');
      return nextConfig.includes('splitChunks') ? '✅ Implemented' : '❌ Not implemented';
    }
  },
  {
    name: 'Performance Monitoring',
    check: () => {
      const files = fs.readdirSync('components/dev');
      return files.includes('performance-dashboard.tsx') ? '✅ Implemented' : '❌ Not implemented';
    }
  }
];

optimizationChecks.forEach(check => {
  const status = check.check();
  console.log(`${check.name}: ${status}`);
});

console.log('\n🎯 Next Steps:');
console.log('1. Review bundle analyzer output at http://localhost:8888');
console.log('2. Implement lazy loading for large components');
console.log('3. Optimize images and assets');
console.log('4. Monitor Core Web Vitals');
console.log('5. Implement caching strategies');

console.log('\n✨ Bundle optimization analysis complete!');
