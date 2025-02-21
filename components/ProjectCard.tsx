'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    link: string;
    features: string[];
  };
  isHovered: boolean;
  onHover: (id: number) => void;
  onLeave: () => void;
}

export default function ProjectCard({ project, isHovered, onHover, onLeave }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => onHover(project.id)}
      onHoverEnd={onLeave}
      className="group relative bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 sm:h-64 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={90}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="h-full flex flex-col justify-end text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <h4 className="text-lg font-semibold mb-3">Fonctionnalités :</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{
                  transitionDelay: `${index * 100}ms`
                }}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {project.title}
          </h3>
          <motion.a
            href={project.link}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </div>
        <p className="text-base text-zinc-600 dark:text-zinc-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-sm px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
