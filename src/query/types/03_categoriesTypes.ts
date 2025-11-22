// --- Category Entity ---
export interface Category {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

// --- CREATE ---
export interface CategoryCreateInput {
  name: string;
  description?: string;
}

// --- UPDATE ---
export interface CategoryUpdateInput {
  name?: string;
  description?: string;
}
