import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="Search"></div>
      <div className="res-list">
        {resObj.map((Restaurant) => (
          <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
