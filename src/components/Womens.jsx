import React from "react";
import { FaRegHeart, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import womens1 from "../assets/womens1.png";
import womens2 from "../assets/womens2.png";
import womens3 from "../assets/womens3.png";
import womens4 from "../assets/womens4.png";
import womens5 from "../assets/womens5.png";
import womens6 from "../assets/womens6.png";
import womens7 from "../assets/womens7.png";
import womens8 from "../assets/womens8.png";

import womens11 from "../assets/womens11.png";
import womens22 from "../assets/womens22.png";
import womens33 from "../assets/womens33.png";
import womens44 from "../assets/womens44.png";
import womens55 from "../assets/womens55.png";
import womens66 from "../assets/womens66.png";
import womens77 from "../assets/womens77.png";
import womens88 from "../assets/womens88.png";

const WomenCard = [
  {
    image: womens1,
    hoverImage: womens11,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: womens2,
    hoverImage: womens22,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: womens3,
    hoverImage: womens33,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: womens4,
    hoverImage: womens44,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: womens5,
    hoverImage: womens55,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: womens6,
    hoverImage: womens66,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: womens7,
    hoverImage: womens77,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: womens8,
    hoverImage: womens88,
    tex1: "Shoes",
    tex2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
];

const Womens = () => {
  return (
    <div className="px-4">
      <div className="text-3xl font-semibold ml-4 mt-20">Women's Fashion</div>
      <div className="w-30 h-1.5 bg-[#ffe26e] ml-4 mt-2 rounded-full "></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {WomenCard.map((e, i) => (
          <div
            key={i}
            className="group rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <div className="relative w-full h-96">
              <img
                src={e.image}
                alt={`WomenCard ${i + 1}`}
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

export default Womens;
