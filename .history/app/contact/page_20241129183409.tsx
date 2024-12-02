'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-5xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Parlons de votre projet
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Je suis là pour transformer vos idées en solutions digitales performantes
        </p>

        <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-80">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                  Nom complet
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full p-4 bg-gray-50 border-b-2 border-gray-300 rounded-t-lg focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full p-4 bg-gray-50 border-b-2 border-gray-300 rounded-t-lg focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700">
                  Sujet
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full p-4 bg-gray-50 border-b-2 border-gray-300 rounded-t-lg focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-300"
                    placeholder="Votre sujet"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full p-4 bg-gray-50 border-b-2 border-gray-300 rounded-t-lg focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>
            </div>

            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg text-center">
                Message envoyé avec succès !
              </div>
            )}
            
            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg text-center">
                Une erreur est survenue. Veuillez réessayer.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}