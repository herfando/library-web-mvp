import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchAuthors,
  createAuthor,
  fetchBooksByAuthor,
  updateAuthor,
  deleteAuthor,
} from '../services/02_authorsService';
import type { Author, AuthorCreateInput } from '../types/02_authorsTypes';

// === GET AUTHORS LIST ===
export const useAuthorsQuery = () =>
  useQuery<Author[], Error>({
    queryKey: ['authors'],
    queryFn: fetchAuthors,
  });

// === CREATE AUTHOR ===
export const useCreateAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: AuthorCreateInput) => createAuthor(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });
    },
  });
};

// === UPDATE AUTHOR ===
export const useUpdateAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: AuthorCreateInput }) =>
      updateAuthor(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });
    },
  });
};

// === DELETE AUTHOR ===
export const useDeleteAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteAuthor(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });
    },
  });
};

// === GET BOOKS BY AUTHOR ===
export const useBooksByAuthorQuery = (authorId: number) =>
  useQuery<any[], Error>({
    queryKey: ['authors-books', authorId],
    queryFn: () => fetchBooksByAuthor(authorId),
    enabled: !!authorId,
  });
