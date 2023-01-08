import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, changeQuantity, closeCart, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <div className="close-div">
        <button className="close-shopping-cart" onClick={closeCart}>
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
  );
};

export default Cart;
