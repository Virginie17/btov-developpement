'use client';
import { motion } from 'framer-motion';

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
    title: "Prompt Engineering",
    description: "Expertise en conception et optimisation de prompts pour tirer le meilleur parti des modèles d'IA.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    features: [
      "Optimisation de prompts",
      "Formation personnalisée",
      "Consultation stratégique",
      "Intégration d'IA dans le workflow",
      "Veille technologique",
    ],
  },
  {
    title: "Création de Sites Web",
    description: "Développement de sites web modernes et performants, adaptés à vos besoins spécifiques.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Sites vitrines professionnels",
      "Sites e-commerce",
      "Applications web sur mesure",
      "Design responsive",
      "Optimisation des performances",
    ],
  },
  {
    title: "Refonte de Site",
    description: "Modernisation de votre site existant pour améliorer son efficacité et son apparence.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    features: [
      "Analyse de l'existant",
      "Refonte graphique",
      "Migration de contenu",
      "Amélioration UX/UI",
      "Optimisation technique",
    ],
  },
  {
    title: "Référencement SEO",
    description: "Optimisation de votre visibilité sur les moteurs de recherche pour attirer plus de visiteurs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    features: [
      "Audit SEO complet",
      "Optimisation on-page",
      "Stratégie de contenu",
      "Suivi des performances",
      "Rapports mensuels",
    ],
  },
  {
    title: "Optimisation Web",
    description: "Amélioration des performances et de l'expérience utilisateur de votre site.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: [
      "Optimisation des performances",
      "Amélioration du temps de chargement",
      "Sécurisation du site",
      "Optimisation mobile",
      "Maintenance régulière",
    ],
  },
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
