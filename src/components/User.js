import React, { useState, useEffect } from "react";
import { GITHUB_USER_API } from "../utils/constants";

const User = () => {
  const [userData, setUserData] = useState({});

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
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {avatar_url && (
        <img
          className="w-20 h-20 mx-auto rounded-full object-cover mb-4 "
          src={avatar_url}
          alt={name}
        />
      )}
      <h3 className="text-xl font-bold text-teal-700 mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{location}</p>
    </div>
  );
};

export default User;
