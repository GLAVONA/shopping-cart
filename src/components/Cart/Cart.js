import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems }) => {
  return <div className="shopping-cart">
    {cartItems.map(item=>{
      <CartItem id={item}/>
    })}
  </div>;
};

export default Cart;
