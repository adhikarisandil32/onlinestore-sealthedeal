import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { StatusCode } from "../utils/StateStatusThunk";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    products: [],
    searchedProducts: [],
    status: StatusCode.IDLE,
    searchText: ''
  },
  reducers: {
    updateSearchedProducts: (state, action) => {
      state.searchText = action.payload
      
      if(state.searchText){
        state.searchedProducts = state.products.filter(product => {
          return (
            product?.title.includes(state.searchText)
          )
        })
      } else {
        state.searchedProducts = state.products
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchedProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.searchedProducts = state.products
        state.status = StatusCode.IDLE
      })
      .addCase(getSearchedProducts.pending, (state, action) => {
        state.status = StatusCode.LOADING
      })
      .addCase(getSearchedProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR
      })
  }
})

export const searchReducer = searchSlice.reducer
export const {updateSearchedProducts} = searchSlice.actions

export const getSearchedProducts = createAsyncThunk("get/searchedProducts", async (category) => {
  const getURL = category.toLowerCase() === 'all' ?
    'https://fakestoreapi.com/products/' : `https://fakestoreapi.com/products/category/${category}`
  const response = await axios.get(getURL)
  return response.data
})