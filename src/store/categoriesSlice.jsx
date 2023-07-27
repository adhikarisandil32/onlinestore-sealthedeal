import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const categoriesSlice = createSlice({
  name: 'search',
  initialState: {
    categories: [],
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
  }
})

export const categoriesReducer = categoriesSlice.reducer

export const getProductsCategories = createAsyncThunk('get/categories', async () => {
  const response = await axios.get('https://fakestoreapi.com/products/categories')
  return response.data
})