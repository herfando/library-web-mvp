// src/services/05_adminService.ts
import { apiClient } from '../../utils/apiClient';
import type { AdminUser, UpdateUserRolePayload } from '../types/05_adminTypes';

export const adminService = {
  getAllUsers: async (): Promise<AdminUser[]> => {
    const res = await apiClient.get('/admin/users');
    return res.data;
  },

  getUserById: async (id: string): Promise<AdminUser> => {
    const res = await apiClient.get(`/admin/users/${id}`);
    return res.data;
  },

  updateUserRole: async (
    id: string,
    payload: UpdateUserRolePayload
  ): Promise<AdminUser> => {
    const res = await apiClient.put(`/admin/users/${id}/role`, payload);
    return res.data;
  },

  deleteUser: async (id: string): Promise<{ message: string }> => {
    const res = await apiClient.delete(`/admin/users/${id}`);
    return res.data;
  },
};
