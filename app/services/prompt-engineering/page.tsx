import React from 'react';
import Image from 'next/image';

export default function PromptEngineeringPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Service de Prompt Engineering</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Qu&apos;est-ce que le Prompt Engineering ?</h2>
          <p className="text-gray-700">
            Le Prompt Engineering est l&apos;art et la science de concevoir des instructions précises et efficaces pour les modèles d&apos;intelligence artificielle. 
            C&apos;est une compétence essentielle qui permet d&apos;obtenir les meilleurs résultats possibles des systèmes d&apos;IA comme ChatGPT, DALL-E, ou Midjourney.
          </p>
        </div>
        
        <div className="relative h-64 rounded-lg overflow-hidden">
          <Image
            src="/images/prompt-engineering.jpg"
            alt="Prompt Engineering Illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Mes Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Optimisation de Prompts</h3>
            <p className="text-gray-700">
              Création et optimisation de prompts pour maximiser la qualité et la pertinence des réponses de l&apos;IA.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Formation</h3>
            <p className="text-gray-700">
              Formation personnalisée pour maîtriser les techniques de prompt engineering et tirer le meilleur parti des outils d&apos;IA.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Consultation</h3>
            <p className="text-gray-700">
              Conseil stratégique pour l&apos;intégration efficace des outils d&apos;IA dans votre workflow professionnel.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Pourquoi Choisir Mes Services ?</h2>
        <ul className="space-y-4 list-disc list-inside text-gray-700">
          <li>Expertise approfondie dans l&apos;interaction avec les modèles d&apos;IA les plus récents</li>
          <li>Approche personnalisée adaptée à vos besoins spécifiques</li>
          <li>Résultats mesurables et optimisation continue</li>
          <li>Support et suivi professionnel</li>
          <li>Veille technologique constante sur les dernières avancées en IA</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Commencez Maintenant</h2>
        <p className="text-gray-700 mb-6">
          Prêt à optimiser votre utilisation de l&apos;IA ? Contactez-moi pour discuter de votre projet 
          et découvrir comment le prompt engineering peut transformer votre approche de l&apos;IA.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Me Contacter
        </a>
      </div>
    </div>
  );
}
