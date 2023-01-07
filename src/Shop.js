import React, { useEffect, useState } from "react";
import "./styles/shop.css";
import Cart from "./components/Cart/Cart";
import { json } from "react-router-dom";
import ShoppingItem from "./components/ShoppingItem";

const Shop = () => {
  const [cartBarVisible, setCartBarVisible] = useState(false);
  const [trendingGifs, setTrendingGifs] = useState([]);

  const apiKey = "RNyGfTjzayaxSod2C541TnAJFKyajbSH";
  const limit = 20;

  const getClickedId = (e) => {
    console.log(e.target.id);
  };

  useEffect(() => {
    const getGifs = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`,
          { mode: "cors" }
        );
        const json = await response.json();
        setTrendingGifs(json.data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getGifs();
  }, []);
  return (
    <div className="shop">
      <button onClick={console.log(trendingGifs)}>PRINT</button>
      <div className="shopping">
        {trendingGifs.map((gif) => {
          return (
            <ShoppingItem
              src={gif.images.fixed_height.url}
              id={gif.id}
              onClick={getClickedId}
            />
          );
        })}
      </div>
      {cartBarVisible ? <Cart /> : null}
    </div>
  );
};

export default Shop;
