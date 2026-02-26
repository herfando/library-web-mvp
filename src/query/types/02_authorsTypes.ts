// === 1. Author entity ===
export interface Author {
  id: number;
  name: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
  countByAuthor: number;
}

// === 2. Create / Update author input ===
export interface AuthorCreateInput {
  name: string;
  bio: string;
}

// === 3. Authors list response ===
export interface AuthorsListResponse {
  success: boolean;
  message: string;
  data: {
    authors: Author[];
  };
}

// === 4. Book by Author entity ===
export interface BookByAuthor {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string | null;
  price: number;
  stock: number;
  isActive: boolean;
  rating: number;
  reviewCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  availableCopies: number;
  borrowCount: number;
  totalCopies: number;
}

// === 5. Author with books response ===
export interface AuthorWithBooksResponse {
  success: boolean;
  message: string;
  data: {
    author: Author;
    books: BookByAuthor[];
  };
}
