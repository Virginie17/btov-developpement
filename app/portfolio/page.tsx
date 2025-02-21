'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import PageJsonLd from '@/components/PageJsonLd';
import { portfolioJsonLd } from '../metadata';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Site E-commerce Mode",
    description: "Boutique en ligne responsive avec système de paiement sécurisé et interface utilisateur moderne.",
    image: "/portfolio/ecommerce mode.webp",
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
    image: "/portfolio/site immobilier.webp",
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
    image: "/portfolio/blog lifestyle.webp",
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
    image: "/portfolio/site vitrine restaurant.webp",
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
    image: "/portfolio/ecommerce produit bio.webp",
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
    image: "/portfolio/refonte application mobile.webp",
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
    image: "/portfolio/seo.webp",
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

const ProjectCard = dynamic(() => import('@/components/ProjectCard'), {
  loading: () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
    </div>
  )
});

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Sites Web' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'refonte', name: 'Refonte' },
    { id: 'seo', name: 'SEO' }
  ];

  const filteredProjects = projects.filter(
    project => selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <>
      <PageJsonLd data={portfolioJsonLd} />
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
            Mon Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Découvrez mes dernières réalisations en développement web et design d'interface
          </p>
        </motion.div>

        <div className="relative mb-8">
          {/* Version mobile : select */}
          <div className="sm:hidden w-full px-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 
              border-2 border-zinc-200 dark:border-zinc-700
              shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:ring-opacity-50 
              transition-all duration-200 appearance-none
              bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%234F46E5%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]
              bg-[length:24px] bg-[right_16px_center] bg-no-repeat
              font-medium text-base"
            >
              {categories.map((category) => (
                <option 
                  key={category.id} 
                  value={category.id}
                  className="py-2 bg-zinc-100 dark:bg-zinc-800"
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Version desktop : boutons */}
          <div className="hidden sm:flex justify-center gap-4 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full transition-all text-base font-medium shadow-sm whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white scale-105 transform'
                    : 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredProject === project.id}
                onHover={setHoveredProject}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}