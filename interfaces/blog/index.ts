import { Media } from "@/interfaces/media";

export interface Blog {
  id: string;
  name: string;
  title: string;
  description: string;
  publicationDate: string;
  blogImage: {
    results: Partial<Media>[];
  };
}

export interface BlogResponse {
  data: {
    blog: Partial<Blog>;
  };
}

export interface AllBlogResponse {
  data: {
    allBlog: {
      total: number;
      results: Partial<Blog>[];
    };
  };
}
