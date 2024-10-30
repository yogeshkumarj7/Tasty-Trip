import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [resList, setresList] = useState(resObj);
  // console.log(resList);

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
            // console.log(resList);
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
