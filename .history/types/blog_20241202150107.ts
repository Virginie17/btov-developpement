export interface BlogPost {
  id: 
  title: string;
  description: string;
  cover_image?: string;
  url: string;
  published_at: string;
  tag_list: string[];
  reading_time_minutes: number;
  user: {
    name: string;
    profile_image: string;
  };
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
}
