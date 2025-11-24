import { apiClient } from '../../utils/apiClient';
import { ENDPOINTS } from '../../utils/api';
import type {
  Author,
  AuthorCreateInput,
  AuthorsListResponse,
  AuthorWithBooksResponse,
} from '../types/02_authorsTypes';

// === 1. List authors ===
export const fetchAuthors = async (): Promise<Author[]> => {
  const res = await apiClient.get<AuthorsListResponse>(ENDPOINTS.AUTHORS.LIST);
  return res.data.data.authors;
};

// === 2. Create author ===
export const createAuthor = async (
  author: AuthorCreateInput
): Promise<Author> => {
  const res = await apiClient.post<{ data: Author }>(
    ENDPOINTS.AUTHORS.CREATE,
    author
  );
  return res.data.data;
};

// === 3. Get author detail (books by author) ===
export const fetchAuthorBooks = async (
  id: number
): Promise<AuthorWithBooksResponse> => {
  const res = await apiClient.get(ENDPOINTS.AUTHORS.BOOKS_BY_AUTHOR(id));
  return res.data;
};

// === 4. Update author ===
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

// === 5. Delete author ===
export const deleteAuthor = async (
  id: number
): Promise<{ success: boolean; message: string }> => {
  const res = await apiClient.delete<{ success: boolean; message: string }>(
    ENDPOINTS.AUTHORS.DELETE(id)
  );
  return res.data;
};
