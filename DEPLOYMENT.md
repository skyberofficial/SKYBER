# SKYBER Deployment Guide

## 🚀 Vercel Deployment (Recommended)

### Prerequisites
- Vercel account
- GitHub repository connected
- Environment variables configured

### Step-by-Step Deployment

1. **Connect to Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel
```

2. **Configure Environment Variables**
Set these in your Vercel dashboard:
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=SKYBER
```

3. **Build Settings**
- **Framework Preset**: Next.js
- **Build Command**: `pnpm run build`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`

### Vercel-Specific Configuration

The project includes `vercel.json` for optimized deployment:

```json
{
  "version": 2,
  "name": "skyber",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 🌐 Alternative Deployment Options

### Netlify Deployment

1. **Build for Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the project
pnpm run build

# Deploy to Netlify
netlify deploy --prod --dir=.next
```

2. **Netlify Configuration**
Create `netlify.toml`:
```toml
[build]
  command = "pnpm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

### GitHub Pages Deployment

1. **Build for GitHub Pages**
```bash
# Build the project
pnpm run build

# Deploy to GitHub Pages
# Configure GitHub Actions for automatic deployment
```

2. **GitHub Actions Workflow**
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: pnpm install
      
    - name: Build
      run: pnpm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./.next
```

## ⚠️ Potential Deployment Issues & Solutions

### 1. Static Export Issues

**Problem**: `output: 'export'` conflicts with API routes
**Solution**: 
- For Vercel: Comment out `output: 'export'` in `next.config.js`
- For static hosting: Use `output: 'export'` but remove API routes

### 2. Image Optimization Issues

**Problem**: Images not loading in production
**Solution**:
```javascript
// next.config.js
images: {
  unoptimized: process.env.NODE_ENV === 'production' && process.env.VERCEL ? false : true,
  domains: [
    'images.unsplash.com',
    'images.pexels.com',
    'api.dicebear.com'
  ],
}
```

### 3. Environment Variables

**Problem**: Environment variables not available in production
**Solution**:
- Set all required variables in Vercel dashboard
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Verify variables are set correctly

### 4. Build Performance

**Problem**: Slow build times
**Solution**:
- Use Vercel's Edge Functions for better performance
- Optimize bundle size with code splitting
- Enable caching for faster builds

### 5. API Routes Issues

**Problem**: API routes not working in production
**Solution**:
- Ensure `output: 'export'` is commented out for Vercel
- Use serverless functions for API routes
- Test API routes locally before deployment

## 🔧 Performance Optimization

### 1. Bundle Size Optimization
```javascript
// next.config.js
webpack: (config, { dev, isServer }) => {
  if (!dev && !isServer) {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    };
  }
  return config;
}
```

### 2. Image Optimization
- Use `next/image` with proper optimization
- Implement lazy loading for images
- Use WebP format for better compression

### 3. Code Splitting
- Implement dynamic imports for large components
- Use React.lazy for component lazy loading
- Optimize third-party library imports

## 🛡️ Security Configuration

### 1. Security Headers
```javascript
// next.config.js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ];
}
```

### 2. Environment Variables
- Never commit sensitive data to version control
- Use Vercel's environment variable management
- Rotate API keys regularly

### 3. Content Security Policy
- Implement CSP headers
- Restrict resource loading
- Monitor for security violations

## 📊 Monitoring & Analytics

### 1. Vercel Analytics
- Enable Vercel Analytics in dashboard
- Monitor Core Web Vitals
- Track user behavior

### 2. Error Monitoring
- Set up error tracking (Sentry, LogRocket)
- Monitor performance metrics
- Track user experience

### 3. Performance Monitoring
- Use Lighthouse for performance audits
- Monitor bundle size
- Track loading times

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
pnpm run build
```

2. **Deployment Errors**
- Check build logs in Vercel dashboard
- Verify environment variables
- Ensure all dependencies are installed

3. **Performance Issues**
- Enable WDYR for debugging
- Check Performance Dashboard
- Monitor Core Web Vitals

4. **API Route Issues**
- Test API routes locally
- Check serverless function logs
- Verify environment variables

## 📞 Support

For deployment issues:
1. Check Vercel documentation
2. Review build logs
3. Test locally before deployment
4. Contact Vercel support if needed

## 🎯 Best Practices

1. **Always test locally before deploying**
2. **Use environment variables for configuration**
3. **Monitor performance and errors**
4. **Keep dependencies updated**
5. **Implement proper security measures**
6. **Use CDN for static assets**
7. **Optimize images and bundle size**
8. **Implement proper caching strategies**

---

**Happy Deploying! 🚀**
