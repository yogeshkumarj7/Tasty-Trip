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
    // console.log(jsonData?.data);

    setresList(
      jsonData?.data?.cards[4].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchedResList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(resList);
    //4
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Please Check your Internet Connection</h1>;
  }
  return resList.length === 0 ? (
    <Loading />
  ) : (
    <div className="body-container">
      {/* Filter and search box */}
      <div className="my-[110px] mx-auto mb-[20px] flex justify-center items-center w-full">
        <input
          type="search-inp"
          className="w-[30rem] box-border rounded-l-md bg-white shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] p-[8px_15px_8px_12px] border border-[#aabcca] border-r-0 text-[var(--text-color)] outline-none text-lg font-medium"
          placeholder="Enter the Restaurant name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          className="search-btn rounded-r-md bg-black shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] text-white p-[12px_22px] -ml-[4px] cursor-pointer border-0 outline-none "
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

        {/* Top Restaurant Filter Button */}
        <button
          className="filter-btn ml-2 rounded-md bg-black shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] text-white p-[12px_22px] -ml-[4px] cursor-pointer border-0 outline-none"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setSearchedResList(filteredList);
          }}
        >
          Top
        </button>
      </div>

      {/* Restaurant List */}
      <div className="flex flex-wrap items-center justify-center self-stretch  p-6 m-4 border-2 border-black-300 rounded-lg">
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
