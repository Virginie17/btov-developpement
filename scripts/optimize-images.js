const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

const imageMapping = {
  'la_rochelle.webp': {
    output: 'vieux-port-tech.jpg',
    description: 'Vue du Vieux-Port de La Rochelle',
    effect: 'tech' // Effet technologique
  },
  'la rochelle2.jpg': {
    output: 'vieux-port-commerce.jpg',
    description: 'Commerces du Vieux-Port',
    effect: 'warm' // Effet chaleureux
  },
  'la rochelle3.webp': {
    output: 'tours-conference.jpg',
    description: 'Les tours de La Rochelle',
    effect: 'event' // Effet événementiel
  },
  'tour.webp': {
    output: 'aquarium-business.jpg',
    description: 'Vue de La Rochelle',
    effect: 'business' // Effet professionnel
  },
  'tour2.webp': {
    output: 'entrepreneurs-lr.jpg',
    description: 'La Rochelle business district',
    effect: 'modern' // Effet moderne
  }
};

// Nouvelles images pour l'offre Landing Page Express
const landingPageExpressImages = {
  'restaurant-avant.jpg': {
    output: 'restaurant-avant.webp',
    description: 'Restaurant - Site web avant transformation',
    width: 800,
    height: 600,
    category: 'landing-page-express'
  },
  'restaurant-apres.jpg': {
    output: 'restaurant-apres.webp',
    description: 'Restaurant - Landing page après transformation',
    width: 800,
    height: 600,
    category: 'landing-page-express'
  },
  'menuiserie-avant.jpg': {
    output: 'menuiserie-avant.webp',
    description: 'Menuiserie - Site web avant transformation',
    width: 800,
    height: 600,
    category: 'landing-page-express'
  },
  'menuiserie-apres.jpg': {
    output: 'menuiserie-apres.webp',
    description: 'Menuiserie - Landing page après transformation',
    width: 800,
    height: 600,
    category: 'landing-page-express'
  }
};

// Préréglages pour différents types de contenu
const presets = {
  blog: {
    effects: ['modern', 'warm'],
    defaultEffect: 'modern'
  },
  portfolio: {
    effects: ['business', 'tech'],
    defaultEffect: 'business'
  },
  event: {
    effects: ['event', 'vibrant'],
    defaultEffect: 'event'
  },
  testimonial: {
    effects: ['warm', 'soft'],
    defaultEffect: 'warm'
  },
  'landing-page-express': {
    effects: ['business', 'modern'],
    defaultEffect: 'modern',
    sizes: [
      { width: 800, height: 600, suffix: 'large' },
      { width: 400, height: 300, suffix: 'medium' },
      { width: 200, height: 150, suffix: 'small' }
    ]
  }
};

// Fonction pour créer une miniature
const createThumbnail = async (inputPath, filename) => {
  const outputPath = path.join(__dirname, '../public/images/blog/thumbnails', filename);
  await sharp(inputPath)
    .resize(400, 267, { // Garde le ratio 3:2
      fit: 'cover',
      position: 'center'
    })
    .jpeg({
      quality: 80,
      chromaSubsampling: '4:4:4'
    })
    .toFile(outputPath);
  console.log(`✓ Created thumbnail: ${filename}`);
  return outputPath;
};

// Fonction pour créer une version WebP
const createWebP = async (inputPath, filename) => {
  const outputPath = path.join(__dirname, '../public/images/blog/webp', filename.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  await sharp(inputPath)
    .webp({
      quality: 85,
      effort: 6
    })
    .toFile(outputPath);
  console.log(`✓ Created WebP version: ${path.basename(outputPath)}`);
  return outputPath;
};

// Fonction pour créer des images responsive pour différentes tailles d'écran
const createResponsiveImages = async (inputPath, filename, category) => {
  if (!presets[category] || !presets[category].sizes) {
    return null;
  }

  const results = [];
  const baseName = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  const outputDir = path.join(__dirname, `../public/images/${category}`);

  // Assurer que le répertoire existe
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }

  for (const size of presets[category].sizes) {
    const outputFilename = `${baseName}-${size.suffix}.webp`;
    const outputPath = path.join(outputDir, outputFilename);

    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: 80,
        effort: 6
      })
      .toFile(outputPath);

    results.push({
      path: `/images/${category}/${outputFilename}`,
      width: size.width,
      height: size.height,
      suffix: size.suffix
    });

    console.log(`✓ Created responsive image: ${outputFilename}`);
  }

  return results;
};

