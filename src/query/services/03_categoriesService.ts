import { apiClient } from '../../utils/apiClient';
import { ENDPOINTS } from '../../utils/api';
import type {
  Category,
  CategoryCreateInput,
  CategoriesListResponse,
} from '../types/03_categoriesTypes';

// === 1. List categories ===
export const fetchCategories = async (): Promise<Category[]> => {
  const res = await apiClient.get<CategoriesListResponse>(
    ENDPOINTS.CATEGORIES.LIST
  );
  return res.data.data.categories;
};

// === 2. Create category ===
export const createCategory = async (
  payload: CategoryCreateInput
): Promise<Category> => {
  const res = await apiClient.post<{ data: Category }>(
    ENDPOINTS.CATEGORIES.CREATE,
    payload
  );
  return res.data.data;
};

// === 3. Update category ===
export const updateCategory = async (
  id: number,
  payload: CategoryCreateInput
): Promise<Category> => {
  const res = await apiClient.put<{ data: Category }>(
    ENDPOINTS.CATEGORIES.UPDATE(id),
    payload
  );
  return res.data.data;
};

// === 4. Delete category ===
export const deleteCategory = async (
  id: number
): Promise<{ success: boolean; message: string }> => {
  const res = await apiClient.delete<{ success: boolean; message: string }>(
    ENDPOINTS.CATEGORIES.DELETE(id)
  );
  return res.data;
};
