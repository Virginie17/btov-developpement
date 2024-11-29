'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Download } from 'lucide-react';

export default function CahierDesCharges() {
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    deadline: '',
    description: '',
    features: [],
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Cahier des Charges</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
          Décrivez moi votre projet en détail pour obtenir une estimation précise
        </p>
        
        {/* Bouton de téléchargement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <a
            href="/documents/cahier-des-charges-site.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Télécharger le modèle de cahier des charges
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-zinc-100 dark:bg-zinc-800 rounded-xl p-8"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Remplissez le formulaire en ligne</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            pour me décrire votre projet
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Type de projet */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Type de projet
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
              value={formData.projectType}
              onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              required
            >
              <option value="">Sélectionnez un type de projet</option>
              <option value="site-vitrine">Site Vitrine</option>
              <option value="e-commerce">Site E-commerce</option>
              <option value="application">Application Web</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Budget estimé
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              required
            >
              <option value="">Sélectionnez une fourchette de budget</option>
              <option value="< 5000">Moins de 5 000€</option>
              <option value="5000-10000">5 000€ - 10 000€</option>
              <option value="10000-20000">10 000€ - 20 000€</option>
              <option value="> 20000">Plus de 20 000€</option>
            </select>
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Date souhaitée de mise en ligne
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
              value={formData.deadline}
              onChange={(e) => setFormData({...formData, deadline: e.target.value})}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description du projet
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 h-32"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
              placeholder="Décrivez votre projet en détail..."
            />
          </div>

          {/* Coordonnées */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nom complet
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Envoyer ma demande
          </button>
        </form>
      </motion.div>
    </div>
  );
}
