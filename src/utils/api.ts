export const API = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
  },
  BOOKS: {
    LIST: '/api/books',
    DETAIL: (id: number) => `/api/books/${id}`,
  },
};
