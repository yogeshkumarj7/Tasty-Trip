import React, { useState, useEffect } from "react";
import { GITHUB_USER_API } from "../utils/constants";
import { useSelector } from "react-redux";

const User = () => {
  const [userData, setUserData] = useState({});
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    fetchGithubData();
  }, []);

  const fetchGithubData = async () => {
    try {
      const data = await fetch(GITHUB_USER_API);
      const json = await data.json();
      setUserData(json);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  const { name, location, avatar_url } = userData;

  return (
    <div
      className={`p-6 rounded-lg shadow-md text-center transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      {avatar_url && (
        <img
          className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-2 border-amber-400"
          src={avatar_url}
          alt={name}
        />
      )}
      <h3
        className={`text-xl font-bold mb-2 ${
          isDarkMode ? "text-amber-400" : "text-teal-700"
        }`}
      >
        {name}
      </h3>
      <p className={`mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
        {location}
      </p>
    </div>
  );
};

export default User;
