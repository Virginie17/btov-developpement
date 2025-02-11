const sharp = require('sharp');
const path = require('path');

async function convertLogo() {
  const sourceLogo = path.join(__dirname, '../public/images/logo.webp');
  const outputLogo = path.join(__dirname, '../public/images/logo.png');

  await sharp(sourceLogo)
    .png()
    .toFile(outputLogo);
  
  console.log('Logo converti en PNG avec succès');
}

convertLogo().catch(console.error);
