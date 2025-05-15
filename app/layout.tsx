import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Preloader } from '@/components/preloader';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Skyber | Cybersecurity & Web Development',
  description: 'Professional cybersecurity solutions and full-stack web development services for businesses and startups.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Apply scrollbar hiding styles
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('overflow-y', 'scroll');
    document.documentElement.style.setProperty('scrollbar-width', 'none');
    document.body.style.setProperty('overflow-y', 'scroll');
    document.body.style.setProperty('scrollbar-width', 'none');
  }

  return (
    <html lang="en" suppressHydrationWarning className="no-scrollbar">
      <body className={`${inter.className} no-scrollbar`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Preloader />
          <div className="flex min-h-screen flex-col no-scrollbar">
            <Header />
            <main className="flex-grow no-scrollbar">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}