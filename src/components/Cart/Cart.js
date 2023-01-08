import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, changeQuantity, closeCart, removeFromCart }) => {
  console.log(cartItems);
  return (
    <div className="shopping-cart">
      <button className="close-shopping-cart" onClick={closeCart}>
        X
      </button>

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
  );
};

export default Cart;
