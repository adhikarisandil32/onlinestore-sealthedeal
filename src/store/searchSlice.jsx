import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { StatusCode } from "../utils/StateStatusThunk";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    products: [],
    searchedProducts: [], //this is what will be displayed on the component
    status: StatusCode.IDLE,
    searchText: ''
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchedProducts.fulfilled, (state, action) => {
        state.products = action.payload.data
        state.searchText = action.payload.searchText.toLowerCase()

        //Based on the searchText, filter the title or description contain searchText
        state.searchedProducts = state.products.filter(product => {
          return (
            product?.title.toLowerCase().includes(state.searchText) || product?.description.toLowerCase().includes(state.searchText)
          )
        })
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

//createAsyncThunk's async function can accept only one argument, if more than one, convert it into an object like below
export const getSearchedProducts = createAsyncThunk("get/searchedProducts", async ({category, searchText}) => {
  const productsURL = category.toLowerCase() === 'all' ?
    'https://fakestoreapi.com/products/' : `https://fakestoreapi.com/products/category/${category}`
  const response = await axios.get(productsURL)
  return {data: response.data, searchText: searchText}
})