'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Site E-commerce Mode",
    description: "Boutique en ligne responsive avec système de paiement sécurisé et interface utilisateur moderne.",
    image: "/images/portfolio/ecommerce.webp",
    category: "ecommerce",
    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
    link: "#",
    features: [
      "Paiement sécurisé",
      "Gestion des stocks",
      "Interface responsive",
      "Panier d'achat dynamique"
    ]
  },
  {
    id: 2,
    title: "Refonte Site Immobilier",
    description: "Refonte complète d'un site immobilier avec amélioration de l'UX et des performances.",
    image: "/images/portfolio/real-estate.webp",
    category: "refonte",
    technologies: ["React", "Next.js", "PostgreSQL"],
    link: "#",
    features: [
      "Design moderne",
      "Recherche avancée",
      "Visite virtuelle 3D",
      "Performance optimisée"
    ]
  },
  {
    id: 3,
    title: "Optimisation SEO - Blog Lifestyle",
    description: "Amélioration du référencement naturel avec une augmentation de 150% du trafic organique.",
    image: "/images/portfolio/seo-blog.webp",
    category: "seo",
    technologies: ["WordPress", "Schema.org", "Google Analytics"],
    link: "#",
    features: [
      "Audit SEO complet",
      "Optimisation technique",
      "Content marketing",
      "Backlink strategy"
    ]
  },
  {
    id: 4,
    title: "Site Vitrine Restaurant",
    description: "Site moderne avec réservation en ligne et menu interactif.",
    image: "/images/portfolio/restaurant.webp",
    category: "web",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "#",
    features: [
      "Réservation en ligne",
      "Menu digital",
      "Galerie photos",
      "Intégration réseaux sociaux"
    ]
  },
  {
    id: 5,
    title: "E-commerce Produits Bio",
    description: "Plateforme de vente en ligne de produits biologiques avec abonnement mensuel.",
    image: "/images/portfolio/bio-shop.webp",
    category: "ecommerce",
    technologies: ["Shopify", "React", "Node.js"],
    link: "#",
    features: [
      "Système d'abonnement",
      "Click & Collect",
      "Programme de fidélité",
      "Blog intégré"
    ]
  },
  {
    id: 6,
    title: "Refonte UX Application Mobile",
    description: "Refonte complète de l'expérience utilisateur d'une application de fitness.",
    image: "/images/portfolio/fitness-app.webp",
    category: "refonte",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "#",
    features: [
      "Nouvelle architecture",
      "Interface intuitive",
      "Temps de chargement réduit",
      "Accessibilité améliorée"
    ]
  },
  {
    id: 7,
    title: "Optimisation SEO E-commerce",
    description: "Amélioration du référencement et des conversions pour une boutique en ligne.",
    image: "/images/portfolio/seo-ecommerce.webp",
    category: "seo",
    technologies: ["Prestashop", "Google Search Console", "SEMrush"],
    link: "#",
    features: [
      "Structure URL optimisée",
      "Rich snippets",
      "Optimisation mobile",
      "+200% de trafic organique"
    ]
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'web', name: 'Sites Web' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'refonte', name: 'Refonte' },
    { id: 'seo', name: 'SEO' }
  ];

  const filteredProjects = projects.filter(
    project => selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Mon Portfolio</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Découvrez mes dernières réalisations en développement web
        </p>
      </motion.div>

      {/* Filtres */}
      <div className="flex justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary-500 text-white'
                : 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
            className="group relative bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover transition-all duration-500 ${
                  hoveredProject === project.id ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="h-full flex flex-col justify-center items-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h4 className="text-lg font-semibold mb-2">Fonctionnalités :</h4>
                  <ul className="list-disc list-inside text-sm">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                Voir le projet →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
