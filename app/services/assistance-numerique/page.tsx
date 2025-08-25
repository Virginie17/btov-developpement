import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import AccessibilityProvider from '@/components/AccessibilityProvider';

export const metadata: Metadata = {
  title: 'Assistance Numérique - BTOV Développement',
  description: 'Accompagnement personnalisé pour seniors, personnes en situation de handicap et toute personne en difficulté avec l\'informatique dans leurs démarches administratives et l\'usage du numérique.',
};

export default function AssistanceNumerique() {
  return (
    <AccessibilityProvider>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Assistance Numérique Personnalisée
          </h1>
          <p className="text-xl text-primary-600 mb-6">
            Le numérique devient facile, à votre rythme
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Nous aidons les seniors, les personnes en situation de handicap et toute personne en difficulté avec l'informatique et internet à rester autonomes avec le numérique.
          </p>
          <div className="relative w-full max-w-2xl h-64 mx-auto mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/personne agé avec ordinateur.jpg"
              alt="Accompagnement numérique personnalisé"
              fill
              className="object-cover"
              priority
            />
          </div>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all"
            role="button"
          >
            👉 Prenez rendez-vous dès aujourd'hui
          </a>
        </section>

        <div className="space-y-16">
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">
              Nos Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Aide administrative numérique</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">✔</span>
                    <span>Création et gestion de comptes (Ameli, impôts, CAF, retraite…)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✔</span>
                    <span>Aide à la déclaration en ligne</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✔</span>
                    <span>Suivi des démarches et archivage numérique</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Assistance informatique</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">✔</span>
                    <span>Prise en main d'ordinateur, tablette et smartphone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✔</span>
                    <span>Installation et mise à jour d'applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✔</span>
                    <span>Aide aux appels vidéos (WhatsApp, Zoom, Messenger…)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">
              Formations personnalisées
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">✔</span>
                <span>Cours particuliers adaptés au rythme de chacun</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔</span>
                <span>Ateliers collectifs conviviaux</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔</span>
                <span>Supports simples et visuels pour progresser sereinement</span>
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">
              Pourquoi nous choisir ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-primary-600">✨</span>
                  <span><strong>Simple et accessible :</strong> explications claires et sans jargon</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary-600">🎯</span>
                  <span><strong>Patience et pédagogie :</strong> accompagnement à votre rythme</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary-600">🏠</span>
                  <span><strong>Proximité :</strong> interventions à domicile dans la région</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary-600">🤝</span>
                  <span><strong>Confiance :</strong> accompagnement bienveillant et respectueux</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">
              Tarifs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg text-center hover:border-primary-500 transition-colors">
                <h3 className="text-xl font-semibold mb-4">À l'heure</h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">30€</p>
                <p className="text-gray-600">Séance ponctuelle</p>
              </div>
              <div className="p-6 border rounded-lg text-center hover:border-primary-500 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Forfait 3h/mois</h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">80€</p>
                <p className="text-gray-600">Soit 26,67€/h</p>
              </div>
              <div className="p-6 border rounded-lg text-center hover:border-primary-500 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Forfait 5h/mois</h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">120€</p>
                <p className="text-gray-600">Soit 24€/h</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">
              👩‍💻 À propos
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/photo.webp"
                  alt="Virginie - Experte en assistance numérique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow space-y-4">
                <p className="text-lg">Je m'appelle Virginie, passionnée par le numérique et le contact humain.</p>
                <p>J'ai créé ce service pour aider les seniors, les personnes en situation de handicap et toute personne en difficulté avec l'informatique à retrouver leur autonomie dans leurs démarches administratives et l'usage du numérique.</p>
                <p>Avec patience et pédagogie, je vous accompagne pas à pas, à votre rythme.</p>
              </div>
            </div>
          </section>

          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              role="button"
              aria-label="Contactez-nous pour plus d'informations"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </main>
    </AccessibilityProvider>
  );
}
