import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const createProduct = createAsyncThunk(
  "/product/create-product",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/product/create-product", info);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const update_product = createAsyncThunk(
  "product/update-product",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(
        `product/update-product/${id}`,
        formData,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const add_productSingleImage = createAsyncThunk(
  "/product/add-singleProductImage",
  async ({ productId, formData }, { rejectWithValue }) => {
    try {
      const { data } = await api.put(
        `/product/add-singleProductImage/${productId}`,
        formData,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// replace existing image

export const replace_existingProductImage = createAsyncThunk(
  "/product/update-singleProductImage",
  async ({ productId, formData }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(
        `/product/update-singleProductImage/${productId}`,
        formData,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

// remove_product_singleIamge
export const delete_productSingleImage = createAsyncThunk(
  "/product/delete-singleProductImage",
  async ({ productId, imagePublicId }, { rejectWithValue }) => {
    try {
      const { data } = await api.delete(
        `/product/delete-singleProductImage/${productId}`,
        {
          data: {
            imagePublic_id: imagePublicId,
          },
        },
      );
      console.log("product_singleImage deleted", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// get_myProduct
export const my_product = createAsyncThunk(
  "/product/my-product",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/product/my-product/${id}`);
      console.log("my_product data :", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// get_all_products
export const get_allProducts_withPagination = createAsyncThunk(
  "/product/create-product/get-allProduct",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        "/product/get-allProducts_withPagination",
        { params },
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const delete_product = createAsyncThunk(
  "/product/delete-product",
  async (productid, { rejectWithValue }) => {
    try {
      const { data } = await api.delete(`/product/delete-product/${productid}`);
      console.log("deleted_data :", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    p_loader: false,
    errorMessage: "",
    successMessage: "",
    productsList: [],
    product: {},
    pagination: {},
  },
  reducers: {
    clearMessage: (state) => {
      ((state.errorMessage = ""), (state.successMessage = ""));
    },
  },

  extraReducers: (builder) => {
    builder
      // create product
      .addCase(createProduct.pending, (state, action) => {
        state.p_loader = true;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.errorMessage = action.payload.message;
        state.p_loader = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.successMessage = action.payload.message;
        state.p_loader = false;
        state.product = action.payload.data;
      })

      // update product

      .addCase(update_product.pending, (state, action) => {
        state.p_loader = true;
      })
      .addCase(update_product.rejected, (state, action) => {
        state.p_loader = false;
        state.errorMessage = action.payload?.message;
      })
      .addCase(update_product.fulfilled, (state, action) => {
        state.p_loader = false;
        state.successMessage = action.payload?.message;
        state.product = action.payload.data;
      })

      // get my_product
      .addCase(my_product.fulfilled, (state, action) => {
        state.product = action.payload?.data;
      })

      // get_allProduct_withPagination
      .addCase(get_allProducts_withPagination.fulfilled, (state, action) => {
        state.productsList = action.payload.data?.products;
        state.pagination = action.payload.data?.pagination;
      })

      // delete-product
      .addCase(delete_product.pending, (state, _) => {
        state.p_loader = true;
      })
      .addCase(delete_product.rejected, (state, action) => {
        state.p_loader = false;
        state.errorMessage = action.payload?.message;
      })

      .addCase(delete_product.fulfilled, (state, action) => {
        console.log("deleted product :", action.payload?.data);
        state.p_loader = false;
        state.successMessage = action.payload?.message;
        state.product = action?.payload;
      });
  },
});

export const { clearMessage } = productSlice.actions;
export default productSlice.reducer;
