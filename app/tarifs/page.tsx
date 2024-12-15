import { Check } from 'lucide-react';
import Link from 'next/link';

type ServiceProps = {
  title: string;
  price: string;
  timeframe?: string;
  features: string[];
};

const ServiceCard = ({ title, price, timeframe, features }: ServiceProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
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
);

export default function TarifsPage() {
  const services = {
    sitesVitrines: [
      {
        title: "Pack Essentiel",
        price: "à partir de 800 €",
        features: [
          "Site 1 à 3 pages",
          "Design personnalisé",
          "Compatible mobile et SEO basique",
          "Livraison en 2 à 4 semaines"
        ]
      },
      {
        title: "Pack Professionnel",
        price: "à partir de 1 500 €",
        features: [
          "Site 4 à 8 pages",
          "Intégration blog ou formulaire de contact",
          "Optimisation SEO avancée",
          "Maintenance offerte 1 mois après livraison"
        ]
      },
      {
        title: "Pack sur mesure",
        price: "devis personnalisé",
        features: [
          "Fonctionnalités spécifiques",
          "Réservation",
          "Espace client",
          "Solutions adaptées à vos besoins"
        ]
      }
    ],
    ecommerce: [
      {
        title: "Pack de base",
        price: "à partir de 1 800 €",
        features: [
          "Catalogue jusqu'à 20 produits",
          "Paiement en ligne sécurisé",
          "Optimisation mobile"
        ]
      },
      {
        title: "Pack avancé",
        price: "à partir de 2 500 €",
        features: [
          "Gestion des stocks et promotions",
          "SEO pour produits",
          "Intégration d'outils marketing"
        ]
      }
    ],
    maintenance: [
      {
        title: "Maintenance ponctuelle",
        price: "à partir de 70 €",
        timeframe: "par heure",
        features: [
          "Corrections de bugs",
          "Mises à jour"
        ]
      },
      {
        title: "Forfait mensuel",
        price: "à partir de 150 €",
        timeframe: "par mois",
        features: [
          "Mises à jour régulières",
          "Sauvegardes",
          "Suivi de performance"
        ]
      }
    ],
    applications: [
      {
        title: "Projet simple",
        price: "à partir de 2 000 €",
        features: [
          "Application avec fonctionnalités de base"
        ]
      },
      {
        title: "Projet avancé",
        price: "devis sur demande",
        features: [
          "Analyse approfondie",
          "Développement d'applications complexes",
          "Solutions de gestion RH, CRM"
        ]
      }
    ],
    audit: [
      {
        title: "Audit technique ou SEO",
        price: "150 €",
        features: [
          "Rapport détaillé",
          "Recommandations personnalisées"
        ]
      },
      {
        title: "Conseil personnalisé",
        price: "80 €",
        timeframe: "par heure",
        features: [
          "Réunion ou atelier",
          "Définition de votre projet"
        ]
      }
    ],
    options: [
      {
        title: "Rédaction de contenu",
        price: "à partir de 50 €",
        timeframe: "par page",
        features: [
          "Contenu optimisé SEO",
          "Ton adapté à votre marque"
        ]
      },
      {
        title: "Formation",
        price: "200 €",
        timeframe: "2 heures",
        features: [
          "Formation à la gestion de votre site",
          "Support de formation fourni"
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
