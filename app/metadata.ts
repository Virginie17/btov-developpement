import { Metadata } from 'next';

// Données structurées communes
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'B to V Développement',
  url: 'https://www.btov-dev.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'La Rochelle',
    addressRegion: 'Nouvelle-Aquitaine',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '46.160329',
    longitude: '-1.151139'
  },
  priceRange: '€€',
  telephone: '+33600000000',
  email: 'contact@btov-dev.com',
  image: 'https://www.btov-dev.com/images/og-image.jpg',
  sameAs: [
    'https://www.linkedin.com/company/btov-developpement',
    'https://github.com/btov-dev'
  ]
};

// Page d'accueil
export const homeJsonLd = {
  ...jsonLd,
  description: 'Développeur web freelance à La Rochelle, spécialisé en création de sites sur-mesure, optimisation IA, SEO & Prompt Engineering',
  '@type': 'WebSite',
  potentialAction: {
    '@type': 'SearchAction',
    'target': 'https://www.btov-dev.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

// Page Services
export const servicesJsonLd = {
  ...jsonLd,
  '@type': 'Service',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de développement web',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Création de sites web',
        description: 'Sites vitrines, e-commerce et applications web sur mesure'
      },
      {
        '@type': 'Offer',
        name: 'Refonte de site',
        description: 'Modernisation et optimisation de sites existants'
      },
      {
        '@type': 'Offer',
        name: 'SEO & Performance',
        description: 'Optimisation du référencement et des performances'
      },
      {
        '@type': 'Offer',
        name: 'Prompt Engineering',
        description: 'Intégration d\'IA et automatisation des processus'
      }
    ]
  }
};

// Page À propos
export const aboutJsonLd = {
  ...jsonLd,
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Person',
    name: 'Virginie',
    jobTitle: 'Développeuse Web Freelance',
    description: 'Passionnée par le développement web et l\'IA'
  }
};

// Page Contact
export const contactJsonLd = {
  ...jsonLd,
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@btov-dev.com',
    telephone: '+33600000000'
  }
};

// Page Tarifs
export const tarifsJsonLd = {
  ...jsonLd,
  '@type': 'PriceSpecification',
  priceCurrency: 'EUR',
  offers: [
    {
      '@type': 'Offer',
      name: 'Site Vitrine',
      price: '1500',
      priceCurrency: 'EUR'
    },
    {
      '@type': 'Offer',
      name: 'Site E-commerce',
      price: '3000',
      priceCurrency: 'EUR'
    },
    {
      '@type': 'Offer',
      name: 'Application Web',
      price: '5000',
      priceCurrency: 'EUR'
    }
  ]
};

// Page Portfolio
export const portfolioJsonLd = {
  ...jsonLd,
  '@type': 'CollectionPage',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'WebSite',
        name: 'Projet 1',
        description: 'Description du projet 1'
      },
      {
        '@type': 'WebSite',
        name: 'Projet 2',
        description: 'Description du projet 2'
      }
    ]
  }
};

// Page Cahier des charges
export const cahierChargesJsonLd = {
  ...jsonLd,
  '@type': 'WebPage',
  mainEntity: {
    '@type': 'WebForm',
    name: 'Formulaire de cahier des charges',
    description: 'Formulaire pour détailler votre projet web'
  }
};

// Page Offre de lancement
export const offreLancementJsonLd = {
  ...jsonLd,
  '@type': 'Offer',
  name: 'Offre de lancement',
  description: 'Profitez de notre offre spéciale de lancement',
  validFrom: '2024-01-01',
  validThrough: '2024-01-31',
  price: '1000',
  priceCurrency: 'EUR'
};

// Page Mentions légales
export const mentionsLegalesJsonLd = {
  ...jsonLd,
  '@type': 'WebPage',
  name: 'Mentions légales',
  description: 'Mentions légales de B to V Développement'
};

// Page Politique de confidentialité
export const politiqueConfidentialiteJsonLd = {
  ...jsonLd,
  '@type': 'WebPage',
  name: 'Politique de confidentialité',
  description: 'Politique de confidentialité de B to V Développement'
};

