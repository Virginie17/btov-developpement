const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Configuration des images
const images = [
  // Images existantes
  {
    name: 'performance-web.jpg',
    text: 'Performance Web',
    bgColor: '#2563eb',
    textColor: '#ffffff'
  },
  {
    name: 'seo-technique.jpg',
    text: 'SEO Technique',
    bgColor: '#059669',
    textColor: '#ffffff'
  },
  {
    name: 'react-nextjs.jpg',
    text: 'React & Next.js',
    bgColor: '#7c3aed',
    textColor: '#ffffff'
  },
  // SEO & Référencement
  {
    name: 'seo-local.jpg',
    text: 'SEO Local',
    bgColor: '#047857',
    textColor: '#ffffff'
  },
  {
    name: 'optimisation-on-page.jpg',
    text: 'Optimisation On-Page',
    bgColor: '#065f46',
    textColor: '#ffffff'
  },
  // Développement Web
  {
    name: 'html-css.jpg',
    text: 'HTML & CSS',
    bgColor: '#dc2626',
    textColor: '#ffffff'
  },
  {
    name: 'javascript.jpg',
    text: 'JavaScript',
    bgColor: '#f59e0b',
    textColor: '#ffffff'
  },
  // Outils Webmarketing
  {
    name: 'google-analytics.jpg',
    text: 'Google Analytics',
    bgColor: '#ea580c',
    textColor: '#ffffff'
  },
  {
    name: 'search-console.jpg',
    text: 'Search Console',
    bgColor: '#0284c7',
    textColor: '#ffffff'
  },
  {
    name: 'outils-seo.jpg',
    text: 'Outils SEO',
    bgColor: '#0369a1',
    textColor: '#ffffff'
  },
  // Conseils & Astuces
  {
    name: 'securite.jpg',
    text: 'Sécurité Web',
    bgColor: '#4f46e5',
    textColor: '#ffffff'
  },
  {
    name: 'bonnes-pratiques.jpg',
    text: 'Bonnes Pratiques',
    bgColor: '#7c3aed',
    textColor: '#ffffff'
  },
  // Image de l'auteur
  {
    name: 'author.jpg',
    text: 'V',
    bgColor: '#dc2626',
    textColor: '#ffffff'
  }
];

// Dimensions
const width = 1200;
const height = 630;

// Création du dossier des images s'il n'existe pas
const blogImagesDir = path.join(__dirname, '../public/images/blog');
if (!fs.existsSync(blogImagesDir)) {
  fs.mkdirSync(blogImagesDir, { recursive: true });
}

// Génération des images
images.forEach(({ name, text, bgColor, textColor }) => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fond
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // Motif de fond
  ctx.strokeStyle = `${textColor}22`;
  for (let i = 0; i < width; i += 50) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }

  // Texte
  ctx.fillStyle = textColor;
  ctx.font = name === 'author.jpg' ? 'bold 120px Arial' : 'bold 72px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Ajouter un effet d'ombre au texte
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  
  ctx.fillText(text, width / 2, height / 2);

  // Réinitialiser l'ombre
  ctx.shadowColor = 'transparent';

  // Sauvegarde de l'image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(blogImagesDir, name), buffer);
});

console.log('Images générées avec succès !');
