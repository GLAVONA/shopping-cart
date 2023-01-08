import React, { useState } from "react";
import plusImage from "../imgs/add.png";

const ShoppingItem = ({
  obj: { id, title },
  obj: {
    images: {
      fixed_height: { url },
    },
  },
  obj: {
    images: {
      fixed_height_small_still: { url: url2 },
    },
  },
  onClick,
}) => {
  const attributes = { id: id, smallurl: url2, title: title };

  const [showAddToCart, setShowAddToCard] = useState(false);

  return (
    <div className="shopping-item">
      {showAddToCart ? (
        <div
          className="add-to-cart"
          onMouseEnter={() => setShowAddToCard(true)}
          onMouseLeave={() => setShowAddToCard(false)}
          onClick={onClick}
          {...attributes}
        >
          <img src={plusImage} alt="" onClick={onClick} {...attributes} />
        </div>
      ) : null}

      <img
        src={url}
        alt=""
        onMouseEnter={() => setShowAddToCard(true)}
        onMouseLeave={() => setShowAddToCard(false)}
      />
    </div>
  );
};

export default ShoppingItem;
