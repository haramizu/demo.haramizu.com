import { fetchGraphQL } from "@/api";
import {
  Blog,
  AllBlogResponse,
  AllBlogQuery,
  BlogResponse,
  getBlogByIdQuery,
} from "@/interfaces/blog";

export default async function getAllBlog() {
  const results: AllBlogResponse = (await fetchGraphQL(
    AllBlogQuery
  )) as AllBlogResponse;

  const posts: Partial<Blog>[] = [];

  results.data.allBlog.results.forEach((post: Partial<Blog>) => {
    posts.push({
      id: post.id,
      description: post.description,
      name: post.name,
      title: post.title,
      publishDate: post.publishDate,
      blogImage: post.blogImage,
    });
  });

  return posts;
}

export const getBlogBySlug = async (slug: string): Promise<Partial<Blog>> => {
  const blogResponse: BlogResponse = (await fetchGraphQL(
    getBlogByIdQuery(slug)
  )) as BlogResponse;

  return blogResponse.data.blog;
};
