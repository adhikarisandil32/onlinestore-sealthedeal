import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      let productAlreadyExists = false

      state.cart.forEach(cartProduct => {
        if(cartProduct.product.id === action.payload.product.id){
          cartProduct.quantity = action.payload.quantity
          productAlreadyExists = true
        }
      })
      if(productAlreadyExists === false){
        state.cart.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1)
    }
  }
})

export const cartReducers = cartSlice.reducer
export const {addToCart, removeFromCart} = cartSlice.actions