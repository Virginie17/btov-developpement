'use client';

/**
 * Utilitaires pour améliorer l'accessibilité du site
 * Ces fonctions peuvent être utilisées dans les composants React pour ajouter
 * des fonctionnalités d'accessibilité comme la navigation au clavier
 */
import React from 'react';

/**
 * Ajoute la gestion des touches pour les éléments interactifs non-natifs
 * @param event Événement clavier
 * @param actions Actions à effectuer selon les touches
 */
export const handleKeyboardNavigation = (
  event: React.KeyboardEvent,
  actions: {
    enter?: () => void;
    space?: () => void;
    escape?: () => void;
    arrowDown?: () => void;
    arrowUp?: () => void;
    arrowLeft?: () => void;
    arrowRight?: () => void;
    tab?: () => void;
  }
) => {
  switch (event.key) {
    case 'Enter':
      if (actions.enter) {
        event.preventDefault();
        actions.enter();
      }
      break;
    case ' ':
      if (actions.space) {
        event.preventDefault();
        actions.space();
      }
      break;
    case 'Escape':
      if (actions.escape) {
        event.preventDefault();
        actions.escape();
      }
      break;
    case 'ArrowDown':
      if (actions.arrowDown) {
        event.preventDefault();
        actions.arrowDown();
      }
      break;
    case 'ArrowUp':
      if (actions.arrowUp) {
        event.preventDefault();
        actions.arrowUp();
      }
      break;
    case 'ArrowLeft':
      if (actions.arrowLeft) {
        event.preventDefault();
        actions.arrowLeft();
      }
      break;
    case 'ArrowRight':
      if (actions.arrowRight) {
        event.preventDefault();
        actions.arrowRight();
      }
      break;
    case 'Tab':
      if (actions.tab) {
        // Ne pas empêcher le comportement par défaut pour Tab
        actions.tab();
      }
      break;
  }
};

/**
 * Props d'accessibilité pour les éléments interactifs personnalisés
 * @param role Rôle ARIA de l'élément
 * @param expanded État d'expansion (pour les accordéons, menus déroulants, etc.)
 * @param selected État de sélection (pour les onglets, options, etc.)
 * @param controls ID de l'élément contrôlé
 * @param labelledby ID de l'élément qui étiquette celui-ci
 * @param level Niveau de titre (pour les en-têtes)
 */
export const getAccessibilityProps = ({
  role,
  expanded,
  selected,
  controls,
  labelledby,
  level,
  current,
  label,
  describedby,
  hasPopup,
  live,
  busy,
  hidden
}: {
  role?: string;
  expanded?: boolean;
  selected?: boolean;
  controls?: string;
  labelledby?: string;
  level?: number;
  current?: 'page' | 'step' | 'location' | 'date' | 'time' | boolean;
  label?: string;
  describedby?: string;
  hasPopup?: 'menu' | 'dialog' | 'grid' | 'listbox' | 'tree' | true;
  live?: 'polite' | 'assertive' | 'off';
  busy?: boolean;
  hidden?: boolean;
}) => {
  const props: Record<string, any> = {};

  if (role) props['role'] = role;
  if (expanded !== undefined) props['aria-expanded'] = expanded;
  if (selected !== undefined) props['aria-selected'] = selected;
  if (controls) props['aria-controls'] = controls;
  if (labelledby) props['aria-labelledby'] = labelledby;
  if (level) props['aria-level'] = level;
  if (current) props['aria-current'] = current;
  if (label) props['aria-label'] = label;
  if (describedby) props['aria-describedby'] = describedby;
  if (hasPopup) props['aria-haspopup'] = hasPopup;
  if (live) props['aria-live'] = live;
  if (busy !== undefined) props['aria-busy'] = busy;
  if (hidden !== undefined) props['aria-hidden'] = hidden;

  // Ajouter tabIndex=0 pour rendre l'élément focusable
  props['tabIndex'] = 0;

  return props;
};

/**
 * Ajoute des attributs pour les images décoratives
 * @returns Attributs pour les images décoratives
 */
export const getDecorativeImageProps = () => ({
  'aria-hidden': true,
  role: 'presentation',
  alt: ''
});

/**
 * Crée un ID unique pour les éléments qui doivent être référencés par d'autres attributs ARIA
 * @param prefix Préfixe pour l'ID
 * @returns ID unique
 */
export const generateAccessibleId = (prefix: string) => {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
};

/**
 * Ajoute des attributs pour les éléments de formulaire
 * @param id ID de l'élément
 * @param label Libellé de l'élément
 * @param required Si l'élément est requis
 * @param invalid Si l'élément est invalide
 * @param describedby ID de l'élément qui décrit celui-ci (message d'erreur, aide, etc.)
 * @returns Attributs pour les éléments de formulaire
 */
export const getFormFieldProps = ({
  id,
  label,
  required,
  invalid,
  describedby,
  autocomplete
}: {
  id: string;
  label: string;
  required?: boolean;
  invalid?: boolean;
  describedby?: string;
  autocomplete?: string;
}) => {
  const props: Record<string, any> = {
    id,
    'aria-label': label
  };

  if (required) props['aria-required'] = true;
  if (invalid) props['aria-invalid'] = true;
  if (describedby) props['aria-describedby'] = describedby;
  if (autocomplete) props['autoComplete'] = autocomplete;

  return props;
};

/**
 * Ajoute des attributs pour les éléments qui changent dynamiquement
 * @param loading Si l'élément est en cours de chargement
 * @param live Type de mise à jour en direct
 * @returns Attributs pour les éléments dynamiques
 */
export const getDynamicContentProps = ({
  loading,
  live = 'polite'
}: {
  loading?: boolean;
  live?: 'polite' | 'assertive' | 'off';
}) => {
  const props: Record<string, any> = {
    'aria-live': live
  };

  if (loading) props['aria-busy'] = true;

  return props;
};

/**
 * Ajoute des attributs pour les éléments qui peuvent être masqués
 * @param visible Si l'élément est visible
 * @returns Attributs pour les éléments masquables
 */
export const getVisibilityProps = (visible: boolean) => ({
  'aria-hidden': !visible,
  tabIndex: visible ? 0 : -1
});

/**
 * Crée un piège à focus pour les modales et autres éléments qui doivent garder le focus
 * @param ref Référence à l'élément qui doit garder le focus
 */
export const useFocusTrap = (ref: React.RefObject<HTMLElement>) => {
  const handleFocusTrap = (event: KeyboardEvent) => {
    if (!ref.current || event.key !== 'Tab') return;

    const focusableElements = ref.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Si Shift+Tab et premier élément, aller au dernier élément
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } 
    // Si Tab et dernier élément, aller au premier élément
    else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return handleFocusTrap;
};

/**
 * Ajoute un focus visible pour les utilisateurs qui naviguent au clavier
 * Cette fonction doit être appelée dans un useEffect
 */
export const setupKeyboardFocusStyles = () => {
  // Ajouter une classe au body quand l'utilisateur navigue au clavier
  const handleFirstTab = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  };

  window.addEventListener('keydown', handleFirstTab);

  // Nettoyer l'écouteur d'événement
  return () => {
    window.removeEventListener('keydown', handleFirstTab);
  };
};
