import React from "react";
import Search from "../Components/Search";
import call from "../imgs/call 1.png";

function Contact() {
  return (
    <div className="mt-36 mb-10">
      <div className="flex gap-1 bg-[#F6F7F8] items-center justify-center text-[14px] py-4">
        <span className="text-[#33A0FF]">Home</span>

        <span className="text-[8px] text-[#C1C8CE]">/</span>

        <span>Contact Us</span>
      </div>

      <div className="relative flex lg:flex-row sm:flex-col justify-center items-center px-32 pt-32 pb-10">
        <div className="bg-[#40BFFF] lg:w-1/2 sm:w-full h-[700px] relative">
          <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#40BFFF] w-24 h-24 rounded-full"></div>

          <img
            src={call}
            alt="call"
            className="absolute top-10 xl:right-[6.5rem] lg:right-[5rem]"
          />

          <div className="text-start absolute xl:top-28 2xl:left-[21rem] md:top-24 lg:left-[19rem] md:left-[24rem] sm:top-[28rem] sm:left-36">
            <h1 className="text-white text-3xl w-24 xl:mb-40 lg:mb-28 sm:mb-5 md:mb-10">
              get in touch
            </h1>

            <p className="text-white mt-2 font-light mb-5 text-[14px]">
              contact@e-comm.ng
            </p>

            <p className="text-white font-slabo text-[16px] mb-5">
              +234 4556 6665 34
            </p>

            <p className="text-white font-light text-[14px]">
              20 Prince Hakreem Lekki,
              <br />
              Phase 1, Lagos.
            </p>
          </div>
        </div>

        <div className="bg-white lg:w-1/2 sm:w-full py-10 pr-10 pl-14 flex flex-col justify-center shadow-xl h-[700px]">
          <form className="space-y-8">
            <div>
              <label className="text-sm text-start block mb-2">Fullname</label>

              <input
                type="text"
                placeholder="James Doe"
                className="w-full border-[1.6px] border-[#969393] px-4 pt-6 pb-4 focus:border-[#40BFFF] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-start mb-2">Email</label>

              <input
                type="email"
                placeholder="jamesdoe@gmail.com"
                className="w-full border-[1.6px] border-[#969393] px-4 pt-6 pb-4 focus:border-[#40BFFF] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-start mb-2">Message</label>

              <input
                type="text"
                placeholder="Type your message"
                className="w-full border-[1.6px] border-[#969393] px-4 pt-9 pb-48 focus:border-[#40BFFF] outline-none"
              />
            </div>
          </form>
        </div>
      </div>

      <Search />
    </div>
  );
}

export default Contact;
