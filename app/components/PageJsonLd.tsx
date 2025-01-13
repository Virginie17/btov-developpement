'use client';

interface PageJsonLdProps {
  data: any;
}

export default function PageJsonLd({ data }: PageJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
