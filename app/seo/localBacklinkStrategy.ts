// Stratégie de backlinks locaux pour le SEO
import { localBusinessInfo } from './localSeoConfig';

// Interface pour les opportunités de backlinks
interface BacklinkOpportunity {
  name: string;
  type: 'Annuaire' | 'Partenariat' | 'Association' | 'Presse' | 'Blog' | 'Événement' | 'Témoignage' | 'Autre';
  url: string;
  contactInfo?: string;
  priority: 'Haute' | 'Moyenne' | 'Basse';
  status: 'À contacter' | 'En cours' | 'Obtenu' | 'Refusé';
  notes?: string;
  localRelevance: 'Élevée' | 'Moyenne' | 'Faible';
  domainAuthority?: number;
  followType?: 'Follow' | 'NoFollow';
  targetPage?: string;
  anchorText?: string;
}

// Annuaires locaux et nationaux pertinents
export const localDirectories: BacklinkOpportunity[] = [
  {
    name: 'Pages Jaunes',
    type: 'Annuaire',
    url: 'https://www.pagesjaunes.fr',
    priority: 'Haute',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Créer une fiche complète avec photos, horaires et description détaillée'
  },
  {
    name: 'La Rochelle Tourisme',
    type: 'Annuaire',
    url: 'https://www.larochelle-tourisme.com',
    priority: 'Haute',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Contacter pour être ajouté dans la section services aux professionnels'
  },
  {
    name: 'CCI La Rochelle',
    type: 'Annuaire',
    url: 'https://www.larochelle.cci.fr',
    priority: 'Haute',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Vérifier les opportunités pour les membres de la CCI'
  },
  {
    name: 'Annuaire des Entreprises de France',
    type: 'Annuaire',
    url: 'https://www.aef.cci.fr',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Moyenne',
    notes: 'Inscription gratuite via la CCI'
  },
  {
    name: 'Yelp',
    type: 'Annuaire',
    url: 'https://www.yelp.fr',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Moyenne',
    notes: 'Créer un profil complet avec photos et description détaillée'
  },
  {
    name: 'Cylex',
    type: 'Annuaire',
    url: 'https://www.cylex.fr',
    priority: 'Basse',
    status: 'À contacter',
    localRelevance: 'Moyenne',
    notes: 'Inscription gratuite'
  },
  {
    name: 'Annuaire Mairie La Rochelle',
    type: 'Annuaire',
    url: 'https://www.larochelle.fr',
    priority: 'Haute',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Contacter le service économique de la mairie'
  },
  {
    name: 'Annuaire Charente-Maritime',
    type: 'Annuaire',
    url: 'https://la.charente-maritime.fr',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Vérifier les conditions d\'inscription'
  },
  {
    name: 'Annuaire Nouvelle-Aquitaine',
    type: 'Annuaire',
    url: 'https://entreprises.nouvelle-aquitaine.fr',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Moyenne',
    notes: 'Vérifier l\'éligibilité'
  },
  {
    name: 'Kompass',
    type: 'Annuaire',
    url: 'https://fr.kompass.com',
    priority: 'Basse',
    status: 'À contacter',
    localRelevance: 'Moyenne',
    notes: 'Vérifier les options gratuites'
  }
];

// Partenariats locaux potentiels
export const localPartnerships: BacklinkOpportunity[] = [
  {
    name: 'Le Bistrot Parisien',
    type: 'Partenariat',
    url: 'https://lebistrotparisien.fr',
    contactInfo: 'Sophie Martin - contact@lebistrotparisien.fr',
    priority: 'Haute',
    status: 'Obtenu',
    localRelevance: 'Élevée',
    notes: 'Client satisfait, demander un témoignage et un lien depuis leur site',
    targetPage: '/etudes-de-cas/bistrot-parisien',
    anchorText: 'Développeur web à La Rochelle'
  },
  {
    name: 'Menuiserie Dubois',
    type: 'Partenariat',
    url: 'https://menuiserie-dubois.fr',
    contactInfo: 'Jean Dubois - contact@menuiserie-dubois.fr',
    priority: 'Haute',
    status: 'Obtenu',
    localRelevance: 'Élevée',
    notes: 'Client satisfait, demander un témoignage et un lien depuis leur site',
    targetPage: '/etudes-de-cas/menuiserie-dubois',
    anchorText: 'Création de site web La Rochelle'
  },
  {
    name: 'Cabinet Martin & Associés',
    type: 'Partenariat',
    url: 'https://cabinet-martin.fr',
    contactInfo: 'Philippe Martin - contact@cabinet-martin.fr',
    priority: 'Haute',
    status: 'Obtenu',
    localRelevance: 'Élevée',
    notes: 'Client satisfait, demander un témoignage et un lien depuis leur site',
    targetPage: '/etudes-de-cas/cabinet-martin',
    anchorText: 'Développeur web Niort'
  },
  {
    name: 'Imprimerie Rochelaise',
    type: 'Partenariat',
    url: 'https://imprimerie-rochelaise.fr',
    contactInfo: 'À rechercher',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Proposer un échange de services ou de liens',
    targetPage: '/services',
    anchorText: 'Création de site web La Rochelle'
  },
  {
    name: 'Agence de communication Horizon',
    type: 'Partenariat',
    url: 'https://agence-horizon.fr',
    contactInfo: 'À rechercher',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Proposer une collaboration sur des projets nécessitant du développement web',
    targetPage: '/',
    anchorText: 'Développeur web freelance La Rochelle'
  },
  {
    name: 'Photographe Julie Durand',
    type: 'Partenariat',
    url: 'https://julie-durand-photo.fr',
    contactInfo: 'À rechercher',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Proposer un échange de services (photos professionnelles contre optimisation de son site)',
    targetPage: '/services',
    anchorText: 'Création de site web professionnel'
  }
];

