/**
 * Utilitaires d'optimisation d'images
 * Ces fonctions permettent d'améliorer les performances de chargement des images
 * et d'augmenter le score des bonnes pratiques dans Lighthouse
 */

import { ImageProps } from 'next/image';

/**
 * Génère les attributs pour le chargement optimisé des images
 * @param alt - Texte alternatif de l'image
 * @param priority - Si l'image doit être chargée en priorité
 * @returns Attributs optimisés pour les images
 */
export function getOptimizedImageProps(alt: string, priority = false): Partial<ImageProps> {
  return {
    alt,
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async',
    fetchPriority: priority ? 'high' : 'auto',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    style: {
      objectFit: 'cover',
      width: '100%',
      height: 'auto',
    },
  };
}

/**
 * Calcule les dimensions optimales pour une image responsive
 * @param originalWidth - Largeur originale de l'image
 * @param originalHeight - Hauteur originale de l'image
 * @param containerWidth - Largeur du conteneur
 * @returns Dimensions optimisées
 */
export function calculateResponsiveDimensions(
  originalWidth: number,
  originalHeight: number,
  containerWidth: number
): { width: number; height: number } {
  const aspectRatio = originalWidth / originalHeight;
  const width = Math.min(originalWidth, containerWidth);
  const height = Math.round(width / aspectRatio);
  
  return { width, height };
}

/**
 * Génère les attributs srcSet pour les images responsives
 * @param basePath - Chemin de base de l'image
 * @param extension - Extension de l'image
 * @returns Attribut srcSet
 */
export function generateSrcSet(basePath: string, extension = 'webp'): string {
  const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
  return widths
    .map((width) => `${basePath}-${width}.${extension} ${width}w`)
    .join(', ');
}

/**
 * Génère un placeholder blurDataURL pour les images
 * @param color - Couleur dominante de l'image (format hex)
 * @returns Base64 encoded SVG
 */
export function generateBlurPlaceholder(color = '#f3f4f6'): string {
  const svg = `
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="${color}" />
    </svg>
  `;
  
  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);
  
  return `data:image/svg+xml;base64,${toBase64(svg.trim())}`;
}

/**
 * Composant pour les images avec chargement progressif
 * @param props - Propriétés de l'image
 * @returns Configuration pour l'image avec chargement progressif
 */
export function getProgressiveImageProps(props: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}): ImageProps {
  const { src, alt, width, height, priority = false, className = '' } = props;
  
  return {
    src,
    alt,
    width,
    height,
    priority,
    className,
    loading: priority ? 'eager' : 'lazy',
    quality: 90,
    placeholder: 'blur',
    blurDataURL: generateBlurPlaceholder(),
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  } as ImageProps;
}
