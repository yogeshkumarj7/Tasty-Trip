import { CDN_URL } from "../utils/constants";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="card w-[240px] rounded-md shadow-[inset_-1px_5px_10px_5px_rgba(112,112,112,0.2)] p-2.5 m-5 cursor-pointer hover:scale-105 transition-transform">
      <img
        className="w-full rounded-[20px] "
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold text-ellipsis">{name}</h3>
      <h5 className="font-light whitespace-nowrap overflow-hidden text-ellipsis">
        {cuisines.join(",")}
      </h5>
      <h5 className="font-light whitespace-nowrap overflow-hidden text-ellipsis">
        {areaName}
      </h5>
      <span className="text-center justify-between mt-2 flex ">
        <h4
          className={`
        ${avgRatingString < 4 ? "bg-red-500" : "bg-green-500"}
        p-2 rounded-md flex items-center
      `}
        >
          {avgRatingString}
          <FontAwesomeIcon
            icon={faStar}
            className="ml-1 text-xs pt-0.5 pr-1.25 pb-0.75 pl-0"
          />
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
