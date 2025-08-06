# SKYBER - Cybersecurity & Web Development

[![SKYBER](https://img.shields.io/badge/SKYBER-Cybersecurity%20%26%20Web%20Development-17D492?style=for-the-badge&logo=shield&logoColor=white)](https://skyber.com)
[![Next.js](https://img.shields.io/badge/Next.js-13.5.11-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?style=for-the-badge&logo=vercel)](https://vercel.com)

> Professional cybersecurity solutions and full-stack web development services for businesses and startups. Secure your digital future with SKYBER.

## 🚀 Features

- **🔒 Cybersecurity Solutions** - Advanced security monitoring and threat detection
- **💻 Full-Stack Development** - Modern web applications with cutting-edge technologies
- **🎨 Beautiful UI/UX** - Stunning designs with smooth animations and transitions
- **⚡ Performance Optimized** - WDYR integration for optimal React performance
- **📱 Responsive Design** - Mobile-first approach with cross-device compatibility
- **🌙 Dark/Light Mode** - Seamless theme switching with system preference detection
- **🔄 Smooth Transitions** - Barba.js powered page transitions
- **📊 Real-time Analytics** - Performance monitoring and insights dashboard

## 🛠️ Tech Stack

### Frontend
- **Next.js 13.5.11** - React framework with App Router
- **TypeScript 5.2.2** - Type-safe JavaScript
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **Framer Motion 11.18.2** - Animation library
- **Radix UI** - Accessible component primitives
- **Lenis 1.3.8** - Smooth scrolling library
- **Barba.js 2.10.3** - Page transition library

### Performance & Monitoring
- **WDYR** - Why Did You Render for performance optimization
- **Vercel Analytics** - Real-time performance monitoring
- **Vercel Speed Insights** - Core Web Vitals tracking

### 3D & Graphics
- **Three.js 0.162.0** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Vanta.js** - Animated backgrounds

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/skyber.git
cd skyber
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Run development server**
```bash
# Regular development mode
pnpm run dev

# Development with WDYR performance monitoring
pnpm run dev:wdyr
```

5. **Open your browser**
```
http://localhost:3000
```

## 🎯 Available Scripts

```bash
# Development
pnpm run dev              # Start development server
pnpm run dev:wdyr         # Start with WDYR performance monitoring
pnpm run setup:wdyr       # Verify WDYR setup

# Performance & Optimization
pnpm run analyze          # Analyze bundle size with webpack-bundle-analyzer
pnpm run optimize         # Run performance optimization analysis
pnpm run performance      # Full performance check and analysis
pnpm run bundle-report    # Generate detailed bundle report

# Production
pnpm run build            # Build for production
pnpm run start            # Start production server
pnpm run lint             # Run ESLint

# Database (if using Prisma)
pnpm run db:generate      # Generate Prisma client
pnpm run db:push          # Push schema to database
pnpm run db:studio        # Open Prisma Studio
```

## 🏗️ Project Structure

```
skyber/
├── app/                          # Next.js App Router
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── portfolio/               # Portfolio page
│   ├── insights/                # Insights page
│   ├── client/                  # Client area
│   ├── api/                     # API routes
│   └── layout.tsx              # Root layout
├── components/                   # React components
│   ├── ui/                     # Reusable UI components
│   ├── sections/               # Page sections
│   ├── layout/                 # Layout components
│   ├── dev/                    # Development tools
│   └── smooth-scroll/          # Smooth scrolling
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── types/                       # TypeScript declarations
├── public/                      # Static assets
├── scripts/                     # Build scripts
└── backend/                     # Backend services
```

## 🎨 Key Components

### Performance Monitoring
- **WDYR Integration** - Why Did You Render for React optimization
- **Performance Dashboard** - Real-time metrics and monitoring
- **Custom Hooks** - Performance tracking utilities

### Smooth Scrolling
- **Lenis Integration** - Modern smooth scrolling library
- **Scroll Animations** - GSAP-powered scroll effects
- **Performance Optimized** - 60fps smooth scrolling

### Page Transitions
- **Barba.js** - Smooth page transitions
- **Custom Animations** - Fade, slide, and custom transitions
- **Performance Optimized** - Lightweight and fast

### UI Components
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Dark/Light Mode** - Theme switching

## 🚀 Deployment

### Vercel Deployment (Recommended)

This project is optimized for Vercel deployment. Here's what you need to know:

#### ✅ Vercel-Compatible Features
- **Full SSR Support** - Server-side rendering and API routes
- **Image Optimization** - Automatic image optimization
- **Edge Functions** - Serverless functions support
- **Environment Variables** - Secure configuration management
- **Analytics** - Built-in performance monitoring

#### 🔧 Vercel Configuration

1. **Connect to Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
```

2. **Environment Variables**
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

#### ⚠️ Potential Deployment Issues & Solutions

1. **Static Export Issues**
```javascript
// next.config.js - Already configured for Vercel
const nextConfig = {
  // output: 'export', // Commented out for Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: process.env.NODE_ENV === 'production' && process.env.VERCEL ? false : true,
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'api.dicebear.com',
      'upload.wikimedia.org'
    ],
  },
};
```

2. **Image Optimization**
- ✅ Configured for Vercel's image optimization
- ✅ Fallback to unoptimized for static export
- ✅ External domain support

3. **API Routes**
- ✅ Full API route support in Vercel
- ✅ Serverless functions enabled
- ✅ Proper error handling

4. **Environment Variables**
- ✅ Secure environment variable management
- ✅ Client-side variable support
- ✅ Production-ready configuration

5. **Build Performance**
- ✅ Optimized webpack configuration
- ✅ Code splitting enabled
- ✅ Bundle size optimization

### Alternative Deployment

#### Netlify
```bash
# Build for Netlify
pnpm run build

# Deploy to Netlify
netlify deploy --prod --dir=.next
```

#### GitHub Pages
```bash
# Build for GitHub Pages
pnpm run build

# Deploy to GitHub Pages
# Configure GitHub Actions for automatic deployment
```

### Deployment Checklist

Before deploying to Vercel:

- [ ] **Environment Variables** - Set all required variables in Vercel dashboard
- [ ] **Build Test** - Test build locally with `pnpm run build`
- [ ] **API Routes** - Test API routes locally
- [ ] **Image Optimization** - Verify images load correctly
- [ ] **Performance** - Check Core Web Vitals
- [ ] **Security** - Verify security headers are set
- [ ] **Analytics** - Enable Vercel Analytics

### Common Deployment Issues

1. **Build Failures**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
pnpm run build
```

2. **Environment Variables**
- Set all required variables in Vercel dashboard
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Verify variables are set correctly

3. **Performance Issues**
- Enable WDYR for debugging: `pnpm run dev:wdyr`
- Check Performance Dashboard
- Monitor Core Web Vitals

4. **API Route Issues**
- Test API routes locally before deployment
- Check serverless function logs in Vercel dashboard
- Verify environment variables are set

For detailed deployment information, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# App Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=SKYBER

# Database (if using Prisma)
DATABASE_URL="your-database-url"

# External Services
GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

### Performance Optimization

#### WDYR (Why Did You Render)
```bash
# Enable WDYR for performance monitoring
pnpm run dev:wdyr
```

#### Component Optimization
```tsx
// Use React.memo for pure components
export const MyComponent = React.memo(() => {
  return <div>Optimized component</div>;
});

// Use performance tracking
<PerformanceTracker componentName="MyComponent">
  <MyComponent />
</PerformanceTracker>
```

## 📊 Performance Features

### Real-time Monitoring
- **Performance Dashboard** - Live metrics and insights
- **WDYR Logs** - Component re-render tracking
- **System Status** - CPU, memory, and network monitoring

### Optimization Tools
- **React.memo** - Component memoization
- **useCallback** - Function memoization
- **useMemo** - Value memoization
- **Code Splitting** - Automatic code splitting

### Performance Metrics
- **Core Web Vitals** - LCP, FID, CLS tracking
- **Bundle Analysis** - Webpack bundle analyzer
- **Lighthouse Scores** - Performance auditing

## 🎨 Design System

### Colors
```css
/* Primary Colors */
--primary: #17D492;        /* SKYBER Green */
--primary-foreground: #ffffff;

/* Background Colors */
--background: #ffffff;     /* Light mode */
--background: #0a0a0a;     /* Dark mode */

/* Accent Colors */
--accent: #f4f4f5;        /* Light mode */
--accent: #27272a;        /* Dark mode */
```

### Typography
```css
/* Font Families */
--font-inter: 'Inter', sans-serif;
--font-orbitron: 'Orbitron', sans-serif;

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing
```css
/* Spacing Scale */
--spacing-xs: 0.25rem;    /* 4px */
--spacing-sm: 0.5rem;     /* 8px */
--spacing-md: 1rem;       /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
```

## 🔒 Security Features

### Cybersecurity Solutions
- **Threat Detection** - Real-time security monitoring
- **Vulnerability Assessment** - Security scanning and reporting
- **Incident Response** - 24/7 security monitoring
- **Compliance** - Industry-standard security practices

### Web Security
- **HTTPS** - Secure communication
- **CSP** - Content Security Policy
- **XSS Protection** - Cross-site scripting prevention
- **CSRF Protection** - Cross-site request forgery prevention

## 📈 Analytics & Monitoring

### Vercel Analytics
- **Real-time Analytics** - User behavior tracking
- **Performance Monitoring** - Core Web Vitals
- **Error Tracking** - Automatic error reporting

### Custom Analytics
- **Performance Dashboard** - Custom metrics tracking
- **WDYR Integration** - React performance monitoring
- **User Experience** - Interaction tracking

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
```bash
git checkout -b feature/amazing-feature
```
3. **Commit your changes**
```bash
git commit -m 'Add amazing feature'
```
4. **Push to the branch**
```bash
git push origin feature/amazing-feature
```
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Test thoroughly before submitting PRs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Getting Help
- **Documentation** - Check the docs in this README
- **Issues** - Open an issue on GitHub
- **Discussions** - Use GitHub Discussions for questions

### Common Issues

#### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
pnpm run build
```

#### Performance Issues
```bash
# Enable WDYR for debugging
pnpm run dev:wdyr
# Check Performance Dashboard
```

#### Deployment Issues
- Verify environment variables are set
- Check build logs in Vercel dashboard
- Ensure all dependencies are installed

## 🎉 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Vercel** - Deployment platform
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lenis** - Smooth scrolling library
- **Barba.js** - Page transition library

## 📞 Contact

- **Website**: [https://skyber.com](https://skyber.com)
- **Email**: info@skyber.codes
- **Phone**: +91 89574 76865
- **Location**: Mandhana, Kanpur, Uttar Pradesh, India

---

<div align="center">

**Made with ❤️ by SKYBER Team**

[![SKYBER](https://img.shields.io/badge/SKYBER-Cybersecurity%20%26%20Web%20Development-17D492?style=for-the-badge&logo=shield&logoColor=white)](https://skyber.com)

</div>
