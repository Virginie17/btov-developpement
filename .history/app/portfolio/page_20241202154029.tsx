'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

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

const ProjectCard = dynamic(() => Promise.resolve(({ project, isHovered, onHover, onLeave }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    onHoverStart={() => onHover(project.id)}
    onHoverEnd={() => onLeave(null)}
    className="group relative bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="relative h-48 sm:h-64 w-full overflow-hidden">
    <Image
  src={project.image}
  alt={project.title}
  width={400}
  height={300}
  className="object-cover"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  quality={80}
/>
      <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="h-full flex flex-col justify-center items-center text-white p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <h4 className="text-base sm:text-lg font-semibold mb-2">Fonctionnalités :</h4>
          <ul className="list-disc list-inside text-xs sm:text-sm">
            {project.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
        {project.title}
      </h3>
      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
        {project.technologies.map((tech: string, index: number) => (
          <span
            key={index}
            className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
    </div>
  </motion.div>
)), {
  loading: () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
    </div>
  )
});

