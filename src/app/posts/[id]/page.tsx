// src/app/posts/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogDetail } from "@/lib/api";
import { Blog } from "@/types/blog";

/* =========================
   SEO METADATA
========================= */
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;

  try {
    const blog: Blog = await getBlogDetail(id);
    const plainText = blog.content.replace(/<[^>]+>/g, "");

    return {
      title: blog.title,
      description: plainText.slice(0, 160),
      openGraph: {
        title: blog.title,
        description: plainText.slice(0, 160),
        images: blog.imageUrl ? [blog.imageUrl] : [],
        type: "article",
      },
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

/* =========================
   PAGE
========================= */
type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PostDetailPage({ params }: PageProps) {
  const { id } = await params;

  let blog: Blog;

  try {
    blog = await getBlogDetail(id);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      <article
        className="
          mx-auto
          max-w-[720px]
          px-4
          py-10
          sm:px-6
        "
      >
        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
          {blog.title}
        </h1>

        {/* Author Row */}
        <div className="mb-8 flex items-center gap-3 text-sm text-neutral-400">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-xs font-semibold uppercase text-white">
            {blog.author.name.charAt(0)}
          </div>

          <span className="text-white">
            {blog.author.name}
          </span>

          <span>•</span>

          <span>
            {new Date(blog.createdAt).toLocaleDateString("id-ID")}
          </span>
        </div>

        {/* Hero Image */}
        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div
          className="
            prose
            prose-invert
            max-w-none
            prose-p:leading-relaxed
            prose-p:text-neutral-200
            prose-h2:text-white
            prose-h3:text-white
            prose-strong:text-white
          "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </main>
  );
}