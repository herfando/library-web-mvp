import { apiClient } from '../../utils/apiClient';
import { ENDPOINTS } from '../../utils/api';

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
    `${ENDPOINTS.BOOKS.LIST}?page=${page}&limit=${limit}`
  );
  return res.data.data.books;
};

// === 2. Create book (admin) ===
export const createBook = async (book: BookCreateInput): Promise<Book> => {
  const res = await apiClient.post<{ data: Book }>(
    ENDPOINTS.BOOKS.CREATE,
    book
  );
  return res.data.data;
};

// === 3. Recommend books ===
export const fetchRecommendations = async (): Promise<Book[]> => {
  const res = await apiClient.get<RecommendBooksResponse>(
    ENDPOINTS.BOOKS.RECOMMEND
  );
  return res.data.data.books;
};

// === 4. Book detail ===
export const fetchBookById = async (id: number): Promise<Book> => {
  const res = await apiClient.get<BookDetailResponse>(
    ENDPOINTS.BOOKS.DETAIL(id)
  );
  return res.data.data;
};

// === 5. Update book (admin) ===
export const updateBook = async (
  id: number,
  book: BookCreateInput
): Promise<Book> => {
  const res = await apiClient.put<{ data: Book }>(
    ENDPOINTS.BOOKS.UPDATE(id),
    book
  );
  return res.data.data;
};

// === 6. Delete book (admin) ===
export const deleteBook = async (
  id: number
): Promise<{ success: boolean; message: string }> => {
  const res = await apiClient.delete(ENDPOINTS.BOOKS.DELETE(id));
  return res.data;
};
