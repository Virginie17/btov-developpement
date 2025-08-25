/**
 * Optimisation des polices pour améliorer les performances et les bonnes pratiques
 * Cette approche utilise la fonction nextjs pour précharger et optimiser les polices
 */

import { Inter, Poppins } from 'next/font/google';

// Configuration de la police Inter
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
});

// Configuration de la police Poppins
export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
});

// Classe CSS pour utiliser les polices variables
export const fontClasses = `${inter.variable} ${poppins.variable}`;
