import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import { homeMetadata, jsonLd } from './metadata'
import JsonLd from './components/JsonLd'

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <JsonLd jsonLd={jsonLd} />
      </head>
      <body className={`${outfit.className} min-h-screen antialiased`}>
        <div className="relative">
          <Navigation />
          <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}