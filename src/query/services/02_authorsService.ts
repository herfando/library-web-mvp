import { apiClient } from '../../utils/apiClient';
import type {
  Author,
  AuthorCreateInput,
  AuthorsListResponse,
  BooksByAuthorResponse,
} from '../types/02_authorsTypes';

// === 1. Get authors list ===
export const fetchAuthors = async (): Promise<Author[]> => {
  const res = await apiClient.get<AuthorsListResponse>('/authors');
  return res.data.data.authors;
};

// === 2. Create new author ===
export const createAuthor = async (
  payload: AuthorCreateInput
): Promise<Author> => {
  const res = await apiClient.post<{ data: Author }>('/authors', payload);
  return res.data.data;
};

// === 3. Get books by author ===
export const fetchBooksByAuthor = async (id: number): Promise<any[]> => {
  const res = await apiClient.get<BooksByAuthorResponse>(
    `/authors/${id}/books`
  );
  return res.data.data.books;
};

// === 4. Update author ===
export const updateAuthor = async (
  id: number,
  payload: AuthorCreateInput
): Promise<Author> => {
  const res = await apiClient.put<{ data: Author }>(`/authors/${id}`, payload);
  return res.data.data;
};

// === 5. Delete author ===
export const deleteAuthor = async (
  id: number
): Promise<{ success: boolean; message: string }> => {
  const res = await apiClient.delete<{ success: boolean; message: string }>(
    `/authors/${id}`
  );
  return res.data;
};
