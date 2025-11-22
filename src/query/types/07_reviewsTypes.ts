export interface Review {
  id: number;
  rating: number; // 1 - 5
  comment: string;
  userId: string;
  bookId: number;
  created_at: string;
}

export interface CreateReviewPayload {
  rating: number;
  comment: string;
  bookId: number;
}

export interface UpdateReviewPayload {
  rating?: number;
  comment?: string;
}
