/**
 * Configuration pour les audits Lighthouse
 * Utilisé pour analyser les performances, l'accessibilité, les bonnes pratiques et le SEO du site
 * 
 * Pour lancer un audit:
 * npx lighthouse https://btov-developpement.fr --config-path=./lighthouse.config.js --output=html --output-path=./lighthouse-report.html
 */

module.exports = {
  extends: 'lighthouse:default',
  settings: {
    // Catégories à auditer
    onlyCategories: [
      'performance',
      'accessibility',
      'best-practices',
      'seo',
    ],
    
    // Configuration spécifique pour les audits
    formFactor: 'desktop',
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0,
    },
    
    // Activer l'audit pour les PWA
    skipAudits: [
      'uses-http2',
      'canonical',
    ],
    
    // Pages spécifiques à auditer
    pages: [
      {
        url: 'https://btov-developpement.fr/',
        name: 'Page d\'accueil',
      },
      {
        url: 'https://btov-developpement.fr/landing-page-express',
        name: 'Landing Page Express',
      },
      {
        url: 'https://btov-developpement.fr/tarifs',
        name: 'Page Tarifs',
      },
    ],
  },
};
