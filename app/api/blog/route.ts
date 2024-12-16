import { NextResponse } from 'next/server';
import { BlogPost } from '../../../types/blog';
const DEFAULT_IMAGE = '/images/default-blog-cover.jpg';
const DEFAULT_AVATAR = '/images/default-avatar.jpg';

// Articles locaux personnalisés
const localPosts: BlogPost[] = [
  {
    id: 9999,
    title: "Guide du développement web à La Rochelle en 2024",
    description: "Découvrez les meilleures pratiques et tendances du développement web pour les entreprises de La Rochelle. Focus sur l'innovation locale et les solutions adaptées au marché rochelais.",
    url: "/blog/guide-dev-web-la-rochelle-2024",
    cover_image: "/images/blog/vieux-port-tech.jpg",
    published_at: new Date().toISOString(),
    tag_list: ["La Rochelle", "Développement Web", "Local"],
    reading_time_minutes: 8,
    user: {
      name: "Benjamin Tov",
      profile_image: DEFAULT_AVATAR
    }
  },
  {
    id: 9998,
    title: "Success Story : La transformation digitale du Vieux-Port",
    description: "Découvrez comment nous avons accompagné les commerces du Vieux-Port de La Rochelle dans leur transformation digitale. Une étude de cas complète sur l'impact du digital dans le secteur touristique local.",
    url: "/blog/success-story-vieux-port-digital",
    cover_image: "/images/blog/vieux-port-commerce.jpg",
    published_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    tag_list: ["Success Story", "La Rochelle", "Tourisme Digital"],
    reading_time_minutes: 10,
    user: {
      name: "Benjamin Tov",
      profile_image: DEFAULT_AVATAR
    }
  },
  {
    id: 9997,
    title: "La Rochelle Tech Events 2024",
    description: "Calendrier des événements tech à La Rochelle : meetups, conférences, et ateliers. Rejoignez la communauté tech locale et développez votre réseau professionnel.",
    url: "/blog/la-rochelle-tech-events-2024",
    cover_image: "/images/blog/tours-conference.jpg",
    published_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    tag_list: ["Événements", "La Rochelle", "Tech Community"],
    reading_time_minutes: 6,
    user: {
      name: "Benjamin Tov",
      profile_image: DEFAULT_AVATAR
    }
  },
  {
    id: 9996,
    title: "SEO Local : Dominez les recherches Google à La Rochelle",
    description: "Guide complet du référencement local à La Rochelle. Statistiques, études de cas et stratégies pour améliorer votre visibilité dans les recherches locales.",
    url: "/blog/seo-local-la-rochelle",
    cover_image: "/images/blog/aquarium-business.jpg",
    published_at: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    tag_list: ["SEO Local", "La Rochelle", "Marketing Digital"],
    reading_time_minutes: 12,
    user: {
      name: "Benjamin Tov",
      profile_image: DEFAULT_AVATAR
    }
  },
  {
    id: 9995,
    title: "Interview : Les Leaders du Digital à La Rochelle",
    description: "Série d'interviews avec les entrepreneurs qui transforment le paysage digital de La Rochelle. Découvrez leurs parcours, conseils et vision du marché local.",
    url: "/blog/interviews-leaders-digital-la-rochelle",
    cover_image: "/images/blog/entrepreneurs-lr.jpg",
    published_at: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
    tag_list: ["Interviews", "La Rochelle", "Entrepreneurs"],
    reading_time_minutes: 15,
    user: {
      name: "Benjamin Tov",
      profile_image: DEFAULT_AVATAR
    }
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag') || 'webdev';

  try {
    const response = await fetch(`https://dev.to/api/articles?tag=${tag}&per_page=5`, {
      headers: {
        'api-key': process.env.DEV_TO_API_KEY || ''
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from DEV.to API: ${response.statusText}`);
    }

    const articles = await response.json();
    
    const formattedPosts: BlogPost[] = articles.map((article: any) => {
      let coverImage = article.cover_image || DEFAULT_IMAGE;
      
      if (coverImage.startsWith('//')) {
        coverImage = `https:${coverImage}`;
      } else if (!coverImage.startsWith('http') && !coverImage.startsWith('/')) {
        coverImage = `https://${coverImage}`;
      }

      try {
        new URL(coverImage);
      } catch (e) {
        console.warn(`Invalid cover image URL: ${coverImage}, using default`);
        coverImage = DEFAULT_IMAGE;
      }

      let profileImage = article.user?.profile_image || DEFAULT_AVATAR;
      if (profileImage.startsWith('//')) {
        profileImage = `https:${profileImage}`;
      } else if (!profileImage.startsWith('http') && !profileImage.startsWith('/')) {
        profileImage = `https://${profileImage}`;
      }

      try {
        new URL(profileImage);
      } catch (e) {
        console.warn(`Invalid profile image URL: ${profileImage}, using default`);
        profileImage = DEFAULT_AVATAR;
      }

      return {
        id: article.id,
        title: article.title,
        description: article.description || article.title,
        url: article.url,
        cover_image: coverImage,
        published_at: new Date(article.published_at).toISOString(),
        tag_list: article.tags?.split(',').map((tag: string) => tag.trim()) || [],
        reading_time_minutes: article.reading_time_minutes || 5,
        user: {
          name: article.user?.name || 'Auteur',
          profile_image: profileImage
        }
      };
    });

    // Combiner les articles locaux avec les articles de Dev.to
    const allPosts = [...localPosts, ...formattedPosts];
    
    // Trier par date de publication (plus récent en premier)
    allPosts.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

    return NextResponse.json(allPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // En cas d'erreur, retourner au moins les articles locaux
    return NextResponse.json(localPosts, { status: 200 });
  }
}