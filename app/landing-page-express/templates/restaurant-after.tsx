'use client';

import Image from 'next/image';

export default function RestaurantAfter() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/landing-page-express/restaurant-hero.webp"
          alt="Ambiance du Bistrot Parisien"
          fill
          className="object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Le Bistrot Parisien
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Une expérience gastronomique authentique au cœur de Paris
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg hover:bg-primary-700 transition-colors">
              Réserver une table
            </button>
          </div>
        </div>
      </div>

      {/* Menu Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/landing-page-express/entree.webp"
                  alt="Nos entrées"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Entrées</h3>
              <p className="text-gray-600">À partir de 12€</p>
            </div>
            <div className="text-center space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/landing-page-express/plat.webp"
                  alt="Nos plats"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Plats</h3>
              <p className="text-gray-600">À partir de 24€</p>
            </div>
            <div className="text-center space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/landing-page-express/dessert.webp"
                  alt="Nos desserts"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Desserts</h3>
              <p className="text-gray-600">À partir de 9€</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="border-2 border-primary-600 text-primary-600 px-6 py-2 rounded-full hover:bg-primary-50 transition-colors">
              Voir la carte complète
            </button>
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Réservez votre table</h2>
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
                Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de personnes
              </label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500">
                <option>2 personnes</option>
                <option>3-4 personnes</option>
                <option>5-6 personnes</option>
                <option>7+ personnes</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Réserver maintenant
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Informations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Horaires</h3>
            <p className="text-gray-600">
              Mardi - Samedi<br />
              12h - 14h30 | 19h - 22h30
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">
              01 23 45 67 89<br />
              contact@bistrotparisien.fr
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Adresse</h3>
            <p className="text-gray-600">
              123 rue de la Gastronomie<br />
              75001 Paris
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
