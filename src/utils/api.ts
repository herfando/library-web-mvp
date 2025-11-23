export const ENDPOINTS = {
  AUTH: {
    REGISTER: '/api/auth/register', // POST register user baru
    LOGIN: '/api/auth/login', // POST login user (balik token)
  },

  BOOKS: {
    LIST: '/api/books', // GET daftar buku + filter + pagination
    CREATE: '/api/books', // POST tambah buku (admin)
    RECOMMEND: '/api/books/recommend', // GET recommend books
    DETAIL: (id: number) => `/api/books/${id}`, // GET detail buku (author, category, reviews)
    UPDATE: (id: number) => `/api/books/${id}`, // PUT update buku
    DELETE: (id: number) => `/api/books/${id}`, // DELETE hapus buku (blocked if active loans)
  },

  AUTHORS: {
    LIST: '/api/authors', // GET list authors
    CREATE: '/api/authors', // POST create author (admin)
    BOOKS_BY_AUTHOR: (id: number) => `/api/authors/${id}/books`, // GET books by author
    UPDATE: (id: number) => `/api/authors/${id}`, // PUT update author (admin)
    DELETE: (id: number) => `/api/authors/${id}`, // DELETE author (blocked if has books)
  },

  CATEGORIES: {
    LIST: '/api/categories', // GET list categories
    CREATE: '/api/categories', // POST create category (admin)
    UPDATE: (id: number) => `/api/categories/${id}`, // PUT update category (admin)
    DELETE: (id: number) => `/api/categories/${id}`, // DELETE category (blocked if has books)
  },

  LOANS: {
    BORROW: '/api/loans', // POST borrow a book (user)
    RETURN: (id: number) => `/api/loans/${id}/return`, // PATCH return a book
    MY_LOANS: '/api/loans/my', // GET my loans (active & history)
  },

  ADMIN: {
    CREATE_LOAN: '/api/admin/loans', // Create a loan manually (admin only)
    UPDATE_LOAN: (id: number) => `/api/admin/loans/${id}`, // Update an existing loan — change dueAt or status
    OVERDUE_LOANS: '/api/admin/loans/overdue', // List overdue loans (loan not returned + due date passed)
    ADMIN_OVERVIEW: '/api/admin/overview', // Admin dashboard summary (totals, overdue, top borrowed)
    CREATE_AUTHOR: '/api/authors', // Create author (admin only)
    UPDATE_AUTHOR: (id: number) => `/api/authors/${id}`, // Update author data by ID (admin only)
    DELETE_AUTHOR: (id: number) => `/api/authors/${id}`, // Delete author — blocked if author still has active books
    DELETE_BOOK: (id: number) => `/api/books/${id}`, // Delete book — blocked if book has active loans
    CREATE_CATEGORY: '/api/categories', // Create category (admin only)
    UPDATE_CATEGORY: (id: number) => `/api/categories/${id}`, // Update category by ID (admin only)
    DELETE_CATEGORY: (id: number) => `/api/categories/${id}`, // Delete category — blocked if still contains books
  },

  ME: {
    PROFILE: '/api/me', // GET my profile + loan statistics
    UPDATE: '/api/me', // PATCH update my profile
    LOANS: '/api/me/loans', // GET my loans (active & history) — swagger had /api/me/loans
    REVIEWS: '/api/me/reviews', // GET my reviews
  },

  REVIEWS: {
    CREATE_OR_UPDATE: '/api/reviews', // POST create or update my review for a book
    LIST_BY_BOOK: (bookId: number) => `/api/reviews/book/${bookId}`, // GET reviews by book
    DELETE: (id: number) => `/api/reviews/${id}`, // DELETE my review
  },

  CART: {
    GET: '/api/cart', // GET my cart
    CLEAR: '/api/cart', // DELETE clear cart
    ADD_ITEM: '/api/cart/items', // POST add item to cart (merge qty if exist)
    UPDATE_ITEM: (itemId: number) => `/api/cart/items/${itemId}`, // PATCH update item qty
    DELETE_ITEM: (itemId: number) => `/api/cart/items/${itemId}`, // DELETE remove item
  },
};
