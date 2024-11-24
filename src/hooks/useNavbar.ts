import { useState } from "react";
import { useAppSelector } from "../redux/store";

const useNavbar = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const { cart } = useAppSelector((state) => state.cart);

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  return { cartOpen, cart, handleCartOpen, setCartOpen };
};

export default useNavbar;
