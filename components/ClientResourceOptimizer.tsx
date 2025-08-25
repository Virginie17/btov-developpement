'use client';

import React, { useEffect } from 'react';
import { generateAllResourceOptimizationTags, homePageCriticalResources } from '@/utils/resource-preload';

/**
 * Composant client pour gérer l'optimisation des ressources
 * Ce composant est utilisé dans le layout pour ajouter les balises de préchargement
 * et optimiser les performances sans compromettre les métadonnées côté serveur
 */
export default function ClientResourceOptimizer() {
  // Générer les balises de préchargement
  const optimizationTags = generateAllResourceOptimizationTags(homePageCriticalResources);

  // Optimiser les images après le chargement
  useEffect(() => {
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
  }, []);

  return (
    <>
      {optimizationTags}
    </>
  );
}
