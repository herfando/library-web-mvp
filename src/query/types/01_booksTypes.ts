// === Book main type ===
export interface Book {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string;
  rating: number;
  reviewCount: number;
  totalCopies: number;
  availableCopies: number;
  borrowCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  author?: {
    id: number;
    name: string;
    bio: string;
  };
  category?: {
    id: number;
    name: string;
  };
  reviews?: Review[];
}

// === Review type for book detail ===
export interface Review {
  id: number;
  star: number;
  comment: string;
  userId: number;
  bookId: number;
  createdAt: string;
  user: {
    id: number;
    name: string;
  };
}

// === Create / Update book ===
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

// === Paginated books response ===
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

// === Recommend response ===
export interface RecommendBooksResponse {
  success: boolean;
  message: string;
  data: {
    mode: string;
    books: Book[];
  };
}

// === Book detail response ===
export interface BookDetailResponse {
  success: boolean;
  message: string;
  data: Book;
}
