import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_category = createAsyncThunk(
  "/category/add-category",
  async (info, { rejectWithValue }) => {
    console.log("info :", info.get("cat_image"));
    try {
      const { data } = await api.post("/category/add-category", info);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// update categories

export const update_category = createAsyncThunk(
  "/category/update-category",
  async ({ id, formData }, { rejectWithValue }) => {
    console.log("id :", id);
    console.log("formData :", formData.get("cat_name"));

    try {
      const { data } = await api.patch(
        `/category/update-category/${id}`,
        formData,
      );
      console.log("update data response :", data);

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// get categories
export const get_categories = createAsyncThunk(
  "/category/get-categories",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/category/get-categories", { params });
      // console.log("data :", data.data.pagination);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const delete_category = createAsyncThunk(
  "/category/delete-category",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.delete(`/category/delete-category/${id}`);
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
    pagination: {},
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
      })

      // get categories
      .addCase(get_categories.fulfilled, (state, actions) => {
        state.categoryList = actions.payload?.data?.categoris;
        state.pagination = actions.payload?.data.pagination;
      })

      // update category

      .addCase(update_category.pending, (state, _) => {
        state.loader = true;
      })

      .addCase(update_category.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload.message;
      })
      .addCase(update_category.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload?.message;
      })

      // category delete
      .addCase(delete_category.pending, (state, _) => {})
      .addCase(delete_category.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
      })
      .addCase(delete_category.fulfilled, (state, action) => {
        state.successMessage = action.payload?.message;
      });
  },
});

export const { messageClear } = categorySlice.actions;
export default categorySlice.reducer;
