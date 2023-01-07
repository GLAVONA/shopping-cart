import React, { useState } from "react";
import plusImage from "../imgs/add.png";

const ShoppingItem = ({ src, id,onClick }) => {
  const [showAddToCart, setShowAddToCard] = useState(false);

  return (
    <div className="shopping-item">
      {showAddToCart ? (
        <div className="add-to-cart" id={id} onMouseEnter={() => setShowAddToCard(true)}
        onMouseLeave={()=>setShowAddToCard(false)} onClick={onClick}>
          <img src={plusImage} alt="" />
        </div>
      ) : null}

      <img
        src={src}
        alt=""
        id={id}
        onMouseEnter={() => setShowAddToCard(true)}
        onMouseLeave={()=>setShowAddToCard(false)}
      />
    </div>
  );
};

export default ShoppingItem;
