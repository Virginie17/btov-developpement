'use client';
import { motion } from 'framer-motion';
import { Code, Globe, LineChart, Paintbrush } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-primary-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Mes Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions web sur mesure pour votre succès digital
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary-600 mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-secondary-50 py-20 mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mon Processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

const services = [
  {
    title: "Hébergement & Nom de Domaine",
    description: "Tout ce que vous devez savoir sur l'hébergement web et les noms de domaine.",
    icon: <Globe className="w-12 h-12" />,
    features: [
      "Hébergement web sécurisé et performant (10-15€/mois)",
      "Nom de domaine personnalisé (.fr, .com) (10-15€/an)",
      "Certificat SSL pour la sécurité",
      "Support technique 24/7",
      "Sauvegarde automatique des données",
      "Configuration et maintenance incluses"
    ]
  },
  {
    title: "Création de Sites Web",
    description: "Développement de sites web professionnels et performants adaptés à vos besoins.",
    icon: <Code className="w-12 h-12" />,
    features: [
      "Sites vitrines élégants et modernes",
      "Sites e-commerce complets",
      "Applications web sur mesure",
      "Design responsive et adaptatif",
      "Intégration de CMS (WordPress, etc.)",
      "Solutions performantes et sécurisées"
    ]
  },
  {
    title: "Refonte de Sites Web",
    description: "Modernisation et optimisation de sites existants pour une meilleure performance.",
    icon: <Paintbrush className="w-12 h-12" />,
    features: [
      "Analyse de l'existant",
      "Design moderne et attractif",
      "Amélioration de l'expérience utilisateur",
      "Optimisation des performances",
      "Migration de contenu",
      "Mise à niveau technologique"
    ]
  },
  {
    title: "Référencement SEO",
    description: "Optimisation pour les moteurs de recherche et amélioration de la visibilité en ligne.",
    icon: <LineChart className="w-12 h-12" />,
    features: [
      "Audit SEO complet",
      "Optimisation on-page",
      "Optimisation technique",
      "Stratégie de contenu",
      "Suivi des performances",
      "Rapports détaillés"
    ]
  },
  {
    title: "Optimisation Web",
    description: "Amélioration des performances et de l'expérience utilisateur de votre site.",
    icon: <Globe className="w-12 h-12" />,
    features: [
      "Optimisation des temps de chargement",
      "Amélioration de l'accessibilité",
      "Tests de compatibilité",
      "Optimisation mobile",
      "Sécurisation du site",
      "Maintenance régulière"
    ]
  }
];

const process = [
  {
    title: "Analyse",
    description: "Étude approfondie de vos besoins et objectifs",
  },
  {
    title: "Conception",
    description: "Création de maquettes et validation du design",
  },
  {
    title: "Développement",
    description: "Développement technique et intégration",
  },
  {
    title: "Livraison",
    description: "Tests, déploiement et formation",
  },
];
