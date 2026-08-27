import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

// admin login start
export const admin_login = createAsyncThunk(
  "/auth/admin_login",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/admin_login", info);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const seller_login = createAsyncThunk(
  "/auth/seller_login",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/seller_login", info);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// get_user starts
export const get_user = createAsyncThunk(
  "/auth/get_user",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/auth/get_user");
      console.log("data", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: {},
    authChecked: false,
  },
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(admin_login.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload.message;
      })
      .addCase(admin_login.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload.message;
        state.userInfo = action.payload?.data.user;
        console.log("action.payload.data:", action.payload.data.user);
      })

      // seller_login start here
      .addCase(seller_login.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(seller_login.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload?.message;
      })
      .addCase(seller_login.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload?.successMessage;
        state.userInfo = action.payload?.data?.user;
      })

      //     get_user data start here
      .addCase(get_user.pending, (state, _) => {
        state.authChecked = false;
      })
      .addCase(get_user.rejected, (state, action) => {
        state.authChecked = true;
        state.userInfo = {};
      })
      .addCase(get_user.fulfilled, (state, action) => {
        state.authChecked = true;
        state.userInfo = action.payload?.data?.user;
      });
  },
});
export const { messageClear } = authSlice.actions;

export default authSlice.reducer;
