import { useQuery, useMutation } from '@tanstack/react-query';
import { reviewsService } from '../services/07_reviewsService';
import type {
  CreateReviewPayload,
  UpdateReviewPayload,
  Review,
} from '../types/07_reviewsTypes';

// === 1. Get reviews by book ===
export function useReviews(bookId: number) {
  return useQuery<Review[]>({
    queryKey: ['reviews', bookId],
    queryFn: () => reviewsService.getReviewsByBook(bookId),
    enabled: !!bookId,
  });
}

// === 2. Create or update my review ===
export function useCreateReview() {
  return useMutation<Review, unknown, CreateReviewPayload>({
    mutationFn: (payload) => reviewsService.createOrUpdateReview(payload),
  });
}

// === 3. Update review ===
export function useUpdateReview() {
  return useMutation<
    Review,
    unknown,
    { id: number; data: UpdateReviewPayload }
  >({
    mutationFn: ({ id, data }) => reviewsService.updateReview(id, data),
  });
}

// === 4. Delete review ===
export function useDeleteReview() {
  return useMutation<{ success: boolean }, unknown, number>({
    mutationFn: (id) => reviewsService.deleteReview(id),
  });
}
