'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Globe, LineChart, Paintbrush } from 'lucide-react'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials';
import Technologies from '@/components/Technologies';
import ServicesDetails from '@/components/ServicesDetails';
import BlogPreview from '@/components/BlogPreview';
import { homeJsonLd } from './metadata'
import PageJsonLd from '../components/PageJsonLd'
import ModernHero3D from '@/components/ModernHero3D';

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
      <PageJsonLd data={homeJsonLd} />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <ModernHero3D />
        {/* Services Section Responsive */}
        <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Mes Services</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Des solutions web sur mesure pour répondre à vos besoins spécifiques
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-primary-600 dark:text-primary-400 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <ServicesDetails />
        
        <Technologies />
        
        <BlogPreview />
        
        <Testimonials />
        
        {/* FAQ Section */}
        <FAQ />

        {/* About Section Responsive */}
        <section className="bg-secondary-50 dark:bg-gray-800 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
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
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-48 sm:h-48 rounded-xl overflow-hidden shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
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
                </motion.div>
              </motion.div>
              <motion.div 
                className="text-center md:text-left space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 dark:text-white">
                  Développement Web à La Rochelle
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
                  Passionnée par le développement web,
                  je mets mes compétences au service de vos projets digitaux. Basée à La Rochelle,
                  j'accompagne les entreprises locales et nationales dans leur transformation numérique.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Projets Réalisés</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Satisfaction Client</div>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 group"
                >
                  En savoir plus
                  <svg
                    className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform transition-transform group-hover:translate-x-1"
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
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}