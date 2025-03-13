'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag, Eye } from 'lucide-react';
import Link from 'next/link';
import OptimizedImage from './OptimizedImage';
import { articles } from '@/app/blog/data';

const featuredPosts = Object.values(articles).slice(0, 3);

const categories = [
  { name: "Tous", count: Object.keys(articles).length },
  { name: "Développement", count: Object.values(articles).filter(post => post.category === "Développement").length },
  { name: "Design", count: Object.values(articles).filter(post => post.category === "Design").length },
  { name: "SEO", count: Object.values(articles).filter(post => post.category === "SEO").length }
];

export default function BlogPreview() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
            Blog & Ressources
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Découvrez mes derniers articles et conseils pour réussir votre présence en ligne
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="text-gray-900 dark:text-white font-medium">{category.name}</span>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({category.count})</span>
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <OptimizedImage
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  preset="blog"
                  className="object-cover"
                  quality={75}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/90 dark:bg-gray-800/90 text-primary-600 dark:text-primary-400">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {post.views}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt || post.content.slice(0, 150) + '...'}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-full text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg transition-all duration-300"
          >
            Voir tous les articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
