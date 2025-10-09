import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API,
    // credentials: "include", // if using cookies (JWT)
  }),
  tagTypes: ["Blog"],
  endpoints: () => ({}),
});
