import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import ProductList from "./ProductList";
import axios from "axios";

function HotDeal() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setAllProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = allProducts.filter((product) => {
    const isCategoryMatch = selectedCategory
      ? product.category === selectedCategory
      : true;
    const isPriceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return isCategoryMatch && isPriceMatch;
  });

  return (
    <div className="mt-36 mb-32">
      <div className="flex gap-1 bg-[#F6F7F8] items-center justify-center text-[14px] py-4">
        <span className="text-[#33A0FF]">Home</span>

        <span className="text-[8px] text-[#C1C8CE]">/</span>

        <span>Hot Deal</span>
      </div>

      <div className="flex gap-x-6 lg:px-32 md:px-5 sm:px-0 pt-12">
        <div>
          <Filters
            setSelectedCategory={setSelectedCategory}
            setPriceRange={setPriceRange}
            priceRange={priceRange}
          />
        </div>

        <div>
          <ProductList
            products={filteredProducts.length ? filteredProducts : allProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default HotDeal;
