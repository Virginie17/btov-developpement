'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Quel est le délai de création d'un site web ?",
    answer: "Le délai varie selon la complexité du projet. En général, un site vitrine prend 2-4 semaines, tandis qu'un site e-commerce peut prendre 4-8 semaines. Chaque projet est unique et nous établissons un planning détaillé lors de notre première consultation."
  },
  {
    question: "Quels types de sites web développez-vous ?",
    answer: "Nous développons tout type de sites web : sites vitrines, e-commerce, blogs, applications web, landing pages. Nos solutions sont personnalisées selon vos besoins spécifiques et utilisent les dernières technologies web."
  },
  {
    question: "Proposez-vous des services de maintenance ?",
    answer: "Oui, nous proposons des services de maintenance pour garantir la sécurité, la performance et la mise à jour de votre site. Nos forfaits de maintenance incluent les mises à jour techniques, les sauvegardes et le support."
  },
  {
    question: "Comment optimisez-vous le référencement (SEO) ?",
    answer: "Notre approche SEO combine l'optimisation technique (vitesse, structure, mobile-first), le contenu de qualité et les bonnes pratiques de référencement. Nous utilisons des outils modernes et suivons les dernières recommandations de Google."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Questions Fréquentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
