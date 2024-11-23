import React from "react";

import boxImage from "../../assets/images/box.png";
import cartVector from "../../assets/svg/cart-vector.svg";
import closeImage from "../../assets/svg/close.svg";
import cartRight from "../../assets/svg/cart-right.svg";

type IProps = {
  close: () => void;
};

const Cart: React.FC<IProps> = ({ close }) => {
  return (
    <section className="overflow-hidden fixed top-0 right-0 w-full h-full z-30 bg-black bg-opacity-50">
      <div className="w-[385px] h-full bg-white absolute right-0 p-[30px] z-50 flex flex-col">
        <h2 className="text-black text-base font-bold">Корзина</h2>

        <div className="mt-[30px] h-full flex flex-col justify-between">
          <div className="flex items-center gap-x-[20px] p-[20px] border-[1px] border-solid border-border-color rounded-[20px]">
            <img
              className="w-[70px] h-[70px] object-contain"
              src="https://github.com/Jakyp-05/images-kross/blob/master/image-1.png?raw=true"
              alt=""
              loading="lazy"
            />
            <div className="flex items-end ">
              <div className="flex flex-col w-[150px]">
                <h2 className="text-sm font-normal tracking-[0.10px] text-black mb-[8px]">
                  Мужские Кроссовки Nike Air Max 270
                </h2>
                <strong className="text-sm font-bold text-black">
                  12 999 руб.
                </strong>
              </div>
              <div className="cursor-pointer p-[10px] border-[1px] border-solid border-border-color rounded-[10px]">
                <img src={closeImage} alt="close image" loading="lazy" />
              </div>
            </div>
          </div>
          <div>
            <ul className="flex flex-col w-full mb-[24px]">
              <li className="flex items-end justify-between mb-[19px]">
                Итого:.........................................
                <strong className="text-sm font-bold text-black">
                  12 999 руб.
                </strong>
              </li>
              <li className="flex items-end justify-between">
                Налог 5%: :...................................
                <strong className="text-sm font-bold text-black">
                  1074 руб.
                </strong>
              </li>
            </ul>
            <button
              onClick={close}
              className="w-full flex items-center justify-center gap-2 bg-green p-[21px] px-[30px] rounded-[18px] text-white"
            >
              <span>Оформить заказ</span>
              <img
                src={cartRight}
                alt="cart vector image"
                className="w-5 h-5"
                loading="lazy"
              />
            </button>
          </div>
        </div>

        {/* <div className="flex-grow flex flex-col items-center justify-center text-center">
          <img
            src={boxImage}
            alt="box image"
            className="mx-auto mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-medium text-black mb-2">
            Корзина пустая
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
          </p>
          <button
            onClick={close}
            className="flex items-center justify-center gap-2 bg-green p-[21px] px-[30px] rounded-[18px] text-white"
          >
            <img
              src={cartVector}
              alt="cart vector image"
              className="w-5 h-5"
              loading="lazy"
            />
            <span> Вернуться назад</span>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Cart;
