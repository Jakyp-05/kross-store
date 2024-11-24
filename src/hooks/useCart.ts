import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { Products } from "../api/types/productsTypes";
import { removeCart } from "../redux/addToCart/slice";
import useOutSideClick from "./useOutSideClick";
import { fetchCartAction } from "../redux/addToCart/action";
import { useEffect } from "react";

type IProps = {
  close: () => void;
};

const useCart = ({ close }: IProps) => {
  const { cartId } = useParams();
  const dispatch = useAppDispatch();
  const { cart, status, error } = useAppSelector((state) => state.cart);

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const tax = Math.round(total * 0.05);

  const handleRemove = (product: Products) => {
    dispatch(removeCart(product));
  };

  const ref = useOutSideClick<HTMLDivElement>(() => {
    close();
  });

  useEffect(() => {
    if (cartId) {
      dispatch(fetchCartAction(Number(cartId)));
    }
  }, [cartId, dispatch]);

  return { cart, status, error, total, tax, handleRemove, ref };
};

export default useCart;
