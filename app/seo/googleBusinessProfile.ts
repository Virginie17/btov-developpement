// Configuration pour Google Business Profile (anciennement Google My Business)
import { localBusinessInfo } from './localSeoConfig';

export const googleBusinessProfileConfig = {
  // Informations principales
  name: localBusinessInfo.name,
  description: 'Développeur web freelance à La Rochelle, spécialisé dans la création de sites web professionnels, e-commerce et applications sur mesure. Expertise en référencement local et optimisation SEO.',
  
  // Catégories d'entreprise (principales et secondaires)
  primaryCategory: 'Développeur web',
  secondaryCategories: [
    'Agence web',
    'Consultant en référencement',
    'Création de site internet',
    'Consultant informatique'
  ],
  
  // Attributs spécifiques
  attributes: [
    'Devis gratuits',
    'Services sur mesure',
    'Entreprise locale',
    'Rendez-vous en personne',
    'Télétravail possible'
  ],
  
  // Services à mettre en avant
  services: [
    {
      category: 'Création de sites web',
      services: [
        {
          name: 'Landing Page Express',
          description: 'Landing page professionnelle livrée en 7 jours',
          price: 'À partir de 399€'
        },
        {
          name: 'Site Vitrine',
          description: 'Site web professionnel sur mesure',
          price: 'À partir de 1800€'
        },
        {
          name: 'Site E-commerce',
          description: 'Boutique en ligne personnalisée',
          price: 'À partir de 3800€'
        },
        {
          name: 'Application Web',
          description: 'Application web sur mesure',
          price: 'À partir de 5500€'
        }
      ]
    },
    {
      category: 'Référencement',
      services: [
        {
          name: 'SEO Local',
          description: 'Optimisation pour les recherches locales',
          price: 'Sur devis'
        },
        {
          name: 'Audit SEO',
          description: 'Analyse complète de votre site web',
          price: 'À partir de 450€'
        }
      ]
    },
    {
      category: 'Maintenance',
      services: [
        {
          name: 'Maintenance technique',
          description: 'Mises à jour, sécurité, sauvegardes',
          price: 'À partir de 49€/mois'
        },
        {
          name: 'Maintenance évolutive',
          description: 'Ajout de fonctionnalités et améliorations',
          price: 'Sur devis'
        }
      ]
    }
  ],
  
  // Photos à ajouter (catégories recommandées par Google)
  photoCategories: [
    {
      type: 'Logo',
      description: 'Logo professionnel de BTOV Développement',
      recommendations: 'Format carré, fond transparent, haute résolution'
    },
    {
      type: 'Couverture',
      description: 'Image de couverture montrant un environnement de développement web',
      recommendations: 'Format 16:9, minimum 1080x608 pixels'
    },
    {
      type: 'Extérieur',
      description: 'Photo du lieu de travail ou du quartier à La Rochelle',
      recommendations: 'Prendre en journée avec bonne luminosité'
    },
    {
      type: 'Équipe',
      description: 'Photo professionnelle de Virginie Chaffard',
      recommendations: 'Tenue professionnelle, arrière-plan neutre'
    },
    {
      type: 'Travail',
      description: 'Photos montrant le processus de développement web',
      recommendations: 'Bureau organisé, écrans montrant du code ou des designs'
    },
    {
      type: 'Projets',
      description: 'Captures d\'écran de sites web réalisés',
      recommendations: 'Haute résolution, montrant différents types de projets'
    }
  ],
  
  // Stratégie d'avis clients
  reviewStrategy: {
    targetRating: 4.8,
    minimumReviewCount: 10,
    responseTimeGoal: '24 heures',
    reviewRequestTemplate: 'Merci de faire confiance à BTOV Développement pour votre projet web. Si vous êtes satisfait(e) de notre collaboration, pourriez-vous prendre un moment pour partager votre expérience sur Google ? Votre avis m\'aiderait beaucoup : [LIEN_AVIS]',
    negativeReviewHandling: 'Répondre rapidement, avec empathie, et proposer une solution concrète'
  },
  
  // Questions et réponses à préparer
  faqItems: [
    {
      question: 'Quels types de sites web créez-vous ?',
      answer: 'Je crée tous types de sites web : landing pages, sites vitrines, e-commerce, applications web, blogs et portails. Chaque projet est personnalisé selon vos besoins spécifiques et optimisé pour le référencement local à La Rochelle.'
    },
    {
      question: 'Combien coûte un site web à La Rochelle ?',
      answer: 'Les tarifs varient selon le projet : à partir de 399€ pour une Landing Page Express, 1800€ pour un site vitrine, 3800€ pour un e-commerce, et 5500€ pour une application web. Chaque devis est personnalisé selon vos besoins.'
    },
    {
      question: 'Quel est le délai pour créer un site web ?',
      answer: 'Les délais varient selon la complexité : 7 jours pour une Landing Page Express, 4-6 semaines pour un site vitrine, 8-12 semaines pour un e-commerce, et 12-16 semaines pour une application web.'
    },
    {
      question: 'Proposez-vous des services de référencement local ?',
      answer: 'Oui, je propose des services de référencement local spécialement conçus pour les entreprises de La Rochelle et ses environs, incluant l\'optimisation de votre fiche Google My Business et des stratégies SEO locales.'
    },
    {
      question: 'Où êtes-vous situé à La Rochelle ?',
      answer: 'Je suis basé à La Rochelle et je me déplace dans toute la ville et ses environs pour rencontrer mes clients. Je peux également travailler à distance selon vos préférences.'
    }
  ],
  
  // Mises à jour régulières
  updateSchedule: {
    photos: 'Mensuel - Ajouter de nouvelles réalisations',
    services: 'Trimestriel - Mettre à jour les offres et tarifs',
    posts: 'Hebdomadaire - Partager des actualités, conseils ou promotions',
    informations: 'Immédiat - Pour tout changement d\'horaire, contact ou service'
  },
  
  // Optimisation des posts
  postTypes: [
    {
      type: 'Actualités',
      frequency: 'Bimensuel',
      examples: [
        'Lancement d\'un nouveau site pour un client local',
        'Participation à un événement tech à La Rochelle',
        'Nouvelles fonctionnalités ou services proposés'
      ]
    },
    {
      type: 'Conseils',
      frequency: 'Hebdomadaire',
      examples: [
        'Astuces pour améliorer la visibilité locale de votre site',
        'Comment choisir les bonnes images pour votre site web',
        'Pourquoi la vitesse de chargement est cruciale pour votre site'
      ]
    },
    {
      type: 'Offres spéciales',
      frequency: 'Mensuel',
      examples: [
        'Promotion saisonnière sur les Landing Pages Express',
        'Audit SEO gratuit pour les nouveaux clients',
        'Pack maintenance à tarif réduit pour les recommandations'
      ]
    },
    {
      type: 'Études de cas',
      frequency: 'Mensuel',
      examples: [
        'Comment j\'ai aidé un restaurant de La Rochelle à augmenter ses réservations en ligne',
        'Refonte du site d\'un artisan local : avant/après et résultats',
        'Stratégie SEO locale pour un commerce de proximité à La Rochelle'
      ]
    }
  ]
};

