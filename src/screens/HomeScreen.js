import React from "react";
import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products/getallproducts")
      .then((res) => {
        console.log(res);
        setproducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {products.length &&
          products.map((product) => {
            return (
              <div className="col-md-3 m-5 card p-2 ">
                <Product product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
