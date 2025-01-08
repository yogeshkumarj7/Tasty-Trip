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
    <div className="card w-[240px] h-[295px] flex flex-col rounded-lg shadow-xl bg-white p-2.5 m-5 cursor-pointer hover:scale-105 transition-transform relative">
      {/* Top-right rating badge */}
      <div
        className={`absolute right-2.7 px-2 py-0.5 rounded-tl-lg  text-sm font-medium flex items-center shadow-md ${
          avgRatingString < 4
            ? "bg-red-600 text-white"
            : "bg-green-600 text-white"
        }`}
      >
        {avgRatingString}
        <FontAwesomeIcon icon={faStar} className="ml-1.5 text-xs" />
      </div>

      {/* Image */}
      <img
        className="w-full h-[150px] object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      {/* Details */}
      <div className="mt-2 flex flex-col flex-grow">
        <h3 className="font-bold text-lg whitespace-nowrap overflow-hidden">
          {name}
        </h3>
        <h5 className="font-light whitespace-nowrap overflow-hidden text-ellipsis text-sm text-gray-800 mt-0.5">
          {cuisines.join(", ")}
        </h5>
        <h5 className="font- text-sm whitespace-nowrap overflow-hidden text-ellipsis mt-2 flex items-center">
          {areaName}
        </h5>

        {/* Location and Cost Icons */}
        <div className="flex items-center justify-between mt-4 space-x-1">
          <div className="flex items-center space-x-1 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 mr-1 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 9c0 7.5-7.5 12-7.5 12S4.5 16.5 4.5 9a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="text-sm">
              {sla?.lastMileTravelString ?? "2.0 km"}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.172-.879-1.172-2.303 0-3.182s3.071-.879 4.243 0l.879.659V6l-3-3-3 3v2.818z"
              />
            </svg>
            <span className="text-sm">{costForTwo ?? "₹200 for two"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
