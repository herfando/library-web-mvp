import { useQuery, useMutation } from '@tanstack/react-query';
import { reviewsService } from '../services/07_reviewsService';
import type {
  CreateReviewPayload,
  UpdateReviewPayload,
  Review,
} from '../types/07_reviewsTypes';

// GET reviews by book
export function useReviews(bookId: number) {
  return useQuery<Review[]>({
    queryKey: ['reviews', bookId],
    queryFn: () => reviewsService.getReviewsByBook(bookId),
    enabled: !!bookId,
  });
}

// CREATE
export function useCreateReview() {
  return useMutation({
    mutationFn: (payload: CreateReviewPayload) =>
      reviewsService.createReview(payload),
  });
}

// UPDATE
export function useUpdateReview() {
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateReviewPayload }) =>
      reviewsService.updateReview(id, data),
  });
}

// DELETE
export function useDeleteReview() {
  return useMutation({
    mutationFn: (id: number) => reviewsService.deleteReview(id),
  });
}
