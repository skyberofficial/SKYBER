import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { BackToTop } from "@/components/ui/back-to-top";
import { PageSecurity } from "@/components/security/page-security";
import { Preloader } from "@/components/preloader";
import { FloatingWidget } from "@/components/ui/floating-widget";
import NewsletterProvider from "@/components/layout/newsletter-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "SKYBER - Protect. Build. Evolve.",
  description: "SKYBER is a security-minded studio crafting resilient digital products. From idea to launch, we embed privacy, performance and maintainability into every decision.",
  keywords: ["cybersecurity", "web development", "app development", "UI/UX design", "technology consulting", "digital security", "software development"],
  authors: [{ name: "SKYBER Team" }],
  creator: "SKYBER",
  publisher: "SKYBER",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skyber.com",
    title: "SKYBER - Protect. Build. Evolve.",
    description: "SKYBER is a security-minded studio crafting resilient digital products. From idea to launch, we embed privacy, performance and maintainability into every decision.",
    siteName: "SKYBER",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKYBER - Protect. Build. Evolve.",
    description: "SKYBER is a security-minded studio crafting resilient digital products. From idea to launch, we embed privacy, performance and maintainability into every decision.",
    creator: "@skyber",
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable}`} suppressHydrationWarning>
      <head>
        {/* Meta tags for better SEO and mobile experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#17D492" />
        <meta name="msapplication-TileColor" content="#17D492" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SKYBER" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* TrustBox script */}
        <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
        {/* End TrustBox script */}
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Preloader />
            <PageSecurity />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <BackToTop />
          <FloatingWidget />
          <NewsletterProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
