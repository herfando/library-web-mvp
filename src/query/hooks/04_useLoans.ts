import { useQuery, useMutation } from '@tanstack/react-query';
import {
  borrowBook,
  returnBook,
  fetchMyLoans,
} from '../services/04_loansService';
import type { CreateLoanPayload, Loan } from '../types/04_loansTypes';

// === 1. Get all loans of the user ===
export function useMyLoans() {
  return useQuery<Loan[]>({
    queryKey: ['my-loans'],
    queryFn: fetchMyLoans,
  });
}

// === 2. Borrow a book ===
export function useBorrowBook() {
  return useMutation({
    mutationFn: (payload: CreateLoanPayload) => borrowBook(payload),
  });
}

// === 3. Return a book ===
export function useReturnBook() {
  return useMutation({
    mutationFn: (id: number) => returnBook(id),
  });
}

// === 4. Get loan by id (optional) ===
export function useLoanById(id: string) {
  return useQuery<Loan>({
    queryKey: ['loan', id],
    queryFn: () =>
      fetchMyLoans().then((loans) => loans.find((l) => l.id === id)!),
    enabled: !!id,
  });
}
