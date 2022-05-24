import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./product/productReducer";

const store = configureStore({ reducer: productReducer });

export default store;
