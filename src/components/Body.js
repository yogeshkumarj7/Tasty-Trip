import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RestaurantCard from "./RestaurantCard";
import { RES_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantFilters from "../utils/useRestaurantFilters";
import { useDispatch, useSelector } from "react-redux";
import { showLoader, hideLoader } from "../utils/loaderSlice";
import Loader from "../utils/Loader";

const Body = () => {
  const [resList, setResList] = useState([]);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
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

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loader.isLoading);
  
  useEffect(() => {
    dispatch(showLoader());
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
    } finally {
      dispatch(hideLoader());
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div className={`flex justify-center items-center min-h-screen w-full ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}>
        <div className={`text-center p-8 rounded-lg shadow-md ${
          isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'
        }`}>
          <p className="text-2xl">🌐 No Internet Connection</p>
          <p className={`mt-2 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>Please check your network</p>
        </div>
      </div>
    );
  }

  return isLoading ? (
    <div className={`flex justify-center items-center min-h-screen w-full ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Loader />
    </div>
  ) : (
    <div className={`min-h-screen w-full transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className={`mb-6 shadow-md rounded-lg p-4 mt-5 transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={handleSearch}
              className={`flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />

            <div className="flex flex-wrap items-center gap-4">
              <select
                value={cuisineFilter}
                onChange={handleCuisineFilter}
                className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 w-full sm:w-auto ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-gray-200' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
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
                className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 w-full sm:w-auto ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-gray-200' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
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
        <div className="flex flex-wrap justify-center gap-6">
          {searchedResList.map((Restaurant) => (
            <motion.div
              key={Restaurant.info.id}
              className={`transform transition-all duration-300 ${
                isDarkMode ? 'hover:shadow-amber-400/20' : 'hover:shadow-amber-400/40'
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={"/restaurant/" + Restaurant.info.id}>
                <RestaurantCard resData={Restaurant} isDarkMode={isDarkMode} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;