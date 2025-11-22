import { useQuery, useMutation } from '@tanstack/react-query';
import { meService } from '../services/06_meService';
import type { MeProfile, UpdateMePayload } from '../types/06_meTypes';

// GET: profile
export function useMe() {
  return useQuery<MeProfile>({
    queryKey: ['me'],
    queryFn: meService.getProfile,
  });
}

// PUT: update profile
export function useUpdateMe() {
  return useMutation({
    mutationFn: (payload: UpdateMePayload) => meService.updateProfile(payload),
  });
}

// PUT: change password
export function useChangePassword() {
  return useMutation({
    mutationFn: (payload: { oldPassword: string; newPassword: string }) =>
      meService.changePassword(payload),
  });
}
