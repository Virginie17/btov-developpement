const sharp = require('sharp');
const path = require('path');
const https = require('https');

const testimonials = [
  {
    name: 'marie',
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80'
  },
  {
    name: 'thomas',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
  },
  {
    name: 'sophie',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80'
  },
  {
    name: 'lucas',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80'
  }
];

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

async function processImage(imageBuffer, name) {
  try {
    const outputPath = path.join(__dirname, '..', 'public', 'images', 'testimonials');
    
    // Créer le dossier s'il n'existe pas
    const fs = require('fs');
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    // Traiter l'image
    await sharp(imageBuffer)
      .resize(400, 400, {
        fit: 'cover',
        position: 'centre'
      })
      .jpeg({ quality: 90 })
      .toFile(path.join(outputPath, `${name}.jpg`));

    console.log(`✅ Image traitée pour ${name}`);
  } catch (error) {
    console.error(`Error processing ${name}:`, error);
  }
}

async function processAllImages() {
  for (const testimonial of testimonials) {
    console.log(`Downloading image for ${testimonial.name}...`);
    const imageBuffer = await downloadImage(testimonial.url);
    await processImage(imageBuffer, testimonial.name);
  }
}

processAllImages();
