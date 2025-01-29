import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RestaurantCard from "./RestaurantCard";
import { RES_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantFilters from "../utils/useRestaurantFilters";

const Body = () => {
  const [resList, setResList] = useState([]);
  const {
    searchedResList,
    searchText,
    sortOption,
    cuisineFilter,
    uniqueCuisines,
    handleSearch,
    handleCuisineFilter,
    handleSort,
    handleReset,
  } = useRestaurantFilters(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_API_URL);
      const jsonData = await data.json();

      const restaurants =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setResList(restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <p className="text-2xl text-gray-700">🌐 No Internet Connection</p>
          <p className="text-gray-500 mt-2">Please check your network</p>
        </div>
      </div>
    );
  }

  return resList.length === 0 ? (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-pulse text-xl text-gray-600">Loading...</div>
    </div>
  ) : (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-6 bg-white shadow-md rounded-lg p-4 mt-5">
        <div className="flex flex-wrap items-center justify-between space-x-4 space-y-2">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={handleSearch}
            className="flex-grow px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
          />

          <div className="flex items-center space-x-4">
            <select
              value={cuisineFilter}
              onChange={handleCuisineFilter}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 w-full sm:w-auto"
            >
              <option value="">All Cuisines</option>
              {uniqueCuisines.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>

            <select
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 w-full sm:w-auto"
            >
              <option value="">Sort By</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating-low">Rating: Low to High</option>
              <option value="rating-high">Rating: High to Low</option>
            </select>

            {(searchText || sortOption || cuisineFilter) && (
              <button
                onClick={handleReset}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {searchedResList.length === 0 ? (
        <div className="text-center bg-white shadow-md rounded-lg p-8">
          <p className="text-2xl text-gray-700">No Restaurants Found 🍽️</p>
          <p className="text-gray-500 mt-2">Try a different search or filter</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {searchedResList.map((Restaurant) => (
            <motion.div
              key={Restaurant.info.id}
              className="transform transition-transform duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={"/restaurant/" + Restaurant.info.id}>
                <RestaurantCard resData={Restaurant} />
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
