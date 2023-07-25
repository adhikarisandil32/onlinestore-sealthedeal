import axios from 'axios'
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { StatusCode } from '../utils/StateStatusThunk';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: StatusCode.IDLE
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsFromAPI.fulfilled, (state, action) => {
        state.products = action.payload
        state.status = StatusCode.IDLE
      })
      .addCase(getProductsFromAPI.pending, (state, action) => {
        state.status = StatusCode.LOADING
      })
      .addCase(getProductsFromAPI.rejected, (state, action) => {
        state.status = StatusCode.ERROR
      })
  }
})

export const productsReducer = productsSlice.reducer

export const getProductsFromAPI = createAsyncThunk('products/get', async () => {
  const response = await axios.get("https://fakestoreapi.com/products")
  return response.data
})