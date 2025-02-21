export type Article = {
  id: number;
  title: string;
  content: string;
  excerpt?: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  views: number;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
};
