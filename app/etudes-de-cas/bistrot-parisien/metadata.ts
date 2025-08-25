import { Metadata } from 'next';
import { caseStudy } from './data';

export const metadata: Metadata = {
  title: `Étude de cas : ${caseStudy.title} - ${caseStudy.subtitle} | BTOV Développement`,
  description: `${caseStudy.description} Découvrez comment j'ai transformé la présence en ligne du Bistrot Parisien à La Rochelle avec une landing page moderne et efficace.`,
  keywords: [
    ...caseStudy.localKeywords,
    "création site web restaurant",
    "landing page restaurant La Rochelle",
    "réservation en ligne restaurant",
    "menu interactif site web",
    "développeur web La Rochelle",
    "étude de cas web local",
    "transformation digitale restaurant"
  ],
  alternates: {
    canonical: caseStudy.url,
  },
};
