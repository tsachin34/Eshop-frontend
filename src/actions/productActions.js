import axios from "axios";

export const getAllProducts = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      console.log(res);
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCTS_FAILED", payload: err });
    });
};

export const getProductById = (productid) => (dispatch) => {
  dispatch({ type: "GET_PRODUCT_REQUEST" });
  axios
    .post("/api/products/getproductbyid", { productid })
    .then((res) => {
      console.log(res);
      dispatch({ type: "GET_PRODUCT_SUCCESS", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCT_FAILED", payload: err });
    });
};

export const filterProducts = (searchkey, sortkey, category) => (dispatch) => {
  var filteredProducts;

  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      filteredProducts = res.data.data;
      if (searchkey) {
        filteredProducts = res.data.data.filter((product) => {
          return product.name.toLowerCase().includes(searchkey);
        });
      }
      if (sortkey !== "popular") {
        if (sortkey === "htl") {
          filteredProducts = res.data.data.sort((a, b) => {
            return -a.price + b.price;
          });
        } else {
          filteredProducts = res.data.data.sort((a, b) => {
            return -b.price + a.price;
          });
        }
        console.log(res);
        dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data.data });
      }
      if (category !== "all") {
        filteredProducts = res.data.data.filter((product) => {
          return product.category.toLowerCase().includes(category);
        });
      }
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: filteredProducts });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCTS_FAILED", payload: err });
    });
};
