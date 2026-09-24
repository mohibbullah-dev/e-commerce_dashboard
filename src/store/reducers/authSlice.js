import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

// user register start
export const user_register = createAsyncThunk(
  "/auth/user_register",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/user_register", info);
      // console.log("data :", data);
      return data;
    } catch (error) {
      // console.log("REGISTER ERROR:", error);
      // console.log("STATUS:", error.response?.status);
      // console.log("RESPONSE:", error.response?.data);
      // console.log("SENT DATA:", info);
      return rejectWithValue(error.response.data);
    }
  },
);
// user login start

export const user_login = createAsyncThunk(
  "/auth/user_login",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/user_login", info);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

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

// seller register starts

export const seller_register = createAsyncThunk(
  "/auth/seller_register",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await api.post("auth/seller_register", info);
      console.log("data :", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// seller login start
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
      .addCase(get_user.pending, (state, _) => {
        state.authChecked = false;
      })
      .addCase(get_user.rejected, (state, _) => {
        state.authChecked = true;
        state.userInfo = {};
      })
      .addCase(get_user.fulfilled, (state, action) => {
        state.authChecked = true;
        state.userInfo = action.payload?.data?.user;
      })

      // user register
      .addCase(user_register.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(user_register.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload.message;
      })
      .addCase(user_register.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload.message;
        state.userInfo = action.payload?.data;
      })

      // user_login
      .addCase(user_login.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(user_login.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload?.message;
      })
      .addCase(user_login.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload?.message;
        state.userInfo = action.payload?.data;
      })

      // admin login start here
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
        state.successMessage = action.payload?.message;
        state.userInfo = action.payload?.data?.user;
      })

      .addCase(seller_register.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(seller_register.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload.message;
      })
      .addCase(seller_register.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload?.message;
        state.userInfo = action.payload?.data;
      });
  },
});
export const { messageClear } = authSlice.actions;

export default authSlice.reducer;
