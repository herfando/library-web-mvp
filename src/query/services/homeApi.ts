import axios from 'axios';
import { API } from '../../utils/api';
import type { Book, Category, Author } from '../types/homeTypes';

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});

// Fetch all books
export const fetchBooks = () =>
  axiosInstance
    .get<{
      success: boolean;
      message: string;
      data: { books: Book[] };
    }>(API.BOOKS.LIST)
    .then((res) => res.data.data.books);

// Fetch recommended books
export const fetchRecommendations = () =>
  axiosInstance
    .get<{
      success: boolean;
      message: string;
      data: { books: Book[] };
    }>(API.BOOKS.RECOMMEND)
    .then((res) => res.data.data.books);

// Fetch categories
export const fetchCategories = () =>
  axiosInstance
    .get<{
      success: boolean;
      message: string;
      data: { categories: Category[] };
    }>(API.CATEGORIES.LIST)
    .then((res) => res.data.data.categories);

// Fetch popular authors
export const fetchPopularAuthors = () =>
  axiosInstance
    .get<{
      success: boolean;
      message: string;
      data: { authors: Author[] };
    }>(API.AUTHORS.LIST)
    .then((res) => res.data.data.authors);
