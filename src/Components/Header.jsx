import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdArrowDropDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { FaBars } from "react-icons/fa6";
import logo from "../imgs/FOOTER.png";
import Dropdown from "./Dropdown";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  };

  const handleMouseEnterDropdown = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleMouseEnterMain = () => {
    setIsOpen(true);
  };

  const handleMouseLeaveMain = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1030) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed z-20 top-0 w-full bg-white">
      {!isScrolled && (
        <div className="py-4 flex flex-wrap justify-between px-32 border-b border-gray-100 relative">
          <div className="flex gap-2">
            <div className="flex items-center">
              <select
                name="language"
                className="border-none text-wrap w-fit outline-none appearance-none"
              >
                <option value="en">EN</option>
                <option value="fn">FN</option>
                <option value="ar">AR</option>
              </select>
              <MdArrowDropDown />
            </div>

            <div className="flex items-center">
              <select name="payment" className="outline-none appearance-none">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbr">GBR</option>
              </select>
              <MdArrowDropDown />
            </div>
          </div>

          <div>
            <ul className="flex gap-6 items-center text-[14px]">
              <li className="flex items-center gap-1">
                <FaRegUser />
                <Link to="/">My profile</Link>
              </li>

              <li className="relative">
                <Link to="/cart">
                  <FiShoppingCart className="size-4" />
                </Link>
                {totalItems > 0 && (
                  <span className="absolute top-[-12px] text-white bg-sky-300 p-1 text-[8px] rounded-full">
                    {totalItems}
                  </span>
                )}
              </li>

              <li>
                <Link to="/">Items</Link>
              </li>

              <li className="flex items-center">
                <input
                  type="text"
                  name="search"
                  placeholder="$0.00"
                  className="w-12 outline-none"
                />
                <HiOutlineSearch className="size-5" />
              </li>
            </ul>
          </div>
        </div>
      )}

      <nav
        className={`px-32 py-5 flex justify-between items-center ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" className="h-10" />
        </div>

        {windowWidth >= 1030 ? (
          <div>
            <ul className="flex gap-20 text-[18px] font-medium">
              <li
                onMouseEnter={handleMouseEnterMain}
                onMouseLeave={handleMouseLeaveMain}
              >
                <Link
                  to="/"
                  className={isContactPage ? "text-black" : "text-[#40BFFF]"}
                >
                  HOME
                </Link>
                {isOpen && <Dropdown />}
              </li>

              <li>
                <Link to="/hotdeal">BAG</Link>
              </li>

              <li>
                <Link to="/hotdeal">SNEAKERS</Link>
              </li>

              <li>
                <Link to="/hotdeal">BELT</Link>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-[#40BFFF]" : "text-black"
                  }
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <button className="p-3 border-2" onClick={toggleMenu}>
              <FaBars />
            </button>

            {isMenuOpen && (
              <div className="fixed left-0 top-0 w-64 h-full bg-white shadow-lg p-5 z-30 text-start overflow-y-auto">
                <button onClick={toggleMenu} className="text-right w-full">
                  X
                </button>

                <div className="flex flex-col gap-4 mt-5">
                  <Link
                    to="/"
                    onMouseEnter={handleMouseEnterDropdown}
                    onMouseLeave={handleMouseLeaveDropdown}
                    className={isContactPage ? "text-black" : "text-[#40BFFF]"}
                  >
                    HOME
                  </Link>

                  {isDropdownOpen && (
                    <div className="ml-2 flex flex-col text-[14px]">
                      <div className="block py-1">Category</div>
                      <div>
                        <ul className="text-[12px]">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Corporate Shoes
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Sneakers
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Sandals
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Sport Shoes
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Trainers
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="block py-1">Category</div>
                      <div>
                        <ul className="text-[12px]">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Hot Deals
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Sunglasses
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Belts
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Handbags
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Sneakers
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="block py-1">Category</div>
                      <div>
                        <ul className="text-[12px]">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Corporate Shoes
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Sneakers
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Sandals
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Sport Shoes
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Trainers
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  <Link to="/hotdeal">BAG</Link>

                  <Link to="/hotdeal">SNEAKERS</Link>

                  <Link to="/hotdeal">BELT</Link>

                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-[#40BFFF]" : "text-black"
                    }
                  >
                    CONTACT
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
