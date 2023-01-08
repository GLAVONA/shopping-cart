import React, { useState } from "react";
import Cart from "./Cart";

const CartItem = ({ id, title, smallURL, quantity,changeQuantity }) => {


  return (
    <div className="shop-item">
      <img src={smallURL} alt="" id={id} title={title} />
      <div className="title-and-quantity">
        <div className="shop-item-title">{title}</div>
        <label htmlFor="quantity">Qty:</label>
        <input type="number" value={quantity} name="quantity" onChange={changeQuantity} id={id}/>
      </div>
    </div>
  );
};

export default CartItem;
