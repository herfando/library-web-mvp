import { useQuery, useMutation } from '@tanstack/react-query';
import { adminService } from '../services/05_adminService';
import type { AdminUser, UpdateUserRolePayload } from '../types/05_adminTypes';

// GET: all users
export function useAdminUsers() {
  return useQuery<AdminUser[]>({
    queryKey: ['admin-users'],
    queryFn: adminService.getAllUsers,
  });
}

// GET: user by id
export function useAdminUserById(id: string) {
  return useQuery<AdminUser>({
    queryKey: ['admin-user', id],
    queryFn: () => adminService.getUserById(id),
    enabled: !!id,
  });
}

// PUT: update role
export function useUpdateUserRole(id: string) {
  return useMutation({
    mutationFn: (payload: UpdateUserRolePayload) =>
      adminService.updateUserRole(id, payload),
  });
}

// DELETE: delete user
export function useDeleteUser() {
  return useMutation({
    mutationFn: (id: string) => adminService.deleteUser(id),
  });
}
