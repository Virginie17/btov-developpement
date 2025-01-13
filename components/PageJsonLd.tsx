'use client';

import Script from 'next/script';

interface PageJsonLdProps {
  data: Record<string, any>;
}

export default function PageJsonLd({ data }: PageJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  );
}
