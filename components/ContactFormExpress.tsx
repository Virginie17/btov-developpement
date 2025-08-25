'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getFormFieldProps, getDynamicContentProps } from '@/utils/accessibility';
import { validateContactForm, type ContactFormData } from '@/utils/form-validation';
import { getOptimizedImageProps, getProgressiveImageProps } from '@/utils/image-optimization';

export default function ContactFormExpress() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: 'express',
    _honeypot: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formProgress, setFormProgress] = useState(0);
  const [ctaVariant, setCtaVariant] = useState<'green' | 'blue'>('blue');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // A/B testing for CTA buttons
  useEffect(() => {
    // Randomly select a CTA variant for A/B testing
    setCtaVariant(Math.random() > 0.5 ? 'green' : 'blue');
  }, []);

  // Calculate form completion progress
  useEffect(() => {
    const requiredFields = ['name', 'email', 'message'];
    const completedFields = requiredFields.filter(field => {
      const value = formData[field as keyof typeof formData];
      return typeof value === 'string' && value.trim().length > 0;
    });
    setFormProgress(Math.floor((completedFields.length / requiredFields.length) * 100));
  }, [formData]);

  // Validate form fields using our validation utility
  useEffect(() => {
    const { isValid, errors } = validateContactForm(formData);
    setFormErrors(errors);
    setIsFormValid(isValid);
  }, [formData]);

  // Réinitialiser le formulaire après une soumission réussie
  useEffect(() => {
    if (formSubmitted && status === 'success') {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted, status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation check before submission
    if (!isFormValid) {
      setErrorMessage('Veuillez corriger les erreurs dans le formulaire avant de l\'envoyer.');
      return;
    }
    
    setStatus('loading');
    setErrorMessage('');

    try {
      // Add CSRF protection token if available
      const csrfToken = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content;
      
      // Add submission timestamp for bot detection
      const submissionData = {
        ...formData,
        _submittedAt: new Date().toISOString(),
      };
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(csrfToken && { 'X-CSRF-Token': csrfToken }),
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        // Afficher les erreurs détaillées si disponibles
        if (data.details) {
          const errorDetails = Object.values(data.details).join(', ');
          throw new Error(errorDetails || data.error || 'Une erreur est survenue');
        } else {
          throw new Error(data.error || 'Une erreur est survenue');
        }
      }

      setStatus('success');
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        budget: 'express',
        _honeypot: '',
      });
      
      // Track form submission for analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'form_submission', {
          'event_category': 'Contact',
          'event_label': 'Landing Page Express'
        });
      }
    } catch (error: any) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Featured testimonial for the form
  const featuredTestimonial = {
    name: 'Sophie Martin',
    company: 'Restaurant Le Bistrot Parisien',
    position: 'Propriétaire',
    content: 'La landing page créée par BTOV a complètement transformé notre présence en ligne. Nous avons vu une augmentation de 40% des réservations en ligne dès le premier mois!',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  };

  // Generate unique IDs for form fields
  const fieldIds = {
    name: 'contact-name',
    email: 'contact-email',
    phone: 'contact-phone',
    company: 'contact-company',
    message: 'contact-message',
    budget: 'contact-budget'
  };

  return (
    <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
      {/* Form Column - Takes 3/5 of the space */}
      <div className="md:col-span-3">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2" id="form-heading">Démarrez votre projet</h2>
          <p className="text-gray-600">Remplissez le formulaire ci-dessous pour lancer votre Landing Page Express</p>
          
          {/* Progress bar */}
          <div className="mt-4 mb-6">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span id="progress-label">Progression</span>
              <span aria-hidden="true">{formProgress}%</span>
            </div>
            <div 
              className="w-full bg-gray-200 rounded-full h-2.5"
              role="progressbar"
              aria-valuenow={formProgress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-labelledby="progress-label"
            >
              <div 
                className="bg-primary-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${formProgress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2" aria-hidden="true">
              <span className="text-xs text-gray-500">Informations</span>
              <span className="text-xs text-gray-500">Terminé</span>
            </div>
          </div>
          
          {/* Form status messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg"
              role="alert"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p>Votre message a été envoyé avec succès ! Nous vous contacterons sous 24h.</p>
              </div>
            </motion.div>
          )}
          
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg"
              role="alert"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p>{errorMessage}</p>
              </div>
            </motion.div>
          )}
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6" aria-labelledby="form-heading" noValidate>
            {/* Hidden honeypot field to prevent spam */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="honeypot">Ne pas remplir ce champ</label>
              <input type="text" id="honeypot" name="_honeypot" tabIndex={-1} autoComplete="off" />
            </div>
            
            {/* Name field */}
            <div>
              <label 
                htmlFor={fieldIds.name} 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id={fieldIds.name}
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  formErrors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                aria-required="true"
                aria-invalid={!!formErrors.name}
                aria-describedby={formErrors.name ? `${fieldIds.name}-error` : undefined}
                autoComplete="name"
              />
              {formErrors.name && (
                <p id={`${fieldIds.name}-error`} className="mt-1 text-sm text-red-600">
                  {formErrors.name}
                </p>
              )}
            </div>
            
            {/* Email field */}
            <div>
              <label 
                htmlFor={fieldIds.email} 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id={fieldIds.email}
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  formErrors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                aria-required="true"
                aria-invalid={!!formErrors.email}
                aria-describedby={formErrors.email ? `${fieldIds.email}-error` : undefined}
                autoComplete="email"
              />
              {formErrors.email && (
                <p id={`${fieldIds.email}-error`} className="mt-1 text-sm text-red-600">
                  {formErrors.email}
                </p>
              )}
            </div>
            
            {/* Phone field */}
            <div>
              <label 
                htmlFor={fieldIds.phone} 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Téléphone (optionnel)
              </label>
              <input
                type="tel"
                id={fieldIds.phone}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  formErrors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-invalid={!!formErrors.phone}
                aria-describedby={formErrors.phone ? `${fieldIds.phone}-error` : undefined}
                autoComplete="tel"
              />
              {formErrors.phone && (
                <p id={`${fieldIds.phone}-error`} className="mt-1 text-sm text-red-600">
                  {formErrors.phone}
                </p>
              )}
            </div>
            
            {/* Company field */}
            <div>
              <label 
                htmlFor={fieldIds.company} 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Entreprise (optionnel)
              </label>
              <input
                type="text"
                id={fieldIds.company}
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                autoComplete="organization"
              />
            </div>
            
            {/* Message field */}
            <div>
              <label 
                htmlFor={fieldIds.message} 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id={fieldIds.message}
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  formErrors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                aria-required="true"
                aria-invalid={!!formErrors.message}
                aria-describedby={formErrors.message ? `${fieldIds.message}-error` : undefined}
              ></textarea>
              {formErrors.message && (
                <p id={`${fieldIds.message}-error`} className="mt-1 text-sm text-red-600">
                  {formErrors.message}
                </p>
              )}
            </div>
            
            {/* Budget field */}
            <div>
              <label 
                htmlFor={fieldIds.budget} 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Budget
              </label>
              <select
                id={fieldIds.budget}
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="express">Landing Page Express (399€)</option>
                <option value="express-seo">Landing Page Express + SEO (598€)</option>
                <option value="express-payment">Landing Page Express + Paiement (698€)</option>
                <option value="custom">Site complet sur mesure (devis)</option>
              </select>
            </div>
            
            {/* Submit button */}
            <div>
              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  status === 'loading'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : ctaVariant === 'green'
                    ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                    : 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-500'
                }`}
                disabled={status === 'loading'}
                aria-busy={status === 'loading'}
                {...getDynamicContentProps({ loading: status === 'loading' })}
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  'Envoyer ma demande'
                )}
              </button>
              <p className="mt-2 text-xs text-gray-500 text-center">
                En soumettant ce formulaire, vous acceptez notre{' '}
                <Link href="/politique-confidentialite" className="text-primary-600 hover:text-primary-700 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1">
                  politique de confidentialité
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      
      {/* Testimonial and Info Column - Takes 2/5 of the space */}
      <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg">
        {/* Featured testimonial */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4" id="testimonial-heading">Ce que nos clients disent</h3>
          <div className="bg-white p-4 rounded-lg shadow-sm" role="region" aria-labelledby="testimonial-heading">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
                {featuredTestimonial.image ? (
                  <Image 
                    src={featuredTestimonial.image} 
                    alt={`Photo de ${featuredTestimonial.name}`} 
                    width={40} 
                    height={40} 
                    className="w-full h-full object-cover"
                    {...getOptimizedImageProps(featuredTestimonial.name)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-600" aria-hidden="true">
                    {featuredTestimonial.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <p className="font-medium text-gray-900">{featuredTestimonial.name}</p>
                <p className="text-sm text-gray-600">{featuredTestimonial.position}, {featuredTestimonial.company}</p>
              </div>
            </div>
            <div className="flex mb-3" aria-label={`Note: ${featuredTestimonial.rating} sur 5 étoiles`}>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < featuredTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic text-sm mb-2">"{featuredTestimonial.content}"</p>
          </div>
        </div>
        
        {/* Before/After transformation showcase */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800" id="transformations-heading">Transformations réalisées</h3>
          
          <div className="space-y-6" role="region" aria-labelledby="transformations-heading">
            {/* Restaurant transformation */}
            <Suspense fallback={<div className="h-40 bg-gray-100 animate-pulse rounded-lg" aria-hidden="true"></div>}>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Avant</p>
                    <div className="bg-gray-100 h-24 flex items-center justify-center rounded">
                      <span className="text-gray-400 text-xs">Site basique</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-gray-500 mb-1">Après</p>
                    <div className="bg-primary-50 h-24 flex items-center justify-center rounded">
                      <span className="text-primary-600 text-xs">Landing Page Express</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 border-t border-gray-200">
                  <h4 className="text-sm font-medium">Restaurant "Le Bistrot Parisien"</h4>
                  <p className="text-xs text-gray-600">+40% de réservations en ligne</p>
                </div>
              </div>
            </Suspense>
            
            {/* Menuiserie transformation */}
            <Suspense fallback={<div className="h-40 bg-gray-100 animate-pulse rounded-lg" aria-hidden="true"></div>}>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Avant</p>
                    <div className="bg-gray-100 h-24 flex items-center justify-center rounded">
                      <span className="text-gray-400 text-xs">Carte de visite</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-gray-500 mb-1">Après</p>
                    <div className="bg-primary-50 h-24 flex items-center justify-center rounded">
                      <span className="text-primary-600 text-xs">Landing Page Express</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 border-t border-gray-200">
                  <h4 className="text-sm font-medium">Menuiserie Dubois</h4>
                  <p className="text-xs text-gray-600">Demandes de devis qualifiées chaque semaine</p>
                </div>
              </div>
            </Suspense>
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-3" id="trust-badges-heading">Ils nous font confiance</h3>
          <div className="flex flex-wrap justify-center gap-4" role="region" aria-labelledby="trust-badges-heading">
            <Image 
              src="/images/client-logo-1.svg" 
              alt="Client 1" 
              width={32} 
              height={32} 
              className="h-8 grayscale hover:grayscale-0 transition-all"
              {...getOptimizedImageProps("Logo client 1")}
            />
            <Image 
              src="/images/client-logo-2.svg" 
              alt="Client 2" 
              width={32} 
              height={32} 
              className="h-8 grayscale hover:grayscale-0 transition-all"
              {...getOptimizedImageProps("Logo client 2")}
            />
            <Image 
              src="/images/client-logo-3.svg" 
              alt="Client 3" 
              width={32} 
              height={32} 
              className="h-8 grayscale hover:grayscale-0 transition-all"
              {...getOptimizedImageProps("Logo client 3")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
