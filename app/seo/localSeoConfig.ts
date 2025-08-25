// Configuration pour le SEO local
export const localBusinessInfo = {
  // Informations principales de l'entreprise
  name: 'BTOV Développement',
  legalName: 'BTOV Développement',
  founder: 'Virginie Chaffard',
  foundingDate: '2023',
  slogan: 'Transformons vos idées en réalité digitale',
  
  // Coordonnées
  email: 'btovdeveloppement@gmail.com',
  telephone: '', // À compléter si disponible
  
  // Adresse physique
  address: {
    streetAddress: '', // À compléter si disponible
    addressLocality: 'La Rochelle',
    addressRegion: 'Charente-Maritime',
    postalCode: '17000',
    addressCountry: 'FR',
  },
  
  // Coordonnées géographiques
  geo: {
    latitude: '46.160329',
    longitude: '-1.151139',
  },
  
  // Rayon de service (en mètres)
  serviceRadius: 100000, // 100km autour de La Rochelle
  
  // Villes principales desservies
  servicedCities: [
    {
      name: 'La Rochelle',
      postalCode: '17000',
      region: 'Charente-Maritime',
      url: '/services/la-rochelle',
    },
    {
      name: 'Niort',
      postalCode: '79000',
      region: 'Deux-Sèvres',
      url: '/services/niort',
    },
    {
      name: 'Rochefort',
      postalCode: '17300',
      region: 'Charente-Maritime',
      url: '/services/rochefort',
    },
    {
      name: 'Saintes',
      postalCode: '17100',
      region: 'Charente-Maritime',
      url: '/services/saintes',
    },
    {
      name: 'Royan',
      postalCode: '17200',
      region: 'Charente-Maritime',
      url: '/services/royan',
    },
    {
      name: 'Surgères',
      postalCode: '17700',
      region: 'Charente-Maritime',
      url: '/services/surgeres',
    }
  ],
  
  // Horaires d'ouverture
  openingHours: [
    {
      dayOfWeek: 'Monday',
      opens: '09:00',
      closes: '18:00',
    },
    {
      dayOfWeek: 'Tuesday',
      opens: '09:00',
      closes: '18:00',
    },
    {
      dayOfWeek: 'Wednesday',
      opens: '09:00',
      closes: '18:00',
    },
    {
      dayOfWeek: 'Thursday',
      opens: '09:00',
      closes: '18:00',
    },
    {
      dayOfWeek: 'Friday',
      opens: '09:00',
      closes: '18:00',
    }
  ],
  
  // Réseaux sociaux et profils en ligne
  socialProfiles: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/virginieduboscq/',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/Virginie17',
    }
  ],
  
  // Services principaux
  mainServices: [
    {
      name: 'Création de site web',
      description: 'Conception et développement de sites web professionnels et responsive',
      url: '/services/creation-site-web',
    },
    {
      name: 'Landing Page Express',
      description: 'Landing page professionnelle avec template prédéfini, livrée en 7 jours',
      url: '/landing-page-express',
      price: '399',
    },
    {
      name: 'Site Vitrine',
      description: 'Création de site vitrine professionnel sur mesure',
      url: '/services/site-vitrine',
      price: '1800',
    },
    {
      name: 'E-commerce',
      description: 'Développement de boutique en ligne personnalisée',
      url: '/services/e-commerce',
      price: '3800',
    },
    {
      name: 'Application Web',
      description: 'Création d\'application web sur mesure',
      url: '/services/application-web',
      price: '5500',
    },
    {
      name: 'SEO Local',
      description: 'Optimisation pour les moteurs de recherche ciblée sur La Rochelle et sa région',
      url: '/services/seo-local',
    }
  ],
  
  // Mots-clés locaux
  localKeywords: [
    'développeur web La Rochelle',
    'création site web La Rochelle',
    'agence web La Rochelle',
    'SEO La Rochelle',
    'développeur freelance Charente-Maritime',
    'création site internet 17000',
    'développeur web Niort',
    'création site web Rochefort',
    'agence digitale Charente-Maritime',
    'refonte site web La Rochelle',
    'développeur React La Rochelle',
    'expert Next.js Charente-Maritime',
    'création e-commerce La Rochelle',
    'landing page La Rochelle',
    'développeur web Royan',
    'création site web Saintes',
    'maintenance site web La Rochelle',
    'audit SEO La Rochelle',
    'référencement local La Rochelle',
    'développeur web 17',
  ],
  
  // Quartiers et zones spécifiques de La Rochelle
  localAreas: [
    {
      name: 'Centre-ville',
      postalCode: '17000',
    },
    {
      name: 'Les Minimes',
      postalCode: '17000',
    },
    {
      name: 'La Pallice',
      postalCode: '17000',
    },
    {
      name: 'Périgny',
      postalCode: '17180',
    },
    {
      name: 'Aytré',
      postalCode: '17440',
    },
    {
      name: 'Lagord',
      postalCode: '17140',
    }
  ],
  
  // Associations et partenaires locaux
  localPartners: [
    {
      name: 'CCI La Rochelle',
      url: 'https://www.larochelle.cci.fr/',
    },
    {
      name: 'La Rochelle Technopole',
      url: 'https://www.larochelle-technopole.fr/',
    }
  ]
};

