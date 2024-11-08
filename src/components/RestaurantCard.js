import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="card">
      <img className="food-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <p>{cuisines.join(",")}</p>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
