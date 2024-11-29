import { NextResponse } from 'next/server';
import { BlogPost } from '/types/blog';

const DEFAULT_IMAGE = '/images/default-blog-cover.jpg';
const DEFAULT_AVATAR = '/images/default-avatar.jpg';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag') || 'webdev';

  try {
    const response = await fetch(`https://dev.to/api/articles?tag=${tag}&per_page=9`, {
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
      // Vérifier et nettoyer l'URL de l'image de couverture
      let coverImage = article.cover_image || DEFAULT_IMAGE;
      
      // Nettoyer l'URL de l'image
      if (coverImage.startsWith('//')) {
        coverImage = `https:${coverImage}`;
      } else if (!coverImage.startsWith('http') && !coverImage.startsWith('/')) {
        coverImage = `https://${coverImage}`;
      }

      // Vérifier si l'URL est valide
      try {
        new URL(coverImage);
      } catch (e) {
        console.warn(`Invalid cover image URL: ${coverImage}, using default`);
        coverImage = DEFAULT_IMAGE;
      }

      // Vérifier et nettoyer l'URL de l'image de profil
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

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Retourner des données de secours en cas d'erreur
    return NextResponse.json([{
      id: 1,
      title: "Erreur de chargement",
      description: "Les articles sont temporairement indisponibles. Veuillez réessayer plus tard.",
      url: "#",
      cover_image: DEFAULT_IMAGE,
      published_at: new Date().toISOString(),
      tag_list: ["error"],
      reading_time_minutes: 1,
      user: {
        name: "Système",
        profile_image: DEFAULT_AVATAR
      }
    }], { status: 200 }); // Retourner 200 même en cas d'erreur pour éviter les erreurs côté client
  }
}