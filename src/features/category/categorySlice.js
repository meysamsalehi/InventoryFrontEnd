import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, value: "web", label: "وب" },
  { id: 2, value: "mobile", label: "موبایل" },
];

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    remove: (state, action) => {
      const filteredcategorys = state.filter((p) => p.id !== action.payload.id);
      return filteredcategorys;
    },
    update: (state, action) => {
      const indexChange = state.findIndex((p) => p.id === action.payload.id);
      const categoryChange = { ...state[indexChange] };
      categoryChange.title = action.payload.values.title;
      categoryChange.quantity = action.payload.values.quantity;
      categoryChange.category = action.payload.values.category;
      const categoryUpdatedChange = [...state];
      categoryUpdatedChange[indexChange] = categoryChange;
      return categoryUpdatedChange;
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
export const { remove, update, add, search } = categorySlice.actions;

export default categorySlice.reducer;
