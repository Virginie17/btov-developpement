'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 relative"
    >
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          Offre spéciale : -20% sur votre premier projet de site web. Valable jusqu&apos;au 31 janvier 2025.{' '}
          <Link href="/offre-lancement" className="underline font-semibold hover:text-blue-200">
            En savoir plus
          </Link>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full"
          aria-label="Fermer la bannière"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
