// === 1. Category entity ===
export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

// === 2. Create / Update category input ===
export interface CategoryCreateInput {
  name: string;
}

// === 3. Categories list response ===
export interface CategoriesListResponse {
  success: boolean;
  message: string;
  data: {
    categories: Category[];
  };
}
