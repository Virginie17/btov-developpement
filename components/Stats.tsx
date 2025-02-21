'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';
import { Trophy, Users, Star, Zap } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    value: 50,
    label: "Projets réalisés",
    suffix: "+",
    description: "Sites web et applications développés avec succès"
  },
  {
    icon: Users,
    value: 45,
    label: "Clients satisfaits",
    suffix: "+",
    description: "Entreprises et particuliers accompagnés"
  },
  {
    icon: Star,
    value: 100,
    label: "Taux de satisfaction",
    suffix: "%",
    description: "Retours clients positifs"
  },
  {
    icon: Zap,
    value: 95,
    label: "Performance moyenne",
    suffix: "%",
    description: "Score Google Lighthouse"
  }
];

function CountUpAnimation({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
      {displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
            Chiffres clés
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Des résultats concrets pour vos projets web
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                  <Icon className="w-full h-full" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-4 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <CountUpAnimation value={stat.value} suffix={stat.suffix} />
                  <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-900 dark:text-white">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500/20 to-primary-500/0 rounded-b-xl" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ces chiffres reflètent mon engagement à fournir des solutions web de qualité et à garantir la satisfaction de mes clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
