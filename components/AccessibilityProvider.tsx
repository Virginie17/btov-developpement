"use client";

import { useEffect, ReactNode } from 'react';
import '../styles/accessibility.css';

interface AccessibilityProviderProps {
  children: ReactNode;
}

/**
 * Composant qui fournit des améliorations d'accessibilité globales au site
 * - Détection de la navigation au clavier pour le focus visible
 * - Styles de focus améliorés pour les utilisateurs du clavier
 * - Skip links pour la navigation au clavier
 */
export default function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  useEffect(() => {
    // Configurer la détection de la navigation au clavier
    const handleFirstTab = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
      }
    };

    window.addEventListener('keydown', handleFirstTab);

    // Nettoyer lors du démontage du composant
    return () => {
      window.removeEventListener('keydown', handleFirstTab);
    };
  }, []);

  return (
    <>
      {/* Skip link pour sauter au contenu principal */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-primary-700 focus:shadow-md focus:rounded"
      >
        Aller au contenu principal
      </a>

      {/* Skip link pour sauter à la navigation */}
      <a 
        href="#main-navigation" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-44 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-primary-700 focus:shadow-md focus:rounded"
      >
        Aller à la navigation
      </a>

      {/* Contenu de l'application */}
      {children}
    </>
  );
}
