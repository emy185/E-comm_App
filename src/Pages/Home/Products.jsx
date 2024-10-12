import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { MdOutlineStar } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [limit, setLimit] = useState(8);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchAllProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setDisplayedProducts(response.data.slice(0, limit));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCategories();
    fetchAllProducts();
  }, []);

  const fetchProductsByCategory = async (category) => {
    setSelectedCategory(category);
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setProducts(response.data);
      setDisplayedProducts(response.data.slice(0, limit));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchAllProducts = async () => {
    setSelectedCategory("All Products");
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setDisplayedProducts(response.data.slice(0, limit));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const loadMoreProducts = () => {
    const newLimit = limit + 8;
    setLimit(newLimit);
    setDisplayedProducts(products.slice(0, newLimit));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="mt-72 px-32">
      <h1 className="text-3xl font-semibold pb-3">BEST SELLERS</h1>

      <div>
        <button
          className={`m-6 text-lg ${
            selectedCategory === "All Products"
              ? "border-b-[3px] border-[#40BFFF] text-[#40BFFF]"
              : ""
          }`}
          onClick={fetchAllProducts}
        >
          Show All Products
        </button>

        {categories.map((category) => (
          <button
            key={category}
            className={`m-6 text-lg ${
              selectedCategory === category
                ? "border-b-[3px] border-[#40BFFF] text-[#40BFFF]"
                : ""
            }`}
            onClick={() => fetchProductsByCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-x-0 gap-y-6 px-5">
        {displayedProducts.map((product, index) => (
          <div
            key={product.id}
            className="border-[2px] border-[#F6F7F8] rounded-md grid items-center justify-center relative w-[280px] h-[320px]"
          >
            {index === 0 && (
              <div className="absolute top-0 left-0 bg-[#FF4858] text-white px-3 py-1 text-sm z-10">
                HOT
              </div>
            )}

            <div
              className="flex items-center justify-center relative bg-[#F6F7F8] w-[280px] p-6"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="text-center size-40"
              />

              {hoveredProductId === product.id && (
                <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-95 transition-opacity duration-300 ease-in-out mx-4 my-6">
                  <div className="flex gap-2">
                    <button className="border-[#F6F7F8] border-2 text-[#40BFFF] p-2 rounded-full bg-white">
                      <FaRegHeart />
                    </button>

                    <button
                      className="border-[#F6F7F8] border-2 text-[#40BFFF] p-2 rounded-full bg-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      <IoCartOutline />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div>
              <Link
                to={`/product/${product.id}`}
                className="text-[14px] font-semibold text-[#223263] pt-3 px-2 line-clamp-1"
              >
                {product.title}
              </Link>

              <div className="flex text-[#FFC600] pb-3 items-center justify-center pt-4">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar className="text-[#C1C8CE]" />
              </div>

              <div className="flex text-start gap-2 text-[14px] items-center justify-center pb-4">
                <p className="text-[#40BFFF] font-bold">${product.price}</p>

                <p className="text-[#9098B1] line-through">$2000</p>

                <p className="text-[#FF6875] font-semibold">24% Off</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length > displayedProducts.length && (
        <button
          className="border-b-[3px] border-[#40BFFF] text-[#40BFFF] mt-5 font-medium"
          onClick={loadMoreProducts}
        >
          LOAD MORE
        </button>
      )}
    </div>
  );
}

export default Products;
