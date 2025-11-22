import { apiClient } from '../../utils/apiClient';
import type {
  Review,
  CreateReviewPayload,
  UpdateReviewPayload,
} from '../types/07_reviewsTypes';

export const reviewsService = {
  // === 1. GET reviews by book ===
  getReviewsByBook: async (bookId: number): Promise<Review[]> => {
    const res = await apiClient.get(`/books/${bookId}/reviews`);
    return res.data.data.reviews;
  },

  // === 2. CREATE review ===
  createReview: async (payload: CreateReviewPayload): Promise<Review> => {
    const res = await apiClient.post('/reviews', payload);
    return res.data.data;
  },

  // === 3. UPDATE review ===
  updateReview: async (
    id: number,
    payload: UpdateReviewPayload
  ): Promise<Review> => {
    const res = await apiClient.put(`/reviews/${id}`, payload);
    return res.data.data;
  },

  // === 4. DELETE review ===
  deleteReview: async (id: number): Promise<{ success: boolean }> => {
    const res = await apiClient.delete(`/reviews/${id}`);
    return res.data;
  },
};
