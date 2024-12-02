'use client';

import { Code, Globe, LineChart, Paintbrush } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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

export default function ServicesSection() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Nos services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Des solutions web adaptées à vos besoins
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary-50 py-12 sm:py-20">
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
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-48 sm:h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/photo.webp"
                  alt="Virginie - Développeuse Web"
                  fill
                  sizes="(max-width: 768px) 8rem, 12rem"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Développement web à La Rochelle
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Basée à La Rochelle, je crée des sites web et applications sur mesure pour les entreprises locales et nationales. Mon approche combine expertise technique et créativité pour donner vie à vos projets digitaux.
                </p>
                <div className="mt-8">
                  <a
                    href="/about"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    En savoir plus sur B to V
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}