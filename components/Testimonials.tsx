'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie Laurent',
    role: 'Fondatrice, Boutique Mode Éthique',
    image: '/testimonials/marie.webp',
    content: 'Virginie a transformé notre vision en réalité avec un site e-commerce qui dépasse nos attentes. La performance et le design sont exceptionnels.',
    project: 'Site E-commerce Mode'
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    role: 'Directeur, Agence Immobilière',
    image: '/testimonials/thomas.webp',
    content: 'La refonte de notre site a considérablement amélioré notre présence en ligne. Les retours de nos clients sont excellents.',
    project: 'Refonte Site Immobilier'
  },
  {
    id: 3,
    name: 'Sophie Martin',
    role: 'Blogueuse Lifestyle',
    image: '/testimonials/sophie.webp',
    content: 'Grâce à l\'optimisation SEO, mon blog a vu son trafic augmenter de 150%. Un travail remarquable et des résultats concrets.',
    project: 'Optimisation SEO - Blog'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ce que disent mes clients</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez les retours d'expérience de clients satisfaits
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="relative overflow-hidden px-4 sm:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8"
              >
                <Quote className="w-12 h-12 text-primary-500/20 mb-6" />
                <div className="space-y-8">
                  <blockquote className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                        {testimonials[currentIndex].project}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8">
            <button
              onClick={next}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-500'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Voir le témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
