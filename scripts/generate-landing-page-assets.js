/**
 * Script pour générer les ressources nécessaires à la page Landing Page Express
 * Optimise les images et crée les fichiers de métadonnées
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// Constantes pour les chemins
const PUBLIC_DIR = path.join(__dirname, '../public');
const LANDING_PAGE_DIR = path.join(PUBLIC_DIR, 'images/landing-page-express');
const METADATA_FILE = path.join(LANDING_PAGE_DIR, 'metadata.json');

// Configuration des images à générer
const IMAGES_TO_GENERATE = [
  {
    name: 'hero-image.webp',
    width: 1200,
    height: 600,
    background: { r: 41, g: 65, b: 171, alpha: 1 },
    text: 'Landing Page Express',
    description: 'Image d\'en-tête pour la page Landing Page Express'
  },
  {
    name: 'restaurant-avant.webp',
    width: 800,
    height: 600,
    background: { r: 220, g: 220, b: 220, alpha: 1 },
    text: 'Restaurant - Avant',
    description: 'Site web basique du restaurant Le Bistrot Parisien avant transformation'
  },
  {
    name: 'restaurant-apres.webp',
    width: 800,
    height: 600,
    background: { r: 41, g: 65, b: 171, alpha: 0.8 },
    text: 'Restaurant - Après',
    description: 'Landing page moderne du restaurant Le Bistrot Parisien après transformation'
  },
  {
    name: 'menuiserie-avant.webp',
    width: 800,
    height: 600,
    background: { r: 220, g: 220, b: 220, alpha: 1 },
    text: 'Menuiserie - Avant',
    description: 'Simple carte de visite en ligne de la Menuiserie Dubois avant transformation'
  },
  {
    name: 'menuiserie-apres.webp',
    width: 800,
    height: 600,
    background: { r: 139, g: 69, b: 19, alpha: 0.8 },
    text: 'Menuiserie - Après',
    description: 'Landing page professionnelle de la Menuiserie Dubois après transformation'
  },
  {
    name: 'og-image.jpg',
    width: 1200,
    height: 630,
    background: { r: 41, g: 65, b: 171, alpha: 1 },
    text: 'Landing Page Express - BTOV',
    description: 'Image pour les réseaux sociaux de l\'offre Landing Page Express'
  }
];

// Tailles pour les images responsives
const RESPONSIVE_SIZES = [
  { width: 800, height: 600, suffix: 'large' },
  { width: 400, height: 300, suffix: 'medium' },
  { width: 200, height: 150, suffix: 'small' }
];

/**
 * Crée un répertoire s'il n'existe pas
 * @param {string} dir Chemin du répertoire à créer
 */
async function ensureDirectoryExists(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
    console.log(`✓ Répertoire créé ou existant: ${dir}`);
  } catch (error) {
    console.error(`× Erreur lors de la création du répertoire ${dir}:`, error);
    throw error;
  }
}

/**
 * Génère une image avec du texte
 * @param {Object} config Configuration de l'image
 * @returns {Promise<Buffer>} Buffer de l'image générée
 */
async function generateImageWithText(config) {
  const { width, height, background, text } = config;
  
  // Créer une image de base avec la couleur de fond
  const baseImage = sharp({
    create: {
      width,
      height,
      channels: 4,
      background
    }
  });
  
  // Créer une image avec le texte
  const textSvg = Buffer.from(`
    <svg width="${width}" height="${height}">
      <style>
        .title { fill: white; font-size: 48px; font-weight: bold; font-family: sans-serif; }
      </style>
      <text x="50%" y="50%" text-anchor="middle" class="title">${text}</text>
    </svg>
  `);
  
  // Combiner les deux images
  return baseImage
    .composite([{ input: textSvg, gravity: 'center' }])
    .toBuffer();
}

/**
 * Génère une version LQIP (Low Quality Image Placeholder)
 * @param {Buffer} imageBuffer Buffer de l'image source
 * @returns {Promise<Buffer>} Buffer de l'image LQIP
 */
async function generateLQIP(imageBuffer) {
  return sharp(imageBuffer)
    .resize(20, 20, { fit: 'inside' })
    .blur(10)
    .webp({ quality: 20, effort: 3 })
    .toBuffer();
}

/**
 * Génère les différentes tailles d'une image
 * @param {Buffer} imageBuffer Buffer de l'image source
 * @param {string} baseName Nom de base de l'image
 * @returns {Promise<Array>} Tableau des métadonnées des images générées
 */
async function generateResponsiveImages(imageBuffer, baseName) {
  const results = [];
  
  for (const size of RESPONSIVE_SIZES) {
    const outputFilename = `${baseName.replace(/\.\w+$/, '')}-${size.suffix}.webp`;
    const outputPath = path.join(LANDING_PAGE_DIR, outputFilename);
    
    await sharp(imageBuffer)
      .resize(size.width, size.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: 80,
        effort: 6
      })
      .toFile(outputPath);
    
    results.push({
      path: `/images/landing-page-express/${outputFilename}`,
      width: size.width,
      height: size.height,
      suffix: size.suffix
    });
    
    console.log(`✓ Image responsive créée: ${outputFilename}`);
  }
  
  return results;
}

/**
 * Génère toutes les images et leurs métadonnées
 */
async function generateAllImages() {
  const metadata = [];
  
  // Assurer que les répertoires existent
  await ensureDirectoryExists(LANDING_PAGE_DIR);
  await ensureDirectoryExists(path.join(LANDING_PAGE_DIR, 'lqip'));
  
  for (const imageConfig of IMAGES_TO_GENERATE) {
    try {
      console.log(`🔄 Génération de l'image: ${imageConfig.name}`);
      
      // Générer l'image principale
      const imageBuffer = await generateImageWithText(imageConfig);
      const outputPath = path.join(LANDING_PAGE_DIR, imageConfig.name);
      
      await sharp(imageBuffer)
        .toFile(outputPath);
      
      // Générer la version LQIP
      const lqipBuffer = await generateLQIP(imageBuffer);
      const lqipPath = path.join(LANDING_PAGE_DIR, 'lqip', imageConfig.name);
      await sharp(lqipBuffer).toFile(lqipPath);
      
      // Générer les versions responsives
      const responsiveImages = await generateResponsiveImages(imageBuffer, imageConfig.name);
      
      // Ajouter les métadonnées
      metadata.push({
        path: `/images/landing-page-express/${imageConfig.name}`,
        description: imageConfig.description,
        dimensions: {
          width: imageConfig.width,
          height: imageConfig.height
        },
        lqip: `/images/landing-page-express/lqip/${imageConfig.name}`,
        responsiveImages
      });
      
      console.log(`✓ Image générée: ${imageConfig.name}`);
    } catch (error) {
      console.error(`× Erreur lors de la génération de l'image ${imageConfig.name}:`, error);
    }
  }
  
  // Enregistrer les métadonnées
  await fs.writeFile(METADATA_FILE, JSON.stringify(metadata, null, 2));
  console.log(`✓ Métadonnées enregistrées dans: ${METADATA_FILE}`);
}

// Exécuter le script
console.log('🚀 Début de la génération des ressources pour Landing Page Express');
generateAllImages()
  .then(() => {
    console.log('✨ Génération des ressources terminée avec succès');
  })
  .catch(error => {
    console.error('❌ Erreur lors de la génération des ressources:', error);
    process.exit(1);
  });
