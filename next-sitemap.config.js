/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://skyber.dev',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/admin/*',
    '/private/*',
    '/api/*',
    '/_next/*',
    '/404',
    '/500',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://skyber.dev/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different page types
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Homepage gets highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Services pages get high priority
    else if (path.startsWith('/services')) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // About and contact pages
    else if (path === '/about' || path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    }
    // Blog and insights
    else if (path === '/blogs' || path === '/insights') {
      priority = 0.7;
      changefreq = 'weekly';
    }
    // Policy pages get lower priority
    else if (path.startsWith('/policies')) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
