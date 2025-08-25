'use client';

import { jsPDF } from 'jspdf';

interface DevisData {
  companyName: string;
  contactName: string;
  address: string;
  clientEmail: string;
  clientPhone: string;
  projectDescription: string;
  serviceTitle: string;
  features: string[];
  finalPrice: number;
}

export const generatePDF = async (data: DevisData) => {
  const doc = new jsPDF();
  const img = new Image();
  img.src = '/images/logo.webp';

  // En-tête
  doc.addImage(img, 'PNG', 20, 10, 40, 40);
  
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
    `Nom de l'entreprise : ${data.companyName}`,
    `Nom du contact : ${data.contactName}`,
    `Adresse : ${data.address}`,
    `Email : ${data.clientEmail}`,
    `Téléphone : ${data.clientPhone}`
  ], 20, 100);

  // Description du service
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('DESCRIPTION DU SERVICE', 20, 130);
  
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60);
  doc.text(data.serviceTitle, 20, 140);
  
  // Description du projet
  doc.text('Description du projet :', 20, 150);
  const splitDescription = doc.splitTextToSize(data.projectDescription, 170);
  doc.text(splitDescription, 20, 160);

  // Fonctionnalités
  let yPos = 180;
  doc.text('Fonctionnalités incluses :', 20, yPos);
  yPos += 10;
  data.features.forEach(feature => {
    doc.text(`• ${feature}`, 25, yPos);
    yPos += 7;
  });

  // Prix
  yPos += 10;
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text(`Prix total : ${data.finalPrice.toLocaleString('fr-FR')} €`, 20, yPos);

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
  doc.setFontSize(11);
  doc.text('Signature du client', 20, signatureY);
  doc.text('(Précédée de la mention "Bon pour accord")', 20, signatureY + 5);
  
  doc.text('Pour BTOV Développement', 120, signatureY);
  doc.text('Benjamin TOSI', 120, signatureY + 5);

  // Ouvrir le PDF dans un nouvel onglet
  const pdfBlob = doc.output('blob');
  window.open(URL.createObjectURL(pdfBlob));

  return pdfBlob;
};
