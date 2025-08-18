import { Metadata } from 'next';

export const siteConfig = {
  name: 'SKYBER',
  description: 'SKYBER is a security-minded studio crafting resilient digital products. From idea to launch, we embed privacy, performance and maintainability into every decision.',
  url: 'https://skyber.dev',
  ogImage: 'https://skyber.dev/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/skyber',
    github: 'https://github.com/skyber',
    linkedin: 'https://linkedin.com/company/skyber',
  },
};

export const defaultMetadata: Metadata = {
  title: {
    default: 'SKYBER - Protect. Build. Evolve.',
    template: '%s | SKYBER',
  },
  description: 'SKYBER is a security-minded studio crafting resilient digital products. From idea to launch, we embed privacy, performance and maintainability into every decision.',
  keywords: [
    'cybersecurity',
    'web development',
    'app development',
    'UI/UX design',
    'technology consulting',
    'digital security',
    'software development',
    'cyber protection',
    'secure applications',
    'business technology',
    'IT consulting',
    'digital transformation',
    'security solutions',
    'web applications',
    'mobile apps',
    'custom software',
    'cyber defense',
    'data protection',
    'network security',
    'cloud security'
  ],
  authors: [{ name: 'SKYBER Team' }],
  creator: 'SKYBER',
  publisher: 'SKYBER',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'SKYBER - Protect. Build. Evolve.',
    description: 'SKYBER is a security-minded studio crafting resilient digital products. From idea to launch, we embed privacy, performance and maintainability into every decision.',
    siteName: 'SKYBER',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'SKYBER - Cybersecurity and Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYBER - Protect. Build. Evolve.',
    description: 'SKYBER is a security-minded studio crafting resilient digital products. From idea to launch, we embed privacy, performance and maintainability into every decision.',
    creator: '@skyber',
    images: [siteConfig.ogImage],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: 'technology',
};

// Page-specific metadata functions
export function getPageMetadata(
  title: string,
  description?: string,
  keywords?: string[],
  image?: string
): Metadata {
  return {
    title,
    description: description || defaultMetadata.description,
    keywords: keywords || defaultMetadata.keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description: description || defaultMetadata.description,
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description: description || defaultMetadata.description,
      images: image ? [image] : defaultMetadata.twitter?.images,
    },
  };
}

// Service-specific metadata
export const serviceMetadata = {
  cybersecurity: getPageMetadata(
    'Cybersecurity Solutions | SKYBER',
    'Comprehensive cybersecurity services including threat detection, vulnerability assessment, and security infrastructure development.',
    ['cybersecurity', 'threat detection', 'vulnerability assessment', 'security infrastructure', 'cyber protection']
  ),
  webDevelopment: getPageMetadata(
    'Web Development Services | SKYBER',
    'Professional web development services creating secure, scalable, and high-performance websites and web applications.',
    ['web development', 'web applications', 'responsive design', 'e-commerce', 'web security']
  ),
  appDevelopment: getPageMetadata(
    'Mobile App Development | SKYBER',
    'Custom mobile application development for iOS and Android with focus on security, performance, and user experience.',
    ['mobile app development', 'iOS development', 'Android development', 'cross-platform apps', 'app security']
  ),
  uiux: getPageMetadata(
    'UI/UX Design Services | SKYBER',
    'User-centered design solutions that combine aesthetics with functionality, creating intuitive and engaging user experiences.',
    ['UI/UX design', 'user experience', 'user interface', 'design systems', 'prototyping']
  ),
  customSoftware: getPageMetadata(
    'Custom Software Development | SKYBER',
    'Tailored software solutions designed to meet your specific business needs with security and scalability in mind.',
    ['custom software', 'enterprise software', 'business applications', 'software architecture', 'system integration']
  ),
  techConsultancy: getPageMetadata(
    'Technology Consulting | SKYBER',
    'Strategic technology consulting to help businesses make informed decisions about their digital transformation journey.',
    ['technology consulting', 'digital transformation', 'IT strategy', 'technology assessment', 'business technology']
  ),
};

// Company metadata
export const companyMetadata = {
  about: getPageMetadata(
    'About SKYBER | Cybersecurity & Technology Studio',
    'Learn about SKYBER, a security-minded studio crafting resilient digital products with focus on privacy, performance, and maintainability.',
    ['about SKYBER', 'company history', 'team', 'mission', 'values', 'cybersecurity studio']
  ),
  contact: getPageMetadata(
    'Contact SKYBER | Get in Touch',
    'Contact SKYBER for cybersecurity, web development, and technology consulting services. Let\'s discuss your project needs.',
    ['contact SKYBER', 'get quote', 'project consultation', 'support', 'inquiry']
  ),
  careers: getPageMetadata(
    'Careers at SKYBER | Join Our Team',
    'Explore career opportunities at SKYBER. Join our team of cybersecurity and technology professionals.',
    ['careers', 'job opportunities', 'work at SKYBER', 'employment', 'team positions']
  ),
  policies: getPageMetadata(
    'Policies & Legal | SKYBER',
    'SKYBER policies including privacy policy, terms of service, security policy, and other legal information.',
    ['policies', 'legal', 'privacy policy', 'terms of service', 'security policy', 'compliance']
  ),
};
