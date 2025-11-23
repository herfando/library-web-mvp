import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { reviewsService } from '../services/07_reviewsService';
import type {
  Review,
  CreateReviewPayload,
  UpdateReviewPayload,
} from '../types/07_reviewsTypes';

// === 1. Get reviews by book ===
export const useReviewsQuery = (bookId: number) => {
  return useQuery<Review[], Error>({
    queryKey: ['reviews', bookId],
    queryFn: () => reviewsService.getReviewsByBook(bookId),
    enabled: !!bookId,
  });
};

// === 2. Create or update my review ===
export const useCreateReview = (bookId: number) => {
  const queryClient = useQueryClient();
  return useMutation<Review, Error, CreateReviewPayload>({
    mutationFn: (payload) => reviewsService.createOrUpdateReview(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews', bookId] });
    },
  });
};

// === 3. Update review ===
export const useUpdateReview = (bookId: number) => {
  const queryClient = useQueryClient();
  return useMutation<Review, Error, { id: number; data: UpdateReviewPayload }>({
    mutationFn: ({ id, data }) => reviewsService.updateReview(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews', bookId] });
    },
  });
};

// === 4. Delete review ===
export const useDeleteReview = (bookId: number) => {
  const queryClient = useQueryClient();
  return useMutation<{ success: boolean }, Error, number>({
    mutationFn: (id) => reviewsService.deleteReview(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews', bookId] });
    },
  });
};
