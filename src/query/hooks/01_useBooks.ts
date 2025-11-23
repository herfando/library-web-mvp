import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchBooks,
  createBook,
  fetchRecommendations,
  fetchBookById,
  updateBook,
  deleteBook,
} from '../services/01_booksService';
import type { Book, BookCreateInput } from '../types/01_booksTypes';

// === 1. LIST BOOKS (PAGINATED) ===
export const useBooksQuery = (page = 1, limit = 50) => {
  return useQuery<Book[], Error>({
    queryKey: ['books', page, limit],
    queryFn: () => fetchBooks(page, limit),
  });
};

// === 2. CREATE BOOK (admin) ===
export const useCreateBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (book: BookCreateInput) => createBook(book),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};

// === 3. RECOMMEND BOOKS ===
export const useRecommendationsQuery = () => {
  return useQuery<Book[], Error>({
    queryKey: ['recommendations'],
    queryFn: fetchRecommendations,
  });
};

// === 4. BOOK DETAIL ===
export const useBookByIdQuery = (id: number) => {
  return useQuery<Book, Error>({
    queryKey: ['book', id],
    queryFn: () => fetchBookById(id),
    enabled: !!id,
  });
};

// === 5. UPDATE BOOK (admin) ===
export const useUpdateBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, book }: { id: number; book: BookCreateInput }) =>
      updateBook(id, book),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};

// === 6. DELETE BOOK (admin) ===
export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};
