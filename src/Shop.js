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
    if(cartItems.some(item=>item.id===e.target.id))
    {
      const index = cartItems.findIndex(item=>item.id===e.target.id);
      const newArr =[...cartItems]
      const newItem = cartItems[index];
      newItem.quantity++;
      newArr[index]=newItem;
      setCartItems(newArr);
    }
    else{

      const newArr = [...cartItems, {id:e.target.id,smallURL:e.target.getAttribute("smallURL"),title:e.target.getAttribute("title"), quantity:1}];
      setCartItems(newArr);
    }
;
  };

  const handleQuantityChange=(e)=>{
    const index = cartItems.findIndex(item=>item.id===e.target.id);
      const newArr =[...cartItems]
      const newItem = cartItems[index];
      newItem.quantity = e.target.value;
      newArr[index]=newItem;
      setCartItems(newArr);    
  }

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
      {cartBarVisible ? <Cart cartItems={cartItems} changeQuantity={handleQuantityChange}/> : null}
    </div>
  );
};

export default Shop;
