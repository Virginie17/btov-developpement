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
    lowPrice: '399',
    highPrice: '11000',
    priceCurrency: 'EUR',
    offers: [
      {
        '@type': 'Offer',
        name: 'Landing Page Express',
        description: 'Landing page professionnelle avec template prédéfini',
        price: '399',
        priceCurrency: 'EUR'
      },
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

export const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'À propos - BTOV Développement La Rochelle',
  description: 'Découvrez BTOV Développement, votre partenaire en développement web à La Rochelle. Expertise, professionnalisme et solutions sur mesure.',
  url: `${baseUrl}/about`,
  mainEntity: {
    '@type': 'Person',
    name: 'Virginie Chaffard',
    jobTitle: 'Développeur Web Freelance',
    description: 'Développeur web freelance à La Rochelle, spécialisée dans la création de sites web et d\'applications sur mesure.',
    image: `${baseUrl}/images/photo.webp`,
    sameAs: [
      'https://www.linkedin.com/in/virginieduboscq/',
      'https://github.com/Virginie17'
    ]
  }
};

export const cahierChargesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Cahier des Charges - BTOV Développement',
  description: 'Guide pour la rédaction de votre cahier des charges. Définissez clairement vos besoins pour votre projet web.',
  url: `${baseUrl}/cahier-des-charges`,
  mainEntity: {
    '@type': 'HowTo',
    name: 'Comment rédiger un cahier des charges efficace',
    description: 'Guide étape par étape pour rédiger un cahier des charges complet pour votre projet web',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Présentation du projet',
        text: 'Définissez les objectifs et le contexte de votre projet'
      },
      {
        '@type': 'HowToStep',
        name: 'Spécifications techniques',
        text: 'Détaillez les fonctionnalités et les exigences techniques'
      },
      {
        '@type': 'HowToStep',
        name: 'Planning et budget',
        text: 'Établissez un calendrier et un budget prévisionnel'
      }
    ]
  }
};

export const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact - BTOV Développement La Rochelle',
  description: 'Contactez BTOV Développement pour vos projets web à La Rochelle. Devis gratuit et réponse rapide.',
  url: `${baseUrl}/contact`,
  mainEntity: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'btovdeveloppement@gmail.com',
    areaServed: 'FR',
    availableLanguage: ['French', 'English']
  }
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
    minPrice: '399',
    maxPrice: '11000',
    description: 'Tarifs des services de développement web',
    validFrom: '2025-01-01',
    validThrough: '2025-12-31'
  }
};

export const mentionsLegalesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Mentions Légales - BTOV Développement',
  description: 'Mentions légales et conditions d\'utilisation du site BTOV Développement.',
  url: `${baseUrl}/mentions-legales`,
  mainEntity: {
    '@type': 'WebContent',
    name: 'Mentions Légales',
    text: 'Informations légales concernant BTOV Développement, entreprise de développement web à La Rochelle.',
    about: {
      '@type': 'Organization',
      name: 'BTOV Développement',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'La Rochelle',
        addressRegion: 'Nouvelle-Aquitaine',
        addressCountry: 'FR'
      },
      email: 'btovdeveloppement@gmail.com'
    }
  }
};

export const portfolioJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Portfolio - BTOV Développement',
  description: 'Découvrez mes réalisations en développement web : sites vitrines, e-commerce et applications web sur mesure.',
  url: `${baseUrl}/portfolio`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'WebSite',
        name: 'Sites Web',
        description: 'Sites vitrines et e-commerce développés sur mesure'
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Applications Web',
        description: 'Applications web personnalisées'
      }
    ]
  }
};

export const politiqueConfidentialiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Politique de Confidentialité - BTOV Développement',
  description: 'Politique de confidentialité et protection des données personnelles de BTOV Développement.',
  url: `${baseUrl}/politique-de-confidentialite`,
  mainEntity: {
    '@type': 'WebContent',
    name: 'Politique de Confidentialité',
    text: 'Informations sur la collecte et le traitement des données personnelles par BTOV Développement.'
  }
};

export const metadata: Metadata = {
  metadataBase: siteMetadata.metadataBase,
  title: {
    default: siteMetadata.name,
    template: `%s | ${siteMetadata.name}`
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: siteMetadata.authors,
  creator: siteMetadata.creator,
  publisher: siteMetadata.publisher,
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: baseUrl,
    siteName: siteMetadata.name,
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteMetadata.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.name,
    description: siteMetadata.description,
    images: [`${baseUrl}/images/og-image.jpg`]
  }
};

export const mentionsLegalesMetadata: Metadata = {
  ...metadata,
  title: 'Mentions Légales | BTOV Développement',
  description: 'Mentions légales et conditions d\'utilisation du site BTOV Développement.',
  openGraph: {
    ...metadata.openGraph,
    title: 'Mentions Légales | BTOV Développement',
    description: 'Mentions légales et conditions d\'utilisation du site BTOV Développement.'
  },
  other: {
    'application/ld+json': JSON.stringify(mentionsLegalesJsonLd)
  }
};

export const portfolioMetadata: Metadata = {
  ...metadata,
  title: 'Portfolio | BTOV Développement',
  description: 'Découvrez mes réalisations en développement web : sites vitrines, e-commerce et applications web sur mesure.',
  openGraph: {
    ...metadata.openGraph,
    title: 'Portfolio | BTOV Développement',
    description: 'Découvrez mes réalisations en développement web : sites vitrines, e-commerce et applications web sur mesure.'
  },
  other: {
    'application/ld+json': JSON.stringify(portfolioJsonLd)
  }
};

export const politiqueConfidentialiteMetadata: Metadata = {
  ...metadata,
  title: 'Politique de Confidentialité | BTOV Développement',
  description: 'Politique de confidentialité et protection des données personnelles de BTOV Développement.',
  openGraph: {
    ...metadata.openGraph,
    title: 'Politique de Confidentialité | BTOV Développement',
    description: 'Politique de confidentialité et protection des données personnelles de BTOV Développement.'
  },
  other: {
    'application/ld+json': JSON.stringify(politiqueConfidentialiteJsonLd)
  }
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
  other: {
    'application/ld+json': JSON.stringify(homeJsonLd)
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
  other: {
    'application/ld+json': JSON.stringify(servicesJsonLd)
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

export const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Mentions Légales', href: '/mentions-legales' },
  { name: 'Politique de Confidentialité', href: '/politique-de-confidentialite' },
];

export default metadata;