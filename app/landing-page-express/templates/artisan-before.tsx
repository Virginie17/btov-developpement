'use client';

export default function ArtisanBefore() {
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 mt-8">
          Martin Dubois<br />
          Artisan Menuisier
        </h1>
        
        <div className="border-t border-b py-6 my-8">
          <p className="text-gray-700 mb-4">
            30 ans d'expérience dans la menuiserie traditionnelle
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>✓ Fabrication sur mesure</li>
            <li>✓ Restauration de meubles</li>
            <li>✓ Agencement intérieur</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Contactez-nous :</strong>
          </p>
          <p className="text-gray-600">
            📞 06 12 34 56 78<br />
            ✉️ contact@menuiserie-dubois.fr<br />
            📍 45 rue des Artisans, La Rochelle
          </p>
        </div>

        <div className="mt-8 bg-gray-100 p-4 rounded">
          <p className="text-gray-600">
            Devis gratuit sur demande
          </p>
        </div>
      </div>
    </div>
  );
}
