import React, { useState } from "react";
// import { RES_API_URL } from "../utils/constants";
import { useEffect } from "react";
import { Loading } from "./Loading";
import { RES_API_URL_1 } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(RES_API_URL_1 + resId);
    const jsonData = await data.json();
    setMenuData(jsonData.data);
    // console.log(jsonData.data.cards);
  };

  const { name, cuisines, id, costForTwo } =
    menuData?.cards[2]?.card?.card?.info || {};

  // const { itemCards } =
  //   menuData?.cards[1].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  //     .categories[] || {};

  // console.log(
  //   menuData?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[6].card.card
  //     .categories[0]
  // Loading for the length 0
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
