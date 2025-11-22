// Tipe untuk data buku yang diterima dari API (read-only)
export interface Book {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string;
  rating: number;
  authorId: number;
  categoryId: number;
  totalCopies: number;
  availableCopies: number;
}

// Tipe untuk input ketika membuat atau update buku (POST/PUT)
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

// Optional: Tipe untuk response API jika ingin type-safe saat fetch list
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
