// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js App 🚀</h1>
      <p className="mb-4">A starter with all fundamentals developers use daily.</p>
      <Link href="/posts" className="text-blue-500 underline">
        View Posts
      </Link>
    </div>
  );
}
