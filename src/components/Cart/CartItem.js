import React, { useState } from "react";
import Cart from "./Cart";

const CartItem = ({ id, title, smallurl, quantity, changeQuantity, removeFromCart}) => {
  return (
    <div className="shop-item">
      <img src={smallurl} alt="" id={id} title={title} />
      <div className="title-and-quantity">
        <div className="shop-item-title">{title}</div>
        <label htmlFor="quantity">Qty:</label>
        <input
          type="number"
          value={quantity}
          name="quantity"
          onChange={changeQuantity}
          id={id}
        />
      </div>
      <button className="delete-from-cart" onClick={removeFromCart} id={id}>X</button>
    </div>
  );
};

export default CartItem;
