import { apiRoot } from "../config/api";
import { Products } from "../types/productsTypes";

export const getAllProducts = async (): Promise<Products[]> => {
  const res = await apiRoot.get<Products[]>("products");
  return res.data;
};
