// === 1. Create Loan (admin) ===
export interface CreateLoan {
  payload: {
    userId: number;
    bookId: number;
    dueAt: string;
  };
  response:
    | {
        id?: number;
        userId: number;
        bookId: number;
        borrowedAt?: string;
        dueAt: string;
        returnedAt?: string | null;
        status: 'BORROWED' | 'RETURNED' | 'OVERDUE';
      }
    | UnauthorizedResponse;
}

// === 2. Update Loan (admin) ===
export interface UpdateLoan {
  payload: {
    dueAt?: string;
    status?: 'BORROWED' | 'RETURNED' | 'OVERDUE';
  };
  response: CreateLoan['response'];
}

// === 3. List Overdue Loans (admin) ===
export interface OverdueLoans {
  response:
    | {
        data: {
          userId: number;
          bookId: number;
          dueAt: string;
          status: 'BORROWED' | 'OVERDUE';
        }[];
      }
    | UnauthorizedResponse;
}

// === 4. Admin Overview ===
export interface AdminOverview {
  response:
    | {
        totalUsers?: number;
        totalBooks?: number;
        activeLoans?: number;
        overdueLoans?: number;
        topBorrowedBooks?: {
          bookId: number;
          title?: string;
          timesBorrowed?: number;
        }[];
      }
    | UnauthorizedResponse;
}

// === 5. Create Author (admin) ===
export interface CreateAuthor {
  payload: {
    name: string;
    bio: string;
  };
  response:
    | {
        name: string;
        bio: string;
      }
    | UnauthorizedResponse;
}

// === 6. Update Author (admin) ===
export interface UpdateAuthor {
  payload: CreateAuthor['payload'];
  response: CreateAuthor['response'];
}

// === 7. Delete Author (admin) ===
export interface DeleteAuthor {
  response: {
    success: boolean;
    message: string;
  };
}

// === 8. Delete Book (admin) ===
export interface DeleteBook {
  response: {
    success: boolean;
    message: string;
  };
}

// === 9. Create Category (admin) ===
export interface CreateCategory {
  payload: {
    name: string;
  };
  response:
    | {
        name: string;
      }
    | UnauthorizedResponse;
}

// === 10. Update Category (admin) ===
export interface UpdateCategory {
  payload: CreateCategory['payload'];
  response: CreateCategory['response'];
}

// === 11. Delete Category (admin) ===
export interface DeleteCategory {
  response: {
    success: boolean;
    message: string;
  };
}

// === Struktur response Unauthorized ===
export interface UnauthorizedResponse {
  success: false;
  message: string;
}
