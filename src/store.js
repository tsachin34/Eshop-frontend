import {
  getAllProductsReducer,
  getProductByIdReducer,
} from "./reducers/productReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { addToCartReducer, cartReducer } from "./reducers/cartReducer";
import {
  registerNewUserReducer,
  loginUserReducer,
} from "./reducers/userReducer";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginUserReducer: loginUserReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentuser = localStorage.getItem("currentuser")
  ? JSON.parse(localStorage.getItem("currentuser"))
  : null;
const initialState = {
  loginUserReducer: { currentuser: currentuser },
  cartReducer: { cartItems: cartItems },
};

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
