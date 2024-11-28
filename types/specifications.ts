export interface CompanyInfo {
  name: string;
  activities: string;
  revenue_sources: string;
  values: string;
  brand_positioning: string;
  competitive_advantages: string;
  competitors: string;
}

export interface ProjectContact {
  name: string;
  role: string;
  responsibility: string;
  email: string;
  phone: string;
}

export interface ProjectDetails {
  current_website?: string;
  hosting_provider?: string;
  domain_owner: boolean;
  technical_admin?: string;
  objectives: string[];
  business_role: string;
  expected_results: string[];
  available_data?: string;
}

export interface ContentInfo {
  content_types: string[];
  content_provider: string;
  needs_purchase: boolean;
  needs_writing_help: boolean;
}

export interface DesignRequirements {
  brand_changes_needed: boolean;
  existing_elements?: string;
  design_proposals: number;
  specific_requirements?: string;
  desired_style: string;
  site_image: string;
  inspirations?: string[];
  dislikes?: string[];
  needs_icons: boolean;
  page_templates: number;
}

export interface TechnicalRequirements {
  site_type: 'vitrine' | 'e-commerce' | 'communautaire' | 'catalogue' | 'sur-mesure' | 'blog' | 'carte-de-visite';
  payment_methods?: string[];
  delivery_methods?: string[];
  needs_booking: boolean;
  multilingual: boolean;
  multidomains: boolean;
  search_engine: boolean;
  needs_blog: boolean;
  ssl_required: boolean;
  contact_form: boolean;
}

export interface MaintenanceRequirements {
  performance_requirements?: string;
  agency_hosting: boolean;
  technical_maintenance: boolean;
  content_maintenance: boolean;
  training_needed: boolean;
}

export interface AdditionalServices {
  custom_design: boolean;
  web_writing: boolean;
  server_migration: boolean;
  technical_maintenance: boolean;
  seo: boolean;
  hosting: boolean;
  social_media: boolean;
  ads_campaigns: boolean;
}

export interface ProjectTimeline {
  budget?: number;
  deadline: Date;
  additional_info?: string;
}

export interface ClientContact {
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
}

export interface Specifications {
  company_info: CompanyInfo;
  primary_contact: ProjectContact;
  secondary_contact?: ProjectContact;
  project_details: ProjectDetails;
  content_info: ContentInfo;
  design_requirements: DesignRequirements;
  technical_requirements: TechnicalRequirements;
  maintenance_requirements: MaintenanceRequirements;
  additional_services: AdditionalServices;
  timeline: ProjectTimeline;
  client_contact: ClientContact;
}
