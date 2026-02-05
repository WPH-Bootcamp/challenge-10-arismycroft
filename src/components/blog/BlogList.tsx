"use client";

import { useEffect, useState } from "react";
import { getBlogs, searchBlogs } from "@/lib/api";
import { Blog } from "@/types/blog";
import BlogCard from "./BlogCard";

type BlogListProps = {
  query?: string;
};

export default function BlogList({ query = "" }: BlogListProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function fetchBlogs() {
      try {
        setLoading(true);
        setError(null);

        const res = query
          ? await searchBlogs(query)
          : await getBlogs();

        if (!ignore) {
          setBlogs(res.data);
        }
      } catch (err) {
        if (!ignore) {
          setError("Failed to load articles");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchBlogs();

    return () => {
      ignore = true;
    };
  }, [query]);

  if (loading) {
    return (
      <div className="mt-12 text-center text-sm text-neutral-500">
        Loading articles…
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 text-center text-sm text-red-500">
        {error}
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="mt-12 text-center text-sm text-neutral-500">
        No articles found
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </section>
  );
}