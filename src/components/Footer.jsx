import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";

import { CiLocationOn } from "react-icons/ci";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white py-10 cursor-default shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex md:justify-between sm:grid sm:grid-cols-2 sm:justify-center items-center my-10">
        <div className="space-y-5 py-5 border-b md:border-b-0">
          <h1 className="text-3xl font-bold cursor-pointer">Travelone</h1>
          <div className="flex space-x-5">
            <AiFillFacebook size={"1.5rem"} className="cursor-pointer hover:text-yellow-300" />
            <AiFillInstagram size={"1.5rem"} className="cursor-pointer hover:text-yellow-300" />
            <AiFillTwitterSquare size={"1.5rem"} className="cursor-pointer hover:text-yellow-300" />
            <AiOutlineWhatsApp size={"1.5rem"} className="cursor-pointer hover:text-yellow-300" />
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone />
            <p>(898)-645-434</p>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineMessage />
            <p>(898)-645-434</p>
          </div>
          <div className="flex items-center space-x-2">
            <CiLocationOn />
            <p>(898)-645-434</p>
          </div>
          <div className="flex items-center space-x-2">
            <TfiAlarmClock />
            <p>(898)-645-434</p>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-yellow-300">Travel</h1>
          <a className="text-xs text-white/80 hover:text-yellow-300" href="/">About Us</a>
          <a className="text-xs text-white/80 hover:text-yellow-300" href="/">Services</a>
          <a className="text-xs text-white/80 hover:text-yellow-300" href="/">Blog</a>
          <a className="text-xs text-white/80 hover:text-yellow-300" href="/">Contact Us</a>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-yellow-300">Account</h1>
          <a className="text-xs text-white/80 hover:text-yellow-300" href="/">Signup</a>
          <a className="text-xs text-white/80 hover:text-yellow-300" href="/">Login</a>
          <a className="text-xs text-white/80 hover:text-yellow-300" href="/">View Trips</a>
          <a className="text-xs text-white/80 hover:text-yellow-300" href="/">Contact</a>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-yellow-300">Download</h1>
          <p className="text-xs text-white/80">From App Store and Google Play</p>
          <button className="flex items-center space-x-4 text-left px-5 py-1 border border-yellow-300 rounded-md hover:bg-yellow-300 hover:text-black transition">
            <FaAppStore size={"1.5rem"} />
            <h1>
              <p className="text-xs font-bold">Open On</p>
              <span className="font-bold">App Store</span>
            </h1>
          </button>
          <button className="flex items-center space-x-4 text-left px-5 py-1 border border-yellow-300 rounded-md hover:bg-yellow-300 hover:text-black transition">
            <FaGooglePlay size={"1.5rem"} />
            <h1>
              <p className="text-xs font-bold">Open On</p>
              <span className="font-bold">Google Play</span>
            </h1>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
