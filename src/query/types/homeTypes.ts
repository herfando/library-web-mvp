export interface Book {
  id: number;
  title: string;
  coverImage: string;
  rating: number;
  author: {
    id: number;
    name: string;
  };
}

export interface Category {
  id: number;
  name: string;
}

export interface Author {
  id: number;
  name: string;
  booksCount?: number;
}
