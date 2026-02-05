// src/app/posts/[id]/loading.tsx
export default function LoadingPostDetail() {
  return (
    <main className="min-h-screen bg-black">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 animate-pulse">
        {/* Title */}
        <div className="mb-4 h-10 w-3/4 rounded bg-gray-800" />

        {/* Meta */}
        <div className="mb-8 h-4 w-1/3 rounded bg-gray-700" />

        {/* Image */}
        <div className="mb-10 aspect-video rounded-xl bg-gray-800" />

        {/* Content lines */}
        <div className="space-y-4">
          <div className="h-4 w-full rounded bg-gray-700" />
          <div className="h-4 w-full rounded bg-gray-700" />
          <div className="h-4 w-5/6 rounded bg-gray-700" />
          <div className="h-4 w-4/6 rounded bg-gray-700" />
        </div>
      </article>
    </main>
  );
}