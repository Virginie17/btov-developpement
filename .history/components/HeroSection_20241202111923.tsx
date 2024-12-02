'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/tour2.webp"
          alt="Vue panoramique des tours de La Rochelle au coucher du soleil"
          fill
          sizes="100vw"
          quality={80}
          priority
          className="object-cover brightness-[0.7]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Création de sites web à La Rochelle
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            Développement sur mesure, référencement SEO et solutions digitales pour votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
              >
                Commencer un projet
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/services"
                className="inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Découvrir nos services
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}