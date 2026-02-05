"use client";

import Link from "next/link";
import SearchBar from "@/components/blog/SearchBar";

type HeaderProps = {
  query: string;
  onSearch: (value: string) => void;
};

export default function Header({ query, onSearch }: HeaderProps) {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-[120px]">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-blue-600" />
          <span className="text-lg font-semibold text-neutral-900">
            Your Logo
          </span>
        </div>

        {/* Center: Search */}
        <div className="w-[373px]">
          <SearchBar
            value={query}
            onSearch={onSearch}
          />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="flex h-[44px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}