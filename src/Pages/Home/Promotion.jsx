import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import promotion_bg from "../../imgs/Promotion Image.png";

function Promotion() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=3")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative">
      <div className="mt-32 relative">
        <div>
          <img src={promotion_bg} alt="promotion-bg" className="w-full" />
        </div>

        <div className="text-start lg:text-5xl sm:text-4xl font-bold text-white absolute top-[45%] lg:left-36 sm:left-16">
          <h1>Super Flash Sale</h1>

          <h1>50% Off</h1>
        </div>
      </div>

      <div className="flex justify-center items-start absolute bottom-[-14rem] left-28">
        <div className="py-5 lg:pr-5 lg:pl-10 sm:px-2 bg-[#e3e7ec] rounded-md">
          <div className="flex flex-col items-start justify-center gap-3">
            <Link
              to="/product/1"
              className="md:w-56 sm:w-44 text-[#223263] font-semibold text-md text-start"
            >
              {products[0].title}
            </Link>

            <img
              src={products[0].image}
              alt={products[0].title}
              className="h-40 xl:w-[23rem]"
            />
          </div>

          <div className="flex items-start gap-2">
            <p className="text-[#9098B1] line-through text-[12px]">$500</p>

            <p className="text-[#FF6875] text-[12px] font-semibold">24% Off</p>
          </div>

          <p className="text-end text-[#40BFFF] font-slabo font-semibold text-xl">
            ${products[0].price}
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-3 py-7 lg:pr-5 lg:pl-10 sm:px-2 bg-[#F6F7F8] rounded-md">
          <div className="flex items-center gap-2">
            <Link
              to="/product/2"
              className="md:w-52 sm:w-44 text-[#223263] font-semibold text-md text-start"
            >
              {products[1].title}
            </Link>

            <p className="text-[#40BFFF] font-slabo font-semibold text-xl text-end">
              ${products[1].price}
            </p>
          </div>

          <img
            src={products[1].image}
            alt={products[1].title}
            className="h-40 xl:w-[23rem]"
          />

          <div className="flex items-center justify-center 2xl:pl-32 gap-2">
            <p className="text-[#9098B1] line-through text-[12px]">$500</p>

            <p className="text-[#FF6875] text-[12px] font-semibold">24% Off</p>
          </div>
        </div>

        <div className="py-[1.55rem] lg:pr-5 lg:pl-10 sm:px-2 bg-[#F6F7F8] rounded-md">
          <div className="flex flex-col items-start justify-center gap-3">
            <div className="grid items-start gap-3">
              <Link
                to="/product/3"
                className="md:w-56 sm:w-40 text-[#223263] font-semibold text-md text-start"
              >
                {products[2].title}
              </Link>

              <div className="flex text-start gap-2">
                <p className="text-[#9098B1] line-through text-[12px]">$500</p>

                <p className="text-[#FF6875] text-[12px] font-semibold">
                  24% Off
                </p>
              </div>
            </div>

            <img
              src={products[2].image}
              alt={products[2].title}
              className="h-40 xl:w-[23rem]"
            />
          </div>
          <p className="text-end text-[#40BFFF] font-slabo font-semibold text-xl">
            ${products[2].price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
