import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../api/services/productServices";
import { Products } from "../../api/types/productsTypes";

export const getAllProductsAction = createAsyncThunk<Products[]>(
  "products",
  async () => {
    try {
      const products = await getAllProducts();
      return products;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);
