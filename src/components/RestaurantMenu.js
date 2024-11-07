import React, { useState } from "react";
import { RES_API_URL } from "../utils/constants";
import { useEffect } from "react";
import { Loading } from "./Loading";
const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(RES_API_URL);
    const jsonData = await data.json();
    console.log(jsonData);
    setMenuData(jsonData);
  };

  //   const {} =
  //     menuData?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants[0].info;
  //   console.log(
  //     menuData?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants[0].info.name
  //   );

  //   console.log(
  //     menuData?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants[0].info.cuisines
  //   );

  const restaurant =
    menuData?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
      ?.restaurants[0]?.info;

  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    restaurant || {};
  return menuData === null ? (
    <Loading />
  ) : (
    <div>
      <h1>{name || "Restaurant name"}</h1>
      <p>{cuisines.join(",")}</p>
      <h3>Menu</h3>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
