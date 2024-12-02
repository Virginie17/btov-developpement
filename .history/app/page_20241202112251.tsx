'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Globe, LineChart, Paintbrush } from 'lucide-react'

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Création de sites web',
    description: 'Sites vitrines, e-commerce et applications web sur mesure.'
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: 'Refonte de site',
    description: 'Modernisation et optimisation de votre site existant.'
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'Référencement SEO',
    description: 'Optimisation pour les moteurs de recherche et visibilité en ligne.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Optimisation web',
    description: 'Performance, accessibilité et expérience utilisateur optimales.'
  }
]

export default function Home() {
  return (
    <>
      {/* Hero Section Responsive */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
        <Image
  src="/images/tour2.webp"
  alt="Vue panoramique des tours de La Rochelle au coucher du soleil"
  fill
  sizes="100vw"
  quality={80}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
  className="object-cover brightness-[0.7]"
/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-4 sm:space-y-6"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              Transformons vos idées<br />
              <span className="text-primary-400">en réalité digitale</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-md max-w-2xl mx-auto px-4">
              Création de sites web professionnels à La Rochelle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-primary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-primary-600 transition-all hover:scale-105 shadow-lg text-center"
              >
                Démarrer un projet
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/20 transition-all border border-white/30 text-center"
              >
                Voir mes réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section Responsive */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Mes Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Responsive */}
      <section className="bg-secondary-50 dark:bg-gray-800 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/la rochelle3.webp"
                  alt="Port de La Rochelle avec ses bateaux et architecture historique"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  quality={75}
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/fallback.jpg';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-48 sm:h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/photo.webp"
                  alt="Virginie - Développeuse Web"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                  quality={75}
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/fallback.jpg';
                  }}
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 dark:text-white">
                Développement Web à La Rochelle
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
                Passionnée par le développement web,
                je mets mes compétences au service de vos projets digitaux. Basée à La Rochelle,
                j'accompagne les entreprises locales et nationales dans leur transformation numérique.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
              >
                En savoir plus
                <svg
                  className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}