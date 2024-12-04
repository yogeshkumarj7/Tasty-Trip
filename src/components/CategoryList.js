import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CategoryList = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        <div className="text-center">No items available</div>
      </div>
    );
  }

  const dispatch = useDispatch(addItem());

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-4 w-6/12 mx-auto">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id || Math.random()}
          className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out flex bg-white"
        >
          {/* Leftmost: Content Section */}
          <div className="flex-1 flex flex-col justify-start text-left pr-4">
            {/* Name */}
            <span className="font-bold text-xl mb-2 text-gray-800">
              {item?.card?.info?.name || "Untitled Item"}
            </span>

            {/* Price */}
            {item?.card?.info?.price && (
              <span className="text-green-600 text-lg mb-2 font-bold">
                ₹{item.card.info.price / 100}
              </span>
            )}

            {/* Ratings and Count */}
            {item?.card?.info?.ratings?.aggregatedRating?.rating && (
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-semibold mr-2">
                  {item.card.info.ratings.aggregatedRating.rating} ★
                </span>
                <span className="text-gray-500 text-sm">
                  (
                  {item.card.info.ratings.aggregatedRating.ratingCountV2 || "0"}{" "}
                  ratings)
                </span>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-600 text-sm line-clamp-2">
              {item?.card?.info?.description}
            </p>
          </div>

          {/* Right: Image Section */}
          <div className="w-40 h-40 relative flex-shrink-0">
            {item?.card?.info?.imageId ? (
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                alt={item?.card?.info?.name || "Food item"}
                className="w-full h-full rounded-lg object-cover shadow-md"
              />
            ) : (
              <div className="w-full h-full rounded-lg bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}

            {/* Cart Button Overlay */}
            <button
              className="absolute font-bold bottom-2 left-1/2 transform -translate-x-1/2
                        bg-green-500 text-white p-10 py-1
                        rounded-xl text-sm
                        hover:bg-green-600 transition-colors
                        shadow-md focus:outline-none"
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
