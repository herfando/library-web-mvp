import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINTS } from '../../utils/api';

export const uiApi = createApi({
  reducerPath: 'uiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<any[], void>({
      query: () => ENDPOINTS.CATEGORIES.LIST,
    }),
  }),
});

export const { useGetCategoriesQuery } = uiApi;
