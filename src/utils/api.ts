export const ENDPOINTS = {
  AUTH: {
    REGISTER: '/api/auth/register', // POST register user baru
    LOGIN: '/api/auth/login', // POST login user
    LOGOUT: '/api/auth/logout', // POST logout user
  },

  BOOKS: {
    LIST: '/api/books', // GET daftar buku + filter + pagination
    DETAIL: (id: number) => `/api/books/${id}`, // GET detail buku
    CREATE: '/api/books', // POST tambah buku (admin)
    UPDATE: (id: number) => `/api/books/${id}`, // PUT update buku
    DELETE: (id: number) => `/api/books/${id}`, // DELETE hapus buku

    SEARCH: '/api/books/search', // GET search buku

    INCREASE_STOCK: (id: number) => `/api/books/${id}/increase`, // PATCH tambah stok
    DECREASE_STOCK: (id: number) => `/api/books/${id}/decrease`, // PATCH kurangi stok

    UPLOAD_IMAGE: (id: number) => `/api/books/${id}/images`, // POST upload gambar
    DELETE_IMAGE: (id: number, imageId: number) =>
      `/api/books/${id}/images/${imageId}`, // DELETE gambar tertentu
  },

  AUTHORS: {
    LIST: '/api/authors', // GET list penulis
    CREATE: '/api/authors', // POST tambah penulis (admin)
    DETAIL: (id: number) => `/api/authors/${id}`, // GET detail penulis
    UPDATE: (id: number) => `/api/authors/${id}`, // PUT update data penulis
    DELETE: (id: number) => `/api/authors/${id}`, // DELETE hapus penulis
  },

  CATEGORIES: {
    LIST: '/api/categories', // GET list kategori
    CREATE: '/api/categories', // POST tambah kategori
    DETAIL: (id: number) => `/api/categories/${id}`, // GET detail kategori
    UPDATE: (id: number) => `/api/categories/${id}`, // PUT update kategori
    DELETE: (id: number) => `/api/categories/${id}`, // DELETE kategori
  },

  LOANS: {
    LIST: '/api/loans', // GET semua peminjaman
    DETAIL: (id: number) => `/api/loans/${id}`, // GET detail pinjaman
    CREATE: '/api/loans', // POST buat peminjaman baru
    UPDATE: (id: number) => `/api/loans/${id}`, // PATCH update status
    DELETE: (id: number) => `/api/loans/${id}`, // DELETE pinjaman

    RETURN: (id: number) => `/api/loans/${id}/return`, // PATCH kembalikan buku
    EXTEND: (id: number) => `/api/loans/${id}/extend`, // PATCH perpanjang peminjaman
  },

  REVIEWS: {
    LIST: '/api/reviews', // GET semua review
    DETAIL: (id: number) => `/api/reviews/${id}`, // GET detail review
    CREATE: '/api/reviews', // POST buat review
    UPDATE: (id: number) => `/api/reviews/${id}`, // PUT update review
    DELETE: (id: number) => `/api/reviews/${id}`, // DELETE review

    FOR_BOOK: (bookId: number) => `/api/books/${bookId}/reviews`, // GET review by book
  },

  CART: {
    GET: '/api/cart', // GET cart user
    ADD: '/api/cart', // POST tambah item
    UPDATE: (itemId: number) => `/api/cart/${itemId}`, // PATCH update qty item
    REMOVE: (itemId: number) => `/api/cart/${itemId}`, // DELETE item dari cart
    CHECKOUT: '/api/cart/checkout', // POST checkout transaksi
  },

  ME: {
    PROFILE: '/api/me', // GET profil user login
    UPDATE: '/api/me', // PATCH update profil saya
  },
};
