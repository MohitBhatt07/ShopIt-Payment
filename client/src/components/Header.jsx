import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartImg} from "../assets/index";
import logo from '../assets/shopitlogo2.png'
import Profile from "./Profile";
const Header = () => {
  const productData = useSelector((state) => state.shopit.productData);

  return (
    <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img src={logo} className="w-28 h-14 rounded-xl" alt=""/>
           
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex item-center gap-8">
            <Link to="/" className="max-[464px]:hidden">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            
            <Link to="/shop" className="max-[464px]:hidden">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            </Link>
           
          </ul>
          <Link to="/cart">
            <div className="relative h-fit rounded-xl bg-green-300 p-2">
              <img className="w-6" src={cartImg} alt="cartImg" />
              <span className="bg-red-500 rounded-xl p-1 absolute w-4 h-4 text-white top-[-5px] right-[-5px] text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>        
        <Profile/>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
