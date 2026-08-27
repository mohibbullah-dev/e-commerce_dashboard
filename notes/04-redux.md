# redux

setup redux basic + redux dev tools

## learn ?
- i have learned a lot of things (probably all thing about `redux `/ `state sharing toos`).
  like **store setup** (where s store file is created with all all slice / reducer) &rarr **rootReducer file** (where all reduces / slices are stores ) &rarr **slice file** (where all data + state are stores of a paricular slice).

## question?
- i have to dipdipe about redux how it works internally?

## createAsyncThunk
- i have added this methood in authSlice file for async program handling like`:`
```javascript
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info) => {
    console.log(info);
    // try {
    //   // const { data } = await api.post("auth/admin_login", info, {
    //   //   withCredentials: true,
    //   // });
    //   // return data
    // } catch (error) {
    //   throw error
    // }
  },
);
```


## extraReducers
- used `extraReducers` in api handing for adminLogin.