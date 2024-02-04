//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const authService = createApi({
  reducerPath: 'auth',
  tagTypes: [''],
  baseQuery: basefetchBaseQuery('auth'),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (postBody) => ({
        url: 'register',
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: ['auth'],
    }),
    login: builder.mutation({
      query: (postBody) => ({
        url: 'login',
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: (result, error, arg) => {},
    }),
    logout: builder.mutation({
      query: (postBody) => ({
        url: 'logout',
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: (result, error, arg) => {},
    }),
    fotgetPassword: builder.query({
      query: (email) => ({
        url: `fotgetPassword/${email}`,
        method: 'GET',
      }),
      providesTags: ['auth'],
    }),
    verifyForgetToken: builder.query({
      query: (email, token) => ({
        url: `verifyForgetToken/${email}/${token}`,
        method: 'GET',
      }),
      providesTags: ['auth'],
    }),
    resetPasswordToken: builder.mutation({
      query: (email, token, postBody) => ({
        url: `resetPasswordToken/${email}/${token}`,
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: ['auth'],
    }),
  }),
});
export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useFotgetPasswordQuery,
  useVerifyForgetTokenQuery,
  useResetPasswordTokenQuery,
} = authService;
