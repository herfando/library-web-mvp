import { apiClient } from '../../utils/apiClient';
import { ENDPOINTS } from '../../utils/api';
import type {
  CreateLoan,
  UpdateLoan,
  OverdueLoans,
  AdminOverview,
  CreateAuthor,
  UpdateAuthor,
  DeleteAuthor,
  DeleteBook,
  CreateCategory,
  UpdateCategory,
  DeleteCategory,
} from '../types/05_adminTypes';

export const adminService = {
  // === 1. Create loan (admin) ===
  createLoan: async (
    payload: CreateLoan['payload']
  ): Promise<CreateLoan['response']> => {
    const res = await apiClient.post(ENDPOINTS.ADMIN.CREATE_LOAN, payload);
    return res.data;
  },

  // === 2. Update loan (admin) ===
  updateLoan: async (
    id: number,
    payload: UpdateLoan['payload']
  ): Promise<UpdateLoan['response']> => {
    const res = await apiClient.patch(ENDPOINTS.ADMIN.UPDATE_LOAN(id), payload);
    return res.data;
  },

  // === 3. List overdue loans (admin) ===
  getOverdueLoans: async (): Promise<OverdueLoans['response']> => {
    const res = await apiClient.get(ENDPOINTS.ADMIN.OVERDUE_LOANS);
    return res.data;
  },

  // === 4. Get admin overview ===
  getOverview: async (): Promise<AdminOverview['response']> => {
    const res = await apiClient.get(ENDPOINTS.ADMIN.ADMIN_OVERVIEW);
    return res.data;
  },

  // === 5. Create author (admin) ===
  createAuthor: async (
    payload: CreateAuthor['payload']
  ): Promise<CreateAuthor['response']> => {
    const res = await apiClient.post(ENDPOINTS.ADMIN.CREATE_AUTHOR, payload);
    return res.data;
  },

  // === 6. Update author (admin) ===
  updateAuthor: async (
    id: number,
    payload: UpdateAuthor['payload']
  ): Promise<UpdateAuthor['response']> => {
    const res = await apiClient.put(ENDPOINTS.ADMIN.UPDATE_AUTHOR(id), payload);
    return res.data;
  },

  // === 7. Delete author (admin) ===
  deleteAuthor: async (id: number): Promise<DeleteAuthor['response']> => {
    const res = await apiClient.delete(ENDPOINTS.ADMIN.DELETE_AUTHOR(id));
    return res.data;
  },

  // === 8. Delete book (admin) ===
  deleteBook: async (id: number): Promise<DeleteBook['response']> => {
    const res = await apiClient.delete(ENDPOINTS.ADMIN.DELETE_BOOK(id));
    return res.data;
  },

  // === 9. Create category (admin) ===
  createCategory: async (
    payload: CreateCategory['payload']
  ): Promise<CreateCategory['response']> => {
    const res = await apiClient.post(ENDPOINTS.ADMIN.CREATE_CATEGORY, payload);
    return res.data;
  },

  // === 10. Update category (admin) ===
  updateCategory: async (
    id: number,
    payload: UpdateCategory['payload']
  ): Promise<UpdateCategory['response']> => {
    const res = await apiClient.put(
      ENDPOINTS.ADMIN.UPDATE_CATEGORY(id),
      payload
    );
    return res.data;
  },

  // === 11. Delete category (admin) ===
  deleteCategory: async (id: number): Promise<DeleteCategory['response']> => {
    const res = await apiClient.delete(ENDPOINTS.ADMIN.DELETE_CATEGORY(id));
    return res.data;
  },
};
