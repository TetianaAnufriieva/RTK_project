import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { DictionaryItem } from "./dictionaryTypes";

export const dictionaryApi = createApi({
  reducerPath: "dictionaryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.dictionaryapi.dev/api/v2/entries/en",
  }),
  endpoints: (builder) => ({
    getDictionary: builder.query<DictionaryItem[], string>({
      query: (word) => `/${word}`,
    }),
  }),
});

export const { useGetDictionaryQuery } = dictionaryApi;