// Associations locales
export const localAssociations: BacklinkOpportunity[] = [
  {
    name: 'Club des Entrepreneurs de La Rochelle',
    type: 'Association',
    url: 'https://www.club-entrepreneurs-larochelle.fr',
    contactInfo: 'À rechercher',
    priority: 'Haute',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Devenir membre et demander à être listé dans l\'annuaire des membres'
  },
  {
    name: 'La Rochelle Business Club',
    type: 'Association',
    url: 'https://larochelle-businessclub.fr',
    contactInfo: 'À rechercher',
    priority: 'Haute',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Participer aux événements et demander à être référencé'
  },
  {
    name: 'Association des Commerçants de La Rochelle',
    type: 'Association',
    url: 'https://commerces-larochelle.com',
    contactInfo: 'À rechercher',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Proposer des tarifs préférentiels pour les membres'
  },
  {
    name: 'Réseau Entreprendre Poitou-Charentes',
    type: 'Association',
    url: 'https://www.reseau-entreprendre.org/poitou-charentes',
    contactInfo: 'À rechercher',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Moyenne',
    notes: 'Vérifier les conditions d\'adhésion'
  }
];

// Presse et médias locaux
export const localPress: BacklinkOpportunity[] = [
  {
    name: 'Sud Ouest',
    type: 'Presse',
    url: 'https://www.sudouest.fr',
    contactInfo: 'redaction.larochelle@sudouest.fr',
    priority: 'Haute',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Proposer un article sur la transformation digitale des commerces locaux'
  },
  {
    name: 'France 3 Nouvelle-Aquitaine',
    type: 'Presse',
    url: 'https://france3-regions.francetvinfo.fr/nouvelle-aquitaine',
    contactInfo: 'À rechercher',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Proposer un reportage sur l\'importance du numérique pour les entreprises locales'
  },
  {
    name: 'Le Petit Économiste',
    type: 'Presse',
    url: 'https://www.lepetiteconomiste.com',
    contactInfo: 'redaction@lepetiteconomiste.com',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Proposer un article sur l\'importance du SEO local pour les PME'
  },
  {
    name: 'Radio Collège',
    type: 'Presse',
    url: 'https://www.radiocollege.fr',
    contactInfo: 'À rechercher',
    priority: 'Basse',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Proposer une interview sur le développement web local'
  }
];

// Événements locaux
export const localEvents: BacklinkOpportunity[] = [
  {
    name: 'Salon des Entrepreneurs La Rochelle',
    type: 'Événement',
    url: 'https://www.salondesentrepreneurs.com',
    contactInfo: 'À rechercher',
    priority: 'Haute',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Participer en tant qu\'exposant ou intervenant'
  },
  {
    name: 'Digital In Pulse La Rochelle',
    type: 'Événement',
    url: 'https://www.digitalinpulse.com',
    contactInfo: 'À rechercher',
    priority: 'Haute',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Proposer un atelier sur le SEO local'
  },
  {
    name: 'Meetup Tech La Rochelle',
    type: 'Événement',
    url: 'https://www.meetup.com/fr-FR/La-Rochelle-Tech',
    contactInfo: 'Via la plateforme Meetup',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Proposer une présentation sur les technologies web modernes'
  }
];

