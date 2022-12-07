import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getTopStoriesIds: builder.query({
      query: args => {
        return {
          url: 'topstories.json',
        };
      },
    }),
    getTopStories: builder.mutation({
      query: args => {
        return {
          url: 'topstories.json',
          method: 'GET',
        };
      },
    }),
    getNewsDetails: builder.mutation({
      query: id => {
        return {
          url: `item/${id}.json`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useGetTopStoriesIdsQuery,
  useGetTopStoriesMutation,
  useGetNewsDetailsMutation,
} = newsApi;
