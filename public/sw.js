/**
 * Service Worker pour BTOV Développement
 * Version 1.2.0
 */

// Nom du cache
const CACHE_NAME = 'btov-cache-v1';
const OFFLINE_URL = '/offline.html';

// Ressources à mettre en cache immédiatement
const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/favicon.ico',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/images/fallback.jpg',
  '/images/logo.svg',
  // CSS et JS principaux
  '/styles/main.css',
  // Polices
  '/fonts/inter-var.woff2',
];

// Ressources à mettre en cache lors de leur utilisation
const RUNTIME_CACHE_URLS = [
  /\.(js|css)$/,  // Tous les fichiers JS et CSS
  /\/images\//,   // Toutes les images
  /\/api\//,      // Toutes les API
];

// Installation du service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Mise en cache des ressources statiques');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activation du service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        }).map(cacheName => {
          console.log('Service Worker: Suppression de l\'ancien cache', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      console.log('Service Worker: Activé et contrôle la page');
      return self.clients.claim();
    })
  );
});

// Stratégie de cache pour les requêtes
self.addEventListener('fetch', event => {
  // Ne pas intercepter les requêtes d'analyse ou les requêtes non GET
  if (event.request.method !== 'GET' || 
      event.request.url.includes('analytics') || 
      event.request.url.includes('google-analytics')) {
    return;
  }
  
  // Stratégie pour les requêtes de navigation (HTML)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // Stratégie pour les ressources statiques (images, CSS, JS)
  const isStaticAsset = RUNTIME_CACHE_URLS.some(pattern => {
    return pattern.test(event.request.url);
  });

  if (isStaticAsset) {
    // Stratégie Stale-While-Revalidate pour les ressources statiques
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        // Utiliser la version en cache si disponible
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            // Mettre à jour le cache avec la nouvelle version
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(error => {
            console.error('Fetch failed:', error);
            // Retourner la version en cache en cas d'erreur réseau
            return cachedResponse;
          });

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // Stratégie Network First pour les autres requêtes
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Mettre en cache la réponse si elle est valide
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Utiliser la version en cache en cas d'erreur réseau
        return caches.match(event.request);
      })
  );
});

// Gestion des notifications push
self.addEventListener('push', event => {
  if (!event.data) return;
  
  try {
    const data = event.data.json();
    const options = {
      body: data.body || 'Nouvelle notification de BTOV Développement',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-96x96.png',
      data: {
        url: data.url || '/'
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(
        data.title || 'BTOV Développement', 
        options
      )
    );
  } catch (error) {
    console.error('Erreur lors du traitement de la notification push:', error);
  }
});

// Gestion des clics sur les notifications
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.notification.data && event.notification.data.url) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});

// Gestion des erreurs
self.addEventListener('error', event => {
  console.error('Service Worker error:', event.message);
});

// Synchronisation en arrière-plan
self.addEventListener('sync', event => {
  if (event.tag === 'sync-form-data') {
    event.waitUntil(syncFormData());
  }
});

// Fonction pour synchroniser les données de formulaire
async function syncFormData() {
  try {
    const db = await openDatabase();
    const tx = db.transaction('formData', 'readonly');
    const store = tx.objectStore('formData');
    const pendingForms = await store.getAll();
    
    for (const form of pendingForms) {
      try {
        const response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form.data)
        });
        
        if (response.ok) {
          // Supprimer le formulaire de la base de données
          const deleteTx = db.transaction('formData', 'readwrite');
          const deleteStore = deleteTx.objectStore('formData');
          await deleteStore.delete(form.id);
        }
      } catch (error) {
        console.error('Erreur lors de la synchronisation du formulaire:', error);
      }
    }
  } catch (error) {
    console.error('Erreur lors de l\'accès à la base de données:', error);
  }
}

// Fonction pour ouvrir la base de données
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('btovOfflineDB', 1);
    
    request.onupgradeneeded = event => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('formData')) {
        db.createObjectStore('formData', { keyPath: 'id' });
      }
    };
    
    request.onsuccess = event => {
      resolve(event.target.result);
    };
    
    request.onerror = event => {
      reject(event.target.error);
    };
  });
}

console.log('Service Worker: Fichier chargé');
