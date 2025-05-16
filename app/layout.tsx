import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Preloader } from '@/components/preloader';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PageSecurity } from '@/components/security/page-security';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://skyber.com'),
  title: {
    default: 'SKYBER | Cybersecurity & Web Development',
    template: '%s | SKYBER'
  },
  description: 'Professional cybersecurity solutions and full-stack web development services for businesses and startups. Secure your digital future with SKYBER.',
  keywords: [
    'cybersecurity',
    'web development',
    'app development',
    'custom software',
    'UI/UX design',
    'tech consultation',
    'security solutions',
    'digital transformation'
  ],
  authors: [{ name: 'SKYBER' }],
  creator: 'SKYBER',
  publisher: 'SKYBER',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skyber.com',
    siteName: 'SKYBER',
    title: 'SKYBER | Cybersecurity & Web Development',
    description: 'Professional cybersecurity solutions and full-stack web development services for businesses and startups. Secure your digital future with SKYBER.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SKYBER - Cybersecurity & Web Development'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYBER | Cybersecurity & Web Development',
    description: 'Professional cybersecurity solutions and full-stack web development services for businesses and startups. Secure your digital future with SKYBER.',
    images: ['/og-image.jpg'],
    creator: '@skyber',
    site: '@skyber'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      me: ['your-personal-website'],
    },
  },
  alternates: {
    canonical: 'https://skyber.com',
    languages: {
      'en-US': 'https://skyber.com',
    },
  },
  category: 'technology'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`no-scrollbar ${orbitron.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} no-scrollbar overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PageSecurity />
          <Preloader />
          <div className="flex min-h-screen flex-col no-scrollbar overflow-x-hidden">
            <Header />
            <main className="flex-grow no-scrollbar overflow-x-hidden">{children}</main>
            <Footer />
          </div>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}