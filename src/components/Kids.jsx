import React from "react";
import { FaRegHeart, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import kids1 from "../assets/kids1.png";
import kids2 from "../assets/kids2.png";
import kids3 from "../assets/kids3.png";
import kids4 from "../assets/kids4.png";
import kids5 from "../assets/kids5.png";
import kids6 from "../assets/kids6.png";
import kids7 from "../assets/kids7.png";
import kids8 from "../assets/kids8.png";

import kids11 from "../assets/kids11.png";
import kids22 from "../assets/kids22.png";
import kids33 from "../assets/kids33.png";
import kids44 from "../assets/kids44.png";
import kids55 from "../assets/kids55.png";
import kids66 from "../assets/kids66.png";
import kids77 from "../assets/kids77.png";
import kids88 from "../assets/kids88.png";

const kidCard = [
  {
    image: kids1,
    hoverImage: kids11,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: kids2,
    hoverImage: kids22,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: kids3,
    hoverImage: kids33,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: kids4,
    hoverImage: kids44,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: kids5,
    hoverImage: kids55,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: kids6,
    hoverImage: kids66,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: kids7,
    hoverImage: kids77,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: kids8,
    hoverImage: kids88,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
];

const Kids = () => {
  return (
    <div className="px-4">
      <div className="text-3xl font-semibold ml-4 mt-20">Kids's Fashion</div>
      <div className="w-30 h-1.5 bg-[#ffe26e] ml-4 mt-2 rounded-full "></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {kidCard.map((e, i) => (
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

export default Kids;
