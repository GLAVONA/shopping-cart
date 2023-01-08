import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems }) => {
  console.log(cartItems)
  return <div className="shopping-cart">
    {cartItems.map(item=>{
      <CartItem id={item.id} title={item.title} smallURL={item.smallURL} />
    })}
  </div>;
};

export default Cart;
