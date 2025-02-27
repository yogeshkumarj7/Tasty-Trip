import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrementItem, removeItem } from "../utils/cartSlice";

const CartItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id || Math.random()}
          className={`flex items-center justify-between p-4 border-b ${
            isDarkMode 
              ? 'border-gray-700 bg-gray-800'
              : 'border-gray-200 bg-white'
          } transition-colors duration-300`}
        >
          <div className="flex items-center space-x-4">
            {item?.card?.info?.imageId ? (
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fit/${item.card.info.imageId}`}
                alt={item?.card?.info?.name || "Food item"}
                className="w-20 h-20 object-cover rounded-lg"
              />
            ) : (
              <div className={`w-20 h-20 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
              } flex items-center justify-center transition-colors duration-300`}>
                <span className={`${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  No image
                </span>
              </div>
            )}

            <div>
              <h3 className={`font-bold text-lg ${
                isDarkMode ? 'text-gray-100' : 'text-gray-800'
              } transition-colors duration-300`}>
                {item?.card?.info?.name || "Untitled Item"}
              </h3>
              <p className={`${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              } font-semibold transition-colors duration-300`}>
                ₹{(item.card.info.price / 100).toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => dispatch(decrementItem(item.card.info.id))}
              className={`${
                isDarkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } px-2 py-1 rounded-full transition-colors duration-300`}
            >
              -
            </button>
            <span className={`font-bold ${
              isDarkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
              {item.quantity || 1}
            </span>
            <button
              onClick={() => dispatch(addItem(item))}
              className={`${
                isDarkMode 
                  ? 'bg-amber-600 hover:bg-amber-700'
                  : 'bg-amber-500 hover:bg-amber-600'
              } text-white px-2 py-1 rounded-full transition-colors duration-300`}
            >
              +
            </button>
            <button
              onClick={() => dispatch(removeItem(item.card.info.id))}
              className={`${
                isDarkMode ? 'text-red-400' : 'text-red-500'
              } ml-2 hover:opacity-80 transition-colors duration-300`}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemsList;