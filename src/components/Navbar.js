import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import shoppingCartImage from "../imgs/carts.png";
import Shop from "../Shop";

const Navbar = ({cartItemsLength,openCart}) => {


  return (
    <div className="navbar">
      <div className="navbar-items">
        <h1>
          <NavLink to="/">NFT Shop</NavLink>
        </h1>
        <ul className="navmenu">
          <li>
            <NavLink to="../shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="../about">About</NavLink>
          </li>
          <li>
            <NavLink to="../contacts">Contacts</NavLink>
          </li>
          
          {cartItemsLength!==undefined?
            <li>
            <div className="shopping-cart-open" onClick={openCart}>
              <div className="item-count">{cartItemsLength}</div>
              <img src={shoppingCartImage} alt="" id="shopping-cart-image" />
            </div>
          </li> :null
          }
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;