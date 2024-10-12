import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { MdOutlineStar } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import axios from "axios";

function Product() {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("productInfo");
  const productId = useParams().id;
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const thumbnails = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];
  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: selectedQuantity,
        })
      );
    }
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mt-36">
      <div className="flex gap-1 bg-[#F6F7F8] items-center justify-center text-[14px] py-4">
        <span className="text-[#33A0FF]">Home</span>

        <span className="text-[8px] text-[#C1C8CE]">/</span>

        <span>Hot Deal</span>

        <span className="text-[8px] text-[#C1C8CE]">/</span>

        <span>{product.title}</span>
      </div>

      <div className="mt-10 px-32">
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-col gap-y-28">
            <img
              src={selectedImage || product.image}
              alt="Product"
              className="w-96 h-64 p-5 bg-[#F6F7F8]"
            />

            <div className="flex space-x-2">
              {thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumb ${index + 1}`}
                  className={`h-20 w-24 border-2 p-2 bg-[#F6F7F8] cursor-pointer ${
                    selectedIndex === index
                      ? "border-[#33A0FF]"
                      : "border-[#E5E8EA]"
                  }`}
                  onClick={() => {
                    setSelectedImage(thumb);
                    setSelectedIndex(index);
                  }}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="border-b-[3px] border-[#F6F7F8] pb-3 text-start w-[580px]">
              <h2 className="text-[18px] font-medium pb-2">{product.title}</h2>

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

                <a href="#" className="text-[#03A9F4] text-[14px]">
                  Submit a review
                </a>
              </div>
            </div>

            <div className="border-b-[3px] border-[#F6F7F8] py-4 text-start">
              <div className="flex text-start gap-x-3 text-[13px] items-center justify-start pb-4">
                <p className="text-[#40BFFF] font-bold text-[20px]">
                  ${product.price}
                </p>

                <p className="text-[#9098B1] line-through">$2000</p>

                <p className="text-[#FF6875] font-bold">24% Off</p>
              </div>

              <div className="flex gap-x-10 pb-2 text-[14px]">
                <span>Availability:</span>

                <span>In Stock</span>
              </div>

              <div className="flex gap-x-10 pb-2 text-[14px]">
                <span>Category:</span>

                <span>{product.category}</span>
              </div>

              <span className="text-[14px]">Free Shipping</span>
            </div>

            <div className="border-b-[3px] border-[#F6F7F8] py-4">
              <div className="flex items-center gap-x-10">
                <label className="">Select Color: </label>

                <div className="flex items-center gap-x-4 mt-2">
                  <button className="size-5 rounded-full bg-[#006CFF] focus:border-[3px] focus:border-[#40BFFF]"></button>
                  <button className="size-5 rounded-full bg-[#FC3E39] focus:border-[3px] focus:border-[#40BFFF]"></button>
                  <button className="size-5 rounded-full bg-black focus:border-[3px] focus:border-[#40BFFF]"></button>
                  <button className="size-5 rounded-full bg-[#FFF600] focus:border-[3px] focus:border-[#40BFFF]"></button>
                </div>
              </div>

              <div className="mt-4 text-start flex items-center gap-x-[6.5rem]">
                <label className="">Size</label>

                <select className="border-[3px] border-[#F6F7F8] pl-3 text-[14px] py-1 pr-12">
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>

            <div className="border-b-[3px] border-[#F6F7F8] py-4 flex justify-between items-center">
              <div className="flex items-center gap-x-4 px-4 py-2 rounded-md bg-[#F6F7F8]">
                <button
                  onClick={() =>
                    setSelectedQuantity((prev) => Math.max(prev - 1, 1))
                  }
                  className="px-2 py-1 text-[#03A9F4] font-semibold"
                >
                  -
                </button>

                <span className="text-[14px]">{selectedQuantity}</span>

                <button
                  onClick={() => setSelectedQuantity((prev) => prev + 1)}
                  className="px-2 py-1 text-[#03A9F4] font-semibold"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-x-2">
                <button
                  onClick={handleAddToCart}
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

            <div className="pt-4 flex gap-2">
              <Link
                to="/"
                className="text-white py-3 px-14 bg-[#385C8E] rounded-md w-fit flex items-center gap-2"
              >
                <FaFacebookF className="size-4" />
                Share on Facebook
              </Link>

              <Link
                to="/"
                className="text-white py-3 px-16 bg-[#03A9F4] rounded-md w-fit flex items-center gap-3"
              >
                <FaTwitter className="size-4" />
                Share on Twitter
              </Link>
            </div>
          </div>

          <div className="w-[230px]">
            <span className="text-[14px] font-light text-[#C1C8CE] flex items-start">
              BEST SELLER
            </span>

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="border-[2px] border-[#F6F7F8] rounded-md items-center justify-center relative w-[230px] h-[300px] mt-6">
                    <div className="flex items-center justify-center relative bg-[#F6F7F8] w-[230px] p-6">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="text-center size-32"
                      />
                    </div>

                    <div>
                      <div className="flex text-[#FFC600] pb-3 items-center justify-center pt-10">
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar className="text-[#C1C8CE]" />
                      </div>

                      <div className="flex text-start gap-2 text-[14px] items-center justify-center pb-4">
                        <p className="text-[#FF6875] font-medium">
                          ${product.price}
                        </p>

                        <p className="text-[#9098B1] line-through">$2000</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="mt-10 xl:ml-36 sm:ml-20 xl:w-[1000px] lg:w-[900px] md:w-[700px] sm:w-[550px] bg-[#F6F7F8]">
        <div className="relative border-b-4 border-[#E5E8EA]">
          <ul className="flex gap-x-16 pl-8 pt-9 items-center font-medium">
            <li
              className={`relative cursor-pointer pb-4 ${
                activeTab === "productInfo"
                  ? "after:absolute after:bottom-[-3px] after:left-0 after:w-[140px] after:h-[4px] after:bg-[#03A9F4] text-[#03A9F4]"
                  : ""
              }`}
              onClick={() => setActiveTab("productInfo")}
            >
              Product Information
            </li>

            <li
              className={`relative cursor-pointer pb-4 flex gap-1 items-center ${
                activeTab === "reviews"
                  ? "after:absolute after:bottom-[-3px] after:left-0 after:w-[55px] after:h-[4px] after:bg-[#03A9F4] text-[#03A9F4]"
                  : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
              <span className="text-[#C1C8CE] text-[14px]">0</span>
            </li>

            <li
              className={`relative cursor-pointer pb-4 ${
                activeTab === "anotherTab"
                  ? "after:absolute after:bottom-[-3px] after:left-0 after:w-[85px] after:h-[4px] after:bg-[#03A9F4] text-[#03A9F4]"
                  : ""
              }`}
              onClick={() => setActiveTab("anotherTab")}
            >
              Another Tab
            </li>
          </ul>
        </div>

        <div className="mt-4">
          {activeTab === "productInfo" && (
            <div className="flex flex-col gap-3 text-start pl-8 pb-12 pt-2 text-[#a5abb0] text-[14px]">
              <p>
                air max shoes are always very comfortable fit, clean, and just
                perfect in every way. just the box was too small and
                <br />
                scrunched the sneakers up a little bit, not sure if the box was
                always this small but the 90s are and will always be one
                <br />
                of my favorites.
              </p>

              <p>
                air max shoes are always very comfortable fit, clean, and just
                perfect in every way. just the box was too small and
                <br />
                scrunched the sneakers up a little bit, not sure if the box was
                always this small but the 90s are and will always be one
                <br />
                of my favorites.
              </p>

              <p>
                air max shoes are always very comfortable fit, clean, and just
                perfect in every way. just the box was too small and
                <br />
                scrunched the sneakers up a little bit, not sure if the box was
                always this small but the 90s are and will always be one
                <br />
                of my favorites.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <p className="text-start pl-8 pb-12 pt-2 text-[#a5abb0] text-[14px]">
                No reviews available yet. Be the first to leave a review!
              </p>
            </div>
          )}

          {activeTab === "anotherTab" && (
            <div>
              <p className="text-start pl-8 pb-12 pt-2 text-[#a5abb0] text-[14px]">
                This is content for another tab.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="pb-20">
        <h1 className="text-3xl font-semibold py-20">RELATED PRODUCTS</h1>

        <div className="flex flex-wrap gap-6 px-32 justify-center items-center">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="border-[2px] border-[#F6F7F8] rounded-md grid items-center justify-center relative w-[280px] h-[320px]"
            >
              {index === 0 && (
                <div className="absolute top-0 left-0 bg-[#FF4858] text-white px-3 py-1 text-sm z-10">
                  HOT
                </div>
              )}

              <div className="flex items-center justify-center relative bg-[#F6F7F8] w-[280px] p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="text-center size-40"
                />
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
      </div>
    </div>
  );
}

export default Product;