// Métadonnées par défaut
export const metadata: Metadata = {
  metadataBase: new URL('https://www.btov-dev.com'),
  title: {
    default: 'Développeur Web freelance à La Rochelle | B to V Développement La Rochelle',
    template: '%s | B to V Développement',
  },
  description: 'Développeur web freelance à La Rochelle, spécialisé en création de sites sur-mesure, optimisation IA, SEO & Prompt Engineering. 10+ ans d\'expérience pour booster votre présence en ligne.',
  keywords: ['développeur web freelance La Rochelle', 'création site web La Rochelle', 'SEO La Rochelle', 'Prompt Engineering', 'développement web'],
  authors: [{ name: 'Virginie' }],
  creator: 'B to V Développement',
  publisher: 'B to V Développement',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.btov-dev.com',
    siteName: 'B to V Développement',
    title: 'Développeur Web freelance à La Rochelle | B to V Développement',
    description: 'Développeur web freelance à La Rochelle, spécialisé en création de sites sur-mesure, optimisation IA, SEO & Prompt Engineering',
    images: [
      {
        url: 'https://www.btov-dev.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'B to V Développement - Développeur Web freelance à La Rochelle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développeur Web freelance à La Rochelle | B to V Développement',
    description: 'Développeur web freelance à La Rochelle, spécialisé en création de sites sur-mesure, optimisation IA, SEO & Prompt Engineering',
    images: ['https://www.btov-dev.com/images/og-image.jpg'],
    creator: '@btovdev',
  },
  alternates: {
    canonical: 'https://www.btov-dev.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'technology',
};

export const homeMetadata: Metadata = {
  ...metadata,
  title: 'Développeur Web freelance à La Rochelle | B to V Développement',
  description: 'Besoin d\'un développeur web freelance à La Rochelle ? B to V Développement réalise des sites modernes, performants et adaptés à vos besoins.',
  openGraph: {
    ...metadata.openGraph,
    title: 'Développeur Web freelance à La Rochelle | B to V Développement',
    description: 'Développeur web freelance à La Rochelle, expert en création de sites web sur-mesure et optimisation SEO.',
  },
};

export const servicesMetadata: Metadata = {
  ...metadata,
  title: 'Services de Développement Web & SEO | B to V Développement La Rochelle',
  description: 'Découvrez nos services de développement web, optimisation SEO, et création de sites e-commerce à La Rochelle. Solutions personnalisées pour votre entreprise.',
  openGraph: {
    ...metadata.openGraph,
    title: 'Services de Développement Web & SEO | B to V Développement La Rochelle',
    description: 'Services de développement web et optimisation SEO sur-mesure à La Rochelle.',
  },
};

export const contactMetadata: Metadata = {
  ...metadata,
  title: 'Contactez un développeur Web freelance à La Rochelle | B to V Développement',
  description: 'Contactez B to V Développement, développeur web freelance à La Rochelle. Discutons de votre projet de site web dès aujourd\'hui !',
  openGraph: {
    ...metadata.openGraph,
    title: 'Contactez un développeur Web freelance à La Rochelle | B to V Développement',
    description: 'Contactez votre développeur web freelance à La Rochelle pour un devis personnalisé.',
  },
  other: {
    'application/ld+json': JSON.stringify(contactJsonLd)
  },
};

export const aboutMetadata: Metadata = {
  ...metadata,
  title: 'À Propos de B to V Développement | Développeur Web freelance La Rochelle',
  description: 'En savoir plus sur B to V Développement, votre développeur web freelance à La Rochelle. Expertise en création de sites web modernes et performants.',
  openGraph: {
    ...metadata.openGraph,
    title: 'À Propos de B to V Développement | Développeur Web freelance La Rochelle',
    description: 'Découvrez B to V Développement, votre développeur web freelance à La Rochelle.',
  },
  other: {
    'application/ld+json': JSON.stringify(aboutJsonLd)
  },
};

export default metadata;