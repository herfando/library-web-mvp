import { apiClient } from '../../utils/apiClient';
import type {
  Category,
  CategoryCreateInput,
  CategoriesListResponse,
} from '../types/03_categoriesTypes';

// === LIST CATEGORIES ===
export const fetchCategories = async (): Promise<Category[]> => {
  const res = await apiClient.get<CategoriesListResponse>('/categories');
  return res.data.data.categories;
};

// === CREATE CATEGORY ===
export const createCategory = async (
  payload: CategoryCreateInput
): Promise<Category> => {
  const res = await apiClient.post<{ data: Category }>('/categories', payload);
  return res.data.data;
};

// === UPDATE CATEGORY ===
export const updateCategory = async (
  id: number,
  payload: CategoryCreateInput
): Promise<Category> => {
  const res = await apiClient.put<{ data: Category }>(
    `/categories/${id}`,
    payload
  );
  return res.data.data;
};

// === DELETE CATEGORY ===
export const deleteCategory = async (
  id: number
): Promise<{ success: boolean; message: string }> => {
  const res = await apiClient.delete<{ success: boolean; message: string }>(
    `/categories/${id}`
  );
  return res.data;
};
