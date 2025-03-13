export const articles = {
  '1': {
    id: 1,
    title: "Les meilleures pratiques du développement web moderne",
    excerpt: "Découvrez les techniques et outils essentiels pour créer des sites web performants et maintenables en 2024, incluant les meilleures pratiques en matière de performance, d'architecture et d'expérience utilisateur.",
    content: `
      Le développement web évolue constamment, et il est crucial de rester à jour avec les meilleures pratiques. Dans cet article, nous allons explorer les techniques et outils essentiels pour créer des sites web performants et maintenables en 2024.

      ## Performance et optimisation

      La performance est devenue un facteur clé pour le succès d'un site web. Voici quelques points essentiels à considérer :

      - Utilisation de Next.js pour le rendu côté serveur
      - Optimisation des images avec des formats modernes
      - Mise en cache intelligente
      - Code splitting et lazy loading

      ## Architecture et maintenabilité

      Une bonne architecture est la base d'un projet réussi :

      - Organisation modulaire du code
      - Utilisation de TypeScript pour la sécurité du type
      - Tests automatisés
      - Documentation claire et complète

      ## Expérience utilisateur

      L'expérience utilisateur doit être au centre de vos préoccupations :

      - Design responsive et adaptatif
      - Animations fluides et pertinentes
      - Accessibilité (WCAG 2.1)
      - Performance perçue
    `,
    image: "/blog/modern-web-dev.jpg",
    category: "Développement",
    date: "2024-02-15",
    readTime: "5 min",
    views: 1200,
    tags: ["React", "Next.js", "Performance"],
    author: {
      name: "Virginie",
      avatar: "/avatar.jpg"
    }
  },
  '2': {
    id: 2,
    title: "Optimiser son site pour le SEO en 2024",
    excerpt: "Explorez les techniques les plus efficaces pour optimiser votre référencement naturel en 2024, des fondamentaux du SEO aux facteurs techniques avancés et stratégies de contenu.",
    content: `
      Le référencement naturel reste un élément crucial pour la visibilité en ligne. Découvrons les techniques les plus efficaces pour optimiser votre site en 2024.

      ## Les fondamentaux du SEO

      Les bases du SEO restent importantes :

      - Structure HTML sémantique
      - Méta-descriptions optimisées
      - URLs propres et descriptives
      - Contenu de qualité

      ## Facteurs techniques

      L'aspect technique est de plus en plus important :

      - Core Web Vitals
      - HTTPS et sécurité
      - Mobile-first indexing
      - Structure des données (Schema.org)

      ## Stratégie de contenu

      Le contenu reste roi :

      - Recherche de mots-clés
      - Intent matching
      - Content clustering
      - EAT (Expertise, Autorité, Fiabilité)
    `,
    image: "/blog/seo-optimization.jpg",
    category: "SEO",
    date: "2024-02-10",
    readTime: "8 min",
    views: 1500,
    tags: ["SEO", "Marketing", "Analytics"],
    author: {
      name: "Virginie",
      avatar: "/avatar.jpg"
    }
  },
  '3': {
    id: 3,
    title: "L'importance du design UX dans vos projets web",
    excerpt: "Découvrez pourquoi un bon design UX est crucial pour le succès de vos projets web et comment appliquer les principes fondamentaux pour améliorer l'expérience utilisateur.",
    content: `
      Un bon design UX peut faire la différence entre un site qui convertit et un site qui fait fuir les visiteurs. Explorons les principes clés du design UX.

      ## Les principes fondamentaux

      Le design UX repose sur plusieurs principes :

      - Hiérarchie visuelle
      - Navigation intuitive
      - Cohérence
      - Feedback utilisateur

      ## Recherche utilisateur

      Comprendre vos utilisateurs est crucial :

      - Personas
      - Parcours utilisateur
      - Tests d'utilisabilité
      - Analytics

      ## Optimisation des conversions

      Le design doit servir vos objectifs :

      - Call-to-action efficaces
      - Réduction des frictions
      - A/B testing
      - Micro-interactions
    `,
    image: "/blog/ux-design.jpg",
    category: "Design",
    date: "2024-02-05",
    readTime: "6 min",
    views: 980,
    tags: ["UX", "UI", "Design"],
    author: {
      name: "Virginie",
      avatar: "/avatar.jpg"
    }
  }
};
