'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CTA from '@/components/CTA';
import { generateEnhancedWebPageSchema } from '@/app/seo/schemaGenerator';
import { caseStudies } from './data';

export default function CaseStudiesPage() {
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema)
        }}
      />
    </main>
  );
}
