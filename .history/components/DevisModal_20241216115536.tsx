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
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  projectDescription: string;
}

const DevisModal = ({ isOpen, onClose, serviceTitle, basePrice, features }: DevisModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    clientName: '',
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

  const generatePDF = async () => {
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      // Fonction pour centrer le texte
      const centerText = (text: string, y: number) => {
        const textWidth = (doc as any).getStringUnitWidth(text) * (doc as any).internal.getFontSize() / doc.internal.scaleFactor;
        const x = (pageWidth - textWidth) / 2;
        doc.text(text, x, y);
      };

      // Ajout du logo
      const logoPath = '/images/logo.webp';
      const img = new Image();
      img.src = logoPath;

      await new Promise((resolve, reject) => {
        img.onload = () => {
          try {
            // Ajout du logo en haut à gauche
            doc.addImage(img, 'PNG', 20, 15, 40, 40);
            
            // Bordure décorative
            doc.setDrawColor(41, 128, 185);
            doc.setLineWidth(0.5);
            doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

            // En-tête
            doc.setFontSize(24);
            doc.setTextColor(41, 128, 185);
            centerText('DEVIS', 40);

            // Informations de l'entreprise (alignées à droite)
            doc.setFontSize(10);
            doc.setTextColor(60, 60, 60);
            const companyInfo = [
              'BTOV developpement',
              'SIRET : 93330480000016',
              'TVA Intracommunautaire : FR93933304800',
              'btovdeveloppement@gmail.com'
            ];
            companyInfo.forEach((line, index) => {
              doc.text(line, pageWidth - 30, 25 + (index * 5), { align: 'right' });
            });

            // Numéro de devis et date
            doc.setFontSize(11);
            doc.text([
              `Devis N° ${new Date().getFullYear()}-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
              `Date d'émission : ${new Date().toLocaleDateString()}`,
              'Validité : 30 jours'
            ], 20, 70);

            // Ligne de séparation
            doc.setDrawColor(200, 200, 200);
            doc.line(20, 80, pageWidth - 20, 80);

            // Informations client
            doc.setFontSize(14);
            doc.setTextColor(41, 128, 185);
            doc.text('CLIENT', 20, 95);
            
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            doc.text([
              `Nom : ${formData.clientName}`,
              `Email : ${formData.clientEmail}`,
              `Téléphone : ${formData.clientPhone}`
            ], 20, 105);

            // Description du projet
            doc.setFontSize(14);
            doc.setTextColor(41, 128, 185);
            doc.text('DESCRIPTION DU PROJET', 20, 130);
            
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            const splitDescription = doc.splitTextToSize(formData.projectDescription, pageWidth - 60);
            doc.text(splitDescription, 20, 140);

            // Détails de la prestation
            let yPos = 140 + (splitDescription.length * 7);
            doc.setFontSize(14);
            doc.setTextColor(41, 128, 185);
            doc.text('DÉTAILS DE LA PRESTATION', 20, yPos);
            
            yPos += 10;
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            doc.text(`Pack : ${serviceTitle}`, 20, yPos);
            
            // Caractéristiques dans un cadre
            yPos += 10;
            doc.setDrawColor(200, 200, 200);
            doc.setFillColor(250, 250, 250);
            const featureBoxHeight = features.length * 7 + 10;
            doc.roundedRect(25, yPos, pageWidth - 50, featureBoxHeight, 3, 3, 'FD');
            
            yPos += 7;
            features.forEach(feature => {
              doc.text(`• ${feature}`, 30, yPos);
              yPos += 7;
            });

            // Conditions financières dans un tableau
            yPos += 10;
            doc.setFontSize(14);
            doc.setTextColor(41, 128, 185);
            doc.text('CONDITIONS FINANCIÈRES', 20, yPos);
            
            yPos += 10;
            // Création du tableau
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            doc.setDrawColor(200, 200, 200);
            doc.setFillColor(250, 250, 250);
            
            const tableData = [
              ['Description', 'Montant'],
              ['Prix HT', `${basePrice} €`],
              ['TVA (20%)', `${(basePrice * 0.2).toFixed(2)} €`],
              ['Prix TTC', `${(basePrice * 1.2).toFixed(2)} €`]
            ];
            
            // Dessiner le tableau
            const cellWidth = (pageWidth - 60) / 2;
            tableData.forEach((row, index) => {
              const fillColor = index === 0 ? [41, 128, 185] : [250, 250, 250];
              const textColor = index === 0 ? [255, 255, 255] : [60, 60, 60];
              
              doc.setFillColor(...fillColor);
              doc.setTextColor(...textColor);
              doc.rect(30, yPos, cellWidth, 8, 'F');
              doc.rect(30 + cellWidth, yPos, cellWidth, 8, 'F');
              
              doc.text(row[0], 35, yPos + 5.5);
              doc.text(row[1], 30 + cellWidth + 5, yPos + 5.5);
              
              yPos += 8;
            });

            // Ajout d'une nouvelle page pour les conditions
            doc.addPage();
            yPos = 20;

            // Conditions juridiques
            const sections = [
              {
                title: 'CONDITIONS DE PAIEMENT',
                content: [
                  '• Acompte de 30% à la signature du devis',
                  '• Solde à la livraison des prestations',
                  '• Mode de paiement : Virement bancaire',
                  '',
                  'Pénalités de retard : 3 fois le taux d\'intérêt légal',
                  'Indemnité forfaitaire pour frais de recouvrement : 40€'
                ]
              },
              {
                title: 'CONDITIONS SPÉCIFIQUES AU DÉVELOPPEMENT WEB',
                content: [
                  '1. Propriété du code source : Le code source développé spécifiquement devient la propriété du client après',
                  '   paiement intégral. Les composants génériques et bibliothèques tierces restent soumis à leurs licences.',
                  '2. Compatibilité : Développement compatible avec les dernières versions des navigateurs principaux.',
                  '3. Hébergement : Frais d\'hébergement et nom de domaine à la charge du client.',
                  '4. Contenu : Le client est responsable de fournir les contenus nécessaires au développement.',
                  '5. Maintenance : Cette offre n\'inclut pas la maintenance après livraison.',
                  '6. Responsive design : Adaptation aux écrans d\'ordinateurs, tablettes et smartphones.',
                  '7. Sécurité : Implémentation des bonnes pratiques de sécurité web actuelles.',
                  '8. Recette : Période de tests et corrections de 15 jours incluse après livraison.'
                ]
              },
              {
                title: 'PROTECTION DES DONNÉES (RGPD)',
                content: [
                  'Les données personnelles sont utilisées uniquement pour la gestion de la relation commerciale.',
                  'Contact RGPD : btovdeveloppement@gmail.com',
                  '',
                  'Traitement des données :',
                  '• Hébergement exclusif dans l\'Union Européenne',
                  '• Mise en place des mesures de sécurité appropriées',
                  '• Tenue d\'un registre des activités de traitement',
                  '• Information sous 48h en cas de violation de données'
                ]
              }
            ];

            sections.forEach(section => {
              doc.setFontSize(14);
              doc.setTextColor(41, 128, 185);
              doc.text(section.title, 20, yPos);
              
              yPos += 10;
              doc.setFontSize(11);
              doc.setTextColor(60, 60, 60);
              section.content.forEach(line => {
                doc.text(line, 20, yPos);
                yPos += 6;
              });
              yPos += 10;
            });

            // Zone de signature
            doc.addPage();
            yPos = 20;
            
            doc.setFontSize(14);
            doc.setTextColor(41, 128, 185);
            doc.text('SIGNATURES', 20, yPos);
            
            yPos += 20;
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            
            // Cadres de signature
            const signatureWidth = (pageWidth - 60) / 2;
            
            // Client
            doc.setDrawColor(200, 200, 200);
            doc.roundedRect(20, yPos, signatureWidth, 80, 3, 3);
            doc.text('Pour le client :', 25, yPos + 10);
            doc.text('Nom et qualité du signataire :', 25, yPos + 20);
            doc.text('Date :', 25, yPos + 40);
            doc.text('Signature précédée de la mention', 25, yPos + 60);
            doc.text('"Bon pour accord"', 25, yPos + 70);
            
            // BTOV
            doc.roundedRect(30 + signatureWidth, yPos, signatureWidth, 80, 3, 3);
            doc.text('Pour BTOV :', 35 + signatureWidth, yPos + 10);
            doc.text('Virginie CHAFFARD', 35 + signatureWidth, yPos + 20);
            doc.text('Gérante', 35 + signatureWidth, yPos + 30);
            doc.text('Signature et cachet', 35 + signatureWidth, yPos + 60);

            // Pied de page sur toutes les pages
            const totalPages = doc.internal.getNumberOfPages();
            for (let i = 1; i <= totalPages; i++) {
              doc.setPage(i);
              doc.setFontSize(8);
              doc.setTextColor(128, 128, 128);
              doc.text(`Page ${i}/${totalPages}`, pageWidth - 30, pageHeight - 10);
              
              // Ligne de pied de page
              doc.setDrawColor(200, 200, 200);
              doc.line(20, pageHeight - 15, pageWidth - 20, pageHeight - 15);
              
              // Texte de pied de page
              doc.text('BTOV - SIRET : 93330480000016 - TVA : FR93933304800', 20, pageHeight - 10);
            }

            resolve();
          } catch (error) {
            reject(error);
          }
        };
        img.onerror = reject;
      });

      // Ouvrir dans un nouvel onglet
      const pdfDataUri = doc.output('datauristring');
      window.open(pdfDataUri, '_blank');
      
      // Fermer le modal
      onClose();

    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
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
        
        <div className="space-y-6">
          <div>
            <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              name="clientName"
              id="clientName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              value={formData.clientName}
              onChange={handleInputChange}
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
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={generatePDF}
          >
            Générer le devis
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
    </Modal>
  );
};

export default DevisModal;
