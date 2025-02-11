const fs = require('fs');
const path = require('path');

const baseUrl = 'https://btov-developpement.fr';

// Pages principales avec leurs priorités et fréquences de mise à jour
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/tarifs', priority: '0.9', changefreq: 'weekly' },
  { url: '/portfolio', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/mentions-legales', priority: '0.3', changefreq: 'yearly' },
  { url: '/politique-confidentialite', priority: '0.3', changefreq: 'yearly' }
];

// Générer le contenu XML
const generateSitemapXml = () => {
  const currentDate = new Date().toISOString();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';

  // Ajouter chaque page
  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
};

// Écrire le fichier sitemap.xml
const sitemap = generateSitemapXml();
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap généré avec succès :', sitemapPath);
