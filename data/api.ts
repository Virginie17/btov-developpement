interface ServiceDetail {
  id: string;
  title: string;
  fullDescription: string;
  process: {
    step: string;
    description: string;
  }[];
  testimonials: {
    author: string;
    content: string;
    company: string;
  }[];
  pricing: {
    basic: string;
    premium: string;
    enterprise: string;
  };
}

interface ProjectDetail {
  id: string;
  title: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  clientTestimonial?: {
    author: string;
    position: string;
    content: string;
  };
  technicalDetails: {
    frontend: string[];
    backend: string[];
    deployment: string[];
  };
}

const serviceDetails: Record<string, ServiceDetail> = {
  'site-vitrine': {
    id: 'site-vitrine',
    title: 'Création de Site Vitrine Professionnel',
    fullDescription: 'Un site vitrine sur mesure qui met en valeur votre entreprise avec un design moderne et une expérience utilisateur optimale.',
    process: [
      {
        step: 'Analyse des besoins',
        description: 'Nous étudions votre secteur d\'activité et vos objectifs'
      },
      {
        step: 'Design personnalisé',
        description: 'Création d\'une maquette unique adaptée à votre image'
      },
      {
        step: 'Développement',
        description: 'Intégration avec les meilleures technologies web'
      }
    ],
    testimonials: [
      {
        author: 'Marie Laurent',
        content: 'Un travail remarquable qui a transformé notre présence en ligne',
        company: 'Boutique Flora'
      }
    ],
    pricing: {
      basic: '1500€',
      premium: '2500€',
      enterprise: 'Sur devis'
    }
  },
  'e-commerce': {
    id: 'e-commerce',
    title: 'Solution E-commerce Complète',
    fullDescription: 'Une boutique en ligne performante et sécurisée pour vendre vos produits 24/7.',
    process: [
      {
        step: 'Architecture',
        description: 'Conception d\'une structure adaptée à votre catalogue'
      },
      {
        step: 'Intégration',
        description: 'Mise en place des systèmes de paiement et de gestion'
      }
    ],
    testimonials: [
      {
        author: 'Pierre Dubois',
        content: 'Notre chiffre d\'affaires en ligne a doublé depuis le lancement',
        company: 'Mode Express'
      }
    ],
    pricing: {
      basic: '3000€',
      premium: '5000€',
      enterprise: 'Sur devis'
    }
  },
  'application-web': {
    id: 'application-web',
    title: 'Applications Web Sur Mesure',
    fullDescription: 'Des solutions web personnalisées pour répondre à vos besoins spécifiques.',
    process: [
      {
        step: 'Spécifications',
        description: 'Définition détaillée des fonctionnalités'
      },
      {
        step: 'Développement agile',
        description: 'Création itérative avec feedback continu'
      }
    ],
    testimonials: [
      {
        author: 'Sophie Martin',
        content: 'Une application qui a révolutionné notre processus interne',
        company: 'LogiTech Solutions'
      }
    ],
    pricing: {
      basic: '5000€',
      premium: '10000€',
      enterprise: 'Sur devis'
    }
  }
};

const projectDetails: Record<string, ProjectDetail> = {
  'projet-1': {
    id: 'projet-1',
    title: 'E-commerce Mode Luxe',
    fullDescription: 'Création d\'une boutique en ligne haut de gamme pour une marque de mode de luxe.',
    challenge: 'Développer une expérience d\'achat premium tout en maintenant des performances optimales.',
    solution: 'Utilisation de Next.js pour le SSG, avec une architecture headless connectée à Shopify.',
    results: [
      'Augmentation de 150% des ventes en ligne',
      'Temps de chargement réduit à moins de 2 secondes',
      'Taux de conversion amélioré de 25%'
    ],
    clientTestimonial: {
      author: 'Isabella Moretti',
      position: 'Directrice Marketing',
      content: 'Une transformation digitale qui a dépassé nos attentes.'
    },
    technicalDetails: {
      frontend: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Shopify API', 'Node.js'],
      deployment: ['Vercel', 'AWS CloudFront']
    }
  },
  'projet-2': {
    id: 'projet-2',
    title: 'Dashboard Logistique',
    fullDescription: 'Application de gestion logistique en temps réel pour une entreprise de transport.',
    challenge: 'Créer une interface intuitive pour gérer des milliers de livraisons quotidiennes.',
    solution: 'Dashboard temps réel avec React et Socket.io pour les mises à jour instantanées.',
    results: [
      'Réduction de 40% du temps de traitement des commandes',
      'Économie de 30% sur les coûts opérationnels',
      'Satisfaction client améliorée de 60%'
    ],
    technicalDetails: {
      frontend: ['React', 'Material-UI', 'D3.js'],
      backend: ['Node.js', 'MongoDB', 'Socket.io'],
      deployment: ['AWS ECS', 'Docker']
    }
  },
  'projet-3': {
    id: 'projet-3',
    title: 'Site Restaurant Gastronomique',
    fullDescription: 'Site vitrine moderne pour un restaurant étoilé avec réservation en ligne.',
    challenge: 'Créer une expérience digitale à la hauteur de l\'excellence culinaire du restaurant.',
    solution: 'Design épuré avec animations subtiles et intégration d\'un système de réservation.',
    results: [
      'Augmentation de 80% des réservations en ligne',
      'Réduction de 50% des appels pour les réservations',
      'Visibilité accrue sur les moteurs de recherche'
    ],
    clientTestimonial: {
      author: 'Jean-Michel Dupont',
      position: 'Chef étoilé',
      content: 'Le site reflète parfaitement l\'âme de notre restaurant.'
    },
    technicalDetails: {
      frontend: ['Next.js', 'Tailwind CSS', 'GSAP'],
      backend: ['Strapi CMS', 'PostgreSQL'],
      deployment: ['Vercel', 'Heroku']
    }
  }
};

export async function getServiceDetail(id: string): Promise<ServiceDetail | null> {
  // Simuler un délai d'API
  await new Promise(resolve => setTimeout(resolve, 100));
  return serviceDetails[id] || null;
}

export async function getProjectDetail(id: string): Promise<ProjectDetail | null> {
  // Simuler un délai d'API
  await new Promise(resolve => setTimeout(resolve, 100));
  return projectDetails[id] || null;
}
