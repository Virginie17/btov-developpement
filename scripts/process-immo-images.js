const sharp = require('sharp');
const path = require('path');

async function processImage() {
  const inputPath = path.join(__dirname, '..', 'public', 'images', 'site immobilier.jpg');
  const metadata = await sharp(inputPath).metadata();

  // Version Desktop
  console.log('Processing desktop version...');
  await sharp(inputPath)
    .png({
      quality: 100,
      compressionLevel: 9,
      adaptiveFiltering: true,
      force: true
    })
    .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', 'immo-desktop.png'));

  // Version Mobile avec redimensionnement haute qualité
  console.log('Processing mobile version...');
  const mobileHeight = Math.round((844 * metadata.width) / 390);
  
  await sharp(inputPath)
    .resize(390, mobileHeight, {
      fit: 'inside',
      withoutEnlargement: true,
      kernel: 'mitchell', // Kernel optimisé pour la netteté
      fastShrinkOnLoad: false // Désactive la réduction rapide pour plus de qualité
    })
    .png({
      quality: 100,
      compressionLevel: 9,
      adaptiveFiltering: true,
      force: true
    })
    .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', 'immo-mobile.png'));

  // Version Thumbnail
  console.log('Processing thumbnail version...');
  await sharp(inputPath)
    .resize(400, 300, {
      fit: 'cover',
      position: 'centre',
      kernel: 'mitchell'
    })
    .png({
      quality: 100,
      compressionLevel: 9,
      adaptiveFiltering: true,
      force: true
    })
    .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', 'immo-thumb.png'));

  console.log('✅ All versions created successfully');
}

processImage().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
