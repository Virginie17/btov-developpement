'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-primary-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              À Propos de B to V Développement
            </h1>
            <div className="flex items-center space-x-2">
  <span>b</span>
  <span>to</span>
  <span>v</span>
</div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise et passion au service de vos projets web
            </p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-white p-8 hover:shadow-3xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/10 to-transparent" />
            <Image
              src="/images/logo.webp"
              alt="Logo B to V Développement"
              className="object-contain z-10 relative drop-shadow-xl"
              fill
              priority
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Mon Histoire
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                B to V Développement est née d une passion pour le développement web et d une volonté de créer des solutions digitales sur mesure pour mes clients.
              </p>
              <p>
                Basée à La Rochelle, ma société accompagne les entreprises dans leur transformation numérique en proposant des services de création de sites web, de refonte, d optimisation et de référencement SEO.
              </p>
              <p>
                Mon approche combine expertise technique, créativité et compréhension approfondie des besoins de mes clients pour délivrer des solutions web performantes et adaptées.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Mes Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-primary-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const values = [
  {
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet, en utilisant les meilleures pratiques et technologies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Nous restons à la pointe de l'innovation pour offrir des solutions modernes et performantes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Engagement",
    description: "Nous nous engageons pleinement dans la réussite de chaque projet client.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];
