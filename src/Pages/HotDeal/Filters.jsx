import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slider";

function Filters({ setSelectedCategory, setPriceRange, priceRange }) {
  const [categories, setCategories] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const categoryResponse = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const categoriesData = ["All", ...categoryResponse.data];
        setCategories(categoriesData);

        const productResponse = await axios.get(
          "https://fakestoreapi.com/products"
        );
        const productsData = productResponse.data;

        const prices = productsData.map((product) => product.price);
        setMinPrice(Math.min(...prices));
        setMaxPrice(Math.max(...prices));
        setPriceRange([Math.min(...prices), Math.max(...prices)]);

        const counts = categoriesData.reduce((acc, category) => {
          if (category === "All") {
            acc[category] = productsData.length;
          } else {
            acc[category] = productsData.filter(
              (product) => product.category === category
            ).length;
          }
          return acc;
        }, {});

        setCategoryCounts(counts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategoriesAndProducts();
  }, [setPriceRange]);

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="grid gap-y-6">
      <div className="py-5 px-4 bg-[#F6F7F8] text-start rounded-sm">
        <h5 className="font-medium pb-5">Hot Deals</h5>

        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={`flex justify-between gap-20 text-[14px] hover:text-[#40BFFF] pb-4 cursor-pointer ${
                category === "All" ? "" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              <span>{category}</span>

              <span className="text-[#C1C8CE]">
                {categoryCounts[category] || 0}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-5 px-4 bg-[#F6F7F8] text-start rounded-sm">
        <h5 className="font-medium pb-5">PRICES</h5>

        <div className="flex justify-between text-[14px]">
          <span>Ranger:</span>

          <span>
            ${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)}
          </span>
        </div>

        <Slider
          min={minPrice}
          max={maxPrice}
          value={priceRange}
          onChange={handlePriceRangeChange}
          className="mt-4"
          renderTrack={(props, state) => {
            const { index } = state;
            return (
              <div
                {...props}
                className={`h-1 ${
                  index === 1 ? "bg-[#33A0FF]" : "bg-gray-300"
                }`}
              />
            );
          }}
          renderThumb={(props) => (
            <div
              {...props}
              className="size-3 bg-[#33A0FF] border-white border-2 rounded-full absolute top-[-4px] outline-none"
            />
          )}
        />
      </div>

      <div className="py-5 px-4 bg-[#F6F7F8] text-start rounded-sm">
        <h5 className="font-medium pb-5">COLOR</h5>

        <div className="flex items-center gap-x-4 mt-2 ml-2">
          <button className="w-6 h-6 rounded-full bg-[#006CFF] focus:border-[3px] focus:border-[#40BFFF]"></button>

          <button className="w-6 h-6 rounded-full bg-[#FC3E39] focus:border-[3px] focus:border-[#40BFFF]"></button>

          <button className="w-6 h-6 rounded-full bg-black focus:border-[3px] focus:border-[#40BFFF]"></button>

          <button className="w-6 h-6 rounded-full bg-[#FFF600] focus:border-[3px] focus:border-[#40BFFF]"></button>

          <button className="w-6 h-6 rounded-full bg-[#FF00B4] focus:border-[3px] focus:border-[#40BFFF]"></button>
          
          <button className="w-6 h-6 rounded-full bg-[#EFDFDF] focus:border-[3px] focus:border-[#40BFFF]"></button>
        </div>
      </div>

      <div className="py-5 px-4 bg-[#F6F7F8] text-start rounded-sm">
        <h5 className="font-medium pb-5">BRAND</h5>

        <ul>
          <li className="flex justify-between gap-20 text-[14px] hover:text-[#40BFFF] pb-4">
            <span>Nike</span>

            <span className="text-[#C1C8CE]">99</span>
          </li>

          <li className="flex justify-between gap-20 text-[14px] hover:text-[#40BFFF] pb-4">
            <span>Nike</span>

            <span className="text-[#C1C8CE]">99</span>
          </li>

          <li className="flex justify-between gap-36 text-[14px] hover:text-[#40BFFF] pb-4">
            <span>Adidas</span>

            <span className="text-[#C1C8CE]">99</span>
          </li>

          <li className="flex justify-between gap-36 text-[14px] hover:text-[#40BFFF] pb-4">
            <span>Siemens</span>

            <span className="text-[#C1C8CE]">99</span>
          </li>
        </ul>
      </div>

      <div className="py-3 px-4 bg-[#F6F7F8] text-center rounded-sm">
        <button className="font-medium hover:text-[#40BFFF] transition-colors">
          MORE
        </button>
      </div>
    </div>
  );
}

export default Filters;
