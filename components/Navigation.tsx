'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10" aria-label="Retour à l'accueil">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/logo.webp"
                alt="Logo B to V Développement"
                width={48}
                height={48}
                className="object-contain"
                priority
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvJSpNPjg2Pj06MikvRV44QjNBOTo7P0JHSkdGUENGPz7/2wBDARUXFx4eHh4fHx8+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <span className="text-xl font-bold hidden sm:inline text-primary-600">B to V Développement</span>
          </Link>

          {/* Bouton Menu Mobile */}
          <button 
            className="md:hidden text-gray-600 hover:text-primary-500 z-10"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center justify-end flex-1 space-x-1">
            <Link href="/" className="px-3 py-2 text-sm text-gray-700 hover:text-primary-500 transition-colors">
              Accueil
            </Link>
            <Link href="/about" className="px-3 py-2 text-sm text-gray-700 hover:text-primary-500 transition-colors">
              À propos
            </Link>
            <Link href="/services" className="px-3 py-2 text-sm text-gray-700 hover:text-primary-500 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="px-3 py-2 text-sm text-gray-700 hover:text-primary-500 transition-colors">
              Portfolio
            </Link>
            <Link href="/tarifs" className="px-3 py-2 text-sm text-gray-700 hover:text-primary-500 transition-colors">
              Tarifs
            </Link>
            <Link href="/blog" className="px-3 py-2 text-sm text-gray-700 hover:text-primary-500 transition-colors">
              Blog
            </Link>
            <Link href="/cahier-des-charges" className="px-3 py-2 text-sm text-gray-700 hover:text-primary-500 transition-colors">
              Cahier des charges
            </Link>
            <Link href="/contact" className="ml-2 px-4 py-2 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Menu Mobile */}
          <div
            className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transform transition-transform duration-200 ease-in-out ${
              isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <div className="flex flex-col p-4 space-y-2">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Accueil
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                À propos
              </Link>
              <Link
                href="/services"
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
              <Link
                href="/tarifs"
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Tarifs
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                href="/cahier-des-charges"
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Cahier des charges
              </Link>
              <div className="flex justify-center pt-2">
                <Link
                  href="/contact"
                  className="inline-block w-24 px-2 py-1.5 text-xs bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors text-center"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
