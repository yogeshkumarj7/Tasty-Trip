import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRatingString,
  } = resData?.info;
  return (
    <div className="card w-[240px] rounded-md shadow-[inset_-1px_5px_10px_5px_rgba(112,112,112,0.2)] p-2.5 m-5 cursor-pointer">
      <img className="" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
