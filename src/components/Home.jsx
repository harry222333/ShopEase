import React from "react";

import { FaRegHeart, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import myImage from "../assets/1.png";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

import item11 from "../assets/item11.png";
import item2 from "../assets/item2.png";
import item22 from "../assets/item22.png";
import item33 from "../assets/item33.png";
import item44 from "../assets/item44.png";
import item55 from "../assets/item55.png";
import item66 from "../assets/item66.png";
import item77 from "../assets/item77.png";

import item1 from "../assets/item1.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/item6.png";
import item7 from "../assets/item7.png";
import item8 from "../assets/item8.png";

const cards = [
  { image: feature1, buttonText: "Shop Now" },
  { image: feature2, buttonText: "Shop Now" },
  { image: feature3, buttonText: "Shop Now" },
];

const items = [
  {
    image: item11,
    hoverImage: item1,
    text1: "Shoes",
    text2: "khsf slhfkhs lkshf",
    price1: "100$",
  },
  {
    image: item2,
    hoverImage: item2,
    text1: "Pent",
    text2: "Good pent for mens wear",
    price1: "200$",
  },
  {
    image: item22,
    hoverImage: item3,
    text1: "Shoes",
    text2: "Ladies heels for increse height",
    price1: "300$",
  },
  {
    image: item33,
    hoverImage: item4,
    text1: "Shirt",
    text2: "Winters shirt by wools",
    price1: "400$",
  },
  {
    image: item44,
    hoverImage: item5,
    text1: "Trozer",
    text2: "Black winters stylish wear",
    price1: "500$",
  },
  {
    image: item55,
    hoverImage: item6,
    text1: "Loofers",
    text2: "Red Attarctive Mens wear",
    price1: "600$",
  },
  {
    image: item66,
    hoverImage: item7,
    text1: "Long",
    text2: "Ladies Wear to look charm",
    price1: "700$",
  },
  {
    image: item77,
    hoverImage: item8,
    text1: "Shoes",
    text2: "Imported shoes by leather",
    price1: "800$",
  },
];

const Home = () => {
  return (
    <div>
      <div
        className="flex justify-around "
        style={{ backgroundColor: "#ffe26e" }}
      >
        <div className="p-10 mt-25 space-y-5">
          <div className="font-medium text-xl">
            <h1>UP TO 15% DISCOUNT</h1>
          </div>
          <div className="font-bold text-6xl leading-tight text-gray-900">
            <h1>
              Checkout The <br /> Best Fashion <br /> Style
            </h1>
          </div>

          <div className="font-bold">
            <button className="border w-50 h-13 rounded-[20px] hover:bg-black hover:text-white  transition-all duration-200">
              SHOP NOW
            </button>
          </div>
        </div>

        <div>
          <img src={myImage} alt="My Image" />
        </div>
      </div>

      <div className="mt-30">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Featured Categories</h1>
          <div className="w-50 h-1.5 bg-[#ffe26e] mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="flex justify-center flex-wrap gap-6 mt-30">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative w-80 h-full rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={card.image}
                alt={`Feature ${idx + 1}`}
                className="w-full h-full object-cover"
              />

              <button
                className="absolute bottom-4 right-4 px-4 py-2 rounded-[50px] font-bold 
             bg-[#ffe26e] text-black transition-all duration-200 
             hover:bg-transparent hover:text-[#ffe26e] 
             border border-transparent hover:border-[#ffe26e] "
              >
                SHOP NOW
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <div className="mb-20 flex ">
          <h1 className="text-4xl font-bold ml-5">Featured Items</h1>
          <p className="mt-3 ml-2 font-semibold">show all</p>
          <FaLongArrowAltRight className="text-xl mt-4 ml-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4">
          {items.map((e, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <div className="relative w-full h-96">
                <img
                  src={e.image}
                  alt={`item ${i + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />

                <img
                  src={e.hoverImage}
                  alt={`item-hover ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 text-center">
                  {e.text1}
                </h2>
                <p className="text-sm text-center font-semibold">{e.text2}</p>
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
      </div>
    </div>
  );
};

export default Home;
