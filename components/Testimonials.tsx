'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMessageCircle } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Marie Laurent',
    role: 'Fondatrice',
    company: 'Éco Fashion Store',
    image: '/images/testimonials/marie.jpg',
    content: 'Notre boutique en ligne a vu ses ventes augmenter de 45% dès le premier mois. Le nouveau design et l\'expérience utilisateur sont exactement ce dont nous avions besoin.',
    project: 'Site E-commerce',
    rating: 5
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    role: 'Directeur',
    company: 'Immo Premium',
    image: '/images/testimonials/thomas.jpg',
    content: 'La refonte de notre plateforme immobilière a dépassé nos attentes. La vitesse du site et le design moderne ont considérablement amélioré notre image de marque.',
    project: 'Plateforme Immobilière',
    rating: 5
  },
  {
    id: 3,
    name: 'Sophie Martin',
    role: 'CEO',
    company: 'Tech Solutions',
    image: '/images/testimonials/sophie.jpg',
    content: 'Le tableau de bord que Virginie a créé pour notre SaaS est intuitif et puissant. Nos clients adorent l\'interface et les fonctionnalités.',
    project: 'Application SaaS',
    rating: 5
  },
  {
    id: 4,
    name: 'Lucas Mercier',
    role: 'Fondateur',
    company: 'Digital Marketing Pro',
    image: '/images/testimonials/lucas.jpg',
    content: 'Un travail exceptionnel sur notre site vitrine. Le SEO est parfaitement optimisé et nous sommes maintenant en première page de Google.',
    project: 'Site Vitrine & SEO',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold mb-2 block">
            Témoignages
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Ce que disent mes clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les retours d'expérience de clients satisfaits et comment nous avons transformé leurs projets en succès.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between z-10 pointer-events-none">
              <button
                onClick={prev}
                className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all pointer-events-auto"
                aria-label="Témoignage précédent"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all pointer-events-auto"
                aria-label="Témoignage suivant"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 768px) 96px, 128px"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                      <FiMessageCircle className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mb-6">
                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-8">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].role} chez {testimonials[currentIndex].company}
                      </p>
                      <p className="text-blue-600 font-medium">
                        {testimonials[currentIndex].project}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Voir le témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
