// src/redux/services/authApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINTS } from '../../utils/api';

interface User {
  name: string;
  email: string;
  phoneNumber: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export type RegisterResponse = {
  success: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    role: string;
  };
};

interface LoginRequest {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    // Register mutation
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: ENDPOINTS.AUTH.REGISTER,
        method: 'POST',
        body,
      }),
    }),

    // Login mutation
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (body) => ({
        url: ENDPOINTS.AUTH.LOGIN,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
