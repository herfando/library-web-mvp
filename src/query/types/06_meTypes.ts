export interface MeProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  created_at: string;
}

export interface UpdateMePayload {
  name?: string;
  avatar?: string;
}
