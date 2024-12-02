'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
















    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-2 mb-8">
          <h1 className="flex items-center gap-2 text-4xl md:text-6xl font-bold">
            <span>b</span>
            <span className="text-gray-600">to</span>
            <span>v</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">À propos de moi</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Développeuse web passionnée, je crée des expériences numériques uniques et innovantes.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Mes compétences</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Développement Frontend</li>
              <li>React & Next.js</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>






































































      </div>

    </main>
  );
}

const values = [
  {
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet, en utilisant les meilleures pratiques et technologies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Nous restons à la pointe de l'innovation pour offrir des solutions modernes et performantes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Engagement",
    description: "Nous nous engageons pleinement dans la réussite de chaque projet client.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];