// Guide d'optimisation de la fiche Google Business Profile
export const googleBusinessProfileOptimizationGuide = {
  // Étapes d'optimisation initiale
  initialSetup: [
    'Créer ou réclamer votre fiche Google Business Profile',
    'Vérifier votre entreprise (par courrier postal, téléphone ou email)',
    'Compléter toutes les informations de base (nom, adresse, téléphone, site web)',
    'Ajouter des horaires d\'ouverture précis',
    'Sélectionner la catégorie principale et les catégories secondaires',
    'Rédiger une description complète avec mots-clés locaux',
    'Ajouter des attributs pertinents pour votre activité'
  ],
  
  // Optimisation visuelle
  visualOptimization: [
    'Télécharger un logo professionnel de haute qualité',
    'Ajouter une photo de couverture attrayante',
    'Publier au moins 10 photos de qualité dans différentes catégories',
    'Ajouter des vidéos courtes présentant vos services ou projets',
    'Mettre à jour régulièrement les visuels (au moins une nouvelle photo par mois)'
  ],
  
  // Gestion des avis
  reviewManagement: [
    'Mettre en place un système pour demander des avis aux clients satisfaits',
    'Répondre à TOUS les avis, positifs comme négatifs, dans les 24-48h',
    'Personnaliser chaque réponse en mentionnant des détails spécifiques',
    'Pour les avis négatifs, proposer une solution et inviter à poursuivre la conversation en privé',
    'Remercier sincèrement pour les avis positifs et mentionner La Rochelle quand c\'est pertinent'
  ],
  
  // Création de contenu
  contentCreation: [
    'Publier régulièrement des posts (idéalement 1 par semaine)',
    'Varier les types de contenu (actualités, conseils, offres, études de cas)',
    'Inclure des appels à l\'action clairs dans chaque post',
    'Utiliser des visuels de qualité pour chaque publication',
    'Mentionner La Rochelle et les quartiers spécifiques quand c\'est pertinent'
  ],
  
  // Questions et réponses
  qaManagement: [
    'Préparer et publier des questions/réponses fréquentes',
    'Surveiller et répondre rapidement aux nouvelles questions',
    'Corriger ou signaler les réponses inexactes fournies par d\'autres utilisateurs',
    'Inclure des mots-clés locaux dans les réponses quand c\'est naturel'
  ],
  
  // Suivi et amélioration continue
  ongoingOptimization: [
    'Consulter régulièrement les statistiques de votre fiche (vues, actions, recherches)',
    'Analyser quels mots-clés génèrent le plus de visites',
    'Comparer vos performances avec celles des concurrents locaux',
    'Tester différents types de posts pour voir ce qui génère le plus d\'engagement',
    'Mettre à jour immédiatement tout changement d\'information (horaires, services, etc.)'
  ]
};

