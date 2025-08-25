import Image from 'next/image';
import { useState, useEffect } from 'react';
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
};

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

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  effect,
  preset,
  priority = false,
  className = '',
  transition = true,
  quality = 75
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [loading, setLoading] = useState<boolean>(true);
  const [format, setFormat] = useState<ImageFormat>('original');
  const [currentEffect, setCurrentEffect] = useState<EffectType | undefined>(
    effect || (preset ? presets[preset].defaultEffect : undefined)
  );

  useEffect(() => {
    const checkImageSupport = async () => {
      try {
        const avifSupported = await checkAVIFSupport();
        const webpSupported = await checkWebPSupport();
        
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
        setLoading(false);
      }
    };

    checkImageSupport();
  }, [src, currentEffect]);

  useEffect(() => {
    if (preset && transition) {
      const effects = presets[preset].effects;
      let currentIndex = effects.indexOf(currentEffect || effects[0]);
      
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % effects.length;
        setCurrentEffect(effects[currentIndex]);
      }, 5000);

      return () => clearInterval(interval);
    }
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
            className={`transition-all duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(actualWidth, actualHeight))}`}
            onLoadingComplete={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setImageSrc(src);
              setFormat('original');
            }}
          />
          {loading && (
            <div 
              className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
              style={{ backgroundSize: '200% 100%' }}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const checkWebPSupport = async (): Promise<boolean> => {
  if (typeof window === 'undefined') return false;
  
  return new Promise<boolean>((resolve) => {
    const img = document.createElement('img');
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
  });
};

const checkAVIFSupport = async (): Promise<boolean> => {
  if (typeof window === 'undefined') return false;

  return new Promise<boolean>((resolve) => {
    const img = document.createElement('img');
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
};

export default OptimizedImage;
