export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'projet-1',
    title: 'Site E-commerce Mode',
    description: 'Boutique en ligne de vêtements avec système de paiement intégré',
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS'],
    imageUrl: '/images/portfolio/projet-1.jpg'
  },
  {
    id: 'projet-2',
    title: 'Application de Gestion',
    description: 'Dashboard administratif pour une entreprise de logistique',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/portfolio/projet-2.jpg'
  },
  {
    id: 'projet-3',
    title: 'Site Vitrine Restaurant',
    description: 'Site web moderne pour un restaurant gastronomique',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: '/images/portfolio/projet-3.jpg'
  }
];
