import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#ffe26e] pt-12">
      <div className=" flex justify-around max-w-7xl mx-auto px-4  gap-8 space-x-20">
        <div>
          <h4 className=" font-bold mb-4 text-2xl">Help</h4>
          <ul className="space-y-2 font-semibold">
            <li>
              <a href="#" className="">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="">
                Refund
              </a>
            </li>
            <li>
              <a href="#" className="">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="">
                Accessbillity
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className=" font-bold mb-4 text-2xl">Contact Us</h4>
          <ul className="space-y-2 font-semibold">
            <li>
              <a href="#" className="">
                +71 64586435986
              </a>
            </li>
            <li>
              <a href="#" className="">
                Shop.ecom@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="">
                Addis Ababa , London
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-2xl">Follow Us</h4>
          <div className="flex space-x-4 font-semibold">
            <FaFacebookF className="w-5 h-5 " />
            <FaTwitter className="w-5 h-5 " />
            <FaInstagram className="w-6 h-6 " />
            <FaYoutube className="w-6 h-6 " />
          </div>
        </div>
      </div>

      <div className="bg-black text-[#ffe26e] text-center w-full mt-5">
  <div className="max-w-7xl  px-4 py- flex flex-row items-center justify-center ">
    <span>
      © {new Date().getFullYear()} ShemaShop. All rights reserved.|| 
    </span>
    <div className="flex justify-center gap-4">
      <a href="#" className="hover:underline">Privacy</a>
      <a href="#" className="hover:underline">Terms</a>
      <a href="#" className="hover:underline">Security</a>
      <a href="#" className="hover:underline">Sitemap</a>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
