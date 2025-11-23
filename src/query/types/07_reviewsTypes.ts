// === 1. Review interface ===
export interface Review {
  id: number;
  rating: number; // 1 - 5
  comment: string;
  userId: string;
  bookId: number;
  created_at: string;
}

// === 2. Payload create review ===
export interface CreateReviewPayload {
  rating: number;
  comment: string;
  bookId: number;
}

// === 3. Payload update review ===
export interface UpdateReviewPayload {
  rating?: number;
  comment?: string;
}
