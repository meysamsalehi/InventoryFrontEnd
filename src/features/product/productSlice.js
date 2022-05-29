import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "سامسونگ s21",
    quantity: "25",
    category: "mobile",
  },
  {
    id: 2,
    title: "شیائومی رد می ",
    quantity: "10",
    category: "mobile",
  },
  {
    id: 3,
    title: "آیفون سیکس",
    quantity: "28",
    category: "mobile",
  },
  {
    id: 4,
    title: "آیکون 11",
    quantity: "14",
    category: "mobile",
  },
  {
    id: 5,
    title: "آنر 10",
    quantity: "8",
    category: "mobile",
  },
];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state, action) => {
      // state.value += 1;
      const indexIncrement = state.findIndex((p) => p.id === action.payload.id);
      const productIncrement = { ...state[indexIncrement] };
      productIncrement.quantity++;
      const productUpdatedIncrement = [...state];
      productUpdatedIncrement[indexIncrement] = productIncrement;
      return productUpdatedIncrement;
    },
    decrement: (state, action) => {
      const index = state.findIndex((p) => p.id === action.payload.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.payload.id);
        return filteredProducts;
      } else {
        product.quantity--;
        const productUpdated = [...state];
        productUpdated[index] = product;
        return productUpdated;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    remove: (state, action) => {
      // state.value += action.payload;
      const filteredProducts = state.filter((p) => p.id !== action.payload.id);
      return filteredProducts;
    },
    update: (state, action) => {
      const indexChange = state.findIndex((p) => p.id === action.payload.id);
      const productChange = { ...state[indexChange] };
      productChange.title = action.payload.values.title;
      productChange.quantity = action.payload.values.quantity;
      productChange.category = action.payload.values.category;
      const productUpdatedChange = [...state];
      productUpdatedChange[indexChange] = productChange;
      return productUpdatedChange;
    },
    add: (state, action) => {
      console.log("add", action.payload.values);
      return [...state, action.payload.values];
    },
    search: (state, action) => {
      const value = action.payload.event;
      console.log("value search", value);
      if (value == "") {
        return initialState;
      } else {
        return state.filter((p) => p.title.includes(value));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, remove, update, add, search } =
  productSlice.actions;

export default productSlice.reducer;
