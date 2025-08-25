// Générateur de balisage Schema.org enrichi pour le SEO local
import { localBusinessInfo } from './localSeoConfig';

// Types de schémas disponibles
export enum SchemaType {
  LocalBusiness = 'LocalBusiness',
  ProfessionalService = 'ProfessionalService',
  WebSite = 'WebSite',
  WebPage = 'WebPage',
  FAQPage = 'FAQPage',
  BreadcrumbList = 'BreadcrumbList',
  Article = 'Article',
  BlogPosting = 'BlogPosting',
  Product = 'Product',
  Service = 'Service',
  Event = 'Event',
  Review = 'Review',
  AggregateRating = 'AggregateRating',
  Person = 'Person',
  Organization = 'Organization',
  ImageObject = 'ImageObject',
  VideoObject = 'VideoObject',
  HowTo = 'HowTo',
}

// Interface pour les options de base de tous les schémas
interface BaseSchemaOptions {
  id?: string;
  name: string;
  description?: string;
  url?: string;
  image?: string | string[];
}

// Interface pour les options de LocalBusiness
interface LocalBusinessOptions extends BaseSchemaOptions {
  telephone?: string;
  email?: string;
  priceRange?: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: string;
    longitude: string;
  };
  openingHours?: Array<{
    dayOfWeek: string;
    opens: string;
    closes: string;
  }>;
  areaServed?: Array<{
    type: 'City' | 'GeoCircle' | 'AdministrativeArea';
    name?: string;
    geoMidpoint?: {
      latitude: string;
      longitude: string;
    };
    geoRadius?: number;
    postalCode?: string;
    addressRegion?: string;
  }>;
  serviceArea?: {
    type: 'GeoCircle';
    geoMidpoint: {
      latitude: string;
      longitude: string;
    };
    geoRadius: number;
  };
  sameAs?: string[];
  hasOfferCatalog?: {
    name: string;
    itemListElement: Array<{
      name: string;
      description: string;
      url?: string;
      price?: string;
      priceCurrency?: string;
    }>;
  };
  makesOffer?: Array<{
    name: string;
    description: string;
    url?: string;
    price?: string;
    priceCurrency?: string;
  }>;
  founder?: {
    name: string;
    jobTitle?: string;
    image?: string;
    sameAs?: string[];
  };
  foundingDate?: string;
  keywords?: string;
  slogan?: string;
  numberOfEmployees?: number;
  award?: string[];
  brand?: {
    name: string;
    logo?: string;
  };
  paymentAccepted?: string[];
  currenciesAccepted?: string[];
  contactPoint?: {
    contactType: string;
    telephone?: string;
    email?: string;
    availableLanguage?: string[];
  };
  review?: Array<{
    author: string;
    reviewRating: {
      ratingValue: string;
      bestRating: string;
      worstRating: string;
    };
    datePublished: string;
    reviewBody: string;
  }>;
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
    bestRating: string;
    worstRating: string;
  };
  // Ajouts spécifiques pour le SEO local
  neighborhood?: string;
  publicAccess?: boolean;
  isAccessibleForFree?: boolean;
  maximumAttendeeCapacity?: number;
  tourBookingPage?: string;
  menu?: string;
  acceptsReservations?: boolean;
  amenityFeature?: Array<{
    name: string;
    value?: boolean;
  }>;
}

// Interface pour les options de WebPage
interface WebPageOptions extends BaseSchemaOptions {
  breadcrumb?: {
    itemListElement: Array<{
      position: number;
      name: string;
      item: string;
    }>;
  };
  mainEntity?: {
    type: SchemaType;
    name: string;
    description?: string;
    [key: string]: any;
  };
  speakable?: {
    cssSelector: string;
  };
  lastReviewed?: string;
  reviewedBy?: {
    type: 'Person' | 'Organization';
    name: string;
  };
  primaryImageOfPage?: {
    url: string;
    width?: number;
    height?: number;
    caption?: string;
  };
  specialty?: string;
  significantLink?: string[];
}

