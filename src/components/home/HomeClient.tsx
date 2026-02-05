"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import BlogList from "@/components/blog/BlogList";

type HomeClientProps = {
  initialQuery?: string;
};

export default function HomeClient({ initialQuery = "" }: HomeClientProps) {
  const [query, setQuery] = useState(initialQuery);

  return (
    <>
      {/* HEADER (Before Login) */}
      <Header
        query={query}
        onSearch={setQuery}
      />

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-[1440px] px-[120px] py-8">
        <BlogList query={query} />
      </main>
    </>
  );
}