// Fonction pour générer des images LQIP (Low Quality Image Placeholders)
const createLQIP = async (inputPath, filename, category) => {
  const outputDir = path.join(__dirname, `../public/images/${category}/lqip`);
  const outputFilename = filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const outputPath = path.join(outputDir, outputFilename);

  // Assurer que le répertoire existe
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }

  await sharp(inputPath)
    .resize(20, 20, {
      fit: 'inside',
    })
    .blur(10)
    .webp({
      quality: 20,
      effort: 3
    })
    .toFile(outputPath);

  console.log(`✓ Created LQIP: ${outputFilename}`);
  return `/images/${category}/lqip/${outputFilename}`;
};

// Fonction pour ajouter des effets
const addEffect = async (inputPath, filename, effectType) => {
  const outputPath = path.join(__dirname, '../public/images/blog/effects', filename);
  let pipeline = sharp(inputPath);

  switch (effectType) {
    case 'tech':
      pipeline = pipeline
        .tint({ r: 0, g: 100, b: 150 })
        .modulate({ brightness: 1.1, saturation: 1.2 })
        .sharpen()
        .gamma(1.1);
      break;
    case 'warm':
      pipeline = pipeline
        .modulate({ brightness: 1.1, saturation: 1.2, hue: 15 })
        .tint({ r: 255, g: 200, b: 150 })
        .gamma(1.1);
      break;
    case 'vibrant':
      pipeline = pipeline
        .modulate({ brightness: 1.2, saturation: 1.4 })
        .sharpen()
        .tint({ r: 255, g: 230, b: 200 })
        .gamma(1.2);
      break;
    case 'soft':
      pipeline = pipeline
        .modulate({ brightness: 1.05, saturation: 0.9 })
        .blur(0.5)
        .tint({ r: 240, g: 240, b: 250 })
        .gamma(1.05);
      break;
    case 'dramatic':
      pipeline = pipeline
        .modulate({ brightness: 1.1, saturation: 1.3, hue: -10 })
        .sharpen()
        .tint({ r: 220, g: 180, b: 180 })
        .gamma(1.2);
      break;
    case 'retro':
      pipeline = pipeline
        .modulate({ brightness: 0.95, saturation: 0.7, hue: 15 })
        .tint({ r: 240, g: 220, b: 180 })
        .gamma(1.1)
        .sepia();
      break;
    case 'event':
      pipeline = pipeline
        .modulate({ brightness: 1.15, saturation: 1.3 })
        .sharpen()
        .tint({ r: 255, g: 220, b: 180 })
        .gamma(1.2);
      break;
    case 'business':
      pipeline = pipeline
        .modulate({ brightness: 1.05, saturation: 0.9 })
        .sharpen()
        .tint({ r: 200, g: 200, b: 220 })
        .gamma(1.1);
      break;
    case 'modern':
      pipeline = pipeline
        .modulate({ brightness: 1.1, saturation: 1.1 })
        .sharpen()
        .gamma(1.2)
        .tint({ r: 180, g: 200, b: 255 });
      break;
  }

  const vignette = {
    tech: { sigma: 10, opacity: 0.3 },
    warm: { sigma: 15, opacity: 0.2 },
    vibrant: { sigma: 12, opacity: 0.25 },
    soft: { sigma: 20, opacity: 0.15 },
    dramatic: { sigma: 8, opacity: 0.4 },
    retro: { sigma: 15, opacity: 0.3 },
    event: { sigma: 12, opacity: 0.25 },
    business: { sigma: 10, opacity: 0.3 },
    modern: { sigma: 12, opacity: 0.25 }
  };

  const vignetteSettings = vignette[effectType] || { sigma: 12, opacity: 0.25 };
  
  const mask = await sharp({
    create: {
      width: 1200,
      height: 800,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: vignetteSettings.opacity }
    }
  })
  .blur(vignetteSettings.sigma)
  .toBuffer();

  pipeline = pipeline.composite([{ input: mask, blend: 'multiply' }]);

  await pipeline
    .jpeg({ quality: 85 })
    .toFile(outputPath);
  
  console.log(`✓ Added ${effectType} effect: ${filename}`);
  return outputPath;
};

