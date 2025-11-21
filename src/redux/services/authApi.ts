import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../../utils/api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    register: builder.mutation<
      { token: string; user: { name: string; email: string } },
      { name: string; email: string; password: string }
    >({
      query: (body) => ({
        url: API.AUTH.REGISTER,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
