import React from "react";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  const { title, itemCards } = data;
  console.log(itemCards);
  return (
    <div className="">
      {/* Header */}
      <div className="my-3">
        <span>{title}</span>
        <span>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>
    </div>
  );
};

export default RestaurantCategory;
