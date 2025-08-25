'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, AlertCircle } from 'lucide-react';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('Email invalide').required('Email requis'),
});

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await schema.validate({ email });
      
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Une erreur est survenue');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue');
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-16 sm:py-24">
      {/* Cercles décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Mail className="w-12 h-12 text-primary-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Restez informé des dernières tendances web
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Recevez mes conseils en développement web, design et marketing digital.
            Une newsletter mensuelle, sans spam.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email professionnel"
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-36"
                disabled={status === 'loading' || status === 'success'}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="absolute right-2 top-2 px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Envoi...
                  </span>
                ) : status === 'success' ? (
                  <span className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    Inscrit !
                  </span>
                ) : (
                  "S'inscrire"
                )}
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              {status === 'error' && errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  {errorMessage}
                </motion.div>
              )}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 text-green-400 text-sm"
                >
                  🎉 Bienvenue ! Vérifiez votre boîte mail pour confirmer votre inscription.
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          <div className="mt-8 text-sm text-gray-400">
            <p>
              En vous inscrivant, vous acceptez de recevoir des emails de BTOV Développement.
              <br />
              Vous pourrez vous désinscrire à tout moment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
