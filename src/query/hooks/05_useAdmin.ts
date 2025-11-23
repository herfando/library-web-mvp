import { useQuery, useMutation } from '@tanstack/react-query';
import { adminService } from '../services/05_adminService';
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

// === 1. Create Loan ===
export function useCreateLoan() {
  return useMutation<CreateLoan['response'], unknown, CreateLoan['payload']>({
    mutationFn: (payload) => adminService.createLoan(payload),
  });
}

// === 2. Update Loan ===
export function useUpdateLoan() {
  return useMutation<
    UpdateLoan['response'],
    unknown,
    { id: number; payload: UpdateLoan['payload'] }
  >({
    mutationFn: ({ id, payload }) => adminService.updateLoan(id, payload),
  });
}

// === 3. Overdue Loans ===
export function useOverdueLoans() {
  return useQuery<OverdueLoans['response']>({
    queryKey: ['admin-overdue-loans'],
    queryFn: adminService.getOverdueLoans,
  });
}

// === 4. Admin Overview ===
export function useAdminOverview() {
  return useQuery<AdminOverview['response']>({
    queryKey: ['admin-overview'],
    queryFn: adminService.getOverview,
  });
}

// === 5. Create Author ===
export function useCreateAuthor() {
  return useMutation<
    CreateAuthor['response'],
    unknown,
    CreateAuthor['payload']
  >({
    mutationFn: (payload) => adminService.createAuthor(payload),
  });
}

// === 6. Update Author ===
export function useUpdateAuthor() {
  return useMutation<
    UpdateAuthor['response'],
    unknown,
    { id: number; payload: UpdateAuthor['payload'] }
  >({
    mutationFn: ({ id, payload }) => adminService.updateAuthor(id, payload),
  });
}

// === 7. Delete Author ===
export function useDeleteAuthor() {
  return useMutation<DeleteAuthor['response'], unknown, number>({
    mutationFn: (id) => adminService.deleteAuthor(id),
  });
}

// === 8. Delete Book ===
export function useDeleteBook() {
  return useMutation<DeleteBook['response'], unknown, number>({
    mutationFn: (id) => adminService.deleteBook(id),
  });
}

// === 9. Create Category ===
export function useCreateCategory() {
  return useMutation<
    CreateCategory['response'],
    unknown,
    CreateCategory['payload']
  >({
    mutationFn: (payload) => adminService.createCategory(payload),
  });
}

// === 10. Update Category ===
export function useUpdateCategory() {
  return useMutation<
    UpdateCategory['response'],
    unknown,
    { id: number; payload: UpdateCategory['payload'] }
  >({
    mutationFn: ({ id, payload }) => adminService.updateCategory(id, payload),
  });
}

// === 11. Delete Category ===
export function useDeleteCategory() {
  return useMutation<DeleteCategory['response'], unknown, number>({
    mutationFn: (id) => adminService.deleteCategory(id),
  });
}
