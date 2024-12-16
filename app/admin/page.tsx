'use client';

import { useState, useEffect } from 'react';
import { generatePDF } from '@/utils/pdfGenerator';

interface DevisRequest {
  id: string;
  date: string;
  status: 'pending' | 'processed' | 'sent';
  formData: {
    companyName: string;
    contactName: string;
    address: string;
    clientEmail: string;
    clientPhone: string;
    projectDescription: string;
  };
  serviceTitle: string;
  basePrice: number;
  features: string[];
}

export default function AdminPage() {
  const [devisRequests, setDevisRequests] = useState<DevisRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<DevisRequest | null>(null);
  const [finalPrice, setFinalPrice] = useState<string>('');

  useEffect(() => {
    // Charger les demandes de devis
    fetchDevisRequests();
  }, []);

  const fetchDevisRequests = async () => {
    try {
      const response = await fetch('/api/admin/devis-requests');
      const data = await response.json();
      setDevisRequests(data);
    } catch (error) {
      console.error('Error fetching devis requests:', error);
    }
  };

  const handleGenerateDevis = async (request: DevisRequest) => {
    if (!finalPrice) {
      alert('Veuillez entrer un prix final');
      return;
    }

    try {
      // Générer le PDF
      await generatePDF({
        ...request.formData,
        serviceTitle: request.serviceTitle,
        features: request.features,
        finalPrice: parseFloat(finalPrice),
      });

      // Envoyer le devis au client
      await fetch('/api/admin/send-devis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requestId: request.id,
          clientEmail: request.formData.clientEmail,
          finalPrice,
        }),
      });

      // Mettre à jour le statut
      await fetch(`/api/admin/devis-requests/${request.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'sent' }),
      });

      alert('Devis envoyé avec succès !');
      fetchDevisRequests();
      setSelectedRequest(null);
      setFinalPrice('');
    } catch (error) {
      console.error('Error generating and sending devis:', error);
      alert('Erreur lors de l\'envoi du devis');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Administration des Devis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Liste des demandes */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Demandes de devis</h2>
          <div className="space-y-4">
            {devisRequests.map((request) => (
              <div
                key={request.id}
                className={`p-4 rounded-lg cursor-pointer ${
                  selectedRequest?.id === request.id
                    ? 'bg-blue-100 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedRequest(request)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{request.formData.companyName}</p>
                    <p className="text-sm text-gray-600">{request.serviceTitle}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-sm ${
                    request.status === 'sent' ? 'bg-green-100 text-green-800' :
                    request.status === 'processed' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {request.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(request.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Détails de la demande sélectionnée */}
        {selectedRequest && (
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Détails de la demande</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Informations client</h3>
                <p>Entreprise : {selectedRequest.formData.companyName}</p>
                <p>Contact : {selectedRequest.formData.contactName}</p>
                <p>Email : {selectedRequest.formData.clientEmail}</p>
                <p>Téléphone : {selectedRequest.formData.clientPhone}</p>
                <p>Adresse : {selectedRequest.formData.address}</p>
              </div>

              <div>
                <h3 className="font-semibold">Service demandé</h3>
                <p>{selectedRequest.serviceTitle}</p>
                <p>Prix de base : {selectedRequest.basePrice}€</p>
              </div>

              <div>
                <h3 className="font-semibold">Description du projet</h3>
                <p>{selectedRequest.formData.projectDescription}</p>
              </div>

              <div>
                <h3 className="font-semibold">Fonctionnalités</h3>
                <ul className="list-disc list-inside">
                  {selectedRequest.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">Prix final</h3>
                <input
                  type="number"
                  value={finalPrice}
                  onChange={(e) => setFinalPrice(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Entrez le prix final"
                />
              </div>

              <button
                onClick={() => handleGenerateDevis(selectedRequest)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Générer et envoyer le devis
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
