// app/posts/[id]/page.tsx
import { getPostById } from "@/lib/api";
import { formatTitle } from "@/lib/helpers";

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostById(params.id);

  return (
    <article>
      <h1 className="text-2xl font-bold mb-2">{formatTitle(post.title)}</h1>
      <p>{post.body}</p>
    </article>
  );
}
