import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PresetType = 'blog' | 'portfolio' | 'event' | 'testimonial';
type EffectType = 'tech' | 'warm' | 'vibrant' | 'soft' | 'dramatic' | 'retro' | 'event' | 'business' | 'modern';

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

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  effect,
  preset,
  priority = false,
  className = '',
  transition = true
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentEffect, setCurrentEffect] = useState<EffectType | undefined>(
    effect || (preset ? presets[preset].defaultEffect : undefined)
  );

  useEffect(() => {
    const loadImage = async () => {
      try {
        const webpSupported = await checkWebPSupport();
        let finalSrc = src;
        
        if (currentEffect) {
          finalSrc = `/images/blog/effects/${src.split('/').pop()}`;
        } else if (webpSupported) {
          finalSrc = `/images/blog/webp/${src.split('/').pop()?.replace(/\.(jpg|jpeg|png)$/, '.webp')}`;
        }

        setImageSrc(finalSrc);
      } catch (error) {
        console.error('Error loading image:', error);
        setImageSrc(src);
      } finally {
        setLoading(false);
      }
    };

    loadImage();
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
          className={`${loading ? 'animate-pulse bg-gray-200' : ''}`}
        >
          <Image
            src={imageSrc}
            alt={alt}
            width={width || 800}
            height={height || 600}
            priority={priority}
            className={`transition-all duration-300 ${loading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
            onLoadingComplete={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setImageSrc(src);
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const checkWebPSupport = async (): Promise<boolean> => {
  if (typeof window === 'undefined') return false;
  
  return new Promise<boolean>((resolve) => {
    const img = document.createElement('img') as HTMLImageElement;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
  });
};

export default OptimizedImage;
