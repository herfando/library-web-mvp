// src/types/01_booksTypes.ts

// === 1. LIST BOOKS ===
export interface Book {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string | null;
  rating: number;
  reviewCount: number;
  totalCopies: number;
  availableCopies: number;
  borrowCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  Author?: {
    id: number;
    name: string;
    bio?: string;
    createdAt?: string;
    updatedAt?: string;
  };
  Category?: {
    id: number;
    name: string;
    createdAt?: string;
    updatedAt?: string;
  };
  Review?: Review[];
}

export interface PaginatedBooksResponse {
  success: boolean;
  message: string;
  data: {
    books: Book[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

// === 2. CREATE BOOK ===
export interface BookCreateInput {
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string;
  authorId: number;
  categoryId: number;
  totalCopies: number;
  availableCopies: number;
}

// === 3. RECOMMEND BOOKS ===
export interface RecommendBooksResponse {
  success: boolean;
  message: string;
  data: {
    mode: string;
    books: Book[];
  };
}

// === 4. DETAIL BOOK ===
export interface BookDetailResponse {
  success: boolean;
  message: string;
  data: Book;
}

// === 5. UPDATE BOOK ===
// sama dengan BookCreateInput, tidak perlu type baru

// === 6. DELETE BOOK ===
export interface DeleteBookResponse {
  success: boolean;
  message: string;
}

// === tambahan: Review ===
export interface Review {
  id: number;
  star: number;
  comment: string;
  userId: number;
  bookId: number;
  createdAt: string;
  User: {
    id: number;
    name: string;
  };
}
