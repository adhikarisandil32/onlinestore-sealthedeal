import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    value: []
  },
  reducers: {
    matchedData: (state, action) => {
      return state.value
    }
  }
})

export const productSliceReducer = productSlice.reducer
export const {matchedData} = productSlice.actions