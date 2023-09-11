import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseQuery = fetchBaseQuery({ baseUrl: '' });
const baseQuery = fetchBaseQuery({
  // baseUrl: '',
  baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/v1/`,
  credentials: 'include',
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
