'use client';

import { Metadata } from 'next';
import { generateFAQSchema } from '@/app/seo/localSeoConfig';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';

// FAQ complète et structurée
const faqItems = [
  // Création de site web
  {
    question: "Quels sont vos tarifs pour la création d'un site web ?",
    answer: "Nos tarifs varient selon le type de projet : 399€ pour une Landing Page Express, à partir de 1800€ pour un site vitrine professionnel, à partir de 3800€ pour un site e-commerce, et à partir de 5500€ pour une application web sur mesure. Chaque projet fait l'objet d'un devis personnalisé selon vos besoins spécifiques."
  },
  {
    question: "Combien de temps faut-il pour créer un site web ?",
    answer: "Les délais de création varient selon la complexité du projet : 7 jours pour une Landing Page Express, 4 à 6 semaines pour un site vitrine, 8 à 12 semaines pour un site e-commerce, et 12 à 16 semaines pour une application web. Nous établissons un calendrier précis dès le début du projet."
  },
  {
    question: "Quelles technologies utilisez-vous pour développer les sites web ?",
    answer: "Nous utilisons des technologies modernes et performantes comme Next.js, React, et Tailwind CSS pour le frontend, et Node.js ou PHP pour le backend selon les besoins. Pour les e-commerces, nous travaillons avec des solutions comme WooCommerce, Shopify ou des développements sur mesure. Toutes nos réalisations sont optimisées pour le mobile et respectent les standards web actuels."
  },
  {
    question: "Le site sera-t-il adapté aux mobiles et tablettes ?",
    answer: "Oui, tous nos sites sont développés avec une approche 'mobile-first' et sont parfaitement responsives. Ils s'adaptent automatiquement à tous les appareils (smartphones, tablettes, ordinateurs) pour offrir une expérience utilisateur optimale quelle que soit la taille d'écran."
  },
  
  // SEO et référencement
  {
    question: "Comment optimisez-vous le référencement local pour les entreprises de La Rochelle ?",
    answer: "Notre stratégie de référencement local pour La Rochelle comprend l'optimisation de votre fiche Google My Business, la création de contenu localisé mentionnant La Rochelle et ses quartiers, l'intégration de balisage schema.org spécifique au local, l'obtention de backlinks depuis des annuaires et sites locaux, et la création de pages dédiées aux zones géographiques que vous servez."
  },
  {
    question: "Qu'est-ce que le balisage schema.org et pourquoi est-il important ?",
    answer: "Le balisage schema.org est un code structuré qui aide les moteurs de recherche à mieux comprendre le contenu de votre site. Pour le SEO local, nous enrichissons ce balisage avec des informations détaillées sur votre entreprise à La Rochelle : adresse complète, quartier, code postal, zones desservies, horaires d'ouverture, etc. Cela améliore votre visibilité dans les résultats de recherche locaux et peut vous permettre d'apparaître dans les rich snippets de Google."
  },
  {
    question: "Comment puis-je améliorer mon classement dans les recherches locales ?",
    answer: "Pour améliorer votre classement dans les recherches locales, nous recommandons : 1) Optimiser votre fiche Google My Business, 2) Créer du contenu mentionnant La Rochelle et les quartiers spécifiques, 3) Obtenir des avis clients positifs, 4) Acquérir des backlinks depuis des sites locaux, 5) Utiliser un balisage schema.org local, 6) Créer des pages dédiées aux zones que vous servez, et 7) Assurer la cohérence de vos NAP (Nom, Adresse, Téléphone) sur tous les sites où vous êtes mentionné."
  },
  {
    question: "Combien de temps faut-il pour voir des résultats en SEO local ?",
    answer: "Les premiers résultats en SEO local peuvent être visibles entre 1 et 3 mois, mais une stratégie complète prend généralement 6 à 12 mois pour produire des résultats significatifs et durables. Le SEO est un investissement à long terme qui nécessite des efforts constants mais qui offre un excellent retour sur investissement une fois établi."
  },
  
  // Technique et performance
  {
    question: "Comment améliorez-vous la vitesse de chargement des sites web ?",
    answer: "Pour réduire le temps de chargement à moins de 2 secondes, nous utilisons plusieurs techniques : optimisation des images (format WebP, compression), mise en cache avancée, minification des fichiers CSS et JavaScript, utilisation de CDN (Content Delivery Network), lazy loading des images, réduction des requêtes HTTP, et hébergement performant. Nous testons régulièrement la vitesse avec des outils comme Google PageSpeed Insights et GTmetrix."
  },
  {
    question: "Comment optimisez-vous l'expérience mobile de vos sites web ?",
    answer: "Notre optimisation mobile comprend : design responsive avec approche mobile-first, tests sur différents appareils et navigateurs, optimisation des images pour les connexions mobiles, éléments d'interface adaptés aux écrans tactiles (boutons plus grands, menus simplifiés), temps de chargement réduit, et respect des directives de Google pour le mobile-first indexing."
  },
  {
    question: "Qu'est-ce que l'API Google Indexing et comment l'utilisez-vous ?",
    answer: "L'API Google Indexing permet de demander à Google d'indexer ou de réindexer rapidement des pages spécifiques de votre site. Nous l'utilisons pour accélérer l'indexation des nouvelles pages ou du contenu mis à jour, ce qui est particulièrement utile pour les actualités, les promotions temporaires ou les pages saisonnières. Cela permet à votre contenu d'apparaître plus rapidement dans les résultats de recherche."
  },
  {
    question: "Comment assurez-vous la sécurité des sites web que vous développez ?",
    answer: "La sécurité de nos sites repose sur plusieurs mesures : certificat SSL/TLS pour toutes les pages (HTTPS), mises à jour régulières des CMS et plugins, protection contre les injections SQL et les attaques XSS, sauvegardes automatiques, pare-feu applicatif web (WAF), authentification à deux facteurs pour les zones d'administration, et audits de sécurité réguliers."
  },
  
  // Contenu et stratégie
  {
    question: "Pourquoi est-il important de créer des pages spécifiques pour les villes environnantes ?",
    answer: "La création de pages dédiées aux villes comme Niort, Rochefort ou Saintes permet de cibler précisément les recherches locales dans ces zones. Ces pages contiennent du contenu unique et pertinent pour chaque localité, incluant des informations spécifiques sur vos services dans cette ville, des témoignages de clients locaux, et des mots-clés géolocalisés. Cette stratégie améliore considérablement votre visibilité dans les recherches locales pour ces zones."
  },
  {
    question: "Comment structurez-vous une FAQ pour qu'elle apparaisse dans les featured snippets de Google ?",
    answer: "Pour optimiser une FAQ pour les featured snippets, nous utilisons le balisage schema.org de type FAQPage, structurons clairement les questions et réponses, formulons les questions comme les utilisateurs les recherchent, fournissons des réponses concises (entre 40 et 60 mots), organisons le contenu par thèmes, et utilisons un formatage HTML approprié avec des balises sémantiques. Nous surveillons également les performances et ajustons la stratégie en fonction des résultats."
  },
  {
    question: "Quels types d'études de cas sont les plus efficaces pour le SEO local ?",
    answer: "Les études de cas les plus efficaces pour le SEO local présentent des projets réalisés pour des clients de La Rochelle ou des environs, incluent des témoignages authentiques, des résultats mesurables, des photos du projet, et utilisent des mots-clés locaux pertinents. Elles racontent une histoire complète : le défi initial du client local, la solution apportée, et les résultats obtenus, créant ainsi un contenu unique et de valeur qui renforce votre crédibilité locale."
  },
  {
    question: "Comment obtenir des backlinks de qualité depuis des sites locaux ?",
    answer: "Pour obtenir des backlinks locaux de qualité, nous recommandons : s'inscrire dans les annuaires d'entreprises locales (CCI La Rochelle, Office de Tourisme), participer aux événements locaux et obtenir des mentions sur leurs sites, collaborer avec d'autres entreprises locales pour des échanges de liens, créer du contenu mentionnant des entreprises locales et les informer, sponsoriser des événements locaux, et rejoindre les associations professionnelles de La Rochelle qui répertorient leurs membres."
  },
  
  // Maintenance et évolution
  {
    question: "Proposez-vous des services de maintenance pour les sites web ?",
    answer: "Oui, nous proposons plusieurs formules de maintenance : maintenance technique (mises à jour de sécurité, sauvegardes, corrections de bugs), maintenance évolutive (ajout de fonctionnalités, améliorations), et maintenance éditoriale (mise à jour de contenu). Nos contrats de maintenance assurent la pérennité et la sécurité de votre site web, avec des interventions régulières et un support réactif en cas de problème."
  },
  {
    question: "Comment gérez-vous l'évolution d'un site web dans le temps ?",
    answer: "L'évolution d'un site web est gérée par étapes planifiées : analyse régulière des performances et du comportement utilisateur, identification des opportunités d'amélioration, planification des évolutions par ordre de priorité, développement et test des nouvelles fonctionnalités, et déploiement progressif pour minimiser l'impact sur l'expérience utilisateur. Nous privilégions une approche itérative pour améliorer continuellement votre site."
  }
];

