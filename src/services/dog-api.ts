import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dogApi = createApi({
  reducerPath: 'dogImages',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/api/' }),
  endpoints: (builder) => ({
    getDogImages: builder.query({
      query: (count?: number) => `breeds/image/random/${count || 12}`,
      transformResponse: (result: { message: string[] }, err, id) => {
        return result.message;
      }
    }),
  }),
});

export const { useGetDogImagesQuery } = dogApi;
