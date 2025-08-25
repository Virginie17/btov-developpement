const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const formats = [
  {
    name: 'desktop',
    width: 1920,
    height: 1080,
    description: 'Version bureau (1920x1080)'
  },
  {
    name: 'mobile',
    width: 390,
    height: 844,
    description: 'Version mobile (390x844)'
  },
  {
    name: 'thumb',
    width: 400,
    height: 300,
    description: 'Miniature (400x300)'
  }
];

const projects = [
  {
    id: 'fashion-store',
    name: 'Fashion Store E-commerce',
    description: 'Site e-commerce de mode'
  },
  {
    id: 'saas',
    name: 'Application SaaS',
    description: 'Dashboard B2B'
  },
  {
    id: 'immo',
    name: 'Site Immobilier',
    description: 'Site vitrine immobilier'
  }
];

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const processImage = async (inputPath, outputPath, format) => {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Calculer les dimensions pour le recadrage
    const targetRatio = format.width / format.height;
    const imageRatio = metadata.width / metadata.height;
    
    let extractOptions;
    if (imageRatio > targetRatio) {
      // Image trop large
      const newWidth = metadata.height * targetRatio;
      const left = Math.floor((metadata.width - newWidth) / 2);
      extractOptions = {
        left,
        top: 0,
        width: Math.floor(newWidth),
        height: metadata.height
      };
    } else {
      // Image trop haute
      const newHeight = metadata.width / targetRatio;
      const top = Math.floor((metadata.height - newHeight) / 2);
      extractOptions = {
        left: 0,
        top,
        width: metadata.width,
        height: Math.floor(newHeight)
      };
    }

    await image
      .extract(extractOptions)
      .resize(format.width, format.height, {
        fit: 'fill'
      })
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log(`✅ Image traitée avec succès: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Erreur lors du traitement de l'image: ${error.message}`);
  }
};

const main = async () => {
  console.log('\n📸 Assistant de préparation des captures d\'écran\n');

  for (const project of projects) {
    console.log(`\n🎯 Projet: ${project.name} (${project.description})`);
    
    for (const format of formats) {
      console.log(`\n📱 Format: ${format.description}`);
      
      const outputPath = path.join(
        __dirname,
        '..',
        'public',
        'images',
        'portfolio',
        `${project.id}-${format.name}.webp`
      );

      console.log('\nInstructions:');
      console.log('1. Préparez une capture d\'écran de votre projet');
      console.log(`2. La capture sera redimensionnée en ${format.width}x${format.height}`);
      console.log('3. Elle sera automatiquement recadrée et optimisée');
      
      const inputPath = await question('\n📂 Chemin de votre capture d\'écran (ou "skip" pour passer): ');
      
      if (inputPath.toLowerCase() === 'skip') {
        console.log('⏭️ Format ignoré');
        continue;
      }

      if (!fs.existsSync(inputPath)) {
        console.log('❌ Fichier non trouvé, format ignoré');
        continue;
      }

      await processImage(inputPath, outputPath, format);
    }
  }

  console.log('\n✨ Traitement terminé !');
  rl.close();
};

main().catch(console.error);
