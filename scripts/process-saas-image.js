const sharp = require('sharp');
const path = require('path');
const https = require('https');
const fs = require('fs');

// Dimensions standards
const DIMENSIONS = {
  DESKTOP: { width: 1440, height: 900 },  // Format 16:10 desktop standard
  MOBILE: { width: 390, height: 844 },    // iPhone 12/13/14 dimensions
  THUMBNAIL: { width: 400, height: 300 }   // 4:3 ratio pour les miniatures
};

async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

async function processImage(imageBuffer, outputPrefix) {
  try {
    console.log('Processing SaaS dashboard image...');

    // Version mobile
    console.log('Creating mobile version...');
    await sharp(imageBuffer)
      .resize(DIMENSIONS.MOBILE.width, DIMENSIONS.MOBILE.height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png({ quality: 100 })
      .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', `${outputPrefix}-mobile.png`));

    // Version desktop
    console.log('Creating desktop version...');
    await sharp(imageBuffer)
      .resize(DIMENSIONS.DESKTOP.width, DIMENSIONS.DESKTOP.height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png({ quality: 100 })
      .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', `${outputPrefix}-desktop.png`));

    // Version thumbnail
    console.log('Creating thumbnail version...');
    await sharp(imageBuffer)
      .resize(DIMENSIONS.THUMBNAIL.width, DIMENSIONS.THUMBNAIL.height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png({ quality: 100 })
      .toFile(path.join(__dirname, '..', 'public', 'images', 'portfolio', `${outputPrefix}-thumb.png`));

    // Sauvegarder l'original
    await fs.promises.writeFile(
      path.join(__dirname, '..', 'public', 'images', 'saas.jpg'),
      imageBuffer
    );

    console.log('✅ All versions created successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

async function main() {
  try {
    // Une belle image de tableau de bord moderne avec des graphiques
    const imageUrl = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2400&q=80';
    
    console.log('Downloading image...');
    const imageBuffer = await downloadImage(imageUrl);
    
    await processImage(imageBuffer, 'saas');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
