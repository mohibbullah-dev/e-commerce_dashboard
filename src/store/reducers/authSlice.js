import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info) => {
    console.log(info);
    try {
      const { data } = await api.post("auth/admin_login", info, {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    successMessageL: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {},
  extraReducers: () => {},
});

export default authSlice.reducer;
