import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = process.env.BASE_URL;
export const gradusApi = createApi({
  reducerPath: "gradus/api",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, string>({
      queryFn: async (arg: any) => {
        try {
          const response = await fetch(url + arg, {
            headers: {
              Authorization: "Bearer " + process.env.PUBLIC_TOKEN,
              Accept: "application/json",
            },
          });
          return { data: await response.json() };
        } catch (e: any) {
          return { error: e.message };
        }
      },
    }),
  }),
});

export const { useGetUsersQuery } = gradusApi;
