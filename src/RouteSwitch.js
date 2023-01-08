import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Navbar from "./components/Navbar";
import About from "./About";
import Contacts from "./Contacts";
import { useState } from "react";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
