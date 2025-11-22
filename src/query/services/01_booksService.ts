import { apiClient } from '../../utils/apiClient';
import type {
  Book,
  BookCreateInput,
  PaginatedBooksResponse,
} from '../types/01_booksTypes';

// === BOOKS SERVICE ===

// 1. Get list of books
export const fetchBooks = async (page = 1, limit = 50): Promise<Book[]> => {
  const res = await apiClient.get<PaginatedBooksResponse>(
    `/books?page=${page}&limit=${limit}`
  );
  return res.data.data.books;
};

// 2. Create book
export const createBook = async (book: BookCreateInput): Promise<Book> => {
  const res = await apiClient.post<{ data: Book }>('/books', book);
  return res.data.data;
};

// 3. Get recommendations
export const fetchRecommendations = async (): Promise<Book[]> => {
  const res = await apiClient.get<{ data: { books: Book[] } }>(
    '/books/recommend'
  );
  return res.data.data.books;
};

// 4. Get book detail
export const fetchBookById = async (id: number): Promise<Book> => {
  const res = await apiClient.get<{ data: Book }>(`/books/${id}`);
  return res.data.data;
};

// 5. Update book
export const updateBook = async (
  id: number,
  book: BookCreateInput
): Promise<Book> => {
  const res = await apiClient.put<{ data: Book }>(`/books/${id}`, book);
  return res.data.data;
};

// 6. Delete book
export const deleteBook = async (
  id: number
): Promise<{ success: boolean; message: string }> => {
  const res = await apiClient.delete<{ success: boolean; message: string }>(
    `/books/${id}`
  );
  return res.data;
};
