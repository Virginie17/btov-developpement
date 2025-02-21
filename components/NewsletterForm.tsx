'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Merci de votre inscription ! Vous recevrez bientôt nos actualités.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Une erreur est survenue lors de l\'inscription');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Une erreur est survenue lors de la connexion au serveur');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            className="w-full px-4 py-3 pr-12 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            disabled={status === 'loading'}
            required
          />
          <motion.span 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Send className="w-5 h-5" />
          </motion.span>
        </div>
        
        <motion.button
          type="submit"
          className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${
            status === 'loading'
              ? 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed'
              : 'bg-primary-500 hover:bg-primary-600 text-white transform hover:scale-[1.02] active:scale-[0.98]'
          }`}
          disabled={status === 'loading'}
          whileTap={{ scale: 0.98 }}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Inscription en cours...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>S'abonner à la newsletter</span>
            </>
          )}
        </motion.button>
      </motion.form>

      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`mt-4 p-4 rounded-lg flex items-start space-x-3 ${
              status === 'success' 
                ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200' 
                : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
            }`}
          >
            {status === 'success' ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            )}
            <span className="text-sm">{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
