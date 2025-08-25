/**
 * Tests pour les fonctions de validation de formulaire
 * 
 * Pour exécuter les tests:
 * npm test -- form-validation
 */

import { 
  isValidEmail, 
  isValidPhone, 
  hasMinLength, 
  validateContactForm, 
  sanitizeFormData,
  type ContactFormData 
} from '../utils/form-validation';

describe('Fonctions de validation unitaires', () => {
  describe('isValidEmail', () => {
    test('doit valider les emails corrects', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('contact@btov-developpement.fr')).toBe(true);
      expect(isValidEmail('user.name+tag@example.co.uk')).toBe(true);
    });

    test('doit rejeter les emails incorrects', () => {
      expect(isValidEmail('test')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('test@example')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('test@.com')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    test('doit valider les numéros de téléphone corrects', () => {
      expect(isValidPhone('0612345678')).toBe(true);
      expect(isValidPhone('06 12 34 56 78')).toBe(true);
      expect(isValidPhone('+33612345678')).toBe(true);
      expect(isValidPhone('+33 6 12 34 56 78')).toBe(true);
    });

    test('doit rejeter les numéros de téléphone incorrects', () => {
      expect(isValidPhone('061234')).toBe(false);
      expect(isValidPhone('abcdefghij')).toBe(false);
      expect(isValidPhone('+336')).toBe(false);
    });

    test('doit accepter les valeurs vides (champ optionnel)', () => {
      expect(isValidPhone('')).toBe(true);
    });
  });

  describe('hasMinLength', () => {
    test('doit vérifier correctement la longueur minimale', () => {
      expect(hasMinLength('abc', 3)).toBe(true);
      expect(hasMinLength('abc', 2)).toBe(true);
      expect(hasMinLength('abc', 4)).toBe(false);
    });

    test('doit ignorer les espaces en début et fin', () => {
      expect(hasMinLength('  abc  ', 3)).toBe(true);
      expect(hasMinLength('  ab  ', 3)).toBe(false);
    });
  });
});

describe('validateContactForm', () => {
  const validFormData: ContactFormData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '0612345678',
    company: 'ACME Inc',
    message: 'Ceci est un message de test avec une longueur suffisante',
    budget: 'express',
  };

  test('doit valider un formulaire correct', () => {
    const result = validateContactForm(validFormData);
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
  });

  test('doit détecter les champs requis manquants', () => {
    const result = validateContactForm({
      ...validFormData,
      name: '',
      email: '',
    });
    
    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBeDefined();
    expect(result.errors.email).toBeDefined();
  });

  test('doit valider le format de l\'email', () => {
    const result = validateContactForm({
      ...validFormData,
      email: 'invalid-email',
    });
    
    expect(result.isValid).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  test('doit valider la longueur du message', () => {
    const result = validateContactForm({
      ...validFormData,
      message: 'Court',
    });
    
    expect(result.isValid).toBe(false);
    expect(result.errors.message).toBeDefined();
  });

  test('doit détecter le honeypot rempli (anti-spam)', () => {
    const result = validateContactForm({
      ...validFormData,
      _honeypot: 'Je suis un spam',
    });
    
    expect(result.isValid).toBe(false);
    expect(result.errors._honeypot).toBeDefined();
  });

  test('doit détecter une soumission trop rapide (anti-bot)', () => {
    // Date il y a 2 secondes (trop rapide)
    const tooFast = new Date();
    tooFast.setSeconds(tooFast.getSeconds() - 2);
    
    const result = validateContactForm({
      ...validFormData,
      _submittedAt: tooFast.toISOString(),
    });
    
    expect(result.isValid).toBe(false);
    expect(result.errors._submittedAt).toBeDefined();
  });

  test('doit accepter une soumission avec un délai normal', () => {
    // Date il y a 5 secondes (délai normal)
    const normalDelay = new Date();
    normalDelay.setSeconds(normalDelay.getSeconds() - 5);
    
    const result = validateContactForm({
      ...validFormData,
      _submittedAt: normalDelay.toISOString(),
    });
    
    expect(result.isValid).toBe(true);
  });
});

describe('sanitizeFormData', () => {
  test('doit échapper les caractères HTML spéciaux', () => {
    const unsafeData: ContactFormData = {
      name: '<script>alert("XSS")</script>',
      email: 'test@example.com',
      message: 'Message avec des <tags> et des & caractères spéciaux',
      company: 'Company & Co.',
    };
    
    const sanitized = sanitizeFormData(unsafeData);
    
    expect(sanitized.name).toBe('&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;');
    expect(sanitized.email).toBe('test@example.com');
    expect(sanitized.message).toBe('Message avec des &lt;tags&gt; et des &amp; caractères spéciaux');
    expect(sanitized.company).toBe('Company &amp; Co.');
  });

  test('ne doit pas modifier les données déjà sécurisées', () => {
    const safeData: ContactFormData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Message normal sans caractères spéciaux',
    };
    
    const sanitized = sanitizeFormData(safeData);
    
    expect(sanitized).toEqual(safeData);
  });
});
