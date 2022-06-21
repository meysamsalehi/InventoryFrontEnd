import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { validToken } from "../product/productSlice";

export const loginAsync = createAsyncThunk(
  "products/loginAsync",
  async (payload, { rejectWithValue }) => {
    try {
      const respons = await axios.post("http://localhost:8000/api/login/", payload, {
        headers: {
          Authorization: "Bearer " + validToken,
        },
      });

      localStorage.setItem("authKey", JSON.stringify(respons.data.token));
      console.log(respons.data);

      return respons.data;
    } catch (error) {
      // console.log(error);

      return rejectWithValue([], error);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    auth: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [loginAsync.fulfilled]: (state, action) => {
      state.auth.push(action.payload);
    },
  },
});

export default authSlice.reducer;
