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
            <img src={shoppingCartImage} alt="" id="shopping-cart-image" />
            <div className="item-count"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