// Interface pour les options de FAQPage
interface FAQPageOptions extends BaseSchemaOptions {
  mainEntity: Array<{
    question: string;
    answer: string;
  }>;
}

// Interface pour les options de Service
interface ServiceOptions extends BaseSchemaOptions {
  serviceType?: string;
  provider?: {
    type: 'Organization' | 'LocalBusiness' | 'Person';
    name: string;
    url?: string;
  };
  areaServed?: Array<{
    type: 'City' | 'GeoCircle' | 'AdministrativeArea';
    name?: string;
    geoMidpoint?: {
      latitude: string;
      longitude: string;
    };
    geoRadius?: number;
    postalCode?: string;
    addressRegion?: string;
  }>;
  offers?: {
    price: string;
    priceCurrency: string;
    priceValidUntil?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
    url?: string;
    validFrom?: string;
  };
  serviceOutput?: string;
  termsOfService?: string;
  hoursAvailable?: Array<{
    dayOfWeek: string;
    opens: string;
    closes: string;
  }>;
}

// Générateur de schéma LocalBusiness enrichi pour le SEO local
export const generateEnhancedLocalBusinessSchema = (
  baseUrl: string,
  options: Partial<LocalBusinessOptions> = {}
) => {
  // Fusionner les options par défaut avec les options fournies
  const mergedOptions: LocalBusinessOptions = {
    name: options.name || localBusinessInfo.name,
    description: options.description || 'Développement web professionnel à La Rochelle - Création de sites web, applications et e-commerce sur mesure.',
    url: options.url || baseUrl,
    image: options.image || [`${baseUrl}/images/photo.webp`, `${baseUrl}/android-chrome-512x512.png`],
    telephone: options.telephone || localBusinessInfo.telephone,
    email: options.email || localBusinessInfo.email,
    priceRange: options.priceRange || '€€',
    address: options.address || localBusinessInfo.address,
    geo: options.geo || localBusinessInfo.geo,
    openingHours: options.openingHours || localBusinessInfo.openingHours,
    areaServed: options.areaServed || [
      {
        type: 'GeoCircle',
        geoMidpoint: {
          latitude: localBusinessInfo.geo.latitude,
          longitude: localBusinessInfo.geo.longitude,
        },
        geoRadius: localBusinessInfo.serviceRadius,
      },
      ...localBusinessInfo.servicedCities.map(city => ({
        type: 'City' as const,
        name: city.name,
        postalCode: city.postalCode,
        addressRegion: city.region,
      })),
      ...localBusinessInfo.localAreas.map(area => ({
        type: 'City' as const,
        name: area.name,
        postalCode: area.postalCode,
      })),
    ],
    serviceArea: options.serviceArea || {
      type: 'GeoCircle',
      geoMidpoint: {
        latitude: localBusinessInfo.geo.latitude,
        longitude: localBusinessInfo.geo.longitude,
      },
      geoRadius: localBusinessInfo.serviceRadius,
    },
    sameAs: options.sameAs || localBusinessInfo.socialProfiles.map(profile => profile.url),
    hasOfferCatalog: options.hasOfferCatalog || {
      name: 'Services de développement web',
      itemListElement: localBusinessInfo.mainServices.map(service => ({
        name: service.name,
        description: service.description,
        url: service.url,
        ...(service.price && { price: service.price }),
      })),
    },
    makesOffer: options.makesOffer || localBusinessInfo.mainServices.map(service => ({
      name: service.name,
      description: service.description,
      url: service.url,
      ...(service.price && { price: service.price, priceCurrency: 'EUR' }),
    })),
    founder: options.founder || {
      name: localBusinessInfo.founder,
    },
    foundingDate: options.foundingDate || localBusinessInfo.foundingDate,
    keywords: options.keywords || localBusinessInfo.localKeywords.join(', '),
    slogan: options.slogan || localBusinessInfo.slogan,
    // Ajouts spécifiques pour le SEO local
    neighborhood: options.neighborhood || 'Centre-ville',
    publicAccess: options.publicAccess !== undefined ? options.publicAccess : true,
    isAccessibleForFree: options.isAccessibleForFree !== undefined ? options.isAccessibleForFree : true,
    acceptsReservations: options.acceptsReservations !== undefined ? options.acceptsReservations : true,
  };

  // Construire le schéma
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': mergedOptions.url,
    name: mergedOptions.name,
    description: mergedOptions.description,
    url: mergedOptions.url,
    logo: `${baseUrl}/android-chrome-512x512.png`,
    image: mergedOptions.image,
    telephone: mergedOptions.telephone,
    email: mergedOptions.email,
    priceRange: mergedOptions.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: mergedOptions.address.streetAddress,
      addressLocality: mergedOptions.address.addressLocality,
      addressRegion: mergedOptions.address.addressRegion,
      postalCode: mergedOptions.address.postalCode,
      addressCountry: mergedOptions.address.addressCountry,
    },
    geo: mergedOptions.geo ? {
      '@type': 'GeoCoordinates',
      latitude: mergedOptions.geo.latitude,
      longitude: mergedOptions.geo.longitude,
    } : undefined,
    openingHoursSpecification: mergedOptions.openingHours?.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    areaServed: mergedOptions.areaServed?.map(area => {
      if (area.type === 'GeoCircle') {
        return {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: area.geoMidpoint?.latitude,
            longitude: area.geoMidpoint?.longitude,
          },
          geoRadius: area.geoRadius,
        };
      } else {
        return {
          '@type': area.type,
          name: area.name,
          address: {
            '@type': 'PostalAddress',
            addressLocality: area.name,
            addressRegion: area.addressRegion,
            postalCode: area.postalCode,
            addressCountry: 'FR',
          },
        };
      }
    }),
    serviceArea: mergedOptions.serviceArea ? {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: mergedOptions.serviceArea.geoMidpoint.latitude,
        longitude: mergedOptions.serviceArea.geoMidpoint.longitude,
      },
      geoRadius: mergedOptions.serviceArea.geoRadius,
    } : undefined,
    sameAs: mergedOptions.sameAs,
    hasOfferCatalog: mergedOptions.hasOfferCatalog ? {
      '@type': 'OfferCatalog',
      name: mergedOptions.hasOfferCatalog.name,
      itemListElement: mergedOptions.hasOfferCatalog.itemListElement.map(item => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.name,
          description: item.description,
          url: item.url ? `${baseUrl}${item.url}` : undefined,
        },
        ...(item.price && { price: item.price, priceCurrency: 'EUR' }),
      })),
    } : undefined,
    makesOffer: mergedOptions.makesOffer?.map(offer => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: offer.name,
        description: offer.description,
        url: offer.url ? `${baseUrl}${offer.url}` : undefined,
      },
      ...(offer.price && { price: offer.price, priceCurrency: offer.priceCurrency || 'EUR' }),
    })),
    founder: mergedOptions.founder ? {
      '@type': 'Person',
      name: mergedOptions.founder.name,
      jobTitle: mergedOptions.founder.jobTitle,
      image: mergedOptions.founder.image,
      sameAs: mergedOptions.founder.sameAs,
    } : undefined,
    foundingDate: mergedOptions.foundingDate,
    keywords: mergedOptions.keywords,
    slogan: mergedOptions.slogan,
    numberOfEmployees: mergedOptions.numberOfEmployees,
    award: mergedOptions.award,
    brand: mergedOptions.brand ? {
      '@type': 'Brand',
      name: mergedOptions.brand.name,
      logo: mergedOptions.brand.logo,
    } : undefined,
    paymentAccepted: mergedOptions.paymentAccepted,
    currenciesAccepted: mergedOptions.currenciesAccepted,
    contactPoint: mergedOptions.contactPoint ? {
      '@type': 'ContactPoint',
      contactType: mergedOptions.contactPoint.contactType,
      telephone: mergedOptions.contactPoint.telephone,
      email: mergedOptions.contactPoint.email,
      availableLanguage: mergedOptions.contactPoint.availableLanguage,
    } : undefined,
    review: mergedOptions.review?.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.reviewRating.ratingValue,
        bestRating: review.reviewRating.bestRating,
        worstRating: review.reviewRating.worstRating,
      },
      datePublished: review.datePublished,
      reviewBody: review.reviewBody,
    })),
    aggregateRating: mergedOptions.aggregateRating ? {
      '@type': 'AggregateRating',
      ratingValue: mergedOptions.aggregateRating.ratingValue,
      reviewCount: mergedOptions.aggregateRating.reviewCount,
      bestRating: mergedOptions.aggregateRating.bestRating,
      worstRating: mergedOptions.aggregateRating.worstRating,
    } : undefined,
    // Ajouts spécifiques pour le SEO local
    neighborhood: mergedOptions.neighborhood,
    publicAccess: mergedOptions.publicAccess,
    isAccessibleForFree: mergedOptions.isAccessibleForFree,
    maximumAttendeeCapacity: mergedOptions.maximumAttendeeCapacity,
    tourBookingPage: mergedOptions.tourBookingPage,
    menu: mergedOptions.menu,
    acceptsReservations: mergedOptions.acceptsReservations,
    amenityFeature: mergedOptions.amenityFeature?.map(amenity => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity.name,
      value: amenity.value,
    })),
  };
};

