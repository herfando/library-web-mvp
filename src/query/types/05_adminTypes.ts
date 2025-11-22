export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  created_at: string;
}

export interface UpdateUserRolePayload {
  role: 'user' | 'admin';
}
