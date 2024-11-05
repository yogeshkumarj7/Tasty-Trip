import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RES_API_URL } from "../utils/constants";
import { Loading } from "./Loading";
const Body = () => {
  const [resList, setresList] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API_URL);
    const jsonData = await data.json();
    console.log(jsonData);

    setresList(
      jsonData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(resList[2].info.name);
  };

  return resList.length === 0 ? (
    <Loading />
  ) : (
    <div className="body">
      {/* Filter and search box */}
      <div className="filter">
        <div className="search-res">
          <input
            type="search-inp"
            placeholder="Enter the Restaurant name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="search-btn"
            onClick={() => {
              const searchedRes = resList.filter((res) =>
                res.info.name.includes(searchText)
              );
              setresList(searchedRes);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Restaurant Filter Button */}
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

      {/* Restaurant List */}
      <div className="res-list">
        {resList.map((Restaurant) => (
          <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
