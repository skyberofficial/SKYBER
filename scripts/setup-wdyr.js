#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up WDYR for SKYBER project...\n');

// Check if package.json exists
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ package.json not found. Please run this script from the project root.');
  process.exit(1);
}

// Check if wdyr.ts exists
const wdyrPath = path.join(process.cwd(), 'wdyr.ts');
if (!fs.existsSync(wdyrPath)) {
  console.error('❌ wdyr.ts not found. Please ensure WDYR is properly configured.');
  process.exit(1);
}

// Check if performance tracker exists
const performanceTrackerPath = path.join(process.cwd(), 'components/ui/performance-tracker.tsx');
if (!fs.existsSync(performanceTrackerPath)) {
  console.error('❌ Performance tracker component not found.');
  process.exit(1);
}

console.log('✅ WDYR configuration files found!');
console.log('✅ Performance tracking components ready!');
console.log('✅ Custom hooks available!');

console.log('\n📋 Next steps:');
console.log('1. Run: npm run dev:wdyr');
console.log('2. Open your browser and check the console for WDYR logs');
console.log('3. Look for the Performance Dashboard in the top-right corner');
console.log('4. Monitor component re-renders and performance metrics');

console.log('\n🔧 Available commands:');
console.log('- npm run dev:wdyr    : Start development server with WDYR');
console.log('- npm run dev         : Start development server without WDYR');
console.log('- npm run build       : Build for production (WDYR disabled)');

console.log('\n📖 Documentation:');
console.log('- Check WDYR_README.md for detailed usage instructions');
console.log('- Review component optimization examples in the codebase');

console.log('\n🎯 Performance Tips:');
console.log('- Use React.memo for pure components');
console.log('- Optimize props to avoid unnecessary re-renders');
console.log('- Use useCallback for event handlers');
console.log('- Monitor the Performance Dashboard for insights');

console.log('\n✨ WDYR is ready to help optimize your SKYBER project!'); 