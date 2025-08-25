'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTA({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink
}: CTAProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={buttonLink}
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-black/10 inline-block"
              >
                {buttonText}
              </Link>
              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  href={secondaryButtonLink}
                  className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all inline-block"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
