'use client';

import dynamic from 'next/dynamic';
import React from 'react';

/**
 * Wrapper pour charger dynamiquement un composant côté client uniquement
 * @param importFunc Fonction d'import du composant
 * @returns Composant chargé dynamiquement
 */
export function withClientOnly<T>(importFunc: () => Promise<{ default: React.ComponentType<T> }>) {
  return dynamic(importFunc, {
    ssr: false,
    loading: ({ isLoading, error }: { isLoading: boolean; error: Error | null }) => {
      if (error) return <div>Erreur de chargement</div>;
      if (isLoading) return <div className="animate-pulse">Chargement...</div>;
      return null;
    }
  });
}

/**
 * Wrapper pour charger paresseusement un composant avec un placeholder
 * @param importFunc Fonction d'import du composant
 * @returns Composant chargé paresseusement
 */
export function withLazyLoad<T>(importFunc: () => Promise<{ default: React.ComponentType<T> }>) {
  return dynamic(importFunc, {
    loading: () => (
      <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
        <div className="text-gray-400 dark:text-gray-500">Chargement...</div>
      </div>
    )
  });
}
