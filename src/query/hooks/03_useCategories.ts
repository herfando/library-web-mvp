import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../services/03_categoriesService';
import type {
  Category,
  CategoryCreateInput,
} from '../types/03_categoriesTypes';

// === LIST CATEGORIES ===
export const useCategoriesQuery = () =>
  useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

// === CREATE CATEGORY ===
export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CategoryCreateInput) => createCategory(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};

// === UPDATE CATEGORY ===
export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: CategoryCreateInput;
    }) => updateCategory(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};

// === DELETE CATEGORY ===
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};
