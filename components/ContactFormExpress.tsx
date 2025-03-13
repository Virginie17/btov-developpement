import { useState } from 'react';

export default function ContactFormExpress() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: 'express',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Une erreur est survenue');
      }

      const data = await response.json();
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        budget: 'express',
      });
    } catch (error: any) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nom complet*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            disabled={status === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            disabled={status === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            disabled={status === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Nom de l'entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            disabled={status === 'loading'}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Votre projet*
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          placeholder="Décrivez brièvement votre activité et vos besoins..."
          disabled={status === 'loading'}
        />
      </div>

      <div className="bg-primary-50 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-primary-800">Landing Page Express</h3>
          <div className="text-right">
            <span className="text-sm text-gray-500 line-through">499€</span>
            <span className="ml-2 text-xl font-bold text-primary-600">399€</span>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p>Solution de démarrage rapide pour une présence en ligne professionnelle.</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-primary-700 mb-2">Inclus :</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Page unique avec template prédéfini</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>SEO basique inclus</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Hébergement première année inclus</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Mise en ligne sous 7 jours</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-primary-700 mb-2">Limitations :</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Template prédéfini avec personnalisation limitée</li>
              <li>• Contenu limité à une page unique</li>
              <li>• Sans personnalisation poussée</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-primary-700 mb-2">Options disponibles :</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Paiement en ligne (Stripe/PayPal) : +399€</li>
              <li>• Évolution vers un site complet : À partir de 1 800€</li>
            </ul>
          </div>
        </div>
      </div>

      {status === 'success' && (
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-800">
            Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-sm text-red-800">{errorMessage}</p>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full px-6 py-3 rounded-md text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
            status === 'loading'
              ? 'bg-primary-400 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700'
          }`}
        >
          {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4">
        * Champs obligatoires
      </p>
    </form>
  );
}
