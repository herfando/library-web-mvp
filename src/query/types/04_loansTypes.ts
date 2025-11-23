// === 1. Loan entity ===
export interface Loan {
  id: string;
  user_id: string;
  book_id: string;
  loan_date: string;
  return_date: string | null;
  status: 'borrowed' | 'returned';
}

// === 2. Create loan payload ===
export interface CreateLoanPayload {
  user_id: string;
  book_id: string;
  loan_date: string;
}
