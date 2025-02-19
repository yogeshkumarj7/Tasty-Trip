import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import TRIP from "../../images/TRIP.png";
import LoginSignup from "./LoginSignup";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const { isLoggedIn, username } = useSelector((state) => state.auth);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 bg-white shadow-lg z-50 w-full h-24 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo section */}
        <Link
          to="/"
          className="transition-transform duration-300 flex items-center"
        >
          <img
            className="logo ml-6 object-contain"
            src={TRIP}
            alt="logo"
            style={{
              maxWidth: "240px",
              maxHeight: "120px",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none z-50 relative"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <span className="text-3xl font-bold text-gray-700">&times;</span>
            ) : (
              <span className="text-3xl text-gray-700">&#9776;</span>
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`
            fixed md:static
            top-0 left-0 right-0 bottom-0
            md:flex md:items-center
            bg-white md:bg-transparent
            transform md:transform-none
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            md:translate-x-0
            flex items-center justify-center
            z-40
          `}
        >
          <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 items-center w-full md:w-auto h-full md:h-auto justify-center md:justify-end p-8 md:p-0 relative mr-5">
            
            {/* Navigation Items */}
            {["Home", "About", "Contact"].map((item) => {
              // CHANGE: Check if the current path matches the nav item
              const isActive = location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`);

              return (
                <li key={item} className="nav-item">
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`text-gray-800 relative group font-semibold text-xl md:text-base transition-all duration-300 ease-in-out hover:text-teal-600
                    ${isActive ? "text-teal-600 font-bold" : ""}`}
                  >
                    {item}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-teal-600 transition-all duration-300 ease-in-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`} 
                    ></span>
                  </Link>
                </li>
              );
            })}

            {/* Cart Icon */}
            <li className="nav-item relative md:ml-8">
              <Link
                to="/cart"
                className="text-gray-800 hover:text-teal-600 transition-colors duration-300 relative block group"
              >
                <i className="fa-solid fa-cart-shopping text-2xl md:text-xl relative transition-transform duration-300 group-hover:scale-110">
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </i>
              </Link>
            </li>

            {/* Welcome Message */}
            <AnimatePresence>
              {isLoggedIn && username && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="hidden md:block"
                >
                  <span className="text-teal-600 font-semibold">
                    Welcome, {username}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Login/Signup Button */}
            <LoginSignup />
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;
