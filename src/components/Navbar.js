import React from "react";
import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-items">
        <h1>
          <NavLink to="/">My shopping cart App</NavLink>
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
