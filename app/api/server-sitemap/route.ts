import { getServerSideSitemap } from 'next-sitemap';
import { MetadataRoute } from 'next';
import type { ISitemapField } from 'next-sitemap';

// Fonction pour récupérer tous les slugs de blog
async function getAllBlogSlugs() {
  // Cette fonction devrait être adaptée à votre logique de récupération des articles
  // Exemple simplifié - à adapter selon votre implémentation
  try {
    // Ici, vous devriez implémenter la logique pour récupérer tous vos articles de blog
    // Par exemple, si vous utilisez des fichiers markdown dans un dossier content/blog
    // ou si vous utilisez une API/base de données
    
    // Exemple fictif - remplacer par votre logique réelle
    return [
      { slug: 'article-1' },
      { slug: 'article-2' },
      // etc.
    ];
  } catch (error) {
    console.error('Erreur lors de la récupération des slugs de blog:', error);
    return [];
  }
}

// Fonction pour récupérer tous les projets du portfolio
async function getAllPortfolioProjects() {
  // Cette fonction devrait être adaptée à votre logique de récupération des projets
  // Exemple simplifié - à adapter selon votre implémentation
  try {
    // Ici, vous devriez implémenter la logique pour récupérer tous vos projets
    
    // Exemple fictif - remplacer par votre logique réelle
    return [
      { slug: 'projet-1' },
      { slug: 'projet-2' },
      // etc.
    ];
  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error);
    return [];
  }
}

export async function GET() {
  // URL de base du site
  const baseUrl = 'https://btov-developpement.fr';
  
  // Pages statiques principales
  const staticPages: ISitemapField[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 1.0,
      alternateRefs: [
        {
          href: `${baseUrl}/`,
          hreflang: 'fr-FR',
        },
        {
          href: `${baseUrl}/en`,
          hreflang: 'en-US',
        },
      ],
    },
    {
      loc: `${baseUrl}/services`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly' as const,
      priority: 0.9,
      alternateRefs: [
        {
          href: `${baseUrl}/services`,
          hreflang: 'fr-FR',
        },
        {
          href: `${baseUrl}/en/services`,
          hreflang: 'en-US',
        },
      ],
    },
    {
      loc: `${baseUrl}/tarifs`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly' as const,
      priority: 0.9,
      alternateRefs: [
        {
          href: `${baseUrl}/tarifs`,
          hreflang: 'fr-FR',
        },
        {
          href: `${baseUrl}/en/pricing`,
          hreflang: 'en-US',
        },
      ],
    },
    {
      loc: `${baseUrl}/portfolio`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly' as const,
      priority: 0.8,
      alternateRefs: [
        {
          href: `${baseUrl}/portfolio`,
          hreflang: 'fr-FR',
        },
        {
          href: `${baseUrl}/en/portfolio`,
          hreflang: 'en-US',
        },
      ],
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly' as const,
      priority: 0.7,
      alternateRefs: [
        {
          href: `${baseUrl}/contact`,
          hreflang: 'fr-FR',
        },
        {
          href: `${baseUrl}/en/contact`,
          hreflang: 'en-US',
        },
      ],
    },
    {
      loc: `${baseUrl}/landing-page-express`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 0.9,
      alternateRefs: [
        {
          href: `${baseUrl}/landing-page-express`,
          hreflang: 'fr-FR',
        },
        {
          href: `${baseUrl}/en/landing-page-express`,
          hreflang: 'en-US',
        },
      ],
    },
    {
      loc: `${baseUrl}/mentions-legales`,
      lastmod: new Date().toISOString(),
      changefreq: 'yearly' as const,
      priority: 0.3,
      alternateRefs: [
        {
          href: `${baseUrl}/mentions-legales`,
          hreflang: 'fr-FR',
        },
        {
          href: `${baseUrl}/en/legal-notice`,
          hreflang: 'en-US',
        },
      ],
    },
    {
      loc: `${baseUrl}/politique-confidentialite`,
      lastmod: new Date().toISOString(),
      changefreq: 'yearly' as const,
      priority: 0.3,
      alternateRefs: [
        {
          href: `${baseUrl}/politique-confidentialite`,
          hreflang: 'fr-FR',
        },
        {
          href: `${baseUrl}/en/privacy-policy`,
          hreflang: 'en-US',
        },
      ],
    },
  ];
  
  // Récupérer tous les articles de blog
  const blogPosts = await getAllBlogSlugs();
  const blogUrls: ISitemapField[] = blogPosts.map((post) => ({
    loc: `${baseUrl}/blog/${post.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly' as const,
    priority: 0.8,
    alternateRefs: [
      {
        href: `${baseUrl}/blog/${post.slug}`,
        hreflang: 'fr-FR',
      },
      {
        href: `${baseUrl}/en/blog/${post.slug}`,
        hreflang: 'en-US',
      },
    ],
  }));
  
  // Récupérer tous les projets du portfolio
  const portfolioProjects = await getAllPortfolioProjects();
  const portfolioUrls: ISitemapField[] = portfolioProjects.map((project) => ({
    loc: `${baseUrl}/portfolio/${project.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly' as const,
    priority: 0.7,
    alternateRefs: [
      {
        href: `${baseUrl}/portfolio/${project.slug}`,
        hreflang: 'fr-FR',
      },
      {
        href: `${baseUrl}/en/portfolio/${project.slug}`,
        hreflang: 'en-US',
      },
    ],
  }));
  
  // Combiner toutes les URLs
  const allUrls: ISitemapField[] = [...staticPages, ...blogUrls, ...portfolioUrls];
  
  // Générer le sitemap
  return getServerSideSitemap(allUrls);
}
