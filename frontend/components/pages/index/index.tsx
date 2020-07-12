import React from "react";
import Product from "@/types/product";

const IndexPage = ({ products }) => {
  return (
    <div>
      {products.map((product: Product) => {
        return (
          <div key={product.id}>
            {product.name}
            <img
              src={`${process.env.API_URL}${product.image.url}`}
              alt={product.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default IndexPage;
