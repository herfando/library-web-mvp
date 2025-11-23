import { apiClient } from '../../utils/apiClient';
import { ENDPOINTS } from '../../utils/api';
import type { CreateLoanPayload, Loan } from '../types/04_loansTypes';

// === 1. Borrow a Book (USER) ===
// payload: { bookId: number, durationDays: number }
export const borrowBook = async (payload: CreateLoanPayload): Promise<Loan> => {
  const res = await apiClient.post<{ data: Loan }>(
    ENDPOINTS.LOANS.BORROW,
    payload
  );
  return res.data.data;
};

// === 2. Return Book (USER) ===
export const returnBook = async (
  id: number
): Promise<{ success: boolean; message: string }> => {
  const res = await apiClient.patch<{ success: boolean; message: string }>(
    ENDPOINTS.LOANS.RETURN(id)
  );
  return res.data;
};

// === 3. Get My Loans (active + history) ===
export const fetchMyLoans = async (): Promise<Loan[]> => {
  const res = await apiClient.get<{ data: Loan[] }>(ENDPOINTS.LOANS.MY_LOANS);
  return res.data.data;
};
