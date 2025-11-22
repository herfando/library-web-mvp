// === AUTHOR ENTITY ===
export interface Author {
  id: number;
  name: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
}

// === CREATE / UPDATE INPUT ===
export interface AuthorCreateInput {
  name: string;
  bio: string;
}

// === PAGINATED LIST (kalau suatu hari pakai pagination) ===
export interface AuthorsListResponse {
  success: boolean;
  message: string;
  data: {
    authors: Author[];
  };
}
