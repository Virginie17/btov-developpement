/**
 * Configuration des en-têtes de sécurité pour Next.js
 * Ces en-têtes améliorent la sécurité du site et augmentent le score des bonnes pratiques dans Lighthouse
 */

// En-têtes de sécurité pour toutes les pages
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
];

// Politique de sécurité du contenu (CSP) pour les environnements de production
const productionCspHeader = {
  key: 'Content-Security-Policy',
  value: `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https: blob:;
    font-src 'self' data: https://fonts.gstatic.com;
    connect-src 'self' https://www.google-analytics.com;
    frame-src 'self';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    object-src 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim(),
};

// Politique de sécurité du contenu (CSP) pour les environnements de développement
const developmentCspHeader = {
  key: 'Content-Security-Policy',
  value: `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https: blob:;
    font-src 'self' data: https://fonts.gstatic.com;
    connect-src 'self' ws: wss:;
    frame-src 'self';
    base-uri 'self';
    form-action 'self';
  `.replace(/\s{2,}/g, ' ').trim(),
};

// Fonction pour obtenir les en-têtes de sécurité en fonction de l'environnement
const getSecurityHeaders = (isDevelopment = false) => {
  const headers = [...securityHeaders];
  
  if (isDevelopment) {
    headers.push(developmentCspHeader);
  } else {
    headers.push(productionCspHeader);
  }
  
  return headers;
};

module.exports = { securityHeaders, getSecurityHeaders };
