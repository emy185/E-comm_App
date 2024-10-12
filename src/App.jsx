import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import HotDeal from "./Pages/HotDeal/HotDeal";

function App() {
  return (
    <div className="App font-poppins">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />
        
        <Route path="/hotdeal" element={<HotDeal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
