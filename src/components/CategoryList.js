import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { motion } from "framer-motion";

const CategoryList = ({ items }) => {
  const validItems = items.filter(
    (item) => item?.card?.info?.imageId && item?.card?.info?.description
  );

  if (!Array.isArray(validItems) || validItems.length === 0) {
    return null;
  }

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <motion.div
      className="space-y-4 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto px-4 md:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {validItems.map((item) => (
        <motion.div
          key={item?.card?.info?.id || Math.random()}
          className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col md:flex-row bg-white"
          whileHover={{ scale: 1.02 }}
          layout
        >
          <div className="flex-1 flex flex-col justify-start text-left pr-4 mb-4 md:mb-0">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-lg md:text-xl text-gray-800">
                {item?.card?.info?.name || "Untitled Item"}
              </span>

              {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                <div className="flex items-center bg-green-50 px-2 py-1 rounded-md">
                  <span className="text-green-600 font-semibold mr-1">
                    {item.card.info.ratings.aggregatedRating.rating}
                  </span>
                  <span className="text-yellow-500">★</span>
                </div>
              )}
            </div>

            {item?.card?.info?.price && (
              <span className="text-green-600 text-base md:text-lg mb-2 font-bold">
                ₹{item.card.info.price / 100}
              </span>
            )}

            {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 && (
              <span className="text-gray-500 text-sm mb-2">
                {item.card.info.ratings.aggregatedRating.ratingCountV2} ratings
              </span>
            )}

            <p className="text-gray-600 text-sm line-clamp-2">
              {item?.card?.info?.description}
            </p>
          </div>

          <div className="w-full md:w-40 h-40 relative flex-shrink-0">
            <motion.img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
              alt={item?.card?.info?.name || "Food item"}
              className="w-full h-full rounded-lg object-cover shadow-md"
              whileHover={{ scale: 1.05 }}
            />

            <motion.button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2
                        bg-green-500 text-white px-6 py-1
                        rounded-xl text-sm font-bold
                        hover:bg-green-600 transition-colors
                        shadow-md focus:outline-none"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAddItems(item)}
            >
              Add
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CategoryList;
