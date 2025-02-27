import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "lucide-react";
import TRIP from "../../images/TRIP.png";
import LoginSignup from "./LoginSignup";
import { motion, AnimatePresence } from "framer-motion";
import { toggleTheme } from "../utils/themeSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const { isLoggedIn, username } = useSelector((state) => state.auth);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`sticky top-0 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } shadow-lg z-50 w-full h-24 flex items-center justify-center transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
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

        <div className="md:hidden flex items-center space-x-6">
          <button
            onClick={handleThemeToggle}
            className={`p-2 rounded-full ${
              isDarkMode ? "text-yellow-400" : "text-gray-600"
            } hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun size={24} className="transition-transform hover:rotate-12" />
            ) : (
              <Moon size={24} className="transition-transform hover:rotate-12" />
            )}
          </button>
          <AnimatePresence>
            {isLoggedIn && username && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`font-semibold text-sm ${
                  isDarkMode ? "text-teal-400" : "text-teal-600"
                }`}
              >
                Welcome, {username}
              </motion.div>
            )}
          </AnimatePresence>

          <Link
            to="/cart"
            className={`${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            } hover:text-teal-600 transition-colors duration-300 relative block group`}
          >
            <i className="fa-solid fa-cart-shopping text-2xl relative transition-transform duration-300 group-hover:scale-110">
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </i>
          </Link>

          <button
            onClick={toggleMenu}
            className={`text-2xl focus:outline-none z-50 relative ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <span className="text-3xl font-bold">&times;</span>
            ) : (
              <span className="text-3xl">&#9776;</span>
            )}
          </button>
        </div>
        <nav
          className={`
            fixed md:static
            top-0 left-0 right-0 bottom-0
            md:flex md:items-center
            ${isDarkMode ? "bg-gray-900" : "bg-white"} md:bg-transparent
            transform md:transform-none
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            md:translate-x-0
            flex items-center justify-center
            z-40
          `}
        >
          <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 items-center w-full md:w-auto h-full md:h-auto justify-center md:justify-end p-8 md:p-0 relative mr-5">
            {["Home", "About", "Contact"].map((item) => {
              const isActive =
                location.pathname ===
                (item === "Home" ? "/" : `/${item.toLowerCase()}`);

              return (
                <li key={item} className="nav-item">
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`${
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    } relative group font-semibold text-xl md:text-base transition-all duration-300 ease-in-out hover:text-teal-600
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

            <li className="hidden md:block">
              <button
                onClick={handleThemeToggle}
                className={`p-2 rounded-full ${
                  isDarkMode ? "text-yellow-400" : "text-gray-600"
                } hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300`}
                aria-label="Toggle Theme"
              >
                {isDarkMode ? (
                  <Sun size={20} className="transition-transform hover:rotate-12" />
                ) : (
                  <Moon
                    size={20}
                    className="transition-transform hover:rotate-12"
                  />
                )}
              </button>
            </li>
            <li className="nav-item relative md:ml-8 hidden md:block">
              <Link
                to="/cart"
                className={`${
                  isDarkMode ? "text-gray-200" : "text-gray-800"
                } hover:text-teal-600 transition-colors duration-300 relative block group`}
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
            <AnimatePresence>
              {isLoggedIn && username && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="hidden md:block"
                >
                  <span
                    className={`font-semibold ${
                      isDarkMode ? "text-teal-400" : "text-teal-600"
                    }`}
                  >
                    Welcome, {username}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            <LoginSignup />
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;