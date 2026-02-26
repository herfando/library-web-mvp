// === 1. Book entity ===
export interface Book {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string;
  price: number;
  rating: number;
  reviewCount: number;
  totalCopies: number;
  borrowCount: number;
  authorId: number;
  authorName: string;
  categoryId: number;
  categoryName: string;
  createdAt: string | null;
  updatedAt: string | null;
}

// === 2. Category entity ===
export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  books?: Book[]; // <--- tambahkan ini
}

// === 3. Create / Update category input ===
export interface CategoryCreateInput {
  name: string;
}

// === 4. Categories list response ===
export interface CategoriesListResponse {
  success: boolean;
  message: string;
  data: {
    categories: Category[];
  };
}
