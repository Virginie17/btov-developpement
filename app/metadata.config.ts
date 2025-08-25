import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark'
}

export const metadata: Metadata = {
  metadataBase: new URL('https://btov-developpement.fr'),
  title: {
    template: '%s | BTOV Développement',
    default: 'BTOV Développement - Création de sites web et applications sur mesure',
  },
  description: 'Développement de sites web et applications sur mesure. Expertise en création de sites vitrines, e-commerce et applications web personnalisées.',
  applicationName: 'BTOV Développement',
  authors: [{ name: 'BTOV Développement', url: 'https://btov-developpement.fr' }],
  generator: 'Next.js',
  keywords: ['développement web', 'site web', 'application web', 'La Rochelle', 'landing page express'],
  referrer: 'origin-when-cross-origin',
  creator: 'BTOV Développement',
  publisher: 'BTOV Développement',
  category: 'Technology',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'BTOV Développement'
  },
  formatDetection: {
    telephone: true
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://btov-developpement.fr',
    title: 'BTOV Développement - Création de sites web et applications sur mesure',
    description: 'Développement de sites web et applications sur mesure. Expertise en création de sites vitrines, e-commerce et applications web personnalisées.',
    siteName: 'BTOV Développement',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BTOV Développement'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BTOV Développement - Création de sites web et applications sur mesure',
    description: 'Développement de sites web et applications sur mesure. Expertise en création de sites vitrines, e-commerce et applications web personnalisées.',
    images: ['/og-image.jpg']
  },
  verification: {
    google: 'google-site-verification-code',
  }
}
