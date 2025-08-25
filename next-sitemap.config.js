/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://btov-developpement.fr',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://btov-developpement.fr/server-sitemap.xml', // Pour les pages dynamiques générées côté serveur
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
  },
  exclude: ['/admin', '/api', '/server-sitemap.xml'],
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: 'public',
  transform: async (config, path) => {
    // Personnalisation des priorités par chemin
    let priority = config.priority;
    
    // Pages principales avec priorité plus élevée
    if (path === '/') {
      priority = 1.0;
    } else if (path === '/services' || path === '/portfolio' || path === '/contact') {
      priority = 0.9;
    } else if (path === '/landing-page-express') {
      priority = 0.9; // Priorité élevée pour la landing page express
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
    }
    
    // Déterminer la fréquence de changement
    let changefreq = config.changefreq;
    if (path === '/' || path === '/services' || path === '/landing-page-express') {
      changefreq = 'daily';
    } else if (path.startsWith('/blog/')) {
      changefreq = 'weekly';
    } else {
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://btov-developpement.fr${path}`,
          hreflang: 'fr-FR',
        },
        {
          href: `https://btov-developpement.fr/en${path === '/' ? '' : path}`,
          hreflang: 'en-US',
        },
      ],
    };
  },
};
