import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsState } from "./type";
import { getAllProductsAction } from "./action";
import { Products } from "../../api/types/productsTypes";

const initialState: productsState = {
  products: [],
  status: "idle",
  error: null,
};

const productsClice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getAllProductsAction.fulfilled,
        (state, action: PayloadAction<Products[]>) => {
          state.status = "succeeded";
          state.products = action.payload;
        }
      )
      .addCase(getAllProductsAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default productsClice.reducer;
