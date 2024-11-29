export interface BlogPost {
  id: number;
  title: string;
  description: string;
  cover_image?: string;
  url: string;
  published_at: string;
  tag_list: string[];
  reading_time_minutes: number;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
}
