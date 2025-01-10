import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  metadataBase: new URL('https://www.btov-dev.com'),
  title: {
    default: 'Expert en Développement Web à La Rochelle | B to V Développement La Rochelle',
    template: '%s | B to V Développement',
  },
  description: 'Développeur web freelance à La Rochelle, spécialisé en création de sites sur-mesure, optimisation IA, SEO & Prompt Engineering. 10+ ans d\'expérience pour booster votre présence en ligne. Contactez-nous pour un devis personnalisé.',
  keywords: [
    'développeur web freelance La Rochelle',
    'création de site web personnalisé La Rochelle',
    'optimisation SEO La Rochelle',
    'création site e-commerce La Rochelle',
    'référencement naturel La Rochelle',
    'consultant SEO La Rochelle',
    'développement web sur mesure',
    'site internet professionnel La Rochelle',
    'création site internet pour PME La Rochelle',
    'services développement web La Rochelle',
  ],
  authors: [{
    name: 'B to V Développement',
    url: 'https://www.btov-dev.com',
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
    url: 'https://www.btov-dev.com',
    siteName: 'B to V Développement',
    title: 'Expert en Développement Web à La Rochelle | B to V Développement',
    description: 'Développeur web freelance à La Rochelle, spécialisé en création de sites sur-mesure, optimisation IA, SEO & Prompt Engineering',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'B to V Développement - Expert Web La Rochelle',
      },
    ],
  },
};

export const homeMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Développeur Web freelance à La Rochelle | B to V Développement',
  description: 'besoin d unDéveloppeur web freelance à La Rochelle? B to V Développement est réalise des sites modernes,performants et adaptés a vos besoins.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Développeur Web à La Rochelle | B to V Développement',
    description: 'Développeur web freelance à La Rochelle, expert en création de sites web sur-mesure et optimisation SEO.',
  },
};

export const servicesMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Services de Développement Web & SEO | B to V Développement La Rochelle',
  description: 'Découvrez nos services de développement web, optimisation SEO, et création de sites e-commerce à La Rochelle. Solutions personnalisées pour votre entreprise.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Services de Développement Web & SEO | B to V Développement La Rochelle',
    description: 'Services de développement web et optimisation SEO sur-mesure à La Rochelle.',
  },
};



export const contactMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Contactez un developpeur Web freelance à La Rochelle | B to V Développement',
  description: 'Besoin d\'un développeur web à La Rochelle ? Contactez B to V Développement pour un devis gratuit. Expert en création de sites web et SEO.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Contactez Votre Expert Web à La Rochelle | B to V Développement',
    description: 'Contactez votre expert en développement web à La Rochelle pour un devis gratuit.',
  },
};

export const aboutMetadata: Metadata = {
  ...defaultMetadata,
  title: 'À Propos de B to V Développement | Expert Web La Rochelle',
  description: 'Découvrez B to V Développement, votre expert en développement web à La Rochelle. Plus de 10 ans d\'expérience au service de votre présence digitale.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'À Propos de B to V Développement | Expert Web La Rochelle',
    description: 'Découvrez B to V Développement, votre expert en développement web à La Rochelle.',
  },
};

export default defaultMetadata;