import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const PRODUCTS_URL = "https://fakestoreapi.com/products?limit=25";

const initialState = {
  products: [],
  status: "idle",
  error: null, 
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(PRODUCTS_URL);
    return response.data;
  }
);


const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedProducts = action.payload.map((product) => {
          return product;
        });

        state.products = state.products.concat(loadedProducts);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

export default productsSlice.reducer;
