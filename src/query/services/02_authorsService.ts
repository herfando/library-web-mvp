import { apiClient } from '../../utils/apiClient';
import type {
  Author,
  AuthorCreateInput,
  AuthorsListResponse,
} from '../types/02_authorsTypes';

// === LIST AUTHORS ===
export const fetchAuthors = async (): Promise<Author[]> => {
  const res = await apiClient.get<AuthorsListResponse>('/authors');
  return res.data.data.authors;
};

// === CREATE AUTHOR ===
export const createAuthor = async (
  author: AuthorCreateInput
): Promise<Author> => {
  const res = await apiClient.post<{ data: Author }>('/authors', author);
  return res.data.data;
};

// === GET AUTHOR DETAIL (BOOKS BY AUTHOR) ===
// API RESPONSE:
// { success: false, message: "Author not found" }
// Tidak ada data struktur buku → return kosong
export const fetchAuthorBooks = async (
  id: number
): Promise<{ books: any[] }> => {
  const res = await apiClient.get(`/authors/${id}/books`);
  return res.data?.data ?? { books: [] };
};

// === UPDATE AUTHOR ===
export const updateAuthor = async (
  id: number,
  author: AuthorCreateInput
): Promise<Author> => {
  const res = await apiClient.put<{ data: Author }>(`/authors/${id}`, author);
  return res.data.data;
};

// === DELETE AUTHOR ===
export const deleteAuthor = async (
  id: number
): Promise<{ success: boolean; message: string }> => {
  const res = await apiClient.delete<{ success: boolean; message: string }>(
    `/authors/${id}`
  );
  return res.data;
};
