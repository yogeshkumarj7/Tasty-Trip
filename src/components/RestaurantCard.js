import { CDN_URL } from "../utils/constants";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const RestaurantCard = (props) => {
  const { resData, isDarkMode } = props;
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
    <motion.div
      className={`card w-[240px] h-[295px] flex flex-col rounded-lg shadow-xl p-2.5 m-5 cursor-pointer transition-transform relative ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute top-2.4 right-2.5">
        <div
          className={`px-2 rounded-md py-0.5 text-sm font-medium shadow-md flex items-center ${
            avgRatingString < 4
              ? "bg-red-600 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          {avgRatingString}
          <FontAwesomeIcon icon={faStar} className="ml-1.5 text-xs" />
        </div>
      </div>
      <motion.img
        className="w-full h-[150px] object-cover rounded-lg transition-transform duration-300 ease-in-out"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        whileHover={{ scale: 1.05 }}
      />
      <div className="mt-2 flex flex-col flex-grow">
        <h3
          className={`font-bold text-base whitespace-nowrap overflow-hidden ${
            isDarkMode ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {name.length > 23 ? `${name.substring(0, 24)}...` : name}
        </h3>
        <h5
          className={`font-light whitespace-nowrap overflow-hidden text-ellipsis text-xs mt-1.5 ${
            isDarkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          {cuisines.join(", ")}
        </h5>
        <h5
          className={`text-xs whitespace-nowrap overflow-hidden text-ellipsis mt-2 flex items-center ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {areaName}
        </h5>
        <div className="flex items-center justify-between mt-4 space-x-1">
          <div
            className={`flex items-center space-x-1 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 mr-1"
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
          <div
            className={`flex items-center space-x-1 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
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
    </motion.div>
  );
};

export default RestaurantCard;
