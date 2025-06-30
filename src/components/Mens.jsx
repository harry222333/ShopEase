import React from "react";
import { FaRegHeart, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import mens1 from "../assets/mens1.png";
import mens2 from "../assets/mens2.png";
import mens3 from "../assets/mens3.png";
import mens4 from "../assets/mens4.png";
import mens5 from "../assets/mens5.png";
import mens6 from "../assets/mens6.png";
import mens7 from "../assets/mens7.png";
import mens8 from "../assets/mens8.png";

import mens11 from "../assets/mens11.png";
import mens22 from "../assets/mens22.png";
import mens33 from "../assets/mens33.png";
import mens44 from "../assets/mens44.png";
import mens66 from "../assets/mens66.png";
import mens77 from "../assets/mens77.png";
import mens88 from "../assets/mens88.png";

const menCard = [
  {
    image: mens1,
    hoverImage: mens11,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: mens2,
    hoverImage: mens22,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: mens3,
    hoverImage: mens33,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: mens4,
    hoverImage: mens44,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: mens5,
    hoverImage: mens5,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: mens6,
    hoverImage: mens66,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: mens7,
    hoverImage: mens77,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: mens8,
    hoverImage: mens88,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
];

const Mens = () => {
  return (
    <div className="px-4">
      <div className="text-3xl font-semibold ml-4 mt-20">Men's Fashion</div>

      
      <div className="w-30 h-1.5 bg-[#ffe26e] ml-4 mt-2 rounded-full "></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {menCard.map((e, i) => (
          <div
            key={i}
            className="group rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <div className="relative w-full h-96">
              <img
                src={e.image}
                alt={`menCard ${i + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />

              {e.hoverImage && (
                <img
                  src={e.hoverImage}
                  alt={`menCard-hover ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                />
              )}
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 text-center">
                {e.tex1}
              </h2>
              <p className="text-sm text-center font-semibold">{e.tex2}</p>
            </div>
            <div className="flex justify-around mb-5">
              <button className="text-xl hover:text-red-600">
                <FaRegHeart />
              </button>
              <span className="font-bold text-xl">{e.price1}</span>
              <button className="text-xl">
                <MdOutlineShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <button className="px-6 py-2 rounded-full border border-black bg-[#ffe26e] text-black font-semibold hover:scale-105 transition duration-300">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Mens;
