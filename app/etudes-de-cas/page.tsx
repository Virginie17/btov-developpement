'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CTA from '@/components/CTA';
import { generateEnhancedWebPageSchema } from '@/app/seo/schemaGenerator';

// Données des études de cas
const caseStudies = [
  {
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
    url: '/etudes-de-cas/bistrot-parisien'
  },
  {
    id: 'menuiserie-dubois',
    title: 'Menuiserie Dubois',
    subtitle: 'Artisan menuisier à La Rochelle',
    description: 'Transformation d\'une simple carte de visite en ligne en landing page professionnelle générant des demandes de devis.',
    challenge: 'La Menuiserie Dubois disposait d\'une simple page web statique qui ne mettait pas en valeur leur savoir-faire et ne générait que très peu de demandes de devis en ligne.',
    solution: 'Création d\'une landing page express professionnelle avec une galerie de réalisations, des badges de confiance, des témoignages clients et un formulaire de demande de devis optimisé pour les conversions.',
    results: [
      'Triplement des demandes de devis en ligne (de 5 à 15 par semaine)',
      'Amélioration du positionnement Google pour les recherches locales',
      'Augmentation du temps moyen passé sur le site de 45 secondes à 2 minutes 30',
      'Taux de conversion de 7,2% sur le formulaire de devis'
    ],
    testimonial: {
      quote: 'Depuis la mise en ligne de notre nouvelle landing page, nous recevons des demandes de devis de qualité et en plus grand nombre. Les clients mentionnent souvent avoir été convaincus par la galerie de nos réalisations.',
      author: 'Jean Dubois',
      position: 'Fondateur, Menuiserie Dubois'
    },
    technologies: ['Next.js', 'Tailwind CSS', 'Galerie d\'images optimisée', 'Formulaire de devis avec validation'],
    imagesBefore: ['/images/case-studies/menuiserie-before.webp'],
    imagesAfter: ['/images/case-studies/menuiserie-after.webp'],
    location: 'La Rochelle, Charente-Maritime',
    projectType: 'Landing Page Express',
    projectDuration: '7 jours',
    url: '/etudes-de-cas/menuiserie-dubois'
  },
  {
    id: 'cabinet-martin',
    title: 'Cabinet Martin & Associés',
    subtitle: 'Cabinet comptable à Niort',
    description: 'Refonte complète du site web pour améliorer l\'image professionnelle et générer des prises de contact qualifiées.',
    challenge: 'Le Cabinet Martin & Associés disposait d\'un site web obsolète qui ne reflétait pas leur expertise et ne générait que peu de contacts. Ils souhaitaient moderniser leur image en ligne et attirer de nouveaux clients à Niort et ses environs.',
    solution: 'Création d\'un site vitrine professionnel avec une présentation claire des services, une section FAQ détaillée, des témoignages clients et un blog spécialisé en comptabilité et fiscalité pour les PME locales.',
    results: [
      'Augmentation de 65% des demandes de contact qualifiées',
      'Amélioration du positionnement pour les mots-clés "expert-comptable Niort"',
      'Réduction du taux de rebond de 72% à 38%',
      'Génération de leads via les articles de blog spécialisés'
    ],
    testimonial: {
      quote: 'Notre nouveau site web a complètement transformé notre présence en ligne. Il reflète parfaitement notre professionnalisme et nous recevons désormais des demandes de clients potentiels qui ont trouvé nos articles de blog utiles.',
      author: 'Philippe Martin',
      position: 'Associé principal, Cabinet Martin & Associés'
    },
    technologies: ['Next.js', 'Tailwind CSS', 'CMS headless', 'Optimisation SEO locale'],
    imagesBefore: ['/images/case-studies/cabinet-before.webp'],
    imagesAfter: ['/images/case-studies/cabinet-after.webp'],
    location: 'Niort, Deux-Sèvres',
    projectType: 'Site Vitrine Professionnel',
    projectDuration: '5 semaines',
    url: '/etudes-de-cas/cabinet-martin'
  }
];

