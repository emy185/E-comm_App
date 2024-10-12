import React from "react";
import { Link } from "react-router-dom";
import shoes from "../../imgs/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png";

function Banner() {
  return (
    <div className="bg-[#40BFFF] mt-28 relative">
      <div className="text-white text-start">
        <div className="grid 2xl:pl-32 md:pl-10 sm:pl-2 2xl:py-48 lg:py-36 sm:py-20">
          <h1 className="2xl:text-5xl lg:text-4xl sm:text-2xl leading-normal pb-3">
            Adidas Men Running
            <br />
            Sneakers
          </h1>

          <span className="pb-2 2xl:text-[20.5px] lg:text-lg sm:text-md lg:w-[510px] sm:w-[300px]">
            Performance and design. Taken right to the edge.
          </span>

          <Link to="/hotdeal" className="font-medium">
            SHOP NOW
          </Link>

          <div className="border-b-[3px] w-14"></div>
        </div>

        <div>
          <img
            src={shoes}
            alt="shoes"
            className="w-[50%] absolute lg:top-[-80px] sm:top-[-60px] lg:right-24 sm:right-0 md:right-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
