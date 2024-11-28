import * as yup from 'yup';

export const specificationSchema = yup.object().shape({
  // Informations entreprise
  company_info: yup.object().shape({
    name: yup.string().required('Le nom de l\'entreprise est requis'),
    activities: yup.string().required('Le secteur d\'activité est requis'),
    revenue_sources: yup.string().required('Les sources de revenus sont requises'),
    values: yup.string().required('Les valeurs de l\'entreprise sont requises'),
    brand_positioning: yup.string().required('Le positionnement de marque est requis'),
    competitive_advantages: yup.string().required('Les avantages concurrentiels sont requis'),
    competitors: yup.string().required('Les concurrents sont requis'),
  }),

  // Contacts projet
  primary_contact: yup.object().shape({
    name: yup.string().required('Le nom du contact est requis'),
    role: yup.string().required('Le rôle du contact est requis'),
    responsibility: yup.string().required('La responsabilité du contact est requise'),
    email: yup.string().email('Email invalide').required('L\'email est requis'),
    phone: yup.string().matches(/^[0-9+\s-]{10,}$/, 'Numéro de téléphone invalide'),
  }),

  secondary_contact: yup.object().shape({
    name: yup.string(),
    role: yup.string(),
    responsibility: yup.string(),
    email: yup.string().email('Email invalide'),
    phone: yup.string().matches(/^[0-9+\s-]{10,}$/, 'Numéro de téléphone invalide'),
  }).optional(),

  // Autres champs de validation selon l'interface Specifications
  project_details: yup.object().shape({
    current_website: yup.string(),
    hosting_provider: yup.string(),
    domain_owner: yup.boolean().required('Propriété du domaine requise'),
    technical_admin: yup.string(),
    objectives: yup.array().of(yup.string()).min(1, 'Au moins un objectif est requis'),
    business_role: yup.string().required('Le rôle commercial est requis'),
    expected_results: yup.array().of(yup.string()).min(1, 'Au moins un résultat attendu est requis'),
    available_data: yup.string(),
  }),

  // Continuer avec les autres champs de l'interface Specifications
  content_info: yup.object().shape({
    content_types: yup.array().of(yup.string()).min(1, 'Types de contenu requis'),
    content_provider: yup.string().required('Fournisseur de contenu requis'),
    needs_purchase: yup.boolean().required('Besoin d\'achat de contenu requis'),
    needs_writing_help: yup.boolean().required('Besoin d\'aide à la rédaction requis'),
  }),

  // Ajouter les validations pour les autres champs de l'interface
  design_requirements: yup.object().shape({
    brand_changes_needed: yup.boolean().required('Changements de marque requis'),
    design_proposals: yup.number().min(1, 'Au moins une proposition de design'),
    site_image: yup.string().required('Image du site requise'),
    desired_style: yup.string().required('Style désiré requis'),
    needs_icons: yup.boolean().required('Besoin d\'icônes requis'),
    page_templates: yup.number().min(1, 'Au moins un modèle de page'),
  }),

  // Continuer avec les autres champs...
  technical_requirements: yup.object().shape({
    site_type: yup.string().oneOf(['vitrine', 'e-commerce', 'communautaire', 'catalogue', 'sur-mesure', 'blog', 'carte-de-visite']).required('Type de site requis'),
  }),

  // Ajouter les validations pour maintenance_requirements, additional_services, timeline, client_contact
  maintenance_requirements: yup.object().shape({
    agency_hosting: yup.boolean().required('Hébergement par agence requis'),
    technical_maintenance: yup.boolean().required('Maintenance technique requise'),
    content_maintenance: yup.boolean().required('Maintenance de contenu requise'),
    training_needed: yup.boolean().required('Besoin de formation requis'),
  }),

  additional_services: yup.object().shape({
    custom_design: yup.boolean().required('Design personnalisé requis'),
    web_writing: yup.boolean().required('Rédaction web requise'),
    technical_maintenance: yup.boolean().required('Maintenance technique requise'),
    seo: yup.boolean().required('SEO requis'),
  }),

  timeline: yup.object().shape({
    deadline: yup.date().required('Date limite requise'),
    budget: yup.number().positive('Budget doit être positif'),
  }),

  client_contact: yup.object().shape({
    name: yup.string().required('Nom requis'),
    company: yup.string().required('Entreprise requise'),
    email: yup.string().email('Email invalide').required('Email requis'),
    phone: yup.string().required('Téléphone requis'),
    address: yup.string().required('Adresse requise'),
    city: yup.string().required('Ville requise'),
    postal_code: yup.string().required('Code postal requis'),
  }),
});
