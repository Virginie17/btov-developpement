'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Globe, LineChart, Paintbrush } from 'lucide-react'
import { homeJsonLd } from './metadata'
import PageJsonLd from '../components/PageJsonLd'
import ModernGeometryHero from '../components/ModernGeometryHero'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'
import Technologies from '../components/Technologies'
import Testimonials from '../components/Testimonials'
import WorkProcess from '../components/WorkProcess'
import CaseStudies from '../components/CaseStudies'
import Stats from '../components/Stats'
import LandingPageExpressShowcase from '../components/LandingPageExpressShowcase'
import NewServicePopup from '../components/NewServicePopup'

export default function Home() {
  return (
    <main>
      <PageJsonLd data={homeJsonLd} />
      <NewServicePopup />
      
      {/* Hero Section */}
      <ModernGeometryHero />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-primary-600 dark:text-primary-400 font-semibold mb-2 block"
            >
              Nos Services
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Solutions Web Professionnelles
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Des services adaptés à vos besoins spécifiques, de la conception à la mise en ligne
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sites Vitrines</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Sites élégants et performants pour présenter votre activité et convertir vos visiteurs en clients.
              </p>
              <Link href="/services/sites-vitrines" className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                <LineChart className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">E-commerce</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Boutiques en ligne optimisées pour les ventes, avec une expérience d'achat fluide et sécurisée.
              </p>
              <Link href="/services/e-commerce" className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Applications Web</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Applications sur mesure pour digitaliser vos processus et améliorer votre efficacité opérationnelle.
              </p>
              <Link href="/services/applications-web" className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
            
            {/* Service 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                <Paintbrush className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Refonte Web</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Modernisation complète de votre présence en ligne pour améliorer votre image et vos performances.
              </p>
              <Link href="/services/refonte-web" className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300"
              >
                Voir tous nos services
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Landing Page Express Showcase */}
      <LandingPageExpressShowcase />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Case Studies Section */}
      <CaseStudies />
      
      {/* Technologies Section */}
      <Technologies />
      
      {/* Work Process Section */}
      <WorkProcess />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* CTA Section */}
      <CTA 
        title="Prêt à lancer votre projet web ?"
        description="Discutons ensemble de vos besoins et voyons comment nous pouvons vous aider à concrétiser votre vision."
        buttonText="Contactez-nous"
        buttonLink="/contact"
      />
    </main>
  )
}