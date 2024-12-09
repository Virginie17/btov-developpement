import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: {
    default: 'B to V Développement | Création de sites web à La Rochelle',
    template: '%s | B to V Développement',
  },
  description: 'Agence de développement web à La Rochelle spécialisée dans la création de sites, la refonte, l\'optimisation et le référencement SEO.',
  keywords: [
    'développement web',
    'création site web',
    'La Rochelle',
    'agence web',
    'refonte site',
    'SEO',
    'référencement',
    'site internet',
    'site vitrine',
    'e-commerce',
  ],
  authors: [{ name: 'B to V Développement' }],
  creator: 'B to V Développement',
  publisher: 'B to V Développement',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.btov-dev.fr',
    siteName: 'B to V Développement',
    title: 'B to V Développement | Création de sites web à La Rochelle',
    description: 'Agence de développement web à La Rochelle spécialisée dans la création de sites, la refonte, l\'optimisation et le référencement SEO.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'B to V Développement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B to V Développement | Création de sites web à La Rochelle',
    description: 'Agence de développement web à La Rochelle spécialisée dans la création de sites, la refonte, l\'optimisation et le référencement SEO.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.btov-dev.fr',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'votre-code-verification-google',
  },
};

export default defaultMetadata;