// Blogs locaux et nationaux pertinents
export const relevantBlogs: BacklinkOpportunity[] = [
  {
    name: 'Blog de la CCI La Rochelle',
    type: 'Blog',
    url: 'https://www.larochelle.cci.fr/blog',
    contactInfo: 'À rechercher',
    priority: 'Haute',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Proposer un article invité sur la transformation digitale des commerces locaux'
  },
  {
    name: 'Blog La Rochelle Technopole',
    type: 'Blog',
    url: 'https://www.larochelle-technopole.fr/actualites',
    contactInfo: 'À rechercher',
    priority: 'Haute',
    status: 'À contacter',
    localRelevance: 'Élevée',
    notes: 'Proposer un article sur l\'innovation web pour les entreprises locales'
  },
  {
    name: 'Journal du Net',
    type: 'Blog',
    url: 'https://www.journaldunet.com',
    contactInfo: 'À rechercher',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Moyenne',
    notes: 'Proposer un article sur le SEO local pour les PME'
  },
  {
    name: 'Blog WebRankInfo',
    type: 'Blog',
    url: 'https://www.webrankinfo.com',
    contactInfo: 'À rechercher',
    priority: 'Moyenne',
    status: 'À contacter',
    localRelevance: 'Moyenne',
    notes: 'Participer activement aux forums et proposer un article invité'
  }
];

// Modèles d'emails pour les demandes de backlinks
export const backlinkEmailTemplates = {
  directory: `
Objet : Inscription de BTOV Développement dans votre annuaire

Bonjour,

Je souhaite inscrire mon entreprise, BTOV Développement, dans votre annuaire.

BTOV Développement est une entreprise de création de sites web et d'applications basée à La Rochelle. Je propose des services de développement web sur mesure pour les entreprises locales, avec une expertise particulière en référencement local.

Voici les informations de mon entreprise :
- Nom : ${localBusinessInfo.name}
- Adresse : ${localBusinessInfo.address.streetAddress}, ${localBusinessInfo.address.postalCode} ${localBusinessInfo.address.addressLocality}
- Téléphone : ${localBusinessInfo.telephone}
- Email : ${localBusinessInfo.email}
- Site web : https://btov-developpement.fr
- Description : Développeur web freelance à La Rochelle, spécialisé dans la création de sites web professionnels, e-commerce et applications sur mesure. Expertise en référencement local et optimisation SEO.

Merci de me confirmer la bonne réception de ma demande et de m'indiquer si vous avez besoin d'informations complémentaires.

Cordialement,
Virginie Chaffard
BTOV Développement
  `,

  partnership: `
Objet : Proposition de partenariat - BTOV Développement

Bonjour,

Je suis Virginie Chaffard, développeuse web freelance à La Rochelle et fondatrice de BTOV Développement.

Je vous contacte pour vous proposer un partenariat qui pourrait être bénéfique pour nos deux entreprises. En tant que spécialiste du développement web et du référencement local, je travaille avec de nombreuses entreprises de La Rochelle et ses environs pour améliorer leur présence en ligne.

Je vous propose :
- Un échange de liens entre nos sites web respectifs pour améliorer notre référencement local
- La possibilité de recommander mutuellement nos services à nos clients
- Éventuellement, une collaboration sur des projets communs

Mon site web est https://btov-developpement.fr et je serais ravi(e) d'échanger avec vous sur les modalités de ce partenariat.

Seriez-vous disponible pour un appel téléphonique ou un café dans les prochains jours ?

Cordialement,
Virginie Chaffard
BTOV Développement
${localBusinessInfo.telephone}
  `,

  guestPost: `
Objet : Proposition d'article invité sur le SEO local pour les entreprises de La Rochelle

Bonjour,

Je suis Virginie Chaffard, développeuse web freelance spécialisée en référencement local à La Rochelle.

Je vous contacte car je souhaiterais proposer un article invité pour votre blog sur le thème : "Comment les entreprises de La Rochelle peuvent améliorer leur visibilité en ligne grâce au SEO local".

Cet article aborderait :
- Les spécificités du référencement local pour les entreprises de La Rochelle
- Des conseils pratiques pour optimiser sa fiche Google Business Profile
- Des études de cas locales de transformations digitales réussies
- Des astuces pour se démarquer de la concurrence locale

Je pense que cet article pourrait intéresser votre audience et apporter une réelle valeur ajoutée à vos lecteurs. Je m'engage à fournir un contenu original, de qualité et adapté à votre ligne éditoriale.

Seriez-vous intéressé(e) par cette proposition ? Je reste à votre disposition pour en discuter plus en détail.

Cordialement,
Virginie Chaffard
BTOV Développement
https://btov-developpement.fr
  `
};