// Exemples de posts optimisés pour Google Business Profile
export const sampleGooglePosts = [
  {
    type: 'Actualité',
    title: 'Nouveau site web pour Le Bistrot Parisien à La Rochelle',
    content: 'Fier d\'avoir livré un nouveau site web responsive pour Le Bistrot Parisien, restaurant situé au cœur du Vieux Port de La Rochelle. Réservations en ligne, menu interactif et design élégant pour une expérience utilisateur optimale. #LaRochelle #DéveloppementWeb #RestaurantLocal',
    cta: 'Voir le projet',
    image: 'bistrot-parisien-site.jpg'
  },
  {
    type: 'Conseil',
    title: 'Pourquoi votre entreprise à La Rochelle a besoin d\'un site optimisé pour le mobile',
    content: '78% des recherches locales sur mobile aboutissent à un achat en magasin dans les 24h. Votre site est-il prêt à capter ces clients potentiels à La Rochelle ? Découvrez comment un site responsive peut augmenter votre visibilité locale et vos conversions. #SEOLocal #LaRochelle #MobileFirst',
    cta: 'Demander un audit gratuit',
    image: 'mobile-optimization.jpg'
  },
  {
    type: 'Offre',
    title: 'Offre spéciale été pour les commerces de La Rochelle',
    content: 'Profitez de la saison touristique ! 15% de réduction sur toutes nos Landing Pages Express pour les commerces et restaurants de La Rochelle. Délai de livraison express de 7 jours pour booster votre présence en ligne avant l\'afflux de visiteurs. Offre valable jusqu\'au 15 juin. #LaRochelle #Promotion #TourismeLaRochelle',
    cta: 'Profiter de l\'offre',
    image: 'summer-offer.jpg'
  },
  {
    type: 'Étude de cas',
    title: 'Comment j\'ai aidé un artisan de La Rochelle à tripler ses demandes de devis',
    content: 'Découvrez comment la refonte du site web et l\'optimisation SEO locale ont permis à la Menuiserie Dubois à La Rochelle de passer de 5 à 15 demandes de devis par semaine. Stratégie centrée sur la mise en valeur de leurs réalisations et l\'optimisation pour les recherches locales. #CasClient #SEOLocal #LaRochelle #Artisanat',
    cta: 'Lire l\'étude de cas complète',
    image: 'case-study-menuiserie.jpg'
  }
];

// Fonction pour générer un lien d'avis Google
export const generateGoogleReviewLink = (placeId: string) => {
  return `https://search.google.com/local/writereview?placeid=${placeId}`;
};

// Fonction pour générer un QR code vers la fiche Google
export const generateGoogleBusinessQRCode = (placeId: string) => {
  const googleMapsUrl = `https://maps.google.com/?cid=${placeId}`;
  // Intégrer avec une API de génération de QR code
  return googleMapsUrl;
};
