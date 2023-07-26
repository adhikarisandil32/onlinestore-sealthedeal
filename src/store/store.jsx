import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { cartReducers } from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducers
  }
})