import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { BsList } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import shoes from "../../imgs/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png";

function ProductList({ products }) {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [sortOption, setSortOption] = useState("name");
  const [isGridView, setIsGridView] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "name") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "price") {
      return b.price - a.price;
    } else if (sortOption === "rating") {
      return b.rating.rate - a.rating.rate;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="grid gap-y-6">
      <div className="bg-[#40BFFF] relative">
        <div className="text-white text-start">
          <div className="grid 2xl:w-[1000px] xl:w-[800px] pl-24 pt-16 pb-14">
            <h1 className="text-4xl leading-normal pb-3">
              Adidas Men Running
              <br />
              Sneakers
            </h1>

            <span className="pb-9 text-[17px] font-light lg:w-[510px] sm:w-[300px]">
              Performance and design. Taken right to the edge.
            </span>

            <Link to="/" className="font-medium text-[14px]">
              SHOP NOW
            </Link>

            <div className="border-b-[3px] w-14"></div>
          </div>

          <div>
            <img
              src={shoes}
              alt="shoes"
              className="w-[40%] absolute top-[-30px] 2xl:right-24 xl:right-0 xl:visible sm:invisible"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center bg-[#FAFAFB] px-8">
        <div className="flex flex-wrap items-center gap-x-10">
          <span>{sortedProducts.length} Items</span>

          <div className="flex items-center">
            <label className="mr-3">Sort By</label>

            <div className="flex items-center gap-x-8 px-4 py-1 rounded-sm border-2 border-[#F1F1F1]">
              <select
                className="appearance-none outline-none text-[14px]"
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>

              <MdArrowDropDown />
            </div>
          </div>

          <div className="flex items-center">
            <label className="mr-2">Show</label>

            <div className="flex items-center gap-x-8 px-4 py-1 rounded-sm border-2 border-[#F1F1F1]">
              <select
                className="appearance-none outline-none text-[14px]"
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
              </select>

              <MdArrowDropDown />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <CgMenuGridR
            className={`${
              isGridView
                ? "text-[#40BFFF] bg-[#F1F3F4] py-1 px-4 size-16"
                : "text-[#C1C8CE] size-8"
            }`}
            onClick={() => setIsGridView(true)}
          />

          <BsList
            className={`${
              !isGridView
                ? "text-[#40BFFF] bg-[#F1F3F4] py-1 px-4 size-16"
                : "text-[#C1C8CE] size-8"
            }`}
            onClick={() => setIsGridView(false)}
          />
        </div>
      </div>

      <div
        className={`${
          isGridView
            ? "grid 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-x-0 gap-y-4"
            : "flex flex-col gap-y-6"
        }`}
      >
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className={` border-[#F6F7F8] ${
              isGridView
                ? "grid items-center justify-center relative w-[280px] h-[320px] border-2 rounded-md"
                : "flex items-start flex-wrap gap-4 w-full px-4 pb-8  border-b-2"
            }`}
          >
            <div
              className={`flex items-center justify-center relative bg-[#F6F7F8] w-[280px] p-6 ${
                isGridView ? "" : ""
              }`}
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <div
                className={`bg-[#FF4858] text-white px-3 py-1 text-sm absolute ${
                  isGridView ? "top-0 left-0 z-10" : "top-2 left-5 rounded-md"
                }`}
              >
                HOT
              </div>

              <img
                src={product.image}
                alt={product.title}
                className={`text-center size-40 ${isGridView ? "" : ""}`}
              />

              {isGridView && hoveredProductId === product.id && (
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

            {isGridView ? (
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
                  <p className="text-[#40BFFF] font-semibold">
                    ${product.price}
                  </p>

                  <p className="text-[#C1C8CE] line-through">$2000</p>
                </div>
              </div>
            ) : (
              <div>
                <div className="border-b-[3px] border-[#F6F7F8] text-start lg:w-[580px] sm:w-[300px]">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-[18px] font-medium"
                  >
                    {product.title}
                  </Link>

                  <div className="flex items-center gap-4">
                    <div className="flex text-[#FFC600] pb-3 items-center justify-center pt-4">
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar className="text-[#C1C8CE]" />
                    </div>

                    <span className="text-[14px] text-[#C1C8CE] font-light">
                      0 reviews
                    </span>

                    <a className="text-[#03A9F4] text-[12px]">
                      Submit a review
                    </a>
                  </div>
                </div>

                <div className="flex text-start gap-x-3 text-[13px] items-center justify-start py-2">
                  <p className="text-[#40BFFF] font-bold text-[20px]">
                    ${product.price}
                  </p>

                  <p className="text-[#9098B1] line-through">$2000</p>

                  <p className="text-[#FF6875] font-bold">24% Off</p>
                </div>

                <div>
                  <p className="text-start text-[14px] line-clamp-3 lg:w-[600px] sm:w-[300px]">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center gap-x-3 mt-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex gap-x-2 items-center justify-center text-[#33A0FF] text-[14px] bg-sky-100 py-3 px-5 rounded-md"
                  >
                    <IoCartOutline className="font-bold size-5" />
                    Add To Cart
                  </button>

                  <button className="text-[#33A0FF] bg-sky-100 p-3 rounded-md">
                    <FaRegHeart className="font-bold size-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-x-6 mt-4 bg-[#FAFAFB]">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`${
              currentPage === index + 1
                ? "text-white bg-[#40BFFF] py-4 px-6 my-0"
                : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div
        className={`${!isGridView ? "border-b-2 border-[#FAFAFB] mx-8" : ""}`}
      ></div>
    </div>
  );
}

export default ProductList;
