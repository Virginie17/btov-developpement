'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import PageJsonLd from '@/components/PageJsonLd';
import { tarifsJsonLd } from '../metadata';
import DevisModal from '@/components/DevisModal';
import { ArrowRight } from 'lucide-react';

type ServiceProps = {
  title: string;
  price: string;
  timeframe?: string;
  features: string[];
};

const ServiceCard = ({ title, price, timeframe, features }: ServiceProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const basePrice = parseInt(price.replace(/[^0-9]/g, '')) || 0;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
        isHovered ? 'ring-2 ring-primary-500' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex-grow">
          {/* En-tête */}
          <div className="text-center pb-6 mb-6 border-b border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
            <div className="mb-2">
              <p className="text-3xl font-bold text-primary-600">{price}</p>
              {timeframe && (
                <p className="text-sm text-gray-600 mt-1">
                  {timeframe}
                </p>
              )}
            </div>
          </div>

          {/* Liste des fonctionnalités */}
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bouton */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold
          hover:bg-primary-700 transform transition-all duration-200 hover:scale-[1.02]
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Demander un devis
        </button>
      </div>

      <DevisModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={title}
        basePrice={basePrice}
        features={features}
      />
    </motion.div>
  );
};

export default function TarifsPage() {
  const [activeTab, setActiveTab] = useState('sitesVitrines');
  const services = {
    sitesVitrines: [
      {
        title: "Pack Essentiel - Site Vitrine",
        price: "à partir de 1 800 €",
        timeframe: "ou 450 € / jour",
        features: [
          "Site vitrine de 1 à 3 pages (Accueil, À propos, Contact)",
          "Design moderne et responsive (adapté mobile, tablette, desktop)",
          "Formulaire de contact sécurisé",
          "Intégration de vos textes et images",
          "Optimisation SEO de base (meta-descriptions, balises)",
          "Formation à l'administration du site",
          "Livraison en 2 à 4 semaines"
        ]
      },
      {
        title: "Pack Professionnel - Site Vitrine",
        price: "à partir de 2 700 €",
        timeframe: "ou 450 € / jour",
        features: [
          "Site de 4 à 8 pages personnalisées",
          "Design premium avec animations modernes",
          "Blog ou section actualités intégré",
          "Formulaires avancés (devis, réservation)",
          "Galerie photos/portfolio dynamique",
          "Optimisation SEO complète",
          "Intégration réseaux sociaux",
          "Statistiques de visites (Google Analytics)",
          "Maintenance 3 mois offerte",
          "Formation complète à l'administration",
          "Livraison en 4 à 6 semaines"
        ]
      },
      {
        title: "Pack Sur Mesure - Site Vitrine",
        price: "devis personnalisé",
        timeframe: "ou 450 € / jour",
        features: [
          "Nombre de pages illimité",
          "Design exclusif sur mesure",
          "Fonctionnalités spécifiques à vos besoins",
          "Système de réservation/prise de RDV",
          "Espace client/membre privé",
          "Intégrations API personnalisées",
          "Multi-langue possible",
          "Optimisation SEO avancée",
          "Stratégie de contenu",
          "Formation approfondie",
          "Support prioritaire",
          "Délai selon complexité du projet"
        ]
      }
    ],
    ecommerce: [
      {
        title: "Pack E-commerce Essentiel",
        price: "à partir de 3 800 €",
        timeframe: "ou 475 € / jour",
        features: [
          "Jusqu'à 50 produits avec variations",
          "Design e-commerce optimisé pour la conversion",
          "Paiement sécurisé (Stripe/PayPal)",
          "Gestion des stocks et inventaire",
          "Calcul automatique des frais de port",
          "Emails automatiques (confirmation, expédition)",
          "Page produit optimisée",
          "Panier d'achat et tunnel de vente optimisés",
          "Formation à la gestion de la boutique",
          "Hébergement sécurisé 1ère année inclus",
          "Support technique 3 mois inclus",
          "Livraison en 6 à 8 semaines"
        ]
      },
      {
        title: "Pack E-commerce Avancé",
        price: "à partir de 6 500 €",
        timeframe: "ou 475 € / jour",
        features: [
          "Catalogue produits illimité",
          "Design premium personnalisé",
          "Gestion avancée des stocks et fournisseurs",
          "Multi-devises et taxes automatiques",
          "Système de promotions et codes promo",
          "Programme de fidélité intégré",
          "Zone membre client personnalisée",
          "SEO e-commerce optimisé",
          "Intégration outils marketing (MailChimp, etc.)",
          "Analytics et rapports de vente détaillés",
          "Import/Export produits en masse",
          "Formation complète équipe incluse",
          "Support technique 6 mois inclus",
          "Livraison en 8 à 12 semaines"
        ]
      }
    ],
    maintenance: [
      {
        title: "Maintenance Ponctuelle",
        price: "110 €",
        timeframe: "par heure",
        features: [
          "Interventions à la demande",
          "Corrections de bugs",
          "Mises à jour de sécurité",
          "Modifications mineures du contenu",
          "Support par email",
          "Temps de réponse sous 48h",
          "Facturation au temps passé",
          "Sans engagement"
        ]
      },
      {
        title: "Forfait Maintenance Mensuel",
        price: "à partir de 220 €",
        timeframe: "par mois",
        features: [
          "2h de modifications incluses par mois",
          "Mises à jour régulières CMS et plugins",
          "Sauvegardes hebdomadaires",
          "Surveillance sécurité 24/7",
          "Support prioritaire par email et téléphone",
          "Temps de réponse sous 24h",
          "Rapport mensuel de performance",
          "Engagement 3 mois minimum"
        ]
      },
      {
        title: "Forfait Maintenance Annuel",
        price: "2 200 €",
        timeframe: "par an",
        features: [
          "24h de modifications incluses par an",
          "Mises à jour illimitées",
          "Sauvegardes quotidiennes",
          "Surveillance sécurité 24/7",
          "Support prioritaire illimité",
          "Temps de réponse sous 4h",
          "Hébergement premium inclus",
          "Renouvellement nom de domaine inclus",
          "Certificat SSL inclus",
          "Rapports trimestriels détaillés",
          "2 audits performance par an",
          "Engagement annuel"
        ]
      }
    ],
    applications: [
      {
        title: "Application Web Simple",
        price: "à partir de 5 500 €",
        timeframe: "ou 500 € / jour",
        features: [
          "Interface utilisateur intuitive",
          "Fonctionnalités de base",
          "Base de données simple",
          "Authentification utilisateurs",
          "Tests et déploiement",
          "Documentation technique",
          "Formation utilisateur incluse"
        ]
      },
      {
        title: "Application Web Avancée",
        price: "à partir de 11 000 €",
        timeframe: "ou 500 € / jour",
        features: [
          "Architecture complexe",
          "Base de données avancée",
          "API RESTful",
          "Système de rôles",
          "Intégrations tierces",
          "Tests automatisés",
          "Documentation complète",
          "Support de lancement"
        ]
      }
    ],
    audit: [
      {
        title: "Audit technique ou SEO",
        price: "à partir de 450 €",
        timeframe: "forfait",
        features: [
          "Analyse technique approfondie",
          "Audit de performance",
          "Analyse de la sécurité",
          "Rapport détaillé",
          "Recommandations priorisées",
          "Plan d'action correctif"
        ]
      },
      {
        title: "Conseil et Accompagnement",
        price: "125 €",
        timeframe: "par heure",
        features: [
          "Réunions stratégiques",
          "Définition des besoins",
          "Recommandations techniques",
          "Accompagnement projet",
          "Support décisionnel",
          "Disponible en forfait journée (500 €/jour)"
        ]
      }
    ],
    options: [
      {
        title: "Rédaction Web SEO",
        price: "à partir de 75 €",
        timeframe: "par page",
        features: [
          "Recherche de mots-clés",
          "Rédaction optimisée SEO",
          "Balises meta incluses",
          "Ton adapté à votre marque",
          "2 révisions incluses",
          "Forfait pack 10 pages : 650 €"
        ]
      },
      {
        title: "Formation",
        price: "300 €",
        timeframe: "2 heures",
        features: [
          "Formation personnalisée",
          "Gestion du back-office",
          "Bonnes pratiques SEO",
          "Support de formation fourni",
          "Suivi post-formation (2 semaines)",
          "Forfait journée : 500 €"
        ]
      },
      {
        title: "Hébergement Premium",
        price: "35 €",
        timeframe: "par mois",
        features: [
          "Hébergement haute performance",
          "Certificat SSL inclus",
          "Sauvegardes quotidiennes",
          "Protection DDoS",
          "Support technique 24/7",
          "Forfait annuel : 350 €"
        ]
      }
    ],
    hebergement: [
      {
        title: "Hébergement Standard",
        price: "15 €",
        timeframe: "par mois",
        features: [
          "Espace disque SSD 10 Go",
          "Trafic illimité",
          "Certificat SSL gratuit",
          "Sauvegarde hebdomadaire",
          "Support par email",
          "99.9% de disponibilité",
          "Forfait annuel : 150 €"
        ]
      },
      {
        title: "Hébergement Premium",
        price: "35 €",
        timeframe: "par mois",
        features: [
          "Espace disque SSD 50 Go",
          "Trafic illimité haute performance",
          "Certificat SSL premium",
          "Sauvegarde quotidienne",
          "Support prioritaire 24/7",
          "99.99% de disponibilité",
          "Protection DDoS avancée",
          "CDN inclus",
          "Forfait annuel : 350 €"
        ]
      },
      {
        title: "Nom de Domaine",
        price: "à partir de 15 €",
        timeframe: "par an",
        features: [
          "Extensions disponibles : .fr, .com, .net, .eu",
          "Protection WHOIS incluse",
          "Gestion DNS complète",
          "Redirection email incluse",
          "Renouvellement automatique",
          "Support technique inclus",
          "Transfert gratuit"
        ]
      }
    ]
  };

  const tabsConfig = [
    { id: 'sitesVitrines', label: 'Sites Vitrines', icon: '🌐' },
    { id: 'ecommerce', label: 'E-commerce', icon: '🛍️' },
    { id: 'applications', label: 'Applications', icon: '📱' },
    { id: 'maintenance', label: 'Maintenance', icon: '🔧' },
    { id: 'audit', label: 'Audit', icon: '📊' },
    { id: 'options', label: 'Options', icon: '✨' },
    { id: 'hebergement', label: 'Hébergement & Domaines', icon: '☁️' }
  ];

  return (
    <>
      <PageJsonLd data={tarifsJsonLd} />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
              Tarifs et Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions adaptées à tous vos besoins, avec une tarification transparente et flexible
            </p>
          </div>

          {/* Navigation par onglets */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabsConfig.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200
                  ${activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenu des services */}
          <div className="space-y-12">
            {/* Section active */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services[activeTab as keyof typeof services].map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </motion.div>

            {/* Section d'information sur l'hébergement */}
            {activeTab === 'hebergement' && (
              <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Pourquoi choisir un hébergement professionnel ?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">L'hébergement web, c'est quoi ?</h3>
                    <p className="text-gray-600 mb-4">
                      L'hébergement web est l'espace de stockage qui permet à votre site d'être accessible 
                      sur Internet 24h/24 et 7j/7. C'est comme la "maison" de votre site web.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Performance et rapidité de chargement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Sécurité et protection des données</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Sauvegardes régulières</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Le nom de domaine, pourquoi ?</h3>
                    <p className="text-gray-600 mb-4">
                      Le nom de domaine est l'adresse de votre site (ex: www.votreentreprise.fr). 
                      C'est votre identité sur Internet.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Image professionnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Meilleur référencement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Adresses email professionnelles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Garanties et avantages */}
            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Nos Garanties</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-semibold mb-2">Satisfaction garantie</h3>
                  <p className="text-gray-600 text-sm">Accompagnement personnalisé tout au long du projet</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-semibold mb-2">Délais respectés</h3>
                  <p className="text-gray-600 text-sm">Livraison dans les temps convenus</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💯</div>
                  <h3 className="font-semibold mb-2">Qualité premium</h3>
                  <p className="text-gray-600 text-sm">Solutions optimisées et performantes</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl
                font-semibold hover:bg-primary-700 transform transition-all duration-200
                hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Discuter de votre projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
