import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const create_store = createAsyncThunk(
  "/store/create-store",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/store/create_store", info);
      console.log("data :", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const update_store = createAsyncThunk(
  "store/store-update",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(`store/store-update/${id}`, formData);
      console.log("store_updated_data :", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const my_store = createAsyncThunk(
  "/store/my-store",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/store/my-store");
      console.log("data :", data);

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    s_loader: false,
    errorMessage: "",
    successMessage: "",
    store: {},
    allStores: [],
  },
  reducers: {
    ClearMessage: (state) => {
      ((state.errorMessage = ""), (state.successMessage = ""));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(create_store.pending, (state, _) => {
        state.s_loader = true;
      })
      .addCase(create_store.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.s_loader = false;
      })
      .addCase(create_store.fulfilled, (state, action) => {
        state.successMessage = action.payload?.message;
        state.s_loader = false;
        state.store = action.payload?.data;
      })

      // my_store
      .addCase(my_store.fulfilled, (state, action) => {
        state.store = action.payload?.data;
      })

      // update-store
      .addCase(update_store.pending, (state, action) => {
        state.s_loader = true;
      })
      .addCase(update_store.rejected, (state, action) => {
        state.s_loader = false;
        state.errorMessage = action.payload?.message;
      })
      .addCase(update_store.fulfilled, (state, action) => {
        state.s_loader = false;
        state.successMessage = action.payload?.message;
      });
  },
});

export const { ClearMessage } = storeSlice.actions;
export default storeSlice.reducer;
