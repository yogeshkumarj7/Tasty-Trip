import React, { useState } from "react";
// import { RES_API_URL } from "../utils/constants";
import { useEffect } from "react";
import { Loading } from "./Loading";
import { RES_API_URL_1 } from "../utils/constants";
import { useParams } from "react-router-dom";
import useMenuData from "../utils/useMenuData";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useMenuData(resId);
  const [indextoShow, setindextoShow] = useState(0);
  const { name, cuisines, id, costForTwo } =
    menuData?.cards[2]?.card?.card?.info || {};
  const filterCategories =
    menuData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //4  5
  console.log(filterCategories);

  if (menuData == null) {
    return <Loading />;
  }
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-2  ">{name}</h1>
      <p className="text-gray-600 mb-6">{cuisines.join(" ,")}</p>
      {/* Categories Accordions */}
      <div className="space-y-6">
        {filterCategories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showResCategory={index === indextoShow ? true : false}
            setindextoShow={() => setindextoShow(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
