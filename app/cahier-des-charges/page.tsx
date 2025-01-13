'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cahierChargesJsonLd } from '../metadata';
import Link from 'next/link';
import PageJsonLd from '../../components/PageJsonLd';

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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendSpecifications(formData);
      setShowSuccess(true);
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
      // Masquer le message après 5 secondes
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
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
    <>
      <PageJsonLd data={cahierChargesJsonLd} />
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Cahier des Charges
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Définissons ensemble les contours de votre projet digital
          </p>
        
          {/* Bouton de téléchargement */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <Link 
              href="/documents/cahier-des-charges-site.pdf"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg 
                className="w-6 h-6 mr-3" 
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
              Téléchargez le modèle
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-80 relative">
            {showSuccess && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="mx-4 p-4 bg-green-100 border border-green-200 text-green-700 rounded-lg shadow-lg flex items-center justify-center space-x-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Message envoyé avec succès !</span>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-50 border-b-2 border-gray-300 rounded-t-lg focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-50 border-b-2 border-gray-300 rounded-t-lg focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-50 border-b-2 border-gray-300 rounded-t-lg focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Entreprise</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-50 border-b-2 border-gray-300 rounded-t-lg focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Type de projet</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-50 border-b-2 border-gray-300 rounded-t-lg focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-300 appearance-none"
                      required
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="site-vitrine">Site Vitrine</option>
                      <option value="e-commerce">E-commerce</option>
                      <option value="application-web">Application Web</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Budget estimé</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-50 border-b-2 border-gray-300 rounded-t-lg focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-300 appearance-none"
                      required
                    >
                      <option value="">Sélectionnez une fourchette</option>
                      <option value="< 5k">Moins de 5 000€</option>
                      <option value="5k-10k">5 000€ - 10 000€</option>
                      <option value="10k-20k">10 000€ - 20 000€</option>
                      <option value="> 20k">Plus de 20 000€</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Date limite souhaitée</label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-50 border-b-2 border-gray-300 rounded-t-lg focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Description du projet</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-4 bg-gray-50 border-b-2 border-gray-300 rounded-t-lg focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                >
                  Envoyer le cahier des charges
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
