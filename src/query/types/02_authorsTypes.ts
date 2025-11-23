// === 1. Author entity ===
export interface Author {
  id: number;
  name: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
}

// === 2. Create / Update author input ===
export interface AuthorCreateInput {
  name: string;
  bio: string;
}

// === 3. Authors list response ===
export interface AuthorsListResponse {
  success: boolean;
  message: string;
  data: {
    authors: Author[];
  };
}
