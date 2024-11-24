import React from "react";

import useProduct from "../../hooks/useProduct";
import Card from "../card";

const Products: React.FC = () => {
  const { filteredProducts, status, error } = useProduct();

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="mt-[40px] flex flex-wrap item-center gap-[36px]">
      {filteredProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
