import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function ProductDescScreen() {
  const productid = useParams();
  const [quantity, setquantity] = useState(1);
  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );
  const dispatch = useDispatch();
  const { product, loading, error } = getproductbyidstate;

  function addtocart() {
    dispatch(addToCart(product, quantity));
  }

  useEffect(() => {
    dispatch(getProductById(productid.id));
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="Something went wrong" />
      ) : (
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card p-2 m-3">
              <h1>{product.name}</h1>
              <img src={product.image} className="img-fluid m-3 big-img" />
              <p>{product.description} </p>
            </div>
          </div>
          <div className="col-md-6 text-start">
            <div className="m-2">
              <h1>Price: {product.price}</h1>
              <hr />
              <h1>Select Quantity</h1>
              <select
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />
              <button className="btn btn-dark" onClick={addtocart}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
