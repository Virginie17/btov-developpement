'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

export default function PromoSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            🎉 Offre de Lancement - Profitez-en vite !
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Pour célébrer le lancement de B to V Développement, profitez de 20% de réduction 
            sur votre premier projet ! Cette offre est valable pour un temps limité, 
            alors lancez-vous dès aujourd&apos;hui !
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Timer className="w-6 h-6 text-blue-600" />
            <p className="text-blue-600 font-semibold">
              Offre valable jusqu&apos;au 31 janvier 2025
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold 
            hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Profitez de l&apos;offre
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
