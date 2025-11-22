// === Author type from API ===
export interface Author {
  id: number;
  name: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
}

// === Create / Update input ===
export interface AuthorCreateInput {
  name: string;
  bio: string;
}

// === List Authors Response ===
export interface AuthorsListResponse {
  success: boolean;
  message: string;
  data: {
    authors: Author[];
  };
}

// === Books by Author Response ===
export interface BooksByAuthorResponse {
  success: boolean;
  message: string;
  data: {
    books: any[];
  };
}
