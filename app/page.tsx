import { getAllBlog } from "@/api/queries/getBlog";

export default async function Home() {
  const posts = await getAllBlog();

  return (
    <main>
      <h1>Content Hub ONE - Title list</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={"/blog/" + post.id}>{post.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
