import React from "react";
import Cart from "./Cart";

const CartItem = ({id, title, smallURL}) =>{
    return(
        <div className="shop-item">
        <img src={smallURL} alt="" id={id} title={title}/>
            
        </div>
    )
}

export default CartItem;