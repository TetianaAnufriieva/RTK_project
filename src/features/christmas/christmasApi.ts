import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// 1. Описываем тип данных, которые вернёт сервер
export interface TimeLeft {
days: number;
hours: number;
minutes: number;
seconds: number;
}

// 2. Создаём APIсервис
export const christmasApi = createApi({
  reducerPath: "christmasApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://christmascountdown.live/",
  }),
  endpoints: (builder) => ({
    getTimeLeft: builder.query<TimeLeft, void>({
      query: () => "/api/timeleft",
    }),
  }),
});

export const {useGetTimeLeftQuery} = christmasApi;
