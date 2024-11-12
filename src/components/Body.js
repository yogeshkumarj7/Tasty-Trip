import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RES_API_URL } from "../utils/constants";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [resList, setresList] = useState([]);
  const [searchedResList, setSearchedResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_API_URL);
    const jsonData = await data.json();
    console.log(jsonData);

    setresList(
      jsonData?.data?.cards[4].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchedResList(
      jsonData?.data?.cards[4].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Please Check your Internet Connection</h1>;
  }
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
              const searchedRes = resList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setSearchedResList(searchedRes);
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
            setSearchedResList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      {/* Restaurant List */}
      <div className="res-list">
        {searchedResList.map((Restaurant) => (
          <Link
            to={"/restaurant/" + Restaurant.info.id}
            key={Restaurant.info.id}
          >
            <RestaurantCard resData={Restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
