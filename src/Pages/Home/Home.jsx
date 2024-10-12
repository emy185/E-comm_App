import React from "react";
import Promotion from "./Promotion";
import Search from "../../Components/Search";
import News from "./News";
import Services from "./Services";
import Banner from "./Banner";
import FeaturedProd from "./FeaturedProd";
import Products from "./Products";

function Home() {
  return (
    <div>
      <Promotion />

      <Products />

      <Banner />

      <Services />

      <News />

      <FeaturedProd />
      
      <Search />
    </div>
  );
}

export default Home;
