'use client';

import React, { ComponentType, ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Composant de chargement par défaut
export const DefaultLoadingComponent = () => (
  <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
    <div className="text-gray-400 dark:text-gray-500">Chargement...</div>
  </div>
);

/**
 * Fonction utilitaire pour importer dynamiquement des composants côté client
 * @param importFunc Fonction d'importation du composant
 * @returns Composant chargé dynamiquement côté client
 */
export function withClientOnly<T>(
  importFunc: () => Promise<{ default: ComponentType<T> }>
) {
  return dynamic(importFunc, {
    ssr: false,
    loading: () => <DefaultLoadingComponent />
  });
}

/**
 * Fonction utilitaire pour importer dynamiquement des composants avec SSR
 * @param importFunc Fonction d'importation du composant
 * @returns Composant chargé dynamiquement avec SSR
 */
export function withSSR<T>(
  importFunc: () => Promise<{ default: ComponentType<T> }>
) {
  return dynamic(importFunc, {
    ssr: true,
    loading: () => <DefaultLoadingComponent />
  });
}

/**
 * HOC pour charger un composant uniquement lorsqu'il est visible dans le viewport
 * @param importFunc Fonction d'importation du composant
 * @returns Composant chargé dynamiquement lorsqu'il est visible
 */
export function withLazyLoad<T>(
  importFunc: () => Promise<{ default: ComponentType<T> }>
) {
  const DynamicComponent = withClientOnly(importFunc);
  
  return function LazyLoadWrapper(props: T & { children?: ReactNode }) {
    return <DynamicComponent {...props} />;
  };
}
