import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default function Product({ product }) {
  return (
    <div className="col-md-3 m-5 card p-2 text-start">
      <Link to={`product/${product.id}`}>
        <img src={product.image} className="img-fluid" />
        <h1> {product.name}</h1>
        <div>
          <Rating
            style={{ color: colors.orange }}
            initialRating={product.rating}
            emptySymbol="far fa-star fa-sm"
            fullSymbol="fas fa-star fa-sm"
            readonly={true}
          />
        </div>

        <h1>Price: {product.price}</h1>
      </Link>
    </div>
  );
}
