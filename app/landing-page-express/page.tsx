'use client';

import Link from 'next/link';
import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { withLazyLoad } from '@/utils/dynamic-import';
import OptimizedImage from '@/components/OptimizedImage';

// Composants chargés dynamiquement
const ContactForm = lazy(() => import('@/components/ContactFormExpress'));
// Utilisation de withLazyLoad pour charger le composant uniquement lorsqu'il est visible
const TestimonialSection = withLazyLoad(() => import('../../components/TestimonialSection'));

export default function LandingPageExpress() {
  // Mots-clés SEO pertinents pour cette page
  const keywords = [
    'landing page express',
    'création landing page',
    'page web professionnelle',
    'site vitrine rapide',
    'landing page pas cher',
    'création site web 7 jours',
    'page web entreprise',
    'site internet abordable',
    'page de vente en ligne',
    'landing page efficace'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-16">
      {/* SEO Metadata */}
      <Helmet>
        <title>Landing Page Express | Votre Site Web Professionnel en 7 Jours | BTOV Développement</title>
        <meta name="description" content="Obtenez une landing page professionnelle en 7 jours pour seulement 399€. Solution idéale pour les TPE/PME, artisans et commerçants qui souhaitent démarrer rapidement leur présence en ligne." />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href="https://btov-developpement.fr/landing-page-express" />
        <meta property="og:title" content="Landing Page Express | Site Web Professionnel en 7 Jours" />
        <meta property="og:description" content="Démarrez votre présence en ligne avec une landing page professionnelle pour seulement 399€, livrée en 7 jours. Idéal pour TPE/PME, artisans et commerçants." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://btov-developpement.fr/landing-page-express" />
        <meta property="og:image" content="https://btov-developpement.fr/images/landing-page-express-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Votre <span className="text-primary-600">Landing Page Professionnelle</span> en 7 Jours
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4">
          Une solution clé en main pour seulement <span className="text-primary-600 font-semibold">399€</span>
        </p>
        <div className="text-sm text-gray-500 mb-4">
          <span className="line-through">499€</span> - Offre limitée aux 10 premiers clients
        </div>
        <p className="text-md text-gray-600 mb-8 max-w-2xl mx-auto">
          Solution idéale pour les <strong>TPE/PME</strong>, <strong>artisans</strong>, <strong>commerçants</strong> et <strong>entrepreneurs</strong> qui souhaitent démarrer rapidement leur présence en ligne. Pour un site plus complet, découvrez nos{' '}
          <Link href="/tarifs" className="text-primary-600 hover:text-primary-700 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1">
            packs standards
          </Link>
        </p>
        <a 
          href="#contact" 
          className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label="Commencer votre projet de landing page maintenant"
        >
          Commencer Maintenant
        </a>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="features-heading" className="text-3xl font-bold text-center mb-12">Une Solution Simple et Efficace pour Votre Présence Web</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 border rounded-lg bg-green-50">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Ce qui est inclus dans votre landing page</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Design <strong>responsive</strong> adapté à tous les écrans (mobile, tablette, ordinateur)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Formulaire de contact professionnel pour générer des <strong>leads qualifiés</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Mise en ligne rapide en <strong>7 jours ouvrés</strong> garantis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Template professionnel pré-optimisé pour une <strong>expérience utilisateur</strong> optimale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span><strong>Hébergement</strong> première année inclus (valeur 120€)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span><strong>SEO basique</strong> inclus pour un référencement naturel</span>
                </li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Limitations de l'offre Landing Page Express</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Une seule page (pas de pages additionnelles)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Design sur template prédéfini (pas de design sur mesure)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Contenu limité (textes et images essentiels uniquement)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Sans personnalisation poussée</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Examples */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="examples-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="examples-heading" className="text-3xl font-bold text-center mb-4">Transformations Landing Page Express</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez comment nous transformons une simple présence en ligne en une landing page professionnelle et efficace qui convertit vos visiteurs en clients.
          </p>
          {/* Example 1 - Restaurant */}
          <div className="space-y-4">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-white">
                {/* En-tête basique */}
                <div className="h-20 bg-gray-800 flex items-center justify-center">
                  <h3 className="text-2xl font-serif text-white">Le Bistrot Parisien</h3>
                </div>
                
                <div className="p-8">
                  {/* Présentation */}
                  <div className="mb-8 text-center">
                    <p className="text-gray-600 italic">Restaurant traditionnel français depuis 1998</p>
                    <div className="mt-4 inline-block px-4 py-1 bg-red-100 text-red-800 text-sm rounded">
                      Ouvert du mardi au samedi
                    </div>
                  </div>

                  {/* Menu du jour */}
                  <div className="mb-8 p-4 border border-gray-200 rounded">
                    <h4 className="text-lg font-medium mb-4 text-center">Menu du Jour - 25€</h4>
                    <div className="space-y-2 text-gray-600 text-center">
                      <p>Entrée + Plat + Dessert</p>
                      <p className="text-sm italic">* Menu disponible uniquement le midi</p>
                    </div>
                  </div>

                  {/* Informations de contact */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>01 23 45 67 89</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>123 rue de la Gastronomie, Paris</span>
                    </div>
                  </div>

                  {/* Boutons d'action */}
                  <div className="mt-8 flex flex-col items-center gap-4">
                    <a href="#" className="inline-block px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors w-full text-center">
                      Voir la carte complète (PDF)
                    </a>
                    <p className="text-sm text-gray-500">Pour réserver, appelez-nous par téléphone</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-medium">Avant</div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                <div className="h-2/3 bg-[url('/images/restaurant-hero.jpg')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative h-full flex items-center justify-center text-center px-6">
                    <div>
                      <h3 className="text-3xl font-serif text-white mb-4">Le Bistrot Parisien</h3>
                      <p className="text-white/90 text-lg mb-6">Une expérience gastronomique authentique</p>
                      <button className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all transform hover:scale-105">
                        Réserver une table
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white">
                  <div className="grid grid-cols-3 h-full">
                    <div className="p-4 border-r border-gray-100 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Menu Interactif</span>
                    </div>
                    <div className="p-4 border-r border-gray-100 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Réservation</span>
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Avis Clients</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full font-medium">Après</div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Restaurant Gastronomique</h3>
              <p className="text-sm text-gray-600">D'une simple carte de visite à une expérience en ligne immersive</p>
            </div>
          </div>
          {/* Example 2 - Artisan */}
          <div className="space-y-4">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-white">
                {/* En-tête avec logo simple */}
                <div className="h-24 bg-[#2C1810] flex items-center justify-center p-4">
                  <div className="text-center">
                    <h3 className="text-xl text-white font-medium">Martin Dubois</h3>
                    <p className="text-white/80 text-sm">Artisan Menuisier</p>
                  </div>
                </div>

                <div className="p-8">
                  {/* Présentation */}
                  <div className="mb-8 text-center">
                    <p className="text-gray-600">30 ans d'expérience en menuiserie traditionnelle</p>
                    <div className="mt-4 inline-block px-4 py-1 bg-yellow-50 text-yellow-800 text-sm rounded">
                      Devis gratuit
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4 text-center">Nos Services</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-[#2C1810]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Fabrication de meubles sur mesure</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-[#2C1810]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Restauration de meubles anciens</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-[#2C1810]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Agencement intérieur</span>
                      </li>
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="space-y-3 text-center">
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>06 12 34 56 78</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>contact@menuiserie-dubois.fr</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>45 rue des Artisans, La Rochelle</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-medium">Avant</div>
            </div>

            {/* Artisan After */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                <div className="h-2/3 bg-[url('/images/menuiserie-hero.jpg')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
                  <div className="relative h-full flex items-center px-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full">Artisan Certifié</span>
                        <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full">30 ans d'expérience</span>
                      </div>
                      <h3 className="text-3xl font-medium text-white mb-4">Menuiserie Dubois</h3>
                      <p className="text-white/90 text-lg mb-6 max-w-md">
                        L'excellence de l'artisanat traditionnel au service de vos projets sur mesure
                      </p>
                      <button className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105">
                        Demander un devis gratuit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white">
                  <div className="grid grid-cols-4 h-full divide-x divide-gray-100">
                    <div className="p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                      <span className="text-2xl font-medium text-primary-600 mb-1">150+</span>
                      <span className="text-sm text-gray-600">Projets Réalisés</span>
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                      <span className="text-2xl font-medium text-primary-600 mb-1">100%</span>
                      <span className="text-sm text-gray-600">Sur Mesure</span>
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                      <span className="text-2xl font-medium text-primary-600 mb-1">30</span>
                      <span className="text-sm text-gray-600">Ans d'Expérience</span>
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                      <span className="text-2xl font-medium text-primary-600 mb-1">5★</span>
                      <span className="text-sm text-gray-600">Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full font-medium">Après</div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Artisan Menuisier</h3>
              <p className="text-sm text-gray-600">D'une simple page contact à une vitrine professionnelle captivante</p>
            </div>
          </div>
        </div>
      </section>

      {/* Options de mise à niveau */}
      <section className="py-16 px-4 bg-white" aria-labelledby="options-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="options-heading" className="text-3xl font-bold text-center mb-12">Options de Mise à Niveau</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">SEO Basique</h3>
              <p className="mb-4">Optimisation pour les moteurs de recherche, meta descriptions, balises essentielles pour un référencement naturel efficace</p>
              <p className="text-primary-600 font-semibold mb-2">Inclus</p>
              <p className="text-sm text-gray-600">Comme dans tous nos packs standards</p>
            </div>
            <div className="p-6 border rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Paiement en Ligne</h3>
              <p className="mb-4">Intégration solution de paiement sécurisée (Stripe/PayPal) avec configuration complète pour vendre directement</p>
              <p className="text-primary-600 font-semibold">+399€</p>
            </div>
            <div className="p-6 border rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Évolution Site Complet</h3>
              <p className="mb-4">Transformation en site multi-pages personnalisé avec fonctionnalités avancées</p>
              <p className="text-primary-600 font-semibold mb-2">À partir de 1 800€</p>
              <Link href="/tarifs" className="text-sm text-primary-600 hover:text-primary-700 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1">
                Voir nos packs standards
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Combien de temps faut-il pour créer ma landing page ?</h3>
              <p className="text-gray-600">Votre landing page sera livrée en 7 jours ouvrés à compter de la validation de votre commande et de la réception de vos contenus.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Puis-je modifier ma landing page après sa création ?</h3>
              <p className="text-gray-600">Des modifications mineures sont incluses dans les 30 jours suivant la livraison. Pour des modifications plus importantes, un devis vous sera proposé.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">La landing page est-elle adaptée aux mobiles ?</h3>
              <p className="text-gray-600">Oui, toutes nos landing pages sont 100% responsives et optimisées pour tous les appareils : smartphones, tablettes et ordinateurs.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Puis-je évoluer vers un site plus complet par la suite ?</h3>
              <p className="text-gray-600">Absolument ! Votre landing page peut être transformée en site complet à tout moment. Nous proposons des tarifs préférentiels pour cette évolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <TestimonialSection />

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4" aria-labelledby="contact-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="contact-heading" className="text-3xl font-bold text-center mb-4">Lancez Votre Projet de Landing Page</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous pour démarrer votre projet. Notre équipe vous contactera sous 24h pour discuter de vos besoins et lancer la création de votre landing page professionnelle.
          </p>
          <Suspense fallback={
            <div className="p-8 border rounded-lg bg-gray-50 animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4 w-1/2 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded mb-6 w-3/4 mx-auto"></div>
              <div className="space-y-4">
                <div className="h-10 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          }>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
