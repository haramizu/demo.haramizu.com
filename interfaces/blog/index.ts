import { Media } from "@/interfaces/media";

export interface Blog {
  id: string;
  name: string;
  title: string;
  description: string;
  publishDate: string;
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

export const AllBlogQuery = `query AllBlog {
  allBlog (orderBy: [PUBLISHDATE_DESC]) {
    total
    results {
      description
      id
      name
      publishDate
      title
      blogImage {
        total
        results {
          id
          name
          description
          fileHeight
          fileId
          fileName
          fileSize
          fileType
          fileUrl
          fileWidth
        }
      }
    }
  }
}
`;
