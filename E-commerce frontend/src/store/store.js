import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Pages/Product/productSlice'
import cartReducer from '../Pages/cart/cartSlice'

export const store = configureStore({
  reducer: {
  product:productReducer,
  cart:cartReducer
  },
});
