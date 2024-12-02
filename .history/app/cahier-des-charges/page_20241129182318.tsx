'use client';
import { useState } from 'react';
import Link from 'next/link';

const sendSpecifications = async (data: any) => {
  const response = await fetch('/api/specifications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to send specifications');
  }
  
  return response.json();
};

export default function CahierDesCharges() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    deadline: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendSpecifications(formData);
      alert('Votre demande a été envoyée avec succès!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        deadline: '',
        description: '',
      });
    } catch (error) {
      alert('Une erreur est survenue lors de l\'envoi du formulaire.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Cahier des Charges</h1>
      
      {/* Bouton de téléchargement */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <Link 
          href="/documents/cahier-des-charges-site.pdf"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Téléchargez le modèle de cahier des charges
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nom complet</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Entreprise</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Type de projet</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">Sélectionnez une option</option>
              <option value="site-vitrine">Site Vitrine</option>
              <option value="e-commerce">E-commerce</option>
              <option value="application">Application Web</option>
              <option value="refonte">Refonte de site</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Budget estimé</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">Sélectionnez une option</option>
              <option value="< 5000">Moins de 5000€</option>
              <option value="5000-10000">5000€ - 10000€</option>
              <option value="10000-20000">10000€ - 20000€</option>
              <option value="> 20000">Plus de 20000€</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Date souhaitée de livraison</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description du projet</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={6}
            className="w-full p-3 border rounded-lg"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors"
        >
          Envoyer ma demande
        </button>
      </form>
    </div>
  );
}
