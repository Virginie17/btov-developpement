'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Modal from 'react-modal';
import { jsPDF } from 'jspdf';

interface DevisModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  basePrice: number;
  features: string[];
}

interface FormData {
  companyName: string;
  contactName: string;
  address: string;
  clientEmail: string;
  clientPhone: string;
  projectDescription: string;
}

const DevisModal = ({ isOpen, onClose, serviceTitle, basePrice, features }: DevisModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    address: '',
    clientEmail: '',
    clientPhone: '',
    projectDescription: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendDevisRequest = async () => {
    try {
      const response = await fetch('/api/send-devis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          serviceTitle,
          basePrice,
          features
        }),
      });

      if (response.ok) {
        alert('Votre demande a été envoyée avec succès. Nous vous contacterons rapidement pour la suite.');
        onClose();
      } else {
        throw new Error('Erreur lors de l\'envoi de la demande');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'envoi de la demande. Veuillez réessayer.');
    }
  };

  const generatePDF = async () => {
    try {
      const doc = new jsPDF();

      // Ajout du logo
      const logoPath = '/images/logo.webp';
      const img = new Image();
      img.src = logoPath;

      // Attendre que l'image soit chargée
      await new Promise<void>((resolve, reject) => {
        img.onload = () => {
          try {
            // En-tête
            doc.addImage(img, 'WEBP', 20, 10, 40, 40);
            
            doc.setFontSize(10);
            doc.setTextColor(60, 60, 60);
            const companyInfo = [
              'BTOV developpement',
              'SIRET : 93330480000016',
              'TVA Intracommunautaire : FR93933304800',
              'btovdeveloppement@gmail.com'
            ];
            companyInfo.forEach((line, index) => {
              doc.text(line, 150, 20 + (index * 5));
            });

            // Titre
            doc.setFontSize(22);
            doc.setTextColor(0, 0, 0);
            doc.text('DEVIS', 105, 60, { align: 'center' });

            // Numéro et date du devis
            const devisNumber = `DEVIS-${Date.now()}`;
            const currentDate = new Date().toLocaleDateString('fr-FR');
            doc.setFontSize(10);
            doc.text(`N° ${devisNumber}`, 20, 70);
            doc.text(`Date : ${currentDate}`, 20, 75);

            // Informations client
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text('INFORMATIONS CLIENT', 20, 90);

            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            doc.text([
              `Nom de l'entreprise : ${formData.companyName}`,
              `Nom du contact : ${formData.contactName}`,
              `Adresse : ${formData.address}`,
              `Email : ${formData.clientEmail}`,
              `Téléphone : ${formData.clientPhone}`
            ], 20, 105);

            // Description du projet
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text('DESCRIPTION DU PROJET', 20, 140);

            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            const splitDescription = doc.splitTextToSize(formData.projectDescription, 170);
            doc.text(splitDescription, 20, 150);

            // Service et fonctionnalités
            let yPos = 180;
            doc.text('Service demandé :', 20, yPos);
            yPos += 10;
            doc.text(serviceTitle, 25, yPos);
            yPos += 20;

            doc.text('Fonctionnalités incluses :', 20, yPos);
            yPos += 10;
            features.forEach(feature => {
              doc.text(`• ${feature}`, 25, yPos);
              yPos += 7;
            });

            // Prix de base
            yPos += 10;
            doc.setFontSize(14);
            doc.setTextColor(0, 0, 0);
            doc.text(`Prix : ${basePrice}€`, 20, yPos);

            // Nouvelle page pour les conditions
            doc.addPage();

            // Conditions de paiement
            doc.setFontSize(12);
            doc.text('CONDITIONS DE PAIEMENT ET DE RÉALISATION', 20, 20);

            doc.setFontSize(10);
            const conditions = [
              '1. Modalités de paiement',
              '   • 30% à la signature du devis',
              '   • 40% au début du développement',
              '   • 30% à la livraison finale',
              '',
              '2. Délais de réalisation',
              '   • Le délai sera défini après validation du devis et analyse détaillée du projet',
              '   • Un planning détaillé sera fourni au démarrage du projet',
              '',
              '3. Validité du devis',
              '   • Ce devis est valable 30 jours à compter de sa date d\'émission',
              '',
              '4. Propriété intellectuelle',
              '   • Le code source et les droits associés seront transférés au client après le paiement intégral',
              '',
              '5. Maintenance et support',
              '   • Une période de garantie de 3 mois est incluse après la livraison',
              '   • Un contrat de maintenance peut être proposé séparément'
            ];

            conditions.forEach((line, index) => {
              doc.text(line, 20, 40 + (index * 7));
            });

            // Zone de signature
            const signatureY = 200;
            doc.text('Signature du client', 20, signatureY);
            doc.text('(Précédée de la mention "Bon pour accord")', 20, signatureY + 5);

            doc.text('Pour BTOV Développement', 120, signatureY);
            doc.text('Benjamin TOSI', 120, signatureY + 5);

            // Ouvrir le PDF dans un nouvel onglet
            const pdfBlob = doc.output('blob');
            window.open(URL.createObjectURL(pdfBlob));

            resolve();
          } catch (error) {
            reject(error);
          }
        };
        img.onerror = reject;
      });
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      alert('Une erreur est survenue lors de la génération du PDF');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 overflow-y-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      ariaHideApp={false}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
        <div className="bg-white rounded-lg p-4 w-full sm:w-[90%] md:w-[60%] lg:w-[40%] max-w-lg mx-auto relative transform translate-y-8">
          <h2 className="text-2xl font-bold mb-4">Demande de devis - {serviceTitle}</h2>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Nom de l'entreprise
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                Nom du contact
              </label>
              <input
                type="text"
                name="contactName"
                id="contactName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.contactName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Adresse
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="clientEmail"
                id="clientEmail"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.clientEmail}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="clientPhone" className="block text-sm font-medium text-gray-700">
                Téléphone
              </label>
              <input
                type="tel"
                name="clientPhone"
                id="clientPhone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.clientPhone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
                Description du projet
              </label>
              <textarea
                name="projectDescription"
                id="projectDescription"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.projectDescription}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={sendDevisRequest}
            >
              Envoyer ma demande
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={onClose}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DevisModal;
