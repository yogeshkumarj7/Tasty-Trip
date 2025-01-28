import { useState, useEffect } from "react";

const useRestaurantFilters = (initialRestaurants = []) => {
  const [resList, setResList] = useState(initialRestaurants);
  const [searchedResList, setSearchedResList] = useState(initialRestaurants);
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [uniqueCuisines, setUniqueCuisines] = useState([]);

  useEffect(() => {
    if (initialRestaurants.length > 0) {
      // Extract unique cuisines when restaurants data changes
      const cuisines = [
        ...new Set(
          initialRestaurants
            .flatMap((res) => res.info.cuisines || [])
            .filter((cuisine) => cuisine)
        ),
      ].sort();
      setUniqueCuisines(cuisines);
      setResList(initialRestaurants);
      setSearchedResList(initialRestaurants);
    }
  }, [initialRestaurants]);

  const applyFilters = (search, cuisine) => {
    let filteredList = resList;

    if (search) {
      filteredList = filteredList.filter((res) =>
        res.info.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (cuisine) {
      filteredList = filteredList.filter((res) =>
        res.info.cuisines.includes(cuisine)
      );
    }

    setSearchedResList(filteredList);
  };

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

  return {
    searchedResList,
    searchText,
    sortOption,
    cuisineFilter,
    uniqueCuisines,
    handleSearch,
    handleCuisineFilter,
    handleSort,
    handleReset,
  };
};

export default useRestaurantFilters;
