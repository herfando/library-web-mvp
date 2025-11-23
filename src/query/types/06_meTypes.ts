// === 1. My profile ===
export interface MeProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  created_at: string;
}

// === 2. Payload update profile ===
export interface UpdateMePayload {
  name?: string;
  avatar?: string;
}
