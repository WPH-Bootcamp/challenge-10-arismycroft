// src/app/page.tsx

import HomeClient from "@/components/home/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog App Challenge",
  description: "Discover recommended articles and most liked posts",
};

export default function HomePage() {
  return <HomeClient />;
}