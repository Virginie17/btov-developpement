const fs = require('fs');
const path = require('path');

// Dossiers à nettoyer avant le build
const cleanDirectories = [
  '.next',
  '.vercel/output',
  'node_modules/.cache'
];

// Fonction pour supprimer un dossier de manière récursive
function removeDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`Cleaned ${dirPath}`);
  }
}

// Nettoyer les dossiers
cleanDirectories.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  removeDirectory(fullPath);
});

console.log('Pre-build cleanup completed');
