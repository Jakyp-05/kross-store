import { Products } from "../../api/types/productsTypes";

export interface cartState {
  cart: Products[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string;
}
