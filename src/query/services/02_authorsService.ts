import { apiClient } from '../../utils/apiClient';
import { ENDPOINTS } from '../../utils/api';
import type {
  Author,
  AuthorCreateInput,
  AuthorsListResponse,
} from '../types/02_authorsTypes';

// === LIST AUTHORS ===
export const fetchAuthors = async (): Promise<Author[]> => {
  const res = await apiClient.get<AuthorsListResponse>(ENDPOINTS.AUTHORS.LIST);
  return res.data.data.authors;
};

// === CREATE AUTHOR ===
export const createAuthor = async (
  author: AuthorCreateInput
): Promise<Author> => {
  const res = await apiClient.post<{ data: Author }>(
    ENDPOINTS.AUTHORS.CREATE,
    author
  );
  return res.data.data;
};

// === GET AUTHOR DETAIL (BOOKS BY AUTHOR) ===
// API RESPONSE:
// { success: false, message: "Author not found" }
// tidak ada struktur books → return {}
export const fetchAuthorBooks = async (
  id: number
): Promise<{ books: any[] }> => {
  const res = await apiClient.get(ENDPOINTS.AUTHORS.BOOKS_BY_AUTHOR(id));
  return res.data?.data ?? { books: [] };
};

// === UPDATE AUTHOR ===
export const updateAuthor = async (
  id: number,
  author: AuthorCreateInput
): Promise<Author> => {
  const res = await apiClient.put<{ data: Author }>(
    ENDPOINTS.AUTHORS.UPDATE(id),
    author
  );
  return res.data.data;
};

// === DELETE AUTHOR ===
export const deleteAuthor = async (
  id: number
): Promise<{ success: boolean; message: string }> => {
  const res = await apiClient.delete<{ success: boolean; message: string }>(
    ENDPOINTS.AUTHORS.DELETE(id)
  );
  return res.data;
};
