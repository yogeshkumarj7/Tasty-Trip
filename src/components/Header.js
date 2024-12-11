import { useState } from "react";
import TRIP from "../../images/TRIP.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import Login from "./Login";
const Header = () => {
  const onlineStstus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="sticky bg-white top-0 flex justify-between items-center w-full h-[80px]  rounded-[5px] shadow-[rgba(0,_0,_0,_0.61)_-2px_7px_5px_-6px] text-[var(--light-text-color)] font-bold  left-0 z-20 overflow-y-hidden">
      {/* Logo section */}
      <div className="logo-container">
        <Link to="/">
          <img
            className="logo w-32 h-auto object-contain"
            src={TRIP}
            alt="logo"
          />
        </Link>
      </div>
      {/* Navigation section */}
      <div className="list-none flex items-center justify-between mr-[30px] ">
        <ul className="flex gap-10 p-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li className="relative">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping text-xl"></i>
            </Link>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </li>
          <Link to="/login">
            <Login />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
