import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const getAsyncCategories = createAsyncThunk(
  "Categories/getAsyncCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3000/Categories");
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  },
);

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
  exteraReducer: {
    [getAsyncCategories.fulfilled]: (state, action) => {
      return { ...state, categories: action.payload, loading: false };
    },
    [getAsyncCategories.pending]: (state, action) => {
      return { ...state, loading: true, categories: [] };
    },
    [getAsyncCategories.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        categories: [],
        error: action.error.message,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { remove, update, add, search } = categorySlice.actions;

export default categorySlice.reducer;
