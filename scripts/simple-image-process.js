const sharp = require('sharp');
const path = require('path');

async function processImage() {
  try {
    const inputPath = path.join(__dirname, '..', 'public', 'images', 'site immobilier.jpg');
    console.log('Processing image:', inputPath);

    // Version mobile
    console.log('Creating mobile version...');
    await sharp(inputPath)
      .resize(390, null, {
        withoutEnlargement: true,
        fit: 'contain'
      })
      .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', 'immo-mobile.png'));

    // Version desktop
    console.log('Creating desktop version...');
    await sharp(inputPath)
      .resize(1920, null, {
        withoutEnlargement: true,
        fit: 'contain'
      })
      .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', 'immo-desktop.png'));

    // Version thumbnail
    console.log('Creating thumbnail version...');
    await sharp(inputPath)
      .resize(400, 300, {
        fit: 'contain'
      })
      .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', 'immo-thumb.png'));

    console.log('✅ All versions created successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

processImage();
