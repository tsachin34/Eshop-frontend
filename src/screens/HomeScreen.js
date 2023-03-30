import React from "react";
import Product from "../components/Product";
import Products from "../Product";

export default function HomeScreen() {
  return (
    <div>
      <div className="row justify-content-center">
        {Products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}
