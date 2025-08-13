// app/posts/page.tsx
import Link from "next/link";
import { getPosts } from "@/lib/api";
import PostCard from "@/components/PostCard";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts List</h2>
      <div className="grid gap-4">
        {posts.slice(0, 10).map((post: any) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <PostCard title={post.title} body={post.body} />
          </Link>
        ))}
      </div>
    </div>
  );
}
