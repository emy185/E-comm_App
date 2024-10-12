import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineStar } from "react-icons/md";

function FeaturedProd() {
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

  return (
    <div className="pb-10">
      <h1 className="text-3xl font-semibold pb-20">FEATURED PRODUCTS</h1>

      <div className="flex flex-wrap justify-center items-center gap-x-32">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-3 text-start">
            <img
              src={product.image}
              alt={product.title}
              className="size-24 p-3 bg-[#F6F7F8] rounded-md"
            />

            <div>
              <h4 className="w-40 font-medium text-sm pb-3">{product.title}</h4>

              <div className="flex text-[#FFC600] pb-3">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar className="text-[#C1C8CE]" />
              </div>

              <div className="flex gap-1">
                <p className="text-[#FF4858] font-semibold text-sm">
                  ${product.price}
                </p>

                <p className="text-[#C1C8CE] font-medium text-sm line-through">
                  $50
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProd;
