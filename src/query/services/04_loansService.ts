import { apiClient } from '../../utils/apiClient';
import type { CreateLoanPayload, Loan } from '../types/04_loansTypes';

export const loansService = {
  getAllLoans: async (): Promise<Loan[]> => {
    const res = await apiClient.get('/loans');
    return res.data;
  },

  getLoanById: async (id: string): Promise<Loan> => {
    const res = await apiClient.get(`/loans/${id}`);
    return res.data;
  },

  createLoan: async (payload: CreateLoanPayload): Promise<Loan> => {
    const res = await apiClient.post('/loans', payload);
    return res.data;
  },
};
