import React from "react";

const ShoppingItem = ({ src, id}) => {
  return (
    <div className="shopping-item">
      <img src={src} alt="" id={id} />
    </div>
  );
};

export default ShoppingItem;
