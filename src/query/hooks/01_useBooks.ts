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

// === LIST BOOKS ===
export const useBooksQuery = (page = 1, limit = 50) =>
  useQuery<Book[], Error>({
    queryKey: ['books', page, limit],
    queryFn: () => fetchBooks(page, limit),
  });

// === BOOK DETAIL ===
export const useBookByIdQuery = (id: number) =>
  useQuery<Book, Error>({
    queryKey: ['book', id],
    queryFn: () => fetchBookById(id),
  });

// === CREATE BOOK ===
export const useCreateBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (book: BookCreateInput) => createBook(book),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};

// === UPDATE BOOK ===
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

// === DELETE BOOK ===
export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};

// === RECOMMENDATIONS ===
export const useRecommendationsQuery = () =>
  useQuery<Book[], Error>({
    queryKey: ['recommendations'],
    queryFn: fetchRecommendations,
  });
