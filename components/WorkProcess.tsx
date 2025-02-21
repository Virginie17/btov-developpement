'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Code2, 
  Rocket, 
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Analyse des besoins",
    description: "Étude approfondie de vos objectifs et exigences pour créer une solution sur mesure.",
    details: [
      "Réunion de découverte",
      "Analyse de l'existant",
      "Définition des objectifs",
      "Identification des contraintes"
    ]
  },
  {
    icon: Lightbulb,
    title: "Conception & Design",
    description: "Création d'une expérience utilisateur intuitive et d'un design moderne adapté à votre image.",
    details: [
      "Wireframes & Maquettes",
      "Design responsive",
      "Choix technologiques",
      "Validation du concept"
    ]
  },
  {
    icon: Code2,
    title: "Développement",
    description: "Développement de votre projet avec les meilleures technologies et pratiques du web.",
    details: [
      "Code optimisé",
      "Tests réguliers",
      "Revue de code",
      "Optimisation SEO"
    ]
  },
  {
    icon: Rocket,
    title: "Mise en ligne",
    description: "Déploiement et suivi de votre projet pour assurer son succès à long terme.",
    details: [
      "Tests finaux",
      "Déploiement sécurisé",
      "Formation",
      "Support continu"
    ]
  }
];

export default function WorkProcess() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
            Mon processus de travail
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Une approche méthodique pour transformer vos idées en réalité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full z-0">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="border-t-2 border-dashed border-primary-300 dark:border-primary-700 w-full"
                    />
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-primary-500 w-4 h-4" />
                  </div>
                )}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative z-10 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {step.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + detailIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
