import React from "react";
import { Link } from "react-router-dom";

import logoImage from "../../assets/svg/logo.svg";
import basketImage from "../../assets/svg/basket.svg";
import wishlistImage from "../../assets/svg/wishlist.svg";
import profileImage from "../../assets/svg/profile.svg";
import useNavbar from "../../hooks/useNavbar";

import Cart from "../cart";

const Navbar: React.FC = () => {
  const { cartOpen, cart, handleCartOpen, setCartOpen } = useNavbar();

  return (
    <header className="flex items-center justify-between pb-[44px] border-b-[1px] border-border-color border-sold">
      <div className="flex items-center gap-x-[16px]">
        <Link to="/">
          <img src={logoImage} alt="Kross Store" loading="lazy" />
        </Link>
        <div>
          <h2 className="text-black text-xl font-bold uppercase">
            Kross Store
          </h2>
          <p className="text-second-color text-sm font-normal">
            Магазин лучших кроссовок
          </p>
        </div>
      </div>
      <ul className="flex items-center gap-x-[32px]">
        <li
          onClick={handleCartOpen}
          className="flex items-center gap-x-[10px] cursor-pointer"
        >
          <img src={basketImage} alt="basket image" loading="lazy" />
          <span className="text-second-color">{cart ? cart.length : 0}</span>
        </li>
        <li className="flex items-center gap-x-[10px]">
          <img src={wishlistImage} alt="wishlist image" loading="lazy" />
          <span className="text-second-color">Закладки</span>
        </li>
        <li className="flex items-center gap-x-[10px]">
          <img src={profileImage} alt="profile image" loading="lazy" />
          <span className="text-second-color">Профиль</span>
        </li>
      </ul>
      {cartOpen && <Cart close={() => setCartOpen(false)} />}
    </header>
  );
};

export default Navbar;
