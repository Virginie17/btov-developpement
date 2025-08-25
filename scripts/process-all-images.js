const sharp = require('sharp');
const path = require('path');

// Dimensions standards
const DIMENSIONS = {
  DESKTOP: { width: 1440, height: 900 },  // Format 16:10 desktop standard
  MOBILE: { width: 390, height: 844 },    // iPhone 12/13/14 dimensions
  THUMBNAIL: { width: 400, height: 300 }   // 4:3 ratio pour les miniatures
};

async function processImage(inputPath, outputPrefix) {
  try {
    console.log(`Processing image: ${inputPath}`);

    // Version mobile
    console.log('Creating mobile version...');
    await sharp(inputPath)
      .resize(DIMENSIONS.MOBILE.width, DIMENSIONS.MOBILE.height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png({ quality: 100 })
      .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', `${outputPrefix}-mobile.png`));

    // Version desktop
    console.log('Creating desktop version...');
    await sharp(inputPath)
      .resize(DIMENSIONS.DESKTOP.width, DIMENSIONS.DESKTOP.height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png({ quality: 100 })
      .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', `${outputPrefix}-desktop.png`));

    // Version thumbnail
    console.log('Creating thumbnail version...');
    await sharp(inputPath)
      .resize(DIMENSIONS.THUMBNAIL.width, DIMENSIONS.THUMBNAIL.height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png({ quality: 100 })
      .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', `${outputPrefix}-thumb.png`));

    console.log(`✅ All versions created for ${outputPrefix}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function processAllImages() {
  const images = [
    {
      input: path.join(__dirname, '..', 'public', 'images', 'site immobilier.jpg'),
      prefix: 'immo'
    },
    {
      input: path.join(__dirname, '..', 'public', 'images', 'ecommerce.jpg'),
      prefix: 'fashion-store'
    }
  ];

  for (const image of images) {
    await processImage(image.input, image.prefix);
  }
}

processAllImages();
