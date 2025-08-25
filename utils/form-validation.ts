/**
 * Utilitaires de validation pour les formulaires
 * Ces fonctions peuvent être utilisées à la fois côté client et côté serveur
 */

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  budget?: string;
  _honeypot?: string;
  _submittedAt?: string;
}

/**
 * Valide une adresse email
 * @param email - L'adresse email à valider
 * @returns true si l'email est valide, false sinon
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valide un numéro de téléphone (format international ou français)
 * @param phone - Le numéro de téléphone à valider
 * @returns true si le numéro est valide, false sinon
 */
export const isValidPhone = (phone: string): boolean => {
  if (!phone) return true; // Le téléphone est optionnel
  const cleanPhone = phone.replace(/\s/g, '');
  const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{9,10}$/;
  return phoneRegex.test(cleanPhone);
};

/**
 * Vérifie si une chaîne a une longueur minimale
 * @param value - La chaîne à vérifier
 * @param minLength - La longueur minimale requise
 * @returns true si la chaîne a au moins la longueur minimale, false sinon
 */
export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

/**
 * Valide les données du formulaire de contact
 * @param data - Les données du formulaire à valider
 * @returns Un objet contenant le résultat de la validation et les erreurs éventuelles
 */
export const validateContactForm = (data: ContactFormData): ValidationResult => {
  const errors: Record<string, string> = {};
  
  // Vérification du honeypot (protection anti-spam)
  if (data._honeypot) {
    errors._honeypot = 'Soumission détectée comme spam';
  }
  
  // Vérification du délai de soumission (protection contre les soumissions automatisées)
  if (data._submittedAt) {
    const submittedAt = new Date(data._submittedAt);
    const now = new Date();
    const timeDiff = Math.abs(now.getTime() - submittedAt.getTime()) / 1000;
    
    // Si le formulaire est soumis en moins de 3 secondes, c'est probablement un bot
    if (timeDiff < 3) {
      errors._submittedAt = 'Soumission trop rapide';
    }
    
    // Si la date de soumission est dans le futur, c'est invalide
    if (submittedAt > now) {
      errors._submittedAt = 'Date de soumission invalide';
    }
  }
  
  // Validation du nom
  if (!data.name) {
    errors.name = 'Le nom est requis';
  } else if (!hasMinLength(data.name, 2)) {
    errors.name = 'Le nom doit contenir au moins 2 caractères';
  }
  
  // Validation de l'email
  if (!data.email) {
    errors.email = 'L\'email est requis';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Veuillez entrer une adresse email valide';
  }
  
  // Validation du téléphone (optionnel)
  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Veuillez entrer un numéro de téléphone valide';
  }
  
  // Validation du message
  if (!data.message) {
    errors.message = 'Le message est requis';
  } else if (!hasMinLength(data.message, 10)) {
    errors.message = 'Votre message doit contenir au moins 10 caractères';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

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