// Générateur de schéma WebPage enrichi
export const generateEnhancedWebPageSchema = (
  baseUrl: string,
  options: WebPageOptions
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': options.id || `${baseUrl}${options.url || ''}`,
    name: options.name,
    description: options.description,
    url: `${baseUrl}${options.url || ''}`,
    image: options.image ? (
      Array.isArray(options.image) 
        ? options.image.map(img => img.startsWith('http') ? img : `${baseUrl}${img}`)
        : options.image.startsWith('http') ? options.image : `${baseUrl}${options.image}`
    ) : undefined,
    breadcrumb: options.breadcrumb ? {
      '@type': 'BreadcrumbList',
      itemListElement: options.breadcrumb.itemListElement.map(item => ({
        '@type': 'ListItem',
        position: item.position,
        name: item.name,
        item: item.item.startsWith('http') ? item.item : `${baseUrl}${item.item}`,
      })),
    } : undefined,
    mainEntity: options.mainEntity ? {
      '@type': options.mainEntity.type,
      name: options.mainEntity.name,
      description: options.mainEntity.description,
      ...Object.entries(options.mainEntity)
        .filter(([key]) => !['type', 'name', 'description'].includes(key))
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
    } : undefined,
    speakable: options.speakable ? {
      '@type': 'SpeakableSpecification',
      cssSelector: options.speakable.cssSelector,
    } : undefined,
    lastReviewed: options.lastReviewed,
    reviewedBy: options.reviewedBy ? {
      '@type': options.reviewedBy.type,
      name: options.reviewedBy.name,
    } : undefined,
    primaryImageOfPage: options.primaryImageOfPage ? {
      '@type': 'ImageObject',
      url: options.primaryImageOfPage.url.startsWith('http') 
        ? options.primaryImageOfPage.url 
        : `${baseUrl}${options.primaryImageOfPage.url}`,
      width: options.primaryImageOfPage.width,
      height: options.primaryImageOfPage.height,
      caption: options.primaryImageOfPage.caption,
    } : undefined,
    specialty: options.specialty,
    significantLink: options.significantLink?.map(link => 
      link.startsWith('http') ? link : `${baseUrl}${link}`
    ),
    isPartOf: {
      '@type': 'WebSite',
      '@id': baseUrl,
      name: localBusinessInfo.name,
      url: baseUrl,
    },
    about: {
      '@type': 'ProfessionalService',
      name: localBusinessInfo.name,
      description: 'Développement web professionnel à La Rochelle - Création de sites web, applications et e-commerce sur mesure.',
      areaServed: {
        '@type': 'City',
        name: localBusinessInfo.address.addressLocality,
        address: {
          '@type': 'PostalAddress',
          addressLocality: localBusinessInfo.address.addressLocality,
          addressRegion: localBusinessInfo.address.addressRegion,
          postalCode: localBusinessInfo.address.postalCode,
          addressCountry: localBusinessInfo.address.addressCountry,
        }
      }
    },
    provider: {
      '@type': 'ProfessionalService',
      name: localBusinessInfo.name,
      url: baseUrl,
    }
  };
};

