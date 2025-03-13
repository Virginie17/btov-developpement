import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  subcategory?: string;
  image: string;
  content: string;
  author: {
    name: string;
    image: string;
  };
  tags?: string[];
};

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Supprimer l'extension ".mdx" pour obtenir le slug
      const slug = fileName.replace(/\.mdx$/, '');

      // Lire le contenu du fichier
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Utiliser gray-matter pour parser le frontmatter
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      } as BlogPost;
    });

  // Trier les articles par date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getPostsBySubcategory(subcategory: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(
    (post) => post.subcategory?.toLowerCase() === subcategory.toLowerCase()
  );
}

export async function getRelatedPosts(currentSlug: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  const currentPost = allPosts.find((post) => post.slug === currentSlug);

  if (!currentPost) {
    return [];
  }

  return allPosts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        (post.category === currentPost.category ||
          post.tags?.some((tag) => currentPost.tags?.includes(tag)))
    )
    .slice(0, 2);
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map((post) => post.category)));
}

export async function getAllSubcategories(): Promise<string[]> {
  const posts = await getAllPosts();
  return Array.from(
    new Set(posts.map((post) => post.subcategory).filter(Boolean) as string[])
  );
}
