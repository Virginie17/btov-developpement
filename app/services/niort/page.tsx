'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { localBusinessInfo } from '@/app/seo/localSeoConfig';
import CTA from '@/components/CTA';
import TestimonialSection from '@/components/TestimonialSection';
import ServiceCard from '@/components/ServiceCard';
import FAQSection from '@/components/FAQSection';
import { cityData, localFAQs } from './data';

export default function NiortPage() {
  // Script pour Google Indexing API (à implémenter ultérieurement)
  useEffect(() => {
    // Code pour notifier Google de la nouvelle page
  }, []);

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src={cityData.imageUrl} 
            alt={`Développeur web à ${cityData.name}`}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
                Développeur Web intervenant à {cityData.name}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Création de Sites Web à {cityData.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {cityData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Demander un devis gratuit
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-secondary"
                >
                  Voir mes réalisations
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services locaux */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Services Web à {cityData.name}
            </h2>
            <p className="text-lg text-gray-600">
              Des solutions web adaptées aux entreprises et professionnels de {cityData.name} et ses environs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localBusinessInfo.mainServices.slice(0, 6).map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.name}
                description={`${service.description} pour les entreprises de ${cityData.name}.`}
                href={service.url}
                icon={`/icons/service-${index + 1}.svg`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section avantages locaux */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi choisir un développeur web intervenant à {cityData.name} ?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Connaissance du marché local</h3>
                    <p className="text-gray-600">Une compréhension approfondie des entreprises et des consommateurs de {cityData.name}, notamment du secteur des assurances.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Déplacements réguliers</h3>
                    <p className="text-gray-600">Possibilité de rendez-vous en personne à {cityData.name} pour discuter de votre projet.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Référencement local optimisé</h3>
                    <p className="text-gray-600">Stratégies SEO spécifiques pour améliorer votre visibilité à {cityData.name} et ses environs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Solutions adaptées au marché niortais</h3>
                    <p className="text-gray-600">Des sites web conçus en tenant compte des spécificités économiques de {cityData.name}, notamment pour le secteur des assurances.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <iframe 
                src={cityData.mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`Carte de ${cityData.name}`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages locaux */}
      <TestimonialSection 
        title={`Ce que disent nos clients de ${cityData.name}`}
        subtitle="Découvrez les retours d'expérience des entreprises locales qui nous ont fait confiance."
      />

      {/* FAQ locale */}
      <FAQSection 
        title={`Questions fréquentes sur la création de site web à ${cityData.name}`}
        faqs={localFAQs}
      />

      {/* Quartiers et zones desservies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Zones desservies à {cityData.name} et alentours
            </h2>
            <p className="text-lg text-gray-600">
              Nous intervenons dans tous les quartiers de {cityData.name} et les communes environnantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {cityData.neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="font-medium text-gray-900">{neighborhood}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types d'entreprises */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solutions adaptées à tous les secteurs d'activité
            </h2>
            <p className="text-lg text-gray-600">
              Quel que soit votre domaine d'activité à {cityData.name}, nous avons l'expertise pour créer votre site web sur mesure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {cityData.localBusinesses.map((business, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{business}</h3>
                <p className="text-gray-600">Sites web optimisés pour les {business.toLowerCase()} de {cityData.name}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title={`Prêt à développer votre présence en ligne à ${cityData.name} ?`}
        description="Contactez-moi pour discuter de votre projet et obtenir un devis personnalisé."
        buttonText="Demander un devis gratuit"
        buttonLink="/contact"
      />
    </main>
  );
}

