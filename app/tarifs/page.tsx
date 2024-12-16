'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import DevisModal from '@/components/DevisModal';

type ServiceProps = {
  title: string;
  price: string;
  timeframe?: string;
  features: string[];
};

const ServiceCard = ({ title, price, timeframe, features }: ServiceProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = parseInt(price.replace(/[^0-9]/g, '')) || 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-4">
          <p className="text-2xl font-bold text-blue-600">{price}</p>
          {timeframe && <p className="text-gray-600 text-sm">{timeframe}</p>}
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
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
    </div>
  );
};

export default function TarifsPage() {
  const services = {
    sitesVitrines: [
      {
        title: "Pack Essentiel",
        price: "à partir de 1 200 €",
        features: [
          "Site vitrine 1 à 3 pages",
          "Design moderne et personnalisé",
          "Responsive design (mobile, tablette, desktop)",
          "Optimisation SEO de base",
          "Hébergement première année inclus",
          "Livraison en 2 à 4 semaines"
        ]
      },
      {
        title: "Pack Professionnel",
        price: "à partir de 2 000 €",
        features: [
          "Site 4 à 8 pages",
          "Design premium personnalisé",
          "Blog ou actualités intégré",
          "Formulaires avancés",
          "Optimisation SEO complète",
          "Hébergement première année inclus",
          "Maintenance 3 mois offerte"
        ]
      },
      {
        title: "Pack sur mesure",
        price: "devis personnalisé",
        features: [
          "Nombre de pages illimité",
          "Fonctionnalités spécifiques",
          "Système de réservation",
          "Espace client/membre",
          "Intégrations sur mesure",
          "Solutions personnalisées"
        ]
      }
    ],
    ecommerce: [
      {
        title: "Pack E-commerce Essentiel",
        price: "à partir de 3 000 €",
        features: [
          "Jusqu'à 50 produits",
          "Design e-commerce optimisé",
          "Paiement sécurisé (Stripe/PayPal)",
          "Gestion des stocks simple",
          "Responsive design",
          "Formation à l'utilisation incluse",
          "Hébergement sécurisé 1ère année"
        ]
      },
      {
        title: "Pack E-commerce Avancé",
        price: "à partir de 4 500 €",
        features: [
          "Catalogue produits illimité",
          "Gestion avancée des stocks",
          "Multi-devises et taxes",
          "Système de promotions",
          "SEO e-commerce optimisé",
          "Intégration outils marketing",
          "Analytics et rapports détaillés",
          "Formation complète incluse"
        ]
      }
    ],
    maintenance: [
      {
        title: "Maintenance ponctuelle",
        price: "90 €",
        timeframe: "par heure",
        features: [
          "Corrections de bugs",
          "Mises à jour de sécurité",
          "Modifications mineures",
          "Support par email",
          "Temps de réponse sous 48h"
        ]
      },
      {
        title: "Forfait maintenance mensuel",
        price: "à partir de 180 €",
        timeframe: "par mois",
        features: [
          "2h de modifications incluses",
          "Mises à jour régulières",
          "Sauvegardes hebdomadaires",
          "Surveillance sécurité 24/7",
          "Support prioritaire",
          "Rapport mensuel de performance"
        ]
      },
      {
        title: "Forfait maintenance annuel",
        price: "1 800 €",
        timeframe: "par an",
        features: [
          "24h de modifications incluses",
          "Mises à jour illimitées",
          "Sauvegardes quotidiennes",
          "Surveillance sécurité 24/7",
          "Support prioritaire",
          "Hébergement premium inclus",
          "Rapports trimestriels"
        ]
      }
    ],
    applications: [
      {
        title: "Application Web Simple",
        price: "à partir de 4 000 €",
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
        price: "à partir de 8 000 €",
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
        price: "à partir de 350 €",
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
        price: "100 €",
        timeframe: "par heure",
        features: [
          "Réunions stratégiques",
          "Définition des besoins",
          "Recommandations techniques",
          "Accompagnement projet",
          "Support décisionnel"
        ]
      }
    ],
    options: [
      {
        title: "Rédaction Web SEO",
        price: "à partir de 60 €",
        timeframe: "par page",
        features: [
          "Recherche de mots-clés",
          "Rédaction optimisée SEO",
          "Balises meta incluses",
          "Ton adapté à votre marque",
          "2 révisions incluses"
        ]
      },
      {
        title: "Formation",
        price: "250 €",
        timeframe: "2 heures",
        features: [
          "Formation personnalisée",
          "Gestion du back-office",
          "Bonnes pratiques SEO",
          "Support de formation fourni",
          "Suivi post-formation (2 semaines)"
        ]
      },
      {
        title: "Hébergement Premium",
        price: "30 €",
        timeframe: "par mois",
        features: [
          "Hébergement haute performance",
          "Certificat SSL inclus",
          "Sauvegardes quotidiennes",
          "Protection DDoS",
          "Support technique 24/7"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Grille tarifaire</h1>
          <p className="text-xl text-gray-600">Des solutions adaptées à tous vos besoins</p>
        </div>

        <div className="space-y-16">
          {/* Sites Vitrines */}
          <section>
            <h2 className="text-2xl font-bold mb-8">1. Création de sites vitrines</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.sitesVitrines.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* E-commerce */}
          <section>
            <h2 className="text-2xl font-bold mb-8">2. Création de sites e-commerce</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.ecommerce.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* Maintenance */}
          <section>
            <h2 className="text-2xl font-bold mb-8">3. Maintenance et optimisation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.maintenance.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* Applications */}
          <section>
            <h2 className="text-2xl font-bold mb-8">4. Applications web sur mesure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.applications.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* Audit */}
          <section>
            <h2 className="text-2xl font-bold mb-8">5. Audit et conseils</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.audit.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* Options */}
          <section>
            <h2 className="text-2xl font-bold mb-8">💡 Options supplémentaires</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.options.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">📩 Besoin d'un devis ?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Chaque projet étant unique, contactez-moi pour discuter de vos besoins.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg 
              hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Demander un devis
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