const optimizeImage = async (inputPath, outputPath, description, effect) => {
  try {
    await sharp(inputPath)
      .resize(1200, 800, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({
        quality: 85,
        chromaSubsampling: '4:4:4'
      })
      .toFile(outputPath);
    console.log(`✓ Optimized: ${path.basename(outputPath)}`);

    const filename = path.basename(outputPath);

    await Promise.all([
      createThumbnail(outputPath, filename),
      createWebP(outputPath, filename),
      addEffect(outputPath, filename, effect)
    ]);

    return {
      path: outputPath,
      description,
      thumbnail: `/images/blog/thumbnails/${filename}`,
      webp: `/images/blog/webp/${filename.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`,
      effect: `/images/blog/effects/${filename}`
    };
  } catch (error) {
    console.error(`× Error processing ${inputPath}:`, error);
    return null;
  }
};

// Optimisation spécifique pour les images de l'offre Landing Page Express
const optimizeLandingPageExpressImage = async (inputPath, outputConfig) => {
  try {
    const { output, description, width, height, category } = outputConfig;
    const outputDir = path.join(__dirname, `../public/images/${category}`);
    
    // Assurer que le répertoire existe
    try {
      await fs.mkdir(outputDir, { recursive: true });
    } catch (error) {
      if (error.code !== 'EEXIST') {
        throw error;
      }
    }
    
    const outputPath = path.join(outputDir, output);
    
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: 85,
        effort: 6
      })
      .toFile(outputPath);
    
    console.log(`✓ Optimized Landing Page Express image: ${output}`);
    
    // Créer des versions responsives et LQIP
    const responsiveImages = await createResponsiveImages(inputPath, output, category);
    const lqipPath = await createLQIP(inputPath, output, category);
    
    return {
      path: `/images/${category}/${output}`,
      description,
      width,
      height,
      category,
      responsiveImages,
      lqip: lqipPath
    };
  } catch (error) {
    console.error(`× Error processing Landing Page Express image ${inputPath}:`, error);
    return null;
  }
};

const generateMetadata = async (images) => {
  const metadata = images.filter(Boolean).map(img => ({
    original: path.basename(img.path),
    description: img.description,
    dimensions: {
      full: '1200x800',
      thumbnail: '400x267'
    },
    formats: {
      jpg: {
        path: `/images/blog/${path.basename(img.path)}`,
        quality: '85%'
      },
      webp: {
        path: img.webp,
        quality: '85%'
      }
    },
    versions: {
      thumbnail: img.thumbnail,
      effect: img.effect
    }
  }));

  await fs.writeFile(
    path.join(__dirname, '../public/images/blog/metadata.json'),
    JSON.stringify(metadata, null, 2)
  );
};

// Générer les métadonnées pour les images de l'offre Landing Page Express
const generateLandingPageExpressMetadata = async (images) => {
  const metadata = images.filter(Boolean).map(img => ({
    path: img.path,
    description: img.description,
    dimensions: {
      width: img.width,
      height: img.height
    },
    category: img.category,
    responsiveImages: img.responsiveImages,
    lqip: img.lqip
  }));

  await fs.writeFile(
    path.join(__dirname, '../public/images/landing-page-express/metadata.json'),
    JSON.stringify(metadata, null, 2)
  );
};

const main = async () => {
  const sourceDir = path.join(__dirname, '../public/images');
  const targetDir = path.join(__dirname, '../public/images/blog');
  
  console.log('🔄 Starting image processing...');
  
  // Traitement des images standard
  const processedImages = await Promise.all(
    Object.entries(imageMapping).map(async ([source, config]) => {
      const sourcePath = path.join(sourceDir, source);
      const outputPath = path.join(targetDir, config.output);
      
      try {
        await fs.access(sourcePath);
        return await optimizeImage(sourcePath, outputPath, config.description, config.effect);
      } catch (error) {
        console.error(`× Source image not found: ${source}`);
        return null;
      }
    })
  );

  // Traitement des images pour l'offre Landing Page Express
  const processedLandingPageExpressImages = await Promise.all(
    Object.entries(landingPageExpressImages).map(async ([source, config]) => {
      const sourcePath = path.join(sourceDir, source);
      
      try {
        await fs.access(sourcePath);
        return await optimizeLandingPageExpressImage(sourcePath, config);
      } catch (error) {
        console.error(`× Source image not found: ${source}`);
        return null;
      }
    })
  );

  // Génération des métadonnées
  await generateMetadata(processedImages);
  await generateLandingPageExpressMetadata(processedLandingPageExpressImages);
  
  console.log('✨ Image processing complete!');
};

main().catch(console.error);
