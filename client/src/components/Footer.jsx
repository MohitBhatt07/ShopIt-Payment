import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { paymentLogo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-violet-700 text-black py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 grid-rows-2 md:grid-cols-4 max-sm:grid-cols-1 gap-4">
        
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Connect</h2>
          <div className="text-base flex flex-col gap-2">
            <p>xyz </p>
            <p>Mobile: 414352626</p>
            <p>Phone: 214125 1241</p>
            <p>e-mail: shopIt@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center text-black gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 text-black hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 text-black hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 text-black hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Connect</h2>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm rounded-t-lg"
            type="text"
            placeholder="e-mail"
          />
          <button className="text-sm border text-white border-t-0 rounded-b-lg hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
        </div>
        <div className="flex flex-col gap-7">
          
          <p className="text-white text-sm tracking-wide">© SHOPIT.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
