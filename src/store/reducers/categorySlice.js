import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_category = createAsyncThunk(
  "/category/add-category",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/category/add-category", info);
      console.log("data :", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    errorMessage: "",
    successMessage: "",
    loader: false,
    categoryList: [],
  },
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder
      // add-category
      .addCase(add_category.pending, (state, actions) => {
        state.loader = true;
      })
      .addCase(add_category.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload?.message;
      })
      .addCase(add_category.fulfilled, (state, action) => {
        state.successMessage = action.payload.message;
        state.loader = false;
      });
  },
});

export const { messageClear } = categorySlice.actions;
export default categorySlice.reducer;
