'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket, Clock, Check, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Afficher le popup après 2 secondes
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Cacher le popup après 12 secondes
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 12000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          {/* Overlay avec effet de flou */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVisible(false)}
          />

          {/* Popup content */}
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-primary-500/20"
          >
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/30 to-primary-500/0 animate-gradient-x pointer-events-none" />
            
            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-1.5 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Contenu */}
            <div className="relative p-8 sm:p-10">
              {/* Badge Offre limitée avec animation */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 px-4 py-2 rounded-full text-white font-medium mb-6 shadow-lg shadow-primary-500/20"
              >
                <Zap className="w-4 h-4 animate-pulse" />
                Offre Flash
              </motion.div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">
                    <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                      Landing Page Express
                    </span>
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold text-white">399€</span>
                    <span className="text-lg text-primary-400 font-medium">seulement</span>
                  </div>
                </div>

                <p className="text-lg text-gray-300">
                  Une landing page qui convertit, livrée en{' '}
                  <span className="font-semibold text-primary-400">7 jours</span> !
                </p>

                {/* Features list avec animation */}
                <motion.ul 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1 }}
                  className="space-y-4"
                >
                  {[
                    'Design moderne et captivant',
                    'Optimisée pour la conversion',
                    'Livraison en 7 jours',
                    'Hébergement premium inclus',
                    'Modifications illimitées pendant 7 jours'
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA avec animation */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="group relative flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40"
                    onClick={() => setIsVisible(false)}
                  >
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    <span className="text-lg">Je veux ma landing page</span>
                    <span className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Progress bar améliorée */}
            <div className="relative h-1.5 bg-gray-800">
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 10, ease: 'linear' }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-primary-400"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