// Stratégie de suivi des backlinks
export const backlinkTrackingStrategy = {
  tools: [
    {
      name: 'Google Search Console',
      url: 'https://search.google.com/search-console',
      usage: 'Surveiller les backlinks détectés par Google'
    },
    {
      name: 'Ahrefs',
      url: 'https://ahrefs.com',
      usage: 'Analyse complète des backlinks et de leur qualité'
    },
    {
      name: 'SEMrush',
      url: 'https://www.semrush.com',
      usage: 'Suivi des backlinks et analyse de la concurrence locale'
    },
    {
      name: 'Majestic',
      url: 'https://majestic.com',
      usage: 'Évaluation de la qualité des backlinks (Trust Flow et Citation Flow)'
    }
  ],
  
  monitoringFrequency: {
    newBacklinks: 'Hebdomadaire',
    lostBacklinks: 'Hebdomadaire',
    qualityAnalysis: 'Mensuelle',
    competitorBacklinks: 'Mensuelle'
  },
  
  qualityMetrics: [
    'Autorité de domaine',
    'Pertinence thématique',
    'Pertinence géographique',
    'Type de lien (follow/nofollow)',
    'Position du lien dans la page',
    'Texte d\'ancrage',
    'Trafic du site référent'
  ],
  
  actionPlan: {
    newOpportunities: 'Contacter 5 nouvelles sources potentielles chaque semaine',
    followUp: 'Relancer les contacts sans réponse après 2 semaines',
    lostBacklinks: 'Contacter le webmaster dans la semaine pour comprendre et résoudre le problème',
    toxicBacklinks: 'Identifier et désavouer les backlinks de mauvaise qualité trimestriellement'
  }
};

// Guide d'implémentation de la stratégie de backlinks locaux
export const localBacklinkImplementationGuide = {
  phase1: {
    title: 'Préparation et recherche',
    steps: [
      'Identifier les pages cibles pour les backlinks (pages de services localisées, études de cas, etc.)',
      'Préparer différentes versions de textes d\'ancrage naturels incluant des mots-clés locaux',
      'Créer une base de données des opportunités de backlinks locaux',
      'Analyser les backlinks des concurrents locaux pour identifier de nouvelles opportunités'
    ],
    duration: '2 semaines'
  },
  
  phase2: {
    title: 'Inscription aux annuaires locaux',
    steps: [
      'Créer des profils complets sur les annuaires locaux prioritaires',
      'Assurer la cohérence des informations (NAP : Nom, Adresse, Téléphone)',
      'Inclure des descriptions uniques avec mots-clés locaux pertinents',
      'Ajouter des photos de qualité et tous les détails possibles'
    ],
    duration: '2 semaines'
  },
  
  phase3: {
    title: 'Développement de partenariats locaux',
    steps: [
      'Contacter les clients satisfaits pour des témoignages et backlinks',
      'Identifier et approcher des entreprises complémentaires pour des partenariats',
      'Proposer des échanges de services ou de contenu',
      'Participer aux événements de networking local'
    ],
    duration: '2-3 mois (continu)'
  },
  
  phase4: {
    title: 'Création de contenu et guest posting',
    steps: [
      'Développer des articles de qualité sur des sujets d\'intérêt local',
      'Proposer des articles invités aux blogs et médias locaux',
      'Créer des études de cas détaillées sur des projets locaux',
      'Partager des infographies et ressources utiles pour obtenir des backlinks naturels'
    ],
    duration: '3-6 mois (continu)'
  },
  
  phase5: {
    title: 'Engagement communautaire',
    steps: [
      'Rejoindre et participer activement aux associations professionnelles locales',
      'Sponsoriser des événements locaux pour obtenir des backlinks',
      'Organiser des webinaires ou ateliers pour les entreprises locales',
      'Contribuer à des projets communautaires pour gagner en visibilité'
    ],
    duration: '6-12 mois (continu)'
  },
  
  phase6: {
    title: 'Suivi et optimisation',
    steps: [
      'Surveiller régulièrement l\'acquisition de nouveaux backlinks',
      'Analyser la qualité et l\'impact des backlinks obtenus',
      'Ajuster la stratégie en fonction des résultats',
      'Désavouer les backlinks toxiques si nécessaire'
    ],
    duration: 'Continu'
  }
};

// Fonction pour générer un rapport sur l'état des backlinks
export const generateBacklinkReport = (
  currentBacklinks: any[],
  newBacklinks: any[],
  lostBacklinks: any[],
  competitorBacklinks: any[]
) => {
  // Implémentation à développer
  return {
    totalBacklinks: currentBacklinks.length,
    newBacklinksCount: newBacklinks.length,
    lostBacklinksCount: lostBacklinks.length,
    topOpportunities: competitorBacklinks.slice(0, 5),
    recommendations: [
      'Contacter les 3 annuaires locaux prioritaires',
      'Relancer les partenaires qui n\'ont pas encore répondu',
      'Proposer un nouvel article invité au blog de la CCI'
    ]
  };
};
