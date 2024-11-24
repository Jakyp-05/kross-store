import { createAsyncThunk } from "@reduxjs/toolkit";
import { Products } from "../../api/types/productsTypes";
import { fetchCart } from "../../api/services/addTocart";

export const fetchCartAction = createAsyncThunk<Products[], number>(
  "fetch/cart",
  async (cartId, { rejectWithValue }) => {
    try {
      const cart = await fetchCart(cartId);
      return cart;
    } catch (error) {
      return rejectWithValue("Failed to fetch products");
    }
  }
);
