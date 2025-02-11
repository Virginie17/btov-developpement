import { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | Blog BTOV Développement',
    default: 'Blog - Actualités du développement web | BTOV Développement',
  },
  description: 'Découvrez nos articles sur le développement web, le SEO, et les dernières tendances du digital.',
};

export default function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
