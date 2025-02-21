'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar, Tag, ArrowLeft, Eye } from 'lucide-react';

type Article = {
  id: number;
  title: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  views: number;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
};

export default function BlogPostContent({ article }: { article: Article }) {
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Article non trouvé
          </h1>
          <Link
            href="/blog"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Retour aux articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Link>

          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/90 dark:bg-gray-800/90 text-primary-600 dark:text-primary-400 mb-4">
                {article.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {article.readTime}
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  {article.views} vues
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-8">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="ml-4">
              <div className="text-gray-900 dark:text-white font-medium">
                {article.author.name}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                Développeuse Web Full Stack
              </div>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace('##', '').trim()}
                  </h2>
                );
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={index} className="list-disc pl-6 mb-4">
                    <li>{paragraph.replace('-', '').trim()}</li>
                  </ul>
                );
              }
              if (paragraph.trim()) {
                return <p key={index} className="mb-4">{paragraph.trim()}</p>;
              }
              return null;
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
