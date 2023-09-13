import { fetchGraphQL } from "@/api";
import {
  Blog,
  AllBlogResponse,
  AllBlogQuery,
  getBlogSlugQuery,
} from "@/interfaces/blog";

export async function getAllBlog() {
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
      slug: post.slug,
      publishDate: post.publishDate,
      blogImage: post.blogImage,
    });
  });

  return posts;
}

export async function getBlogBySlug(slug: string): Promise<Partial<Blog>> {
  const results: AllBlogResponse = (await fetchGraphQL(
    getBlogSlugQuery(slug)
  )) as AllBlogResponse;

  return results.data.allBlog.results[0];
}
