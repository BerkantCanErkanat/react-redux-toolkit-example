import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fakeApi = createApi({
  reducerPath: 'fakeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  endpoints: (builder) => ({
    getProductsById: builder.query({
      query: (id) => id === -1 ? `products` : `products?categoryId=${id}`,
      providesTags: ['Post']
    }),
    getCategories : builder.query({
        query: () => 'categories',
        providesTags: ['Post']
    }),
    addNewCategory: builder.mutation({
      query: (payload) => ({
        url: '/categories',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Post'], //bu isimle diger querylerde   providesTags: ['Post'] boyle tanımlarsan
      //bu querylerin kullanıldıgı her component fonku refreshlenır tekrar calısır bu sayede UI da degısıklık algılar
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetProductsByIdQuery,useGetCategoriesQuery,useAddNewCategoryMutation} = fakeApi