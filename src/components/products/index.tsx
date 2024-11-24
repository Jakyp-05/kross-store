import React, { useEffect } from "react";
import Card from "../card";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getAllProductsAction } from "../../redux/getProducts/action";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="mt-[40px] flex flex-wrap item-center gap-[36px]">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
