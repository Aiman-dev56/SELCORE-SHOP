import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MobileCart from "./Pages/MobileCart";
import NewIn from "./Pages/NewIn";
import AllProducts from "./Pages/AllProducts";
import CellPhones from "./Pages/CellPhones";
import Sale from "./Pages/Sale";
import BestSellers from "./Pages/BestSallers";
import Accessories from "./Pages/Accessories";
import Computer from "./Pages/Computer";
import Home from "./Components/Home";
import ProductsDetails from "./Pages/ProductDetails";
import Products from "./Components/Products";
import Contact from "./Pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<MobileCart />} />
        <Route path="/newin" element={<NewIn />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/cellphones" element={<CellPhones />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:id" element={<ProductsDetails/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
