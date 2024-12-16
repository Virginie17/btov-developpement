const fs = require('fs');
const path = require('path');

// Fonction pour vérifier si un chemin doit être ignoré
function shouldIgnorePath(filePath) {
  const ignorePatterns = [
    'node_modules',
    '.git',
    '.next',
    '.vercel',
    'README.md',
    '.env',
    '.env.local',
    '.vscode',
  ];

  return ignorePatterns.some(pattern => 
    filePath.includes(pattern) || 
    filePath.endsWith(pattern)
  );
}

// Fonction pour collecter tous les fichiers
function collectFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    if (shouldIgnorePath(filePath)) {
      return;
    }

    if (fs.statSync(filePath).isDirectory()) {
      collectFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
}

module.exports = {
  shouldIgnorePath,
  collectFiles,
};
