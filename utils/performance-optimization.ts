"use client";

/**
 * Utilitaires pour l'optimisation des performances
 * Améliore le score Lighthouse en implémentant les meilleures pratiques
 */

import { useEffect } from 'react';

/**
 * Configuration pour l'Intersection Observer
 */
type LazyLoadOptions = {
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
};

/**
 * Hook pour implémenter le lazy loading des composants
 * @param ref Référence à l'élément à observer
 * @param callback Fonction à exécuter lorsque l'élément est visible
 * @param options Options de configuration
 */
export function useLazyLoad(
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  options: LazyLoadOptions = {}
): void {
  useEffect(() => {
    const { rootMargin = '200px 0px', threshold = 0, triggerOnce = true } = options;
    
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            if (triggerOnce) {
              observer.disconnect();
            }
          }
        });
      },
      { rootMargin, threshold }
    );
    
    observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, callback, options]);
}

/**
 * Configuration pour le lazy loading des images
 */
export const lazyLoadConfig = {
  rootMargin: '200px 0px',
  threshold: 0.01
};

/**
 * Liste des pages importantes à précharger
 */
export const importantPages = [
  '/offres',
  '/contact',
  '/a-propos',
  '/landing-page-express'
];

/**
 * Préchargement des pages importantes
 */
export function prefetchImportantPages() {
  if (typeof window === 'undefined') return;

  // Ne pas précharger si l'utilisateur est en mode économie de données
  if ('connection' in navigator && 
      ((navigator as any).connection.saveData || 
       ((navigator as any).connection.effectiveType && 
        (navigator as any).connection.effectiveType !== '4g'))) {
    return;
  }
  
  // Attendre que le navigateur soit inactif
  if ('requestIdleCallback' in window) {
    // @ts-ignore - requestIdleCallback existe mais n'est pas dans les types TS par défaut
    window.requestIdleCallback(() => {
      importantPages.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        link.as = 'document';
        document.head.appendChild(link);
      });
    });
  } else {
    // Fallback pour les navigateurs qui ne supportent pas requestIdleCallback
    setTimeout(() => {
      importantPages.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        link.as = 'document';
        document.head.appendChild(link);
      });
    }, 2000);
  }
}

/**
 * Optimisation des images
 */
export function optimizeImages() {
  if (typeof window === 'undefined') return;
  
  // Convertir les images en WebP si possible
  const images = document.querySelectorAll('img:not([loading="lazy"])');
  images.forEach(img => {
    // Ajouter loading="lazy" aux images qui ne l'ont pas
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Ajouter decoding="async" pour le décodage asynchrone
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
    
    // Ajouter fetchpriority="low" pour les images non critiques
    if (!img.hasAttribute('fetchpriority') && 
        !img.classList.contains('critical') && 
        img.getBoundingClientRect().top > window.innerHeight) {
      img.setAttribute('fetchpriority', 'low');
    }
  });
}

/**
 * Hook pour optimiser les performances de rendu
 */
export function usePerformanceOptimization() {
  useEffect(() => {
    // Optimiser les images après le chargement de la page
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        optimizeImages();
      } else {
        window.addEventListener('load', optimizeImages);
      }
      
      // Précharger les pages importantes
      const timer = setTimeout(() => {
        prefetchImportantPages();
      }, 2000);
      
      return () => {
        window.removeEventListener('load', optimizeImages);
        clearTimeout(timer);
      };
    }
  }, []);
}

/**
 * Fonction pour générer les balises de préchargement des polices
 */
export function generateFontPreloadTags() {
  return [
    {
      rel: 'preload',
      href: '/fonts/inter-var.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    }
  ];
}

/**
 * Fonction pour optimiser le chargement des scripts tiers
 */
export function optimizeThirdPartyScripts() {
  // Liste des domaines tiers à préconnect
  const thirdPartyDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  return thirdPartyDomains.map(domain => ({
    rel: 'preconnect',
    href: domain,
    crossOrigin: 'anonymous'
  }));
}

/**
 * Fonction pour détecter la connexion lente
 */
export function isSlowConnection() {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = (navigator as any).connection;
    return connection.saveData || 
           (connection.effectiveType && connection.effectiveType !== '4g');
  }
  return false;
}

