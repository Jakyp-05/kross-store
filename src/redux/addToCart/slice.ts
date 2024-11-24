import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../api/types/productsTypes";
import { cartState } from "./type";
import { fetchCartAction } from "./action";

const initialState: cartState = {
  cart: [], // Пустой массив вместо null для избежания ошибок
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      const itemExists = state.cart.some(
        (item) => item.id === action.payload.id
      );

      if (!itemExists) {
        state.cart.push(action.payload);
      }
    },

    removeCart: (state, action: PayloadAction<Products>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCartAction.fulfilled,
        (state, action: PayloadAction<Products[]>) => {
          state.status = "succeeded";
          state.cart = action.payload;
        }
      )
      .addCase(fetchCartAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || "Failed to fetch products";
      });
  },
});

export const { addToCart, removeCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: cartState }) => state.cart.cart;

export default cartSlice.reducer;
