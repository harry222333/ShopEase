import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RiMenuUnfold4Line } from "react-icons/ri";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="bg-white py-4 px-6 shadow-md relative">
      <div className="flex justify-between items-center">
        <h1 className="text-black text-4xl font-bold">SHEMA</h1>

        <div className="hidden md:flex lg:hidden items-center gap-5 w-full">
          <div
            className="flex border-2 md:w-96 md:ml-28 rounded-[8px] overflow-hidden bg-white w-full"
            style={{ borderColor: "#ffe26e" }}
          >
            <input
              type="text"
              placeholder="Search for products"
              className="px-4 py-2 flex-grow text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <button
              className="px-4 text-white flex items-center justify-center"
              style={{ backgroundColor: "#ffe26e" }}
            >
              <IoMdSearch size={20} className="text-black" />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <div
            className="flex border-2 rounded-[8px] overflow-hidden bg-white lg:mr-20"
            style={{ borderColor: "#ffe26e" }}
          >
            <input
              type="text"
              placeholder="Search for products"
              className="px-4 py-2 w-xl text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <button
              className="px-4 text-white flex items-center justify-center"
              style={{ backgroundColor: "#ffe26e" }}
            >
              <IoMdSearch size={20} className="text-black" />
            </button>
          </div>

          <div className="flex gap-5">
            <h1
              className="border-2 w-10 h-10 rounded-[8px] flex items-center justify-center"
              style={{ borderColor: "#ffe26e" }}
            >
              <MdOutlineSupervisorAccount className="w-6 h-6" />
            </h1>
            <h1
              className="border-2 w-10 h-10 rounded-[8px] flex items-center justify-center"
              style={{ borderColor: "#ffe26e" }}
            >
              <FaRegHeart className="w-6 h-6" />
            </h1>
            <h1
              className="border-2 w-10 h-10 rounded-[8px] flex items-center justify-center"
              style={{ borderColor: "#ffe26e" }}
            >
              <FaShoppingCart className="w-6 h-6" />
            </h1>
          </div>
        </div>

        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiMenuUnfold4Line /> : <FiMenu />}
        </button>
      </div>

      <ul className="hidden lg:flex justify-center items-center gap-20 text-black font-semibold mt-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/mens">Men</Link>
        </li>
        <li>
          <Link to="/womens">Women</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50  p-6 md:w-1/2">
          <ul className=" flex flex-col items-start gap-6 mt-12 text-black font-semibold md:text-2xl">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={() => setIsOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/mens" onClick={() => setIsOpen(false)}>
                Men
              </Link>
            </li>
            <li>
              <Link to="/womens" onClick={() => setIsOpen(false)}>
                Women
              </Link>
            </li>
            <li>
              <Link to="/kids" onClick={() => setIsOpen(false)}>
                Kids
              </Link>
            </li>
          </ul>

          <div
            className="flex border-2 mt-6 rounded-[8px] overflow-hidden bg-white w-full"
            style={{ borderColor: "#ffe26e" }}
          >
            <input
              type="text"
              placeholder="Search for products"
              className="px-4 py-2 w-full text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <button
              className="px-4 text-white flex items-center justify-center"
              style={{ backgroundColor: "#ffe26e" }}
            >
              <IoMdSearch size={20} className="text-black" />
            </button>
          </div>

          <div className="flex justify-start gap-6 mt-6">
            <h1
              className="border-2 w-10 h-10 rounded-[8px] flex items-center justify-center"
              style={{ borderColor: "#ffe26e" }}
            >
              <MdOutlineSupervisorAccount className="w-6 h-6" />
            </h1>
            <h1
              className="border-2 w-10 h-10 rounded-[8px] flex items-center justify-center"
              style={{ borderColor: "#ffe26e" }}
            >
              <FaRegHeart className="w-6 h-6" />
            </h1>
            <h1
              className="border-2 w-10 h-10 rounded-[8px] flex items-center justify-center"
              style={{ borderColor: "#ffe26e" }}
            >
              <FaShoppingCart className="w-6 h-6" />
            </h1>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
