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
        title: "Pack Essentiel - Site Vitrine",
        price: "à partir de 1 500 €",
        features: [
          "Site vitrine de 1 à 3 pages (Accueil, À propos, Contact)",
          "Design moderne et responsive (adapté mobile, tablette, desktop)",
          "Formulaire de contact sécurisé",
          "Intégration de vos textes et images",
          "Optimisation SEO de base (meta-descriptions, balises)",
          "Hébergement premium première année inclus",
          "Nom de domaine première année inclus",
          "Formation à l'administration du site",
          "Livraison en 2 à 4 semaines"
        ]
      },
      {
        title: "Pack Professionnel - Site Vitrine",
        price: "à partir de 2 300 €",
        features: [
          "Site de 4 à 8 pages personnalisées",
          "Design premium avec animations modernes",
          "Blog ou section actualités intégré",
          "Formulaires avancés (devis, réservation)",
          "Galerie photos/portfolio dynamique",
          "Optimisation SEO complète",
          "Intégration réseaux sociaux",
          "Statistiques de visites (Google Analytics)",
          "Hébergement premium première année inclus",
          "Nom de domaine première année inclus",
          "Maintenance 3 mois offerte",
          "Formation complète à l'administration",
          "Livraison en 4 à 6 semaines"
        ]
      },
      {
        title: "Pack Sur Mesure - Site Vitrine",
        price: "devis personnalisé",
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
        price: "à partir de 3 000 €",
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
        price: "à partir de 4 500 €",
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
        price: "90 €",
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
        price: "à partir de 180 €",
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
        price: "1 800 €",
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