export default function CaseStudiesPage() {
  // Générer le schéma JSON-LD pour la page
  const pageSchema = generateEnhancedWebPageSchema('https://btov-developpement.fr', {
    name: 'Études de cas - Projets web réalisés à La Rochelle et ses environs',
    description: 'Découvrez nos réalisations de sites web et landing pages pour des entreprises locales à La Rochelle, Niort et leurs environs. Avant/après et résultats concrets.',
    url: '/etudes-de-cas',
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
        }
      ]
    }
  });

  return (
    <main className="bg-white">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Études de cas
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez comment nous avons aidé des entreprises locales à transformer leur présence en ligne et à obtenir des résultats concrets.
            </p>
          </div>
        </div>
      </section>

      {/* Liste des études de cas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-60">
                  <Image
                    src={caseStudy.imagesAfter[0]}
                    alt={caseStudy.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <span className="text-white/80 text-sm mb-1 block">{caseStudy.subtitle}</span>
                      <h3 className="text-2xl font-bold text-white">{caseStudy.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {caseStudy.projectType}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {caseStudy.location}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <div className="mt-4">
                    <Link
                      href={caseStudy.url}
                      className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                    >
                      Voir l'étude de cas complète
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Méthodologie */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre approche pour chaque projet
            </h2>
            <p className="text-lg text-gray-600">
              Une méthodologie éprouvée pour garantir des résultats concrets et mesurables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyse</h3>
              <p className="text-gray-600">Étude approfondie de votre activité, de votre marché local et de vos objectifs.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Stratégie</h3>
              <p className="text-gray-600">Élaboration d'une stratégie web adaptée à votre entreprise et à votre zone géographique.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Création</h3>
              <p className="text-gray-600">Développement d'un site web optimisé pour les conversions et le référencement local.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Résultats</h3>
              <p className="text-gray-600">Suivi des performances et optimisation continue pour maximiser le retour sur investissement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avant/Après */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transformations visuelles
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez l'impact visuel de nos réalisations avec ces exemples avant/après.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/case-studies/bistrot-before.webp"
                  alt="Site web du Bistrot Parisien avant"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 bg-white/90 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                  Avant
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Le Bistrot Parisien</h3>
                <p className="text-gray-600">Site web statique avec menu PDF et informations basiques.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/case-studies/bistrot-after.webp"
                  alt="Site web du Bistrot Parisien après"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 bg-primary-500 text-white text-sm font-medium px-3 py-1 rounded">
                  Après
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Le Bistrot Parisien</h3>
                <p className="text-gray-600">Landing page moderne avec réservations en ligne et menu interactif.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/case-studies/menuiserie-before.webp"
                  alt="Site web de la Menuiserie Dubois avant"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 bg-white/90 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                  Avant
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Menuiserie Dubois</h3>
                <p className="text-gray-600">Simple carte de visite en ligne avec liste basique des services.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/case-studies/menuiserie-after.webp"
                  alt="Site web de la Menuiserie Dubois après"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 bg-primary-500 text-white text-sm font-medium px-3 py-1 rounded">
                  Après
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Menuiserie Dubois</h3>
                <p className="text-gray-600">Landing page professionnelle avec galerie de réalisations et formulaire de devis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-600">
              Des témoignages authentiques d'entreprises locales qui nous ont fait confiance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="text-primary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{caseStudy.testimonial.author}</h3>
                    <p className="text-sm text-gray-600">{caseStudy.testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{caseStudy.testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Résultats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Des résultats concrets et mesurables
            </h2>
            <p className="text-lg text-gray-600">
              Nos projets génèrent des améliorations significatives pour nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">+45%</div>
              <p className="text-gray-600">Augmentation moyenne des conversions</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">-50%</div>
              <p className="text-gray-600">Réduction moyenne du taux de rebond</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">+65%</div>
              <p className="text-gray-600">Amélioration du trafic local</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">x3</div>
              <p className="text-gray-600">Temps passé sur le site</p>
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
    </main>
  );
}

// Métadonnées de la page pour le SEO
export const metadata: Metadata = {
  title: "Études de cas - Projets web réalisés à La Rochelle et ses environs | BTOV Développement",
  description: "Découvrez nos réalisations de sites web et landing pages pour des entreprises locales à La Rochelle, Niort et leurs environs. Avant/après et résultats concrets.",
  keywords: [
    "études de cas web La Rochelle",
    "projets web locaux",
    "réalisations sites internet",
    "avant après site web",
    "refonte site internet La Rochelle",
    "création landing page",
    "portfolio développeur web",
    "sites web entreprises locales",
    "transformation digitale PME",
    "résultats SEO local"
  ],
  alternates: {
    canonical: "/etudes-de-cas",
  },
};
