import React, { useEffect, useState } from "react";
import "./styles/shop.css";
import Cart from "./components/Cart/Cart";
import { json } from "react-router-dom";
import ShoppingItem from "./components/ShoppingItem";
import Navbar from "./components/Navbar";

const Shop = () => {
  const [cartBarVisible, setCartBarVisible] = useState(false);
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const apiKey = "RNyGfTjzayaxSod2C541TnAJFKyajbSH";
  const limit = 20;

  const addToCart = (e) => {
    console.log(trendingGifs);
    if (cartItems.some((item) => item.id === e.target.id)) {
      const index = cartItems.findIndex((item) => item.id === e.target.id);
      const newArr = [...cartItems];
      const newItem = cartItems[index];
      newItem.quantity++;
      newArr[index] = newItem;
      setCartItems(newArr);
    } else {
      const newArr = [
        ...cartItems,
        {
          id: e.target.id,
          smallurl: e.target.getAttribute("smallurl"),
          title: e.target.getAttribute("title"),
          quantity: 1,
          price: e.target.getAttribute("price"),
        },
      ];
      setCartItems(newArr);
    }
  };

  const removeFromCart = (e) => {
    const index = cartItems.findIndex((item) => item.id === e.target.id);
    const newArr = [...cartItems];
    newArr.splice(index, 1);
    setCartItems(newArr);
  };

  const handleQuantityChange = (e) => {
    const index = cartItems.findIndex((item) => item.id === e.target.id);
    const newArr = [...cartItems];
    const newItem = cartItems[index];
    if (e.target.value < 1) {
      newItem.quantity = 1;
    } else if (e.target.value > 20) {
      newItem.quantity = 20;
    } else {
      newItem.quantity = e.target.value;
    }
    newArr[index] = newItem;
    setCartItems(newArr);
  };

  const closeCart = () => {
    setCartBarVisible(false);
  };

  const openCart = () => {
    setCartBarVisible(true);
  };

  useEffect(() => {
    if (cartItems.length === 1) {
      setCartBarVisible(true);
    }
    if (cartItems.length < 1) {
      setCartBarVisible(false);
    }
  }, [cartItems]);

  useEffect(() => {
    const getGifs = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`,
          { mode: "cors" }
        );
        const json = await response.json();
        await setTrendingGifs(
          json.data.map((gif) => {
            return { ...gif, price: Math.round(Math.random() * 100) / 100 };
          })
        );
      } catch (error) {
        throw new Error(error);
      }
    };
    getGifs();
  }, []);

  return (
    <>
      <Navbar cartItemsLength={cartItems.length || 0} openCart={openCart} />

      <div className="shop">
        <div className="shopping">
          {trendingGifs.map((gif) => {
            return <ShoppingItem obj={gif} onClick={addToCart} />;
          })}
        </div>
        {cartBarVisible ? (
          <Cart
            cartItems={cartItems}
            changeQuantity={handleQuantityChange}
            closeCart={closeCart}
            removeFromCart={removeFromCart}
          />
        ) : null}
      </div>
    </>
  );
};

export default Shop;
