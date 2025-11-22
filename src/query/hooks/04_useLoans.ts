import { useQuery, useMutation } from '@tanstack/react-query';
import { loansService } from '../services/04_loansService';
import type { CreateLoanPayload, Loan } from '../types/04_loansTypes';

// GET: semua loans
export function useLoans() {
  return useQuery<Loan[]>({
    queryKey: ['loans'],
    queryFn: loansService.getAllLoans,
  });
}

// POST: create loan
export function useCreateLoan() {
  return useMutation({
    mutationFn: (payload: CreateLoanPayload) =>
      loansService.createLoan(payload),
  });
}

// GET: loan by id
export function useLoanById(id: string) {
  return useQuery<Loan>({
    queryKey: ['loan', id],
    queryFn: () => loansService.getLoanById(id),
    enabled: !!id,
  });
}
