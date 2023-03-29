import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
       
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link" href="#">
              Log in
            </a>
            <a className="nav-item nav-link disabled" href="#">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
