import { ContactFormData } from './form-validation';

/**
 * Sanitize les données du formulaire pour éviter les injections
 * @param data - Les données du formulaire à sanitizer
 * @returns Les données sanitizées
 */
export const sanitizeFormData = (data: ContactFormData): ContactFormData => {
  const sanitized: ContactFormData = { ...data };
  
  // Fonction pour sanitizer une chaîne
  const sanitizeString = (str: string): string => {
    if (!str) return str;
    // Échappe les caractères HTML spéciaux
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };
  
  // Sanitize chaque champ
  Object.keys(sanitized).forEach(key => {
    const value = sanitized[key as keyof ContactFormData];
    if (typeof value === 'string') {
      sanitized[key as keyof ContactFormData] = sanitizeString(value);
    }
  });
  
  return sanitized;
};
