import { apiClient } from '../../utils/apiClient';
import type {
  Book,
  BookCreateInput,
  PaginatedBooksResponse,
  BookDetailResponse,
  RecommendBooksResponse,
} from '../types/01_booksTypes';

// === 1. Get list of books (paginated) ===
export const fetchBooks = async (page = 1, limit = 50): Promise<Book[]> => {
  const res = await apiClient.get<PaginatedBooksResponse>(
    `/books?page=${page}&limit=${limit}`
  );
  return res.data.data.books;
};

// === 2. Create book (admin) ===
export const createBook = async (book: BookCreateInput): Promise<Book> => {
  const res = await apiClient.post<{ data: Book }>('/books', book);
  return res.data.data;
};

// === 3. Recommend books ===
export const fetchRecommendations = async (): Promise<Book[]> => {
  const res = await apiClient.get<RecommendBooksResponse>('/books/recommend');
  return res.data.data.books;
};

// === 4. Book detail ===
export const fetchBookById = async (id: number): Promise<Book> => {
  const res = await apiClient.get<BookDetailResponse>(`/books/${id}`);
  return res.data.data;
};

// === 5. Update book (admin) ===
export const updateBook = async (
  id: number,
  book: BookCreateInput
): Promise<Book> => {
  const res = await apiClient.put<{ data: Book }>(`/books/${id}`, book);
  return res.data.data;
};

// === 6. Delete book (admin) ===
export const deleteBook = async (
  id: number
): Promise<{ success: boolean; message: string }> => {
  const res = await apiClient.delete(`/books/${id}`);
  return res.data;
};
