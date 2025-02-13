import { Metadata } from 'next';

const baseUrl = 'https://btov-developpement.fr';

export const siteMetadata = {
  name: 'BTOV Développement',
  description: 'Développement web professionnel à La Rochelle - Création de sites web, applications et e-commerce sur mesure. Expert en développement web et mobile.',
  keywords: [
    'développeur web La Rochelle',
    'création site web La Rochelle',
    'développement web sur mesure',
    'création site e-commerce',
    'développeur freelance La Rochelle',
    'agence web La Rochelle',
    'création application web',
    'site vitrine professionnel',
    'développement application mobile',
    'expert Next.js React',
    'SEO La Rochelle',
    'maintenance site web',
    'audit site web',
    'refonte site internet'
  ],
  authors: [{ name: 'Virginie Chaffard' }],
  creator: 'Virginie Chaffard',
  publisher: 'BTOV Développement',
  metadataBase: new URL(baseUrl)
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': baseUrl,
  name: siteMetadata.name,
  description: siteMetadata.description,
  url: baseUrl,
  logo: `${baseUrl}/android-chrome-512x512.png`,
  image: [
    `${baseUrl}/images/photo.webp`,
    `${baseUrl}/android-chrome-512x512.png`
  ],
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
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '46.160329',
      longitude: '-1.151139'
    },
    geoRadius: '100000'
  },
  priceRange: '€€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    opens: '09:00',
    closes: '18:00'
  },
  sameAs: [
    'https://www.linkedin.com/in/virginieduboscq/',
    'https://github.com/Virginie17'
  ],
  offers: {
    '@type': 'AggregateOffer',
    offerCount: '6',
    lowPrice: '1800',
    highPrice: '11000',
    priceCurrency: 'EUR',
    offers: [
      {
        '@type': 'Offer',
        name: 'Site Vitrine',
        description: 'Création de site vitrine professionnel sur mesure',
        price: '1800',
        priceCurrency: 'EUR'
      },
      {
        '@type': 'Offer',
        name: 'E-commerce',
        description: 'Développement de boutique en ligne personnalisée',
        price: '3800',
        priceCurrency: 'EUR'
      },
      {
        '@type': 'Offer',
        name: 'Application Web',
        description: 'Création d\'application web sur mesure',
        price: '5500',
        priceCurrency: 'EUR'
      }
    ]
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de développement web',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Sites Web',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Site Vitrine',
              description: 'Création de site vitrine professionnel'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-commerce',
              description: 'Développement de boutique en ligne'
            }
          }
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'Applications',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Application Web',
              description: 'Création d\'application web sur mesure'
            }
          }
        ]
      }
    ]
  },
  reviews: {
    '@type': 'LocalBusiness',
    name: 'BTOV Développement',
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Marie D.'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1'
        },
        datePublished: '2024-01-15',
        reviewBody: 'Excellent travail, site web parfaitement réalisé et dans les délais.'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Pierre L.'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1'
        },
        datePublished: '2024-01-20',
        reviewBody: 'Service professionnel et résultat au-delà de nos attentes.'
      }
    ]
  }
};

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'BTOV Développement - Création de sites web et applications sur mesure à La Rochelle',
  description: siteMetadata.description,
  url: baseUrl,
  mainEntity: jsonLd
};

export const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Services de développement web - BTOV Développement La Rochelle',
  description: 'Découvrez nos services de création de sites web, e-commerce et applications. Solutions sur mesure pour votre entreprise à La Rochelle.',
  url: `${baseUrl}/services`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Création de Site Vitrine',
          description: 'Sites web professionnels et responsive, optimisés pour le référencement naturel.',
          provider: jsonLd
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Développement E-commerce',
          description: 'Solutions e-commerce personnalisées avec gestion des stocks et paiements sécurisés.',
          provider: jsonLd
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Applications Web Sur Mesure',
          description: 'Applications web personnalisées pour optimiser vos processus métier.',
          provider: jsonLd
        }
      }
    ]
  }
};

export const tarifsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tarifs des services web - BTOV Développement La Rochelle',
  description: 'Consultez nos tarifs pour la création de sites web, e-commerce et applications. Prix transparents et devis personnalisés.',
  url: `${baseUrl}/tarifs`,
  mainEntity: {
    '@type': 'PriceSpecification',
    priceCurrency: 'EUR',
    minPrice: '1800',
    maxPrice: '11000',
    description: 'Tarifs des services de développement web',
    validFrom: '2025-01-01',
    validThrough: '2025-12-31'
  }
};

// Métadonnées par défaut
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
    url: baseUrl,
    siteName: 'B to V Développement',
    title: 'Développeur Web freelance à La Rochelle | B to V Développement',
    description: 'Développeur web freelance à La Rochelle, spécialisé en création de sites sur-mesure, optimisation IA, SEO & Prompt Engineering',
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
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
    images: [`${baseUrl}/images/og-image.jpg`],
    creator: '@btovdev',
  },
  alternates: {
    canonical: baseUrl,
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
    'application/ld+json': JSON.stringify(homeJsonLd)
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
    'application/ld+json': JSON.stringify(homeJsonLd)
  },
};

export default metadata;