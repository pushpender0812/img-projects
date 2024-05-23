import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";





export const adminApi = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:8080/' }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => `accounts`,
      providesTags:['accounts'],
      invalidatesTags:['accounts']
    }),
  }),
})


export const { useGetAccountsQuery } = adminApi