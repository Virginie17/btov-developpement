'use client';
import { motion } from 'framer-motion';

export default function PolitiqueConfidentialite() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-4xl"
    >
      <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
      
      <div className="space-y-8 text-gray-600 dark:text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">1. Collecte des informations</h2>
          <p>
            Nous collectons les informations que vous nous fournissez directement lorsque vous :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Remplissez un formulaire de contact</li>
            <li>Souscrivez à notre newsletter</li>
            <li>Nous contactez par email</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">2. Utilisation des informations</h2>
          <p>
            Les informations que nous collectons sont utilisées pour :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Répondre à vos demandes et questions</li>
            <li>Améliorer nos services</li>
            <li>Vous tenir informé de nos actualités</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">3. Protection des données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisée.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">4. Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être informé lorsqu'un cookie est envoyé.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">5. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">6. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter à :
          </p>
          <p className="mt-2">
            Email : btovdeveloppement@gmail.com
          </p>
        </section>
      </div>
    </motion.div>
  );
}
