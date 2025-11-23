import { useQuery, useMutation } from '@tanstack/react-query';
import {
  borrowBook,
  returnBook,
  fetchMyLoans,
} from '../services/04_loansService';
import type { CreateLoanPayload, Loan } from '../types/04_loansTypes';

// === GET: semua loans milik user ===
export function useMyLoans() {
  return useQuery<Loan[]>({
    queryKey: ['my-loans'],
    queryFn: fetchMyLoans,
  });
}

// === POST: borrow a book ===
export function useBorrowBook() {
  return useMutation({
    mutationFn: (payload: CreateLoanPayload) => borrowBook(payload),
  });
}

// === PATCH: return book ===
export function useReturnBook() {
  return useMutation({
    mutationFn: (id: number) => returnBook(id),
  });
}

// === GET: loan by id (optional, bisa panggil service tambahan jika ada endpoint) ===
export function useLoanById(id: string) {
  return useQuery<Loan>({
    queryKey: ['loan', id],
    queryFn: () =>
      fetchMyLoans().then((loans) => loans.find((l) => l.id === id)!),
    enabled: !!id,
  });
}
