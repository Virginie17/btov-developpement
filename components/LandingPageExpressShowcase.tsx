import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getOptimizedImageProps } from '../utils/image-optimization';

type TransformationExample = {
  id: string;
  title: string;
  description: string;
  before: {
    path: string;
    alt: string;
    width: number;
    height: number;
  };
  after: {
    path: string;
    alt: string;
    width: number;
    height: number;
  };
  features: string[];
  stats: {
    label: string;
    value: string;
  }[];
};

const examples: TransformationExample[] = [
  {
    id: 'restaurant',
    title: 'Le Bistrot Parisien',
    description: 'Transformation d\'un site basique en landing page moderne pour un restaurant',
    before: {
      path: '/images/portfolio/immo-thumb.png',
      alt: 'Site web basique du restaurant Le Bistrot Parisien avant transformation',
      width: 800,
      height: 600,
    },
    after: {
      path: '/images/restaurant-hero.jpg',
      alt: 'Landing page moderne du restaurant Le Bistrot Parisien après transformation',
      width: 800,
      height: 600,
    },
    features: [
      'Menu interactif',
      'Réservation en ligne',
      'Avis clients',
      'Design responsive',
      'Appels à l\'action attractifs'
    ],
    stats: [
      { label: 'Temps de réalisation', value: '7 jours' },
      { label: 'Taux de conversion', value: '+45%' },
      { label: 'Réservations en ligne', value: '+60%' }
    ]
  },
  {
    id: 'menuiserie',
    title: 'Menuiserie Dubois',
    description: 'Transformation d\'une simple carte de visite en landing page professionnelle',
    before: {
      path: '/images/portfolio/fashion-store-thumb.png',
      alt: 'Simple carte de visite en ligne de la Menuiserie Dubois avant transformation',
      width: 800,
      height: 600,
    },
    after: {
      path: '/images/menuiserie-hero.jpg',
      alt: 'Landing page professionnelle de la Menuiserie Dubois après transformation',
      width: 800,
      height: 600,
    },
    features: [
      'Galerie de réalisations',
      'Formulaire de devis',
      'Témoignages clients',
      'Certifications et garanties',
      'Design chaleureux'
    ],
    stats: [
      { label: 'Projets réalisés', value: '150+' },
      { label: 'Sur mesure', value: '100%' },
      { label: 'Expérience', value: '30 ans' },
      { label: 'Note clients', value: '5 étoiles' }
    ]
  }
];

const LandingPageExpressShowcase: React.FC = () => {
  const [activeExample, setActiveExample] = useState<string>(examples[0].id);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const [metadata, setMetadata] = useState<any>(null);

  useEffect(() => {
    // Charger les métadonnées des images optimisées
    const loadMetadata = async () => {
      try {
        const response = await fetch('/images/landing-page-express/metadata.json');
        if (response.ok) {
          const data = await response.json();
          setMetadata(data);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des métadonnées:', error);
      }
    };

    loadMetadata();
  }, []);

  useEffect(() => {
    // Précharger les images pour une meilleure expérience utilisateur
    const preloadImages = async () => {
      setImagesLoaded(false);
      
      const imagesToPreload = examples.map(example => [
        example.before.path,
        example.after.path
      ]).flat();
      
      const promises = imagesToPreload.map(src => {
        return new Promise((resolve) => {
          const img = new globalThis.Image();
          img.src = src;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });
      });
      
      await Promise.all(promises);
      setImagesLoaded(true);
    };
    
    preloadImages();
  }, []);

  const currentExample = examples.find(ex => ex.id === activeExample) || examples[0];

  // Fonction pour obtenir les sources d'images responsives
  const getResponsiveSrcSet = (basePath: string) => {
    if (!metadata) return undefined;
    
    const imageData = metadata.find((img: any) => img.path === basePath);
    if (!imageData || !imageData.responsiveImages) return undefined;
    
    return imageData.responsiveImages
      .map((img: any) => `${img.path} ${img.width}w`)
      .join(', ');
  };

  // Fonction pour obtenir l'image LQIP (Low Quality Image Placeholder)
  const getLqipSrc = (basePath: string) => {
    if (!metadata) return undefined;
    
    const imageData = metadata.find((img: any) => img.path === basePath);
    return imageData?.lqip;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Landing Page Express - Exemples de Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous transformons des sites web basiques en landing pages modernes et efficaces en seulement 7 jours.
          </p>
        </div>

        {/* Sélecteur d'exemples */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {examples.map(example => (
              <button
                key={example.id}
                type="button"
                onClick={() => setActiveExample(example.id)}
                className={`px-5 py-2.5 text-sm font-medium ${
                  activeExample === example.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } ${
                  example.id === examples[0].id
                    ? 'rounded-l-lg border border-gray-200'
                    : example.id === examples[examples.length - 1].id
                    ? 'rounded-r-lg border border-gray-200'
                    : 'border-t border-b border-r border-gray-200'
                }`}
                aria-current={activeExample === example.id ? 'page' : undefined}
              >
                {example.title}
              </button>
            ))}
          </div>
        </div>

        {/* Affichage de l'exemple actif */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Avant la transformation</h3>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                {getLqipSrc(currentExample.before.path) && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center blur-sm"
                    style={{ 
                      backgroundImage: `url(${getLqipSrc(currentExample.before.path)})`,
                      opacity: imagesLoaded ? 0 : 1,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />
                )}
                <Image
                  src={currentExample.before.path}
                  alt={currentExample.before.alt}
                  width={currentExample.before.width}
                  height={currentExample.before.height}
                  className={`rounded-lg object-cover h-full w-full transition-opacity duration-300 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
                  {...getOptimizedImageProps(currentExample.before.alt)}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <p>Simple page statique avec informations basiques</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Après la transformation</h3>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                {getLqipSrc(currentExample.after.path) && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center blur-sm"
                    style={{ 
                      backgroundImage: `url(${getLqipSrc(currentExample.after.path)})`,
                      opacity: imagesLoaded ? 0 : 1,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />
                )}
                <Image
                  src={currentExample.after.path}
                  alt={currentExample.after.alt}
                  width={currentExample.after.width}
                  height={currentExample.after.height}
                  className={`rounded-lg object-cover h-full w-full transition-opacity duration-300 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
                  {...getOptimizedImageProps(currentExample.after.alt, true)}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <p>Landing page moderne avec fonctionnalités interactives</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentExample.title}</h3>
            <p className="text-gray-600 mb-6">{currentExample.description}</p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Fonctionnalités ajoutées</h4>
              <ul className="space-y-2">
                {currentExample.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Résultats obtenus</h4>
              <div className="grid grid-cols-2 gap-4">
                {currentExample.stats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-700 font-medium">Prix de l'offre</p>
                  <p className="text-3xl font-bold text-blue-600">399€</p>
                  <p className="text-sm text-gray-500">au lieu de 499€</p>
                </div>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Demander un devis
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Notre offre Landing Page Express inclut l'hébergement pour la première année et la livraison en 7 jours.
          </p>
          <a 
            href="/offres/landing-page-express" 
            className="inline-flex items-center px-5 py-2.5 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            En savoir plus sur l'offre
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPageExpressShowcase;
