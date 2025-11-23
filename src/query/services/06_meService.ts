import { apiClient } from '../../utils/apiClient';
import type { MeProfile, UpdateMePayload } from '../types/06_meTypes';

export const meService = {
  // === 1. Get my profile ===
  getProfile: async (): Promise<MeProfile> => {
    const res = await apiClient.get('/me');
    return res.data;
  },

  // === 2. Update my profile ===
  updateProfile: async (payload: UpdateMePayload): Promise<MeProfile> => {
    const res = await apiClient.put('/me', payload);
    return res.data;
  },

  // === 3. Change password ===
  changePassword: async (payload: {
    oldPassword: string;
    newPassword: string;
  }): Promise<{ message: string }> => {
    const res = await apiClient.put('/me/change-password', payload);
    return res.data;
  },
};
