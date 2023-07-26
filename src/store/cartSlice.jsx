import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1)
    }
  }
})

export const cartReducers = cartSlice.reducer
export const {addToCart, removeFromCart} = cartSlice.actions

