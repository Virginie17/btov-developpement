const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    filename: 'modern-web-dev.jpg',
    alt: 'Modern Web Development'
  },
  {
    url: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    filename: 'seo-optimization.jpg',
    alt: 'SEO Optimization'
  },
  {
    url: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    filename: 'ux-design.jpg',
    alt: 'UX Design'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
};

const optimizeImage = async (buffer, filename) => {
  const outputPath = path.join(__dirname, '../public/blog', filename);
  
  await sharp(buffer)
    .resize(1200, 800, { fit: 'cover' })
    .jpeg({ quality: 80, progressive: true })
    .toFile(outputPath);
  
  console.log(`Optimized and saved: ${filename}`);
};

const processImages = async () => {
  for (const image of images) {
    try {
      console.log(`Downloading: ${image.filename}`);
      const buffer = await downloadImage(image.url);
      await optimizeImage(buffer, image.filename);
    } catch (error) {
      console.error(`Error processing ${image.filename}:`, error);
    }
  }
};

processImages();
