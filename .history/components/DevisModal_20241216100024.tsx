'use client';

import React, { useState } from 'react';
import Modal from 'react-modal';
import { jsPDF } from 'jspdf';

interface DevisModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  basePrice: number;
  features: string[];
}

const DevisModal = ({ isOpen, onClose, serviceTitle, basePrice, features }: DevisModalProps) => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: serviceTitle,
    description: '',
    prix: basePrice,
    delai: '2-4 semaines',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generatePDF = async () => {
    try {
      // Création du document PDF
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      
      // Fonction utilitaire pour centrer le texte
      const centerText = (text, y) => {
        const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const x = (pageWidth - textWidth) / 2;
        doc.text(text, x, y);
      };

      // Ajout d'une bordure décorative
      doc.setDrawColor(41, 128, 185); // Bleu professionnel
      doc.setLineWidth(0.5);
      doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

      // Chargement du logo
      const logoPath = '/images/logo.webp';
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          try {
            // Ajout du logo
            doc.addImage(img, 'WEBP', 10, 10, 40, 40);
            
            // En-tête avec logo
            doc.setFontSize(24);
            doc.setTextColor(41, 128, 185);
            centerText('DEVIS', 50);

            // Numéro de devis et date
            const devisNumber = `DEV-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
            doc.setFontSize(12);
            doc.setTextColor(100, 100, 100);
            doc.text(`N° ${devisNumber}`, 20, 60);
            doc.text(`Date: ${new Date().toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}`, pageWidth - 70, 60);

            // Ligne de séparation
            doc.setDrawColor(200, 200, 200);
            doc.line(20, 65, pageWidth - 20, 65);

            // Informations client
            doc.setFontSize(14);
            doc.setTextColor(41, 128, 185);
            doc.text('INFORMATIONS CLIENT', 20, 75);
            
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            doc.text([
              `Nom: ${formData.nom}`,
              `Email: ${formData.email}`,
              `Téléphone: ${formData.telephone}`
            ], 20, 85);

            // Description du service
            doc.setFontSize(14);
            doc.setTextColor(41, 128, 185);
            doc.text('DESCRIPTION DU SERVICE', 20, 115);
            
            doc.setFontSize(12);
            doc.setTextColor(60, 60, 60);
            doc.text(`Pack: ${formData.service}`, 20, 125);
            
            // Caractéristiques du pack
            doc.setFontSize(11);
            let yPos = 135;
            doc.text('Caractéristiques incluses:', 20, yPos);
            yPos += 7;
            
            features.forEach((feature) => {
              doc.text(`• ${feature}`, 25, yPos);
              yPos += 6;
            });

            // Description du projet
            doc.setFontSize(14);
            doc.setTextColor(41, 128, 185);
            doc.text('DESCRIPTION DU PROJET', 20, yPos + 10);
            
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            const splitDescription = doc.splitTextToSize(formData.description, pageWidth - 40);
            doc.text(splitDescription, 20, yPos + 20);

            // Conditions financières
            yPos = yPos + 40 + (splitDescription.length * 7);
            doc.setFontSize(14);
            doc.setTextColor(41, 128, 185);
            doc.text('CONDITIONS FINANCIÈRES', 20, yPos);
            
            // Tableau des prix
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            doc.text(`Prix total HT: ${formData.prix} €`, 20, yPos + 10);
            doc.text(`TVA (20%): ${(formData.prix * 0.2).toFixed(2)} €`, 20, yPos + 17);
            doc.text(`Prix total TTC: ${(formData.prix * 1.2).toFixed(2)} €`, 20, yPos + 24);
            doc.text(`Délai estimé: ${formData.delai}`, 20, yPos + 31);

            // Pied de page
            const footerY = pageHeight - 40;
            doc.setFillColor(245, 245, 245);
            doc.rect(15, footerY, pageWidth - 30, 30, 'F');
            
            doc.setFontSize(9);
            doc.setTextColor(100, 100, 100);
            doc.text([
              "Ce devis est valable 30 jours à compter de sa date d'émission.",
              "B to V Développement - SIRET: 93330480000016",
              "Contact: btovdeveloppement@gmail.com",
              "Conditions générales disponibles sur demande"
            ], 20, footerY + 10, { lineHeightFactor: 1.5 });

            // Ouvrir le PDF dans un nouvel onglet
            const pdfDataUri = doc.output('datauristring');
            window.open(pdfDataUri, '_blank');
            
            // Fermer le modal après la génération
            onClose();
            resolve();
          } catch (error) {
            reject(error);
          }
        };
        img.onerror = reject;
        img.src = logoPath;
      });
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      alert('Une erreur est survenue lors de la génération du devis. Veuillez réessayer.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      ariaHideApp={false}
    >
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Demande de devis - {serviceTitle}</h2>
        
        <form className="space-y-4" onSubmit={async (e) => {
          e.preventDefault();
          await generatePDF();
        }}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom complet</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Téléphone</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description du projet</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Annuler
            </button>
            
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
            >
              Générer le devis
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default DevisModal;
