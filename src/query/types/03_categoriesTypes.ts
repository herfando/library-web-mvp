export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryCreateInput {
  name: string;
}

export interface CategoriesListResponse {
  success: boolean;
  message: string;
  data: {
    categories: Category[];
  };
}
