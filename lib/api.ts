// lib/api.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getPosts() {
  const res = await fetch(`${BASE_URL}/posts`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPostById(id: string) {
  const res = await fetch(`${BASE_URL}/posts/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}
