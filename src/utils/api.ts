export const API = {
  AUTH: {
    REGISTER: '/api/auth/register',
    LOGIN: '/api/auth/login',
    ME: '/api/me', // get my profile + stats
    UPDATE_ME: '/api/me', // patch
    MY_LOANS: '/api/me/loans', // get my loans (active & history)
    MY_REVIEWS: '/api/me/reviews', // get my reviews
  },

  BOOKS: {
    LIST: '/api/books', // get list with filters & pagination
    DETAIL: (id: number) => `/api/books/${id}`, // get book detail
    CREATE: '/api/books', // post
    UPDATE: (id: number) => `/api/books/${id}`, // put
    DELETE: (id: number) => `/api/books/${id}`, // delete
    RECOMMEND: '/api/books/recommend', // get recommend
  },

  AUTHORS: {
    LIST: '/api/authors',
    DETAIL_BOOKS: (id: number) => `/api/authors/${id}/books`, // get books by author
    CREATE: '/api/authors', // post
    UPDATE: (id: number) => `/api/authors/${id}`, // put
    DELETE: (id: number) => `/api/authors/${id}`, // delete
  },

  CATEGORIES: {
    LIST: '/api/categories',
    CREATE: '/api/categories', // post
    UPDATE: (id: number) => `/api/categories/${id}`, // put
    DELETE: (id: number) => `/api/categories/${id}`, // delete
  },

  LOANS: {
    BORROW: '/api/loans', // post borrow a book
    RETURN: (id: number) => `/api/loans/${id}/return`, // patch return
    MY_LOANS: '/api/loans/my', // get my loans
    ADMIN_CREATE: '/api/admin/loans', // post create loan
    ADMIN_UPDATE: (id: number) => `/api/admin/loans/${id}`, // patch update loan
    ADMIN_OVERDUE: '/api/admin/loans/overdue', // get overdue loans
    ADMIN_OVERVIEW: '/api/admin/overview', // get admin overview
  },

  REVIEWS: {
    CREATE_OR_UPDATE: '/api/reviews', // post review
    LIST_BY_BOOK: (bookId: number) => `/api/reviews/book/${bookId}`, // get reviews by book
    DELETE: (id: number) => `/api/reviews/${id}`, // delete review
  },

  CART: {
    GET: '/api/cart',
    CLEAR: '/api/cart',
    ADD_ITEM: '/api/cart/items', // post add item
    UPDATE_ITEM: (itemId: number) => `/api/cart/items/${itemId}`, // patch
    DELETE_ITEM: (itemId: number) => `/api/cart/items/${itemId}`, // delete
  },
};
