import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import productSlice from "./product/productSlice";
import authSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
