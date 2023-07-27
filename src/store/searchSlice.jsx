import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    products: [],
    status: 'idle'
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchedProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.status = 'idle'
      })
      .addCase(getSearchedProducts.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(getSearchedProducts.rejected, (state, action) => {
        state.status = 'rejected'
      })
  }
})

export const searchReducer = searchSlice.reducer

export const getSearchedProducts = createAsyncThunk("get/searchedProducts", async (category) => {
  const getURL = category.toLowerCase() === 'all' ?
    'https://fakestoreapi.com/products/' : `https://fakestoreapi.com/products/category/${category}`
  const response = await axios.get(getURL)
  return response.data
})