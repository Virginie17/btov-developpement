export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
}

export const services: Service[] = [
  {
    id: 'site-vitrine',
    title: 'Site Vitrine',
    description: 'Une présence web professionnelle pour votre entreprise',
    features: ['Design responsive', 'Optimisation SEO', 'Formulaire de contact'],
    price: 'À partir de 1500€'
  },
  {
    id: 'e-commerce',
    title: 'Site E-commerce',
    description: 'Vendez vos produits en ligne',
    features: ['Gestion des produits', 'Panier d\'achat', 'Paiement sécurisé'],
    price: 'À partir de 3000€'
  },
  {
    id: 'application-web',
    title: 'Application Web',
    description: 'Solutions web sur mesure',
    features: ['Développement personnalisé', 'Interface intuitive', 'Scalabilité'],
    price: 'Sur devis'
  }
];
