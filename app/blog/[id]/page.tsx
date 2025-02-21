import { articles } from '../data';
import BlogPost from '@/components/BlogPost';

export async function generateStaticParams() {
  return Object.keys(articles).map((id) => ({
    id: id,
  }));
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const article = articles[params.id as keyof typeof articles];

  if (!article) {
    return null;
  }

  return <BlogPost article={article} />;
}
