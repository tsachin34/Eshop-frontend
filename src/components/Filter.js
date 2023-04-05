import React, { useState } from "react";
import { filterProducts } from "../actions/productActions";
import { useDispatch } from "react-redux";

export default function Filter() {
  const [searchkey, setsearchkey] = useState("");
  const [sortkey, setsortkey] = useState("popular");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row text-justify-center ms-5">
        <div className="col-md-3 m-2">
          <input
            value={searchkey}
            onChange={(e) => setsearchkey(e.target.value)}
            type="text"
            placeholder="searchproducts"
            className="form-control"
          />
        </div>
        <div className="col-md-2 m-4">
          <select
            className="form-control"
            value={sortkey}
            onChange={(e) => setsortkey(e.target.value)}
          >
            <option value="popular">Popular</option>
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
          </select>
        </div>
        <div className="col-md-2 m-4">
          <select
            className="form-control"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="mobiles">Mobiles</option>
            <option value="games">Games</option>
          </select>
        </div>
        <div className="col-md-2 m-4">
          <button
            className="btn"
            onClick={() => {
              dispatch(filterProducts(searchkey, sortkey, category));
            }}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
