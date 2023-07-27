import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { cartReducers } from "./cartSlice";
import { categoriesReducer } from "./categoriesSlice";
import { searchReducer } from "./searchSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducers,
    categories: categoriesReducer,
    searchedProducts: searchReducer
  }
})