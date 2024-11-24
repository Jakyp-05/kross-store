import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsState } from "./type";
import { getAllProductsAction } from "./action";
import { Products } from "../../api/types/productsTypes";

const initialState: productsState = {
  products: [],
  status: "idle",
  error: null,
  filteredProducts: [],
  searchQuery: "",
};

const productsClice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredProducts = state.products.filter((product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
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
          state.filteredProducts = action.payload.filter((product) =>
            product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
          );
        }
      )
      .addCase(getAllProductsAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const { setSearchQuery } = productsClice.actions;
export default productsClice.reducer;
