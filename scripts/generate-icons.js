const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

async function generateIcons() {
  const sourceLogo = path.join(__dirname, '../public/images/logo.png');
  const publicDir = path.join(__dirname, '../public');

  // Vérifier si le logo source existe
  if (!fs.existsSync(sourceLogo)) {
    console.error('Logo source non trouvé :', sourceLogo);
    return;
  }

  // Générer les icônes pour chaque taille
  for (const { size, name } of sizes) {
    await sharp(sourceLogo)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, name));
    
    console.log(`Généré : ${name}`);
  }

  // Pour le favicon.ico, nous utiliserons le PNG 32x32
  fs.copyFileSync(
    path.join(publicDir, 'favicon-32x32.png'),
    path.join(publicDir, 'favicon.ico')
  );
  console.log('Copié : favicon.ico');
}

generateIcons().catch(console.error);
