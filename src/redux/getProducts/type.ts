import { Products } from "../../api/types/productsTypes";

export interface productsState {
  products: Products[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string;
  filteredProducts: Products[];
  searchQuery: string;
}
