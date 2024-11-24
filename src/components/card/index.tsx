import React from "react";
import { addToCart, selectCartItems } from "../../redux/addToCart/slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Products } from "../../api/types/productsTypes";

import plusImage from "../../assets/svg/plus.svg";
import wishlistImage from "../../assets/svg/wishlist.svg";
import checkImage from "../../assets/svg/check.svg";

type IProps = {
  product: Products;
};

const Card: React.FC<IProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleCart = (product: Products) => {
    dispatch(addToCart(product));
  };

  return (
    <div
      className={`w-[220px] p-[25px] rounded-[40px] flex flex-col justify-between border-2 border-sold border-border-color ${
        isInCart ? "shadow-lg shadow-black-500/50" : ""
      }`}
    >
      <div className="relative">
        <img src={product.image} alt={product.name} />
        <div className="absolute top-0 p-[10px] border-[1px] border-solid border-wish-list-color rounded-[10px] ">
          <img src={wishlistImage} alt="wishlist image" loading="lazy" />
        </div>
      </div>
      <div>
        <h2 className="text-sm font-normal tracking-[0.10px] text-black">
          {product.name}
        </h2>
        <div className="flex justify-between items-center mt-[14px]">
          <div className="flex flex-col uppercase">
            <span className="text-[11px] text-card-color">Цена:</span>
            <strong className="text-sm font-bold text-black">
              {product.price} руб.
            </strong>
          </div>
          <div
            onClick={() => handleCart(product)}
            className={`p-[10px] rounded-[10px] ${
              isInCart
                ? "bg-[linear-gradient(#89F09C,_#3CC755)]"
                : "border-[1px] border-solid border-border-color"
            }`}
          >
            <img
              src={isInCart ? checkImage : plusImage}
              alt="plus image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
