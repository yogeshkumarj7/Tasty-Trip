import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMenuData from "../utils/useMenuData";
import RestaurantCategory from "./RestaurantCategory";
import { motion } from "framer-motion";
import Loader from "../utils/Loader";
import { useDispatch, useSelector } from "react-redux";
import { showLoader, hideLoader } from "../utils/loaderSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useMenuData(resId);
  const [indextoShow, setindextoShow] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loader.isLoading);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showLoader());

    if (menuData) {
      dispatch(hideLoader());
    }
  }, [menuData, dispatch]);

  if (isLoading || menuData == null) {
    return (
      <div
        className={`flex justify-center items-center h-screen ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <Loader />
      </div>
    );
  }

  const { name, cuisines } = menuData?.cards[2]?.card?.card?.info || {};

  const filterCategories =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
      ?.filter((category) => {
        const validItems = category.card.card.itemCards?.filter(
          (item) => item?.card?.info?.imageId && item?.card?.info?.description
        );
        return validItems.length > 0;
      });

  return (
    <motion.div
      className={`rounded-lg shadow-lg p-4 md:p-8 text-center min-h-screen relative transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className={`fixed left-4 font-bold px-4 rounded-full transition-all 
             duration-300 ease-in-out flex items-center space-x-2 z-50 ${
               isDarkMode
                 ? "text-amber-400 hover:text-amber-300"
                 : "text-teal-800 hover:text-teal-700"
             }`}
        onClick={() => navigate("/")}
      >
        <span className="text-2xl">←</span>
      </button>

      <h1
        className={`text-xl md:text-2xl font-bold mb-2 ${
          isDarkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        {name}
      </h1>
      <p className={`mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
        {cuisines?.join(" ,")}
      </p>

      <div className="space-y-6">
        {filterCategories?.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showResCategory={index === indextoShow}
            isOpen={index === indextoShow}
            setindextoShow={() =>
              setindextoShow(index === indextoShow ? null : index)
            }
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RestaurantMenu;
