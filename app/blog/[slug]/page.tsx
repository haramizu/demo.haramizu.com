import { getAllBlog, getBlogBySlug } from "@/app/_util/queries/getBlog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllBlog();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return <div>{post.title}</div>;
}
