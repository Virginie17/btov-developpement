'use client';

/**
 * Utilitaire pour le préchargement des ressources critiques
 * Améliore les performances de chargement et le score Lighthouse
 */
import React from 'react';

export type PreloadResource = {
  href: string;
  as: 'script' | 'style' | 'image' | 'font' | 'fetch';
  type?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
  media?: string;
  importance?: 'high' | 'low' | 'auto';
};

/**
 * Génère les balises de préchargement pour les ressources critiques
 * @param resources Liste des ressources à précharger
 * @returns Tableau de balises link pour le préchargement
 */
export function generatePreloadTags(resources: PreloadResource[]): JSX.Element[] {
  return resources.map((resource, index) => {
    const { href, as, type, crossOrigin, media, importance } = resource;
    
    return React.createElement('link', {
      key: `preload-${index}-${href}`,
      rel: 'preload',
      href,
      as,
      type,
      crossOrigin,
      media,
      importance
    });
  });
}

/**
 * Ressources critiques pour la page d'accueil
 */
export const homePageCriticalResources: PreloadResource[] = [
  {
    href: '/fonts/inter-var.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
    importance: 'high'
  },
  {
    href: '/images/hero-image.webp',
    as: 'image',
    importance: 'high'
  }
];

/**
 * Ressources critiques pour la page Landing Page Express
 */
export const landingPageExpressCriticalResources: PreloadResource[] = [
  {
    href: '/fonts/inter-var.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
    importance: 'high'
  },
  {
    href: '/images/landing-page-express/hero-image.webp',
    as: 'image',
    importance: 'high'
  },
  {
    href: '/images/landing-page-express/restaurant-avant.webp',
    as: 'image',
    importance: 'high'
  },
  {
    href: '/images/landing-page-express/restaurant-apres.webp',
    as: 'image',
    importance: 'high'
  }
];

/**
 * Génère les balises DNS prefetch pour les domaines externes
 * @returns Tableau de balises link pour le DNS prefetch
 */
export function generateDnsPrefetchTags(): JSX.Element[] {
  const domains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com'
  ];
  
  return domains.map((domain, index) => 
    React.createElement('link', {
      key: `dns-prefetch-${index}`,
      rel: 'dns-prefetch',
      href: domain
    })
  );
}

/**
 * Génère les balises preconnect pour les domaines externes
 * @returns Tableau de balises link pour le preconnect
 */
export function generatePreconnectTags(): JSX.Element[] {
  const domains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  return domains.map((domain, index) => 
    React.createElement('link', {
      key: `preconnect-${index}`,
      rel: 'preconnect',
      href: domain,
      crossOrigin: 'anonymous'
    })
  );
}

/**
 * Fonction utilitaire pour générer toutes les balises d'optimisation des ressources
 * @param criticalResources Liste des ressources critiques spécifiques à la page
 * @returns Tableau de toutes les balises d'optimisation
 */
export function generateAllResourceOptimizationTags(
  criticalResources: PreloadResource[] = []
): JSX.Element[] {
  return [
    ...generateDnsPrefetchTags(),
    ...generatePreconnectTags(),
    ...generatePreloadTags(criticalResources)
  ];
}
