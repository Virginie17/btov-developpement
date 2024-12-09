'use client';
import { motion } from 'framer-motion';

export default function MentionsLegales() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-4xl"
    >
      <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
      
      <div className="space-y-8 text-gray-600 dark:text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">1. Informations légales</h2>
          <p>
            Le site b to v developpement est édité par B to V Développement, entreprise basée à La Rochelle, France.
          </p>
          <p className="mt-2">
            Email : btovdeveloppement@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">2. Hébergement</h2>
          <p>
            Ce site est hébergé par , [Adresse de l'hébergeur].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">4. Responsabilité</h2>
          <p>
            Les informations fournies sur ce site le sont à titre indicatif. B to V Développement ne saurait garantir l'exactitude, la complétude, l'actualité des informations diffusées sur le site. B to V Développement met tout en œuvre pour offrir aux utilisateurs des informations et/ou outils disponibles et vérifiés, mais ne saurait être tenue pour responsable des erreurs ou omissions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">5. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers d'autres sites. B to V Développement n'exerce aucun contrôle sur ces sites et n'assume aucune responsabilité quant à leur contenu.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
