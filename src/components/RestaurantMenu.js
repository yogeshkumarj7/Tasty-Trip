import React, { useState } from "react";
// import { RES_API_URL } from "../utils/constants";
import { useEffect } from "react";
import { Loading } from "./Loading";
import { RES_API_URL_1 } from "../utils/constants";
import { useParams } from "react-router-dom";
import useMenuData from "../utils/useMenuData";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useMenuData(resId);

  const { name, cuisines, id, costForTwo } =
    menuData?.cards[2]?.card?.card?.info || {};
  if (menuData == null) {
    return <Loading />;
  }
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(" ,")}</p>
      <h3>{costForTwo}</h3>
      <h2>Menu</h2>
      {/* <ul>
        {itemCards.slice(0, 10).map((resName, index) => (
          <li key={resName.card.info.id}>
            {resName.card.info.name}-{"Rs "}
            {resName.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
