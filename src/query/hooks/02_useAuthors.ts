import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchAuthors,
  createAuthor,
  fetchAuthorBooks,
  updateAuthor,
  deleteAuthor,
} from '../services/02_authorsService';
import type {
  Author,
  AuthorCreateInput,
  AuthorWithBooksResponse,
} from '../types/02_authorsTypes';

// === 1. List authors ===
export const useAuthorsQuery = () =>
  useQuery<Author[], Error>({
    queryKey: ['authors'],
    queryFn: fetchAuthors,
  });

// === 2. Get books by author ===
export const useAuthorBooksQuery = (id: number) =>
  useQuery<AuthorWithBooksResponse>({
    queryKey: ['authorBooks', id],
    queryFn: () => fetchAuthorBooks(id),
  });

// === 3. Create author ===
export const useCreateAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (author: AuthorCreateInput) => createAuthor(author),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });
    },
  });
};

// === 4. Update author ===
export const useUpdateAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, author }: { id: number; author: AuthorCreateInput }) =>
      updateAuthor(id, author),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });
    },
  });
};

// === 5. Delete author ===
export const useDeleteAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteAuthor(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });
    },
  });
};