// Regroupement des FAQ par catégorie
const faqCategories = [
  {
    title: "Création de site web",
    faqs: faqItems.slice(0, 4)
  },
  {
    title: "SEO et référencement local",
    faqs: faqItems.slice(4, 8)
  },
  {
    title: "Technique et performance",
    faqs: faqItems.slice(8, 12)
  },
  {
    title: "Contenu et stratégie",
    faqs: faqItems.slice(12, 16)
  },
  {
    title: "Maintenance et évolution",
    faqs: faqItems.slice(16, 18)
  }
];

export default function FAQPage() {
  // Générer le schema JSON-LD pour toutes les FAQ
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <main className="bg-white">
      {/* En-tête de la page */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur la création de sites web, le référencement local et nos services.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Accès rapide aux catégories :
            </h2>
            <div className="flex flex-wrap gap-3">
              {faqCategories.map((category, index) => (
                <a 
                  key={index} 
                  href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-gray-100 hover:bg-primary-100 text-gray-800 px-4 py-2 rounded-full transition-colors"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sections de FAQ par catégorie */}
      {faqCategories.map((category, index) => (
        <section 
          key={index} 
          id={category.title.toLowerCase().replace(/\s+/g, '-')}
          className={`py-12 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-primary-500 pl-4">
                {category.title}
              </h2>
              <div className="space-y-6">
                {category.faqs.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer">
                        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                        <span className="ml-6 flex-shrink-0 text-primary-500 group-open:rotate-180 transition-transform duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <CTA 
        title="Vous avez d'autres questions ?"
        description="N'hésitez pas à me contacter pour discuter de votre projet ou pour toute question supplémentaire."
        buttonText="Contactez-moi"
        buttonLink="/contact"
        secondaryButtonText="Demander un devis"
        secondaryButtonLink="/contact"
      />

      {/* Balisage schema.org pour FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}

// Métadonnées de la page pour le SEO
export const metadata: Metadata = {
  title: "FAQ - Questions Fréquentes sur la Création de Sites Web et le SEO Local | BTOV Développement",
  description: "Réponses à toutes vos questions sur la création de sites web, le référencement local à La Rochelle, l'optimisation technique et la stratégie de contenu.",
  keywords: [
    "FAQ création site web",
    "questions fréquentes développement web",
    "SEO local La Rochelle",
    "référencement Google",
    "optimisation site web",
    "vitesse de chargement",
    "expérience mobile",
    "balisage schema.org",
    "backlinks locaux",
    "maintenance site web"
  ],
  alternates: {
    canonical: "/faq",
  },
};
