import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import shoppingCartImage from "../imgs/carts.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-items">
        <h1>
          <NavLink to="/">NFT Shop</NavLink>
        </h1>
        <ul className="navmenu">
          <li>
            <NavLink to="shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
          <li>
            <div className="shopping-cart-open">
              <div className="item-count">1</div>
              <img src={shoppingCartImage} alt="" id="shopping-cart-image" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
