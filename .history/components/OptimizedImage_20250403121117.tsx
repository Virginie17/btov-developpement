'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PresetType = 'blog' | 'portfolio' | 'event' | 'testimonial';
type EffectType = 'tech' | 'warm' | 'vibrant' | 'soft' | 'dramatic' | 'retro' | 'event' | 'business' | 'modern';
type ImageFormat = 'original' | 'webp' | 'avif';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  effect?: EffectType;
  preset?: PresetType;
  priority?: boolean;
  className?: string;
  transition?: boolean;
  quality?: number;
  sizes?: string;
  loadingType?: 'lazy' | 'eager';
}

const presets = {
  blog: {
    effects: ['modern', 'warm'] as EffectType[],
    defaultEffect: 'modern' as EffectType
  },
  portfolio: {
    effects: ['business', 'tech'] as EffectType[],
    defaultEffect: 'business' as EffectType
  },
  event: {
    effects: ['event', 'vibrant'] as EffectType[],
    defaultEffect: 'event' as EffectType
  },
  testimonial: {
    effects: ['warm', 'soft'] as EffectType[],
    defaultEffect: 'warm' as EffectType
  }
} as const;

// Optimisé et mis en cache
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="20%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

// Cache pour les vérifications de support de format
const formatSupportCache = new Map<string, Promise<boolean>>();

const checkFormatSupport = (format: 'webp' | 'avif'): Promise<boolean> => {
  if (typeof window === 'undefined') return Promise.resolve(false);
  
  const cacheKey = `support-${format}`;
  if (formatSupportCache.has(cacheKey)) {
    return formatSupportCache.get(cacheKey)!;
  }

  const testData = format === 'webp'
    ? 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=='
    : 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';

  const promise = new Promise<boolean>((resolve) => {
    const testImage = new window.Image();
    testImage.onload = () => resolve(true);
    testImage.onerror = () => resolve(false);
    testImage.src = testData;
  });

  formatSupportCache.set(cacheKey, promise);
  return promise;
};

const OptimizedImage: React.FC<OptimizedImageProps> = memo(({
  src,
  alt,
  width,
  height,
  effect,
  preset,
  priority = false,
  className = '',
  transition = true,
  quality = 75,
  sizes = '100vw',
  loadingType = 'lazy'
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(!priority);
  const [format, setFormat] = useState<ImageFormat>('original');
  const [currentEffect, setCurrentEffect] = useState<EffectType | undefined>(
    effect || (preset ? presets[preset].defaultEffect : undefined)
  );

  const checkImageSupport = useCallback(async () => {
    try {
      const [avifSupported, webpSupported] = await Promise.all([
        checkFormatSupport('avif'),
        checkFormatSupport('webp')
      ]);
      
      let finalSrc = src;
      let finalFormat: ImageFormat = 'original';
      
      if (currentEffect) {
        finalSrc = `/images/effects/${currentEffect}/${src.split('/').pop()}`;
      } else if (avifSupported) {
        finalSrc = src.replace(/\.(jpg|jpeg|png)$/, '.avif');
        finalFormat = 'avif';
      } else if (webpSupported) {
        finalSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');
        finalFormat = 'webp';
      }

      setImageSrc(finalSrc);
      setFormat(finalFormat);
    } catch (error) {
      console.error('Error checking image support:', error);
    } finally {
      setIsLoading(false);
    }
  }, [src, currentEffect]);

  useEffect(() => {
    checkImageSupport();
  }, [checkImageSupport]);

  useEffect(() => {
    if (!preset || !transition) return;

    const effects = presets[preset].effects;
    let currentIndex = effects.indexOf(currentEffect || effects[0]);
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % effects.length;
      setCurrentEffect(effects[currentIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [preset, currentEffect, transition]);

  const imageVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  const actualWidth = width || 800;
  const actualHeight = height || 600;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={imageSrc}
          initial="enter"
          animate="center"
          exit="exit"
          variants={imageVariants}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <Image
            src={imageSrc}
            alt={alt}
            width={actualWidth}
            height={actualHeight}
            priority={priority}
            quality={quality}
            loading={loadingType}
            sizes={sizes}
            className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(actualWidth, actualHeight))}`}
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setImageSrc(src);
              setFormat('original');
            }}
          />
          {isLoading && (
            <div 
              className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
              style={{ backgroundSize: '200% 100%' }}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
