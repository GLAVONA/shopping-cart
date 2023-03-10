import React, { useState } from "react";
import Cart from "./Cart";

const CartItem = ({ price, id, title, smallurl, quantity, changeQuantity, removeFromCart}) => {
  return (
    <div className="cart-item">
      <img src={smallurl} alt="" id={id} title={title} />
      <div className="title-and-quantity">
        <div className="cart-item-title">{title}</div>
        <div className="cart-item-price">Price: {price}</div>
        <div className="qty">
            <label htmlFor="quantity">Qty:</label>
            <input
            className="qty-input"
              type="number"
              value={quantity}
              name="quantity"
              onChange={changeQuantity}
              id={id}
              min={1}
            />
        </div>
      </div>
      <button className="delete-from-cart" onClick={removeFromCart} id={id}>X</button>
    </div>
  );
};

export default CartItem;
