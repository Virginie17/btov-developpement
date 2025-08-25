'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophie Martin',
    company: 'Restaurant Le Bistrot Parisien',
    position: 'Propriétaire',
    content: 'La landing page créée par BTOV a complètement transformé notre présence en ligne. Nous avons vu une augmentation de 40% des réservations en ligne dès le premier mois. Un investissement qui a rapidement été rentabilisé !',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Jean Dubois',
    company: 'Menuiserie Dubois',
    position: 'Artisan',
    content: 'En tant qu\'artisan, je n\'avais pas le temps ni les compétences pour créer un site web. La solution Landing Page Express était parfaite - rapide, professionnelle et abordable. Je reçois maintenant des demandes de devis qualifiées chaque semaine.',
    rating: 5,
    image: '/images/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Marie Leroy',
    company: 'Cabinet de Conseil ML',
    position: 'Consultante',
    content: 'J\'ai été impressionnée par la rapidité et la qualité du service. En seulement 7 jours, j\'avais une landing page professionnelle qui représente parfaitement mon activité. Un excellent rapport qualité-prix.',
    rating: 4,
    image: '/images/testimonial-3.jpg'
  }
];

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ 
  title = 'Ce que nos clients disent',
  subtitle = 'Découvrez les témoignages de clients satisfaits qui ont choisi notre offre Landing Page Express pour démarrer leur présence en ligne.'
}) => {
  return (
    <section className="py-16 px-4 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="testimonials-heading" className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {subtitle}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Témoignages de clients">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
              role="listitem"
              aria-label={`Témoignage de ${testimonial.name}, ${testimonial.position} chez ${testimonial.company}`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex-shrink-0">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={`Photo de ${testimonial.name}`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-600" aria-hidden="true">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              
              <div className="mb-4" aria-label={`Note: ${testimonial.rating} sur 5 étoiles`}>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-primary-600 font-medium">
            Rejoignez nos clients satisfaits et lancez votre projet dès aujourd'hui !
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
