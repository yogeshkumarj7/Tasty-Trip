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

  const { name, cuisines, id, costForTwo } =
    menuData?.cards[2]?.card?.card?.info || {};
  // const { groupcard } = menuData?.cards[5]?.card?.card?.info || {};
  // console.log(menuData?.cards[5].groupedCard?.cardGroupMap?.REGULAR?.cards);

  const filterCategories =
    menuData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(filterCategories);

  if (menuData == null) {
    return <Loading />;
  }
  return (
    <div className=" text-center">
      <h1 className="font-bold  ">{name}</h1>
      <p>{cuisines.join(" ,")}</p>
      {/* Categories Accordions */}
      {filterCategories.map((category, key) => (
        <RestaurantCategory data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
