import React, { useEffect, useState } from "react";
import "./styles/shop.css";
import Cart from "./components/Cart/Cart";
import { json } from "react-router-dom";
import ShoppingItem from "./components/ShoppingItem";

const Shop = () => {
  const [cartBarVisible, setCartBarVisible] = useState(false);
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const apiKey = "RNyGfTjzayaxSod2C541TnAJFKyajbSH";
  const limit = 20;

  const addToCart = (e) => {
    const newArr = [...cartItems, {id:e.target.id,title:e.target.title}];
    setCartItems(newArr);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

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
      <div className="shopping">
        {trendingGifs.map((gif) => {
          return (
            <ShoppingItem
              src={gif.images.fixed_height.url}
              id={gif.id}
              title={gif.title}
              onClick={addToCart}
            />
          );
        })}
      </div>
      {cartBarVisible ? <Cart cartItems={cartItems} /> : null}
    </div>
  );
};

export default Shop;
