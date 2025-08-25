const sharp = require('sharp');
const path = require('path');

async function processImage() {
  try {
    const inputPath = path.join(__dirname, '..', 'public', 'images', 'ecommerce.jpg');
    console.log('Processing image:', inputPath);

    // Version mobile
    console.log('Creating mobile version...');
    await sharp(inputPath)
      .resize(390, null, {
        withoutEnlargement: true,
        fit: 'contain'
      })
      .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', 'fashion-store-mobile.png'));

    // Version desktop
    console.log('Creating desktop version...');
    await sharp(inputPath)
      .resize(1920, null, {
        withoutEnlargement: true,
        fit: 'contain'
      })
      .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', 'fashion-store-desktop.png'));

    // Version thumbnail
    console.log('Creating thumbnail version...');
    await sharp(inputPath)
      .resize(400, 300, {
        fit: 'contain'
      })
      .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', 'fashion-store-thumb.png'));

    console.log(' All versions created successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

processImage();
