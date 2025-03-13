'use client';

import Image from 'next/image';

export default function ArtisanAfter() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#2C1810]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/landing-page-express/menuiserie-hero.webp"
          alt="Atelier de menuiserie artisanale"
          fill
          className="object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Menuiserie Dubois
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Artisan menuisier depuis 30 ans, spécialiste du sur-mesure et de la restauration de meubles à La Rochelle
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg hover:bg-primary-700 transition-colors">
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/landing-page-express/menuiserie-custom.webp"
                  alt="Fabrication sur mesure"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Fabrication sur mesure</h3>
              <p className="text-gray-600">Meubles et agencements personnalisés selon vos besoins</p>
            </div>
            <div className="text-center space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/landing-page-express/menuiserie-restoration.webp"
                  alt="Restauration"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Restauration</h3>
              <p className="text-gray-600">Redonnez vie à vos meubles anciens</p>
            </div>
            <div className="text-center space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/landing-page-express/menuiserie-interior.webp"
                  alt="Agencement"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Agencement intérieur</h3>
              <p className="text-gray-600">Solutions complètes pour optimiser votre espace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Réalisations</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={`/images/landing-page-express/realisation-${i}.webp`}
                  alt={`Réalisation ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="border-2 border-primary-600 text-primary-600 px-6 py-2 rounded-full hover:bg-primary-50 transition-colors">
              Voir plus de réalisations
            </button>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ils nous font confiance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "Un travail d'une qualité exceptionnelle. M. Dubois a su parfaitement restaurer notre armoire ancienne."
              </p>
              <p className="font-semibold">Marie L.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "Très professionnel, à l'écoute et force de proposition. Je recommande vivement !"
              </p>
              <p className="font-semibold">Pierre M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact et Devis */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Demandez un devis gratuit</h2>
          <form className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de projet
              </label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500">
                <option>Fabrication sur mesure</option>
                <option>Restauration</option>
                <option>Agencement intérieur</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description du projet
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="Décrivez votre projet en quelques mots..."
              />
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Envoyer ma demande
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nos Certifications</h2>
          <div className="flex justify-center items-center gap-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <Image
                src="/images/landing-page-express/certification-1.webp"
                alt="Certification Artisan"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <Image
                src="/images/landing-page-express/certification-2.webp"
                alt="Label Qualité"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">
              06 12 34 56 78<br />
              contact@menuiserie-dubois.fr
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Adresse</h3>
            <p className="text-gray-600">
              45 rue des Artisans<br />
              17000 La Rochelle
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Horaires</h3>
            <p className="text-gray-600">
              Lundi - Vendredi<br />
              8h30 - 12h | 14h - 18h
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
