// src/lib/api.ts
import { BlogsResponse, Blog } from '@/types/blog';

const API_BASE_URL = 'https://be-blg-production.up.railway.app';

/**
 * Generic fetch helper
 */
async function fetchAPI<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API Error ${res.status}: ${text}`);
  }

  return res.json();
}

/**
 * Homepage blogs
 */
export async function getBlogs() {
  return fetchAPI<BlogsResponse>('/posts/recommended');
}

/**
 * Search blogs
 */
export async function searchBlogs(query: string) {
  return fetchAPI<BlogsResponse>(
    `/posts/search?query=${encodeURIComponent(query)}`
  );
}

/**
 * Blog detail
 */
export async function getBlogDetail(id: string) {
  return fetchAPI<Blog>(`/posts/${id}`);
}