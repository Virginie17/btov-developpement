import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.btov-dev.com'),
  title: 'B to V Développement | Création de sites web à La Rochelle',
  description: 'Agence de développement web à La Rochelle spécialisée dans la création de sites, la refonte, l\'optimisation et le référencement SEO. Devis gratuit pour votre projet web.',
  keywords: 'développement web, création site web, La Rochelle, agence web, SEO, site internet, développeur web, création site internet, refonte site web',
  authors: [{ name: 'B to V Développement' }],
  creator: 'B to V Développement',
  publisher: 'B to V Développement',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'B to V Développement | Création de sites web à La Rochelle',
    description: 'Agence de développement web à La Rochelle spécialisée dans la création de sites, la refonte, l\'optimisation et le référencement SEO.',
    url: 'https://www.btov-dev.com',
    siteName: 'B to V Développement',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'COLLEZ_ICI_VOTRE_CODE_DE_VERIFICATION',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${outfit.className} min-h-screen antialiased`}>
        <div className="relative">
          <Navigation />
          <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}