'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Timer, HelpCircle } from 'lucide-react';

export default function OffreLancement() {
  const avantages = [
    "Réduction de 20% sur tout projet signé avant le 31 janvier 2025",
    "Forfaits à prix réduit pour les sites vitrines et e-commerces",
    "Audit technique ou SEO offert pour tout contrat supérieur à 1 000 €"
  ];

  const faq = [
    {
      question: "Comment bénéficier de l'offre ?",
      reponse: "Il suffit de me contacter via le formulaire de contact en mentionnant l'offre de lancement. Je vous recontacterai rapidement pour discuter de votre projet."
    },
    {
      question: "L'offre est-elle cumulable avec d'autres promotions ?",
      reponse: "Non, cette offre n'est pas cumulable avec d'autres promotions en cours."
    },
    {
      question: "Que comprend l'audit technique/SEO offert ?",
      reponse: "L'audit comprend une analyse complète de votre site actuel ou de votre présence en ligne, avec des recommandations détaillées pour l'amélioration."
    }
  ];

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Offre spéciale pour nos premiers clients
          </h1>

          <div className="bg-blue-50 p-6 rounded-xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Timer className="w-6 h-6 text-blue-600" />
              <p className="text-lg font-semibold">
                Offre valable jusqu&apos;au 31 janvier 2025
              </p>
            </div>
            <div className="space-y-4">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
                  <p className="text-lg">{avantage}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-12">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold 
              hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Contactez-moi dès maintenant
            </Link>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6" />
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.reponse}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Partagez l&apos;offre</h3>
            <div className="flex justify-center gap-4">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://btov-dev.com/offre-lancement')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077b5] text-white px-4 py-2 rounded hover:bg-opacity-90"
              >
                LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://btov-dev.com/offre-lancement')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877f2] text-white px-4 py-2 rounded hover:bg-opacity-90"
              >
                Facebook
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
