const puppeteer = require('puppeteer');
const sharp = require('sharp');
const path = require('path');

async function captureScreenshot(page, template, type) {
  // Charger le template
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body { font-family: 'Inter', sans-serif; }
        </style>
      </head>
      <body>
        ${template}
      </body>
    </html>
  `);

  // Attendre le chargement complet
  await page.waitForTimeout(1000);

  // Prendre la capture d'écran
  const screenshot = await page.screenshot({
    fullPage: true,
  });

  // Convertir en WebP et redimensionner
  await sharp(screenshot)
    .resize(800, 600, {
      fit: 'cover',
      position: 'top'
    })
    .webp({ quality: 80 })
    .toFile(path.join(__dirname, '..', 'public', 'images', 'landing-page-express', `${type}.webp`));
}

async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });

  // Charger les templates
  const restaurantBefore = require('../app/landing-page-express/templates/restaurant-before').default;
  const restaurantAfter = require('../app/landing-page-express/templates/restaurant-after').default;
  const artisanBefore = require('../app/landing-page-express/templates/artisan-before').default;
  const artisanAfter = require('../app/landing-page-express/templates/artisan-after').default;

  // Générer les captures d'écran
  await captureScreenshot(page, restaurantBefore(), 'restaurant-before');
  await captureScreenshot(page, restaurantAfter(), 'restaurant-after');
  await captureScreenshot(page, artisanBefore(), 'artisan-before');
  await captureScreenshot(page, artisanAfter(), 'artisan-after');

  await browser.close();
}

main().catch(console.error);
