import React from "react";

import plusImage from "../../assets/svg/plus.svg";
import wishlistImage from "../../assets/svg/wishlist.svg";
import { Products } from "../../api/types/productsTypes";

type IProps = {
  product: Products;
};

const Card: React.FC<IProps> = ({ product }) => {
  return (
    <div className="w-[220px] p-[25px] border-2 border-sold border-border-color rounded-[40px] flex flex-col justify-between">
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
          <div className="p-[10px] border-[1px] border-solid border-border-color rounded-[10px]">
            <img src={plusImage} alt="plus image" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
