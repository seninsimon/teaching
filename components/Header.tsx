// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-blue-600 text-white flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
    </header>
  );
}
