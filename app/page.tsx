import { getAllBlog } from "@/app/_util/queries/getBlog";
import { Button } from "@nextui-org/button";
import { ThemeSwitcher } from "./_components/button/ThemeSwitcher";
import Header from "./header";

export default async function Home() {
  const posts = await getAllBlog();

  return (
    <>
      <Header />
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
        <div className="text-right w-full">
          <ThemeSwitcher />
        </div>
        <div className="m-8 flex flex-wrap gap-4 items-center">
          <Button color="default">Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
        </div>
      </main>
    </>
  );
}
