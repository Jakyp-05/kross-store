import { useEffect } from "react";
import { getAllProductsAction } from "../redux/getProducts/action";
import { useAppDispatch, useAppSelector } from "../redux/store";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const { filteredProducts, status, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);
  return { filteredProducts, status, error };
};

export default useProduct;
