import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ openCart,cartItems, changeQuantity, closeCart: toggleCart, removeFromCart }) => {
  return (
    <div className="cart-div">
    <div className="empty-space" onClick={toggleCart}></div>
      <div className="shopping-cart">
        <div className="close-div">
          <button className="close-shopping-cart" onClick={toggleCart}>
            X
          </button>
        </div>
        <div className="cart-items">
          {cartItems.map((item) => {
            return (
              <CartItem
                id={item.id}
                title={item.title}
                smallurl={item.smallurl}
                quantity={item.quantity}
                changeQuantity={changeQuantity}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
