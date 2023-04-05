import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { logoutUser } from "../actions/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import {BiUser} from "react-icons/bi"

export default function Navbar() {
  const cartreducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducer;
  const currentuser = JSON.parse(localStorage.getItem("currentuser"));
  const dispatch = useDispatch();
  const handleClick = (mylink) => () => {
    window.location.href = mylink;
  };

  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg">
    //     <a className="navbar-brand" href="/">
    //       E-shop
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarNavAltMarkup"
    //       aria-controls="navbarNavAltMarkup"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div className="navbar-nav ms-auto">
    //         {currentuser ? (
    //           <DropdownButton
    //             id="dropdown-basic-button"
    //             className="mx-1 mr-2"
    //             title={currentuser.name}
    //           >
    //             <Dropdown.Item href="/profile">Profile</Dropdown.Item>
    //             <Dropdown.Item href="/orders">Orders</Dropdown.Item>
    //             <Dropdown.Item>
    //               <li
    //                 onClick={() => {
    //                   dispatch(logoutUser());
    //                 }}
    //               >
    //                 Logout
    //               </li>
    //             </Dropdown.Item>
    //           </DropdownButton>
    //         ) : (
    //           <a className="nav-item nav-link" href="/login">
    //             Log in
    //           </a>
    //         )}
    //         <a className="nav-item nav-link" href="/mycart">
    //           <i className="fa-solid fa-cart-shopping"></i>
    //           {cartItems.length}
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <div>
      <nav className="navbar navbar-expand-lg mynav py-4 fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
          E-shop
            {/* <img src={logo} className="mylogo" alt="" /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="ti-align-justify navbar-toggle-icon"></span> */}
            <span>
              <VscThreeBars id="bar" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              
              {currentuser ? (
                <>
              <li className="nav-item ml-2">
              <BiUser/>
              </li>
                <DropdownButton
                  id="dropdown-basic-button"
                  className="mx-1 mr-2"
                  title={currentuser.username}
                >
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                  {currentuser.isAdmin && (<Dropdown.Item href="/admin">Admin</Dropdown.Item>)}
                  <Dropdown.Item
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                </DropdownButton>
                </>
               
              ) : (
                <li className="nav-item active">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              )}
              <li className="nav-item"></li>
              <li className="nav-item">
                <i onClick={handleClick("/cart")}>
                  <FaShoppingCart />
                  <span id="cartNumber">{cartItems.length}</span>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
