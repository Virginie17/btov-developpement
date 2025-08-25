import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import { jsonLd } from './metadata'
import JsonLd from '../components/JsonLd'
import AccessibilityProvider from '@/components/AccessibilityProvider'
import { fontClasses, inter } from './font-optimization'
import Script from 'next/script'
import { metadata, viewport } from './metadata.config'

export { metadata, viewport }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={fontClasses} suppressHydrationWarning>
      <head>
        <JsonLd jsonLd={jsonLd} />
        <meta name="csrf-token" content="{{csrf_token}}" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('Service Worker enregistré avec succès:', registration.scope);
                  })
                  .catch(function(error) {
                    console.log('Échec de l\\'enregistrement du Service Worker:', error);
                  });
              });
            }
            
            // Préchargement des polices critiques
            if ('fonts' in document) {
              Promise.all([
                document.fonts.load('1em Inter'),
                document.fonts.load('bold 1em Inter')
              ]).then(() => {
                document.documentElement.classList.add('fonts-loaded');
              });
            }
            
            // Désactiver les animations pendant le chargement initial
            document.documentElement.classList.add('no-animations');
            window.addEventListener('load', () => {
              setTimeout(() => {
                document.documentElement.classList.remove('no-animations');
              }, 300);
            });
          `}
        </Script>
        <Script id="performance-metrics" strategy="afterInteractive">
          {`
            // Mesurer et envoyer les métriques Web Vitals
            function sendWebVitals(metric) {
              const body = JSON.stringify(metric);
              // Utiliser sendBeacon si disponible, sinon fetch
              if (navigator.sendBeacon) {
                navigator.sendBeacon('/api/vitals', body);
              } else {
                fetch('/api/vitals', {
                  body,
                  method: 'POST',
                  keepalive: true,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              }
            }
            
            // Précharger les pages importantes après le chargement initial
            window.addEventListener('load', function() {
              setTimeout(function() {
                if (navigator.connection && (navigator.connection.saveData || 
                    (navigator.connection.effectiveType && navigator.connection.effectiveType !== '4g'))) {
                  return;
                }
                
                const links = ['/offres', '/contact', '/a-propos'];
                links.forEach(url => {
                  const link = document.createElement('link');
                  link.rel = 'prefetch';
                  link.href = url;
                  link.as = 'document';
                  document.head.appendChild(link);
                });
              }, 2000);
            });
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <AccessibilityProvider>
          <div className="relative">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:top-0 focus:left-0">
              Aller au contenu principal
            </a>
            <Navigation />
            <main id="main-content" className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
            <CookieBanner />
          </div>
        </AccessibilityProvider>
        <Script id="prefetch-pages" strategy="afterInteractive">
          {`
            // Exécuter le préchargement des pages importantes
            setTimeout(() => {
              try {
                if (typeof window !== 'undefined') {
                  // Ne pas précharger si l'utilisateur est en mode économie de données
                  if ('connection' in navigator && 
                      ((navigator.connection.saveData || 
                      (navigator.connection.effectiveType && 
                      navigator.connection.effectiveType !== '4g')))) {
                    return;
                  }
                  
                  // Attendre que le navigateur soit inactif
                  if ('requestIdleCallback' in window) {
                    window.requestIdleCallback(() => {
                      ['/offres', '/contact', '/a-propos', '/landing-page-express'].forEach(url => {
                        const link = document.createElement('link');
                        link.rel = 'prefetch';
                        link.href = url;
                        link.as = 'document';
                        document.head.appendChild(link);
                      });
                    });
                  } else {
                    // Fallback pour les navigateurs qui ne supportent pas requestIdleCallback
                    setTimeout(() => {
                      ['/offres', '/contact', '/a-propos', '/landing-page-express'].forEach(url => {
                        const link = document.createElement('link');
                        link.rel = 'prefetch';
                        link.href = url;
                        link.as = 'document';
                        document.head.appendChild(link);
                      });
                    }, 2000);
                  }
                }
              } catch (e) {
                console.error('Erreur lors du préchargement:', e);
              }
            }, 2000);
          `}
        </Script>
      </body>
    </html>
  )
}