// Générateur de schéma FAQPage
export const generateFAQPageSchema = (
  options: FAQPageOptions
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': options.id,
    name: options.name,
    description: options.description,
    url: options.url,
    mainEntity: options.mainEntity.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
};

// Générateur de schéma Service enrichi pour le SEO local
export const generateEnhancedServiceSchema = (
  baseUrl: string,
  options: ServiceOptions
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': options.id || `${baseUrl}${options.url || ''}`,
    name: options.name,
    description: options.description,
    url: options.url ? `${baseUrl}${options.url}` : undefined,
    image: options.image ? (
      Array.isArray(options.image) 
        ? options.image.map(img => img.startsWith('http') ? img : `${baseUrl}${img}`)
        : options.image.startsWith('http') ? options.image : `${baseUrl}${options.image}`
    ) : undefined,
    serviceType: options.serviceType,
    provider: options.provider ? {
      '@type': options.provider.type,
      name: options.provider.name,
      url: options.provider.url,
    } : {
      '@type': 'ProfessionalService',
      name: localBusinessInfo.name,
      url: baseUrl,
      areaServed: {
        '@type': 'City',
        name: localBusinessInfo.address.addressLocality,
        address: {
          '@type': 'PostalAddress',
          addressLocality: localBusinessInfo.address.addressLocality,
          addressRegion: localBusinessInfo.address.addressRegion,
          postalCode: localBusinessInfo.address.postalCode,
          addressCountry: localBusinessInfo.address.addressCountry,
        }
      }
    },
    areaServed: options.areaServed?.map(area => {
      if (area.type === 'GeoCircle') {
        return {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: area.geoMidpoint?.latitude,
            longitude: area.geoMidpoint?.longitude,
          },
          geoRadius: area.geoRadius,
        };
      } else {
        return {
          '@type': area.type,
          name: area.name,
          address: {
            '@type': 'PostalAddress',
            addressLocality: area.name,
            addressRegion: area.addressRegion,
            postalCode: area.postalCode,
            addressCountry: 'FR',
          },
        };
      }
    }) || [
      {
        '@type': 'City',
        name: localBusinessInfo.address.addressLocality,
        address: {
          '@type': 'PostalAddress',
          addressLocality: localBusinessInfo.address.addressLocality,
          addressRegion: localBusinessInfo.address.addressRegion,
          postalCode: localBusinessInfo.address.postalCode,
          addressCountry: localBusinessInfo.address.addressCountry,
        }
      },
      ...localBusinessInfo.servicedCities.map(city => ({
        '@type': 'City',
        name: city.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.name,
          addressRegion: city.region,
          postalCode: city.postalCode,
          addressCountry: 'FR',
        }
      }))
    ],
    offers: options.offers ? {
      '@type': 'Offer',
      price: options.offers.price,
      priceCurrency: options.offers.priceCurrency,
      priceValidUntil: options.offers.priceValidUntil,
      availability: options.offers.availability,
      url: options.offers.url ? `${baseUrl}${options.offers.url}` : undefined,
      validFrom: options.offers.validFrom,
    } : undefined,
    serviceOutput: options.serviceOutput,
    termsOfService: options.termsOfService,
    hoursAvailable: options.hoursAvailable?.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
  };
};
