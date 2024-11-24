import { apiRoot } from "../config/api";
import { Products } from "../types/productsTypes";

export const fetchCart = async (id: number): Promise<Products[]> => {
  const res = await apiRoot.get<Products[]>(`products/${id}`);
  return res.data;
};
