const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function checkDimensions(filePath) {
  try {
    const metadata = await sharp(filePath).metadata();
    console.log(`${path.basename(filePath)}: ${metadata.width}x${metadata.height}`);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
  }
}

async function checkAllImages() {
  const portfolioDir = path.join(__dirname, '..', 'public', 'images', 'portfolio');
  const files = fs.readdirSync(portfolioDir).filter(f => f.endsWith('.png'));
  
  for (const file of files) {
    await checkDimensions(path.join(portfolioDir, file));
  }
}

checkAllImages();
