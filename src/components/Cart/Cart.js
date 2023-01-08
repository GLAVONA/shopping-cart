import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({
  cartItems,
  changeQuantity,
  closeCart: toggleCart,
  removeFromCart,
}) => {
  let total = 0;

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
            total += item.quantity * item.price;
            return (
              <CartItem
                id={item.id}
                title={item.title}
                smallurl={item.smallurl}
                quantity={item.quantity}
                changeQuantity={changeQuantity}
                removeFromCart={removeFromCart}
                price={item.price}
              />
            );
          })}
        </div>
        <div className="cart-total">Total ETH: {total}</div>
      </div>
    </div>
  );
};

export default Cart;
