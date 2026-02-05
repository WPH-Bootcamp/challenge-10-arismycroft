// src/types/blog.ts

export interface Author {
  id: number;
  name: string;
  email: string;
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  tags: string[];
  imageUrl: string;
  author: Author;
  createdAt: string;
  likes: number;
  comments: number;
}

export interface BlogsResponse {
  data: Blog[];
  total: number;
  page: number;
  lastPage: number;
}