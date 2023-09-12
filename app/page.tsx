import { getAllBlog } from "@/app/_util/queries/getBlog";
import { Button } from "@nextui-org/button";

export default async function Home() {
  const posts = await getAllBlog();

  return (
    <main>
      <h1>Content Hub ONE - Title list</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={"/blog/" + post.slug}>
              {post.title} {post.slug}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
