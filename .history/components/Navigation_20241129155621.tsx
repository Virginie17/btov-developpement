'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2"
        aria-label="Retour à l'accueil">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/logo.webp"
              alt="B to V Développement"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 3rem, 3rem"
            />
          </div>
          <span className="text-xl font-bold hidden sm:inline text-primary-600">B to V developpement</span>
        </Link>
        

        {/* Bouton Menu Mobile */}
        <button 
          className="md:hidden text-gray-600 hover:text-primary-500"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Navigation Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-primary-500 transition-colors">Accueil</Link>
          <Link href="/about" className="text-gray-600 hover:text-primary-500 transition-colors">À propos</Link>
          <Link href="/services" className="text-gray-600 hover:text-primary-500 transition-colors">Services</Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-primary-500 transition-colors">Portfolio</Link>
          <Link href="/blog" className="text-gray-600 hover:text-primary-500 transition-colors">Blog</Link>
          <Link href="/cahier-des-charges" className="text-gray-600 hover:text-primary-500 transition-colors">Cahier des charges</Link>
          <Link href="/contact" className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">Contact</Link>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link href="/" className="text-gray-600 hover:text-primary-500 transition-colors" onClick={toggleMenu}>Accueil</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-500 transition-colors" onClick={toggleMenu}>À propos</Link>
              <Link href="/services" className="text-gray-600 hover:text-primary-500 transition-colors" onClick={toggleMenu}>Services</Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-primary-500 transition-colors" onClick={toggleMenu}>Portfolio</Link>
              <Link href="/blog" className="text-gray-600 hover:text-primary-500 transition-colors" onClick={toggleMenu}>Blog</Link>
              <Link href="/cahier-des-charges" className="text-gray-600 hover:text-primary-500 transition-colors" onClick={toggleMenu}>Cahier des charges</Link>
              <Link href="/contact" className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-center" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
