import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";

export const validToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjU1NjEyODE1LCJleHAiOjE2NTU2MTY0MTUsIm5iZiI6MTY1NTYxMjgxNSwianRpIjoiNXBzSzZEMTU3YlZhM2ZGOCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.rR3lY2LkuGR6q4k7DYNuhWn64UPq7UBZ6gyXiX3D8EY";

export const getAsyncProducts = createAsyncThunk(
  "products/getAsyncProducts",
  async (_, { rejectWithValue }) => {
    try {
      //with json server
      // const respons = await axios.get("http://localhost:3001/products/");

      const respons = await axios.get("http://localhost:8000/api/products", {
        headers: {
          Authorization: "Bearer " + validToken,
        },
      });
      return respons.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  },
);

export const addAsyncProducts = createAsyncThunk(
  "products/addAsyncProducts",
  async (payload, { rejectWithValue }) => {
    try {
      //with json server
      // const respons = await axios.post("http://localhost:3001/products/", payload.values);

      const respons = await axios.post(
        "http://localhost:8000/api/create/",
        payload.values,
        {
          headers: {
            Authorization: "Bearer " + validToken,
          },
        },
      );
      return respons.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  },
);

export const updateAsyncProducts = createAsyncThunk(
  "products/updateAsyncProducts",
  async (payload, { rejectWithValue }) => {
    try {
      // with json server
      // const response = await axios.patch(`http://localhost:3001/products/${payload.id}`, {
      //   id: payload.id,
      //   title: payload.values.title,
      //   quantity: payload.values.quantity,
      //   category: payload.values.category,
      // });

      const response = await axios.patch(
        `http://localhost:8000/api/update/${payload.id}`,
        {
          id: payload.id,
          title: payload.values.title,
          quantity: payload.values.quantity,
          category: payload.values.category,
        },
        {
          headers: {
            Authorization: "Bearer " + validToken,
          },
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  },
);

export const incrementAsyncProducts = createAsyncThunk(
  "products/incrementAsyncProducts",
  async (payload, { rejectWithValue }) => {
    try {
      // console.log("payload", payload);
      // const response = await axios.patch(`http://localhost:3001/products/${payload.id}`, {
      //   quantity: payload.quantity + 1,
      // });

      // with ;
      const response = await axios.patch(
        `http://localhost:8000/api/increase/${payload.id}`,
        {
          quantity: 1,
          action: "plus",
        },
        {
          headers: {
            Authorization: "Bearer " + validToken,
          },
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  },
);

export const decrementAsyncProducts = createAsyncThunk(
  "products/decrementAsyncProducts",
  async (payload, { rejectWithValue }) => {
    try {
      // with json server
      // console.log("payload", payload);
      // const response = await axios.patch(`http://localhost:3001/products/${payload.id}`, {
      //   quantity: payload.quantity - 1,
      // });

      const response = await axios.patch(
        `http://localhost:8000/api/increase/${payload.id}`,
        {
          quantity: 1,
          action: "minus",
        },
        {
          headers: {
            Authorization: "Bearer " + validToken,
          },
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  },
);

export const getSearchAsyncProducts = createAsyncThunk(
  "products/getSearchAsyncProducts",
  async (_, { rejectWithValue }) => {
    try {
      //with json server
      // const respons = await axios.get("http://localhost:3001/products/");

      const respons = await axios.get("http://localhost:8000/api/products", {
        headers: {
          Authorization: "Bearer " + validToken,
        },
      });
      return respons.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue([], error);
    }
  },
);

export const deleteAsyncProducts = createAsyncThunk(
  "todos/deleteAsyncProducts",
  async (payload, { rejectWithValue }) => {
    try {
      //with json server
      // const response = await axios.delete(`http://localhost:3001/products/${payload.id}`);
      // return { id: payload.id };

      const response = await axios.delete(
        `http://localhost:8000/api/delete/${payload.id}`,
        {
          headers: {
            Authorization: "Bearer " + validToken,
          },
        },
      );
      return { id: payload.id };
    } catch (error) {
      return rejectWithValue([], error);
    }
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    error: null,
  },
  // reducers: {
  //   increment: (state, action) => {
  //     // state.value += 1;
  //     const indexIncrement = state.findIndex((p) => p.id === action.payload.id);
  //     const productIncrement = { ...state[indexIncrement] };
  //     productIncrement.quantity++;
  //     const productUpdatedIncrement = [...state];
  //     productUpdatedIncrement[indexIncrement] = productIncrement;
  //     return productUpdatedIncrement;
  //   },
  //   decrement: (state, action) => {
  //     const index = state.findIndex((p) => p.id === action.payload.id);
  //     const product = { ...state[index] };
  //     if (product.quantity === 1) {
  //       const filteredProducts = state.filter((p) => p.id !== action.payload.id);
  //       return filteredProducts;
  //     } else {
  //       product.quantity--;
  //       const productUpdated = [...state];
  //       productUpdated[index] = product;
  //       return productUpdated;
  //     }
  //   },
  //   incrementByAmount: (state, action) => {
  //     state.value += action.payload;
  //   },
  //   remove: (state, action) => {
  //     // state.value += action.payload;
  //     const filteredProducts = state.filter((p) => p.id !== action.payload.id);
  //     return filteredProducts;
  //   },
  //   update: (state, action) => {
  //     const indexChange = state.findIndex((p) => p.id === action.payload.id);
  //     const productChange = { ...state[indexChange] };
  //     productChange.title = action.payload.values.title;
  //     productChange.quantity = action.payload.values.quantity;
  //     productChange.category = action.payload.values.category;
  //     const productUpdatedChange = [...state];
  //     productUpdatedChange[indexChange] = productChange;
  //     return productUpdatedChange;
  //   },
  //   add: (state, action) => {
  //     console.log("add", action.payload.values);
  //     return [...state, action.payload.values];
  //   },
  //   search: (state, action) => {
  //     // const value = action.payload.event;
  //     // console.log("value search", value);
  //     // if (value == "") {
  //     //   return {
  //     //     loading: false,
  //     //     products: [],
  //     //     error: null,
  //     //   };
  //     // } else {
  //     //   return state.products.filter((p) => p.title.includes(value));
  //     // }

  //     const value = action.payload.event;
  //     console.log("value search", value);
  //     if (value == "") {
  //       return { ...state, products: action.payload, loading: false };
  //     } else {
  //       return {
  //         ...state,
  //         products: action.payload.filter((p) => p.title.includes(value)),
  //         loading: false,
  //       };
  //     }

  //     // return [action.payload.products.filter((p) => p.title.includes(value))];
  //     return {
  //       ...state,
  //       products: action.payload.products.filter((p) => p.title.includes(value)),
  //       loading: false,
  //     };

  //     // console.log(searched);
  //     // return { ...state, searched };
  //   },

  //   sort: (state, action) => {
  //     return {
  //       ...state,
  //       products: _.orderBy(
  //         state.products,
  //         [action.payload.columnName],
  //         [action.payload.sortType],
  //       ),
  //       loading: false,
  //     };
  //   },
  // },
  extraReducers: {
    [getAsyncProducts.fulfilled]: (state, action) => {
      return {
        ...state,
        products: _.orderBy(action.payload, ["title"], ["asc"]),
        loading: false,
      };
    },
    [getAsyncProducts.pending]: (state, action) => {
      return { ...state, loading: true, products: [] };
    },
    [getAsyncProducts.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        products: [],
        error: action.error.message,
      };
    },
    [addAsyncProducts.fulfilled]: (state, action) => {
      state.products.push(action.payload);
    },
    [updateAsyncProducts.fulfilled]: (state, action) => {
      console.log(action.payload.data);
      const indexChange = state.products.findIndex(
        (p) => p.id === action.payload.data.id,
      );
      const productChange = { ...state[indexChange] };
      productChange.title = action.payload.data.title;
      productChange.quantity = action.payload.data.quantity;
      productChange.category = action.payload.data.category;
      // const productUpdatedChange = [...state];
      // productUpdatedChange[indexChange] = productChange;
      // return productUpdatedChange;
    },

    [incrementAsyncProducts.fulfilled]: (state, action) => {
      const selectedProduct = state.products.find(
        (pro) => pro.id === action.payload.data.id,
      );
      selectedProduct.quantity++;
    },

    [decrementAsyncProducts.fulfilled]: (state, action) => {
      const selectedProduct = state.products.find(
        (pro) => pro.id === action.payload.data.id,
      );
      selectedProduct.quantity--;
    },
    [getSearchAsyncProducts.fulfilled]: (state, action) => {
      const value = action.meta.arg.event;
      if (value == "") {
        return { ...state, products: action.payload, loading: false };
      } else {
        return {
          ...state,
          products: action.payload.filter((p) => p.title.includes(value)),
          loading: false,
        };
      }
    },
    [deleteAsyncProducts.fulfilled]: (state, action) => {
      console.log(action);
      state.products = state.products.filter((pro) => pro.id != action.payload.id);
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  remove,
  update,
  add,
  search,
  sort,
} = productSlice.actions;
export default productSlice.reducer;
