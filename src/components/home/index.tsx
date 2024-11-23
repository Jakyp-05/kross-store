import React from "react";
import Search from "../search";
import Products from "../products";

const Home: React.FC = () => {
  return (
    <main className="pt-[60px]">
      <section className="flex justify-between">
        <h2 className="text-text-color text-3xl font-bold">Все кроссовки</h2>
        <Search />
      </section>
      <Products />
    </main>
  );
};

export default Home;
