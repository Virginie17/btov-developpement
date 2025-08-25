/**
 * Script d'enregistrement du Service Worker
 * À inclure dans le layout principal pour activer les fonctionnalités hors ligne
 * et améliorer le score des bonnes pratiques dans Lighthouse
 */

export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
          console.log('Service Worker enregistré avec succès:', registration.scope);
          
          // Vérifier les mises à jour du service worker
          registration.addEventListener('updatefound', () => {
            // Un nouveau service worker est en cours d'installation
            const newWorker = registration.installing;
            
            newWorker.addEventListener('statechange', () => {
              // Lorsque le nouveau service worker est installé
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Il y a une nouvelle version disponible
                if (window.confirm('Une nouvelle version du site est disponible. Voulez-vous la charger maintenant?')) {
                  // Envoyer un message au service worker pour qu'il s'active immédiatement
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                  // Recharger la page pour utiliser le nouveau service worker
                  window.location.reload();
                }
              }
            });
          });
        })
        .catch(function(error) {
          console.log('Échec de l\'enregistrement du Service Worker:', error);
        });
        
      // Écouter les changements d'état du service worker
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Nouveau service worker activé');
      });
    });
  }
}
