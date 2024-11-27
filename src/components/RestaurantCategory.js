import React, { useState } from "react";
import CategoryList from "./CategoryList";
const RestaurantCategory = ({ data }) => {
  const [showResCategory, setShowResCategory] = useState(false);
  const handleClickList = () => {
    setShowResCategory(!showResCategory);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto rounded-lg bg-emerald-500 my-3 flex p-4 cursor-pointer">
        <div
          className="flex justify-between w-full items-center"
          onClick={handleClickList}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
      </div>
      {showResCategory && <CategoryList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
