import React, { useEffect, useState } from "react";
import "./styles/shop.css";
import Cart from "./components/Cart/Cart";
import { json } from "react-router-dom";
import ShoppingItem from "./components/ShoppingItem";

const Shop = () => {
  const [cartBarVisible, setCartBarVisible] = useState(true);
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const apiKey = "RNyGfTjzayaxSod2C541TnAJFKyajbSH";
  const limit = 20;

  const addToCart = (e) => {
    console.log(e.target.getAttribute("smallURL"))
    const newArr = [...cartItems, {id:e.target.id,smallURL:e.target.getAttribute("smallURL"),title:e.target.getAttribute("title")}];
    setCartItems(newArr);
    console.log(trendingGifs)
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
            obj = {gif}
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