/**
 * Configuration pour l'optimisation des images
 */
export const imageOptimizationConfig = {
  formats: ['image/webp', 'image/avif'],
  sizes: [640, 750, 828, 1080, 1200, 1920],
  placeholder: 'blur',
  quality: 80
};

/**
 * Optimise les scripts tiers en ajoutant les attributs appropriés
 * @param src URL du script
 * @param async Charger le script de manière asynchrone
 * @param defer Différer le chargement du script
 * @returns Configuration du script optimisé
 */
export function optimizeScript(src: string, async = true, defer = false) {
  return {
    src,
    async,
    defer,
    strategy: 'afterInteractive' as const
  };
}

/**
 * Génère une configuration pour le chargement optimisé des ressources
 * @param resources Liste des ressources à optimiser
 * @returns Configuration optimisée
 */
export function optimizeResources(resources: string[]) {
  return resources.map(resource => {
    if (resource.endsWith('.js')) {
      return {
        rel: 'preload',
        href: resource,
        as: 'script'
      };
    } else if (resource.endsWith('.css')) {
      return {
        rel: 'preload',
        href: resource,
        as: 'style'
      };
    } else if (resource.match(/\.(jpe?g|png|gif|svg|webp)$/)) {
      return {
        rel: 'preload',
        href: resource,
        as: 'image'
      };
    } else if (resource.match(/\.(woff2?|ttf|otf|eot)$/)) {
      return {
        rel: 'preload',
        href: resource,
        as: 'font',
        crossOrigin: 'anonymous'
      };
    }
    return {
      rel: 'preload',
      href: resource
    };
  });
}

/**
 * Ajoute les attributs de performance aux images
 * @param props Propriétés de l'image
 * @returns Propriétés optimisées
 */
export function getPerformanceImageProps(props: any): any {
  return {
    ...props,
    loading: props.priority ? undefined : 'lazy',
    decoding: 'async',
    fetchPriority: props.priority ? 'high' : 'auto',
  };
}

/**
 * Génère un identifiant unique pour le cache-busting
 * @returns Identifiant unique basé sur la date
 */
export function generateCacheBustId(): string {
  return `v=${Date.now().toString(36)}`;
}

/**
 * Ajoute un paramètre de cache-busting à une URL
 * @param url URL à modifier
 * @returns URL avec paramètre de cache-busting
 */
export function addCacheBustToUrl(url: string): string {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${generateCacheBustId()}`;
}

/**
 * Configuration pour le prefetching des pages
 */
export const prefetchConfig = {
  // Pages à précharger pour améliorer la navigation
  pages: importantPages,
  
  // Délai avant de précharger les pages (en ms)
  delay: 2000,
  
  // Précharger uniquement sur les connexions rapides
  onlyOnFastConnection: true
};

/**
 * Vérifie si la connexion est rapide
 * @returns true si la connexion est rapide
 */
export function hasGoodConnection(): boolean {
  if (typeof navigator === 'undefined') return false;
  
  // Vérifier si l'API navigator.connection est disponible
  if (!('connection' in navigator)) return true;
  
  const connection = (navigator as any).connection;
  
  if (!connection) return true;
  
  // Vérifier si la connexion est rapide
  if (connection.saveData) return false;
  
  const effectiveType = connection.effectiveType;
  if (effectiveType === '4g') return true;
  
  return false;
}

/**
 * Précharge les pages importantes pour améliorer la navigation
 */
export function prefetchPages() {
  if (typeof window === 'undefined') return;
  
  // Vérifier si la connexion est rapide
  if (prefetchConfig.onlyOnFastConnection && !hasGoodConnection()) return;
  
  // Attendre le délai spécifié
  setTimeout(() => {
    prefetchConfig.pages.forEach(page => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      link.as = 'document';
      document.head.appendChild(link);
    });
  }, prefetchConfig.delay);
}
