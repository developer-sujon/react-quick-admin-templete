//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const categoryService = createApi({
  reducerPath: 'category',
  tagTypes: [''],
  baseQuery: basefetchBaseQuery('category'),
  endpoints: (builder) => ({
    categoryCreate: builder.mutation({
      query: (postBody) => ({
        url: 'categoryCreate',
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: ['category'],
    }),
    categoryList: builder.query({
      query: () => ({
        url: 'categoryList',
        method: 'GET',
      }),
      providesTags: ['category'],
    }),
    categorydropDown: builder.query({
      query: () => ({
        url: 'categorydropDown',
        method: 'GET',
      }),
      providesTags: ['category'],
    }),
    categoryPaginate: builder.query({
      query: ({ pageNumber, perPage, order, searchKey }) => ({
        url: `categoryPaginate/${pageNumber + '/' + perPage + '/' + order + '/' + searchKey}`,
        method: 'GET',
      }),
      providesTags: ['category'],
    }),
    categoryDetails: builder.mutation({
      query: (id) => ({
        url: `categoryDetails/${id}`,
        method: 'GET',
      }),
      providesTags: ['Category'],
    }),
    categoryUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `categoryUpdate/${id}`,
        method: 'PATCH',
        body: postBody,
      }),
      invalidatesTags: ['category'],
    }),
    categoryDelete: builder.mutation({
      query: (id) => ({
        url: `categoryDelete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['category'],
    }),
  }),
});
export const {
  useCategoryCreateMutation,
  useCategoryListQuery,
  useCategorydropDownQuery,
  useCategoryPaginateQuery,
  useCategoryDetailsMutation,
  useCategoryUpdateMutation,
  useCategoryDeleteMutation,
} = categoryService;
