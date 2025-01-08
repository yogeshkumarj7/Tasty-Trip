import React from "react";
import { useDispatch } from "react-redux";
import { addItem,decrementItem, removeItem } from "../utils/cartSlice";

const CartItemsList = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id || Math.random()}
          className="flex items-center justify-between p-4 border-b border-gray-200"
        >
          <div className="flex items-center space-x-4">
            {item?.card?.info?.imageId ? (
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fit/${item.card.info.imageId}`}
                alt={item?.card?.info?.name || "Food item"}
                className="w-20 h-20 object-cover rounded-lg"
              />
            ) : (
              <div className="w-20 h-20 rounded-lg bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}

            <div>
              <h3 className="font-bold text-lg text-gray-800">
                {item?.card?.info?.name || "Untitled Item"}
              </h3>
              <p className="text-green-600 font-semibold">
                ₹{(item.card.info.price / 100).toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => dispatch(decrementItem(item.card.info.id))}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
            >
              -
            </button>
            <span className="font-bold">{item.quantity || 1}</span>
            <button
              onClick={() => dispatch(addItem(item))}
              className="bg-amber-500 text-white px-2 py-1 rounded-full"
            >
              +
            </button>
            <button
              onClick={() => dispatch(removeItem(item.card.info.id))}
              className="text-red-500 ml-2"
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
