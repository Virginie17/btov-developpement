'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  name: yup.string().required('Votre nom est requis'),
  email: yup.string().email('Email invalide').required('Email requis'),
  website: yup.string().url('URL invalide').required('URL de votre site requise'),
  goals: yup.string().required('Vos objectifs sont requis'),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function AuditGratuit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Envoyer les données à votre API
      const response = await fetch('/api/audit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Audit Gratuit de Votre Site Web
          </h1>
          <p className="text-xl text-gray-300">
            Recevez une analyse détaillée et des recommandations personnalisées
            pour améliorer votre présence en ligne
          </p>
        </motion.div>

        {!isSuccess ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
                  <p className="text-gray-400">Analyse complète des temps de chargement et optimisations possibles</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">SEO</h3>
                  <p className="text-gray-400">Évaluation de votre référencement et recommandations d'amélioration</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Mobile</h3>
                  <p className="text-gray-400">Test de compatibilité mobile et expérience utilisateur responsive</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Sécurité</h3>
                  <p className="text-gray-400">Vérification des vulnérabilités et bonnes pratiques de sécurité</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                  Nom complet
                </label>
                <input
                  {...register('name')}
                  type="text"
                  className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Jean Dupont"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  Email professionnel
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="jean@entreprise.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-200">
                  URL de votre site
                </label>
                <input
                  {...register('website')}
                  type="url"
                  className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="https://www.votresite.com"
                />
                {errors.website && (
                  <p className="mt-1 text-sm text-red-400">{errors.website.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-200">
                  Vos objectifs principaux
                </label>
                <textarea
                  {...register('goals')}
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Quels sont vos objectifs d'amélioration ?"
                />
                {errors.goals && (
                  <p className="mt-1 text-sm text-red-400">{errors.goals.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Obtenir mon audit gratuit'}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Demande envoyée avec succès !</h2>
            <p className="text-gray-300 mb-6">
              Merci de votre intérêt ! Je vais analyser votre site et vous envoyer
              un rapport détaillé sous 48h ouvrées.
            </p>
            <p className="text-sm text-gray-400">
              En attendant, n'hésitez pas à consulter{' '}
              <a href="/blog" className="text-primary-400 hover:text-primary-300 underline">
                mes articles
              </a>{' '}
              pour découvrir mes conseils en développement web.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
