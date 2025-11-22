import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type {
  Book,
  BookCreateInput,
  PaginatedBooksResponse,
} from '../types/01_booksTypes';

// Base URL
const API_URL = import.meta.env.VITE_API_URL + '/books';

//  axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ambil token otomatis dari localStorage
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`; // ini aman
  }
  return config;
});

// 1. Get list of books dengan pagination
export const fetchBooks = async (page = 1, limit = 50): Promise<Book[]> => {
  const res = await apiClient.get<PaginatedBooksResponse>(
    `?page=${page}&limit=${limit}`
  );
  return res.data.data.books;
};

// 2. Create a new book
export const createBook = async (book: BookCreateInput): Promise<Book> => {
  const res = await apiClient.post<Book>('/', book);
  return res.data;
};

// 3. Get recommendations
export const fetchRecommendations = async (): Promise<Book[]> => {
  const res = await apiClient.get<{ data: { books: Book[] } }>('/recommend');
  return res.data.data.books;
};

// 4. Get book by ID (detail)
export const fetchBookById = async (id: number): Promise<Book> => {
  const res = await apiClient.get<{ data: Book }>(`/${id}`);
  return res.data.data;
};

// 5. Update a book
export const updateBook = async (
  id: number,
  book: BookCreateInput
): Promise<Book> => {
  const res = await apiClient.put<{ data: Book }>(`/${id}`, book);
  return res.data.data;
};

// 6. Delete a book
export const deleteBook = async (
  id: number
): Promise<{ success: boolean; message: string }> => {
  const res = await apiClient.delete<{ success: boolean; message: string }>(
    `/${id}`
  );
  return res.data;
};
