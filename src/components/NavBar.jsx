import React from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-white py-4 px-6 shadow-md">
      <div className=" flex justify-between text-center mb-4">
        <h1 className="text-black text-4xl font-bold">SHEMA</h1>

        <div className="flex justify-center">
          <div
            className="flex border-2  rounded-[8px] overflow-hidden bg-white"
            style={{ borderColor: "#ffe26e" }}
          >
            <input
              type="text"
              placeholder="Search for products"
              className="px-4 py-2 w-xl text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <button
              className="px-4  text-white flex items-center justify-center"
              style={{ backgroundColor: "#ffe26e" }}
            >
              <IoMdSearch size={20} className="text-black" />
            </button>
          </div>
        </div>
        <div className="flex gap-5">
          <h1
            className="border-2 w-10 h-10 rounded-[8px] flex items-center justify-center "
            style={{ borderColor: "#ffe26e" }}
          >
            <MdOutlineSupervisorAccount className="w-6 h-6 " />
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

      <ul className="flex justify-center items-center gap-20 text-black font-semibold ">
        <li>
          <Link to="/" className="hover:text-gray-600 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            className="hover:text-gray-600 transition duration-300"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/mens"
            className="hover:text-gray-600 transition duration-300"
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            to="/womens"
            className="hover:text-gray-600 transition duration-300"
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            to="/kids"
            className="hover:text-gray-600 transition duration-300"
          >
            Kids
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
