import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { StatusCode } from "../utils/StateStatusThunk";

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    productDetails: {},
    status: StatusCode.IDLE
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.productDetails = action.payload
        state.status = StatusCode.IDLE
      })
      .addCase(getProductDetails.pending, (state, action) => {
        state.status = StatusCode.LOADING
      })
  }
})

export const productDetailsReducer = detailsSlice.reducer

export const getProductDetails = createAsyncThunk('get/productDetails', async (productId) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
  return response.data
})