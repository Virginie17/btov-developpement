'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BlogPost } from '';
const DEFAULT_IMAGE = '/images/default-blog-cover.jpg';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleImageError = (e: any) => {
    const img = e.target as HTMLImageElement;
    if (img.src !== DEFAULT_IMAGE) {
      console.warn(`Image failed to load: ${img.src}, falling back to default image`);
      img.src = DEFAULT_IMAGE;
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Actualités, conseils et bonnes pratiques du développement web
        </p>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
          {error}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={post.url} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48 w-full bg-zinc-200 dark:bg-zinc-700">
                  <Image
                    src={post.cover_image || DEFAULT_IMAGE}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    onError={handleImageError}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {new Date(post.published_at).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {post.tag_list[0]}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary-500 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-700">
                      <Image
                        src={post.user.profile_image}
                        alt={post.user.name}
                        fill
                        className="object-cover"
                        onError={handleImageError}
                        sizes="24px"
                      />
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {post.user.name}
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 ml-auto">
                      {post.reading_time_minutes} min de lecture
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}
