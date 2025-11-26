import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithDelay } from "../../baseApi.ts";
import type { Product } from "./product.ts";

const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: baseQueryWithDelay,
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => ({ url: "products" }),
    }),
    fetchProductDetails: builder.query<Product, number>({
      query: (id) => ({ url: `products/${id}` }),
    }),
  }),
});

export { catalogApi };
export const { useFetchProductsQuery, useFetchProductDetailsQuery } = catalogApi;
