import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Product, SearchProductParams } from './types'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'

export const fetchProducts = createAsyncThunk<Product[], SearchProductParams>(
  'Product/fetchProductsStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params
    console.log(params, 4444)
    const { data } = await axios.get<Product[]>(
      `https://62a2da5d5bd3609cee5bd482.mockapi.io/Online`,
      {
        params: pickBy(
          {
            page: currentPage,
            limit: 15,
            category,
            sortBy,
            order,
            search,
          },
          identity,
        ),
      },
    )

    return data
  },
)
