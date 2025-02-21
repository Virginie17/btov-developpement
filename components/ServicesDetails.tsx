'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  PenTool, 
  BarChart, 
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'development',
    icon: Code2,
    title: "Développement Web",
    shortDesc: "Sites et applications web sur mesure",
    description: "Création de sites web et d'applications performants, modernes et sécurisés.",
    features: [
      "Applications React/Next.js",
      "Sites e-commerce",
      "Interfaces administrateur",
      "API REST & GraphQL"
    ],
    benefits: [
      "Performance optimale",
      "Code maintenable",
      "Sécurité renforcée",
      "Expérience utilisateur fluide"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 'design',
    icon: PenTool,
    title: "Design UI/UX",
    shortDesc: "Interfaces modernes et intuitives",
    description: "Création d'interfaces utilisateur élégantes et d'expériences utilisateur optimisées.",
    features: [
      "Design responsive",
      "Maquettes interactives",
      "Systèmes de design",
      "Tests utilisateurs"
    ],
    benefits: [
      "Navigation intuitive",
      "Cohérence visuelle",
      "Accessibilité",
      "Conversion optimisée"
    ],
    technologies: ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion"],
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 'seo',
    icon: BarChart,
    title: "Optimisation SEO",
    shortDesc: "Visibilité et performance",
    description: "Amélioration du référencement naturel et de la visibilité en ligne.",
    features: [
      "Audit SEO complet",
      "Optimisation technique",
      "Content marketing",
      "Suivi des performances"
    ],
    benefits: [
      "Meilleur classement",
      "Trafic qualifié",
      "ROI mesurable",
      "Présence durable"
    ],
    technologies: ["Google Analytics", "Search Console", "Schema.org", "SEMrush"],
    color: "from-green-500 to-teal-600"
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: "Applications Mobiles",
    shortDesc: "Solutions mobiles natives",
    description: "Développement d'applications mobiles performantes et intuitives.",
    features: [
      "Apps iOS & Android",
      "PWA",
      "UI/UX Mobile",
      "Tests & Déploiement"
    ],
    benefits: [
      "Expérience native",
      "Performance optimale",
      "Mode hors-ligne",
      "Mises à jour faciles"
    ],
    technologies: ["React Native", "PWA", "App Store", "Play Store"],
    color: "from-orange-500 to-red-600"
  }
];

export default function ServicesDetails() {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const currentService = services.find(s => s.id === selectedService)!;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
            Services Détaillés
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Des solutions complètes pour votre présence numérique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {services.map((service) => {
                const Icon = service.icon;
                const isSelected = service.id === selectedService;
                return (
                  <motion.button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      isSelected
                        ? 'bg-white dark:bg-gray-800 shadow-lg'
                        : 'hover:bg-white/50 dark:hover:bg-gray-800/50'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-lg ${
                        isSelected ? `bg-gradient-to-r ${service.color}` : 'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`} />
                      </div>
                      <div className="ml-4">
                        <h3 className={`font-semibold ${
                          isSelected ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {currentService.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {currentService.description}
                    </p>
                    
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                      Fonctionnalités
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {currentService.features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                      Bénéfices
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {currentService.benefits.map((benefit, index) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <ArrowRight className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>

                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentService.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${currentService.color} text-white`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
