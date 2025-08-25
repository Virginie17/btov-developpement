const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Image haute résolution d'une belle maison moderne
const imageUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=80';

async function downloadImage() {
  const imagePath = path.join(__dirname, '..', 'public', 'images', 'site immobilier.jpg');
  
  console.log('Downloading high resolution image...');
  
  return new Promise((resolve, reject) => {
    https.get(imageUrl, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(imagePath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log('Download completed');
        resolve(imagePath);
      });

      fileStream.on('error', (err) => {
        fs.unlink(imagePath, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function main() {
  try {
    const imagePath = await downloadImage();
    console.log('✅ New high resolution image downloaded successfully');
    console.log('You can now run the image processing script');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
