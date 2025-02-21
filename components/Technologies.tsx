'use client';

import { motion } from 'framer-motion';

const technologies = [
  {
    category: "Frontend",
    skills: [
      { name: "React/Next.js", level: 95, color: "from-blue-500 to-blue-600" },
      { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-700" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-cyan-600" },
      { name: "Framer Motion", level: 85, color: "from-purple-500 to-purple-600" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90, color: "from-green-500 to-green-600" },
      { name: "API REST", level: 95, color: "from-indigo-500 to-indigo-600" },
      { name: "Base de données", level: 85, color: "from-blue-500 to-blue-600" },
      { name: "Sécurité Web", level: 90, color: "from-red-500 to-red-600" }
    ]
  },
  {
    category: "Outils & Pratiques",
    skills: [
      { name: "Git/GitHub", level: 95, color: "from-gray-600 to-gray-700" },
      { name: "SEO", level: 90, color: "from-orange-500 to-orange-600" },
      { name: "Performance Web", level: 95, color: "from-green-500 to-green-600" },
      { name: "Tests Unitaires", level: 85, color: "from-purple-500 to-purple-600" }
    ]
  }
];

export default function Technologies() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
            Technologies & Compétences
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Un ensemble complet d'outils et de compétences pour créer des solutions web performantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, categoryIndex) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                {tech.category}
              </h3>
              <div className="space-y-6">
                {tech.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Ces compétences sont constamment mises à jour pour rester à la pointe de la technologie
          </p>
          <div className="mt-8">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-full text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg transition-all duration-300"
            >
              Discuter de votre projet
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
