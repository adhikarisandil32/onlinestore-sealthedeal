import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: []
  },
  reducers: {
    pushProductsToState: (state, action) => {
      state.products.push(...action.payload)
    }
  }
})

export const productsReducer = productsSlice.reducer
export const {pushProductsToState} = productsSlice.actions