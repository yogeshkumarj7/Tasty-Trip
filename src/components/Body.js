import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RES_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [searchedResList, setSearchedResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [uniqueCuisines, setUniqueCuisines] = useState([]);

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

      setresList(restaurants);
      setSearchedResList(restaurants);

      // Extract unique cuisines
      const cuisines = [
        ...new Set(
          restaurants
            .flatMap((res) => res.info.cuisines || [])
            .filter((cuisine) => cuisine)
        ),
      ].sort();
      setUniqueCuisines(cuisines);
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

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
    applyFilters(searchValue, cuisineFilter);
  };

  const handleCuisineFilter = (e) => {
    const selectedCuisine = e.target.value;
    setCuisineFilter(selectedCuisine);
    applyFilters(searchText, selectedCuisine);
  };

  const applyFilters = (search, cuisine) => {
    let filteredList = resList;

    // Apply search filter
    if (search) {
      filteredList = filteredList.filter((res) =>
        res.info.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply cuisine filter
    if (cuisine) {
      filteredList = filteredList.filter((res) =>
        res.info.cuisines.includes(cuisine)
      );
    }

    setSearchedResList(filteredList);
  };

  const handleSort = (option) => {
    setSortOption(option);
    let sortedList = [...searchedResList];

    switch (option) {
      case "name-asc":
        sortedList.sort((a, b) => a.info.name.localeCompare(b.info.name));
        break;
      case "name-desc":
        sortedList.sort((a, b) => b.info.name.localeCompare(a.info.name));
        break;
      case "price-low":
        sortedList.sort((a, b) => {
          const priceA = a.info.costForTwo
            ? parseInt(a.info.costForTwo.replace(/[^\d]/g, ""))
            : 0;
          const priceB = b.info.costForTwo
            ? parseInt(b.info.costForTwo.replace(/[^\d]/g, ""))
            : 0;
          return priceA - priceB;
        });
        break;
      case "price-high":
        sortedList.sort((a, b) => {
          const priceA = a.info.costForTwo
            ? parseInt(a.info.costForTwo.replace(/[^\d]/g, ""))
            : 0;
          const priceB = b.info.costForTwo
            ? parseInt(b.info.costForTwo.replace(/[^\d]/g, ""))
            : 0;
          return priceB - priceA;
        });
        break;
      case "rating-low":
        sortedList.sort(
          (a, b) =>
            parseFloat(a.info.avgRatingString) -
            parseFloat(b.info.avgRatingString)
        );
        break;
      case "rating-high":
        sortedList.sort(
          (a, b) =>
            parseFloat(b.info.avgRatingString) -
            parseFloat(a.info.avgRatingString)
        );
        break;
      default:
        sortedList = [...resList];
    }

    setSearchedResList(sortedList);
  };

  const handleReset = () => {
    setSearchedResList(resList);
    setSearchText("");
    setSortOption("");
    setCuisineFilter("");
  };

  return resList.length === 0 ? (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-pulse text-xl text-gray-600">Loading...</div>
    </div>
  ) : (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-6 bg-white shadow-md rounded-lg p-4">
        <div className="flex flex-wrap items-center space-x-4 space-y-2">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={handleSearch}
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
          />
          <select
            value={cuisineFilter}
            onChange={handleCuisineFilter}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
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
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
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
        <div className="text-right text-sm text-gray-500 mt-2">
          {searchedResList.length} restaurants found
        </div>
      </div>

      {searchedResList.length === 0 ? (
        <div className="text-center bg-white shadow-md rounded-lg p-8">
          <p className="text-2xl text-gray-700">No Restaurants Found 🍽️</p>
          <p className="text-gray-500 mt-2">Try a different search or filter</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchedResList.map((restaurant) => (
            <div
              key={restaurant.info.id}
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <RestaurantCard resData={restaurant} /> 
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
