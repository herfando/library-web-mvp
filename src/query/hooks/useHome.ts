// src/query/hooks/useHome.ts
import { useQuery } from '@tanstack/react-query';
import {
  fetchBooks,
  fetchCategories,
  fetchRecommendations,
  fetchPopularAuthors,
} from '../service/homeApi';

export const useBooksQuery = (params?: { page?: number; category?: string }) =>
  useQuery(['books', params], () => fetchBooks(params));

export const useCategoriesQuery = () =>
  useQuery(['categories'], fetchCategories);

export const useRecommendationsQuery = () =>
  useQuery(['recommendations'], fetchRecommendations);

export const usePopularAuthorsQuery = () =>
  useQuery(['popularAuthors'], fetchPopularAuthors);
