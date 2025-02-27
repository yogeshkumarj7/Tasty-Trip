import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { toast } from "react-hot-toast";

const CategoryList = ({ items }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const validItems = items.filter(
    (item) => item?.card?.info?.imageId && item?.card?.info?.description
  );

  if (!Array.isArray(validItems) || validItems.length === 0) {
    return null;
  }

  const handleAddItems = (item) => {
    if (!isLoggedIn) {
      toast.error("Please login to add items to cart");
      return;
    }
    dispatch(addItem(item));
    toast.success("Item added to cart");
  };

  return (
    <div className="space-y-4 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto px-4 md:px-0">
      {validItems.map((item) => (
        <div
          key={item?.card?.info?.id || Math.random()}
          className={`border rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col md:flex-row ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex-1 flex flex-col justify-start text-left pr-4 mb-4 md:mb-0">
            <div className="flex justify-between items-start mb-2">
              <span className={`font-bold text-lg md:text-xl ${
                isDarkMode ? 'text-gray-100' : 'text-gray-800'
              }`}>
                {item?.card?.info?.name || "Untitled Item"}
              </span>

              {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                <div className={`flex items-center ${
                  isDarkMode ? 'bg-green-900' : 'bg-green-50'
                } px-2 py-1 rounded-md`}>
                  <span className={`${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  } font-semibold mr-1`}>
                    {item.card.info.ratings.aggregatedRating.rating}
                  </span>
                  <span className="text-yellow-500">★</span>
                </div>
              )}
            </div>

            {item?.card?.info?.price && (
              <span className={`${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              } text-base md:text-lg mb-2 font-bold`}>
                ₹{item.card.info.price / 100}
              </span>
            )}

            {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 && (
              <span className={`${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              } text-sm mb-2`}>
                {item.card.info.ratings.aggregatedRating.ratingCountV2} ratings
              </span>
            )}

            <p className={`${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            } text-sm line-clamp-2`}>
              {item?.card?.info?.description}
            </p>
          </div>

          <div className="w-full md:w-40 h-40 relative">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
              alt={item?.card?.info?.name || "Food item"}
              className="w-full h-full rounded-lg object-cover shadow-md"
            />

            <button
              className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 
                ${isDarkMode 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-green-500 hover:bg-green-600'
                } text-white px-6 py-1 
                rounded-xl text-sm font-bold 
                transition-colors duration-300
                shadow-md focus:outline-none active:scale-95`}
              onClick={() => handleAddItems(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;