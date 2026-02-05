// src/components/blog/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/types/blog";

type Props = {
  blog: Blog;
};

export default function BlogCard({ blog }: Props) {
  return (
    <Link href={`/posts/${blog.id}`} className="group block">
      <article
        className="
          h-full overflow-hidden rounded-2xl
          border border-white/10
          bg-black transition
          hover:border-white/20
        "
      >
        {/* IMAGE */}
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition group-hover:scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="flex h-full flex-col p-4">
          <h3 className="mb-1 line-clamp-2 text-lg font-semibold text-white">
            {blog.title}
          </h3>

          <p className="mb-2 text-sm text-gray-400">
            by {blog.author.name}
          </p>

          <p className="mb-4 line-clamp-2 text-sm text-gray-300">
            {blog.content}
          </p>

          {/* META */}
          <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
            <span>
              {new Date(blog.createdAt).toLocaleDateString("id-ID")}
            </span>

            <span className="flex items-center gap-1">
              ❤️ {blog.likes}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}