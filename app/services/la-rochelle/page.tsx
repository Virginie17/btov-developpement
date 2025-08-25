'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { localBusinessInfo } from '@/app/seo/localSeoConfig';
import CTA from '@/components/CTA';
import TestimonialSection from '@/components/TestimonialSection';
import ServiceCard from '@/components/ServiceCard';
import FAQSection from '@/components/FAQSection';

// Données de la page pour La Rochelle
const cityData = {
  name: 'La Rochelle',
  region: 'Charente-Maritime',
  postalCode: '17000',
  description: 'Développeur web freelance à La Rochelle, spécialisé dans la création de sites web professionnels, e-commerce et applications sur mesure.',
  longDescription: `
    Basé à La Rochelle, BTOV Développement vous propose des services de développement web de qualité, adaptés aux besoins des entreprises locales. 
    Que vous soyez une petite entreprise, un commerce, un restaurant ou un professionnel indépendant à La Rochelle, 
    je vous accompagne dans la création de votre présence en ligne avec des solutions sur mesure.
  `,
  landmarks: ['Vieux Port', 'Aquarium', 'Tours de La Rochelle', 'Marché Central'],
  neighborhoods: ['Centre-ville', 'Les Minimes', 'La Pallice', 'Port Neuf'],
  localBusinesses: ['Restaurants', 'Hôtels', 'Commerces', 'Artisans'],
  imageUrl: '/images/la-rochelle.jpg',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45064.39078049542!2d-1.1834642!3d46.1591126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48015383c9253d75%3A0x405d39260ee9640!2sLa%20Rochelle!5e0!3m2!1sfr!2sfr!4v1649754562745!5m2!1sfr!2sfr',
};

// FAQ spécifique à La Rochelle
const localFAQs = [
  {
    question: "Quels sont vos tarifs pour la création d'un site web à La Rochelle ?",
    answer: "Les tarifs pour un site web à La Rochelle débutent à 1800€ pour un site vitrine professionnel. Pour les entreprises avec un budget limité, notre offre Landing Page Express est disponible à partir de 399€. Chaque projet est unique et fait l'objet d'un devis personnalisé selon vos besoins spécifiques."
  },
  {
    question: "Combien de temps faut-il pour créer un site web à La Rochelle ?",
    answer: "Le délai de création d'un site web à La Rochelle varie selon la complexité du projet : 7 jours pour une Landing Page Express, 4 à 6 semaines pour un site vitrine, et 8 à 12 semaines pour un site e-commerce. Nous établissons un calendrier précis dès le début du projet pour vous garantir une visibilité complète sur les délais."
  },
  {
    question: "Proposez-vous des services de référencement local pour les entreprises de La Rochelle ?",
    answer: "Oui, nous proposons des services de référencement local spécialement conçus pour les entreprises de La Rochelle. Cela inclut l'optimisation de votre fiche Google My Business, la création de contenu localisé, et des stratégies pour améliorer votre visibilité dans les recherches locales. Notre objectif est de vous aider à attirer plus de clients de La Rochelle et ses environs."
  },
  {
    question: "Pouvez-vous m'aider à mettre à jour mon site web existant à La Rochelle ?",
    answer: "Absolument. Nous proposons des services de refonte et de mise à jour pour les sites web existants à La Rochelle. Après un audit complet de votre site actuel, nous vous recommandons les améliorations nécessaires pour moderniser votre présence en ligne, améliorer l'expérience utilisateur et optimiser votre référencement local."
  },
  {
    question: "Quels types d'entreprises à La Rochelle accompagnez-vous ?",
    answer: "Nous travaillons avec tous types d'entreprises à La Rochelle : commerces de proximité, restaurants, hôtels, professionnels indépendants, artisans, associations et PME. Chaque secteur a ses spécificités, et nous adaptons nos solutions pour répondre aux besoins particuliers de votre activité et de votre clientèle locale."
  }
];

export default function LaRochellePage() {
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
                Développeur Web à {cityData.name}
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
                Pourquoi choisir un développeur web local à {cityData.name} ?
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
                    <p className="text-gray-600">Une compréhension approfondie des entreprises et des consommateurs de {cityData.name}.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Communication facilitée</h3>
                    <p className="text-gray-600">Possibilité de rendez-vous en personne et réactivité accrue pour votre projet.</p>
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
                    <h3 className="text-xl font-semibold text-gray-900">Soutien à l'économie locale</h3>
                    <p className="text-gray-600">En travaillant avec un développeur de {cityData.name}, vous contribuez à l'économie de notre région.</p>
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
            {localBusinessInfo.localAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="font-medium text-gray-900">{area.name} ({area.postalCode})</p>
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

// Métadonnées de la page pour le SEO
export const metadata: Metadata = {
  title: `Développeur Web à ${cityData.name} | Création de Sites Web Professionnels`,
  description: `Création de sites web professionnels à ${cityData.name} (${cityData.postalCode}). Développeur web freelance local proposant des sites sur mesure, e-commerce et applications web.`,
  keywords: [
    `développeur web ${cityData.name}`,
    `création site web ${cityData.name}`,
    `agence web ${cityData.name}`,
    `site internet ${cityData.name}`,
    `référencement local ${cityData.name}`,
    `création site e-commerce ${cityData.name}`,
    `développeur freelance ${cityData.region}`,
    `site vitrine ${cityData.name}`,
    `maintenance site web ${cityData.name}`,
    `refonte site internet ${cityData.name}`
  ],
  alternates: {
    canonical: `/services/${cityData.name.toLowerCase().replace(/\s+/g, '-')}`,
  },
};
