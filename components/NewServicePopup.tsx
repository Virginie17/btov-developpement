import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewServicePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const shouldShow = !localStorage.getItem('newServicePopupClosed');
    setIsOpen(shouldShow);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem('newServicePopupClosed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closePopup}></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10">
                <span role="img" aria-label="Nouveau service" className="text-2xl">🌟</span>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Nouveau Service d'Assistance Numérique
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 mb-2">
                    <strong className="text-primary-600 block mb-2">⏳ Démarrage le 1er septembre 2025</strong>
                    Nous lançons notre nouveau service d'assistance numérique pour les seniors, personnes en situation de handicap et toute personne en difficulté avec l'informatique et internet.
                  </p>
                  <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
                    <li>Accompagnement personnalisé</li>
                    <li>Aide aux démarches administratives en ligne</li>
                    <li>Formation à l'utilisation des outils numériques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Link
              href="/services/assistance-numerique"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              En savoir plus
            </Link>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={closePopup}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
