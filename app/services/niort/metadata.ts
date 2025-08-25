import { Metadata } from 'next';
import { cityData } from './data';

// Métadonnées de la page pour le SEO
export const metadata: Metadata = {
  title: `Développeur Web à ${cityData.name} | Création de Sites Web Professionnels`,
  description: `Création de sites web professionnels à ${cityData.name} (${cityData.postalCode}). Développeur web freelance intervenant à ${cityData.name} et proposant des sites sur mesure, e-commerce et applications web.`,
  keywords: [
    `développeur web ${cityData.name}`,
    `création site web ${cityData.name}`,
    `agence web ${cityData.name}`,
    `site internet ${cityData.name}`,
    `référencement local ${cityData.name}`,
    `création site e-commerce ${cityData.name}`,
    `développeur freelance ${cityData.region}`,
    `site vitrine ${cityData.name}`,
    `maintenance site web ${cityData.name}`,
    `refonte site internet ${cityData.name}`
  ],
  alternates: {
    canonical: `/services/${cityData.name.toLowerCase().replace(/\s+/g, '-')}`,
  },
};
