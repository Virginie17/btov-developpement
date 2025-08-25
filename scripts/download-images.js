const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const images = [
  {
    name: 'fashion-store-desktop',
    url: 'https://placehold.co/1920x1080/e2e8f0/1e293b?text=Fashion+Store+Desktop',
    width: 1920,
    height: 1080
  },
  {
    name: 'fashion-store-mobile',
    url: 'https://placehold.co/390x844/e2e8f0/1e293b?text=Fashion+Store+Mobile',
    width: 390,
    height: 844
  },
  {
    name: 'fashion-store-thumb',
    url: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Fashion+Store+Thumb',
    width: 400,
    height: 300
  },
  {
    name: 'saas-desktop',
    url: 'https://placehold.co/1920x1080/f0e2e8/1e293b?text=SaaS+Dashboard+Desktop',
    width: 1920,
    height: 1080
  },
  {
    name: 'saas-mobile',
    url: 'https://placehold.co/390x844/f0e2e8/1e293b?text=SaaS+Dashboard+Mobile',
    width: 390,
    height: 844
  },
  {
    name: 'saas-thumb',
    url: 'https://placehold.co/400x300/f0e2e8/1e293b?text=SaaS+Dashboard+Thumb',
    width: 400,
    height: 300
  },
  {
    name: 'immo-desktop',
    url: 'https://placehold.co/1920x1080/e8f0e2/1e293b?text=Real+Estate+Desktop',
    width: 1920,
    height: 1080
  },
  {
    name: 'immo-mobile',
    url: 'https://placehold.co/390x844/e8f0e2/1e293b?text=Real+Estate+Mobile',
    width: 390,
    height: 844
  },
  {
    name: 'immo-thumb',
    url: 'https://placehold.co/400x300/e8f0e2/1e293b?text=Real+Estate+Thumb',
    width: 400,
    height: 300
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const data = [];
      response.on('data', (chunk) => data.push(chunk));
      response.on('end', () => resolve(Buffer.concat(data)));
      response.on('error', reject);
    }).on('error', reject);
  });
};

const processImage = async (image) => {
  try {
    console.log(`Downloading ${image.name}...`);
    const buffer = await downloadImage(image.url);
    
    console.log(`Processing ${image.name}...`);
    const outputPath = path.join(__dirname, '..', 'public', 'images', 'portfolio', `${image.name}.webp`);
    
    await sharp(buffer)
      .resize(image.width, image.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    console.log(`Successfully processed ${image.name}`);
  } catch (error) {
    console.error(`Error processing ${image.name}:`, error);
  }
};

const main = async () => {
  console.log('Starting image processing...');
  await Promise.all(images.map(processImage));
  console.log('Finished processing all images');
};

main().catch(console.error);
