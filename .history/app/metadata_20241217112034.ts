import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  metadataBase: new URL('https://www.btov-dev.com'),
  title: {
    default: 'Expert en Développement Web & Prompt Engineering | B to V Développement La Rochelle',
    template: '%s | B to V Développement',
  },
  description: 'Développeur web freelance à La Rochelle, spécialisé en création de sites sur-mesure, optimisation IA, SEO & Prompt Engineering. 10+ ans d\'expérience pour booster votre présence en ligne. Contactez-nous pour un devis personnalisé.',
  keywords: [
    'développeur web freelance La Rochelle',
    'création de site web personnalisé La Rochelle',
    'optimisation SEO La Rochelle',
    'Prompt Engineering France',
    'création site e-commerce La Rochelle',
    'référencement naturel La Rochelle',
    'consultant SEO La Rochelle',
    'développement web sur mesure',
    'site internet professionnel La Rochelle',
    'création site internet pour PME La Rochelle',
    'optimisation IA pour entreprise',
    'services développement web La Rochelle',
  ],
  authors: [{
    name: 'B to V Développement',
    url: 'https://www.btov-dev.fr',
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
    title: 'Développement Web & Prompt Engineering à La Rochelle | B to V Développement',
    description: 'Expert en développement web à La Rochelle, création de sites sur-mesure, optimisation SEO, Prompt Engineering, et intelligence artificielle. 10+ ans d\'expérience.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'B to V Développement - Développeur Web et Prompt Engineering à La Rochelle',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développement Web & Prompt Engineering | B to V Développement',
    description: 'Développeur web freelance à La Rochelle, spécialisé dans la création de sites, l\'optimisation SEO et le Prompt Engineering. Devis gratuit !',
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
  } as Record<string, string>,
  category: 'technology',
  classification: 'Développement Web, Prompt Engineering, Intelligence Artificielle, SEO',
  other: {
    'geo.region': 'FR-17',
    'geo.placename': 'La Rochelle',
    'geo.position': '46.160329;-1.151139',
    'ICBM': '46.160329, -1.151139',
  },
};

export default defaultMetadata;