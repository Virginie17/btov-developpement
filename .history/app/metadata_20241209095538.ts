import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  metadataBase: new URL('https://www.btov-dev.fr'),
  title: {
    default: 'Expert Prompt Engineering & Développement Web La Rochelle | B to V Développement',
    template: '%s | B to V Développement',
  },
  description: 'Expert en Prompt Engineering et Développement Web à La Rochelle ⭐ Création de sites web sur-mesure, optimisation IA, référencement SEO. 10+ ans d\'expérience en Charente-Maritime (17). Devis gratuit.',
  keywords: [
    'prompt engineering la rochelle',
    'développeur web la rochelle',
    'création site web charente maritime',
    'expert IA 17',
    'agence web la rochelle',
    'développement web sur mesure',
    'optimisation intelligence artificielle',
    'SEO la rochelle',
    'création site e-commerce',
    'développeur freelance 17',
    'prompt engineering france',
    'expert ChatGPT',
    'consultant IA',
    'site internet professionnel',
  ],
  authors: [{ 
    name: 'B to V Développement',
    url: 'https://www.btov-dev.fr'
  }],
  creator: 'B to V Développement',
  publisher: 'B to V Développement',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.btov-dev.fr',
    siteName: 'B to V Développement',
    title: 'Expert Prompt Engineering & Développement Web La Rochelle | B to V Développement',
    description: 'Expert en Prompt Engineering et Développement Web à La Rochelle ⭐ Création de sites web sur-mesure, optimisation IA, référencement SEO. Devis gratuit.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'B to V Développement - Expert Prompt Engineering et Développement Web à La Rochelle',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Prompt Engineering & Développement Web La Rochelle | B to V Développement',
    description: 'Expert en Prompt Engineering et Développement Web à La Rochelle ⭐ Création de sites web sur-mesure, optimisation IA, référencement SEO. Devis gratuit.',
    images: ['/og-image.jpg'],
    creator: '@btovdev',
    site: '@btovdev',
  },
  alternates: {
    canonical: 'https://www.btov-dev.fr',
    languages: {
      'fr-FR': 'https://www.btov-dev.fr',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'votre-code-verification-google',
    yandex: 'votre-code-verification-yandex',
    bing: 'votre-code-verification-bing',
  }
  category: 'technology',
  classification: 'Développement Web, Prompt Engineering, Intelligence Artificielle',
  rating: 'safe for kids',
  other: {
    'geo.region': 'FR-17',
    'geo.placename': 'La Rochelle',
    'geo.position': '46.160329;-1.151139',
    'ICBM': '46.160329, -1.151139',
  },
};

export default defaultMetadata;
