import { useQuery } from '@tanstack/react-query';
import {
  fetchBooks,
  fetchCategories,
  fetchRecommendations,
  fetchPopularAuthors,
} from '../services/homeApi';
import type { Book, Category, Author } from '../types/homeTypes';

export const useBooksQuery = () =>
  useQuery<Book[], Error>({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });

export const useCategoriesQuery = () =>
  useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

export const useRecommendationsQuery = () =>
  useQuery<Book[], Error>({
    queryKey: ['recommendations'],
    queryFn: fetchRecommendations,
  });

export const usePopularAuthorsQuery = () =>
  useQuery<Author[], Error>({
    queryKey: ['popularAuthors'],
    queryFn: fetchPopularAuthors,
  });
