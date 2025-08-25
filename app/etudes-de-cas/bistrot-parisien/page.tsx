'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CTA from '@/components/CTA';
import { generateEnhancedWebPageSchema, generateEnhancedServiceSchema } from '@/app/seo/schemaGenerator';

// Données de l'étude de cas
const caseStudy = {
  id: 'bistrot-parisien',
  title: 'Le Bistrot Parisien',
  subtitle: 'Restaurant à La Rochelle',
  description: 'Transformation d\'un site statique en landing page moderne avec réservations en ligne et menu interactif.',
  challenge: 'Le Bistrot Parisien disposait d\'un site web basique qui ne reflétait pas l\'ambiance chaleureuse du restaurant et ne permettait pas aux clients de réserver en ligne ou de consulter le menu de façon interactive.',
  solution: 'Création d\'une landing page express moderne avec une section hero mettant en valeur l\'ambiance du restaurant, un menu interactif, un système de réservation en ligne et une intégration des avis clients.',
  results: [
    'Augmentation de 45% des réservations en ligne',
    'Temps de consultation du menu multiplié par 3',
    'Amélioration du taux de conversion de 2,1% à 5,8%',
    'Réduction du taux de rebond de 65% à 32%'
  ],
  testimonial: {
    quote: 'La landing page a transformé notre présence en ligne. Nous recevons désormais des réservations même en dehors des heures d\'ouverture, et les clients apprécient de pouvoir consulter notre menu à jour.',
    author: 'Sophie Martin',
    position: 'Gérante, Le Bistrot Parisien'
  },
  technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Formulaire de réservation personnalisé'],
  imagesBefore: ['/images/case-studies/bistrot-before.webp'],
  imagesAfter: ['/images/case-studies/bistrot-after.webp'],
  location: 'La Rochelle, Charente-Maritime',
  projectType: 'Landing Page Express',
  projectDuration: '7 jours',
  url: '/etudes-de-cas/bistrot-parisien',
  address: {
    street: '15 Quai Duperré',
    city: 'La Rochelle',
    postalCode: '17000',
    region: 'Charente-Maritime'
  },
  localKeywords: [
    'restaurant La Rochelle',
    'site web restaurant La Rochelle',
    'réservation en ligne restaurant vieux port',
    'menu interactif restaurant La Rochelle',
    'Bistrot Parisien La Rochelle'
  ]
};

export default function CaseStudyPage() {
  // Générer le schéma JSON-LD pour la page
  const pageSchema = generateEnhancedWebPageSchema('https://btov-developpement.fr', {
    name: `Étude de cas : ${caseStudy.title} - ${caseStudy.subtitle}`,
    description: caseStudy.description,
    url: caseStudy.url,
    breadcrumb: {
      itemListElement: [
        {
          position: 1,
          name: 'Accueil',
          item: '/'
        },
        {
          position: 2,
          name: 'Études de cas',
          item: '/etudes-de-cas'
        },
        {
          position: 3,
          name: caseStudy.title,
          item: caseStudy.url
        }
      ]
    }
  });

  // Schéma pour le service local
  const serviceSchema = generateEnhancedServiceSchema('https://btov-developpement.fr', {
    name: `Création de site web pour restaurant à ${caseStudy.location}`,
    description: `Service de création de landing page express pour restaurants à ${caseStudy.address.city}, avec réservation en ligne et menu interactif.`,
    url: caseStudy.url,
    serviceType: 'WebsiteDevelopment',
    areaServed: [
      {
        type: 'City',
        name: caseStudy.address.city,
        postalCode: caseStudy.address.postalCode,
        addressRegion: caseStudy.address.region
      }
    ]
  });

  return (
    <main className="bg-white">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/etudes-de-cas" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Retour aux études de cas
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {caseStudy.subtitle}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                {caseStudy.projectType}
              </span>
              <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                {caseStudy.location}
              </span>
              <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                {caseStudy.projectDuration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu avant/après */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Avant / Après
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src={caseStudy.imagesBefore[0]}
                    alt={`${caseStudy.title} - Avant`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                    Avant
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Site web initial</h3>
                  <p className="text-gray-600">Site web statique avec menu PDF et informations basiques.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src={caseStudy.imagesAfter[0]}
                    alt={`${caseStudy.title} - Après`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 left-4 bg-primary-500 text-white text-sm font-medium px-3 py-1 rounded">
                    Après
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Nouvelle landing page</h3>
                  <p className="text-gray-600">Landing page moderne avec réservations en ligne et menu interactif.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Détails du projet */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Le défi
                </h2>
                <p className="text-gray-600 mb-8">
                  {caseStudy.challenge}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  La solution
                </h2>
                <p className="text-gray-600 mb-8">
                  {caseStudy.solution}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Les résultats
                </h2>
                <ul className="space-y-3 mb-8">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Informations du projet
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Type de projet</p>
                      <p className="text-gray-700">{caseStudy.projectType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Durée</p>
                      <p className="text-gray-700">{caseStudy.projectDuration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Localisation</p>
                      <p className="text-gray-700">{caseStudy.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Technologies</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {caseStudy.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg shadow-md p-6">
                  <div className="text-primary-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 italic mb-4">"{caseStudy.testimonial.quote}"</p>
                  <div>
                    <p className="text-gray-900 font-medium">{caseStudy.testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{caseStudy.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services similaires */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Vous avez un projet similaire ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Je propose des services adaptés aux restaurants et commerces locaux à La Rochelle et ses environs.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Landing Page Express</h3>
                <p className="text-gray-600 mb-4">Une landing page professionnelle livrée en 7 jours, idéale pour les restaurants et commerces locaux.</p>
                <Link
                  href="/landing-page-express"
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  En savoir plus
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Vitrine</h3>
                <p className="text-gray-600 mb-4">Un site web complet et sur mesure pour présenter votre établissement et développer votre clientèle locale.</p>
                <Link
                  href="/services"
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title="Prêt à transformer votre présence en ligne ?"
        description="Contactez-moi pour discuter de votre projet et découvrir comment je peux vous aider à obtenir des résultats similaires."
        buttonText="Demander un devis gratuit"
        buttonLink="/contact"
        secondaryButtonText="Voir mes services"
        secondaryButtonLink="/services"
      />

      {/* Balisage schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </main>
  );
}

// Métadonnées de la page pour le SEO
export const metadata: Metadata = {
  title: `Étude de cas : ${caseStudy.title} - ${caseStudy.subtitle} | BTOV Développement`,
  description: `${caseStudy.description} Découvrez comment j'ai transformé la présence en ligne du Bistrot Parisien à La Rochelle avec une landing page moderne et efficace.`,
  keywords: [
    ...caseStudy.localKeywords,
    "création site web restaurant",
    "landing page restaurant La Rochelle",
    "réservation en ligne restaurant",
    "menu interactif site web",
    "développeur web La Rochelle",
    "étude de cas web local",
    "transformation digitale restaurant"
  ],
  alternates: {
    canonical: caseStudy.url,
  },
};
