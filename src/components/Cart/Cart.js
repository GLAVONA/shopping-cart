import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, changeQuantity }) => {
  console.log(cartItems)
  return <div className="shopping-cart">
    <button className="close-shopping-cart">X</button>

    {cartItems.map(item=>{return(
      <CartItem id={item.id} title={item.title} smallURL={item.smallURL} quantity={item.quantity} changeQuantity={changeQuantity}/>
    )
    })}
  </div>;
};

export default Cart;
