// components/PostCard.tsx
export default function PostCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="border p-4 rounded-lg bg-white shadow hover:shadow-md transition">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
}
