// src/services/06_meService.ts
import { apiClient } from '../../utils/apiClient';
import type { MeProfile, UpdateMePayload } from '../types/06_meTypes';

export const meService = {
  getProfile: async (): Promise<MeProfile> => {
    const res = await apiClient.get('/me');
    return res.data;
  },

  updateProfile: async (payload: UpdateMePayload): Promise<MeProfile> => {
    const res = await apiClient.put('/me', payload);
    return res.data;
  },

  changePassword: async (payload: {
    oldPassword: string;
    newPassword: string;
  }): Promise<{ message: string }> => {
    const res = await apiClient.put('/me/change-password', payload);
    return res.data;
  },
};
