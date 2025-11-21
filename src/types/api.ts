// src/types/api.ts
export interface Author {
  id: number;
  name: string;
  bio?: string;
}

export interface Book {
  id: number;
  title: string;
  description?: string;
  coverImage: string;
  rating?: number;
  author?: Author;
}

export interface RecommendResponse {
  success: boolean;
  message: string;
  data: {
    books: Book[];
  };
}

export interface AuthorsResponse {
  success: boolean;
  message: string;
  data: {
    authors: Author[];
  };
}
