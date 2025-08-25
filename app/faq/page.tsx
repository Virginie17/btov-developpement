'use client';

import { generateFAQSchema } from '@/app/seo/localSeoConfig';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import { faqItems, faqCategories } from './data';

export default function FAQPage() {
  // Générer le schema JSON-LD pour toutes les FAQ
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <main className="bg-white">
      {/* En-tête de la page */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur la création de sites web, le référencement local et nos services.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Accès rapide aux catégories :
            </h2>
            <div className="flex flex-wrap gap-3">
              {faqCategories.map((category, index) => (
                <a 
                  key={index} 
                  href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-gray-100 hover:bg-primary-100 text-gray-800 px-4 py-2 rounded-full transition-colors"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sections de FAQ par catégorie */}
      {faqCategories.map((category, index) => (
        <section 
          key={index} 
          id={category.title.toLowerCase().replace(/\s+/g, '-')}
          className={`py-12 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-primary-500 pl-4">
                {category.title}
              </h2>
              <div className="space-y-6">
                {category.faqs.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer">
                        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                        <span className="ml-6 flex-shrink-0 text-primary-500 group-open:rotate-180 transition-transform duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <CTA 
        title="Vous avez d'autres questions ?"
        description="N'hésitez pas à me contacter pour discuter de votre projet ou pour toute question supplémentaire."
        buttonText="Contactez-moi"
        buttonLink="/contact"
        secondaryButtonText="Demander un devis"
        secondaryButtonLink="/contact"
      />

      {/* Balisage schema.org pour FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}

