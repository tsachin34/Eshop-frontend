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
    <div className="text-start">
      <Link to={`product/${product._id}`}>
        <div className="text-center">
          <img src={product.image} className="img-fluid" />
        </div>
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