// Générer le balisage Schema.org LocalBusiness enrichi
export const generateLocalBusinessSchema = (baseUrl: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': baseUrl,
    name: localBusinessInfo.name,
    legalName: localBusinessInfo.legalName,
    url: baseUrl,
    logo: `${baseUrl}/android-chrome-512x512.png`,
    image: [
      `${baseUrl}/images/photo.webp`,
      `${baseUrl}/android-chrome-512x512.png`
    ],
    description: 'Développement web professionnel à La Rochelle - Création de sites web, applications et e-commerce sur mesure. Expert en développement web et mobile.',
    slogan: localBusinessInfo.slogan,
    email: localBusinessInfo.email,
    telephone: localBusinessInfo.telephone,
    foundingDate: localBusinessInfo.foundingDate,
    founder: {
      '@type': 'Person',
      name: localBusinessInfo.founder
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: localBusinessInfo.address.streetAddress,
      addressLocality: localBusinessInfo.address.addressLocality,
      addressRegion: localBusinessInfo.address.addressRegion,
      postalCode: localBusinessInfo.address.postalCode,
      addressCountry: localBusinessInfo.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: localBusinessInfo.geo.latitude,
      longitude: localBusinessInfo.geo.longitude
    },
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: localBusinessInfo.geo.latitude,
          longitude: localBusinessInfo.geo.longitude
        },
        geoRadius: localBusinessInfo.serviceRadius
      },
      ...localBusinessInfo.servicedCities.map(city => ({
        '@type': 'City',
        name: city.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.name,
          addressRegion: city.region,
          postalCode: city.postalCode,
          addressCountry: 'FR'
        }
      }))
    ],
    openingHoursSpecification: localBusinessInfo.openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes
    })),
    sameAs: localBusinessInfo.socialProfiles.map(profile => profile.url),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de développement web',
      itemListElement: localBusinessInfo.mainServices.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          url: `${baseUrl}${service.url}`
        },
        ...(service.price && { price: service.price, priceCurrency: 'EUR' })
      }))
    },
    makesOffer: localBusinessInfo.mainServices.map(service => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        url: `${baseUrl}${service.url}`
      },
      ...(service.price && { price: service.price, priceCurrency: 'EUR' })
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: localBusinessInfo.geo.latitude,
        longitude: localBusinessInfo.geo.longitude
      },
      geoRadius: localBusinessInfo.serviceRadius
    },
    priceRange: '€€',
    keywords: localBusinessInfo.localKeywords.join(', ')
  };
};

// Générer le balisage FAQ pour les pages
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

// Générer le balisage pour les pages de villes
export const generateCityPageSchema = (
  baseUrl: string,
  cityName: string,
  cityRegion: string,
  cityPostalCode: string,
  serviceDescription: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/services/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
    name: `Services de développement web à ${cityName} | BTOV Développement`,
    description: `${serviceDescription} à ${cityName}, ${cityRegion}. Création de sites web, applications et e-commerce sur mesure.`,
    url: `${baseUrl}/services/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
    isPartOf: {
      '@type': 'WebSite',
      '@id': baseUrl,
      name: 'BTOV Développement'
    },
    about: {
      '@type': 'ProfessionalService',
      name: `BTOV Développement - Services web à ${cityName}`,
      description: `Services de développement web professionnel à ${cityName}. Création de sites web, applications et e-commerce sur mesure.`,
      areaServed: {
        '@type': 'City',
        name: cityName,
        address: {
          '@type': 'PostalAddress',
          addressLocality: cityName,
          addressRegion: cityRegion,
          postalCode: cityPostalCode,
          addressCountry: 'FR'
        }
      }
    }
  };
};
