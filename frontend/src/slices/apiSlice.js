import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseQuery = fetchBaseQuery({ baseUrl: '' });
const baseQuery = fetchBaseQuery({
  // baseUrl: '',
  baseUrl: 'https://moneynoteapp-production.up.railway.app',
  credentials: 'include',
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
