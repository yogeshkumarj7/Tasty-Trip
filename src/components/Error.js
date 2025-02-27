import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouteError, useNavigate } from "react-router-dom";
import { RefreshCw } from "lucide-react";
import { useSelector } from "react-redux";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const reduxDarkMode = useSelector((state) => state?.theme?.isDarkMode);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (reduxDarkMode !== undefined) {
      return reduxDarkMode;
    }
    const savedTheme = localStorage.getItem("isDarkMode");
    return savedTheme === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen w-full ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-6xl font-bold ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Oops!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl mt-2 text-gray-400"
      >
        {error.status}: {error.statusText}
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        className="mt-6 p-4 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-all"
        onClick={() => navigate("/")}
      >
        <RefreshCw className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default Error;
