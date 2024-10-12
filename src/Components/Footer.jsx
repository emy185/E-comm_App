import React from "react";
import visa from "../imgs/visa.png";
import mastercard from "../imgs/mastercard.png";
import paypal from "../imgs/paypal.png";
import western from "../imgs/westernunion.png";
import logo from "../imgs/FOOTER.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#BCDDFE] text-start">
      <div className="px-32 pt-40 pb-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center md:gap-x-24 sm:gap-10 pb-20">
          <div className="leading-snug">
            <img src={logo} alt="logo" className="pb-3 h-14" />

            <span className="text-[12px]">
              Lorem Ipsum is simply dummy text of the
              <br />
              printing and typesetting industry. Lorem
              <br />
              Ipsum has been the industry's standard
              <br />
              dummy text ever.Since the 1500s, when
              <br />
              an unknown printer.
            </span>
          </div>

          <div className="leading-snug">
            <h3 className="text-[20px] font-medium pb-4">Follow Us</h3>

            <span className="text-[12px]">
              Since the 1500s, when an unknown
              <br />
              printer took a gallery of type and
              <br />
              scrambled.
            </span>

            <div className="flex gap-12 pt-5">
              <FaFacebookF className="text-[#385C8E]" />
              <FaTwitter className="text-[#03A9F4]" />
            </div>
          </div>

          <div className="leading-snug">
            <h3 className="text-[20px] font-medium pb-4">Contact Us</h3>

            <span className="text-[12px]">
              E-Comm, 4578
              <br />
              Marmora Road,
              <br />
              Glasgow D04 89GR
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-56 gap-y-10">
          <div>
            <h3 className="text-[20px] font-medium pb-4">Information</h3>

            <div>
              <ul className="text-[14px]">
                <li>
                  <a href="#">About Us</a>
                </li>

                <li>
                  <a href="#">Information</a>
                </li>

                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-medium pb-4">Service</h3>

            <div>
              <ul className="text-[14px]">
                <li>
                  <a href="#">About Us</a>
                </li>

                <li>
                  <a href="#">Information</a>
                </li>

                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-medium pb-4">My Account</h3>

            <div>
              <ul className="text-[14px]">
                <li>
                  <a href="#">About Us</a>
                </li>

                <li>
                  <a href="#">Information</a>
                </li>

                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-medium pb-4">Our Offers</h3>

            <div>
              <ul className="text-[14px]">
                <li>
                  <a href="#">About Us</a>
                </li>

                <li>
                  <a href="#">Information</a>
                </li>

                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-white mx-28 pt-8 pb-12 flex justify-between flex-wrap gap-y-3 items-center">
        <div>
          <span className="text-[#C1C8CE] text-[14px]">
            &copy; 2018 Ecommerce theme by www.bisenbaev.com
          </span>
        </div>

        <div className="flex gap-3">
          <img src={western} alt="western-union" className="h-8 rounded-sm" />
          <img src={mastercard} alt="mastercard" className="h-8 rounded-sm" />
          <img src={paypal} alt="paypal" className="h-8 rounded-sm" />
          <img src={visa} alt="visa" className="h-8 rounded-sm" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
