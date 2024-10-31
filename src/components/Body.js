import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RES_API_URL } from "../utils/constants";
const Body = () => {
  const [resList, setresList] = useState([]);
  // console.log(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API_URL);
    const jsonData = await data.json();
    console.log(jsonData);
    setresList(
      jsonData.data.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (resList.length === 0) {
    return <h1>Loading......</h1>;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setresList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-list">
        {resList.map((Restaurant) => (
          <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
