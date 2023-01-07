import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Navbar from "./components/Navbar";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="shop" element={<Shop />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
