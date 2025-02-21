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
    answer: "Je développe tout type de sites web : sites vitrines, e-commerce, blogs, applications web, landing pages. Mes solutions sont personnalisées selon vos besoins spécifiques et utilisent les dernières technologies web comme Next.js, React et Tailwind CSS pour garantir performance et modernité."
  },
  {
    question: "Proposez-vous des services de maintenance ?",
    answer: "Oui, je propose des services de maintenance pour garantir la sécurité, la performance et la mise à jour de votre site. Mes forfaits de maintenance incluent les mises à jour techniques, les sauvegardes régulières, le monitoring de performance et un support réactif."
  },
  {
    question: "Comment optimisez-vous le référencement (SEO) ?",
    answer: "Mon approche SEO combine l'optimisation technique (vitesse de chargement, structure HTML sémantique, responsive design), le contenu de qualité et les bonnes pratiques de référencement. J'utilise les dernières technologies comme Next.js qui offrent un excellent SEO par défaut et je suis les recommandations de Google."
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer: "J'utilise des technologies modernes et éprouvées : Next.js et React pour le développement frontend, Tailwind CSS pour le design, et des CMS headless pour la gestion de contenu. Cette stack technique garantit des sites rapides, sécurisés et facilement maintenables."
  },
  {
    question: "Comment se déroule un projet ?",
    answer: "Le projet se déroule en plusieurs étapes : 1) Consultation initiale pour comprendre vos besoins, 2) Proposition détaillée et devis, 3) Design et validation des maquettes, 4) Développement avec points réguliers, 5) Tests et optimisations, 6) Mise en ligne et formation. Un suivi régulier est assuré tout au long du projet."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Questions Fréquentes</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Trouvez rapidement des réponses à vos questions sur mes services de développement web
          </p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
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
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 prose prose-sm max-w-none">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
