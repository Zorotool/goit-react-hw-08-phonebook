import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6331bd2d3ea4956cfb66471e.mockapi.io' }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),  
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: ContactData => ({
        url: '/contacts',
        method: 'POST',
        body: {
          ...ContactData,
        },
      }),
      invalidatesTags: ['Contact'],
    }),
    }),
});



export const {  useFetchContactsQuery,useDeleteContactMutation,useCreateContactMutation} = contactsApi;