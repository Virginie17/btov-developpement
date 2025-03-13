'use client';

export default function RestaurantBefore() {
  return (
    <div className="bg-white min-h-screen p-4 font-serif">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 mt-8">Le Bistrot Parisien</h1>
        <p className="text-gray-600">Restaurant traditionnel français</p>
        
        <div className="border-t border-b py-4 my-8">
          <p className="text-gray-700">
            Ouvert du mardi au samedi<br />
            12h - 14h30 | 19h - 22h30
          </p>
          <p className="text-gray-700 mt-2">
            📞 01 23 45 67 89<br />
            📍 123 rue de la Gastronomie, Paris
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-2xl font-bold mb-4">Notre Menu</h2>
          <a 
            href="#" 
            className="inline-block bg-gray-200 px-6 py-2 rounded"
          >
            Télécharger le menu (PDF)
          </a>
        </div>

        <div className="mt-8">
          <p className="text-gray-600 italic">
            Pour toute réservation, merci de nous contacter par téléphone
          </p>
        </div>
      </div>
    </div>
  );
}
