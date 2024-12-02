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
  title: 'B to V Développement | Création de sites web à La Rochelle',
  description: 'Agence de développement web à La Rochelle spécialisée dans la création de sites, la refonte, l\'optimisation et le référencement SEO.',
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