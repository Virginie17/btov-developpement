'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const caseStudies = [
  {
    id: 1,
    title: "Site Immobilier Moderne",
    client: "Agence Immobilière",
    challenge: "Création d'une plateforme immobilière intuitive",
    solution: "Développement d'une interface moderne avec Next.js",
    results: {
      performance: "Score PageSpeed 95+",
      conversion: "+40% de leads"
    },
    images: {
      desktop: "/images/portfolio/immo-desktop.png",
      mobile: "/images/portfolio/immo-mobile.png",
      thumbnail: "/images/portfolio/immo-thumb.png"
    },
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"]
  },
  {
    id: 2,
    title: "E-commerce Fashion Store",
    client: "Fashion Store",
    challenge: "Modernisation d'une boutique en ligne avec plus de 1000 produits",
    solution: "Migration vers Next.js avec Shopify, optimisation des performances",
    results: {
      conversion: "+45% de taux de conversion",
      performance: "Score PageSpeed de 95+"
    },
    images: {
      desktop: "/images/portfolio/fashion-store-desktop.png",
      mobile: "/images/portfolio/fashion-store-mobile.png",
      thumbnail: "/images/portfolio/fashion-store-thumb.png"
    },
    technologies: ["Next.js", "Shopify", "TailwindCSS"]
  },
  {
    id: 3,
    title: "Dashboard SaaS B2B",
    client: "Tech Solutions",
    challenge: "Création d'un tableau de bord complexe pour la gestion de données",
    solution: "Interface intuitive avec visualisations de données en temps réel",
    results: {
      satisfaction: "98% de satisfaction client",
      productivité: "+35% de productivité"
    },
    images: {
      desktop: "/images/portfolio/saas-desktop.png",
      mobile: "/images/portfolio/saas-mobile.png",
      thumbnail: "/images/portfolio/saas-thumb.png"
    },
    technologies: ["React", "TypeScript", "D3.js"]
  }
];

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');
  
  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Études de Cas
        </h2>

        <div className="relative">
          {/* Navigation */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between z-10 pointer-events-none">
            <button
              onClick={prevCase}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all pointer-events-auto"
              aria-label="Projet précédent"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextCase}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all pointer-events-auto"
              aria-label="Projet suivant"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <motion.div
              key={currentCase.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="relative aspect-[16/9] bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={view === 'desktop' ? currentCase.images.desktop : currentCase.images.mobile}
                  alt={currentCase.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* View Toggle */}
              <div className="absolute bottom-4 right-4 bg-white rounded-full shadow-lg p-1 flex gap-1">
                <button
                  onClick={() => setView('desktop')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    view === 'desktop' ? 'bg-blue-500 text-white' : 'text-gray-600'
                  }`}
                >
                  Desktop
                </button>
                <button
                  onClick={() => setView('mobile')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    view === 'mobile' ? 'bg-blue-500 text-white' : 'text-gray-600'
                  }`}
                >
                  Mobile
                </button>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              key={`content-${currentCase.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{currentCase.title}</h3>
                <p className="text-gray-600">{currentCase.client}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Challenge</h4>
                <p className="text-gray-700">{currentCase.challenge}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Solution</h4>
                <p className="text-gray-700">{currentCase.solution}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Résultats</h4>
                <ul className="list-none space-y-2">
                  {Object.entries(currentCase.results).map(([key, value]) => (
                    <li key={key} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {currentCase.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Thumbnails Navigation */}
          <div className="mt-8 flex justify-center gap-4">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all ${
                  currentIndex === index
                    ? 'ring-2 ring-blue-500 ring-offset-2'
                    : 'opacity-50 hover:opacity-75'
                }`}
              >
                <Image
                  src={study.images.thumbnail}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
