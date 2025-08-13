// app/posts/[id]/error.tsx
"use client";

import ErrorMessage from "@/components/ErrorMessage";

export default function ErrorPage({ error }: { error: Error }) {
  return <ErrorMessage message={error.message} />;
}
