import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "./userSlice";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),

  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => `/users`,
    }),
  }),
});

// Хук
export const { useGetUsersQuery } = usersApi;
