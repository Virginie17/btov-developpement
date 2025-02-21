'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/lib/blog';

interface Props {
  posts: BlogPost[];
}

export default function BlogPostGrid({ posts }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300">
                  {post.category}
                </span>
                {post.subcategory && (
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {post.subcategory}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center justify-between border-t dark:border-gray-700 pt-4">
                <div className="flex items-center">
                  <div className="relative h-10 w-10 mr-3">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="rounded-full object-cover ring-2 ring-primary-100 dark:ring-primary-900"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-900 dark:text-white">
                      {post.author.name}
                    </span>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
                <motion.div
                  className="text-primary-600 dark:text-primary-400"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="w-5 h-5"
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
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
